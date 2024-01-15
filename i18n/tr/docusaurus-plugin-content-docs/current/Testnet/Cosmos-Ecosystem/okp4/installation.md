---
title: 💾 Kurulum
description: Node installation guide.
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
* `$OKP4_NODENAME` validator adınız
* `$OKP4_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export OKP4_NODENAME=$OKP4_NODENAME"  >> $HOME/.bash_profile
echo "export OKP4_WALLET=$OKP4_WALLET" >> $HOME/.bash_profile
echo "export OKP4_PORT=11" >> $HOME/.bash_profile
echo "export OKP4_CHAIN_ID=babajaga-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`OKP4_NODENAME`) ve Cüzdan (`OKP4_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`OKP4_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export OKP4_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export OKP4_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export OKP4_PORT=16" >> $HOME/.bash_profile
echo "export OKP4_CHAIN_ID=babajaga-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## OKP4'ün Kurulması
```
cd $HOME
git clone https://github.com/okp4/okp4d.git
cd okp4d
git checkout v5.0.0
make install
okp4d version
```
Versiyon çıktısı `5.0.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
okp4d config keyring-backend test
okp4d config chain-id $OKP4_CHAIN_ID
okp4d init --chain-id $OKP4_CHAIN_ID $OKP4_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://raw.githubusercontent.com/okp4/networks/main/chains/nemeton-1/genesis.json -O $HOME/.okp4d/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uknow"|g' $HOME/.okp4d/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.okp4d/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.okp4d/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.okp4d/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.okp4d/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.okp4d/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.okp4d/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.okp4d/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${OKP4_PORT}658%g;
s%:26657%:${OKP4_PORT}657%g;
s%:6060%:${OKP4_PORT}060%g;
s%:26656%:${OKP4_PORT}656%g;
s%:26660%:${OKP4_PORT}660%g
" $HOME/.okp4d/config/config.toml
sed -i.bak -e "
s%:1317%:${OKP4_PORT}317%g; 
s%:8080%:${OKP4_PORT}080%g; 
s%:9090%:${OKP4_PORT}090%g; 
s%:9091%:${OKP4_PORT}091%g
" $HOME/.okp4d/config/app.toml
sed -i.bak -e "s%:26657%:${OKP4_PORT}657%g" $HOME/.okp4d/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${OKP4_PORT}656\"|g" ~/.okp4d/config/config.toml > ~/.okp4d/config/config.toml.tmp
mv ~/.okp4d/config/config.toml.tmp  ~/.okp4d/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/okp4d.service > /dev/null << EOF
[Unit]
Description=OKP4 Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which okp4d) start
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
systemctl enable okp4d
systemctl start okp4d
```

## Logları Kontrol Etme
```shell
journalctl -u okp4d -f -o cat
```  

🔴 **BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
okp4d status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$OKP4_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
okp4d keys add $OKP4_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
okp4d keys add $OKP4_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
OKP4_WALLET_ADDRESS=$(okp4d keys show $OKP4_WALLET -a)
OKP4_VALOPER_ADDRESS=$(okp4d keys show $OKP4_WALLET --bech val -a)
```

```shell
echo 'export OKP4_WALLET_ADDRESS='${OKP4_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export OKP4_VALOPER_ADDRESS='${OKP4_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
okp4d query bank balances $OKP4_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirtilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
 ```shell 
okp4d tx staking create-validator \
--amount=490000000000000000000uknow \
--pubkey=$(okp4d tendermint show-validator) \
--moniker=$OKP4_NODENAME \
--chain-id=$OKP4_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uknow \
--gas-adjustment=1.5 \
--gas=auto \
--from=$OKP4_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop okp4d && \
systemctl disable okp4d && \
rm /etc/systemd/system/okp4d.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .okp4d okp4d && \
rm -rf $(which okp4d)
sed -i '/OKP4_/d' ~/.bash_profile
 ```
