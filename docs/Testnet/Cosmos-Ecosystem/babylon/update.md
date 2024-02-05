---
title: 🆙 Update
description: Update node with manual or scheduled.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/babylon/img/Babylon-Service-Cover.jpg
keywords: [babylon, installation, snapshot, statesync, update]
---

# Update

## Manual Update

```shell
sudo systemctl stop babylond

cd || return
rm -rf babylon
git clone https://github.com/babylonchain/babylon
cd babylon || return
git checkout v0.7.2
make install
babylond version

sudo systemctl start dymd
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
sudo apt update
sudo apt install -y tmux
```

```shell
tmux new -s babylon "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n babylon -i bbn-test-2 -t 1651535 -v 0.7.2 -b babylondd -c https://services.anatolianteam.com/"
# CTRL+B D to exit the session
```
