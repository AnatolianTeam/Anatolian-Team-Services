---
title: 💾 Installation
description: RPC Node installation guide.
image: ./img/zksync-Service-Cover.jpg
keywords: [zksync, rpc, node]
---

# Installation

## Server Rental
For this, it would be useful to obtain the AX52 VDS 1TB server from [Hetzner](https://hetzner.cloud/?ref=z9uy37L7ovja), which you can use on an hourly basis. This is essential to avoid problems on shared (VPS) servers. After installing Ubuntu 22.04 on the server, you can proceed to the following steps.

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Git
```shell
apt install git
```

## Installing the Docker
```shell
apt install docker.io
```
### Checking the Docker Version 
Check the installation with the code below.
```shell
docker --version
```

## Installing the Docker Compose
```shell
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Docker Compose Run Permission
```shell
chmod +x /usr/local/bin/docker-compose
```

### Checking the Docker Compose Version 
Alağıdaki kod ile kurulumu kontrol edin.
```shell
docker-compose --version
```

## Cloning the zksync Repo
```shell
git clone https://github.com/matter-labs/zksync-era.git
```

## Starting the Node
Go to the relevant directory.
```shell
cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples
```

Then start the node.
```shell
docker-compose -f mainnet-external-node-docker-compose.yml up -d
```

### Checking the Docker Containers
```shell
docker ps
```  

### Checking the Logs 
```shell
docker logs -f --tail 100 docker-compose-examples_external-node_1
```

:::warning
Then close the logs with CTRL C. Turning off the logs does not stop the node, it continues to run in the background. If you run it on a screen without closing it, these logs will take up space on your disk over time.
:::

## RPC URL Operations

### Editing the .yml File
First, open this file.
```shell
nano $HOME/zksync-era/docs/guides/external-node/docker-compose-examples/mainnet-external-node-docker-compose.yml
```
Then, change the section shown below in the file - `"127.0.0.1:3060:3060"` to `"0.0.0.0:3060:3060"`.
```shell
.
.
.
  external-node:
    image: "matterlabs/external-node:2.0-v24.0.0"
    depends_on:
      postgres:
        condition: service_healthy
    ports:
      - "127.0.0.1:3060:3060". ## Change this section to: `"0.0.0.0:3060:3060"`
      - "127.0.0.1:3061:3061"
      - "127.0.0.1:3081:3081"
    volumes:
      - mainnet-rocksdb:/db
    expose:
      - 3322
.
.
.
```

Then press `CTRL X, Y and enter` and save it.

### Restarting Node
With this process, we will apply the changes we made above.

First close docker compose.
```shell
cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples
docker-compose -f mainnet-external-node-docker-compose.yml down
```
Then restart.
```shell
docker-compose -f mainnet-external-node-docker-compose.yml up -d
```

## Take the RPC URL
The node will be using port 3060.

>  You can add your rpc address to your wallet as follows.
```
Network name: The name does not matter, you can write any name you want.

RPC URL: http://SERVER_IP_ADDRESS:3060

Chain ID: 324

Block Explorer: https://explorer.zksync.io/blocks/
```

## End of Process
After you are done with RPC, you can turn off your server from your Hetzner control panel.