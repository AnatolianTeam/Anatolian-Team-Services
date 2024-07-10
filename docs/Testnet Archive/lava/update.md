---
title: 🆙 Update
description: Update node with manual or scheduled.
image: ./img/Lava-Service-Cover.jpg
keywords: [lava, installation, snapshot, statesync, update]
---

# Update 

## Manual Update

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
apt update
apt install -y tmux
```

```shell

```
