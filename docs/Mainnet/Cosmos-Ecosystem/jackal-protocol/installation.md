---
title: 💾 Installation
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, installation, snapshot, statesync, update]
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
* `$JACKAL_NODENAME` your validator name
* `$JACKAL_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export JACKAL_NODENAME=$JACKAL_NODENAME"  >> $HOME/.bash_profile
echo "export JACKAL_WALLET=$JACKAL_WALLET" >> $HOME/.bash_profile
echo "export JACKAL_PORT=11" >> $HOME/.bash_profile
echo "export JACKAL_CHAIN_ID=jackal-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`JACKAL_NODENAME`) and Wallet (`JACKAL_WALLET`) name is `Anatolian-Guide` and the port you will use (`JACKAL_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export JACKAL_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export JACKAL_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export JACKAL_PORT=16" >> $HOME/.bash_profile
echo "export JACKAL_CHAIN_ID=jackal-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Jackal
```shell
cd $HOME
git clone https://github.com/JackalLabs/canine-chain && cd canine-chain
git checkout v3.1.3
make install
canined version
```
The version output will be `v3.1.3`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
canined config keyring-backend test
canined config chain-id $JACKAL_CHAIN_ID
canined init --chain-id $JACKAL_CHAIN_ID $JACKAL_NODENAME

# Copying the Genesis File
wget -O $HOME/.canine/config/genesis.json "https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json"

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25ujkl"|g' $HOME/.canine/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.canine/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.canine/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.canine/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.canine/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.canine/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.canine/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.canine/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${JACKAL_PORT}658%g;
s%:26657%:${JACKAL_PORT}657%g;
s%:6060%:${JACKAL_PORT}060%g;
s%:26656%:${JACKAL_PORT}656%g;
s%:26660%:${JACKAL_PORT}660%g
" $HOME/.canine/config/config.toml
sed -i.bak -e "
s%:1317%:${JACKAL_PORT}317%g; 
s%:8080%:${JACKAL_PORT}080%g; 
s%:9090%:${JACKAL_PORT}090%g; 
s%:9091%:${JACKAL_PORT}091%g
" $HOME/.canine/config/app.toml
sed -i.bak -e "s%:26657%:${JACKAL_PORT}657%g" $HOME/.canine/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${JACKAL_PORT}656\"|g" ~/.canine/config/config.toml > ~/.canine/config/config.toml.tmp
mv ~/.canine/config/config.toml.tmp  ~/.canine/config/config.toml

# Creating the Service File
tee /etc/systemd/system/canined.service > /dev/null << EOF
[Unit]
Description=Jackal Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which canined) start
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
systemctl enable canined
```

## Checking the Logs
```shell
journalctl -u canined -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
canined status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$JACKAL_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
canined keys add $JACKAL_WALLET
```  

### Importing an Existing Wallet
```shell
canined keys add $JACKAL_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
JACKAL_WALLET_ADDRESS=$(canined keys show $JACKAL_WALLET -a)
JACKAL_VALOPER_ADDRESS=$(canined keys show $JACKAL_WALLET --bech val -a)
```

```shell
echo 'export JACKAL_WALLET_ADDRESS='${JACKAL_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export JACKAL_VALOPER_ADDRESS='${JACKAL_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
canined query bank balances $JACKAL_WALLET_ADDRESS
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
canined tx staking create-validator \
--amount=490000000000000000000ujkl \
--pubkey=$(canined tendermint show-validator) \
--moniker=$JACKAL_NODENAME \
--chain-id=$JACKAL_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ujkl \
--gas-adjustment=1.5 \
--gas=auto \
--from=$JACKAL_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

### Completely Deleting the Node
```
systemctl stop canined && \
systemctl disable canined && \
rm /etc/systemd/system/canined.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .canine canine-chain && \
rm -rf $(which canined)
sed -i '/JACKAL_/d' ~/.bash_profile
```
​