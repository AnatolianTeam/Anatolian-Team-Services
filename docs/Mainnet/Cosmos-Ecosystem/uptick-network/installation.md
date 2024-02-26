---
title: 💾 Installation
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Cosmos-Ecosystem/uptick-network/img/Uptick-Service-Cover.jpg
keywords: [uptick, network, NFT, web3, installation, snapshot, statesync, update]
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
* `$UPTICK_NODENAME` your validator name
* `$UPTICK_WALLET` your wallet name
*  If another node is using the port, you can change it below. You must enter a different value where it says `11`, again as two digits.
```shell
echo "export UPTICK_NODENAME=$UPTICK_NODENAME"  >> $HOME/.bash_profile
echo "export UPTICK_WALLET=$UPTICK_WALLET" >> $HOME/.bash_profile
echo "export UPTICK_PORT=11" >> $HOME/.bash_profile
echo "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Sample
Let's assume that your Node (`UPTICK_NODENAME`) and Wallet (`UPTICK_WALLET`) name is `Anatolian-Guide` and the port you will use (`UPTICK_PORT`) will be `16656`. The code will be arranged as shown below.
```shell
echo "export UPTICK_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile
echo "export UPTICK_WALLET=Anatolian-Guide" >> $HOME/.bash_profile
echo "export UPTICK_PORT=16" >> $HOME/.bash_profile
echo "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Installing Uptick
```shell
cd $HOME
git clone https://github.com/UptickNetwork/uptick.git
cd uptick
git checkout v0.2.17
make install
uptickd version
```
The version output will be `v0.2.17`.

## Configuring and Launching the Node
We copy and paste the codes below without making any changes.

```
uptickd config keyring-backend test
uptickd config chain-id $UPTICK_CHAIN_ID
uptickd init --chain-id $UPTICK_CHAIN_ID $UPTICK_NODENAME

# Copying the Genesis File
wget  -O $HOME/.uptickd/config/genesis.json

# Minimum GAS Ücretinin Ayarlanması
sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25auptick"|g' $HOME/.uptickd/config/app.toml

# Closing Indexer-Optional
indexer="null"
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.uptickd/config/config.toml

# Set up SEED and PEERS
SEEDS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.uptickd/config/config.toml

# Enabling Prometheus
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.uptickd/config/config.toml

# Set up Pruning 
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="50"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.uptickd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.uptickd/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.uptickd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.uptickd/config/app.toml

# Set up Ports
sed -i.bak -e "
s%:26658%:${UPTICK_PORT}658%g;
s%:26657%:${UPTICK_PORT}657%g;
s%:6060%:${UPTICK_PORT}060%g;
s%:26656%:${UPTICK_PORT}656%g;
s%:26660%:${UPTICK_PORT}660%g
" $HOME/.uptickd/config/config.toml
sed -i.bak -e "
s%:1317%:${UPTICK_PORT}317%g; 
s%:8080%:${UPTICK_PORT}080%g; 
s%:9090%:${UPTICK_PORT}090%g; 
s%:9091%:${UPTICK_PORT}091%g
" $HOME/.empowerchain/config/app.toml
sed -i.bak -e "s%:26657%:${UPTICK_PORT}657%g" $HOME/.uptickd/config/client.toml

# Adding External Address
PUB_IP=`curl -s -4 icanhazip.com`
sed -e "s|external_address = \".*\"|external_address = \"$PUB_IP:${UPTICK_PORT}656\"|g" ~/.uptickd/config/config.toml > ~/.uptickd/config/config.toml.tmp
mv ~/.uptickd/config/config.toml.tmp  ~/.uptickd/config/config.toml

# Creating the Service File
tee /etc/systemd/system/uptickd.service > /dev/null << EOF
[Unit]
Description=Acred Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which uptickd) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```

## Enabling the Service
```shell
systemctl daemon-reload
systemctl enable uptickd
```

## Checking the Logs
```shell
journalctl -u uptickd -f -o cat
```  

:::warning
AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC.
:::

## Senkronizasyonu Kontrol Etme
`false` çıktısı almadıkça bir sonraki yani validator oluşturma adımına geçmiyoruz.
```shell
uptickd status 2>&1 | jq .SyncInfo
```

## Wallet

### Creating a New Wallet
We do not change the `$UPTICK_WALLET` section, we named our wallet with variables at the beginning of the installation.
```shell 
uptickd keys add $UPTICK_WALLET
```  

### Importing an Existing Wallet
```shell
uptickd keys add $UPTICK_WALLET --recover
```

## Wallet and Valoper Info
Here we add our wallet and valve information to the variable.

```shell
UPTICK_WALLET_ADDRESS=$(uptickd keys show $UPTICK_WALLET -a)
UPTICK_VALOPER_ADDRESS=$(uptickd keys show $UPTICK_WALLET --bech val -a)
```

```shell
echo 'export UPTICK_WALLET_ADDRESS='${UPTICK_WALLET_ADDRESS} >> $HOME/.bash_profile
echo 'export UPTICK_VALOPER_ADDRESS='${UPTICK_VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Checking Wallet Balance
```
uptickd query bank balances $UPTICK_WALLET_ADDRESS
```

:::warning
If the synchronization is completed, we proceed to the following step.
:::

## Creating Validator
You do not need to make any changes to the following command other than the places specified below;
    - `identity` where it says `XXXX1111XXXX1111` you write your identification number given to you as a member of the [keybase](https://keybase.io/) site.
    - `details` You can write information about yourself where it says `Always forward with the Anatolian Team.`.
    - `website` where it says `https://anatolianteam.com`, if you have a website or twitter etc. You can write your address.
    - `security-contact` Your email address.
 ```shell 
uptickd tx staking create-validator \
--amount=490000000000000000000auptick \
--pubkey=$(uptickd tendermint show-validator) \
--moniker=$UPTICK_NODENAME \
--chain-id=$UPTICK_CHAIN_ID \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.05 \
--min-self-delegation="1" \
--gas-prices=0.25auptick \
--gas-adjustment=1.5 \
--gas=auto \
--from=$UPTICK_WALLET \
--details="Always forward with the Anatolian Team 🚀" \
--security-contact="xxxxxxx@gmail.com" \
--website="https://anatolianteam.com" \
--identity="XXXX1111XXXX1111" \
--yes
```

### Completely Deleting the Node
```
systemctl stop uptickd && \
systemctl disable uptickd && \
rm /etc/systemd/system/uptickd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .uptickd uptick && \
rm -rf $(which uptickd)
sed -i '/UPTICK_/d' ~/.bash_profile
```
​