---
title: 💾 Installation
description: Node installation guide.
image: ./img/Babylon-Service-Cover.jpg
keywords: [babylon, installation, snapshot, statesync, update]
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
* `$BBN_NODENAME` your validator name
* `$BBN_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export BBN_NODENAME=$BBN_NODENAME"  >> $HOME/.bash_profile
echo "export BBN_WALLET=$BBN_WALLET" >> $HOME/.bash_profile
echo "export BBN_PORT=11" >> $HOME/.bash_profile
echo "export BBN_CHAIN_ID=bbn-test-3" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`BBN_NODENAME`) and Wallet (`BBN_WALLET`) name is `Anatolian-Guide` and the port you will use (`BBN_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export BBN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export BBN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export BBN_PORT=16" >> $HOME/.bash_profile
echo "export BBN_CHAIN_ID=bbn-test-2" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Babylon
```
cd $HOME
git clone https://github.com/babylonchain/babylon.git babylon
cd babylon
git checkout v0.8.3
make install
babylond version
```
The version output will be `0.8.3`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
babylond config keyring-backend test
babylond config chain-id $BBN_CHAIN_ID
babylond init --chain-id $BBN_CHAIN_ID $BBN_NODENAME

# Copying the Genesis and addrbook File
curl -L https://testnet.anatolianteam.com/babylon/genesis.json > $HOME/.babylond/config/genesis.json
curl -L https://testnet.anatolianteam.com/babylon/addrbook.json > $HOME/.babylond/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.001ubbn"|g' $HOME/.babylond/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.babylond/config/config.toml

# Set up SEEDS and PEERS
sed -i \
  -e 's|^seeds *=.*|seeds = "8da45f9ff83b4f8dd45bbcb4f850999637fbfe3b@seed0.testnet.babylonchain.io:26656,4b1f8a774220ba1073a4e9f4881de218b8a49c99@seed1.testnet.babylonchain.io:26656"|' \
  -e 's|^peers *=.*|peers = "fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656,03ce5e1b5be3c9a81517d415f65378943996c864@18.207.168.204:26656,a5fabac19c732bf7d814cf22e7ffc23113dc9606@34.238.169.221:26656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:20656"|' \
  $HOME/.babylond/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.babylond/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.babylond/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.babylond/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.babylond/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.babylond/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${BBN_PORT}658%g;
s%:26657%:${BBN_PORT}657%g;
s%:6060%:${BBN_PORT}060%g;
s%:26656%:${BBN_PORT}656%g;
s%:26660%:${BBN_PORT}660%g
" $HOME/.babylond/config/config.toml
sed -i.bak -e "
s%:1317%:${BBN_PORT}317%g; 
s%:8080%:${BBN_PORT}080%g; 
s%:9090%:${BBN_PORT}090%g; 
s%:9091%:${BBN_PORT}091%g
" $HOME/.babylond/config/app.toml
sed -i.bak -e "s%:26657%:${BBN_PORT}657%g" $HOME/.babylond/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${BBN_PORT}656\"|g" ~/.babylond/config/config.toml > ~/.babylond/config/config.toml.tmp
mv ~/.babylond/config/config.toml.tmp  ~/.babylond/config/config.toml

# Creating the Service File
tee /etc/systemd/system/babylond.service > /dev/null << EOF
[Unit]
Description=Babylon Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which babylond) start
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
systemctl enable babylond
```

## Checking the Logs
```shell
journalctl -u babylond -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
babylond status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$BBN_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
babylond keys add $BBN_WALLET
```  

### Importing an Existing Wallet
```shell
babylond keys add $BBN_WALLET --recover
```

## Wallet and Valoper Info
Here, wallet and valoper information are added to the variable.

```shell
BBN_WALLET_ADDRESS=$(babylond keys show $BBN_WALLET -a)
BBN_VALOPER_ADDRESS=$(babylond keys show $BBN_WALLET --bech val -a)
```

```shell
echo 'export BBN_WALLET_ADDRESS='${BBN_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export BBN_VALOPER_ADDRESS='${BBN_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
babylond query bank balances $BBN_WALLET_ADDRESS
```

:::warning
If the synchronization is completed, we proceed to the following step.
:::

## Creating BLS Key and Restarting

```shell
# app.toml ve config.toml Düzenleme
sed -i -e "s|^key-name *=.*|key-name = \"$BBN_WALLET\"|" $HOME/.babylond/config/app.toml
sed -i -e "s|^timeout_commit *=.*|timeout_commit = \"10s\"|" $HOME/.babylond/config/config.toml
babylond create-bls-key $(babylond keys show $BBN_WALLET -a)
sudo systemctl restart babylond
```

## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
babylond tx checkpointing create-validator \
--amount=1000000ubbn \
--pubkey=$(babylond tendermint show-validator) \
--moniker=$BBN_NODENAME \
--chain-id=$BBN_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.1ubbn \
--gas-adjustment=1.5 \
--gas=auto \
--from=$BBN_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node
```
systemctl stop babylond && \
systemctl disable babylond && \
rm /etc/systemd/system/babylond.service && \
systemctl daemon-reload && \
cd $HOME && \
rm .babylond babylon -rf && \
rm $(which babylond) -rf
sed -i '/BBN_/d' ~/.bash_profile
```
​
