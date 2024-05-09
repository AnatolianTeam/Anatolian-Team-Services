---
title: 💾 Installation
description: Node installation guide.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, modular, chain, installation, snapshot, statesync, update]
---

# Installation

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"
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
* `$OG_NODENAME` your validator name
* `$OG_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export OG_NODENAME=$OG_NODENAME"  >> $HOME/.bash_profile
echo "export OG_WALLET=$OG_WALLET" >> $HOME/.bash_profile
echo "export OG_PORT=11" >> $HOME/.bash_profile
echo "export OG_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`OG_NODENAME`) and Wallet (`OG_WALLET`) name is `Anatolian-Guide` and the port you will use (`OG_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export OG_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export OG_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export OG_PORT=16" >> $HOME/.bash_profile
echo "export OG_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing 0G
```
cd $HOME
git clone -b v0.1.0 https://github.com/0glabs/0g-chain.git
./0g-chain/networks/testnet/install.sh
source .profile
0gchaind version
```

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
0gchaind config chain-id $OG_CHAIN_ID
0gchaind config keyring-backend test
0gchaind init --chain-id $OG_CHAIN_ID $OG_NODENAME

# Copying the Genesis and addrbook Files
wget https://github.com/0glabs/0g-chain/releases/download/v0.1.0/genesis.json -O $HOME/.0gchain/config/genesis.json
wget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.0gchain/config/addrbook.json

# Set up the minimum gas price
sed -i "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0ua0gi\"/" $HOME/.0gchain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.0gchain/config/config.toml

# Set up SEED and PEERS
PEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326,b2a30b824a4358f8bc2ee648770b31b5eba3a853@85.10.200.82:26656"
SEEDS="c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,44d11d4ba92a01b520923f51632d2450984d5886@54.176.175.48:26656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,f878d40c538c8c23653a5b70f615f8dccec6fb9f@54.215.187.94:26656"

sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.0gchain/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.0gchain/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.0gchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.0gchain/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.0gchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.0gchain/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${OG_PORT}658%g;
s%:26657%:${OG_PORT}657%g;
s%:6060%:${OG_PORT}060%g;
s%:26656%:${OG_PORT}656%g;
s%:26660%:${OG_PORT}660%g
" $HOME/.0gchain/config/config.toml
sed -i.bak -e "
s%:1317%:${OG_PORT}317%g; 
s%:8080%:${OG_PORT}080%g; 
s%:9090%:${OG_PORT}090%g; 
s%:9091%:${OG_PORT}091%g
" $HOME/.0gchain/config/app.toml
sed -i.bak -e "s%:26657%:${OG_PORT}657%g" $HOME/.0gchain/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${OG_PORT}656\"|g" ~/.0gchain/config/config.toml > ~/.0gchain/config/config.toml.tmp
mv ~/.0gchain/config/config.toml.tmp  ~/.0gchain/config/config.toml

# Creating the Service File
tee /etc/systemd/system/0gchaind.service > /dev/null << EOF
[Unit]
Description=0G Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which 0gchaind) start --home $HOME
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
systemctl enable 0gchaind
systemctl start 0gchaind
```

## Checking the Logs
```shell
journalctl -u 0gchaind -f -o cat
```  

## StateSync
```shell
systemctl stop 0gchaind

cp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup
0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book

SNAP_RPC="https://rpc-t-0g.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.0gchain/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.0gchain/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.0gchain/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.0gchain/config/config.toml

mv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json

systemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat
```

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
0gchaind status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$OG_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
0gchaind keys add $OG_WALLET
```  

### Importing an Existing Wallet
```shell
0gchaind keys add $OG_WALLET --recover
```

### Learning Your EVM Address
```shell
echo "0x$(0gchaind debug addr $(0gchaind keys show $OG_WALLET -a) | grep hex | awk '{print $3}')"
```

### Faucet
And then request tokens from the [faucet](https://faucet.0g.ai/) to your address above.

### Add Network to Wallet
| Field | Details |
| ------------ | ------------ |
| **Network name** |0g Newton Testnet |
| **New RPC URL** | https://rpc-testnet.0g.ai/ |
| **Chain ID** | 9000 |
| **Currency symbol:** | A0GI |

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
OG_WALLET_ADDRESS=$(0gchaind keys show $OG_WALLET -a)
OG_VALOPER_ADDRESS=$(0gchaind keys show $OG_WALLET --bech val -a)
```

```shell
echo 'export OG_WALLET_ADDRESS='${OG_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export OG_VALOPER_ADDRESS='${OG_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
0gchaind query bank balances $OG_WALLET_ADDRESS
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
0gchaind tx staking create-validator \
--amount=10000000000000000aevmos \
--pubkey=$(0gchaind tendermint show-validator) \
--moniker=$OG_NODENAME \
--chain-id=$OG_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25aevmos  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$OG_WALLET \
--details="Always forward with the Anatolian Team 🐆" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```
:::info
If you get an error, add this before `--yes`: `--node=https://rpc-t-0g.anatolianteam.com:443 \`
::::

## Completely Deleting the Node 
```shell 
systemctl stop 0gchaind && \
systemctl disable 0gchaind && \
rm /etc/systemd/system/0gchaind.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .0gchain 0g-evmos && \
rm -rf $(which 0gchaind)
sed -i '/OG_/d' ~/.bash_profile
```
