---
title: 🆙 Güncelleme
description: Node güncelleme.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/img/Lava-Service-Cover.jpg
keywords: [lava, network, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme 

## Elle Güncelleme

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
sudo apt update
sudo apt install -y tmux
```

```shell

```
