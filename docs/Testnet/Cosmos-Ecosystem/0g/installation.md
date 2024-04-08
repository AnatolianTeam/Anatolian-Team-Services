---
title: 💾 Installation
description: Node installation guide.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, modular, chain, installation, snapshot, statesync, update]
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

## Setting Variables
The areas you need to change are written below.
* `$OG_NODENAME` your validator name
* `$OG_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export OG_NODENAME=$OG_NODENAME"  >> $HOME/.bash_profile
echo "export OG_WALLET=$OG_WALLET" >> $HOME/.bash_profile
echo "export OG_PORT=11" >> $HOME/.bash_profile
echo "export OG_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`OG_NODENAME`) and Wallet (`OG_WALLET`) name is `Anatolian-Guide` and the port you will use (`OG_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export OG_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export OG_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export OG_PORT=16" >> $HOME/.bash_profile
echo "export OG_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing 0G
```
git clone https://github.com/0glabs/0g-evmos.git
cd 0g-evmos
git checkout v1.0.0-testnet
make install
evmosd version
```

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
evmosd config chain-id $OG_CHAIN_ID
evmosd config keyring-backend test
evmosd init --chain-id $OG_CHAIN_ID $OG_NODENAME

# Copying the Genesis and addrbook Files
wget https://github.com/0glabs/0g-evmos/releases/download/v1.0.0-testnet/genesis.json -O $HOME/.evmosd/config/genesis.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005aevmos "|g' $HOME/.evmosd/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.evmosd/config/config.toml

# Set up SEED and PEERS
PEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326"
SEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.evmosd/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.evmosd/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.evmosd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.evmosd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.evmosd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.evmosd/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${OG_PORT}658%g;
s%:26657%:${OG_PORT}657%g;
s%:6060%:${OG_PORT}060%g;
s%:26656%:${OG_PORT}656%g;
s%:26660%:${OG_PORT}660%g
" $HOME/.evmosd/config/config.toml
sed -i.bak -e "
s%:1317%:${OG_PORT}317%g; 
s%:8080%:${OG_PORT}080%g; 
s%:9090%:${OG_PORT}090%g; 
s%:9091%:${OG_PORT}091%g
" $HOME/.evmosd/config/app.toml
sed -i.bak -e "s%:26657%:${OG_PORT}657%g" $HOME/.evmosd/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${OG_PORT}656\"|g" ~/.evmosd/config/config.toml > ~/.evmosd/config/config.toml.tmp
mv ~/.evmosd/config/config.toml.tmp  ~/.evmosd/config/config.toml

# Creating the Service File
tee /etc/systemd/system/evmosd.service > /dev/null << EOF
[Unit]
Description=0G Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which evmosd) start
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
systemctl enable evmosd
systemctl start evmosd
```

## Checking the Logs
```shell
journalctl -u evmosd -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
evmosd status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$OG_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
evmosd keys add $OG_WALLET
```  

### Importing an Existing Wallet
```shell
evmosd keys add $OG_WALLET --recover
```

### Learning Your EVM Address
```shell
echo "0x$(evmosd debug addr $(evmosd keys show $OG_WALLET -a) | grep hex | awk '{print $3}')"
```
And then request tokens from the faucet to your address above.

#### Add Network to Wallet
| Field | Details |
| ------------ | ------------ |
| **Network name** |0g Newton Testnet |
| **New RPC URL** | https://rpc-testnet.0g.ai/ |
| **Chain ID** | 9000 |
| **Currency symbol:** | A0GI |

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
OG_WALLET_ADDRESS=$(evmosd keys show $OG_WALLET -a)
OG_VALOPER_ADDRESS=$(evmosd keys show $OG_WALLET --bech val -a)
```

```shell
echo 'export OG_WALLET_ADDRESS='${OG_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export OG_VALOPER_ADDRESS='${OG_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
evmosd query bank balances $OG_WALLET_ADDRESS
```

:::warning
If the synchronization is completed, we proceed to the following step.
:::

## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🐆`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
evmosd tx staking create-validator \
--amount=10000000000000000aevmos \
--pubkey=$(evmosd tendermint show-validator) \
--moniker=$OG_NODENAME \
--chain-id=$OG_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aevmos  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$OG_WALLET \
--details="Always forward with the Anatolian Team 🐆" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop evmosd && \
systemctl disable evmosd && \
rm /etc/systemd/system/evmosd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .evmosd 0g-evmos && \
rm -rf $(which evmosd)
sed -i '/OG_/d' ~/.bash_profile
```
