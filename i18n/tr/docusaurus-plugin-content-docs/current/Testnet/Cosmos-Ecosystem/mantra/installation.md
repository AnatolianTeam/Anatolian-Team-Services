---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/img/Mantra-Service-Cover.jpg
keywords: [mantra, chain, kurulum, snapshot, statesync, güncelleme]
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
* `$MANTRA_NODENAME` validator adınız
* `$MANTRA_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export MANTRA_NODENAME=$MANTRA_NODENAME"  >> $HOME/.bash_profile
echo "export MANTRA_WALLET=$MANTRA_WALLET" >> $HOME/.bash_profile
echo "export MANTRA_PORT=11" >> $HOME/.bash_profile
echo "export MANTRA_CHAIN_ID=bbn-test-3" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`MANTRA_NODENAME`) ve Cüzdan (`MANTRA_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`MANTRA_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export MANTRA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export MANTRA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export MANTRA_PORT=16" >> $HOME/.bash_profile
echo "export MANTRA_CHAIN_ID=bbn-test-2" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Babylon'un Kurulması
```
cd $HOME
wget -O /usr/lib/libwasmvm.x86_64.so https://github.com/CosmWasm/wasmvm/releases/download/v1.3.0/libwasmvm.x86_64.so
wget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/mantra/files/mantrachaind-linux-amd64.zip
unzip mantrachaind-linux-amd64.zip
rm mantrachaind-linux-amd64.zip
mv mantrachaind $HOME/go/bin
mantrachaind version
```
Versiyon çıktısı `1.0.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.

```
mantrachaind config keyring-backend test
mantrachaind config chain-id $MANTRA_CHAIN_ID
mantrachaind init --chain-id $MANTRA_CHAIN_ID $MANTRA_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama 
curl -L https://raw.githubusercontent.com/AnatolianTeam//Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/mantra/files/addrbook.json > $HOME/.mantrachain/config/genesis.json
curl -L https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/mantra/files/addrbook.json > $HOME/.mantrachain/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.001ubbn"|g' $HOME/.mantrachain/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.mantrachain/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS="69fa5f7927f2b013f152b6dfc56324156feb1973@34.172.80.207:26656"
PEERS="182a37a556ff0b6733fe58020e7746de3292492d@35.222.198.102:26656,64691a4202c1ad29a416b21ce21bfc9659783406@34.136.169.18:26656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.mantrachain/config/config.toml
sed -i.bak -e "s/^seeds =.*/seeds = \"$SEEDS\"/" $HOME/.mantrachain/config/config.toml
sed -i -e "s/^filter_peers *=.*/filter_peers = \"true\"/" $CONFIG_TOML

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.mantrachain/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.mantrachain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.mantrachain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.mantrachain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.mantrachain/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${MANTRA_PORT}658%g;
s%:26657%:${MANTRA_PORT}657%g;
s%:6060%:${MANTRA_PORT}060%g;
s%:26656%:${MANTRA_PORT}656%g;
s%:26660%:${MANTRA_PORT}660%g
" $HOME/.mantrachain/config/config.toml
sed -i.bak -e "
s%:1317%:${MANTRA_PORT}317%g; 
s%:8080%:${MANTRA_PORT}080%g; 
s%:9090%:${MANTRA_PORT}090%g; 
s%:9091%:${MANTRA_PORT}091%g
" $HOME/.mantrachain/config/app.toml
sed -i.bak -e "s%:26657%:${MANTRA_PORT}657%g" $HOME/.mantrachain/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${MANTRA_PORT}656\"|g" ~/.mantrachain/config/config.toml > ~/.mantrachain/config/config.toml.tmp
mv ~/.mantrachain/config/config.toml.tmp  ~/.mantrachain/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/mantrachaind.service > /dev/null << EOF
[Unit]
Description=Mantra Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which mantrachaind) start
Restart=on-failure
RestartSec=10
LimitNOFILE=10000

[Install]
WantedBy=multi-user.target
EOF
```

## Hizmeti Etkinleştirme ve Başlatma
```shell
systemctl daemon-reload
systemctl enable mantrachaind
systemctl start mantrachaind
```

## Logları Kontrol Etme
```shell
journalctl -u mantrachaind -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
mantrachaind status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$MANTRA_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
mantrachaind keys add $MANTRA_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
mantrachaind keys add $MANTRA_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
MANTRA_WALLET_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET -a)
MANTRA_VALOPER_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET --bech val -a)
```

```shell
echo 'export MANTRA_WALLET_ADDRESS='${MANTRA_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export MANTRA_VALOPER_ADDRESS='${MANTRA_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme
```
mantrachaind query bank balances $MANTRA_WALLET_ADDRESS
```

:::warning
Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.
:::

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirttilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
mantrachaind tx checkpointing create-validator \
--amount=1000000ubbn \
--pubkey=$(mantrachaind tendermint show-validator) \
--moniker=$MANTRA_NODENAME \
--chain-id=$MANTRA_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.1ubbn \
--gas-adjustment=1.5 \
--gas=auto \
--from=$MANTRA_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme 
```
systemctl stop mantrachaind && \
systemctl disable mantrachaind && \
rm /etc/systemd/system/mantrachaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm .mantrachain babylon -rf && \
rm $(which mantrachaind) -rf
sed -i '/MANTRA_/d' ~/.bash_profile
```
​
