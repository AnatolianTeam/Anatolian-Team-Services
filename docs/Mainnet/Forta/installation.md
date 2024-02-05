---
title: 💾 Installation
description: Node installation guide.
image: ./img/Forta-Service-Cover.jpg
keywords: [forta, network, security, intel]
---

# Installation

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"
```

## Installing Docker
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Creating a Docker Daemon File
```
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
   "default-address-pools": [
        {
            "base":"172.17.0.0/12",
            "size":16
        },
        {
            "base":"192.168.0.0/16",
            "size":20
        },
        {
            "base":"10.99.0.0/16",
            "size":24
        }
    ]
}
EOF
```

## Restarting Docker
```shell
systemctl restart docker
```

## Installing Forta
Enter your password in the `PASSWORD` section. Do not use special characters. Problems may occur when using special characters.
```shell
sudo curl https://dist.forta.network/pgp.public -o /usr/share/keyrings/forta-keyring.asc -s
echo 'deb [signed-by=/usr/share/keyrings/forta-keyring.asc] https://dist.forta.network/repositories/apt stable main' | sudo tee -a /etc/apt/sources.list.d/forta.list
apt-get update
apt-get install forta
forta init --passphrase PASSWORD
```

🔴 In the output of the above codes, you will see your Scanner address as follows. After sending 0.1 MATIC to this address from your EVM wallet, we continue the transactions.

```shell
Scanner address: 0xAAA8C491232cB65a65FBf7F36b71220B3E695AAA

Successfully initialized at /root/.forta
```  

## Creating Alchemy Account 
We create an account by going to [Alchemy](https://alchemy.com/?r=zc3NjI5NzM1NzMxN). Here, from the 'Create App' section, we create an 'App' for the network on which you will run your Forta Scanner Node. Here, we take our link starting with 'https' from the 'View Key' section and save it in a txt file to use where the Alchemy link is mentioned during installation.

## Creating a Configuration File
Whichever network you want to run it on, you need to make the following configurations for that network.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Polygon">

```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 137

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="BSC">

```  
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 56

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Ethereum">

``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 1

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Arbitrum">

```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 42161

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Optimism">

``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 10

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Avalanche">

``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 43114

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Fantom">

``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 250

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
</Tabs>

## Registering Wallet
We enter your EVM wallet address where it says `EVM_ADDRESS` and the password you set in the Forta installation above where it says `PASSWORD`.
```shell 
forta register --owner-address EVM_ADDRESS --passphrase PASSWORD
```  

## Creating the Service File
We enter the password you set in the Forta installation above where it says `PASSWORD`.

``` 
tee /lib/systemd/system/forta.service > /dev/null <<EOF
[Unit]
Description=Forta
After=network-online.target
Wants=network-online.target systemd-networkd-wait-online.service

StartLimitIntervalSec=500
StartLimitBurst=5

[Service]
Environment="FORTA_DIR=/root/.forta/"
Environment="FORTA_PASSPHRASE=PASSWORD"
Restart=on-failure
RestartSec=15s

ExecStart=/usr/bin/forta run

[Install]
WantedBy=multi-user.target
EOF
```  

## Activating and Running Forta
```shell
systemctl enable forta
systemctl daemon-reload
systemctl start forta
```

## Node Status
To check the status of your node, you can follow it by signing up at https://scannerx.net/.

### Completely Deleting the Node
```shell
systemctl stop forta
systemctl disable forta
rm /lib/systemd/system/forta.service -rf
rm $HOME/.forta -rf
```
​