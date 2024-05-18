---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, chain, kurulum, snapshot, statesync, güncelleme]
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
* `$INITIA_NODENAME` validator adınız
* `$INITIA_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export INITIA_NODENAME=$INITIA_NODENAME"  >> $HOME/.bash_profile
echo "export INITIA_WALLET=$INITIA_WALLET" >> $HOME/.bash_profile
echo "export INITIA_PORT=11" >> $HOME/.bash_profile
echo "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`INITIA_NODENAME`) ve Cüzdan (`INITIA_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`INITIA_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export INITIA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export INITIA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export INITIA_PORT=16" >> $HOME/.bash_profile
echo "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Initia Kurulması
```
cd $HOME
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.14
make install
```

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
initiad config set client chain-id $INITIA_CHAIN_ID
initiad config set client keyring-backend test
initiad init --chain-id $INITIA_CHAIN_ID $INITIA_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://testnet.anatolianteam.com/initia/genesis.json -O $HOME/.initia/config/genesis.json
wget https://testnet.anatolianteam.com/initia/addrbook.json -O $HOME/.initia/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.15uinit,0.01uusdc"|g' $HOME/.initia/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.initia/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS="2eaa272622d1ba6796100ab39f58c75d458b9dbc@34.142.181.82:26656,c28827cb96c14c905b127b92065a3fb4cd77d7f6@testnet-seeds.whispernode.com:25756"
PEERS="aee7083ab11910ba3f1b8126d1b3728f13f54943@initia-testnet-peer.itrocket.net:11656,d17d2d48b4741b21b16cba7aa5a0496151dec2e3@65.109.37.125:26656,767fdcfdb0998209834b929c59a2b57d474cc496@207.148.114.112:26656,72b8b9f0e826fa9be3f5ab55f56e67d409f0cef8@185.197.250.199:51656,9f0ae0790fae9a2d327d8d6fe767b73eb8aa5c48@176.126.87.65:22656,e43ce5800e48df7917942191c95276cb88bdd699@212.90.121.127:51656,7317b8c930c52a8183590166a7b5c3599f40d4db@185.187.170.186:26656,b79874ca9607e5d4a3fd730617cca863ff9f590e@5.78.116.66:26656,b8fcc8886246b3bd6058583a8017a7f987d7437e@185.182.186.46:26656,a45314423c15f024ff850fad7bd031168d937931@162.62.219.188:26656,00bf6d94bc8bae9d75c29a9bb198eaa401d34f4d@95.216.216.74:15656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.initia/config/config.toml
sed -i 's/max_num_inbound_peers =.*/max_num_inbound_peers = 150/g' $HOME/.initia/config/config.toml
sed -i 's/max_num_outbound_peers =.*/max_num_outbound_peers = 150/g' $HOME/.initia/config/config.toml


# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.initia/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.initia/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${INITIA_PORT}658%g;
s%:26657%:${INITIA_PORT}657%g;
s%:6060%:${INITIA_PORT}060%g;
s%:26656%:${INITIA_PORT}656%g;
s%:26660%:${INITIA_PORT}660%g
" $HOME/.initia/config/config.toml
sed -i.bak -e "
s%:1317%:${INITIA_PORT}317%g; 
s%:8080%:${INITIA_PORT}080%g; 
s%:9090%:${INITIA_PORT}090%g; 
s%:9091%:${INITIA_PORT}091%g
" $HOME/.initia/config/app.toml
sed -i.bak -e "s%:26657%:${INITIA_PORT}657%g" $HOME/.initia/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${INITIA_PORT}656\"|g" ~/.initia/config/config.toml > ~/.initia/config/config.toml.tmp
mv ~/.initia/config/config.toml.tmp  ~/.initia/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/initiad.service > /dev/null << EOF
[Unit]
Description=Initia Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which initiad) start
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
systemctl enable initiad
systemctl start initiad
```

## Logları Kontrol Etme
```shell
journalctl -u initiad -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
initiad status 2>&1 | jq .sync_info
```

ya da
```shell
initiad status 2>&1 | jq -r .sync_info.catching_up
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$INITIA_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
initiad keys add $INITIA_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
initiad keys add $INITIA_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
INITIA_WALLET_ADDRESS=$(initiad keys show $INITIA_WALLET -a)
INITIA_VALOPER_ADDRESS=$(initiad keys show $INITIA_WALLET --bech val -a)
```

```shell
echo 'export INITIA_WALLET_ADDRESS='${INITIA_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export INITIA_VALOPER_ADDRESS='${INITIA_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Musluk
https://faucet.testnet.initia.xyz


### Cüzdan Bakiyesini Kontrol Etme 
```
initiad query bank balances $INITIA_WALLET_ADDRESS
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
initiad tx mstaking create-validator \
--amount=25000000uinit \
--pubkey=$(initiad tendermint show-validator) \
--moniker=$INITIA_NODENAME \
--chain-id=$INITIA_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--gas-prices=7uinit \
--gas-adjustment=1.5 \
--gas=auto \
--from=$INITIA_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop initiad && \
systemctl disable initiad && \
rm /etc/systemd/system/initiad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .initia initia && \
rm -rf $(which initiad)
sed -i '/INITIA_/d' ~/.bash_profile
 ```
