---
title: 💾 Installation
description: Node installation guide.
---

# Installation

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install ca-certificates curl gnupg lsb-release git htop tmux
```

## Installing Docker
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Installing Q
```
cd $HOME
git clone https://gitlab.com/q-dev/mainnet-public-tools
```

## Creating Keystore Folder and pwd.txt File
```
cd $HOME/mainnet-public-tools/validator/
mkdir keystore
```

Type the password you will use in your wallet where `YOUR_PASS` is written in the code below.
```
echo YOUR_PASS > keystore/pwd.txt
```

## Wallet

### Creating a New Wallet
```shell 
docker run --entrypoint="" --rm -v $PWD:/data -it qblockchain/q-client:1.3.6 geth account new --datadir=/data --password=/data/keystore/pwd.txt
```
If the output is as follows, everything is OK.
```
Your new key was generated

Public address of the key:   0xb3FF24F818b0ff6Cc50de951bcB8f86b52287dac
Path of the secret key file: /data/keystore/UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!
```
🔴 Then back up the files in your folder written (`/data/keystore`) in the output to keep them in a safe place.

### Importing an Existing Wallet
If you already have a wallet, copy the json file (starting like UTC) to the keystore folder as shown below. (`/root/mainnet-public-tools/validator/keystore/).
```
validator
|   ...
|   ...
└ keystore
  |   UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac
  |   pwd.txt
```

## Editing .env File

```shell
cp .env.example .env
nano .env
```
When you open the file, write your wallet without `0x` in the place where it says `ADDRESS` as in the code above, 
then make sure your own IP address is written in the `IP` section, then save and exit. (CTRL+X Y)
```
# docker image for q client
QCLIENT_IMAGE=qblockchain/q-client:v1.3.6

# your q address here (without leading 0x)
ADDRESS=b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc

# your public IP address here
IP=193.19.228.94

# the port you want to use for p2p communication (default is 30303)
EXT_PORT=30303

# extra bootnode you want to use
BOOTNODE1_ADDR=enode://22adab037308f02abbb0fd7e831c75afa367b36615b2a0358a5c4673912cf384de6c8e688371822488622ebee383aeea5d41087160cb70484a9f1671876871b1@bootnode.q.org:30301
BOOTNODE2_ADDR=enode://3021f73a6f14f8594384923f7f0228f81a806d1708e5c046db12661bdce6b0f10625fae12771aa36f7a4d1f110d4e5a589bf3d34ec4b1d2c6d10e382d90f6983@extrabootnode.q.org:30314
BOOTNODE3_ADDR=enode://34b9e4e18bc37e4437bc0a9b10ac8ae5d0aab2b2e827310e90ec1012e818d07962b162d98e083ec5487e0cf87d1ffefb46332ec05209ec82fb675ae7afe3e241@extrabootnode.q.org:30315
```

## Editing docker-compose.yaml File
```
nano docker-compose.yaml
```

In the file, write your own moniker name (`YOUR_MONIKER`) and mainnet access key (`MAINNET_ACCESS_KEY`) in the `--ethstats` section similar to the one below and save it.
```
.
.
.
"--ethstats=YOUR_MONIKER:MAINNET_ACCESS_KEY@stats.q.org",
.
.
.
```

## Editing config.json File
```
nano config.json
```
In the address section of the file, write your wallet address without a leading `0x`. 
Then write your wallet `password` in the password section (instead of `supersecurepassword`) and save the file.
```
    {
      "address": "b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc",
      "password": "supersecurepassword",
      "keystoreDirectory": "/data",
      "rpc": "https://rpc.q.org"
    }
```

## Starting Node
```shell
docker-compose up -d
```

## Checking Logs
```
docker-compose logs -f --tail "100"
```

## Synchronizing Node Quickly
 ```shell 
docker-compose down && cd
rm -rf /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata
mkdir /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata
cd /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata
```

Go to [Stake Craft](https://snapshots.stakecraft.com/) snapshots service and copy the URL of the Q Blockchain and write it where `SNAPHOT_URL` is written below.

```
wget -O - SNAPHOT_URL | tar xf -
```

Then restart the node.
```
cd $HOME/mainnet-public-tools/validator/
docker-compose up -d
```

​
