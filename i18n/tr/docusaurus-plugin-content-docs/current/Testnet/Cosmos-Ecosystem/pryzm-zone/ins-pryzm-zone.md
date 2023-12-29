---
title: 💾 Kurulum
sidebar_position: 2
---

# Installation

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
aşağıda değiştirmeniz gereken yerler belirtilmiştir.
* `$PRYZM_NODENAME` validator adınız
* `$PRYZM_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export PRYZM_NODENAME=$PRYZM_NODENAME"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=$PRYZM_WALLET" >> $HOME/.bash_profile
echo "export PRYZM_PORT=11" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=froopyland_100-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`PRYZM_NODENAME`) ve Cüzdan (`PRYZM_WALLET`) adımızın `Mehmet` olduğunu ve kullanacağınız portun (`PRYZM_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export PRYZM_NODENAME=Mehmet"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=Mehmet" >> $HOME/.bash_profile
echo "export PRYZM_PORT=16" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=froopyland_100-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Pryzm'in Kurulması

```
cd $HOME
wget https://storage.googleapis.com/pryzm-resources/pryzmd-0.9.0-linux-amd64.tar.gz
tar -xzvf pryzmd-0.9.0-linux-amd64.tar.gz
mv pryzmd /root/go/bin
pryzmd version
```
Versiyon çıktısı `0.9.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.

```
pryzmd config keyring-backend test
pryzmd config chain-id $PRYZM_CHAIN_ID
pryzmd init --chain-id $PRYZM_CHAIN_ID $PRYZM_NODENAME

# Genesis Dosyasının Kopyalanması
wget https://raw.githubusercontent.com/dymensionxyz/testnets/main/dymension-hub/froopyland/genesis.json -O $HOME/.pryzmd/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25udym"|g' $HOME/.pryzmd/config/app.toml

# Indexer Kapatma-Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.pryzmd/config/config.toml

# SEED ve PEERS Ayarlanması
SEEDS="ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:20556,92308bad858b8886e102009bbb45994d57af44e7@rpc-t.pryzmd.nodestake.top:666,284313184f63d9f06b218a67a0e2de126b64258d@seeds.silknodes.io:26157"
PEERS="e7857b8ed09bd0101af72e30425555efa8f4a242@148.251.177.108:20556,3410e9bc9c429d6f35e868840f6b7a0ccb29020b@46.4.5.45:20556,e7857b8ed09bd0101af72e30425555efa8f4a242@148.251.177.108:20556,3410e9bc9c429d6f35e868840f6b7a0ccb29020b@46.4.5.45:20556,138009ae8a3435eab5df2d58844239077c83c92a@161.97.180.20:16657,cb120ed9625771d57e06f8d449cb10ab99a58225@57.128.114.155:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.babylond/config/config.toml

# Prometheus Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.pryzmd/config/config.toml

# Pruning Ayarlama
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.pryzmd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.pryzmd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.pryzmd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.pryzmd/config/app.toml

# Portları Ayarlama
sed -i.bak -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:${PRYZM_PORT}658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:${PRYZM_PORT}657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:${PRYZM_PORT}060\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:${PRYZM_PORT}656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":${PRYZM_PORT}660\"%" $HOME/.pryzmd/config/config.toml
sed -i.bak -e "s%^address = \"tcp://0.0.0.0:1317\"%address = \"tcp://0.0.0.0:${PRYZM_PORT}317\"%; s%^address = \":8080\"%address = \":${PRYZM_PORT}080\"%; s%^address = \"0.0.0.0:8545\"%address = \"0.0.0.0:${PRYZM_PORT}545\"%; s%^ws-address = \"0.0.0.0:8546\"%ws-address = \"0.0.0.0:${PRYZM_PORT}546\"%; s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:${PRYZM_PORT}090\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:${PRYZM_PORT}091\"%" $HOME/.pryzmd/config/app.toml
sed -i.bak -e "s%^node = \"tcp://localhost:26657\"%node = \"tcp://localhost:${PRYZM_PORT}657\"%" $HOME/.pryzmd/config/client.toml

# External Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${PRYZM_PORT}656\"|g" ~/.pryzmd/config/config.toml > ~/.pryzmd/config/config.toml.tmp
mv ~/.pryzmd/config/config.toml.tmp  ~/.pryzmd/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/pryzmd.service > /dev/null << EOF
[Unit]
Description=Pryzm Node
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

## Servisi Başlatma
```shell
systemctl daemon-reload
systemctl enable pryzmd
```

## Logları Kontrol Etme
```shell
journalctl -u pryzmd -f -o cat
```  

🔴 **BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.**

## Cüzdan Oluşturma

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
Burada cüzdan ve valoper bilgilerimizi değişkene ekliyoruz.

```shell
PRYZM_WALLET_ADDRESS=$(pryzmd keys show $PRYZM_WALLET -a)
PRYZM_VALOPER_ADDRESS=$(pryzmd keys show $PRYZM_WALLET --bech val -a)
```

```shell
echo 'export PRYZM_WALLET_ADDRESS='${PRYZM_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export PRYZM_VALOPER_ADDRESS='${PRYZM_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Faucet
[Discord](https://discord.gg/TUVbtZMMpz) sunucusunda `#🚰・froopyland-faucet` kanalına giderek `$request cuzdan-adresi` şekinde mesaj atarak token istiyoruz. 

### Cüzdan Bakiyesine Bakma
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```


## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
pryzmd status 2>&1 | jq .SyncInfo
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**


## Validator Oluşturma
 Aşağıdaki komutta aşağıda berlirttilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
pryzmd tx staking create-validator \
--amount=490000000000000000000udym \
--pubkey=$(pryzmd tendermint show-validator) \
--moniker=$PRYZM_NODENAME \
--chain-id=$PRYZM_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25udym \
--gas-adjustment=1.5 \
--gas=auto \
--from=$PRYZM_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## YARARLI KOMUTLAR

## Logları Kontrol Etme 
```
journalctl -fu pryzmd -o cat
```

### Sistemi Başlatma
```
systemctl start pryzmd
```

### Sistemi Durdurma
```
systemctl stop pryzmd
```

### Sistemi Yeniden Başlatma
```
systemctl restart pryzmd
```

### Node Senkronizasyon Durumu
```
pryzmd status 2>&1 | jq .SyncInfo
```
```
curl -s localhost:26657/status | jq .result.sync_info
```

### Validator Bilgileri
```
pryzmd status 2>&1 | jq .ValidatorInfo
```

### Node Bilgileri
```
pryzmd status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
pryzmd tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Cüzdanların Listesine Bakma
```
pryzmd keys list
```

### Cüzdan Adresini Görme
```
pryzmd keys show $PRYZM_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
pryzmd keys add $PRYZM_WALLET --recover
```

### Cüzdanı Silme
```
pryzmd keys delete $PRYZM_WALLET
```

### Cüzdan Bakiyesine Bakma
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
pryzmd tx bank send $PRYZM_WALLET_ADDRESS GONDERILECEK_CUZDAN_ADRESI 100000000udym
```

### Proposal Oylamasına Katılma
```
pryzmd tx gov vote 1 yes --from $PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
pryzmd tx staking delegate $PRYZM_VALOPER_ADDRESS 100000000udym --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi 
```
pryzmd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000udym --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
pryzmd tx distribution withdraw-all-rewards --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme

```
pryzmd tx distribution withdraw-rewards $PRYZM_VALOPER_ADDRESS --from=$PRYZM_WALLET --commission --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
pryzmd tx staking edit-validator \
--moniker=YENI-NODE-ADI \
--chain-id=$PRYZM_CHAIN_ID \
--from=$PRYZM_WALLET \
--gas-prices 0.00001udym \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Degiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
pryzmd tx staking edit-validator --commission-rate "0.02" --moniker=$PRYZM_NODENAME --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$PRYZM_NODENAME` ve `$PRYZM_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
pryzmd tx staking edit-validator \
--moniker=$PRYZM_NODENAME \
--identity=XXXX0000XXXX0000 \
--website="VARSA WEBSITENIZI YAZABILIRSINIZ" \
--details="BU BOLUME KENDINIZI TANITAN BIR CUMLE YAZABILIRSINIZ" \
--chain-id=$PRYZM_CHAIN_ID \
--from=$PRYZM_WALLET
```

### Validatoru Jail Durumundan Kurtarma 
```
pryzmd tx slashing unjail --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001udym --gas-adjustment 1.5 --gas auto -y

```

### Node'u Tamamen Silme 

```
systemctl stop pryzmd && \
systemctl disable pryzmd && \
rm /etc/systemd/system/pryzmd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .pryzmd dymension && \
rm -rf $(which pryzmd)
sed -i '/PRYZM_/d' ~/.bash_profile
```