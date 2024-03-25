---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Lava-Service-Cover.jpg
keywords: [lava, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop lavad

cp $HOME/.lava/data/priv_validator_state.json $HOME/.lava/priv_validator_state.json.backup 

lavad tendermint unsafe-reset-all --home $HOME/.lava --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/lava/ | egrep -o ">lava_11822-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/lava/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.lava/priv_validator_state.json.backup $HOME/.lava/data/priv_validator_state.json 

systemctl restart lavad && journalctl -u lavad -f -o cat
```
