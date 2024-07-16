---
title: 💾 Rivalz Client
description: Rivalz Client installation guide.
image: ./img/Rivalz-Service-Cover.jpg
keywords: [Rivalz, AI, Dymension, Celestia, installation]
---

# Rivalz Client Installation Guide

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install curl build-essential pkg-config libssl-dev git wget jq make gcc chrony -y
```

## Installing the NodeJS 

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt install nodejs
apt update -y && apt upgrade -y
```

## Installing the NPM
```shell
apt install npm
```

## Installing the NPM Web3 Installation
```shell
npm install web3@1.5.3
```

## Installing the Client
First, let's open a screen.
```shell
screen -S rivalz
```
Then let's install the client.
```shell
npm i -g rivalz-node-cli
```

## Starting the Cient
```shell
rivalz run
```

:::warning
If you receive the warning `Your version is outdated. Please run 'rivalz update-version' to update to the latest version` run the code below.
:::

```shell
rivalz update-version
```
Then again
```shell
rivalz run
```

When you run the code, it will ask the following;
> 1. `? Enter wallet address (EVM):` Your EVM wallet address that you use when connecting to your user panel
> 2. `? Enter CPU cores number you want to use (Max 6):` Enter a number here according to your system. If there are 6CPUs and other nodes are also running, it would be better not to write them all.
> 3. `? Enter Ram size you want to use (GB, Max 16 GB):` Enter the amount of RAM you want to use here.
> 4. `? Select disk type you want to use: (Use arrow keys)` Press Enter while HD is selected.
> 5. `? Select disk serial number you want to use (Enter if no option):` Press Enter again.
> 6. `Enter Disk size of drive-scsi0 (HD) you want to use (GB, Max 600 GB):` type the disk amount you want to use.

## Validation

Verify your node by going to [Node Validate](https://rivalz.ai/dashboard/node-validate) page, connecting with your defined wallet and signing.