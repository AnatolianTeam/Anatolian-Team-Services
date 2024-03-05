---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg
keywords: [selfchain, self, chain, kurulum, snapshot, statesync, güncelleme]
---

# Kurulum

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"
```

## Go Kurulumu
```shell
ver="1.21.5"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
rm -rf /usr/local/go
tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm -rf "go$ver.linux-amd64.tar.gz"
echo 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile
echo 'export GOPATH=$HOME/go' >> $HOME/.bash_profile
echo 'export GO111MODULE=on' >> $HOME/.bash_profile
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

## Değişkenleri Yükleme
Aşağıda değiştirmeniz gereken yerler belirtilmiştir.
* `$SELF_NODENAME` validator adınız
* `$SELF_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export SELF_NODENAME=$SELF_NODENAME"  >> $HOME/.bash_profile
echo "export SELF_WALLET=$SELF_WALLET" >> $HOME/.bash_profile
echo "export SELF_PORT=11" >> $HOME/.bash_profile
echo "export SELF_CHAIN_ID=self-dev-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`SELF_NODENAME`) ve Cüzdan (`SELF_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`SELF_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export SELF_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export SELF_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export SELF_PORT=16" >> $HOME/.bash_profile
echo "export SELF_CHAIN_ID=self-dev-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Self Chain'nin Kurulması
```
cd $HOME
mkdir -p $HOME/go/bin/
wget https://anatolianteam.com/selfchaind
chmod +x selfchaind
mv selfchaind $HOME/go/bin/
```

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
selfchaind config keyring-backend test
selfchaind config chain-id $SELF_CHAIN_ID
selfchaind init --chain-id $SELF_CHAIN_ID $SELF_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://raw.githubusercontent.com/hotcrosscom/selfchain-genesis/main/networks/devnet/genesis.json -O $HOME/.selfchain/config/genesis.json
wget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/files/addrbook.json -O $HOME/.selfchain/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.02uself"|g' $HOME/.selfchain/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.selfchain/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS="94a7baabb2bcc00c7b47cbaa58adf4f433df9599@157.230.119.165:26656,d3b5b6ca39c8c62152abbeac4669816166d96831@165.22.24.236:26656,35f478c534e2d58dc2c4acdf3eb22eeb6f23357f@165.232.125.66:26656"
PEERS="94a7baabb2bcc00c7b47cbaa58adf4f433df9599@157.230.119.165:26656,d3b5b6ca39c8c62152abbeac4669816166d96831@165.22.24.236:26656,35f478c534e2d58dc2c4acdf3eb22eeb6f23357f@165.232.125.66:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.selfchain/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.selfchain/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.selfchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.selfchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.selfchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.selfchain/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${SELF_PORT}658%g;
s%:26657%:${SELF_PORT}657%g;
s%:6060%:${SELF_PORT}060%g;
s%:26656%:${SELF_PORT}656%g;
s%:26660%:${SELF_PORT}660%g
" $HOME/.selfchain/config/config.toml
sed -i.bak -e "
s%:1317%:${SELF_PORT}317%g; 
s%:8080%:${SELF_PORT}080%g; 
s%:9090%:${SELF_PORT}090%g; 
s%:9091%:${SELF_PORT}091%g
" $HOME/.selfchain/config/app.toml
sed -i.bak -e "s%:26657%:${SELF_PORT}657%g" $HOME/.selfchain/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${SELF_PORT}656\"|g" ~/.selfchain/config/config.toml > ~/.selfchain/config/config.toml.tmp
mv ~/.selfchain/config/config.toml.tmp  ~/.selfchain/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/selfchaind.service > /dev/null << EOF
[Unit]
Description=SelfChain Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which selfchaind) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

## Hizmeti Etkinleştirme ve Başlatma
```shell
systemctl daemon-reload
systemctl enable selfchaind
systemctl start selfchaind
```

## Logları Kontrol Etme
```shell
journalctl -u selfchaind -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
selfchaind status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$SELF_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
selfchaind keys add $SELF_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
selfchaind keys add $SELF_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
SELF_WALLET_ADDRESS=$(selfchaind keys show $SELF_WALLET -a)
SELF_VALOPER_ADDRESS=$(selfchaind keys show $SELF_WALLET --bech val -a)
```

```shell
echo 'export SELF_WALLET_ADDRESS='${SELF_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export SELF_VALOPER_ADDRESS='${SELF_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
selfchaind query bank balances $SELF_WALLET_ADDRESS
```

:::warning
Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.
:::

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
 ```shell 
selfchaind tx staking create-validator \
--amount=490000000000000000000uself \
--pubkey=$(selfchaind tendermint show-validator) \
--moniker=$SELF_NODENAME \
--chain-id=$SELF_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uself \
--gas-adjustment=1.5 \
--gas=auto \
--from=$SELF_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop selfchaind && \
systemctl disable selfchaind && \
rm /etc/systemd/system/selfchaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .selfchain artela && \
rm -rf $(which selfchaind)
sed -i '/SELF_/d' ~/.bash_profile
 ```
