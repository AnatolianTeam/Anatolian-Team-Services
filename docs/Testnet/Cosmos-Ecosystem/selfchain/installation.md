---
title: 💾 Installation
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg
description: Self Chain Service Page
keywords: [selfchain, self, chain, installation, snapshot, statesync, update]
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
* `$SELF_NODENAME` your validator name
* `$SELF_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export SELF_NODENAME=$SELF_NODENAME"  >> $HOME/.bash_profile
echo "export SELF_WALLET=$SELF_WALLET" >> $HOME/.bash_profile
echo "export SELF_PORT=11" >> $HOME/.bash_profile
echo "export SELF_CHAIN_ID=self-dev-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`SELF_NODENAME`) and Wallet (`SELF_WALLET`) name is `Anatolian-Guide` and the port you will use (`SELF_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export SELF_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export SELF_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export SELF_PORT=16" >> $HOME/.bash_profile
echo "export SELF_CHAIN_ID=self-dev-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Self Chain
```
cd $HOME
mkdir -p $HOME/go/bin/
wget https://anatolianteam.com/selfchaind
chmod +x selfchaind
mv selfchaind $HOME/go/bin/
```

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
selfchaind config keyring-backend test
selfchaind config chain-id $SELF_CHAIN_ID
selfchaind init --chain-id $SELF_CHAIN_ID $SELF_NODENAME

# Copying the Genesis and addrbook Files
wget https://raw.githubusercontent.com/hotcrosscom/selfchain-genesis/main/networks/devnet/genesis.json -O $HOME/.selfchain/config/genesis.json
wget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/files/addrbook.json -O $HOME/.selfchain/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uself "|g' $HOME/.selfchain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.selfchain/config/config.toml

# Set up SEED and PEERS
SEEDS="94a7baabb2bcc00c7b47cbaa58adf4f433df9599@157.230.119.165:26656,d3b5b6ca39c8c62152abbeac4669816166d96831@165.22.24.236:26656,35f478c534e2d58dc2c4acdf3eb22eeb6f23357f@165.232.125.66:26656"
PEERS="94a7baabb2bcc00c7b47cbaa58adf4f433df9599@157.230.119.165:26656,d3b5b6ca39c8c62152abbeac4669816166d96831@165.22.24.236:26656,35f478c534e2d58dc2c4acdf3eb22eeb6f23357f@165.232.125.66:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.selfchain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.selfchain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.selfchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.selfchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.selfchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.selfchain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${SELF_PORT}658%g;
s%:26657%:${SELF_PORT}657%g;
s%:6060%:${SELF_PORT}060%g;
s%:26656%:${SELF_PORT}656%g;
s%:26660%:${SELF_PORT}660%g
" $HOME/.selfchain/config/config.toml
sed -i.bak -e "
s%:1317%:${SELF_PORT}317%g; 
s%:8080%:${SELF_PORT}080%g; 
s%:9090%:${SELF_PORT}090%g; 
s%:9091%:${SELF_PORT}091%g
" $HOME/.selfchain/config/app.toml
sed -i.bak -e "s%:26657%:${SELF_PORT}657%g" $HOME/.selfchain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${SELF_PORT}656\"|g" ~/.selfchain/config/config.toml > ~/.selfchain/config/config.toml.tmp
mv ~/.selfchain/config/config.toml.tmp  ~/.selfchain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/selfchaind.service > /dev/null << EOF
[Unit]
Description=SelfChain Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which selfchaind) start
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
systemctl enable selfchaind
systemctl start selfchaind
```

## Checking the Logs
```shell
journalctl -u selfchaind -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
selfchaind status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$SELF_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
selfchaind keys add $SELF_WALLET
```  

### Importing an Existing Wallet
```shell
selfchaind keys add $SELF_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
SELF_WALLET_ADDRESS=$(selfchaind keys show $SELF_WALLET -a)
SELF_VALOPER_ADDRESS=$(selfchaind keys show $SELF_WALLET --bech val -a)
```

```shell
echo 'export SELF_WALLET_ADDRESS='${SELF_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export SELF_VALOPER_ADDRESS='${SELF_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Learn EIP-55 Address
```shell
selfchaind debug addr $SELF_WALLET_ADDRESS
```

#### Faucet
Request tokens by sending a message to the `#🚰┃testnet-faucet` channel on the Discord server as follows.

`$request EIP-55_Address`

### Checking Wallet Balance
```
selfchaind query bank balances $SELF_WALLET_ADDRESS
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
selfchaind tx staking create-validator \
--amount=940000uself  \
--pubkey=$(selfchaind tendermint show-validator) \
--moniker=$SELF_NODENAME \
--chain-id=$SELF_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25uself  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$SELF_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

## Completely Deleting the Node 
```shell 
systemctl stop selfchaind && \
systemctl disable selfchaind && \
rm /etc/systemd/system/selfchaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .selfchain artela && \
rm -rf $(which selfchaind)
sed -i '/SELF_/d' ~/.bash_profile
```
