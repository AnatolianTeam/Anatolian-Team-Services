---
title: 💾 Installation
description: RPC Node installation guide.
image: ./img/zksync-Service-Cover.jpg
keywords: [zksync, rpc, node]
---

# Installation
:::warning
Rehber yapım aşamasındadır. Bittiğinde bu ileti burada olmayacaktır.
:::

## Sunucu Kiralama

Bunun için [Hetzner](https://hetzner.cloud/?ref=z9uy37L7ovja)'den saatlik olarak kullanabileceğiniz AX42 VDS sunucuyu temin etmeniz faydalı olacaktır. paylaşımlı (VPS) sunucularda sıkıntı yaşamamak adına bu elzem.


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

## Take the RPC URL
The node will be using port 3000. You can add your rpc address to your wallet as follows. `http://SERVER_IP_ADDRESS:3000`

## End of Process
After you are done with RPC, you can turn off your server from your Hetzner control panel.