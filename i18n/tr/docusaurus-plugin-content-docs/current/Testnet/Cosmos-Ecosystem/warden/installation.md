---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Warden-Service-Cover.jpg
keywords: [warden, protocol, chain, kurulum, snapshot, statesync, güncelleme]
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
* `$WARDEN_NODENAME` validator adınız
* `$WARDEN_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export WARDEN_NODENAME=$WARDEN_NODENAME"  >> $HOME/.bash_profile
echo "export WARDEN_WALLET=$WARDEN_WALLET" >> $HOME/.bash_profile
echo "export WARDEN_PORT=11" >> $HOME/.bash_profile
echo "export WARDEN_CHAIN_ID=alfama" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`WARDEN_NODENAME`) ve Cüzdan (`WARDEN_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`WARDEN_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export WARDEN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export WARDEN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export WARDEN_PORT=16" >> $HOME/.bash_profile
echo "export WARDEN_CHAIN_ID=alfama" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Warden Protocol'ün Kurulması
```
cd $HOME
git clone https://github.com/warden-protocol/wardenprotocol
cd  wardenprotocol
git checkout v0.2.0
make install-wardend
```

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
wardend config chain-id $WARDEN_CHAIN_ID
wardend config keyring-backend test
wardend init --chain-id $WARDEN_CHAIN_ID $WARDEN_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://raw.githubusercontent.com/warden-protocol/networks/main/testnet-alfama/genesis.json -O $HOME/.warden/config/genesis.json
wget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/warden/files/addrbook.json -O $HOME/.warden/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005uward"|g' $HOME/.warden/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.warden/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
PEERS="6a8de92a3bb422c10f764fe8b0ab32e1e334d0bd@sentry-1.alfama.wardenprotocol.org:26656,7560460b016ee0867cae5642adace5d011c6c0ae@sentry-2.alfama.wardenprotocol.org:26656,24ad598e2f3fc82630554d98418d26cc3edf28b9@sentry-3.alfama.wardenprotocol.org:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.warden/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.warden/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.warden/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${WARDEN_PORT}658%g;
s%:26657%:${WARDEN_PORT}657%g;
s%:6060%:${WARDEN_PORT}060%g;
s%:26656%:${WARDEN_PORT}656%g;
s%:26660%:${WARDEN_PORT}660%g
" $HOME/.warden/config/config.toml
sed -i.bak -e "
s%:1317%:${WARDEN_PORT}317%g; 
s%:8080%:${WARDEN_PORT}080%g; 
s%:9090%:${WARDEN_PORT}090%g; 
s%:9091%:${WARDEN_PORT}091%g
" $HOME/.warden/config/app.toml
sed -i.bak -e "s%:26657%:${WARDEN_PORT}657%g" $HOME/.warden/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${WARDEN_PORT}656\"|g" ~/.warden/config/config.toml > ~/.warden/config/config.toml.tmp
mv ~/.warden/config/config.toml.tmp  ~/.warden/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/wardend.service > /dev/null << EOF
[Unit]
Description=SelfChain Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which wardend) start
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
systemctl enable wardend
systemctl start wardend
```

## Logları Kontrol Etme
```shell
journalctl -u wardend -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
wardend status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$WARDEN_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
wardend keys add $WARDEN_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
wardend keys add $WARDEN_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
WARDEN_WALLET_ADDRESS=$(wardend keys show $WARDEN_WALLET -a)
WARDEN_VALOPER_ADDRESS=$(wardend keys show $WARDEN_WALLET --bech val -a)
```

```shell
echo 'export WARDEN_WALLET_ADDRESS='${WARDEN_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export WARDEN_VALOPER_ADDRESS='${WARDEN_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
wardend query bank balances $WARDEN_WALLET_ADDRESS
```

:::warning
Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.
:::

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🐆` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
 ```shell 
wardend tx staking create-validator \
--amount=1000000uward \
--pubkey=$(wardend tendermint show-validator) \
--moniker=$WARDEN_NODENAME \
--chain-id=$WARDEN_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uward \
--gas-adjustment=1.5 \
--gas=auto \
--from=$WARDEN_WALLET \
--details="Always forward with the Anatolian Team 🐆" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop wardend && \
systemctl disable wardend && \
rm /etc/systemd/system/wardend.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .warden wardenprotocol && \
rm -rf $(which wardend)
sed -i '/WARDEN_/d' ~/.bash_profile
 ```
