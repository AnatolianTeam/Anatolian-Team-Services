---
title: 💾 Installation
description: Node installation guide.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, installation, snapshot, statesync, update]
---

# Installation

:::warning
You can check versions of pcli, pd and pclientd [here](https://github.com/penumbra-zone/penumbra/releases).
:::

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
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pcli-installer.sh | sh
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

## Set up Penumbra and CometBFT
