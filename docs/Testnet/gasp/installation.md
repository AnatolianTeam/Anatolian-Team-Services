---
title: 💾 Installation
description: Gasp Operator installation guide.
image: ./img/Gasp-Service-Cover.jpg
keywords: [Gasp, EigenLayer, Eigen, Layer, restake, Holešky, installation, Holesky]
---

# Gasp Holešky Operatör Installation 

**Things to do before you start:**
1. Make the your EigenLayer [operator installation](../eigenlayer/installation.md).
2. Obtain at least 10.05 holETH from [PoW Faucet](https://holesky-faucet.pk910.de).
3. Stake at least 10 holETH from [Ank](https://testnet.ankr.com/staking/stake/ethereum/). Then reStake in [EigenLayer](https://holesky.eigenlayer.xyz/restake/ankrETH) and if you haven't already, delegate it to your EigenLayer operator.

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"
```

## Installing the Docker
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Installing the Docker Compose
```shell
VER=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)
curl -L "https://github.com/docker/compose/releases/download/"$VER"/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## Installing the Gasp AWS Operator

```shell
cd $HOME
git clone https://github.com/mangata-finance/avs-operator-setup.git
cd avs-operator-setup
chmod +x run.sh
nano .env
```

#### Editing the .env File

```shell
nano .env
```

Bu dosyada sadece aşağıdaki bölümleri düzenliyoruz.
* `ETH_RPC_URL`=https://ethereum-holesky-rpc.publicnode.com
* `ETH_WS_URL`=wss://ethereum-holesky-rpc.publicnode.com
* `ECDSA_KEY_FILE_HOST`=~/.eigenlayer/operator_keys/**ADINIZ**.ecdsa.key.json 
* `BLS_KEY_FILE_HOST`=~/.eigenlayer/operator_keys/**ADINIZ**.bls.key.json
* `ECDSA_KEY_PASSWORD=SIFRENIZ`
* `BLS_KEY_PASSWORD=SIFRENIZ`
```shell
.
.
.
# TODO: Operators need to update this to provide connection to ETH & network nodes
CHAIN_ID=17000
ETH_RPC_URL=https://ethereum-holesky-rpc.publicnode.com
ETH_WS_URL=wss://ethereum-holesky-rpc.publicnode.com

# TODO: Operators need to update this to their own keys, either use files or encoded JSON
# this is where your keys are stored on local storage
ECDSA_KEY_FILE_HOST=~/.eigenlayer/operator_keys/koltigin.ecdsa.key.json // koltigin yazan yerde kendi adınız olacak
BLS_KEY_FILE_HOST=~/.eigenlayer/operator_keys/koltigin.bls.key.json // koltigin yazan yerde kendi adınız olacak
.
.
.
# TODO: Operators need to add password to decrypt the above keys
ECDSA_KEY_PASSWORD=SIFRENIZ
BLS_KEY_PASSWORD=SIFRENIZ
```

## Run the Docker Compose

```shell
docker compose up -d
```

## Checking the Logs

### Learning Docker ID

```shell
docker ps -a
```

### Checking

```shell
docker logs -f --tail 100 DOCKER-ID
```

* And then close the logs with `CTRL C`. If you run it on a screen without closing it, these logs will take up space on your disk over time.

## Getting the Roles on Discord

Send the screenshot you took while the logs are flowing to the `#🤖║avs-operators` channel on [Discord](https://discord.gg/hcM4DfGsRa) and get the `Magnatarians` role. In the same channel, take a role by clicking the `Node Runner Role` button in the bot's [message](https://discord.com/channels/776977650907480074/1192066266765197323/1204853636547477575).


