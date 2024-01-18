---
title: 💾 Installation
image: ./img/OKP4-Service-Cover.jpg
keywords: [okp4, open knowledge protocol, installation, snapshot, statesync, update]
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
* `$OKP4_NODENAME` your validator name
* `$OKP4_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export OKP4_NODENAME=$OKP4_NODENAME"  >> $HOME/.bash_profile
echo "export OKP4_WALLET=$OKP4_WALLET" >> $HOME/.bash_profile
echo "export OKP4_PORT=11" >> $HOME/.bash_profile
echo "export OKP4_CHAIN_ID=okp4-nemeton-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`OKP4_NODENAME`) and Wallet (`OKP4_WALLET`) name is `Anatolian-Guide` and the port you will use (`OKP4_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export OKP4_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export OKP4_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export OKP4_PORT=16" >> $HOME/.bash_profile
echo "export OKP4_CHAIN_ID=okp4-nemeton-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing OKP4
```
cd $HOME
git clone https://github.com/okp4/okp4d.git
cd okp4d
git checkout v5.0.0
make install
okp4d version
```
The version output will be `5.0.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
okp4d config keyring-backend test
okp4d config chain-id $OKP4_CHAIN_ID
okp4d init --chain-id $OKP4_CHAIN_ID $OKP4_NODENAME

# Copying the Genesis and addrbook Files
curl -L https://testnet.anatolianteam.com/okp4/genesis.json > $HOME/.babylond/config/genesis.json
curl -L https://testnet.anatolianteam.com/okp4/addrbook.json > $HOME/.babylond/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uknow "|g' $HOME/.okp4d/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.okp4d/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.okp4d/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.okp4d/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.okp4d/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.okp4d/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.okp4d/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.okp4d/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${OKP4_PORT}658%g;
s%:26657%:${OKP4_PORT}657%g;
s%:6060%:${OKP4_PORT}060%g;
s%:26656%:${OKP4_PORT}656%g;
s%:26660%:${OKP4_PORT}660%g
" $HOME/.okp4d/config/config.toml
sed -i.bak -e "
s%:1317%:${OKP4_PORT}317%g; 
s%:8080%:${OKP4_PORT}080%g; 
s%:9090%:${OKP4_PORT}090%g; 
s%:9091%:${OKP4_PORT}091%g
" $HOME/.okp4d/config/app.toml
sed -i.bak -e "s%:26657%:${OKP4_PORT}657%g" $HOME/.okp4d/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${OKP4_PORT}656\"|g" ~/.okp4d/config/config.toml > ~/.okp4d/config/config.toml.tmp
mv ~/.okp4d/config/config.toml.tmp  ~/.okp4d/config/config.toml

# Creating the Service File
tee /etc/systemd/system/okp4d.service > /dev/null << EOF
[Unit]
Description=OKP4 Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which okp4d) start
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
systemctl enable okp4d
systemctl start okp4d
```

## Checking the Logs
```shell
journalctl -u okp4d -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
okp4d status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$OKP4_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
okp4d keys add $OKP4_WALLET
```  

### Importing an Existing Wallet
```shell
okp4d keys add $OKP4_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
OKP4_WALLET_ADDRESS=$(okp4d keys show $OKP4_WALLET -a)
OKP4_VALOPER_ADDRESS=$(okp4d keys show $OKP4_WALLET --bech val -a)
```

```shell
echo 'export OKP4_WALLET_ADDRESS='${OKP4_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export OKP4_VALOPER_ADDRESS='${OKP4_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
okp4d query bank balances $OKP4_WALLET_ADDRESS
```

🔴 **If the synchronization is completed, we proceed to the following step.**


## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
okp4d tx staking create-validator \
--amount=490000000000000000000uknow  \
--pubkey=$(okp4d tendermint show-validator) \
--moniker=$OKP4_NODENAME \
--chain-id=$OKP4_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uknow  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$OKP4_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop okp4d && \
systemctl disable okp4d && \
rm /etc/systemd/system/okp4d.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .okp4d okp4d && \
rm -rf $(which okp4d)
sed -i '/OKP4_/d' ~/.bash_profile
```
