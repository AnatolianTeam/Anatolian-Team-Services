---
title: 💾 Installation
description: Node installation guide.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, chain, kurulum, snapshot, statesync, güncelleme]
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
ver="1.22.5"
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
* `$INITIA_NODENAME` your validator name
* `$INITIA_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export INITIA_NODENAME=$INITIA_NODENAME"  >> $HOME/.bash_profile
echo "export INITIA_WALLET=$INITIA_WALLET" >> $HOME/.bash_profile
echo "export INITIA_PORT=11" >> $HOME/.bash_profile
echo "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`INITIA_NODENAME`) and Wallet (`INITIA_WALLET`) name is `Anatolian-Guide` and the port you will use (`INITIA_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export INITIA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export INITIA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export INITIA_PORT=16" >> $HOME/.bash_profile
echo "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Initia Protocol
```
cd $HOME
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.12
make install
```

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
initiad config set client chain-id $INITIA_CHAIN_ID
initiad config set client keyring-backend test
initiad init --chain-id $INITIA_CHAIN_ID $INITIA_NODENAME

# Copying the Genesis and addrbook Files
wget https://testnet.anatolianteam.com/initia/genesis.json -O $HOME/.initia/config/genesis.json
wget https://testnet.anatolianteam.com/initia/addrbook.json -O $HOME/.initia/config/addrbook.json

# Set up the minimum gas price
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.15uinit,0.01uusdc"|g' $HOME/.initia/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.initia/config/config.toml

# Set up SEED and PEERS
SEEDS="2eaa272622d1ba6796100ab39f58c75d458b9dbc@34.142.181.82:26656,c28827cb96c14c905b127b92065a3fb4cd77d7f6@testnet-seeds.whispernode.com:25756"
PEERS="0cb7dc2a96dfdf228547ef4a89da838ffc036f39@85.10.200.82:26656,093e1b89a498b6a8760ad2188fbda30a05e4f300@35.240.207.217:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.initia/config/config.toml


# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.initia/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.initia/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.initia/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${INITIA_PORT}658%g;
s%:26657%:${INITIA_PORT}657%g;
s%:6060%:${INITIA_PORT}060%g;
s%:26656%:${INITIA_PORT}656%g;
s%:26660%:${INITIA_PORT}660%g
" $HOME/.initia/config/config.toml
sed -i.bak -e "
s%:1317%:${INITIA_PORT}317%g; 
s%:8080%:${INITIA_PORT}080%g; 
s%:9090%:${INITIA_PORT}090%g; 
s%:9091%:${INITIA_PORT}091%g
" $HOME/.initia/config/app.toml
sed -i.bak -e "s%:26657%:${INITIA_PORT}657%g" $HOME/.initia/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${INITIA_PORT}656\"|g" ~/.initia/config/config.toml > ~/.initia/config/config.toml.tmp
mv ~/.initia/config/config.toml.tmp  ~/.initia/config/config.toml

# Creating the Service File
tee /etc/systemd/system/initiad.service > /dev/null << EOF
[Unit]
Description=Initia Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which initiad) start
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
systemctl enable initiad
systemctl start initiad
```

## Checking the Logs
```shell
journalctl -u initiad -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
initiad status 2>&1 | jq .sync_info
```

or
```shell
initiad status 2>&1 | jq -r .sync_info.catching_up
```

## Wallet

### Creating a New Wallet
We do not change the `$INITIA_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
initiad keys add $INITIA_WALLET
```  

### Importing an Existing Wallet
```shell
initiad keys add $INITIA_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
INITIA_WALLET_ADDRESS=$(initiad keys show $INITIA_WALLET -a)
INITIA_VALOPER_ADDRESS=$(initiad keys show $INITIA_WALLET --bech val -a)
```

```shell
echo 'export INITIA_WALLET_ADDRESS='${INITIA_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export INITIA_VALOPER_ADDRESS='${INITIA_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Faucet

https://faucet.testnet.initia.xyz

### Checking Wallet Balance
```
initiad query bank balances $INITIA_WALLET_ADDRESS
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
 
### Creating the validator.json File
```shell 
cd $HOME
echo "{\"pubkey\":{\"@type\":\"/cosmos.crypto.ed25519.PubKey\",\"key\":\"$(initiad comet show-validator | grep -Po '\"key\":\s*\"\K[^"]*')\"},
    \"amount\": \"9900000uusdc\",
    \"moniker\": \"$INITIA_NODENAME\",
    \"commission-rate\": \"0.1\",
    \"commission-max-rate\": \"0.2\",
    \"commission-max-change-rate\": \"0.01\",
    \"min-self-delegation\": \"1\",
    \"details\": \"Always forward with the Anatolian Team 🐆\",
    \"security\": \"xxxxxxx@gmail.com\",
    \"website\": \"https://anatolianteam.com\",
    \"identity\": \"XXXX1111XXXX1111\"
}" > validator.json
```

### Creating Validator Using the json File
```shell 
initiad tx staking create-validator $HOME/validator.json \
    --chain-id=$INITIA_CHAIN_ID \
    --gas-prices=0.25uusdc \
    --gas-adjustment=1.5 \
    --gas=auto \
    --from=$INITIA_WALLET \
    --yes
```

## Completely Deleting the Node 
```shell 
systemctl stop initiad && \
systemctl disable initiad && \
rm /etc/systemd/system/initiad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .initia initia && \
rm -rf $(which initiad)
sed -i '/INITIA_/d' ~/.bash_profile
```
