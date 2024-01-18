---
title: 💾 Kurulum
description: Node installation guide.
image: ./img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, kurulum, snapshot, statesync, güncelleme]
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
* `$CROWD_NODENAME` validator adınız
* `$CROWD_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export CROWD_NODENAME=$CROWD_NODENAME"  >> $HOME/.bash_profile
echo "export CROWD_WALLET=$CROWD_WALLET" >> $HOME/.bash_profile
echo "export CROWD_PORT=11" >> $HOME/.bash_profile
echo "export CROWD_CHAIN_ID=cardtestnet-8" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`CROWD_NODENAME`) ve Cüzdan (`CROWD_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`CROWD_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export CROWD_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export CROWD_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export CROWD_PORT=16" >> $HOME/.bash_profile
echo "export CROWD_CHAIN_ID=cardtestnet-8" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Cardchain'in Kurulması
```
cd $HOME
git clone https://github.com/DecentralCardGame/Cardchain
wget -O Cardchaind https://github.com/DecentralCardGame/Cardchain/releases/download/v0.13.0/Cardchaind
chmod +x Cardchaind
mv $HOME/Cardchaind /usr/local/bin
Cardchaind version
```
Versiyon çıktısı `0.11.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
We copy and paste the codes below without making any changes.
```
Cardchaind config keyring-backend test
Cardchaind config chain-id $CROWD_CHAIN_ID
Cardchaind init --chain-id $CROWD_CHAIN_ID $CROWD_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama 
wget http://45.136.28.158:3000/genesis.json -O $HOME/.Cardchain/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0ubpf"|g' $HOME/.Cardchain/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.Cardchain/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.Cardchain/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.Cardchain/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.Cardchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.Cardchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.Cardchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.Cardchain/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${CROWD_PORT}658%g;
s%:26657%:${CROWD_PORT}657%g;
s%:6060%:${CROWD_PORT}060%g;
s%:26656%:${CROWD_PORT}656%g;
s%:26660%:${CROWD_PORT}660%g
" $HOME/.Cardchain/config/config.toml
sed -i.bak -e "
s%:1317%:${CROWD_PORT}317%g; 
s%:8080%:${CROWD_PORT}080%g; 
s%:9090%:${CROWD_PORT}090%g; 
s%:9091%:${CROWD_PORT}091%g
" $HOME/.Cardchain/config/app.toml
sed -i.bak -e "s%:26657%:${CROWD_PORT}657%g" $HOME/.Cardchain/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${CROWD_PORT}656\"|g" ~/.Cardchain/config/config.toml > ~/.Cardchain/config/config.toml.tmp
mv ~/.Cardchain/config/config.toml.tmp  ~/.Cardchain/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/Cardchaind.service > /dev/null << EOF
[Unit]
Description=Cardchaind
After=network-online.target

[Service]
User=$USER
ExecStart=$(which Cardchaind) start
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
systemctl enable Cardchaind
systemctl start Cardchaind
```

## Logları Kontrol Etme
```shell
journalctl -u Cardchaind -f -o cat
```  

🔴 **BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
Cardchaind status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$CROWD_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
Cardchaind keys add $CROWD_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
Cardchaind keys add $CROWD_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Here we add our wallet and valve information to the variable.

```shell
CROWD_WALLET_ADDRESS=$(Cardchaind keys show $CROWD_WALLET -a)
CROWD_VALOPER_ADDRESS=$(Cardchaind keys show $CROWD_WALLET --bech val -a)
```

```shell
echo 'export CROWD_WALLET_ADDRESS='${CROWD_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export CROWD_VALOPER_ADDRESS='${CROWD_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme
```
Cardchaind query bank balances $CROWD_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
Cardchaind tx staking create-validator \
--amount=490000000000000000000ubpf \
--pubkey=$(Cardchaind tendermint show-validator) \
--moniker=$CROWD_NODENAME \
--chain-id=$CROWD_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ubpf \
--gas-adjustment=1.5 \
--gas=auto \
--from=$CROWD_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop Cardchaind && \
systemctl disable Cardchaind && \
rm /etc/systemd/system/Cardchaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .Cardchain Cardchain && \
rm -rf $(which Cardchaind)
sed -i '/CROWD_/d' ~/.bash_profile
 ```
