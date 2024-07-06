---
title: 💾 Contract Deploy
description: Galadriel contract deploy guide.
image: ./img/Galadriel-Service-Cover.jpg
keywords: [Galadriel, AI, Layer 1, installation]
---

# Galadriel Contract Deploy Guide

## Wallet and Faucet

Since we will use our wallet privately in the contract, we recommend that you use a testnet wallet. If you have a wallet for testnet, request tokens from the #🚰│devnet-faucet channel on the [discord](https://discord.gg/xfKhQWbVdV) server.

### Network Information

| Area | Details |
| ------------ | ------------ |
| **Network name** | Galadriel Devnet |
| **New RPC URL** | https://devnet.galadriel.com |
| **ChainID** | 696969 |
| **Currency symbol:** | GAL |
| **Block explorer URL** | https://explorer.galadriel.com |

## NodeJS and NPM

### Installing the NodeJS 

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### Installing the Installation
```shell
apt install npm
```

## Cloning the Repo
```shell
git clone https://github.com/galadriel-ai/contracts
cd contracts/contracts
```

## Preparing the .env File
```shell
cp template.env .env
```

Save the following sections in the file and exit.
> `ORACLE_ADDRESS section 0x4168668812C94a3167FCd41D12014c5498D74d7e
> In the `PRIVATE_KEY_GALADRIEL` and `PRIVATE_KEY_LOCALHOST` sections, write the private key of your wallet with a 0x in front of it.

```shell
# Address of oracle deployed on Galadriel testnet. See https://docs.galadriel.com/oracle-address
ORACLE_ADDRESS="0x..."

# Private key to use for deployment on Galadriel testnet
PRIVATE_KEY_GALADRIEL="0x..."

# Private key to use for deployment on local network
PRIVATE_KEY_LOCALHOST="0x..."
```

## Installing Libraries Required for the Contract
```shell
cd $HOME/contracts/contracts
npm install
```

## Contract Deployment
```shell
npm run deployQuickstart
```

You will see a text like the following in the final output of the code:
```shell
Compiled 33 Solidity files successfully (evm target: paris).
Quickstart contract deployed to 0xcA9b6cc9be0a52B36864fe520d2dB21d2d690cdE
```


In this way, you can deploy a contract by repeating the operations.
