---
title: 💾 Kurulum
description: Node installation guide.
image: ./img/Babylon-Service-Cover.jpg
keywords: [babylon, kurulum, snapshot, statesync, güncelleme]
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
* `$BBN_NODENAME` validator adınız
* `$BBN_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export BBN_NODENAME=$BBN_NODENAME"  >> $HOME/.bash_profile
echo "export BBN_WALLET=$BBN_WALLET" >> $HOME/.bash_profile
echo "export BBN_PORT=11" >> $HOME/.bash_profile
echo "export BBN_CHAIN_ID=bbn-test-3" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`BBN_NODENAME`) ve Cüzdan (`BBN_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`BBN_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export BBN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export BBN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export BBN_PORT=16" >> $HOME/.bash_profile
echo "export BBN_CHAIN_ID=bbn-test-3" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Babylon'un Kurulması
```
cd $HOME
git clone https://github.com/babylonchain/babylon.git babylon
cd babylon
git checkout v0.8.3
make install
babylond version
```
Versiyon çıktısı `0.8.3` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.

```
babylond config keyring-backend test
babylond config chain-id $BBN_CHAIN_ID
babylond init --chain-id $BBN_CHAIN_ID $BBN_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama 
curl -L https://testnet.anatolianteam.com/babylon/genesis.json > $HOME/.babylond/config/genesis.json
curl -L https://testnet.anatolianteam.com/babylon/addrbook.json > $HOME/.babylond/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.001ubbn"|g' $HOME/.babylond/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.babylond/config/config.toml

# SEEDS ve PEERS Ayarlaması
sed -i \
  -e 's|^seeds *=.*|seeds = "8da45f9ff83b4f8dd45bbcb4f850999637fbfe3b@seed0.testnet.babylonchain.io:26656,4b1f8a774220ba1073a4e9f4881de218b8a49c99@seed1.testnet.babylonchain.io:26656"|' \
  -e 's|^peers *=.*|peers = "fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656,03ce5e1b5be3c9a81517d415f65378943996c864@18.207.168.204:26656,a5fabac19c732bf7d814cf22e7ffc23113dc9606@34.238.169.221:26656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:20656"|' \
  $HOME/.babylond/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.babylond/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.babylond/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.babylond/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.babylond/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.babylond/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${BBN_PORT}658%g;
s%:26657%:${BBN_PORT}657%g;
s%:6060%:${BBN_PORT}060%g;
s%:26656%:${BBN_PORT}656%g;
s%:26660%:${BBN_PORT}660%g
" $HOME/.babylond/config/config.toml
sed -i.bak -e "
s%:8545%:${BBN_PORT}545%g;
s%:8546%:${BBN_PORT}546%g;
s%:6065%:${BBN_PORT}065%g;
s%:1317%:${BBN_PORT}317%g; 
s%:8080%:${BBN_PORT}080%g; 
s%:9090%:${BBN_PORT}090%g; 
s%:9091%:${BBN_PORT}091%g
" $HOME/.babylond/config/app.toml
sed -i.bak -e "s%:26657%:${BBN_PORT}657%g" $HOME/.babylond/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${BBN_PORT}656\"|g" ~/.babylond/config/config.toml > ~/.babylond/config/config.toml.tmp
mv ~/.babylond/config/config.toml.tmp  ~/.babylond/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/babylond.service > /dev/null << EOF
[Unit]
Description=Babylon Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which babylond) start
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
systemctl enable babylond
systemctl start babylond
```

## Logları Kontrol Etme
```shell
journalctl -u babylond -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
babylond status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$BBN_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
babylond keys add $BBN_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
babylond keys add $BBN_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
BBN_WALLET_ADDRESS=$(babylond keys show $BBN_WALLET -a)
BBN_VALOPER_ADDRESS=$(babylond keys show $BBN_WALLET --bech val -a)
```

```shell
echo 'export BBN_WALLET_ADDRESS='${BBN_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export BBN_VALOPER_ADDRESS='${BBN_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme
```
babylond query bank balances $BBN_WALLET_ADDRESS
```

:::warning
Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.
:::

## BLS Key Oluşturma ve Yeniden Başlatma

```shell
sed -i -e "s|^key-name *=.*|key-name = \"$BBN_WALLET\"|" $HOME/.babylond/config/app.toml
sed -i -e "s|^timeout_commit *=.*|timeout_commit = \"10s\"|" $HOME/.babylond/config/config.toml
babylond create-bls-key $(babylond keys show $BBN_WALLET -a)
sudo systemctl restart babylond
```

## Validator Oluşturma
Aşağıdaki komutta aşağıda berlirttilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
babylond tx checkpointing create-validator \
--amount=1000000ubbn \
--pubkey=$(babylond tendermint show-validator) \
--moniker=$BBN_NODENAME \
--chain-id=$BBN_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.1ubbn \
--gas-adjustment=1.5 \
--gas=auto \
--from=$BBN_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme 
```
systemctl stop babylond && \
systemctl disable babylond && \
rm /etc/systemd/system/babylond.service && \
systemctl daemon-reload && \
cd $HOME && \
rm .babylond babylon -rf && \
rm $(which babylond) -rf
sed -i '/BBN_/d' ~/.bash_profile
```
​
