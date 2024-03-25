---
title: 🆙 Update
description: Update node with manual or scheduled.
image: ./img/Lava-Service-Cover.jpg
keywords: [lava, installation, snapshot, statesync, update]
---

# Update 

## Manual Update

```shell
systemctl stop lavad
export LAVA_BINARY=lavad
cd || return
rm -rf lava
git clone https://github.com/lavanet/lava
cd lava || return
git checkout v1.0.1
install
systemctl start lavad
journalctl -u lavad -f --no-hostname -o cat
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
apt update
apt install -y tmux
```

```shell

```
