---
title: 💾 Installation
description: Node installation guide.
image: ./img/Mantra-Service-Cover.jpg
keywords: [mantra, chain, installation, snapshot, statesync, update]
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
* `$MANTRA_NODENAME` your validator name
* `$MANTRA_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export MANTRA_NODENAME=$MANTRA_NODENAME" >> $HOME/.bash_profile
echo "export MANTRA_WALLET=$MANTRA_WALLET" >> $HOME/.bash_profile
echo "export MANTRA_PORT=11" >> $HOME/.bash_profile
echo "export MANTRA_CHAIN_ID=mantrachain-testnet-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`MANTRA_NODENAME`) and Wallet (`MANTRA_WALLET`) name is `Anatolian-Guide` and the port you will use (`MANTRA_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export MANTRA_NODENAME=Anatolian-Guide" >> $HOME/.bash_profile
echo "export MANTRA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export MANTRA_PORT=16" >> $HOME/.bash_profile
echo "export MANTRA_CHAIN_ID=mantrachain-testnet-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Babylon
```
cd $HOME
wget -O /usr/lib/libwasmvm.x86_64.so https://github.com/CosmWasm/wasmvm/releases/download/v1.3.0/libwasmvm.x86_64.so
wget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/mantra/files/mantrachaind-linux-amd64.zip
unzip mantrachaind-linux-amd64.zip
rm mantrachaind-linux-amd64.zip
mv mantrachaind $HOME/go/bin
mantrachaind version
```
The version output will be `1.0.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
mantrachaind config keyring-backend test
mantrachaind config chain-id $MANTRA_CHAIN_ID
mantrachaind init --chain-id $MANTRA_CHAIN_ID $MANTRA_NODENAME

# Copying the Genesis and addrbook File
curl -L https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/mantra/files/genesis.json > $HOME/.mantrachain/config/genesis.json
curl -L https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/mantra/files/addrbook.json > $HOME/.mantrachain/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.002uaum"|g' $HOME/.mantrachain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.mantrachain/config/config.toml

# Set up SEEDS and PEERS
SEEDS="69fa5f7927f2b013f152b6dfc56324156feb1973@34.172.80.207:26656"
PEERS="182a37a556ff0b6733fe58020e7746de3292492d@35.222.198.102:26656,64691a4202c1ad29a416b21ce21bfc9659783406@34.136.169.18:26656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.mantrachain/config/config.toml
sed -i.bak -e "s/^seeds =.*/seeds = \"$SEEDS\"/" $HOME/.mantrachain/config/config.toml
sed -i -e "s/^filter_peers *=.*/filter_peers = \"true\"/" $HOME/.mantrachain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.mantrachain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.mantrachain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.mantrachain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.mantrachain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.mantrachain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${MANTRA_PORT}658%g;
s%:26657%:${MANTRA_PORT}657%g;
s%:6060%:${MANTRA_PORT}060%g;
s%:26656%:${MANTRA_PORT}656%g;
s%:26660%:${MANTRA_PORT}660%g
" $HOME/.mantrachain/config/config.toml
sed -i.bak -e "
s%:1317%:${MANTRA_PORT}317%g; 
s%:8080%:${MANTRA_PORT}080%g; 
s%:9090%:${MANTRA_PORT}090%g; 
s%:9091%:${MANTRA_PORT}091%g
" $HOME/.mantrachain/config/app.toml
sed -i.bak -e "s%:26657%:${MANTRA_PORT}657%g" $HOME/.mantrachain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${MANTRA_PORT}656\"|g" ~/.mantrachain/config/config.toml > ~/.mantrachain/config/config.toml.tmp
mv ~/.mantrachain/config/config.toml.tmp  ~/.mantrachain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/mantrachaind.service > /dev/null << EOF
[Unit]
Description=Mantra Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which mantrachaind) start
Restart=on-failure
RestartSec=10
LimitNOFILE=10000

[Install]
WantedBy=multi-user.target
EOF
```

## Enabling the Service
```shell
systemctl daemon-reload
systemctl enable mantrachaind
```

## Checking the Logs
```shell
journalctl -u mantrachaind -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
mantrachaind status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$MANTRA_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
mantrachaind keys add $MANTRA_WALLET
```  

### Importing an Existing Wallet
```shell
mantrachaind keys add $MANTRA_WALLET --recover
```

## Wallet and Valoper Info
Here, wallet and valoper information are added to the variable.

```shell
MANTRA_WALLET_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET -a)
MANTRA_VALOPER_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET --bech val -a)
```

```shell
echo 'export MANTRA_WALLET_ADDRESS='${MANTRA_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export MANTRA_VALOPER_ADDRESS='${MANTRA_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
mantrachaind query bank balances $MANTRA_WALLET_ADDRESS
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
mantrachaind tx staking create-validator \
--amount=1000000uaum \
--pubkey=$(mantrachaind tendermint show-validator) \
--moniker=$MANTRA_NODENAME \
--chain-id=$MANTRA_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.1uaum \
--gas-adjustment=1.5 \
--gas=auto \
--from=$MANTRA_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node
```
systemctl stop mantrachaind && \
systemctl disable mantrachaind && \
rm /etc/systemd/system/mantrachaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm .mantrachain babylon -rf && \
rm $(which mantrachaind) -rf
sed -i '/MANTRA_/d' ~/.bash_profile
```
​
