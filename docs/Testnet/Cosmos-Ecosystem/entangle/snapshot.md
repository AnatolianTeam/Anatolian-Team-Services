---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Entangle-Service-Cover.jpg
keywords: [entangle, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop entangled

cp $HOME/.entangled/data/priv_validator_state.json $HOME/.entangled/priv_validator_state.json.backup 

entangled tendermint unsafe-reset-all --home $HOME/.entangled --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/entangle/ | egrep -o ">entangle_11822-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/entangle/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.entangled/priv_validator_state.json.backup $HOME/.entangled/data/priv_validator_state.json 

systemctl restart entangled && journalctl -u entangled -f -o cat
```
