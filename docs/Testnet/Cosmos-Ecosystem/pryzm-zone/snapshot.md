---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Pryzm-Service-Cover.jpg
keywords: [pryzm, zone, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop babylond

cp $HOME/.pryzm/data/priv_validator_state.json $HOME/.pryzm/priv_validator_state.json.backup 

pryzmd tendermint unsafe-reset-all --home $HOME/.pryzm --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/pryzm/ | egrep -o ">indigo-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/pryzm/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.pryzm/priv_validator_state.json.backup $HOME/.pryzm/data/priv_validator_state.json 

systemctl restart pryzmd && journalctl -u pryzmd -f -o cat
```
