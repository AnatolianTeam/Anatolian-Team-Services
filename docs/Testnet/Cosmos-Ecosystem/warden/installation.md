---
title: 💾 Installation
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg
keywords: [warden, protocol, chain, kurulum, snapshot, statesync, güncelleme]
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
* `$WARDEN_NODENAME` your validator name
* `$WARDEN_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export WARDEN_NODENAME=$WARDEN_NODENAME"  >> $HOME/.bash_profile
echo "export WARDEN_WALLET=$WARDEN_WALLET" >> $HOME/.bash_profile
echo "export WARDEN_PORT=11" >> $HOME/.bash_profile
echo "export WARDEN_CHAIN_ID=alfama" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`WARDEN_NODENAME`) and Wallet (`WARDEN_WALLET`) name is `Anatolian-Guide` and the port you will use (`WARDEN_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export WARDEN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export WARDEN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export WARDEN_PORT=16" >> $HOME/.bash_profile
echo "export WARDEN_CHAIN_ID=alfama" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Warden Protocol
```
cd $HOME
mkdir -p $HOME/go/bin/
git clone https://github.com/warden-protocol/wardenprotocol
cd  wardenprotocol
git checkout v0.1.0

# Build binary
cd  warden/cmd/wardend
go build
mv wardend $HOME/go/bin
```
## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
wardend config chain-id $WARDEN_CHAIN_ID
wardend config keyring-backend test
wardend init --chain-id $WARDEN_CHAIN_ID $WARDEN_NODENAME

# Copying the Genesis and addrbook Files
wget https://raw.githubusercontent.com/warden-protocol/networks/main/testnet-alfama/genesis.json -O $HOME/.warden/config/genesis.json
wget ./files/addrbook.json -O $HOME/.warden/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005uward "|g' $HOME/.warden/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.warden/config/config.toml

# Set up SEED and PEERS
SEEDS=""
PEERS="6a8de92a3bb422c10f764fe8b0ab32e1e334d0bd@sentry-1.alfama.wardenprotocol.org:26656,7560460b016ee0867cae5642adace5d011c6c0ae@sentry-2.alfama.wardenprotocol.org:26656,24ad598e2f3fc82630554d98418d26cc3edf28b9@sentry-3.alfama.wardenprotocol.org:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.warden/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.warden/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.warden/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.warden/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${WARDEN_PORT}658%g;
s%:26657%:${WARDEN_PORT}657%g;
s%:6060%:${WARDEN_PORT}060%g;
s%:26656%:${WARDEN_PORT}656%g;
s%:26660%:${WARDEN_PORT}660%g
" $HOME/.warden/config/config.toml
sed -i.bak -e "
s%:1317%:${WARDEN_PORT}317%g; 
s%:8080%:${WARDEN_PORT}080%g; 
s%:9090%:${WARDEN_PORT}090%g; 
s%:9091%:${WARDEN_PORT}091%g
" $HOME/.warden/config/app.toml
sed -i.bak -e "s%:26657%:${WARDEN_PORT}657%g" $HOME/.warden/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${WARDEN_PORT}656\"|g" ~/.warden/config/config.toml > ~/.warden/config/config.toml.tmp
mv ~/.warden/config/config.toml.tmp  ~/.warden/config/config.toml

# Creating the Service File
tee /etc/systemd/system/wardend.service > /dev/null << EOF
[Unit]
Description=Warden Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which wardend) start
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
systemctl enable wardend
systemctl start wardend
```

## Checking the Logs
```shell
journalctl -u wardend -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
wardend status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$WARDEN_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
wardend keys add $WARDEN_WALLET
```  

### Importing an Existing Wallet
```shell
wardend keys add $WARDEN_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
WARDEN_WALLET_ADDRESS=$(wardend keys show $WARDEN_WALLET -a)
WARDEN_VALOPER_ADDRESS=$(wardend keys show $WARDEN_WALLET --bech val -a)
```

```shell
echo 'export WARDEN_WALLET_ADDRESS='${WARDEN_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export WARDEN_VALOPER_ADDRESS='${WARDEN_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
wardend query bank balances $WARDEN_WALLET_ADDRESS
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
wardend tx staking create-validator \
--amount=1000000uward \
--pubkey=$(wardend tendermint show-validator) \
--moniker=$WARDEN_NODENAME \
--chain-id=$WARDEN_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uward  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$WARDEN_WALLET \
--details="Always forward with the Anatolian Team 🐆" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop wardend && \
systemctl disable wardend && \
rm /etc/systemd/system/wardend.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .warden wardenprotocol && \
rm -rf $(which wardend)
sed -i '/WARDEN_/d' ~/.bash_profile
```
