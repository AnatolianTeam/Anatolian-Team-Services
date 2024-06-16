---
title: 💾 Installation
description: Node installation guide.
image: ./img/Artela-Service-Cover.jpg
keywords: [artela, installation, snapshot, statesync, update]
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
* `$ART_NODENAME` your validator name
* `$ART_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export ART_NODENAME=$ART_NODENAME"  >> $HOME/.bash_profile
echo "export ART_WALLET=$ART_WALLET" >> $HOME/.bash_profile
echo "export ART_PORT=11" >> $HOME/.bash_profile
echo "export ART_CHAIN_ID=artela_11822-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`ART_NODENAME`) and Wallet (`ART_WALLET`) name is `Anatolian-Guide` and the port you will use (`ART_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export ART_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ART_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ART_PORT=16" >> $HOME/.bash_profile
echo "export ART_CHAIN_ID=artela_11822-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Artela
```
cd $HOME
git clone https://github.com/artela-network/artela
cd artela
git checkout v0.4.7-rc6
make install
artelad version
```
The version output will be `v0.4.7-rc6`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
artelad config keyring-backend test
artelad config chain-id $ART_CHAIN_ID
artelad init --chain-id $ART_CHAIN_ID $ART_NODENAME

# Copying the Genesis and addrbook Files
wget https://testnet.anatolianteam.com/artela/genesis.json -O $HOME/.artelad/config/genesis.json
wget https://testnet.anatolianteam.com/artela/addrbook.json -O $HOME/.artelad/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uart "|g' $HOME/.artelad/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.artelad/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.artelad/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.artelad/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.artelad/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.artelad/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.artelad/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.artelad/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${ART_PORT}658%g;
s%:26657%:${ART_PORT}657%g;
s%:6060%:${ART_PORT}060%g;
s%:26656%:${ART_PORT}656%g;
s%:26660%:${ART_PORT}660%g
" $HOME/.artelad/config/config.toml
sed -i.bak -e "
s%:8545%:${ART_PORT}545%g;
s%:8546%:${ART_PORT}546%g;
s%:6065%:${ART_PORT}065%g;
s%:1317%:${ART_PORT}317%g; 
s%:8080%:${ART_PORT}080%g; 
s%:9090%:${ART_PORT}090%g; 
s%:9091%:${ART_PORT}091%g
" $HOME/.artelad/config/app.toml
sed -i.bak -e "s%:26657%:${ART_PORT}657%g" $HOME/.artelad/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ART_PORT}656\"|g" ~/.artelad/config/config.toml > ~/.artelad/config/config.toml.tmp
mv ~/.artelad/config/config.toml.tmp  ~/.artelad/config/config.toml

# Creating the Service File
tee /etc/systemd/system/artelad.service > /dev/null << EOF
[Unit]
Description=Artela Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which artelad) start
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
systemctl enable artelad
systemctl start artelad
```

## Checking the Logs
```shell
journalctl -u artelad -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
artelad status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$ART_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
artelad keys add $ART_WALLET
```  

### Importing an Existing Wallet
```shell
artelad keys add $ART_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
ART_WALLET_ADDRESS=$(artelad keys show $ART_WALLET -a)
ART_VALOPER_ADDRESS=$(artelad keys show $ART_WALLET --bech val -a)
```

```shell
echo 'export ART_WALLET_ADDRESS='${ART_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ART_VALOPER_ADDRESS='${ART_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Learn EIP-55 Address
```shell
artelad debug addr $ART_WALLET_ADDRESS
```

#### Faucet
Request tokens by sending a message to the `#🚰┃testnet-faucet` channel on the Discord server as follows.

`$request EIP-55_Address`

### Checking Wallet Balance
```
artelad query bank balances $ART_WALLET_ADDRESS
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
artelad tx staking create-validator \
--amount=940000uart  \
--pubkey=$(artelad tendermint show-validator) \
--moniker=$ART_NODENAME \
--chain-id=$ART_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uart  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ART_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop artelad && \
systemctl disable artelad && \
rm /etc/systemd/system/artelad.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .artelad artela && \
rm -rf $(which artelad)
sed -i '/ART_/d' ~/.bash_profile
```
