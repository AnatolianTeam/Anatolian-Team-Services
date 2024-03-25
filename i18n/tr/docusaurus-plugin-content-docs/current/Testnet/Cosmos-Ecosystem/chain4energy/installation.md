---
title: 💾 Kurulum
description: Node installation guide.
image: ./img/C4E-Service-Cover.jpg
keywords: [chain4energy, c4e, kurulum, snapshot, statesync, güncelleme]
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
* `$C4E_NODENAME` validator adınız
* `$C4E_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export C4E_NODENAME=$C4E_NODENAME"  >> $HOME/.bash_profile
echo "export C4E_WALLET=$C4E_WALLET" >> $HOME/.bash_profile
echo "export C4E_PORT=11" >> $HOME/.bash_profile
echo "export C4E_CHAIN_ID=babajaga-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`C4E_NODENAME`) ve Cüzdan (`C4E_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`C4E_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export C4E_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export C4E_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export C4E_PORT=16" >> $HOME/.bash_profile
echo "export C4E_CHAIN_ID=babajaga-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Chain4Energy'nin Kurulması
```
cd $HOME
git clone https://github.com/chain4energy/c4e-chain.git
cd c4e-chain
git checkout tags/v1.3.0
make install
c4ed version
```
Versiyon çıktısı `1.3.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
c4ed config keyring-backend test
c4ed config chain-id $C4E_CHAIN_ID
c4ed init --chain-id $C4E_CHAIN_ID $C4E_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama 
wget https://raw.githubusercontent.com/chain4energy/c4e-chains/main/babajaga-1/genesis.json -O $HOME/.c4e-chain/config/genesis.json
wget https://raw.githubusercontent.com/koltigin/C4E-Kurulum-Rehberi/main/addrbook.json -O $HOME/.c4e-chain/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uc4e"|g' $HOME/.c4e-chain/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.c4e-chain/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.c4e-chain/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.c4e-chain/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.c4e-chain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.c4e-chain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.c4e-chain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.c4e-chain/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${C4E_PORT}658%g;
s%:26657%:${C4E_PORT}657%g;
s%:6060%:${C4E_PORT}060%g;
s%:26656%:${C4E_PORT}656%g;
s%:26660%:${C4E_PORT}660%g
" $HOME/.c4e-chain/config/config.toml
sed -i.bak -e "
s%:1317%:${C4E_PORT}317%g; 
s%:8080%:${C4E_PORT}080%g; 
s%:9090%:${C4E_PORT}090%g; 
s%:9091%:${C4E_PORT}091%g
" $HOME/.c4e-chain/config/app.toml
sed -i.bak -e "s%:26657%:${C4E_PORT}657%g" $HOME/.c4e-chain/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${C4E_PORT}656\"|g" ~/.c4e-chain/config/config.toml > ~/.c4e-chain/config/config.toml.tmp
mv ~/.c4e-chain/config/config.toml.tmp  ~/.c4e-chain/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/c4ed.service > /dev/null << EOF
[Unit]
Description=C4E Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which c4ed) start
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
systemctl enable c4ed
systemctl start c4ed
```

## Logları Kontrol Etme
```shell
journalctl -u c4ed -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
c4ed status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$C4E_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
c4ed keys add $C4E_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
c4ed keys add $C4E_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
C4E_WALLET_ADDRESS=$(c4ed keys show $C4E_WALLET -a)
C4E_VALOPER_ADDRESS=$(c4ed keys show $C4E_WALLET --bech val -a)
```

```shell
echo 'export C4E_WALLET_ADDRESS='${C4E_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export C4E_VALOPER_ADDRESS='${C4E_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme
```
c4ed query bank balances $C4E_WALLET_ADDRESS
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
c4ed tx staking create-validator \
--amount=490000000000000000000uc4e \
--pubkey=$(c4ed tendermint show-validator) \
--moniker=$C4E_NODENAME \
--chain-id=$C4E_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uc4e \
--gas-adjustment=1.5 \
--gas=auto \
--from=$C4E_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop c4ed && \
systemctl disable c4ed && \
rm /etc/systemd/system/c4ed.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .c4e-chain c4e-chain && \
rm -rf $(which c4ed)
sed -i '/C4E_/d' ~/.bash_profile
 ```
