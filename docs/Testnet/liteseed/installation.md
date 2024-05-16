---
title: 💾 Installation
description: Liteseed installation guide.
image: ./img/Liteseed-Service-Cover.jpg
keywords: [Liteseed, ao, data, Permaweb, installation]
sidebar_position: 1
---

# Liteseed Installation Guide 

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing Docker
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Cloning the Repo
```shell
git clone https://github.com/liteseed/edge
```

## Creating Docker Image

```shell
cd ./edge
docker build -t edge .
```

## Creating Volume

```shell
docker volume create liteseed
```

## Generating Arweave Private Key and Migrate the SQLite Database 

```shell
docker run -v liteseed:/data edge generate
docker run -v liteseed:/data edge migrate
```

## Starting the Node

```shell
docker run -v liteseed:/data edge start
```
* And then close the logs with CTRL C. If you run it on a screen without closing it, these logs will take up space on your disk over time.

## Learning Wallet Address

```shell
docker run -v liteseed:/data edge balance
```

* The output would look something this below
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 1000 LSD
Staked:  No
```

To get tokens, send your wallet address and your affiliate website or Twitter address to hello@liteseed.xyz.

## Staking 
Write your address in the e-mail you sent to request tokens where it says `https://yourbundlerurl.com`.
```shell
docker run -v liteseed:/data edge stake -u "https://yourbundlerurl.com"
```

## Controling Stake
```shell
docker run -v liteseed:/data edge balance
```

* The output would look something this below
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 0 LSD
Staked:  Yes
```

## Run Bundlr
Now you can start earning both $AR and $LSD.
```shell
docker run -v liteseed:/data edge start
```
