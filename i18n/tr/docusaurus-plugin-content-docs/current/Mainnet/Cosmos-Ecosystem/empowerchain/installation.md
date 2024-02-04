---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Empower-Service-Cover.jpg
keywords: [empower, chain, empowerchain, network, kurulum, snapshot, statesync, güncelleme]
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
* `$EMPOW_NODENAME` validator adınız
* `$EMPOW_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export EMPOW_NODENAME=$EMPOW_NODENAME"  >> $HOME/.bash_profile
echo "export EMPOW_WALLET=$EMPOW_WALLET" >> $HOME/.bash_profile
echo "export EMPOW_PORT=11" >> $HOME/.bash_profile
echo "export EMPOW_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`EMPOW_NODENAME`) ve Cüzdan (`EMPOW_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`EMPOW_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export EMPOW_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export EMPOW_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export EMPOW_PORT=16" >> $HOME/.bash_profile
echo "export EMPOW_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Empower'ın Kurulması
```shell
cd $HOME
wget https://github.com/EmpowerPlastic/empowerchain/releases/download/v2.0.0/empowerd-v2.0.0-linux-amd64.zip
unzip empowerd-v2.0.0-linux-amd64.zip && rm -rf empowerd-v2.0.0-linux-amd64.zip
chmod +x empowerd
mv empowerd $HOME/go/bin/
acred version
```
The version output will be `v2.0.0`.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
acred config keyring-backend test
acred config chain-id $EMPOW_CHAIN_ID
acred init --chain-id $EMPOW_CHAIN_ID $EMPOW_NODENAME

# Copying the Genesis File
curl -L https://github.com/EmpowerPlastic/empowerchain/raw/main/mainnet/empowerchain-1/genesis.tar.gz | tar -xz -C $HOME/.empowerchain/config/

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.025umpwr"|g' $HOME/.empowerchain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.empowerchain/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.empowerchain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.empowerchain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.empowerchain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${EMPOW_PORT}658%g;
s%:26657%:${EMPOW_PORT}657%g;
s%:6060%:${EMPOW_PORT}060%g;
s%:26656%:${EMPOW_PORT}656%g;
s%:26660%:${EMPOW_PORT}660%g
" $HOME/.empowerchain/config/config.toml
sed -i.bak -e "
s%:1317%:${EMPOW_PORT}317%g; 
s%:8080%:${EMPOW_PORT}080%g; 
s%:9090%:${EMPOW_PORT}090%g; 
s%:9091%:${EMPOW_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${EMPOW_PORT}657%g" $HOME/.empowerchain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${EMPOW_PORT}656\"|g" ~/.empowerchain/config/config.toml > ~/.empowerchain/config/config.toml.tmp
mv ~/.empowerchain/config/config.toml.tmp  ~/.empowerchain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/acred.service > /dev/null << EOF
[Unit]
Description=Acred Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which acred) start
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
systemctl enable acred
```

## Logları Kontrol Etme
```shell
journalctl -u acred -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
acred status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$EMPOW_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
acred keys add $EMPOW_WALLET
```  

### Importing an Existing Wallet
```shell
acred keys add $EMPOW_WALLET --recover
```

### Var Olan Cüzdanı İçeri Aktarma
Here we add our wallet and valve information to the variable.

```shell
EMPOW_WALLET_ADDRESS=$(acred keys show $EMPOW_WALLET -a)
EMPOW_VALOPER_ADDRESS=$(acred keys show $EMPOW_WALLET --bech val -a)
```

```shell
echo 'export EMPOW_WALLET_ADDRESS='${EMPOW_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export EMPOW_VALOPER_ADDRESS='${EMPOW_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
acred query bank balances $EMPOW_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
acred tx staking create-validator \
--amount=490000000000000000000umpwr \
--pubkey=$(acred tendermint show-validator) \
--moniker=$EMPOW_NODENAME \
--chain-id=$EMPOW_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25umpwr \
--gas-adjustment=1.5 \
--gas=auto \
--from=$EMPOW_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```


## Node'u Tamamen Silme
```
systemctl stop acred && \
systemctl disable acred && \
rm /etc/systemd/system/acred.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .empowerchain acrechain && \
rm -rf $(which acred)
sed -i '/EMPOW_/d' ~/.bash_profile
```
​