---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/rebuschain/img/Rebus-Service-Cover.jpg
keywords: [rebus, chain, network, kurulum, snapshot, statesync, güncelleme]
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
* `$REBUS_NODENAME` validator adınız
* `$REBUS_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export REBUS_NODENAME=$REBUS_NODENAME"  >> $HOME/.bash_profile
echo "export REBUS_WALLET=$REBUS_WALLET" >> $HOME/.bash_profile
echo "export REBUS_PORT=11" >> $HOME/.bash_profile
echo "export REBUS_CHAIN_ID=reb_1111-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`REBUS_NODENAME`) ve Cüzdan (`REBUS_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`REBUS_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export REBUS_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export REBUS_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export REBUS_PORT=16" >> $HOME/.bash_profile
echo "export REBUS_CHAIN_ID=reb_1111-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Rebus'un Kurulması
```shell
cd $HOME
git clone https://github.com/rebuschain/rebus.core.git 
cd rebus.core
git checkout v0.4.0
make install
rebusd version
```
The version output will be `v0.4.0`.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
rebusd config keyring-backend test
rebusd config chain-id $REBUS_CHAIN_ID
rebusd init --chain-id $REBUS_CHAIN_ID $REBUS_NODENAME

# Copying the Genesis File
curl https://raw.githubusercontent.com/rebuschain/rebus.mainnet/master/reb_1111-1/genesis.zip > ~/.rebusd/config/genesis.zip
cd $HOME/.rebusd/config/ 
unzip genesis.zip && rm -rf genesis.zip

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25arebus"|g' $HOME/.rebusd/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.rebusd/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.rebusd/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.rebusd/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.rebusd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.rebusd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.rebusd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.rebusd/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${REBUS_PORT}658%g;
s%:26657%:${REBUS_PORT}657%g;
s%:6060%:${REBUS_PORT}060%g;
s%:26656%:${REBUS_PORT}656%g;
s%:26660%:${REBUS_PORT}660%g
" $HOME/.rebusd/config/config.toml
sed -i.bak -e "
s%:1317%:${REBUS_PORT}317%g; 
s%:8080%:${REBUS_PORT}080%g; 
s%:9090%:${REBUS_PORT}090%g; 
s%:9091%:${REBUS_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${REBUS_PORT}657%g" $HOME/.rebusd/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${REBUS_PORT}656\"|g" ~/.rebusd/config/config.toml > ~/.rebusd/config/config.toml.tmp
mv ~/.rebusd/config/config.toml.tmp  ~/.rebusd/config/config.toml

# Creating the Service File
tee /etc/systemd/system/rebusd.service > /dev/null << EOF
[Unit]
Description=Rebus Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which rebusd) start
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
systemctl enable rebusd
```

## Logları Kontrol Etme
```shell
journalctl -u rebusd -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
rebusd status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$REBUS_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
rebusd keys add $REBUS_WALLET
```  

### Importing an Existing Wallet
```shell
rebusd keys add $REBUS_WALLET --recover
```

### Var Olan Cüzdanı İçeri Aktarma
Here we add our wallet and valve information to the variable.

```shell
REBUS_WALLET_ADDRESS=$(rebusd keys show $REBUS_WALLET -a)
REBUS_VALOPER_ADDRESS=$(rebusd keys show $REBUS_WALLET --bech val -a)
```

```shell
echo 'export REBUS_WALLET_ADDRESS='${REBUS_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export REBUS_VALOPER_ADDRESS='${REBUS_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
rebusd query bank balances $REBUS_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
rebusd tx staking create-validator \
--amount=490000000000000000000arebus \
--pubkey=$(rebusd tendermint show-validator) \
--moniker=$REBUS_NODENAME \
--chain-id=$REBUS_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25arebus \
--gas-adjustment=1.5 \
--gas=auto \
--from=$REBUS_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```


## Node'u Tamamen Silme
```
systemctl stop rebusd && \
systemctl disable rebusd && \
rm /etc/systemd/system/rebusd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .rebusd rebus.core && \
rm -rf $(which rebusd)
sed -i '/REBUS_/d' ~/.bash_profile
```
​