---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, modular, chain, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop evmosd

cp $HOME/.evmosd/data/priv_validator_state.json $HOME/.evmosd/priv_validator_state.json.backup 

evmosd tendermint unsafe-reset-all --home $HOME/.evmosd --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/0g/ | egrep -o ">alfama_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/0g/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.evmosd/priv_validator_state.json.backup $HOME/.evmosd/data/priv_validator_state.json 

systemctl restart evmosd && journalctl -u evmosd -f -o cat
```
