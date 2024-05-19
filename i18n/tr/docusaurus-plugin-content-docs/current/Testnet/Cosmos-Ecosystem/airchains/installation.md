---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Airchains-Service-Cover.jpg
keywords: [airchains, chain, kurulum, snapshot, statesync, güncelleme]
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
ver="1.22.2"
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
* `$AIRCHAINS_NODENAME` validator adınız
* `$AIRCHAINS_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export AIRCHAINS_NODENAME=$AIRCHAINS_NODENAME"  >> $HOME/.bash_profile
echo "export AIRCHAINS_WALLET=$AIRCHAINS_WALLET" >> $HOME/.bash_profile
echo "export AIRCHAINS_PORT=11" >> $HOME/.bash_profile
echo "export AIRCHAINS_CHAIN_ID=junction" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`AIRCHAINS_NODENAME`) ve Cüzdan (`AIRCHAINS_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`AIRCHAINS_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export AIRCHAINS_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export AIRCHAINS_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export AIRCHAINS_PORT=16" >> $HOME/.bash_profile
echo "export AIRCHAINS_CHAIN_ID=junction" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Airchains Kurulması
```
cd $HOME
wget -O junctiond https://github.com/airchains-network/junction/releases/download/v0.1.0/junctiond
chmod +x junctiond
mv junctiond $HOME/go/bin/
```

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
junctiond config set client chain-id $AIRCHAINS_CHAIN_ID
junctiond config set client keyring-backend test
junctiond init --chain-id $AIRCHAINS_CHAIN_ID $AIRCHAINS_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://testnet.anatolianteam.com/airchains/genesis.json -O $HOME/.junction/config/genesis.json
wget https://testnet.anatolianteam.com/airchains/addrbook.json -O $HOME/.junction/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.001amf"|g' $HOME/.junction/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.junction/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
PEERS="e78a440c57576f3743e6aa9db00438462980927e@5.161.199.115:26656,61e609631e8be6e04c43ed3d7bfef23c064dc912@[2a01:4f8:221:26e0::2]:43456,f786dcc80601ddd33ba98c609795083ba418d740@158.220.119.11:43456,0b1159b05e940a611b275fe0006070439e5b6e69@[2a03:cfc0:8000:13::b910:277f]:13756,c8f6b1a795a6d9cd2ec39faf277163a9711fc81b@38.242.194.19:43456,552d2a5c3d9889444f123d740a20237c89711109@109.199.96.143:43456,cc27f4e54a78b950adaf46e5413f92f5d53d2212@209.126.86.186:43456,f5b69a02abeb3340ccd266f049ed6aabc7c0ea88@94.72.114.150:43456,db38d672f66df4de01b26e1fa97e1632fbfb1bdf@173.249.57.190:26656,d9a5e20668955bdd5c2fc28cffd6f06e23794638@[2a01:4f8:10a:3a51::2]:43456"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.junction/config/config.toml


# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.junction/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.junction/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.junction/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.junction/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.junction/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${AIRCHAINS_PORT}658%g;
s%:26657%:${AIRCHAINS_PORT}657%g;
s%:6060%:${AIRCHAINS_PORT}060%g;
s%:26656%:${AIRCHAINS_PORT}656%g;
s%:26660%:${AIRCHAINS_PORT}660%g
" $HOME/.junction/config/config.toml
sed -i.bak -e "
s%:1317%:${AIRCHAINS_PORT}317%g; 
s%:8080%:${AIRCHAINS_PORT}080%g; 
s%:9090%:${AIRCHAINS_PORT}090%g; 
s%:9091%:${AIRCHAINS_PORT}091%g
" $HOME/.junction/config/app.toml
sed -i.bak -e "s%:26657%:${AIRCHAINS_PORT}657%g" $HOME/.junction/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${AIRCHAINS_PORT}656\"|g" ~/.junction/config/config.toml > ~/.junction/config/config.toml.tmp
mv ~/.junction/config/config.toml.tmp  ~/.junction/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/junctiond.service > /dev/null << EOF
[Unit]
Description=Airchains Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which junctiond) start
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
systemctl enable junctiond
systemctl start junctiond
```

## Logları Kontrol Etme
```shell
journalctl -u junctiond -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
junctiond status 2>&1 | jq .sync_info
```

ya da
```shell
junctiond status 2>&1 | jq -r .sync_info.catching_up
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$AIRCHAINS_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
junctiond keys add $AIRCHAINS_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
junctiond keys add $AIRCHAINS_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
AIRCHAINS_WALLET_ADDRESS=$(junctiond keys show $AIRCHAINS_WALLET -a)
AIRCHAINS_VALOPER_ADDRESS=$(junctiond keys show $AIRCHAINS_WALLET --bech val -a)
```

```shell
echo 'export AIRCHAINS_WALLET_ADDRESS='${AIRCHAINS_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export AIRCHAINS_VALOPER_ADDRESS='${AIRCHAINS_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Musluk

Cüzdan adresinizi [Discord](https://discord.gg/wuT88TCQsw) sunucusundaki `#🚰❘switchyard-faucet-bot` kanalına göndererek token isteyin.


### Cüzdan Bakiyesini Kontrol Etme 
```
junctiond query bank balances $AIRCHAINS_WALLET_ADDRESS
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

### validator.json Dosyası Oluşturma
```shell 
cd $HOME
echo "{\"pubkey\":{\"@type\":\"/cosmos.crypto.ed25519.PubKey\",\"key\":\"$(wardend comet show-validator | grep -Po '\"key\":\s*\"\K[^"]*')\"},
    \"amount\": \"1700000amf\",
    \"moniker\": \"$AIRCHAINS_NODENAME\",
    \"commission-rate\": \"0.1\",
    \"commission-max-rate\": \"0.2\",
    \"commission-max-change-rate\": \"0.01\",
    \"min-self-delegation\": \"1\",
    \"details\": \"Always forward with the Anatolian Team 🐆\",
    \"security\": \"xxxxxxx@gmail.com\",
    \"website\": \"https://anatolianteam.com\",
    \"identity\": \"XXXX1111XXXX1111\"
}" > validator.json
```

### json Dosyasıyla Validator Oluşturma
```shell 
junctiond tx staking create-validator validator.json \
    --from $AIRCHAINS_WALLET \
    --chain-id $AIRCHAINS_CHAIN_ID \
    --fees 200amf \
    --yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop junctiond && \
systemctl disable junctiond && \
rm /etc/systemd/system/junctiond.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .junction && \
rm -rf $(which junctiond)
sed -i '/AIRCHAINS_/d' ~/.bash_profile
 ```
