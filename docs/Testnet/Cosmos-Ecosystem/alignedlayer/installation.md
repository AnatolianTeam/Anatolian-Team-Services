---
title: 💾 Installation
description: Node installation guide.
image: ./img/Aligned-Service-Cover.jpg
keywords: [Aligned, Layer, alignedlayer, installation, snapshot, statesync, update]
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
* `$ALIGNED_NODENAME` your validator name
* `$ALIGNED_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export ALIGNED_NODENAME=$ALIGNED_NODENAME"  >> $HOME/.bash_profile
echo "export ALIGNED_WALLET=$ALIGNED_WALLET" >> $HOME/.bash_profile
echo "export ALIGNED_PORT=11" >> $HOME/.bash_profile
echo "export ALIGNED_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`OG_NODENAME`) and Wallet (`OG_WALLET`) name is `Anatolian-Guide` and the port you will use (`OG_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export ALIGNED_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export ALIGNED_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export ALIGNED_PORT=16" >> $HOME/.bash_profile
echo "export ALIGNED_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Rust
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
```
```shell
source $HOME/.cargo/env
```

## Installing Ignite CLI
```shell
curl https://get.ignite.com/cli | bash
mv ignite /usr/local/bin/
```

## Installing Aligned 
```shell
rm -rf $HOME/aligned_layer_tendermint
git clone https://github.com/yetanotherco/aligned_layer_tendermint.git
cd $HOME/aligned_layer_tendermint
git checkout 98643167990f8a597b331ddd879e079bafb25b08
make build-linux
```

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.
```
alignedlayerd config chain-id $ALIGNED_CHAIN_ID
alignedlayerd config keyring-backend test
alignedlayerd init --chain-id $ALIGNED_CHAIN_ID $ALIGNED_NODENAME

# Copying the Genesis and addrbook Files
wget https://github.com/0glabs/0gevmoskkk/releases/download/v1.0.0-testnet/genesis.json -O $HOME/.alignedlayer/config/genesis.json
wget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.alignedlayer/config/addrbook.json

# Set up the minimum gas price
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001stake"|g' $HOME/.alignedlayer/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.alignedlayer/config/config.toml

# Set up SEED and PEERS
PEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326,b2a30b824a4358f8bc2ee648770b31b5eba3a853@85.10.200.82:26656"
SEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.alignedlayer/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.alignedlayer/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.alignedlayer/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.alignedlayer/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.alignedlayer/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.alignedlayer/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${ALIGNED_PORT}658%g;
s%:26657%:${ALIGNED_PORT}657%g;
s%:6060%:${ALIGNED_PORT}060%g;
s%:26656%:${ALIGNED_PORT}656%g;
s%:26660%:${ALIGNED_PORT}660%g
" $HOME/.alignedlayer/config/config.toml
sed -i.bak -e "
s%:1317%:${ALIGNED_PORT}317%g; 
s%:8080%:${ALIGNED_PORT}080%g; 
s%:9090%:${ALIGNED_PORT}090%g; 
s%:9091%:${ALIGNED_PORT}091%g
" $HOME/.alignedlayer/config/app.toml
sed -i.bak -e "s%:26657%:${OG_PORT}657%g" $HOME/.alignedlayer/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${OG_PORT}656\"|g" ~/.alignedlayer/config/config.toml > ~/.alignedlayer/config/config.toml.tmp
mv ~/.alignedlayer/config/config.toml.tmp  ~/.alignedlayer/config/config.toml

# Creating the Service File
tee /etc/systemd/system/alignedlayerd.service > /dev/null << EOF
[Unit]
Description=Aligned Layer Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which alignedlayerd) start
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
systemctl enable alignedlayerd
systemctl start alignedlayerd
```

## Checking the Logs
```shell
journalctl -u alignedlayerd -f -o cat
```  

## StateSync
```shell
systemctl stop alignedlayerd

cp $HOME/.alignedlayer/data/priv_validator_state.json $HOME/.alignedlayer/priv_validator_state.json.backup
alignedlayerd tendermint unsafe-reset-all --home $HOME/.alignedlayer --keep-addr-book

SNAP_RPC="https://rpc-t-0g.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.alignedlayer/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.alignedlayer/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.alignedlayer/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.alignedlayer/config/config.toml

mv $HOME/.alignedlayer/priv_validator_state.json.backup $HOME/.alignedlayer/data/priv_validator_state.json

systemctl restart alignedlayerd && journalctl -u alignedlayerd -f -o cat
```

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Checking Synchronization
Unless we get a `false` output, we do not move on to the next step, namely creating a validator.
```shell
alignedlayerd status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$ALIGNED_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
alignedlayerd keys add $ALIGNED_WALLET
```  

### Importing an Existing Wallet
```shell
alignedlayerd keys add $ALIGNED_WALLET --recover
```

### Learning Your EVM Address
```shell
echo "0x$(alignedlayerd debug addr $(alignedlayerd keys show $ALIGNED_WALLET -a) | grep hex | awk '{print $3}')"
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
ALIGNED_WALLET_ADDRESS=$(alignedlayerd keys show $ALIGNED_WALLET -a)
ALIGNED_VALOPER_ADDRESS=$(alignedlayerd keys show $ALIGNED_WALLET --bech val -a)
```

```shell
echo 'export ALIGNED_WALLET_ADDRESS='${ALIGNED_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export ALIGNED_VALOPER_ADDRESS='${ALIGNED_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
alignedlayerd query bank balances $ALIGNED_WALLET_ADDRESS
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
alignedlayerd tx staking create-validator \
--amount=10000000000000000stake \
--pubkey=$(alignedlayerd tendermint show-validator) \
--moniker=$ALIGNED_NODENAME \
--chain-id=$ALIGNED_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25stake  \
--gas-adjustment=1.5 \
--gas=auto \
--from=$ALIGNED_WALLET \
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
sudo systemctl stop alignedlayerd
sudo systemctl disable alignedlayerd
sudo rm /etc/systemd/system/alignedlayerd.service
sudo systemctl daemon-reload
sudo rm -f /usr/local/bin/alignedlayerd
sudo rm -f $(which alignedlayerd)
sudo rm -rf $HOME/.alignedlayer
sudo rm -rf $HOME/aligned_layer_tendermint
```
