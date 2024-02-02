---
title: 💾 Installation
description: Node installation guide.
image: ./img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, card game, trade, installation, snapshot, statesync, update]
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
* `$CROWD_NODENAME` your validator name
* `$CROWD_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export CROWD_NODENAME=$CROWD_NODENAME"  >> $HOME/.bash_profile
echo "export CROWD_WALLET=$CROWD_WALLET" >> $HOME/.bash_profile
echo "export CROWD_PORT=11" >> $HOME/.bash_profile
echo "export CROWD_CHAIN_ID=cardtestnet-8" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`CROWD_NODENAME`) and Wallet (`CROWD_WALLET`) name is `Anatolian-Guide` and the port you will use (`CROWD_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export CROWD_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export CROWD_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export CROWD_PORT=16" >> $HOME/.bash_profile
echo "export CROWD_CHAIN_ID=cardtestnet-8" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Cardchain
```
cd $HOME
git clone https://github.com/DecentralCardGame/Cardchain
wget -O Cardchaind https://github.com/DecentralCardGame/Cardchain/releases/download/v0.13.0/Cardchaind
chmod +x Cardchaind
mv $HOME/Cardchaind /usr/local/bin
Cardchaind version
```
The version output will be `0.13.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
Cardchaind config keyring-backend test
Cardchaind config chain-id $CROWD_CHAIN_ID
Cardchaind init --chain-id $CROWD_CHAIN_ID $CROWD_NODENAME

# Copying the Genesis File
wget http://45.136.28.158:3000/genesis.json -O $HOME/.Cardchain/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0ubpf"|g' $HOME/.Cardchain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.Cardchain/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.Cardchain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.Cardchain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.Cardchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.Cardchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.Cardchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.Cardchain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${CROWD_PORT}658%g;
s%:26657%:${CROWD_PORT}657%g;
s%:6060%:${CROWD_PORT}060%g;
s%:26656%:${CROWD_PORT}656%g;
s%:26660%:${CROWD_PORT}660%g
" $HOME/.Cardchain/config/config.toml
sed -i.bak -e "
s%:1317%:${CROWD_PORT}317%g; 
s%:8080%:${CROWD_PORT}080%g; 
s%:9090%:${CROWD_PORT}090%g; 
s%:9091%:${CROWD_PORT}091%g
" $HOME/.Cardchain/config/app.toml
sed -i.bak -e "s%:26657%:${CROWD_PORT}657%g" $HOME/.Cardchain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${CROWD_PORT}656\"|g" ~/.Cardchain/config/config.toml > ~/.Cardchain/config/config.toml.tmp
mv ~/.Cardchain/config/config.toml.tmp  ~/.Cardchain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/Cardchaind.service > /dev/null << EOF
[Unit]
Description=Cardchaind
After=network-online.target

[Service]
User=$USER
ExecStart=$(which Cardchaind) start
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
systemctl enable Cardchaind
systemctl start Cardchaind
```

## Checking the Logs
```shell
journalctl -u Cardchaind -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
Cardchaind status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$CROWD_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
Cardchaind keys add $CROWD_WALLET
```  

### Importing an Existing Wallet
```shell
Cardchaind keys add $CROWD_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
CROWD_WALLET_ADDRESS=$(Cardchaind keys show $CROWD_WALLET -a)
CROWD_VALOPER_ADDRESS=$(Cardchaind keys show $CROWD_WALLET --bech val -a)
```

```shell
echo 'export CROWD_WALLET_ADDRESS='${CROWD_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export CROWD_VALOPER_ADDRESS='${CROWD_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
Cardchaind query bank balances $CROWD_WALLET_ADDRESS
```

🔴 **If the synchronization is completed, we proceed to the following step.**


## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
Cardchaind tx staking create-validator \
--amount=490000000000000000000ubpf \
--pubkey=$(Cardchaind tendermint show-validator) \
--moniker=$CROWD_NODENAME \
--chain-id=$CROWD_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ubpf \
--gas-adjustment=1.5 \
--gas=auto \
--from=$CROWD_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node
```shell 
systemctl stop Cardchaind && \
systemctl disable Cardchaind && \
rm /etc/systemd/system/Cardchaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .Cardchain Cardchain && \
rm -rf $(which Cardchaind)
sed -i '/CROWD_/d' ~/.bash_profile
```
