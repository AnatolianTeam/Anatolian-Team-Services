---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Warden-Service-Cover.jpg
keywords: [0g, ai, yapay zeka, modüler, zincir, kurulum, snapshot, statesync, güncelleme]
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
* `$0G_NODENAME` validator adınız
* `$0G_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export 0G_NODENAME=$0G_NODENAME"  >> $HOME/.bash_profile
echo "export 0G_WALLET=$0G_WALLET" >> $HOME/.bash_profile
echo "export 0G_PORT=11" >> $HOME/.bash_profile
echo "export 0G_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`0G_NODENAME`) ve Cüzdan (`0G_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`0G_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export 0G_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export 0G_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export 0G_PORT=16" >> $HOME/.bash_profile
echo "export 0G_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Warden Protocol'ün Kurulması
```
cd $HOME
git clone https://github.com/0glabs/0g-evmos.git
cd 0g-evmos
git checkout v1.0.0-testnet
make install
evmosd version
```

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
evmosd config chain-id $0G_CHAIN_ID
evmosd config keyring-backend test
evmosd init --chain-id $0G_CHAIN_ID $0G_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://github.com/0glabs/0g-evmos/releases/download/v1.0.0-testnet/genesis.json -O $HOME/.evmosd/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005aevmos"|g' $HOME/.evmosd/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.evmosd/config/config.toml

# SEEDS ve PEERS Ayarlaması
PEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326"
SEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.evmosd/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.evmosd/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.evmosd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.evmosd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.evmosd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.evmosd/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${0G_PORT}658%g;
s%:26657%:${0G_PORT}657%g;
s%:6060%:${0G_PORT}060%g;
s%:26656%:${0G_PORT}656%g;
s%:26660%:${0G_PORT}660%g
" $HOME/.evmosd/config/config.toml
sed -i.bak -e "
s%:1317%:${0G_PORT}317%g; 
s%:8080%:${0G_PORT}080%g; 
s%:9090%:${0G_PORT}090%g; 
s%:9091%:${0G_PORT}091%g
" $HOME/.evmosd/config/app.toml
sed -i.bak -e "s%:26657%:${0G_PORT}657%g" $HOME/.evmosd/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${0G_PORT}656\"|g" ~/.evmosd/config/config.toml > ~/.evmosd/config/config.toml.tmp
mv ~/.evmosd/config/config.toml.tmp  ~/.evmosd/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/evmosd.service > /dev/null << EOF
[Unit]
Description=SelfChain Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which evmosd) start
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
systemctl enable evmosd
systemctl start evmosd
```

## Logları Kontrol Etme
```shell
journalctl -u evmosd -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
evmosd status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$0G_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
evmosd keys add $0G_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
evmosd keys add $0G_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
0G_WALLET_ADDRESS=$(evmosd keys show $0G_WALLET -a)
0G_VALOPER_ADDRESS=$(evmosd keys show $0G_WALLET --bech val -a)
```

```shell
echo 'export 0G_WALLET_ADDRESS='${0G_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export 0G_VALOPER_ADDRESS='${0G_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
evmosd query bank balances $0G_WALLET_ADDRESS
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
evmosd tx staking create-validator \
--amount=10000000000000000aevmos \
--pubkey=$(evmosd tendermint show-validator) \
--moniker=$0G_NODENAME \
--chain-id=$0G_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aevmos \
--gas-adjustment=1.5 \
--gas=auto \
--from=$0G_WALLET \
--details="Always forward with the Anatolian Team 🐆" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop evmosd && \
systemctl disable evmosd && \
rm /etc/systemd/system/evmosd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .evmosd 0g-evmos && \
rm -rf $(which evmosd)
sed -i '/0G_/d' ~/.bash_profile
 ```