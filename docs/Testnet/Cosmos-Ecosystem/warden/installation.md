---
title: 💾 Installation
description: Node installation guide.
image: ./img/Warden-Service-Cover.jpg
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
ver="1.21.6"
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
echo "export WARDEN_CHAIN_ID=buenavista-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`WARDEN_NODENAME`) and Wallet (`WARDEN_WALLET`) name is `Anatolian-Guide` and the port you will use (`WARDEN_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export WARDEN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export WARDEN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export WARDEN_PORT=16" >> $HOME/.bash_profile
echo "export WARDEN_CHAIN_ID=buenavista-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Warden Protocol
```
cd $HOME && mkdir -p go/bin/
wget https://github.com/warden-protocol/wardenprotocol/releases/download/v0.5.3/wardend_Linux_x86_64.zip
unzip wardend_Linux_x86_64.zip
rm -rf wardend_Linux_x86_64.zip
chmod +x wardend
mv wardend $HOME/go/bin/wardend
```

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
wardend config set client chain-id $WARDEN_CHAIN_ID
wardend config set client keyring-backend test
wardend init --chain-id $WARDEN_CHAIN_ID $WARDEN_NODENAME

# Copying the Genesis and addrbook Files
wget https://testnet.anatolianteam.com/warden/genesis.json -O $HOME/.warden/config/genesis.json
wget https://testnet.anatolianteam.com/warden/addrbook.json -O $HOME/.warden/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "25000000award"|g' $HOME/.warden/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.warden/config/config.toml

# Set up SEED and PEERS
SEEDS=""
PEERS="f9a3198644399763fe636c8dd42dd12d93f62279@85.10.200.82:26656,e1c61de5d437f35a715ac94b88ec62c482edc166@172.20.24.234:26656,c717995fd56dcf0056ed835e489788af4ffd8fe8@172.20.215.46:26656,4b477a8898fe3d160bfc87a3b7a2f293b8292d48@172.20.28.223:26656,d4af4ec2657c9756c87aa5b49d2d724b45f96d8b@188.165.228.73:26656,846bef6b31b20b075ff5b574d9733163b9b1958c@62.169.21.90:26656,22df256e71ba01bba80038c527a4f1103ad129d9@65.108.251.125:26656,a5d805241da9799d376b7e8a04e2cae22c323c56@10.0.102.171:26656,85abfb1a10ef88d37277e7462830890ff2f7a1ac@88.99.254.62:24656,999547a3b70a1b6a3d98fc13d4f9891354141166@10.0.101.171:26656,7cf7bf3e43f974b1c8d3a15531518d3ce8fb35de@31.220.75.164:26656,eb2e7095f86b24e8d5d286360c34e060a8db6334@188.40.85.207:12756,ee528080741055cb7067f3e0bdda9badac834fc5@81.0.249.86:11256,694dd68a81d0130f2c1af9f2b2891b5c9603cb7f@10.0.103.153:6656"
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
s%:8545%:${WARDEN_PORT}545%g;
s%:8546%:${WARDEN_PORT}546%g;
s%:6065%:${WARDEN_PORT}065%g;
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
wardend status 2>&1 | jq .sync_info
```

or
```shell
wardend status 2>&1 | jq -r .sync_info.catching_up
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

### Faucet
```shell
curl --data '{"address": "$WARDEN_WALLET_ADDRESS"}' https://faucet.buenavista.wardenprotocol.org
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
 
### Creating the validator.json File
```shell 
cd $HOME
echo "{\"pubkey\":{\"@type\":\"/cosmos.crypto.ed25519.PubKey\",\"key\":\"$(wardend comet show-validator | grep -Po '\"key\":\s*\"\K[^"]*')\"},
    \"amount\": \"9900000award\",
    \"moniker\": \"$WARDEN_NODENAME\",
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
wardend tx staking create-validator $HOME/validator.json \
    --chain-id=$WARDEN_CHAIN_ID \
    --gas-prices=0.25award \
    --gas-adjustment=1.5 \
    --gas=auto \
    --from=$WARDEN_WALLET \
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
