---
title: 💾 Installation
sidebar_position: 2
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
wget https://storage.googleapis.com/pryzm-zone/core/0.10.0/pryzmd-0.10.0-linux-amd64.tar.gz
tar -xzvf pryzmd-0.10.0-linux-amd64.tar.gz && chmod +x pryzmd
rm -rf pryzmd-0.10.0-linux-amd64.tar.gz
mv pryzmd /root/go/bin/
pryzmd version
```
The version output will be `0.10.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
pryzmd config keyring-backend test
pryzmd config chain-id $PRYZM_CHAIN_ID
pryzmd init --chain-id $PRYZM_CHAIN_ID $PRYZM_NODENAME

# Copying the Genesis File
wget  -O $HOME/.pryzm/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25upryzm"|g' $HOME/.pryzm/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.pryzm/config/config.toml

# Set up SEED and PEERS
SEEDS=""
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
# Set up Ports
sed -i.bak -e "
s%:26658%:${BBN_PORT}658%g;
s%:26657%:${BBN_PORT}657%g;
s%:6060%:${BBN_PORT}060%g;
s%:26656%:${BBN_PORT}656%g;
s%:26660%:${BBN_PORT}660%g
" $HOME/.pryzm/config/config.toml
sed -i.bak -e "
s%:1317%:${BBN_PORT}317%g; 
s%:8080%:${BBN_PORT}080%g; 
s%:9090%:${BBN_PORT}090%g; 
s%:9091%:${BBN_PORT}091%g
" $HOME/.pryzm/config/app.toml
sed -i.bak -e "s%:26657%:${BBN_PORT}657%g" $HOME/.pryzm/config/client.toml

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

## Enabling the Service
```shell
systemctl daemon-reload
systemctl enable pryzmd
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
