---
title: 💾 Installation
description: Node installation guide.
image: ./img/Arable-Service-Cover.jpg
keywords: [arable, protocol, acre, network, installation, snapshot, statesync, update]
---

# Installation

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"
```

## Installing Go
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

## Setting Variables
The areas you need to change are written below.
* `$ACRE_NODENAME` your validator name
* `$ACRE_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export ACRE_NODENAME=$ACRE_NODENAME"  >> $HOME/.bash_profile
echo "export ACRE_WALLET=$ACRE_WALLET" >> $HOME/.bash_profile
echo "export ACRE_PORT=11" >> $HOME/.bash_profile
echo "export ACRE_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`ACRE_NODENAME`) and Wallet (`ACRE_WALLET`) name is `Anatolian-Guide` and the port you will use (`ACRE_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export ACRE_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ACRE_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ACRE_PORT=16" >> $HOME/.bash_profile
echo "export ACRE_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Arable
```shell
git clone https://github.com/ArableProtocol/acrechain.git
cd acrechain
git checkout v1.2.0
make install
cd
acred version
```
The version output will be `v1.2.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
acred config keyring-backend test
acred config chain-id $ACRE_CHAIN_ID
acred init --chain-id $ACRE_CHAIN_ID $ACRE_NODENAME

# Copying the Genesis File
wget https://raw.githubusercontent.com/ArableProtocol/acrechain/main/networks/mainnet/acre_9052-1/genesis.json -O $HOME/.acred/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25aacre"|g' $HOME/.acred/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.acred/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.acred/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.acred/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.acred/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.acred/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.acred/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.acred/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${ACRE_PORT}658%g;
s%:26657%:${ACRE_PORT}657%g;
s%:6060%:${ACRE_PORT}060%g;
s%:26656%:${ACRE_PORT}656%g;
s%:26660%:${ACRE_PORT}660%g
" $HOME/.acred/config/config.toml
sed -i.bak -e "
s%:1317%:${ACRE_PORT}317%g; 
s%:8080%:${ACRE_PORT}080%g; 
s%:9090%:${ACRE_PORT}090%g; 
s%:9091%:${ACRE_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${ACRE_PORT}657%g" $HOME/.acred/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ACRE_PORT}656\"|g" ~/.acred/config/config.toml > ~/.acred/config/config.toml.tmp
mv ~/.acred/config/config.toml.tmp  ~/.acred/config/config.toml

# Creating the Service File
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

## Enabling the Service
```shell
systemctl daemon-reload
systemctl enable acred
```

## Checking the Logs
```shell
journalctl -u acred -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
acred status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$ACRE_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
acred keys add $ACRE_WALLET
```  

### Importing an Existing Wallet
```shell
acred keys add $ACRE_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
ACRE_WALLET_ADDRESS=$(acred keys show $ACRE_WALLET -a)
ACRE_VALOPER_ADDRESS=$(acred keys show $ACRE_WALLET --bech val -a)
```

```shell
echo 'export ACRE_WALLET_ADDRESS='${ACRE_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ACRE_VALOPER_ADDRESS='${ACRE_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
acred query bank balances $ACRE_WALLET_ADDRESS
```

🔴 **Eşleşme tamamlandıysa aşağıdaki adıma geçiyoruz.**


## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
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

### Completely Deleting the Node
```
systemctl stop acred && \
systemctl disable acred && \
rm /etc/systemd/system/acred.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .acred acrechain && \
rm -rf $(which acred)
sed -i '/ACRE_/d' ~/.bash_profile
```
​