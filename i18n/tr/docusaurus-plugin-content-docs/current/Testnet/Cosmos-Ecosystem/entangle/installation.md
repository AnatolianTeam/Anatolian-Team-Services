---
title: 💾 Kurulum
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg
keywords: [entangle, network, kurulum, snapshot, statesync, güncelleme]
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
* `$ENT_NODENAME` validator adınız
* `$ENT_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export ENT_NODENAME=$ENT_NODENAME"  >> $HOME/.bash_profile
echo "export ENT_WALLET=$ENT_WALLET" >> $HOME/.bash_profile
echo "export ENT_PORT=11" >> $HOME/.bash_profile
echo "export ENT_CHAIN_ID=entangle_11822-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`ENT_NODENAME`) ve Cüzdan (`ENT_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`ENT_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export ENT_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ENT_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ENT_PORT=16" >> $HOME/.bash_profile
echo "export ENT_CHAIN_ID=entangle_11822-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Entangle'nin Kurulması
```
cd $HOME
git clone https://github.com/Entangle-Protocol/entangle-blockchain
cd entangle-blockchain
make install
entangled version
```
Versiyon çıktısı `1.0.1` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
entangled config keyring-backend test
entangled config chain-id $ENT_CHAIN_ID
entangled init --chain-id $ENT_CHAIN_ID $ENT_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://testnet.anatolianteam.com/entangle/genesis.json -O $HOME/.entangled/config/genesis.json
wget https://testnet.anatolianteam.com/entangle/addrbook.json -O $HOME/.entangled/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.02aNGL"|g' $HOME/.entangled/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.entangled/config/config.toml

# SEEDS ve PEERS Ayarlaması
SEEDS="b65b6270a053b8a5b5bc037aa90d5790fcc555fa@entangle-testnet-seed.itrocket.net:29656"
PEERS="fe8c954ed37bfc3e5fc5eaf19b861d8a5947b2f5@entangle-testnet-peer.itrocket.net:29656,1786a89fc8ae055b775276c8f64197653aa9efa0@159.203.128.93:26656,7bff324a17426a00731f425ae29fe6ef05eebbac@213.239.217.52:33656,0188b9ed89f9aa60cf3691fbe336e0a36fc6bb9c@[2a02:4780:d:bec4::1]:26656,b02c2619b81356ce5ee0c0c832ab9f96cec46e87@8.217.49.46:26656,f7faae4bb64024ca0d7eb81f525cf33ea7d7e94f@89.58.18.47:27464,4895c46a55c7991f998277bd2f8ab45bcaba77cd@167.86.84.79:26656,68b0732e1a6ea2c37dbe4085b43b1a7c8d9bf8c6@185.209.223.103:14656,2cd6d17b7fcf2930684ba9332f3cae8219d1f1ea@46.250.236.48:26656,3d15d612fad5ffa14dce2dc99d29d651df399db2@144.217.68.182:17956,a24ccb1bcfdb940b640a9288021841a3386b6c0f@65.109.68.87:23656"
sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.entangled/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.entangled/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.entangled/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.entangled/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.entangled/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.entangled/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${ENT_PORT}658%g;
s%:26657%:${ENT_PORT}657%g;
s%:6060%:${ENT_PORT}060%g;
s%:26656%:${ENT_PORT}656%g;
s%:26660%:${ENT_PORT}660%g
" $HOME/.entangled/config/config.toml
sed -i.bak -e "
s%:1317%:${ENT_PORT}317%g; 
s%:8080%:${ENT_PORT}080%g; 
s%:9090%:${ENT_PORT}090%g; 
s%:9091%:${ENT_PORT}091%g
" $HOME/.entangled/config/app.toml
sed -i.bak -e "s%:26657%:${ENT_PORT}657%g" $HOME/.entangled/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ENT_PORT}656\"|g" ~/.entangled/config/config.toml > ~/.entangled/config/config.toml.tmp
mv ~/.entangled/config/config.toml.tmp  ~/.entangled/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/entangled.service > /dev/null << EOF
[Unit]
Description=OKP4 Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which entangled) start
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
systemctl enable entangled
systemctl start entangled
```

## Logları Kontrol Etme
```shell
journalctl -u entangled -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
entangled status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$ENT_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
entangled keys add $ENT_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
entangled keys add $ENT_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
ENT_WALLET_ADDRESS=$(entangled keys show $ENT_WALLET -a)
ENT_VALOPER_ADDRESS=$(entangled keys show $ENT_WALLET --bech val -a)
```

```shell
echo 'export ENT_WALLET_ADDRESS='${ENT_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ENT_VALOPER_ADDRESS='${ENT_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

#### Faucet
Discord sunucusunda `#🚿┊faucets` kanalından aşağıdaki şekilde token istiyoruz..

`$request Entangle_Address`

### Checking Wallet Balance
```
entangled query bank balances $ENT_WALLET_ADDRESS
```

### Cüzdan Bakiyesini Kontrol Etme 
```
entangled query bank balances $ENT_WALLET_ADDRESS
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
entangled tx staking create-validator \
--amount=490000000000000000000aNGL \
--pubkey=$(entangled tendermint show-validator) \
--moniker=$ENT_NODENAME \
--chain-id=$ENT_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aNGL \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ENT_WALLET \
--details="Always forward with the Anatolian Team." \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop entangled && \
systemctl disable entangled && \
rm /etc/systemd/system/entangled.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .entangled entangle-blockchain && \
rm -rf $(which entangled)
sed -i '/ENT_/d' ~/.bash_profile
 ```
