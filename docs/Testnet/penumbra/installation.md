---
title: 💾 Installation
description: Node installation guide.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, installation, snapshot, statesync, update]
---

# Installation

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```
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


## Penumbra Command Line Interface (CLI) Installation

Requirements: Ubuntu version 22.04

:::note
Important Note: This guide assumes you're comfortable using the command line.
:::

```
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.75.0/pcli-installer.sh | sh
```
```
source $HOME/.cargo/env
```

:::warning
Please confirm that the Command Line Interface (CLI) installation has been successfully finalized.
:::

```
pcli --version
```

## Creating a Penumbra Wallet

Utilizing the CLI, you'll initiate the wallet generation.
```
pcli init soft-kms generate
```

:::warning
As you go through the process, a private key (Private Seed) will be generated. It's crucial to safeguard this key diligently, as it serves as a lifeline in the unfortunate event of losing access to your wallet.
:::

To locate your wallet address, employ the subsequent command:
```
pcli view address
```

Should you need to import a wallet you've previously generated:
```
pcli init soft-kms import-phrase
```

Head over to the [Penumbra Discord](https://discord.gg/2Ez55n4txb) to redeem faucet tokens for the wallet you've generated.

Insert your wallet address into the #-testnet-faucet channel.

Check your wallet balance:
```
pcli view sync
pcli view balance
```

## Set up Penumbra and CometBFT.
```
curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.75.0/pd-x86_64-unknown-linux-gnu.tar.gz
tar -xf pd-x86_64-unknown-linux-gnu.tar.gz
mv pd-x86_64-unknown-linux-gnu/pd /usr/local/bin/
```

Confirm the successful installation of Penumbra:
```
pd --version
```

Install CometBFT to ensure the smooth operation of the node alongside Penumbra.
```
echo export GOPATH=\"\$HOME/go\" >> ~/.bash_profile
echo export PATH=\"\$PATH:\$GOPATH/bin\" >> ~/.bash_profile
source ~/.bash_profile
```
```
git clone --branch v0.37.5 https://github.com/cometbft/cometbft.git
cd cometbft
```
```
make install
```

Verify the successful installation of CometBFT:
```
cometbft version
```

Initialize the configuration files to commence the Full Node:
```
pd testnet unsafe-reset-all
```

Next, initialize the node, substituting "IP" with the IP address of your VPS and "NAME" with the desired name for your node:
```
pd testnet join --external-address IPADDRESS:26656 --moniker NAME
```

Example:
```
pd testnet join --external-address 123.456.78:26656 --moniker Anatolian Team
```

You'll create a file to run your Penumbra node in the background:
```
tee /etc/systemd/system/penumbra.service > /dev/null <<EOF
[Unit]
Description=Penumbra Node
After=network.target
[Service]
User=root
ExecStart=/usr/local/bin/pd start
Restart=always
RestartSec=3
LimitNOFILE=infinity
[Install]
WantedBy=multi-user.target
EOF
```

Subsequently, initiate your Penumbra node:
```
systemctl daemon-reload
systemctl enable penumbra
systemctl start penumbra
```

To ensure your node is functioning correctly:
```
journalctl -fu penumbra -n 50
```

Please be aware that your node won't operate until the CometBFT node is activated.

Once Penumbra is launched, establish a new file to initiate the CometBFT node, essential for Penumbra's functionality:
```
tee /etc/systemd/system/cometbft.service > /dev/null <<EOF
[Unit]
Description=Cometbft Node
After=network.target
[Service]
User=root
ExecStart=/root/go/bin/cometbft start --home root/.penumbra/testnet_data/node0/cometbft
Restart=always
RestartSec=3
LimitNOFILE=infinity
[Install]
WantedBy=multi-user.target
EOF
```

Initiate your CometBFT node:
```
systemctl daemon-reload
systemctl enable cometbft
systemctl start cometbft
```

To check if your node is working correctly:
```
journalctl -fu cometbft -n 50
```

Once CometBFT is launched, your Penumbra node will start automatically.

## Validator Configuration:

If you wish to convert your full node into a validator node, you'll need to furnish a configuration file and delegate an adequate number of tokens for your validator node to activate.

Begin by identifying the value of your consensus_key:
```
grep -A3 pub_key ~/.penumbra/testnet_data/node0/cometbft/config/priv_validator_key.json
```

Keep this value handy as you'll need it to complete your configuration file.

Generate your configuration file:
```
pcli validator definition template \
    --tendermint-validator-keyfile ~/.penumbra/testnet_data/node0/cometbft/config/priv_validator_key.json \
    --file validator.toml
```

You will be able to customize your validator file
```
nano validator.toml
```

![Adsız tasarım (6)](https://github.com/AnatolianTeam/Anatolian-Team-Services/assets/107190154/c297d632-23ac-443e-9085-e5100f29c698)

Edit the configuration file by replacing the placeholder "value" in "consensus_key" with the actual value you obtained earlier, and update "enabled = false" to "enabled = true".

## Validator Registration:
Now that you've configured the validator.toml file, you're ready to register your validator:
```
pcli validator definition upload --file validator.toml
```

## Delegation on the Validator Node:

To activate your validator, you'll need to delegate faucet tokens.

Begin by identifying the address of your validator:
```
pcli validator identity
```

Delegate faucet tokens from Penumbra to your validator:
```
pcli tx delegate 1penumbra --to [YOUR_VALIDATOR_IDENTITY_KEY]
```

You can verify how many tokens you have delegated :
```
pcli view balance
```

You can verify that your validator node is active by searching for it in the list :
```
pcli query validator list --detailed
```
