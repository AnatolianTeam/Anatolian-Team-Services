---
title: 💾 Installation
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg
keywords: [entangle, installation, snapshot, statesync, update]
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
* `$ENT_NODENAME` your validator name
* `$ENT_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export ENT_NODENAME=$ENT_NODENAME"  >> $HOME/.bash_profile
echo "export ENT_WALLET=$ENT_WALLET" >> $HOME/.bash_profile
echo "export ENT_PORT=16" >> $HOME/.bash_profile
echo "export ENT_CHAIN_ID=entangle_33133-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`ENT_NODENAME`) and Wallet (`ENT_WALLET`) name is `Anatolian-Guide` and the port you will use (`ENT_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export ENT_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ENT_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ENT_PORT=16" >> $HOME/.bash_profile
echo "export ENT_CHAIN_ID=entangle_33133-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Entangle
```
cd $HOME
cd $HOME
git clone https://github.com/Entangle-Protocol/entangle-blockchain
cd entangle-blockchain
make install
entangled version
```
The version output will be `1.0.1`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
entangled config keyring-backend test
entangled config chain-id $ENT_CHAIN_ID
entangled init --chain-id $ENT_CHAIN_ID $ENT_NODENAME

# Copying the Genesis and addrbook Files
wget https://testnet.anatolianteam.com/entangle/genesis.json -O $HOME/.entangled/config/genesis.json
wget https://testnet.anatolianteam.com/entangle/addrbook.json -O $HOME/.entangled/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001aNGL "|g' $HOME/.entangled/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.entangled/config/config.toml

# Set up SEED and PEERS
SEEDS="b65b6270a053b8a5b5bc037aa90d5790fcc555fa@entangle-testnet-seed.itrocket.net:29656"
PEERS="fe8c954ed37bfc3e5fc5eaf19b861d8a5947b2f5@entangle-testnet-peer.itrocket.net:29656,1786a89fc8ae055b775276c8f64197653aa9efa0@159.203.128.93:26656,7bff324a17426a00731f425ae29fe6ef05eebbac@213.239.217.52:33656,0188b9ed89f9aa60cf3691fbe336e0a36fc6bb9c@[2a02:4780:d:bec4::1]:26656,b02c2619b81356ce5ee0c0c832ab9f96cec46e87@8.217.49.46:26656,f7faae4bb64024ca0d7eb81f525cf33ea7d7e94f@89.58.18.47:27464,4895c46a55c7991f998277bd2f8ab45bcaba77cd@167.86.84.79:26656,68b0732e1a6ea2c37dbe4085b43b1a7c8d9bf8c6@185.209.223.103:14656,2cd6d17b7fcf2930684ba9332f3cae8219d1f1ea@46.250.236.48:26656,3d15d612fad5ffa14dce2dc99d29d651df399db2@144.217.68.182:17956,a24ccb1bcfdb940b640a9288021841a3386b6c0f@65.109.68.87:23656"
sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.entangled/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.entangled/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.entangled/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.entangled/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.entangled/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.entangled/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${ENT_PORT}658%g;
s%:26657%:${ENT_PORT}657%g;
s%:6060%:${ENT_PORT}060%g;
s%:26656%:${ENT_PORT}656%g;
s%:26660%:${ENT_PORT}660%g
" $HOME/.entangled/config/config.toml
sed -i.bak -e "
s%:1317%:${ENT_PORT}317%g; 
s%:8080%:${ENT_PORT}080%g; 
s%:9090%:${ENT_PORT}090%g; 
s%:9091%:${ENT_PORT}091%g
s%:8545%:${ENT_PORT}545%g;
s%:8546%:${ENT_PORT}546%g
" $HOME/.entangled/config/app.toml
sed -i.bak -e "s%:26657%:${ENT_PORT}657%g" $HOME/.entangled/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${ENT_PORT}656\"|g" ~/.entangled/config/config.toml > ~/.entangled/config/config.toml.tmp
mv ~/.entangled/config/config.toml.tmp  ~/.entangled/config/config.toml

# Creating the Service File
tee /etc/systemd/system/entangled.service > /dev/null << EOF
[Unit]
Description=Entangle Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which entangled) start
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
systemctl enable entangled
systemctl start entangled
```

## Checking the Logs
```shell
journalctl -u entangled -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
entangled status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$ENT_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
entangled keys add $ENT_WALLET
```  

### Importing an Existing Wallet
```shell
entangled keys add $ENT_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
ENT_WALLET_ADDRESS=$(entangled keys show $ENT_WALLET -a)
ENT_VALOPER_ADDRESS=$(entangled keys show $ENT_WALLET --bech val -a)
```

```shell
echo 'export ENT_WALLET_ADDRESS='${ENT_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ENT_VALOPER_ADDRESS='${ENT_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

#### Faucet
Request tokens by sending a message to the `#🚰┃testnet-faucet` channel on the Discord server as follows.

`$request Entangled_Address`

### Checking Wallet Balance
```
entangled query bank balances $ENT_WALLET_ADDRESS
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
entangled tx staking create-validator \
--amount=940000aNGL  \
--pubkey=$(entangled tendermint show-validator) \
--moniker=$ENT_NODENAME \
--chain-id=$ENT_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aNGL  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ENT_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop entangled && \
systemctl disable entangled && \
rm /etc/systemd/system/entangled.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .entangled entangle-blockchain && \
rm -rf $(which entangled)
sed -i '/ENT_/d' ~/.bash_profile
```
