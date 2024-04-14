---
title: 💾 Kurulum
description: Node kurulum rehberi.
position: 2
image: ./img/CrossFi-Service-Cover.jpg
keywords: [crossfi, network, kurulum, snapshot, statesync, güncelleme]
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
ver="1.21.6"
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
* `$CFI_NODENAME` validator adınız
* `$CFI_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export CFI_NODENAME=$CFI_NODENAME"  >> $HOME/.bash_profile
echo "export CFI_WALLET=$CFI_WALLET" >> $HOME/.bash_profile
echo "export CFI_PORT=11" >> $HOME/.bash_profile
echo "export CFI_CHAIN_ID=mineplex-mainnet-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`CFI_NODENAME`) ve Cüzdan (`CFI_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`CFI_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export CFI_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export CFI_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export CFI_PORT=16" >> $HOME/.bash_profile
echo "export CFI_CHAIN_ID=mineplex-mainnet-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## CrossFi'nin Kurulması
```
cd $HOME
mkdir -p $HOME/go/bin
wget https://github.com/crossfichain/crossfi-node/releases/download/v0.1.1/mineplex-2-node._v0.1.1_linux_amd64.tar.gz && tar -xf mineplex-2-node._v0.1.1_linux_amd64.tar.gz
tar -xvf mineplex-2-node._v0.1.1_linux_amd64.tar.gz
chmod +x $HOME/mineplex-chaind
mv $HOME/mineplex-chaind $HOME/go/bin/crossfid
rm mineplex-2-node._v0.1.1_linux_amd64.tar.gz
crossfid version
```
Versiyon çıktısı `0.1.1` olacak.

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
crossfid config keyring-backend test
crossfid config chain-id $CFI_CHAIN_ID
crossfid init --chain-id $CFI_CHAIN_ID $CFI_NODENAME
git clone https://github.com/crossfichain/mainnet.git
mv $HOME/mainnet/ $HOME/.mineplex-chain/

# Copying the Genesis and addrbook Files
wget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/crossfi/files/genesis.json -O $HOME/.mineplex-chain/config/genesis.json
wget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/crossfi/files/addrbook.json -O $HOME/.mineplex-chain/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i -e 's|^minimum-gas-prices *=.*|minimum-gas-prices = "5000000000mpx"|' $HOME/.mineplex-chain/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.mineplex-chain/config/config.toml

# SEEDS ve PEERS Ayarlaması
PEERS="2c8951227c667c8833e2930bc07ce1a9f0acbe28@seed-v2.mineplex.io:26656,e9fd5cca36b36d6646cfa65ff72b2f22abec4667@46.101.138.73:26656,641157ecbfec8e0ec37ca4c411c1208ca1327154@crossfi-mainnet-peer.itrocket.net:11656,a018736ec7202096918618dda318678ec4c7d728@167.235.7.100:26656,044a7dc14869ff871f21f61796c6017a6584945b@65.109.62.39:16656,9795aa2f9d463700cbd61862f8b29bf5bd47c042@138.68.84.81:26656,aedb4ff19edd4363c67f1bd9e9f40104098fe2b8@146.190.25.59:26656,6877c2c450b53bce5d40e659a74cd2d0dca24576@172.104.244.18:26656,9b500d3f67c22a5a5e5cff6c8db10bf947dbea95@13.231.218.123:26656,bed7ce073a39802f6eb76cecd69b311dabcb4744@64.226.124.173:36656,2d409d9d724364608978d11a3975c7556c813ffc@188.246.224.43:26656,0e2ef910151cd0a171e466b8850a0c1333c48577@95.217.107.249:29656,94bd757a9f002e5ec72f1f7d0a1f96eec0d49f1b@3.95.243.5:30656,d12f9642a604cbcf1afa85608179f49259709f3e@135.181.178.119:22656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.mineplex-chain/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.mineplex-chain/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.mineplex-chain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.mineplex-chain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.mineplex-chain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.mineplex-chain/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:8545%:${CFI_PORT}545%g;
s%:8546%:${CFI_PORT}546%g;
s%:26658%:${CFI_PORT}658%g;
s%:26657%:${CFI_PORT}657%g;
s%:6060%:${CFI_PORT}060%g;
s%:26656%:${CFI_PORT}656%g;
s%:26660%:${CFI_PORT}660%g
" $HOME/.mineplex-chain/config/config.toml
sed -i.bak -e "
s%:1317%:${CFI_PORT}317%g; 
s%:8080%:${CFI_PORT}080%g; 
s%:9090%:${CFI_PORT}090%g; 
s%:9091%:${CFI_PORT}091%g
" $HOME/.mineplex-chain/config/app.toml
sed -i.bak -e "s%:26657%:${CFI_PORT}657%g" $HOME/.mineplex-chain/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${CFI_PORT}656\"|g" ~/.mineplex-chain/config/config.toml > ~/.mineplex-chain/config/config.toml.tmp
mv ~/.mineplex-chain/config/config.toml.tmp  ~/.mineplex-chain/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/crossfid.service > /dev/null << EOF
[Unit]
Description=CrossFi Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which crossfid) start
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
systemctl enable crossfid
systemctl start crossfid
```

## Logları Kontrol Etme
```shell
journalctl -u crossfid -f -o cat
```  

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
crossfid status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$CFI_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
crossfid keys add $CFI_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
crossfid keys add $CFI_WALLET --recover
```

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
CFI_WALLET_ADDRESS=$(crossfid keys show $CFI_WALLET -a)
CFI_VALOPER_ADDRESS=$(crossfid keys show $CFI_WALLET --bech val -a)
```

```shell
echo 'export CFI_WALLET_ADDRESS='${CFI_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export CFI_VALOPER_ADDRESS='${CFI_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
crossfid query bank balances $CFI_WALLET_ADDRESS
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
crossfid tx staking create-validator \
--amount=490000000000000000000mpx \
--pubkey=$(crossfid tendermint show-validator) \
--moniker=$CFI_NODENAME \
--chain-id=$CFI_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25mpx \
--gas-adjustment=1.5 \
--gas=auto \
--from=$CFI_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Node'u Tamamen Silme
 ```shell 
systemctl stop crossfid && \
systemctl disable crossfid && \
rm /etc/systemd/system/crossfid.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .mineplex-chain crossfi && \
rm -rf $(which crossfid)
sed -i '/CFI_/d' ~/.bash_profile
 ```
