---
title: 💾 Installation
description: Node installation guide.
image: ./lava/img/Lava-Service-Cover.jpg
keywords: [lava, installation, snapshot, statesync, update]
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
* `$LAVA_NODENAME` your validator name
* `$LAVA_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export LAVA_NODENAME=$LAVA_NODENAME"  >> $HOME/.bash_profile
echo "export LAVA_WALLET=$LAVA_WALLET" >> $HOME/.bash_profile
echo "export LAVA_PORT=11" >> $HOME/.bash_profile
echo "export LAVA_CHAIN_ID=lava-testnet-2" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`LAVA_NODENAME`) and Wallet (`LAVA_WALLET`) name is `Anatolian-Guide` and the port you will use (`LAVA_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export LAVA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export LAVA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export LAVA_PORT=16" >> $HOME/.bash_profile
echo "export LAVA_CHAIN_ID=lava-testnet-2" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Lava
```
cd $HOME
git clone https://github.com/lavanet/lava
cd lava
git checkout v1.0.1
install
```
The version output will be `v1.0.1`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
lavad config keyring-backend test
lavad config chain-id $LAVA_CHAIN_ID
lavad init --chain-id $LAVA_CHAIN_ID $LAVA_NODENAME

# Copying the Genesis and addrbook Files
wget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/lava/files/genesis.json -O $HOME/.lava/config/genesis.json
wget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/lava/files/addrbook.json -O $HOME/.lava/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.025ulava "|g' $HOME/.lava/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.lava/config/config.toml

# Set up SEED and PEERS
SEEDS="3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0@prod-pnet-seed-node.lavanet.xyz:26656,e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d@prod-pnet-seed-node2.lavanet.xyz:26656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:19956"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.lava/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.lava/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="10"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.lava/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.lava/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.lava/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.lava/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${LAVA_PORT}658%g;
s%:26657%:${LAVA_PORT}657%g;
s%:6060%:${LAVA_PORT}060%g;
s%:26656%:${LAVA_PORT}656%g;
s%:26660%:${LAVA_PORT}660%g
" $HOME/.lava/config/config.toml
sed -i.bak -e "
s%:1317%:${LAVA_PORT}317%g; 
s%:8080%:${LAVA_PORT}080%g; 
s%:9090%:${LAVA_PORT}090%g; 
s%:9091%:${LAVA_PORT}091%g
" $HOME/.lava/config/app.toml
sed -i.bak -e "s%:26657%:${LAVA_PORT}657%g" $HOME/.lava/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${LAVA_PORT}656\"|g" ~/.lava/config/config.toml > ~/.lava/config/config.toml.tmp
mv ~/.lava/config/config.toml.tmp  ~/.lava/config/config.toml

# Creating the Service File
tee /etc/systemd/system/lavad.service > /dev/null << EOF
[Unit]
Description=Lava Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which lavad) start
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
systemctl enable lavad
systemctl start lavad
```

## Checking the Logs
```shell
journalctl -u lavad -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
lavad status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$LAVA_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
lavad keys add $LAVA_WALLET
```  

### Importing an Existing Wallet
```shell
lavad keys add $LAVA_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
LAVA_WALLET_ADDRESS=$(lavad keys show $LAVA_WALLET -a)
LAVA_VALOPER_ADDRESS=$(lavad keys show $LAVA_WALLET --bech val -a)
```

```shell
echo 'export LAVA_WALLET_ADDRESS='${LAVA_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export LAVA_VALOPER_ADDRESS='${LAVA_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

#### Faucet
Request tokens by sending a message to the `#🚰┃faucet` channel on the [Discord](https://discord.gg/zyvZ93yZpM) server as follows.

`$request Lava-Address`

### Checking Wallet Balance
```
lavad query bank balances $LAVA_WALLET_ADDRESS
```

:::warning
If the synchronization is completed, we proceed to the following step.
:::

## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
lavad tx staking create-validator \
--amount=940000ulava  \
--pubkey=$(lavad tendermint show-validator) \
--moniker=$LAVA_NODENAME \
--chain-id=$LAVA_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ulava  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$LAVA_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop lavad && \
systemctl disable lavad && \
rm /etc/systemd/system/lavad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .lava lava && \
rm -rf $(which lavad)
sed -i '/LAVA_/d' ~/.bash_profile
```
