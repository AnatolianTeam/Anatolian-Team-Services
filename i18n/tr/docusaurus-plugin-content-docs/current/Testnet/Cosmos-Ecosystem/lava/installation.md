---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/img/Lava-Service-Cover.jpg
keywords: [lava, network, kurulum, snapshot, statesync, güncelleme]
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
* `$LAVA_NODENAME` validator adınız
* `$LAVA_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export LAVA_NODENAME=$LAVA_NODENAME"  >> $HOME/.bash_profile
echo "export LAVA_WALLET=$LAVA_WALLET" >> $HOME/.bash_profile
echo "export LAVA_PORT=11" >> $HOME/.bash_profile
echo "export LAVA_CHAIN_ID=lava-testnet-2" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`LAVA_NODENAME`) ve Cüzdan (`LAVA_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`LAVA_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export LAVA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export LAVA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export LAVA_PORT=16" >> $HOME/.bash_profile
echo "export LAVA_CHAIN_ID=lava-testnet-2" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Lava'nın Kurulması
```
cd $HOME
git clone https://github.com/lavanet/lava
cd lava
git checkout v0.35.0
export LAVA_BINARY=lavad
make install
lavad version
```
Versiyon çıktısı `v0.35.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
lavad config keyring-backend test
lavad config chain-id $LAVA_CHAIN_ID
lavad init --chain-id $LAVA_CHAIN_ID $LAVA_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/lava/files/genesis.json -O $HOME/.lava/config/genesis.json
wget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/lava/files/addrbook.json -O $HOME/.lava/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.025ulava"|g' $HOME/.lava/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.lava/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS="3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0@prod-pnet-seed-node.lavanet.xyz:26656,e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d@prod-pnet-seed-node2.lavanet.xyz:26656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:19956"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.lava/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.lava/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="10"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.lava/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.lava/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.lava/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.lava/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${LAVA_PORT}658%g;
s%:26657%:${LAVA_PORT}657%g;
s%:6060%:${LAVA_PORT}060%g;
s%:26656%:${LAVA_PORT}656%g;
s%:26660%:${LAVA_PORT}660%g
" $HOME/.lava/config/config.toml
sed -i.bak -e "
s%:1317%:${LAVA_PORT}317%g; 
s%:8080%:${LAVA_PORT}080%g; 
s%:9090%:${LAVA_PORT}090%g; 
s%:9091%:${LAVA_PORT}091%g
" $HOME/.lava/config/app.toml
sed -i.bak -e "s%:26657%:${LAVA_PORT}657%g" $HOME/.lava/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${LAVA_PORT}656\"|g" ~/.lava/config/config.toml > ~/.lava/config/config.toml.tmp
mv ~/.lava/config/config.toml.tmp  ~/.lava/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/lavad.service > /dev/null << EOF
[Unit]
Description=Lava Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which lavad) start
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
systemctl enable lavad
systemctl start lavad
```

## Logları Kontrol Etme
```shell
journalctl -u lavad -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
lavad status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$LAVA_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
lavad keys add $LAVA_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
lavad keys add $LAVA_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
LAVA_WALLET_ADDRESS=$(lavad keys show $LAVA_WALLET -a)
LAVA_VALOPER_ADDRESS=$(lavad keys show $LAVA_WALLET --bech val -a)
```

```shell
echo 'export LAVA_WALLET_ADDRESS='${LAVA_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export LAVA_VALOPER_ADDRESS='${LAVA_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### EIP-55 Adresini Öğrenme
```shell
lavad debug addr $LAVA_WALLET_ADDRESS
```

#### Faucet
[Discord](https://discord.gg/zyvZ93yZpM) sunucusunda `#🚰┃faucet` kanalından aşağıdaki şekilde token istiyoruz.

`$request Lava-Adres`

### Cüzdan Bakiyesini Kontrol Etme 
```
lavad query bank balances $LAVA_WALLET_ADDRESS
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
lavad tx staking create-validator \
--amount=490000000000000000000ulava \
--pubkey=$(lavad tendermint show-validator) \
--moniker=$LAVA_NODENAME \
--chain-id=$LAVA_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ulava \
--gas-adjustment=1.5 \
--gas=auto \
--from=$LAVA_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop lavad && \
systemctl disable lavad && \
rm /etc/systemd/system/lavad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .lava lava && \
rm -rf $(which lavad)
sed -i '/LAVA_/d' ~/.bash_profile
 ```
