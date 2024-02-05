---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/uptick-network/img/Uptick-Service-Cover.jpg
keywords: [uptick, network, NFT, web3, kurulum, snapshot, statesync, güncelleme]
---

# Kurulum

## Updating the System
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
* `$UPTICK_NODENAME` validator adınız
* `$UPTICK_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export UPTICK_NODENAME=$UPTICK_NODENAME"  >> $HOME/.bash_profile
echo "export UPTICK_WALLET=$UPTICK_WALLET" >> $HOME/.bash_profile
echo "export UPTICK_PORT=11" >> $HOME/.bash_profile
echo "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`UPTICK_NODENAME`) ve Cüzdan (`UPTICK_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`UPTICK_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export UPTICK_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export UPTICK_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export UPTICK_PORT=16" >> $HOME/.bash_profile
echo "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Uptick'in Kurulması
```shell
cd $HOME
git clone https://github.com/UptickNetwork/uptick.git
cd uptick
git checkout v0.2.17
make install
uptickd version
```
The version output will be `v1.2.0`.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
uptickd config keyring-backend test
uptickd config chain-id $UPTICK_CHAIN_ID
uptickd init --chain-id $UPTICK_CHAIN_ID $UPTICK_NODENAME

# Copying the Genesis File
wget  -O $HOME/.uptickd/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25auptick"|g' $HOME/.uptickd/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.uptickd/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.uptickd/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.uptickd/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.uptickd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.uptickd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.uptickd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.uptickd/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${UPTICK_PORT}658%g;
s%:26657%:${UPTICK_PORT}657%g;
s%:6060%:${UPTICK_PORT}060%g;
s%:26656%:${UPTICK_PORT}656%g;
s%:26660%:${UPTICK_PORT}660%g
" $HOME/.uptickd/config/config.toml
sed -i.bak -e "
s%:1317%:${UPTICK_PORT}317%g; 
s%:8080%:${UPTICK_PORT}080%g; 
s%:9090%:${UPTICK_PORT}090%g; 
s%:9091%:${UPTICK_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${UPTICK_PORT}657%g" $HOME/.uptickd/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${UPTICK_PORT}656\"|g" ~/.uptickd/config/config.toml > ~/.uptickd/config/config.toml.tmp
mv ~/.uptickd/config/config.toml.tmp  ~/.uptickd/config/config.toml

# Creating the Service File
tee /etc/systemd/system/uptickd.service > /dev/null << EOF
[Unit]
Description=Acred Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which uptickd) start
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
systemctl enable uptickd
```

## Logları Kontrol Etme
```shell
journalctl -u uptickd -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
uptickd status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$UPTICK_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
uptickd keys add $UPTICK_WALLET
```  

### Importing an Existing Wallet
```shell
uptickd keys add $UPTICK_WALLET --recover
```

### Var Olan Cüzdanı İçeri Aktarma
Here we add our wallet and valve information to the variable.

```shell
UPTICK_WALLET_ADDRESS=$(uptickd keys show $UPTICK_WALLET -a)
UPTICK_VALOPER_ADDRESS=$(uptickd keys show $UPTICK_WALLET --bech val -a)
```

```shell
echo 'export UPTICK_WALLET_ADDRESS='${UPTICK_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export UPTICK_VALOPER_ADDRESS='${UPTICK_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
uptickd query bank balances $UPTICK_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
uptickd tx staking create-validator \
--amount=490000000000000000000auptick \
--pubkey=$(uptickd tendermint show-validator) \
--moniker=$UPTICK_NODENAME \
--chain-id=$UPTICK_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25auptick \
--gas-adjustment=1.5 \
--gas=auto \
--from=$UPTICK_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```


## Node'u Tamamen Silme
```
systemctl stop uptickd && \
systemctl disable uptickd && \
rm /etc/systemd/system/uptickd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .uptickd uptick && \
rm -rf $(which uptickd)
sed -i '/UPTICK_/d' ~/.bash_profile
```
​