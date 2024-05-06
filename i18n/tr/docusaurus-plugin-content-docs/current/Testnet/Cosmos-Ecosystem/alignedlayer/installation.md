---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Aligned-Service-Cover.jpg
keywords: [Aligned, Layer, alignedlayer, katman, kurulum, snapshot, statesync, güncelleme]
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
* `$ALIGNED_NODENAME` validator adınız
* `$ALIGNED_WALLET` cüzdan adınız
*  Eğer portu başka bir node kullanıyorsa aşağıdan değiştirebilirsiniz. `11` yazan yere farklı bir değer girmelisiniz yine iki haneli olacak şekilde.
```shell
echo "export ALIGNED_NODENAME=$ALIGNED_NODENAME"  >> $HOME/.bash_profile
echo "export ALIGNED_WALLET=$ALIGNED_WALLET" >> $HOME/.bash_profile
echo "export ALIGNED_PORT=11" >> $HOME/.bash_profile
echo "export ALIGNED_CHAIN_ID=alignedlayer" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Örnek
Node (`ALIGNED_NODENAME`) ve Cüzdan (`ALIGNED_WALLET`) adımızın `Anatolian-Guide` olduğunu ve kullanacağınız portun (`ALIGNED_PORT`) da `16656` olacağını varsayalım. Kod aşağıdaki şekilde düzenlenecektir. 
```shell
echo "export ALIGNED_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ALIGNED_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ALIGNED_PORT=16" >> $HOME/.bash_profile
echo "export ALIGNED_CHAIN_ID=alignedlayer" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Rust Kurulumu
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
```
```shell
source $HOME/.cargo/env
```

## Ignite CLI Kurulumu
```shell
curl https://get.ignite.com/cli | bash
mv ignite /usr/local/bin/
```

## Aligned Kurulumu 
```shell
rm -rf $HOME/aligned_layer_tendermint
git clone https://github.com/yetanotherco/aligned_layer_tendermint.git
cd $HOME/aligned_layer_tendermint
git checkout 98643167990f8a597b331ddd879e079bafb25b08
make build-linux
```

## Uygulamayı Yapılandırma ve Başlatma
Aşağıdaki kodlarda herhangi bir değişilik yapmadan kopyalayıp yapıştırıyoruz.
```
alignedlayerd config chain-id $ALIGNED_CHAIN_ID
alignedlayerd config keyring-backend test
alignedlayerd init --chain-id $ALIGNED_CHAIN_ID $ALIGNED_NODENAME

# Genesis ve addrbook Dosyalarını Kopyalama
wget https://github.com/0glabs/aligned/releases/download/v1.0.0-testnet/genesis.json -O $HOME/.alignedlayer/config/genesis.json
wget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.alignedlayer/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001stake"|g' $HOME/.alignedlayer/config/app.toml

# Indexer Kapatma -Opsiyonel
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.alignedlayer/config/config.toml

# SEEDS ve PEERS Ayarlaması
PEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326,b2a30b824a4358f8bc2ee648770b31b5eba3a853@85.10.200.82:26656"
SEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.alignedlayer/config/config.toml

# Prometheus'u Aktif Etme
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.alignedlayer/config/config.toml

# Pruning Ayarlama 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.alignedlayer/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.alignedlayer/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.alignedlayer/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.alignedlayer/config/app.toml

# Portları Ayarlama
sed -i.bak -e "
s%:26658%:${ALIGNED_PORT}658%g;
s%:26657%:${ALIGNED_PORT}657%g;
s%:6060%:${ALIGNED_PORT}060%g;
s%:26656%:${ALIGNED_PORT}656%g;
s%:26660%:${ALIGNED_PORT}660%g
" $HOME/.alignedlayer/config/config.toml
sed -i.bak -e "
s%:1317%:${ALIGNED_PORT}317%g; 
s%:8080%:${ALIGNED_PORT}080%g; 
s%:9090%:${ALIGNED_PORT}090%g; 
s%:9091%:${ALIGNED_PORT}091%g
" $HOME/.alignedlayer/config/app.toml
sed -i.bak -e "s%:26657%:${ALIGNED_PORT}657%g" $HOME/.alignedlayer/config/client.toml

# Harici Adres Ekleme
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ALIGNED_PORT}656\"|g" ~/.alignedlayer/config/config.toml > ~/.alignedlayer/config/config.toml.tmp
mv ~/.alignedlayer/config/config.toml.tmp  ~/.alignedlayer/config/config.toml

# Servis Dosyası Oluşturma
tee /etc/systemd/system/alignedlayerd.service > /dev/null << EOF
[Unit]
Description=SelfChain Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which alignedlayerd) start
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
systemctl enable alignedlayerd
systemctl start alignedlayerd
```

## Logları Kontrol Etme
```shell
journalctl -u alignedlayerd -f -o cat
``` 

## StateSync
```shell
systemctl stop alignedlayerd

cp $HOME/.alignedlayer/data/priv_validator_state.json $HOME/.alignedlayer/priv_validator_state.json.backup
alignedlayerd tendermint unsafe-reset-all --home $HOME/.alignedlayer --keep-addr-book

SNAP_RPC="https://rpc-t-aligned.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.alignedlayer/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.alignedlayer/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.alignedlayer/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.alignedlayer/config/config.toml

mv $HOME/.alignedlayer/priv_validator_state.json.backup $HOME/.alignedlayer/data/priv_validator_state.json

systemctl restart alignedlayerd && journalctl -u alignedlayerd -f -o cat
```

:::warning
BU AŞAMADAN SONRA NODE'UMUZUN EŞLEŞMESİNİ BEKLİYORUZ.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
alignedlayerd status 2>&1 | jq .SyncInfo
```

## Cüzdan

### Yeni Cüzdan Oluşturma
`$ALIGNED_WALLET` bölümünü değiştirmiyoruz kurulumun başında cüzdanımıza değişkenler ile isim belirledik.
```shell 
alignedlayerd keys add $ALIGNED_WALLET
```  

### Var Olan Cüzdanı İçeri Aktarma
```shell
alignedlayerd keys add $ALIGNED_WALLET --recover
```

### Musluk
Aligned adresinize [musluktan](https://faucet.alignedlayer.com/) token isteyin.

## Cüzdan ve Valoper Bilgileri
Burada cüzdan ve valoper bilgileri değişkene ekleniyor.
```shell
ALIGNED_WALLET_ADDRESS=$(alignedlayerd keys show $ALIGNED_WALLET -a)
ALIGNED_VALOPER_ADDRESS=$(alignedlayerd keys show $ALIGNED_WALLET --bech val -a)
```

```shell
echo 'export ALIGNED_WALLET_ADDRESS='${ALIGNED_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ALIGNED_VALOPER_ADDRESS='${ALIGNED_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Cüzdan Bakiyesini Kontrol Etme 
```
alignedlayerd query bank balances $ALIGNED_WALLET_ADDRESS
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
alignedlayerd tx staking create-validator \
--amount=90000000000000000stake \
--pubkey=$(alignedlayerd tendermint show-validator) \
--moniker=$ALIGNED_NODENAME \
--chain-id=$ALIGNED_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=7stake \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ALIGNED_WALLET \
--details="Always forward with the Anatolian Team 🐆" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```
:::info
Eğer hata alırsanız `--yes`'den önce şunu ekleyin: `--node=https://rpc-t-0g.anatolianteam.com:443 \` 
:::

## Node'u Tamamen Silme
 ```shell 
systemctl stop alignedlayerd && \
systemctl disable alignedlayerd && \
rm /etc/systemd/system/alignedlayerd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .alignedlayer aligned_layer_tendermint && \
rm -rf $(which alignedlayerd)
sed -i '/ALIGNED_/d' ~/.bash_profile
 ```
