---
title: 💾 Installation
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/img/Pryzm-Service-Cover.jpg
keywords: [pryzm, zone, installation, snapshot, statesync, update]
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
* `$PRYZM_NODENAME` your validator name
* `$PRYZM_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export PRYZM_NODENAME=$PRYZM_NODENAME"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=$PRYZM_WALLET" >> $HOME/.bash_profile
echo "export PRYZM_PORT=11" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=indigo-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`PRYZM_NODENAME`) and Wallet (`PRYZM_WALLET`) name is `Anatolian-Guide` and the port you will use (`PRYZM_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export PRYZM_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export PRYZM_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export PRYZM_PORT=16" >> $HOME/.bash_profile
echo "export PRYZM_CHAIN_ID=indigo-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Pryzm
```
cd $HOME
curl -s https://storage.googleapis.com/pryzm-zone/core/0.11.1/pryzmd-0.11.1-linux-amd64 > pryzmd
chmod +x pryzmd
mkdir -p $HOME/go/bin
mv pryzmd $HOME/go/bin
pryzmd version
```
The version output will be `0.11.1`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
pryzmd config keyring-backend test
pryzmd config chain-id $PRYZM_CHAIN_ID
pryzmd init --chain-id $PRYZM_CHAIN_ID $PRYZM_NODENAME

# Copying the Genesis File
wget -O $HOME/.pryzm/config/genesis.json "https://testnet.anatolianteam.com/pryzm/genesis.json"
wget -O $HOME/.pryzm/config/addrbook.json "https://testnet.anatolianteam.com/pryzm/addrbook.json"

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.015upryzm"|g' $HOME/.pryzm/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.pryzm/config/config.toml

# Set up SEED and PEERS
PEERS="a08dfd98fb5dd3fb0c843088c70610570965907e@86.48.0.190:16656,e48dc3817b1646dec199e66700945234a61f1cd6@135.181.15.158:26656,53c21574397826e080d9d88f756872c5b764d1a2@[2a01:4f9:3051:19c2::2]:12456,a45072cbd173d6dc62ba6b2e5b76f4f69c9c7eb5@207.244.253.244:38656,d9a846e2632764c44577ce71c859c4167b8c5c18@178.128.197.47:26656,c176528e93142915af27e73511e21afc2dce22f4@65.109.28.177:26706,0e236d748212fcf9de89c8882f44e682f93475dc@159.69.193.68:36656,19102f727574337f014772f56920c1e5a4efe52d@135.181.254.74:26656,db0e0cff276b3292804474eb8beb83538acf77f5@195.14.6.192:26656,fd04c898639bf85eab223e686f4506b90213e432@193.164.4.109:31656,6d84adfe688d43fee69b35a7c3f26980c3d37463@89.38.98.200:20256"
SEEDS="ff17ca4f46230306412ff5c0f5e85439ee5136f0@testnet-seed.pryzm.zone:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.pryzm/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.pryzm/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.pryzm/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.pryzm/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${PRYZM_PORT}658%g;
s%:26657%:${PRYZM_PORT}657%g;
s%:6060%:${PRYZM_PORT}060%g;
s%:26656%:${PRYZM_PORT}656%g;
s%:26660%:${PRYZM_PORT}660%g
" $HOME/.pryzm/config/config.toml
sed -i.bak -e "
s%:1317%:${PRYZM_PORT}317%g; 
s%:8080%:${PRYZM_PORT}080%g; 
s%:9090%:${PRYZM_PORT}090%g; 
s%:9091%:${PRYZM_PORT}091%g
" $HOME/.pryzm/config/app.toml
sed -i.bak -e "s%:26657%:${PRYZM_PORT}657%g" $HOME/.pryzm/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${PRYZM_PORT}656\"|g" ~/.pryzm/config/config.toml > ~/.pryzm/config/config.toml.tmp
mv ~/.pryzm/config/config.toml.tmp  ~/.pryzm/config/config.toml

# Creating the Service File
tee /etc/systemd/system/pryzmd.service > /dev/null << EOF
[Unit]
Description=pryzmd
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

## Enabling and Starting the Service
```shell
systemctl daemon-reload
systemctl enable pryzmd
systemctl start pryzmd
```

## Checking the Logs
```shell
journalctl -u pryzmd -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
pryzmd status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$PRYZM_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
pryzmd keys add $PRYZM_WALLET
```  

### Importing an Existing Wallet
```shell
pryzmd keys add $PRYZM_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
PRYZM_WALLET_ADDRESS=$(pryzmd keys show $PRYZM_WALLET -a)
PRYZM_VALOPER_ADDRESS=$(pryzmd keys show $PRYZM_WALLET --bech val -a)
```

```shell
echo 'export PRYZM_WALLET_ADDRESS='${PRYZM_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export PRYZM_VALOPER_ADDRESS='${PRYZM_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

🔴 **If the synchronization is completed, we proceed to the following step.**


## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
pryzmd tx staking create-validator \
--amount=490000000000000000000upryzm \
--pubkey=$(pryzmd tendermint show-validator) \
--moniker=$PRYZM_NODENAME \
--chain-id=$PRYZM_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25upryzm \
--gas-adjustment=1.5 \
--gas=auto \
--from=$PRYZM_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node
 ```shell
systemctl stop pryzmd && \
systemctl disable pryzmd && \
rm /etc/systemd/system/pryzmd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm .pryzm -rf && \
rm $(which pryzmd) -rf
sed -i '/PRYZM_/d' ~/.bash_profile 
 ```
