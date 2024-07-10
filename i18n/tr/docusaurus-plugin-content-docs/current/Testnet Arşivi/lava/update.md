---
title: 🆙 Güncelleme
description: Node güncelleme.
image: ./img/Lava-Service-Cover.jpg
keywords: [lava, network, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme 

## Elle Güncelleme

```shell
cd $HOME && rm -rf lava
git clone https://github.com/lavanet/lava
cd lava
git checkout v2.1.3
make install-all

systemctl restart lavad && journalctl -u lavad -f -o cat
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
sudo apt update
sudo apt install -y tmux
```

```shell

```
