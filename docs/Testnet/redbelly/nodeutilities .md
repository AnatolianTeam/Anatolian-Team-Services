---
title: ⤴️ Redbelly Node Utilities
description: Useful commands.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/redbelly/img/Redbelly-Service-Cover.jpg
keywords: [Redbelly, network, installation, snapshot, statesync, update]
---

# Redbelly Node Utilities 
:::note
No changes should be made to the commands unless otherwise stated.
:::

## Updating System and Installing Phyton

```shell
apt update && apt upgrade -y
sudo apt install python3
```

## Cloning Redbelly-Utils
```shell
git clone https://github.com/ilkermanap/redbelly-utils
```

## How to Run
```shell
cd $HOME/redbelly-utils && python3 checksync.py https://subdomain.domain.xyz:8545 //Change it to yours
```

It will then give an output like the following. Above is the last block height of the network, below is the block height of your node.
```shell
   ilker@t440s:~ $ python3 checksync.py https://redbelly.manap.se:8545
   This is the first check for https://rbn-gcp-australia-southeast1-a-0-b-v2.devnet.redbelly.network:8545. I will wait for 10 seconds and check again
   This is the first check for https://redbelly.manap.se:8545. I will wait for 10 seconds and check again  
   --------------------------------------------------
   URL          :  https://rbn-gcp-australia-southeast1-a-0-b-v2.devnet.redbelly.network:8545
   Block Height :  42105
   Sync Speed   :  0.0
   Time to sync :  0
   --------------------------------------------------
   URL          :  https://redbelly.manap.se:8545
   Block Height :  42105
   Sync Speed   :  0.0
   Time to sync :  0
```