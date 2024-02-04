---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, kurulum, snapshot, statesync, güncelleme]
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
* `$JACKAL_NODENAME` validator adınız
* `$JACKAL_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export JACKAL_NODENAME=$JACKAL_NODENAME"  >> $HOME/.bash_profile
echo "export JACKAL_WALLET=$JACKAL_WALLET" >> $HOME/.bash_profile
echo "export JACKAL_PORT=11" >> $HOME/.bash_profile
echo "export JACKAL_CHAIN_ID=jackal-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`JACKAL_NODENAME`) ve Cüzdan (`JACKAL_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`JACKAL_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export JACKAL_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export JACKAL_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export JACKAL_PORT=16" >> $HOME/.bash_profile
echo "export JACKAL_CHAIN_ID=jackal-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Jackal'ın Kurulması
```shell
cd $HOME
git clone https://github.com/JackalLabs/canine-chain && cd canine-chain
git checkout v3.1.2
make install
canined version
```
The version output will be `v3.1.2`.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
canined config keyring-backend test
canined config chain-id $JACKAL_CHAIN_ID
canined init --chain-id $JACKAL_CHAIN_ID $JACKAL_NODENAME

# Copying the Genesis File
wget -O $HOME/.canine/config/genesis.json "https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json"

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25ujkl"|g' $HOME/.canine/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.canine/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.canine/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.canine/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.canine/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.canine/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.canine/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.canine/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${JACKAL_PORT}658%g;
s%:26657%:${JACKAL_PORT}657%g;
s%:6060%:${JACKAL_PORT}060%g;
s%:26656%:${JACKAL_PORT}656%g;
s%:26660%:${JACKAL_PORT}660%g
" $HOME/.canine/config/config.toml
sed -i.bak -e "
s%:1317%:${JACKAL_PORT}317%g; 
s%:8080%:${JACKAL_PORT}080%g; 
s%:9090%:${JACKAL_PORT}090%g; 
s%:9091%:${JACKAL_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${JACKAL_PORT}657%g" $HOME/.canine/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${JACKAL_PORT}656\"|g" ~/.canined/config/config.toml > ~/.canined/config/config.toml.tmp
mv ~/.canined/config/config.toml.tmp  ~/.canined/config/config.toml

# Creating the Service File
tee /etc/systemd/system/canined.service > /dev/null << EOF
[Unit]
Description=Jackal Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which canined) start
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
systemctl enable canined
```

## Logları Kontrol Etme
```shell
journalctl -u canined -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
canined status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$JACKAL_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
canined keys add $JACKAL_WALLET
```  

### Importing an Existing Wallet
```shell
canined keys add $JACKAL_WALLET --recover
```

### Var Olan Cüzdanı İçeri Aktarma
Here we add our wallet and valve information to the variable.

```shell
JACKAL_WALLET_ADDRESS=$(canined keys show $JACKAL_WALLET -a)
JACKAL_VALOPER_ADDRESS=$(canined keys show $JACKAL_WALLET --bech val -a)
```

```shell
echo 'export JACKAL_WALLET_ADDRESS='${JACKAL_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export JACKAL_VALOPER_ADDRESS='${JACKAL_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
canined query bank balances $JACKAL_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
canined tx staking create-validator \
--amount=490000000000000000000ujkl \
--pubkey=$(canined tendermint show-validator) \
--moniker=$JACKAL_NODENAME \
--chain-id=$JACKAL_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ujkl \
--gas-adjustment=1.5 \
--gas=auto \
--from=$JACKAL_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```


## Node'u Tamamen Silme
```
systemctl stop canined && \
systemctl disable canined && \
rm /etc/systemd/system/canined.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .canined canine-chain && \
rm -rf $(which canined)
sed -i '/JACKAL_/d' ~/.bash_profile
```
​