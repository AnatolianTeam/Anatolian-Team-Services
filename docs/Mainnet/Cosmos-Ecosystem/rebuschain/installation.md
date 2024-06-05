---
title: 💾 Installation
description: Node installation guide.
image: ./img/Rebus-Service-Cover.jpg
keywords: [rebus, chain, network, installation, snapshot, statesync, update]
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
* `$REBUS_NODENAME` your validator name
* `$REBUS_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export REBUS_NODENAME=$REBUS_NODENAME"  >> $HOME/.bash_profile
echo "export REBUS_WALLET=$REBUS_WALLET" >> $HOME/.bash_profile
echo "export REBUS_PORT=11" >> $HOME/.bash_profile
echo "export REBUS_CHAIN_ID=reb_1111-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`REBUS_NODENAME`) and Wallet (`REBUS_WALLET`) name is `Anatolian-Guide` and the port you will use (`REBUS_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export REBUS_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export REBUS_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export REBUS_PORT=16" >> $HOME/.bash_profile
echo "export REBUS_CHAIN_ID=reb_1111-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Rebus
```shell
cd $HOME
git clone https://github.com/rebuschain/rebus.core.git 
cd rebus.core
git checkout v0.4.0
make install
rebusd version
```
The version output will be `v0.4.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
rebusd config keyring-backend test
rebusd config chain-id $REBUS_CHAIN_ID
rebusd init --chain-id $REBUS_CHAIN_ID $REBUS_NODENAME

# Copying the Genesis File
curl https://raw.githubusercontent.com/rebuschain/rebus.mainnet/master/reb_1111-1/genesis.zip > ~/.rebusd/config/genesis.zip
cd $HOME/.rebusd/config/ 
unzip genesis.zip && rm -rf genesis.zip

wget  -O $HOME/.rebusd/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25arebus"|g' $HOME/.rebusd/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.rebusd/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.rebusd/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.rebusd/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.rebusd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.rebusd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.rebusd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.rebusd/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${REBUS_PORT}658%g;
s%:26657%:${REBUS_PORT}657%g;
s%:6060%:${REBUS_PORT}060%g;
s%:26656%:${REBUS_PORT}656%g;
s%:26660%:${REBUS_PORT}660%g
" $HOME/.rebusd/config/config.toml
sed -i.bak -e "
s%:8545%:${REBUS_PORT}545%g;
s%:8546%:${REBUS_PORT}546%g;
s%:6065%:${REBUS_PORT}065%g;
s%:1317%:${REBUS_PORT}317%g; 
s%:8080%:${REBUS_PORT}080%g; 
s%:9090%:${REBUS_PORT}090%g; 
s%:9091%:${REBUS_PORT}091%g
" $HOME/.rebusd/config/app.toml
sed -i.bak -e "s%:26657%:${REBUS_PORT}657%g" $HOME/.rebusd/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${REBUS_PORT}656\"|g" ~/.rebusd/config/config.toml > ~/.rebusd/config/config.toml.tmp
mv ~/.rebusd/config/config.toml.tmp  ~/.rebusd/config/config.toml

# Creating the Service File
tee /etc/systemd/system/rebusd.service > /dev/null << EOF
[Unit]
Description=Rebus Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which rebusd) start
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
systemctl enable rebusd
```

## Checking the Logs
```shell
journalctl -u rebusd -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
rebusd status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$REBUS_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
rebusd keys add $REBUS_WALLET
```  

### Importing an Existing Wallet
```shell
rebusd keys add $REBUS_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
REBUS_WALLET_ADDRESS=$(rebusd keys show $REBUS_WALLET -a)
REBUS_VALOPER_ADDRESS=$(rebusd keys show $REBUS_WALLET --bech val -a)
```

```shell
echo 'export REBUS_WALLET_ADDRESS='${REBUS_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export REBUS_VALOPER_ADDRESS='${REBUS_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
rebusd query bank balances $REBUS_WALLET_ADDRESS
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
rebusd tx staking create-validator \
--amount=490000000000000000000arebus \
--pubkey=$(rebusd tendermint show-validator) \
--moniker=$REBUS_NODENAME \
--chain-id=$REBUS_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25arebus \
--gas-adjustment=1.5 \
--gas=auto \
--from=$REBUS_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

### Completely Deleting the Node
```
systemctl stop rebusd && \
systemctl disable rebusd && \
rm /etc/systemd/system/rebusd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .rebusd rebus.core && \
rm -rf $(which rebusd)
sed -i '/REBUS_/d' ~/.bash_profile
```
​