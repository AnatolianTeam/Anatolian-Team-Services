---
title: 💾 Installation
description: Node installation guide.
image: ./img/Empower-Service-Cover.jpg
keywords: [empower, chain, empowerchain, network, installation, snapshot, statesync, update]
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
* `$EMPOW_NODENAME` your validator name
* `$EMPOW_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export EMPOW_NODENAME=$EMPOW_NODENAME"  >> $HOME/.bash_profile
echo "export EMPOW_WALLET=$EMPOW_WALLET" >> $HOME/.bash_profile
echo "export EMPOW_PORT=11" >> $HOME/.bash_profile
echo "export EMPOW_CHAIN_ID=empowerchain-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`EMPOW_NODENAME`) and Wallet (`EMPOW_WALLET`) name is `Anatolian-Guide` and the port you will use (`EMPOW_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export EMPOW_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export EMPOW_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export EMPOW_PORT=16" >> $HOME/.bash_profile
echo "export EMPOW_CHAIN_ID=empowerchain-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Empower
```shell
cd $HOME
wget https://github.com/EmpowerPlastic/empowerchain/releases/download/v2.0.0/empowerd-v2.0.0-linux-amd64.zip
unzip empowerd-v2.0.0-linux-amd64.zip && rm -rf empowerd-v2.0.0-linux-amd64.zip
chmod +x empowerd
mv empowerd $HOME/go/bin/
empowerd version
```
The version output will be `v2.0.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
empowerd config keyring-backend test
empowerd config chain-id $EMPOW_CHAIN_ID
empowerd init --chain-id $EMPOW_CHAIN_ID $EMPOW_NODENAME

# Copying the Genesis File
curl -L https://github.com/EmpowerPlastic/empowerchain/raw/main/mainnet/empowerchain-1/genesis.tar.gz | tar -xz -C $HOME/.empowerchain/config/

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.025umpwr"|g' $HOME/.empowerchain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.empowerchain/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.empowerchain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.empowerchain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.empowerchain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${EMPOW_PORT}658%g;
s%:26657%:${EMPOW_PORT}657%g;
s%:6060%:${EMPOW_PORT}060%g;
s%:26656%:${EMPOW_PORT}656%g;
s%:26660%:${EMPOW_PORT}660%g
" $HOME/.empowerchain/config/config.toml
sed -i.bak -e "
s%:8545%:${EMPOW_PORT}545%g;
s%:8546%:${EMPOW_PORT}546%g;
s%:6065%:${EMPOW_PORT}065%g;
s%:1317%:${EMPOW_PORT}317%g; 
s%:8080%:${EMPOW_PORT}080%g; 
s%:9090%:${EMPOW_PORT}090%g; 
s%:9091%:${EMPOW_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${EMPOW_PORT}657%g" $HOME/.empowerchain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${EMPOW_PORT}656\"|g" ~/.empowerchain/config/config.toml > ~/.empowerchain/config/config.toml.tmp
mv ~/.empowerd/config/config.toml.tmp  ~/.empowerchain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/empowerd.service > /dev/null << EOF
[Unit]
Description=Empower Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which empowerd) start
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
systemctl enable empowerd
```

## Checking the Logs
```shell
journalctl -u empowerd -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
empowerd status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$EMPOW_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
empowerd keys add $EMPOW_WALLET
```  

### Importing an Existing Wallet
```shell
empowerd keys add $EMPOW_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
EMPOW_WALLET_ADDRESS=$(empowerd keys show $EMPOW_WALLET -a)
EMPOW_VALOPER_ADDRESS=$(empowerd keys show $EMPOW_WALLET --bech val -a)
```

```shell
echo 'export EMPOW_WALLET_ADDRESS='${EMPOW_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export EMPOW_VALOPER_ADDRESS='${EMPOW_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
empowerd query bank balances $EMPOW_WALLET_ADDRESS
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
empowerd tx staking create-validator \
--amount=490000000000000000000umpwr \
--pubkey=$(empowerd tendermint show-validator) \
--moniker=$EMPOW_NODENAME \
--chain-id=$EMPOW_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25umpwr \
--gas-adjustment=1.5 \
--gas=auto \
--from=$EMPOW_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

### Completely Deleting the Node
```
systemctl stop empowerd && \
systemctl disable empowerd && \
rm /etc/systemd/system/empowerd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .empowerchain empowerchain && \
rm -rf $(which empowerd)
sed -i '/EMPOW_/d' ~/.bash_profile
```
​