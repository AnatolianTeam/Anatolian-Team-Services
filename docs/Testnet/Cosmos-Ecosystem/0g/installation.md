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
echo "export OG_CHAIN_ID=zgtendermint_16600-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`OG_NODENAME`) and Wallet (`OG_WALLET`) name is `Anatolian-Guide` and the port you will use (`OG_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export OG_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export OG_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export OG_PORT=16" >> $HOME/.bash_profile
echo "export OG_CHAIN_ID=zgtendermint_16600-1" >> $HOME/.bash_profile
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
wget https://testnet.anatolianteam.com/0g/genesis.json -O $HOME/.0gchain/config/genesis.json
wget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.0gchain/config/addrbook.json

# Set up the minimum gas price
sed -i "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0ua0gi\"/" $HOME/.0gchain/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.0gchain/config/config.toml

# Set up SEED and PEERS
PEERS="fbc3b6d41cd39a62ef5e3fc596435adfaf428a34@37.120.189.81:16656,645531eb02b275a59cc3b1af99e541852849f695@84.247.139.25:16656,d00273ac6a2470cd4e48008d9af4d2521b134394@62.169.29.136:26656,f5a7d34355f6d89b7ece583131c6b1f79ac5485e@218.102.97.67:25856,a3e6c6214805c1c068882f1981855c7a9f5926ea@213.168.249.202:26656,da1f4985ce3df05fd085460485adefa93592a54c@172.232.33.25:26656,91f079ccd2e0edf42e0fa57183ac92c22c525658@14.245.25.144:14256,9d09d391b2cf706a597d03fe8bb6700fe5cac53d@65.108.198.183:18456,5a202fb905f20f96d8ff0726f0c0756d17cf23d8@43.248.98.100:26656,74775d65b6ab427c685efcaa8190912d3a60e562@123.19.45.21:12656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,9d7564df34efa146a94c073e5bf3f5e11f947b75@155.133.22.230:26656,e179d05dc792d9b902be3baa7a31a07a92afbcf0@118.142.83.5:26656,c4b9c3a7f3651af729d73b150e714ee91e7585c1@14.176.200.133:26656,f64f0fb500c62bffa33d60450d30792ee4b5fbd0@167.86.119.168:26656,d4085fd93ab77576f2acdb25d2d817061db5afe6@62.169.19.156:26656,2b8ee12f4f94ebc337af94dbec07de6f029a24e6@94.16.31.161:26656,0f5022e4265184052a5468379687625a81fd255e@154.12.253.116:26656,3859828e1099214de14dae91d1f7decf2374eeb4@47.236.170.254:26656,23b0a0624699f85062ddebf910583f70a5b9e86b@14.167.152.116:14256,b8f8ed478f2794629fdb5cf0c01edaed80f00f84@168.119.64.172:26656,5d81d59e81356a33e6ccccaa3d419ff73244697e@107.173.18.103:26656,c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,a83f5d07a8a64827851c9f1d0c21c900b9309608@188.166.181.110:26656,19943cbe46cdb9eb37cb06c0067ce63154eee6ea@213.199.52.155:26656,a6ff8a651dd0a0e66dbfb2174ccadcbbcf567b29@66.94.122.224:26656,f3c912cf5653e51ee94aaad0589a3d176d31a19d@157.90.0.102:31656,141dbd90d5c3411c9ba72ba03704ccdb70875b01@65.109.147.58:36656,cd529839591e13f5ed69e9a029c5d7d96de170fe@46.4.55.46:34656,a8d7c5a051c4649ba7e267c94e48a7c64a00f0eb@65.108.127.146:26656" && \
SEEDS="c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,44d11d4ba92a01b520923f51632d2450984d5886@54.176.175.48:26656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,f878d40c538c8c23653a5b70f615f8dccec6fb9f@54.215.187.94:26656" && \
sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.0gchain/config/config.toml

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
--amount=1000000ua0gi \
--pubkey=$(0gchaind tendermint show-validator) \
--moniker=$OG_NODENAME \
--chain-id=$OG_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25ua0gi  \
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
rm -rf .0gchain 0g-chain && \
rm -rf $(which 0gchaind)
sed -i '/OG_/d' ~/.bash_profile
```
