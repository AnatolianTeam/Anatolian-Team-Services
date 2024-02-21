---
title: 💾 Kurulum
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/pryzm-zone/img/Pryzm-Service-Cover.jpg
keywords: [Pryzm, node, protocol, kurulum, snapshot, statesync, güncelleme]
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
* `$PRYZM_NODENAME` validator adınız
* `$PRYZM_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export PRYZM_NODENAME=$PRYZM_NODENAME"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=$PRYZM_WALLET" >> $HOME/.bash_profile
echo "export PRYZM_PORT=11" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=indigo-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`PRYZM_NODENAME`) ve Cüzdan (`PRYZM_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`PRYZM_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export PRYZM_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export PRYZM_PORT=16" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=indigo-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Pryzm'in Kurulması
```
cd $HOME
wget -O pryzmd https://storage.googleapis.com/pryzm-zone/core/0.11.1/pryzmd-0.11.1-linux-amd64
chmod +x $HOME/pryzmd
mv pryzmd /root/go/bin/
pryzmd version
```
Versiyon çıktısı `0.10.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
We copy and paste the codes below without making any changes.

```
pryzmd config keyring-backend test
pryzmd config chain-id $PRYZM_CHAIN_ID
pryzmd init --chain-id $PRYZM_CHAIN_ID $PRYZM_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama 
wget  -O $HOME/.pryzm/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25upryzm"|g' $HOME/.pryzm/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.pryzm/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.pryzm/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.pryzm/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.pryzm/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${BBN_PORT}658%g;
s%:26657%:${BBN_PORT}657%g;
s%:6060%:${BBN_PORT}060%g;
s%:26656%:${BBN_PORT}656%g;
s%:26660%:${BBN_PORT}660%g
" $HOME/.pryzm/config/config.toml
sed -i.bak -e "
s%:1317%:${BBN_PORT}317%g; 
s%:8080%:${BBN_PORT}080%g; 
s%:9090%:${BBN_PORT}090%g; 
s%:9091%:${BBN_PORT}091%g
" $HOME/.pryzm/config/app.toml
sed -i.bak -e "s%:26657%:${BBN_PORT}657%g" $HOME/.pryzm/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${PRYZM_PORT}656\"|g" ~/.pryzm/config/config.toml > ~/.pryzm/config/config.toml.tmp
mv ~/.pryzm/config/config.toml.tmp  ~/.pryzm/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/pryzmd.service > /dev/null << EOF
[Unit]
Description=pryzmd
After=network-online.target

[Service]
User=$USER
ExecStart=$(which pryzmd) start
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
systemctl enable pryzmd
systemctl start pryzmd
```

## Logları Kontrol Etme
```shell
journalctl -u pryzmd -f -o cat
```  

🔴 **BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
pryzmd status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$PRYZM_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
pryzmd keys add $PRYZM_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
pryzmd keys add $PRYZM_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Here we add our wallet and valve information to the variable.

```shell
PRYZM_WALLET_ADDRESS=$(pryzmd keys show $PRYZM_WALLET -a)
PRYZM_VALOPER_ADDRESS=$(pryzmd keys show $PRYZM_WALLET --bech val -a)
```

```shell
echo 'export PRYZM_WALLET_ADDRESS='${PRYZM_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export PRYZM_VALOPER_ADDRESS='${PRYZM_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
pryzmd tx staking create-validator \
--amount=490000000000000000000upryzm \
--pubkey=$(pryzmd tendermint show-validator) \
--moniker=$PRYZM_NODENAME \
--chain-id=$PRYZM_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25upryzm \
--gas-adjustment=1.5 \
--gas=auto \
--from=$PRYZM_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop pryzmd && \
systemctl disable pryzmd && \
rm /etc/systemd/system/pryzmd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .pryzm && \
rm -rf $(which pryzmd)
sed -i '/PRYZM_/d' ~/.bash_profile
 ```
