---
title: 💾 Installation
description: Node installation guide.
image: ./img/Stride-Service-Cover.jpg
keywords: [stride, zone, network, installation, snapshot, statesync, update]
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
* `$STRD_NODENAME` your validator name
* `$STRD_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export STRD_NODENAME=$STRD_NODENAME"  >> $HOME/.bash_profile
echo "export STRD_WALLET=$STRD_WALLET" >> $HOME/.bash_profile
echo "export STRD_PORT=11" >> $HOME/.bash_profile
echo "export STRD_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`STRD_NODENAME`) and Wallet (`STRD_WALLET`) name is `Anatolian-Guide` and the port you will use (`STRD_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export STRD_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export STRD_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export STRD_PORT=16" >> $HOME/.bash_profile
echo "export STRD_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Stride
```shell
cd $HOME
git clone https://github.com/Stride-Labs/stride.git && cd stride
git checkout v22.0.0
make install
strided version
```
The version output will be `v18.0.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
strided config keyring-backend test
strided config chain-id $STRD_CHAIN_ID
strided init --chain-id $STRD_CHAIN_ID $STRD_NODENAME

# Copying the Genesis File
wget https://raw.githubusercontent.com/Stride-Labs/stride/main/genesis/genesis.json -O $HOME/.stride/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25ustrd"|g' $HOME/.stride/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.stride/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.stride/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.stride/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.stride/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.stride/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.stride/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.stride/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${STRD_PORT}658%g;
s%:26657%:${STRD_PORT}657%g;
s%:6060%:${STRD_PORT}060%g;
s%:26656%:${STRD_PORT}656%g;
s%:26660%:${STRD_PORT}660%g
" $HOME/.stride/config/config.toml
sed -i.bak -e "
s%:8545%:${STRD_PORT}545%g;
s%:8546%:${STRD_PORT}546%g;
s%:6065%:${STRD_PORT}065%g;
s%:1317%:${STRD_PORT}317%g; 
s%:8080%:${STRD_PORT}080%g; 
s%:9090%:${STRD_PORT}090%g; 
s%:9091%:${STRD_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${STRD_PORT}657%g" $HOME/.stride/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${STRD_PORT}656\"|g" ~/.stride/config/config.toml > ~/.stride/config/config.toml.tmp
mv ~/.stride/config/config.toml.tmp  ~/.stride/config/config.toml

# Creating the Service File
tee /etc/systemd/system/strided.service > /dev/null << EOF
[Unit]
Description=Stride Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which strided) start
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
systemctl enable strided
```

## Checking the Logs
```shell
journalctl -u strided -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
strided status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$STRD_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
strided keys add $STRD_WALLET
```  

### Importing an Existing Wallet
```shell
strided keys add $STRD_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
STRD_WALLET_ADDRESS=$(strided keys show $STRD_WALLET -a)
STRD_VALOPER_ADDRESS=$(strided keys show $STRD_WALLET --bech val -a)
```

```shell
echo 'export STRD_WALLET_ADDRESS='${STRD_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export STRD_VALOPER_ADDRESS='${STRD_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
strided query bank balances $STRD_WALLET_ADDRESS
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
strided tx staking create-validator \
--amount=490000000000000000000ustrd \
--pubkey=$(strided tendermint show-validator) \
--moniker=$STRD_NODENAME \
--chain-id=$STRD_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ustrd \
--gas-adjustment=1.5 \
--gas=auto \
--from=$STRD_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

### Completely Deleting the Node
```
systemctl stop strided && \
systemctl disable strided && \
rm /etc/systemd/system/strided.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .strided stride && \
rm -rf $(which strided)
sed -i '/STRD_/d' ~/.bash_profile
```
​