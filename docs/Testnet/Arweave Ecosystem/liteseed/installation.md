---
title: 💾 Installation
description: Liteseed installation guide.
image: ./img/Liteseed-Service-Cover.jpg
keywords: [Liteseed, ao, data, Permaweb, installation]
sidebar_position: 1
---

# Liteseed Installation Guide 


## Domain 
Before starting, you must have a domain. Get yourself a domain from a service provider. You can find a domain for $1 per year.

### Creating a Subdomain
Go to your service provider's panel and enter the advanced DNS settings or IP Based DNS settings section. Create 2 A records here.
* *For the first `A` record, write `lite` or `litesedd` in the `record name` section and the `IP address` of your server in the `value` section and save.

* When the time comes, we will take action here again, this time we will create a `TXT` record.

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing Docker
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Installing Nnginx and Certbot

```shell
apt install certbot nginx -y
```

## Cloning the Repo
```shell
git clone https://github.com/liteseed/edge
```

## Creating Docker Image

```shell
cd ./edge
docker build -t edge .
```

## Creating Volume

```shell
docker volume create liteseed
```

## Generating Arweave Private Key and Migrate the SQLite Database 

```shell
docker run -v liteseed:/data edge generate
docker run -v liteseed:/data edge migrate
```

## Starting the Node
Write the port number you want to use on your server to the variable.
```shell
export EXTERNAL_PORT=8080
```
And then run the node.
docker run -d -p $EXTERNAL_PORT:8080 -v liteseed:/data edge start
```shell
docker run -d -p $EXTERNAL_PORT:8080 -v liteseed:/data edge start
```
* And then close the logs with CTRL C. If you run it on a screen without closing it, these logs will take up space on your disk over time.

## Learning Wallet Address

```shell
docker run -v liteseed:/data edge balance
```

* The output would look something this below
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 1000 LSD
Staked:  No
```
## Domain SSL and TXT Record

### Create SSL (HTTPS) Certificates for Your Domain:
After editing your email address and domain in the code below, run the code.
```shell
certbot certonly --manual --preferred-challenges dns --email EMAIL_ADDRESS -d liteseed.domain.com
```

* After entering the code, you will pass the places where you need to write `yes` to accept it.

:::warning
Be careful in this part. It will give you two codes for the `TXT` record, one is `Record name` and the other is `value`. You will add them to your service provider.
:::

Please pay attention to the following when recording `TXT`. If your domain name is `liteseed.domain.com`, your registration name will be: `_acme-challenge.liteseed`
You will use `the code given in the output` as the value.

:::warning
Before moving on to the next step, go to a [DNS Checker](https://dnschecker.org/) and search for `_acme-challenge.liteseed.domain.com` to see if the record is propagated. Propagation may take a while. Press `Enter` when the propagation starts.
:::

Finally, you will receive a printout showing you the directory of your certificate files.

### Preparing Nginx .conf Files
We create a new .conf file.
```shell
nano /etc/nginx/conf.d/liteseed.node.conf
```

Then, we edit the codes below and save them to this file and exit. To exit, we say `CTRL X` then `Enter`.
* Edit the fields that say `liteseed.domain.com` and `8080` according to your own domain name.
```shell
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name ar.domain.com;

    ssl_certificate /etc/letsencrypt/live/liteseed.domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/liteseed.domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
    }

}
server {
    listen 80;
    listen [::]:80;
    server_name liteseed.domain.com;

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
ln -s /etc/nginx/sites-available/liteseed.node.conf /etc/nginx/sites-enabled/liteseed.node.conf
```

```shell
nginx -t
```
If you do not see an error in the output of this code, it will give an output of OK. This shows that there is no problem with nginx settings.

Finally, we restart the nginx service.
```shell
service nginx restart
```

## Requesting Tokens

First, fill out the [form](https://docs.google.com/forms/d/e/1FAIpQLSdqFBwz9h6RUSyk4So16u6aIn1b_sfuGv6JYDew_hoM8rxoRQ/viewform) here.

Then send your `wallet address`, `dicord ID` and `website` you set above to hello@liteseed.xyz.

## Staking 
To request a token, write the address (twitter or website) you gave in the e-mail you sent to where it says `https://liteseed.domain.com`.
```shell
docker run -v liteseed:/data edge stake -u "https://liteseed.domain.com"
```

## Controling Stake
```shell
docker run -v liteseed:/data edge balance
```

* The output would look something this below
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 0 LSD
Staked:  Yes
```

## Restarting the Node
Now you can start earning both $AR and $LSD.
```shell
docker run -v liteseed:/data edge start
```


## Backing Up the Wallet
```shell
cat /var/lib/docker/volumes/liteseed/_data/signer.json
```