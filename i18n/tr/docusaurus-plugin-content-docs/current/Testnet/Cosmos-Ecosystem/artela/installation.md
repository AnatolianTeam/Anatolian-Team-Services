---
title: 💾 Kurulum
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/artela/img/Artela-Service-Cover.jpg
keywords: [artela, network, kurulum, snapshot, statesync, güncelleme]
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
* `$ART_NODENAME` validator adınız
* `$ART_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export ART_NODENAME=$ART_NODENAME"  >> $HOME/.bash_profile
echo "export ART_WALLET=$ART_WALLET" >> $HOME/.bash_profile
echo "export ART_PORT=11" >> $HOME/.bash_profile
echo "export ART_CHAIN_ID=artela_11822-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`ART_NODENAME`) ve Cüzdan (`ART_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`ART_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export ART_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ART_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ART_PORT=16" >> $HOME/.bash_profile
echo "export ART_CHAIN_ID=artela_11822-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Artela'nın Kurulması
```
cd $HOME
git clone https://github.com/artela-network/artela
cd artela
git checkout v0.4.7-rc4
make install
artelad version
```
Versiyon çıktısı `v0.4.7-rc4` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
artelad config keyring-backend test
artelad config chain-id $ART_CHAIN_ID
artelad init --chain-id $ART_CHAIN_ID $ART_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://testnet.anatolianteam.com/artela/genesis.json -O $HOME/.artelad/config/genesis.json
wget https://testnet.anatolianteam.com/artela/addrbook.json -O $HOME/.artelad/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.02uart"|g' $HOME/.artelad/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.artelad/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.artelad/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.artelad/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.artelad/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.artelad/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.artelad/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.artelad/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${ART_PORT}658%g;
s%:26657%:${ART_PORT}657%g;
s%:6060%:${ART_PORT}060%g;
s%:26656%:${ART_PORT}656%g;
s%:26660%:${ART_PORT}660%g
" $HOME/.artelad/config/config.toml
sed -i.bak -e "
s%:1317%:${ART_PORT}317%g; 
s%:8080%:${ART_PORT}080%g; 
s%:9090%:${ART_PORT}090%g; 
s%:9091%:${ART_PORT}091%g
" $HOME/.artelad/config/app.toml
sed -i.bak -e "s%:26657%:${ART_PORT}657%g" $HOME/.artelad/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ART_PORT}656\"|g" ~/.artelad/config/config.toml > ~/.artelad/config/config.toml.tmp
mv ~/.artelad/config/config.toml.tmp  ~/.artelad/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/artelad.service > /dev/null << EOF
[Unit]
Description=OKP4 Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which artelad) start
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
systemctl enable artelad
systemctl start artelad
```

## Logları Kontrol Etme
```shell
journalctl -u artelad -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
artelad status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$ART_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
artelad keys add $ART_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
artelad keys add $ART_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
ART_WALLET_ADDRESS=$(artelad keys show $ART_WALLET -a)
ART_VALOPER_ADDRESS=$(artelad keys show $ART_WALLET --bech val -a)
```

```shell
echo 'export ART_WALLET_ADDRESS='${ART_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ART_VALOPER_ADDRESS='${ART_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### EIP-55 Adresini Öğrenme
```shell
artelad debug addr $ART_WALLET_ADDRESS
```

#### Faucet
Discord sunucusunda `#🚰┃testnet-faucet` kanalından aşağıdaki şekilde token istiyoruz..

`$request EIP-55_Address`

### Cüzdan Bakiyesini Kontrol Etme 
```
artelad query bank balances $ART_WALLET_ADDRESS
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
artelad tx staking create-validator \
--amount=490000000000000000000uart \
--pubkey=$(artelad tendermint show-validator) \
--moniker=$ART_NODENAME \
--chain-id=$ART_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uart \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ART_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop artelad && \
systemctl disable artelad && \
rm /etc/systemd/system/artelad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .artelad artela && \
rm -rf $(which artelad)
sed -i '/ART_/d' ~/.bash_profile
 ```
