---
title: 💾 Installation
description: Layer Zero RPC Node installation guide.
image: ./img/L0-Service-Cover.jpg
keywords: [layerzero, layer, zero, rpc, node]
---

# Installation (COMING SOON)

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



## Take the RPC URL
The node will be using port XXXX.

>  You can add your rpc address to your wallet as follows.
```
Network name: The name does not matter, you can write any name you want.

RPC URL: http://SERVER_IP_ADDRESS:PORT

Chain ID: X

Block Explorer: https://explorer.io/blocks/
```

## End of Process
After you are done with RPC, you can turn off your server from your Hetzner control panel.