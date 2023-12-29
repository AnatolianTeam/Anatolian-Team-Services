---
title: 💾 Kurulum
sidebar_position: 2
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
aşağıda değiştirmeniz gereken yerler belirtilmiştir.
* `$ACRE_NODENAME` validator adınız
* `$ACRE_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export ACRE_NODENAME=$ACRE_NODENAME"  >> $HOME/.bash_profile
echo "export ACRE_WALLET=$ACRE_WALLET" >> $HOME/.bash_profile
echo "export ACRE_PORT=11" >> $HOME/.bash_profile
echo "export ACRE_CHAIN_ID=facre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`ACRE_NODENAME`) ve Cüzdan (`ACRE_WALLET`) adınızın `Mehmet` olduğunu ve kullanacağınız portun (`ACRE_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export ACRE_NODENAME=Mehmet"  >> $HOME/.bash_profile
echo "export ACRE_WALLET=Mehmet" >> $HOME/.bash_profile
echo "export ACRE_PORT=16" >> $HOME/.bash_profile
echo "export ACRE_CHAIN_ID=facre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Arable Kurulması
```shell
git clone https://github.com/ArableProtocol/acrechain.git
cd acrechain
git checkout v1.2.0
make install
cd
acred version
```
Version çıktısı `v1.2.0` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.

```
acred config keyring-backend test
acred config chain-id $ACRE_CHAIN_ID
acred init --chain-id $ACRE_CHAIN_ID $ACRE_NODENAME

# Genesis Dosyasının Kopyalanması
wget  -O $HOME/.acred/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25aacre"|g' $HOME/.acred/config/app.toml

# Indexer Kapatma-Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.acred/config/config.toml

# SEED ve PEERS Ayarlanması
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.babylond/config/config.toml

# Prometheus Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.acred/config/config.toml

# Pruning Ayarlama
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.acred/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.acred/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.acred/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.acred/config/app.toml

# Portları Ayarlama
sed -i.bak -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:${ACRE_PORT}658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:${ACRE_PORT}657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:${ACRE_PORT}060\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:${ACRE_PORT}656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":${ACRE_PORT}660\"%" $HOME/.acred/config/config.toml
sed -i.bak -e "s%^address = \"tcp://0.0.0.0:1317\"%address = \"tcp://0.0.0.0:${ACRE_PORT}317\"%; s%^address = \":8080\"%address = \":${ACRE_PORT}080\"%; s%^address = \"0.0.0.0:8545\"%address = \"0.0.0.0:${ACRE_PORT}545\"%; s%^ws-address = \"0.0.0.0:8546\"%ws-address = \"0.0.0.0:${ACRE_PORT}546\"%; s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:${ACRE_PORT}090\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:${ACRE_PORT}091\"%" $HOME/.acred/config/app.toml
sed -i.bak -e "s%^node = \"tcp://localhost:26657\"%node = \"tcp://localhost:${ACRE_PORT}657\"%" $HOME/.acred/config/client.toml

# External Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ACRE_PORT}656\"|g" ~/.acred/config/config.toml > ~/.acred/config/config.toml.tmp
mv ~/.acred/config/config.toml.tmp  ~/.acred/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/acred.service > /dev/null << EOF
[Unit]
Description=Acred Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which acred) start
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
systemctl enable acred
```

## Logları Kontrol Etme
```shell
journalctl -u acred -f -o cat
```  
🔴 **BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.**

## Cüzdan Oluşturma

### Yeni Cüzdan Oluşturma
`$ACRE_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
acred keys add $ACRE_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
acred keys add $ACRE_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgilerimizi değişkene ekliyoruz.

```shell
ACRE_WALLET_ADDRESS=$(acred keys show $ACRE_WALLET -a)
ACRE_VALOPER_ADDRESS=$(acred keys show $ACRE_WALLET --bech val -a)
```

```shell
echo 'export ACRE_WALLET_ADDRESS='${ACRE_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ACRE_VALOPER_ADDRESS='${ACRE_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesine Bakma
```
acred query bank balances $ACRE_WALLET_ADDRESS
```

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
acred status 2>&1 | jq .SyncInfo
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**


## Validator Oluşturma
 Aşağıdaki komutta aşağıda berlirttilen yerler dışında bir değişiklik yapmanız gerekmez;
   - `identity`  burada `XXXX1111XXXX1111` yazan yere [keybase](https://keybase.io/) sitesine üye olarak size verilen kimlik numaranızı yazıyorsunuz.
   - `details` `Always forward with the Anatolian Team 🚀` yazan yere kendiniz hakkında bilgiler yazabilirsiniz.
   - `website`  `https://anatolianteam.com` yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz.
   - `security-contact`  E-posta adresiniz.
 ```shell 
acred tx staking create-validator \
--amount=490000000000000000000aacre \
--pubkey=$(acred tendermint show-validator) \
--moniker=$ACRE_NODENAME \
--chain-id=$ACRE_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aacre \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ACRE_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## YARARLI KOMUTLAR

## Logları Kontrol Etme 
```
journalctl -fu acred -o cat
```

### Sistemi Başlatma
```
systemctl start acred
```

### Sistemi Durdurma
```
systemctl stop acred
```

### Sistemi Yeniden Başlatma
```
systemctl restart acred
```

### Node Senkronizasyon Durumu
```
acred status 2>&1 | jq .SyncInfo
```
```
curl -s localhost:26657/status | jq .result.sync_info
```

### Validator Bilgileri
```
acred status 2>&1 | jq .ValidatorInfo
```

### Node Bilgileri
```
acred status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
acred tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Cüzdanların Listesine Bakma
```
acred keys list
```

### Cüzdan Adresini Görme
```
acred keys show $ACRE_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
acred keys add $ACRE_WALLET --recover
```

### Cüzdanı Silme
```
acred keys delete $ACRE_WALLET
```

### Cüzdan Bakiyesine Bakma
```
acred query bank balances $ACRE_WALLET_ADDRESS
```

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
acred tx bank send $ACRE_WALLET_ADDRESS GONDERILECEK_CUZDAN_ADRESI 100000000aacre
```

### Proposal Oylamasına Katılma
```
acred tx gov vote 1 yes --from $ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
acred tx staking delegate $ACRE_VALOPER_ADDRESS 100000000aacre --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi 
```
acred tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aacre --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
acred tx distribution withdraw-all-rewards --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme

```
acred tx distribution withdraw-rewards $ACRE_VALOPER_ADDRESS --from=$ACRE_WALLET --commission --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
acred tx staking edit-validator \
--moniker=YENI-NODE-ADI \
--chain-id=$ACRE_CHAIN_ID \
--from=$ACRE_WALLET \
--gas-prices 0.00001aacre \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Degiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
acred tx staking edit-validator --commission-rate "0.02" --moniker=$ACRE_NODENAME --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$ACRE_NODENAME` ve `$ACRE_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
acred tx staking edit-validator \
--moniker=$ACRE_NODENAME \
--identity=XXXX0000XXXX0000 \
--website="VARSA WEBSITENIZI YAZABILIRSINIZ" \
--details="BU BOLUME KENDINIZI TANITAN BIR CUMLE YAZABILIRSINIZ" \
--chain-id=$ACRE_CHAIN_ID \
--from=$ACRE_WALLET
```

### Validatoru Jail Durumundan Kurtarma 
```
acred tx slashing unjail --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y

```

### Node'u Tamamen Silme 

```
systemctl stop acred && \
systemctl disable acred && \
rm /etc/systemd/system/acred.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .acred.acred && \
rm -rf $(which acred)
sed -i '/ACRE_/d' ~/.bash_profile
```