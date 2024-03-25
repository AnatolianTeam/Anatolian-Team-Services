---
title: 💾 Installation
description: Node installation guide.
image: ./img/Redbelly-Service-Cover.jpg
keywords: [Redbelly, network, installation, snapshot, statesync, update]
---

# Installation 
Participation in the testnet is currently closed. If you have received an e-mail from the team regarding your participation and you have been given a node id, you can participate.

**Ports Used:** `8545`, `8546`, `1111`, and `1888`.

## Things to Do First

### Domain and DNS Settings
Buy a domain. Then, enter DNS management from the settings of the domain you purchased from your panel. Create an `A record`. Type a subdomain name in the `record` or `domain name` section. In the `IP section`, write the IP address of your server.

After these settings, you will have an address such as `subdomain.domain.xyz`. 

You can control the propagation of your DNS settings [here](https://dnschecker.org/). You can check the propagation status by searching `subdomain.domain.xyz` on the site.

### Create EVM Wallets
Create two wallets.
* Public Wallet: The wallet address where the rewards will come.
* Signer Wallet: Wallet that will perform signing transactions.

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install screen snapd net-tools cron curl unzip -y < "/dev/null"
```

## SSL Certificate
In this step, we take the necessary steps to obtain an SSL certificate for the domain we purchased.

### Certbot Installation

```shell
apt install python3-certbot-nginx
```

### Generating Let's Encrypt SSL
Run the code below by editing the email and domain.
* `DOMAIN`: your domain address
* `EMAIL`: your e-mail address
```shell
DOMAIN=subdomain.domain.xyz
EMAIL=yourmail@mail.com
certbot certonly --standalone -d $DOMAIN. --non-interactive --agree-tos -m $EMAIL
```

## Registering Node
:::note
Registration is now closed.
:::
Go to the Redbelly [registration page](https://vine.redbelly.network/nds-node-register), fill in the necessary information and then wait for the node ID to be sent.


## Installing Redbelly

### Download Binary
Download the Redbelly Binary file and move it to the relevant directory.
```shell
cd $HOME
curl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/RedbellyBinary > rbbc
```

### Download Config File
Download the Config file and move it to the relevant directory.
```shell
cd $HOME
curl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/config_template.yaml > config.yaml
mv config.yaml $HOME/Redbelly/
nano $HOME/Redbelly/config.yaml
```
Editing the following sections in the config.yaml file;
* `ip` your domain 
* `id` your node id
* `privateKeyHex` your signin wallet private key 
```shell
ip: subdomain.domain.xyz
id: XX
.
.
.
.
privateKeyHex: 0x.......................
```

Then save file. (CTRL X, Y, Enter)


### Download Genesis File
```shell
cd $HOME
curl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/genesis.json
mv genesis.json $HOME/Redbelly/
```


### Creating observe.sh File
Enter the following codes respectively;

```shell
SSL_DOMAIN=subdomain.domain.xyz // Change it to yours
```

```shell
tee $HOME/Redbelly/observe.sh > /dev/null << EOF
#!/bin/sh
# filename: observe.sh
if [ ! -d rbn ]; then
  echo "rbn doesnt exist. Initialising redbelly"
  mkdir -p rbn
  mkdir -p consensus
  cp config.yaml ./consensus

  ./binaries/rbbc init --datadir=rbn --standalone
  rm -rf ./rbn/database/chaindata
  rm -rf ./rbn/database/nodes
  mkdir -p ./rbn/genesis
  cp genesis.json ./rbn/genesis
else
  echo "rbn already exists. continuing with existing setup"
  cp config.yaml ./consensus
fi


# Run EVM
rm -f log
./binaries/rbbc run --datadir=rbn --consensus.dir=consensus --tls --consensus.tls --tls.cert=/etc/letsencrypt/live/$SSL_DOMAIN/cert.pem --tls.key=/etc/letsencrypt/live/$SSL_DOMAIN/privkey.pem --http --http.addr=0.0.0.0 --http.corsdomain=* --http.vhosts=* --http.port=8545 --http.api eth,net,web3,rbn --ws --ws.addr=0.0.0.0 --ws.port=8546 --ws.origins="*" --ws.api eth,net,web3,rbn --threshold=200 --timeout=500 --logging.level info --mode production --consensus.type dbft --config.file config.yaml --bootstrap.tries=10 --bootstrap.wait=10 --recovery.tries=10 --recovery.wait=10
EOF
```

### Creatin start-rbn.sh File
Enter the following codes respectively;

```shell
tee $HOME/Redbelly/observe.sh > /dev/null << EOF
#!/bin/sh
# filename: start-rbn.sh
mkdir -p binaries
mkdir -p consensus
chmod +x rbbc
cp rbbc binaries/rbbc
mkdir -p logs
nohup ./observe.sh > ./logs/rbbcLogs 2>&1 &
EOF
```

```shell
cd $HOME/Redbelly
chmod +x *.sh
```

## Run Node
```shell
cd $HOME
./start-rbn.sh
```

### Check Logs
```shell
tail -f $HOME/logs/rbbcLogs
```

## Verifying the Node is Running

### Add Redbelly Network to Wallet

| Field | Details |
| ------------ | ------------ |
| **Network name** | Redbelly Network |
| **New RPC URL** | https://subdomain.domain.xyz:8545 // Change it to yours |
| **Chain ID** | 152 |
| **Currency symbol:** | RBNT |
| **Block explorer URL** | https://explorer.devnet.redbelly.network/ |

And then check your wallet. 


