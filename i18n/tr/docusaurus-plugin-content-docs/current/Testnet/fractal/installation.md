---
title: 💾 Kurulum
description: Fractal Hubble kurulum rehberi
image: ./img/Fractal-Service-Cover.jpg
keywords: [Fractal, Bitcoin, BTC, Servis, Kurulum]
---

# Fractal Kurulum Rehberi 

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install curl build-essential pkg-config libssl-dev git wget jq make gcc chrony -y
```

## Fractal Kurulumu
```shell
cd $HOME
wget https://github.com/fractal-bitcoin/fractald-release/releases/download/v0.1.7/fractald-0.1.7-x86_64-linux-gnu.tar.gz
tar -zxvf fractald-0.1.7-x86_64-linux-gnu.tar.gz && mv fractald-0.1.7-x86_64-linux-gnu fractal && rm fractald-0.1.7-x86_64-linux-gnu.tar.gz 
```

```shell
cp ./bitcoin.conf ./data
```

## Servis Dosyası Oluşturma
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

## Hizmeti Etkinleştirme ve Başlatma
```shell
systemctl daemon-reload && \
systemctl enable fractald && \
systemctl start fractald
```

## Logları Kontrol Etme
```shell
journalctl -u fractald -fo cat
```

## Cüzdan

### Yeni Cüzdan Oluşturma
```shell
cd $HOME/fractal/bin
./bitcoin-wallet -wallet=wallet -legacy create
```

### Var Olan Cüzdanı İçeri Aktarma
```shell
cd $HOME/fractal/bin
./bitcoin-wallet -wallet=wallet -legacy create
```

### Cüzdan Private Key Alma
```shell
cd $HOME/fractal/bin
./bitcoin-wallet -wallet=$HOME/.bitcoin/wallets/wallet/wallet.dat -dumpfile=$HOME/.bitcoin/wallets/wallet/MyPK.dat dump
cd && awk -F 'checksum,' '/checksum/ {print "Cüzdan Private Keyiniz:" $2}' .bitcoin/wallets/wallet/MyPK.dat
```

### Unisat Cüzdan

Yukarıda aldığınız private keyi kullanarak cüzdanınızı içe aktarabilirsiniz. İçe aktarım sırasında `Legacy (P2PKH)` seçmeyi unutmayın.

## Node'u Tamamen Silme
```shell
systemctl stop fractald && \
systemctl disable fractald && \
rm /etc/systemd/system/fractald.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .bitcoin fractal && \
rm -rf $(which fractald)
```