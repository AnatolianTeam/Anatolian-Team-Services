---
title: 💾 AI Node installation
description: Sonaric AI Node installation guide.
image: ./img/Sonaric-Service-Cover.jpg
keywords: [Sonaric, AI, node, installation]
---

# Sonaric AI Node Installation (VPS)

## Installing Docker
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the NVM
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
```shell
source ~/.bashrc
```
```shell
nvm install 22
nvm use v22
npm install -g npm@latest
```

## Installing the Linux AI Node
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/monk-io/sonaric-install/main/linux-install-sonaric.sh)"
```

## Updating
```shell
apt-get update
apt-get install sonicd sonic
```

## Node Information
```shell
sonic node-info
```

The output of the above code should be similar to the following.

```shell
✨ Node information loaded:
 ├─🧊 ID 12XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 ├─📥 Name bright-slate-wharf
 ├─🧊 Version v1.5.0
 ├─🧊 Country
 ├─🧊 Daemon Version v1.5.0
 └─🧩 Host Info
 ├─🧊 OS linux
 ├─🧊 Platform ubuntu
 ├─🧊 Platform Version 22.04
 └─🧊 Hostname vmd95175.contaboserver.net
```

## Granting Access to GUI
In the code below, write your server IP address where it says 'YOUR SERVER_IP_ADDRESS' and run the code.
```shell
YOUR_VPS_IP=YOUR SERVER_IP_ADDRESS
```
Then run the code below as is, without modifications.
```shell
ssh -L 127.0.0.1:44003:127.0.0.1:44003 -L 127.0.0.1:44004:127.0.0.1:44004 -L 127.0.0.1:44005:127.0.0.1:44005 -L 127.0.0.1:44006 :127.0. 0.1:44006 root@$YOUR_VPS_IP
```


> When you run the above code, first type 'yes' and 'enter', then enter your 'server password' and press 'enter'.


## Backuping the Identitiy

In the code below, write your node name where it says 'YOUR_NODE_NAME' and run the code. Then set the password.
```shell
sonic identity-export -o YOUR_NODE_NAME.identity
```
:::warning
With the above code, your identity file will be saved in the root directory, do not forget to backup it.
:::

## Getting the Operator Role
Join the Sonaric [Discord](https://discord.gg/K75dYM5AEG) server, then type /addnode in the `#general` channel and send a message. Before running the code below, delete the area where it says `ADDNODE`, write the code given to you and run the code that way.


```shell
curl -sSL http://get.sonaric.xyz/scripts/register.sh | bash -s -- ADDNODE
```

## Cheking Sonaric Points

```shell
sonic points
```

## Changing the Node Name

```shell
sonic node-rename
```

## Checking the Node

Go to Sonaric [explorer](https://tracker.sonaric.xyz/) and type your name in the search box.