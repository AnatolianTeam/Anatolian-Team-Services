---
title: 💾 Installation
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
* `$C4E_NODENAME` your validator name
* `$C4E_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export C4E_NODENAME=$C4E_NODENAME"  >> $HOME/.bash_profile
echo "export C4E_WALLET=$C4E_WALLET" >> $HOME/.bash_profile
echo "export C4E_PORT=11" >> $HOME/.bash_profile
echo "export C4E_CHAIN_ID=babajaga-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`C4E_NODENAME`) and Wallet (`C4E_WALLET`) name is `Anatolian-Guide` and the port you will use (`C4E_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export C4E_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export C4E_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export C4E_PORT=16" >> $HOME/.bash_profile
echo "export C4E_CHAIN_ID=babajaga-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Chain4Energy
```
cd $HOME
git clone https://github.com/chain4energy/c4e-chain.git
cd c4e-chain
git checkout tags/v1.3.0
make install
c4ed version
```
The version output will be `0.13.0`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
c4ed config keyring-backend test
c4ed config chain-id $C4E_CHAIN_ID
c4ed init --chain-id $C4E_CHAIN_ID $C4E_NODENAME

# Copying the Genesis and addrbook Files
wget https://raw.githubusercontent.com/chain4energy/c4e-chains/main/babajaga-1/genesis.json -O $HOME/.c4e-chain/config/genesis.json
wget https://raw.githubusercontent.com/koltigin/C4E-Kurulum-Rehberi/main/addrbook.json -O $HOME/.c4e-chain/config/addrbook.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uc4e "|g' $HOME/.c4e-chain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.c4e-chain/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.c4e-chain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.c4e-chain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.c4e-chain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.c4e-chain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.c4e-chain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.c4e-chain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${C4E_PORT}658%g;
s%:26657%:${C4E_PORT}657%g;
s%:6060%:${C4E_PORT}060%g;
s%:26656%:${C4E_PORT}656%g;
s%:26660%:${C4E_PORT}660%g
" $HOME/.c4e-chain/config/config.toml
sed -i.bak -e "
s%:1317%:${C4E_PORT}317%g; 
s%:8080%:${C4E_PORT}080%g; 
s%:9090%:${C4E_PORT}090%g; 
s%:9091%:${C4E_PORT}091%g
" $HOME/.c4e-chain/config/app.toml
sed -i.bak -e "s%:26657%:${C4E_PORT}657%g" $HOME/.c4e-chain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${C4E_PORT}656\"|g" ~/.c4e-chain/config/config.toml > ~/.c4e-chain/config/config.toml.tmp
mv ~/.c4e-chain/config/config.toml.tmp  ~/.c4e-chain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/c4ed.service > /dev/null << EOF
[Unit]
Description=C4E Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which c4ed) start
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
systemctl enable c4ed
systemctl start c4ed
```

## Checking the Logs
```shell
journalctl -u c4ed -f -o cat
```  

🔴 **AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.**

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
c4ed status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$C4E_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
c4ed keys add $C4E_WALLET
```  

### Importing an Existing Wallet
```shell
c4ed keys add $C4E_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
C4E_WALLET_ADDRESS=$(c4ed keys show $C4E_WALLET -a)
C4E_VALOPER_ADDRESS=$(c4ed keys show $C4E_WALLET --bech val -a)
```

```shell
echo 'export C4E_WALLET_ADDRESS='${C4E_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export C4E_VALOPER_ADDRESS='${C4E_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
c4ed query bank balances $C4E_WALLET_ADDRESS
```

🔴 **If the synchronization is completed, we proceed to the following step.**


## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team 🚀`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
c4ed tx staking create-validator \
--amount=490000000000000000000uc4e  \
--pubkey=$(c4ed tendermint show-validator) \
--moniker=$C4E_NODENAME \
--chain-id=$C4E_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uc4e  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$C4E_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node
```shell 
systemctl stop c4ed && \
systemctl disable c4ed && \
rm /etc/systemd/system/c4ed.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .c4e-chain c4e-chain && \
rm -rf $(which c4ed)
sed -i '/C4E_/d' ~/.bash_profile
```
