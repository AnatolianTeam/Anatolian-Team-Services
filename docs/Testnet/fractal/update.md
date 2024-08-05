---
title: 🆙 Update
description: Fractal Hubble update guide.
image: ./img/Fractal-Service-Cover.jpg
keywords: [Fractal, Bitcoin, BTC, Service, installation]
---

# Fractal Update Guide


```shell
cd $HOME
systemctl stop fractald
rm -rf fractal
wget https://github.com/fractal-bitcoin/fractald-release/releases/download/v0.1.6/fractald-0.1.6-x86_64-linux-gnu.tar.gz 
tar -zxvf fractald-0.1.6-x86_64-linux-gnu.tar.gz && mv fractald-0.1.6-x86_64-linux-gnu fractal && rm fractald-0.1.6-x86_64-linux-gnu.tar.gz 
systemctl start fractald
journalctl -u fractald -f -o cat
```
