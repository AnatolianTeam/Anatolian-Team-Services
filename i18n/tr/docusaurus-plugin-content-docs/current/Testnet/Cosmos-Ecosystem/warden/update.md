---
title: 🆙 Güncelleme
description: Node güncelleme.
image: ./img/Warden-Service-Cover.jpg
keywords: [warden, protocol, chain, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme 

## Elle Güncelleme

```shell
cd $HOME
wget https://github.com/warden-protocol/wardenprotocol/releases/download/v0.5.4/wardend_Linux_x86_64.zip
unzip wardend_Linux_x86_64.zip
rm -rf wardend_Linux_x86_64.zip
chmod +x wardend
mv wardend $(which wardend)
wardend version
#version: 0.5.4
systemctl restart wardend && journalctl -fu wardend -o cat
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
sudo apt update
sudo apt install -y tmux
```

```shell

```
