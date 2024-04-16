---
title: 💾 Installation
description: Ar.io Node Installation guide.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, Permaweb, installation]
sidebar_position: 1
---

# Ar.io Node Installation 

:::warning
Make sure your server has Ubuntu 22.04.
:::

## Domain 
Before starting, you must have a domain. Get yourself a domain from a service provider. You can find a domain for $1 per year.

### Creating a Subdomain
Go to your service provider's panel and enter the advanced DNS settings or IP Based DNS settings section. Create 2 A records here.
1. For the first `A` record, write `ar` or `ario` in the `record name` section and the `IP address` of your server in the `value` section and save.
2. In the second `A` record, write `*.ar` or `*.ario` in the 'record name' section and the `IP address` of your server in the same manner in the `value` section and save it.

* When the time comes, we will take action here again, this time we will create a `TXT` record.

## Creating a Wallet and Sending AR Tokens to the Wallet

Install the wallet in your browser from [ArConnect](https://www.arconnect.io/) and create a wallet.

:::warning
Don't forget to save your wallet mnemonics in a safe place.
:::

Send $5-10 worth of [Ar token](https://www.coingecko.com/en/coins/arweave) to your wallet.

## Updating the System and Installing Required Libraries
```shell
apt update -y && apt upgrade -y && apt install -y curl openssh-server docker-compose git certbot nginx sqlite3 build-essential && systemctl enable ssh && curl -sSL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt-get update -y && apt-get install -y yarn && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && source ~/.bashrc
```

## NVM Installation
```shell
nvm install 18.8.0 && nvm use 18.8.0
```

## Update
```shell
apt update -y && apt upgrade -y
```

## Activating the Firewall and Opening the Required Ports (OPTIONAL)
If you are using a server like Contabo, you do not need to do these.

```shell
ufw enable

# Optional: If using SSH, allow port 22
ufw allow 22

# Allow ports 80 and 443 for HTTP and HTTPS
ufw allow 80
ufw allow 443
```

## Nginx Installation

```shell
apt install nginx -y
```

## Ar.io Node Installation

### Cloning Repo
```shell
git clone -b main https://github.com/ar-io/ar-io-node
cd ar-io-node
```

### Editing the .env File
Open file.
```shell
nano .env
```

Then, we edit the codes below according to our needs and save them by pressing `CTRL X` and `Enter`.

Two different wallet addresses are used here, but we will use the same wallet as the Observer wallet. We do this to reduce costs.

```shell
GRAPHQL_HOST=arweave.net
GRAPHQL_PORT=443
START_HEIGHT=0
RUN_OBSERVER=true
ARNS_ROOT_HOST=DOMAİN_ADDRESS // Example: ar.domain.com
AR_IO_WALLET=WaLLET_ADDRESS
OBSERVER_WALLET=WaLLET_ADDRESS
```

## Running the Node

```shell
docker-compose up -d
```
## Logları Kontrol Etme 

## Checking Logs
```shell
docker-compose logs -f --tail=0
```
You can close the logs by saying `CTRL C`.

## Set up Networking

### Create SSL (HTTPS) Certificates for Your Domain:
After editing your email address and domain in the code below, run the code.
```shell
certbot certonly --manual --preferred-challenges dns --email EMAIL_ADDRESS -d ar.domain.com -d '*.ar.domain.com'
```

* After entering the code, you will pass the places where you need to write `yes` to accept it.

:::warning
Be careful in this part. It will give you two codes for the `TXT` record, one is `Record name` and the other is `value`. You will add them to your service provider.
:::

Please pay attention to the following when recording `TXT`. If your domain name is `ar.domain.com`, your registration name will be: `_acme-challenge.ar`
You will use 'the code given in the output' as the value.

:::warning
Before moving on to the next step, go to a [DNS Checker](https://dnschecker.org/) and search for `_acme-challenge.ar.domain.com` to see if the record is propagated. Propagation may take a while. Press `Enter` when the propagation starts.
:::

Finally, you will receive a printout showing you the directory of your certificate files.

### Preparing Nginx .conf Files
We create a new .conf file.
```shell
nano /etc/nginx/conf.d/ar.node.conf
```
Ardından  aşağıdaki kodları kendinize göre düzenleyerek bu dosyaya kaydedip çıkıyoruz. Çıkmak için `CTRL X` ardından `Enter` diyoruz.
* `ar.domain.com` yazan yerleri kendi alan adınıza göre düzenleyiniz.
```shell
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name ar.domain.com *.ar.domain.com;

    ssl_certificate /etc/letsencrypt/live/ar.domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ar.domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
    }

}
server {
    listen 80;
    listen [::]:80;
    server_name ar.domain.com *.ar.domain.com;

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Then we enter the following codes one by one.

```shell
unlink /etc/nginx/sites-available/default
```

```shell
nginx -t
```
If you do not see an error in the output of this code, it will give an output of OK. This shows that there is no problem with nginx settings.

Finally, we restart the nginx service.
```shell
service nginx restart
```

### Checking the Website 
Go to your domain address in your browser and if you get an output similar to the one below, everything is fine.

```shell
{"network":"arweave.N.1","version":5,"release":68,"height":1385242,"current":"2tbqNmxc88z9Pzhlx5kKlwUOpk4hne23iMmLnFATDcQ2c-o7gtVKWJSg5twg6iMu","blocks":1385243,"peers":94,"queue_length":0,"node_state_latency":1}
```

### Restarting the Node
```shell
sudo docker-compose down
sudo docker-compose up -d
```

### Checking the Node
Write your domain at the address below and check.
https://ar.domain.com/3lyxgbgEvqNSvJrTX2J7CfRychUD5KClFhhVLyTPNCQ

## Application to Participate in Testnet

To participate in the ar.io Testnet, it is necessary to stake at least 10,000 Test IO tokens. To get Test IO token, we type `/apply` in the `#testnet` channel on the [ar.io Discord](https://discord.gg/ApxXjvwECK) server and select `Application to join the ar.io Testnet!` and and a bot is messaging us. We answer the questions there. Then we wait for the testnet tokens to arrive...

## Joining the Ar.io Testnet

If you will find this step on the other page. Go to the next page...