---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Stride-Service-Cover.jpg
keywords: [stride, zone, network, kurulum, snapshot, statesync, güncelleme]
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
* `$STRD_NODENAME` validator adınız
* `$STRD_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export STRD_NODENAME=$STRD_NODENAME"  >> $HOME/.bash_profile
echo "export STRD_WALLET=$STRD_WALLET" >> $HOME/.bash_profile
echo "export STRD_PORT=11" >> $HOME/.bash_profile
echo "export STRD_CHAIN_ID=stride-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`STRD_NODENAME`) ve Cüzdan (`STRD_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`STRD_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export STRD_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export STRD_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export STRD_PORT=16" >> $HOME/.bash_profile
echo "export STRD_CHAIN_ID=stride-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Stride'ın Kurulması
```shell
cd $HOME
git clone https://github.com/Stride-Labs/stride.git && cd stride
git checkout v22.0.0
make install
strided version
```
The version output will be `v22.0.0`.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
strided config keyring-backend test
strided config chain-id $STRD_CHAIN_ID
strided init --chain-id $STRD_CHAIN_ID $STRD_NODENAME

# Copying the Genesis File
wget https://raw.githubusercontent.com/Stride-Labs/stride/main/genesis/genesis.json -O $HOME/.stride/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.01ustrd"|g' $HOME/.stride/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.stride/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.stride/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.stride/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.stride/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.stride/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.stride/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.stride/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${STRD_PORT}658%g;
s%:26657%:${STRD_PORT}657%g;
s%:6060%:${STRD_PORT}060%g;
s%:26656%:${STRD_PORT}656%g;
s%:26660%:${STRD_PORT}660%g
" $HOME/.stride/config/config.toml
sed -i.bak -e "
s%:8545%:${STRD_PORT}545%g;
s%:8546%:${STRD_PORT}546%g;
s%:6065%:${STRD_PORT}065%g;
s%:1317%:${STRD_PORT}317%g; 
s%:8080%:${STRD_PORT}080%g; 
s%:9090%:${STRD_PORT}090%g; 
s%:9091%:${STRD_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${STRD_PORT}657%g" $HOME/.stride/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${STRD_PORT}656\"|g" ~/.stride/config/config.toml > ~/.stride/config/config.toml.tmp
mv ~/.stride/config/config.toml.tmp  ~/.stride/config/config.toml

# Creating the Service File
tee /etc/systemd/system/strided.service > /dev/null << EOF
[Unit]
Description=Stride Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which strided) start
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
systemctl enable strided
```

## Logları Kontrol Etme
```shell
journalctl -u strided -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
strided status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$STRD_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
strided keys add $STRD_WALLET
```  

### Importing an Existing Wallet
```shell
strided keys add $STRD_WALLET --recover
```

### Var Olan Cüzdanı İçeri Aktarma
Here we add our wallet and valve information to the variable.

```shell
STRD_WALLET_ADDRESS=$(strided keys show $STRD_WALLET -a)
STRD_VALOPER_ADDRESS=$(strided keys show $STRD_WALLET --bech val -a)
```

```shell
echo 'export STRD_WALLET_ADDRESS='${STRD_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export STRD_VALOPER_ADDRESS='${STRD_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
strided query bank balances $STRD_WALLET_ADDRESS
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
strided tx staking create-validator \
--amount=490000000000000000000ustrd \
--pubkey=$(strided tendermint show-validator) \
--moniker=$STRD_NODENAME \
--chain-id=$STRD_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ustrd \
--gas-adjustment=1.5 \
--gas=auto \
--from=$STRD_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```


## Node'u Tamamen Silme
```
systemctl stop strided && \
systemctl disable strided && \
rm /etc/systemd/system/strided.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .strided stride && \
rm -rf $(which strided)
sed -i '/STRD_/d' ~/.bash_profile
```
​