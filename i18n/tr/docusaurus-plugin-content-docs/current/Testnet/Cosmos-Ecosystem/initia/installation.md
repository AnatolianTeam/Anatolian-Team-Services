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

## Initia Protocol'ün Kurulması
```
cd $HOME
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.12
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
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005uusdc"|g' $HOME/.initia/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.initia/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
PEERS="f9a3198644399763fe636c8dd42dd12d93f62279@85.10.200.82:26656,e1c61de5d437f35a715ac94b88ec62c482edc166@172.20.24.234:26656,c717995fd56dcf0056ed835e489788af4ffd8fe8@172.20.215.46:26656,4b477a8898fe3d160bfc87a3b7a2f293b8292d48@172.20.28.223:26656,d4af4ec2657c9756c87aa5b49d2d724b45f96d8b@188.165.228.73:26656,846bef6b31b20b075ff5b574d9733163b9b1958c@62.169.21.90:26656,22df256e71ba01bba80038c527a4f1103ad129d9@65.108.251.125:26656,a5d805241da9799d376b7e8a04e2cae22c323c56@10.0.102.171:26656,85abfb1a10ef88d37277e7462830890ff2f7a1ac@88.99.254.62:24656,999547a3b70a1b6a3d98fc13d4f9891354141166@10.0.101.171:26656,7cf7bf3e43f974b1c8d3a15531518d3ce8fb35de@31.220.75.164:26656,eb2e7095f86b24e8d5d286360c34e060a8db6334@188.40.85.207:12756,ee528080741055cb7067f3e0bdda9badac834fc5@81.0.249.86:11256,694dd68a81d0130f2c1af9f2b2891b5c9603cb7f@10.0.103.153:6656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.initia/config/config.toml


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
Description=SelfChain Node
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
```shell
curl --data '{"address": "$INITIA_WALLET_ADDRESS"}' https://faucet.buenavista.initiaprotocol.org
```

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

### validator.json Dosyası Oluşturma
```shell 
cd $HOME
echo "{\"pubkey\":{\"@type\":\"/cosmos.crypto.ed25519.PubKey\",\"key\":\"$(initiad comet show-validator | grep -Po '\"key\":\s*\"\K[^"]*')\"},
    \"amount\": \"9900000uusdc\",
    \"moniker\": \"$INITIA_NODENAME\",
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
initiad tx staking create-validator $HOME/validator.json \
    --chain-id=$INITIA_CHAIN_ID \
    --gas-prices=0.25uusdc \
    --gas-adjustment=1.5 \
    --gas=auto \
    --from=$INITIA_WALLET \
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
