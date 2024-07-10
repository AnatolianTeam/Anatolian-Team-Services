---
title: 🆙 Güncelleme
description: Update node with manual or scheduled.
image: ./img/Babylon-Service-Cover.jpg
keywords: [babylon, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme

## Elle Güncelleme

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

## Planlı Güncelleme

```shell
# Kurulu değilse tmux yükleyin 
sudo apt update
sudo apt install -y tmux
```

```shell
tmux new -s babylon "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n babylon -i bbn-test-2 -t 1651535 -v 0.7.2 -b babylondd -c https://services.anatolianteam.com/"
# CTRL+B ardında D basıp oturumdan çıkın.
```
