---
title: 🆙 Update
description: Update node with manual or scheduled.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, oracle, installation, snapshot, statesync, update]
---

# Update 

## Manual Update

:::info
Update v0.2.15 
:::

```shell
cd $HOME
rm -rf initia
git clone https://github.com/initia-labs/initia.git
cd initia
git checkout v0.2.15
make build
sudo mv $HOME/initia/build/initiad $(which initiad)
sudo systemctl restart initiad && sudo journalctl -u initiad -f
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
sudo apt update
sudo apt install -y tmux
```

```shell

```
