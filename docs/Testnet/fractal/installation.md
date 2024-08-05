---
title: 💾 Installation
description: Fractal Hubble installation guide.
image: ./img/Fractal-Service-Cover.jpg
keywords: [Fractal, Bitcoin, BTC, Service, installation]
---

# Fractal Installation Guide

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install curl build-essential pkg-config libssl-dev git wget jq make gcc chrony -y
```

## Installing Fractal
```shell
cd $HOME
wget https://github.com/fractal-bitcoin/fractald-release/releases/download/v0.1.6/fractald-0.1.6-x86_64-linux-gnu.tar.gz 
tar -zxvf fractald-0.1.6-x86_64-linux-gnu.tar.gz && mv fractald-0.1.6-x86_64-linux-gnu fractal && rm fractald-0.1.6-x86_64-linux-gnu.tar.gz 
```
```shell
cd fractal && mkdir data
```

```shell
cp ./bitcoin.conf ./data
```

## Creating the Service File
```shell
tee /etc/systemd/system/fractald.service > /dev/null <<EOF
[Unit]
Description=Fractal Node
After=network.target

[Service]
User=root
WorkingDirectory=/root/fractal
ExecStart=/root/fractal/bin/bitcoind -datadir=/root/fractal/data/ -maxtipage=504576000
Restart=always
RestartSec=3
LimitNOFILE=infinity

[Install]
WantedBy=multi-user.target
EOF
```

## Enabling and Starting the Service
```shell
systemctl daemon-reload && \
systemctl enable fractald && \
systemctl start fractald
```

## Checking the Logs
```shell
journalctl -u fractald -f -o cat
```

## Wallet

### Creating a New Wallet
```shell
cd $HOME/fractal/bin
./bitcoin-wallet -wallet=wallet -legacy create
```

### Getting Wallet Private Key
```shell
cd $HOME/fractal/bin
./bitcoin-wallet -wallet=$HOME/.bitcoin/wallets/wallet/wallet.dat -dumpfile=$HOME/.bitcoin/wallets/wallet/MyPK.dat dump
cd && awk -F 'checksum,' '/checksum/ {print "Cüzdan Private Keyiniz:" $2}' .bitcoin/wallets/wallet/MyPK.dat
```

### Unisat Cüzdan

Yukarıda aldığınız private keyi kullanarak cüzdanınızı içe aktarabilirsiniz. İçe aktarım sırasında `Legacy (P2PKH)` seçmeyi unutmayın.

## Completely Deleting the Node
```shell
systemctl stop fractald && \
systemctl disable fractald && \
rm /etc/systemd/system/fractald.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .bitcoin fractal && \
rm -rf $(which fractald)
```
