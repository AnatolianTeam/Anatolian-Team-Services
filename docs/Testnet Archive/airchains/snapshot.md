---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Airchains-Service-Cover.jpg
keywords: [airchains, oracle, installation, snapshot, statesync, update]
---

# Snapshot

:::info
Snapshots are taken every 6 hours.
::::

```shell
sudo apt update
sudo apt install lz4 -y
```

```shell
systemctl stop junctiond

cp $HOME/.junction/data/priv_validator_state.json $HOME/.junction/priv_validator_state.json.backup 

junctiond tendermint unsafe-reset-all --home $HOME/.junction --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/airchains/ | egrep -o ">junction.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/airchains/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.junction

mv $HOME/.junction/priv_validator_state.json.backup $HOME/.junction/data/priv_validator_state.json 

systemctl restart junctiond && journalctl -u junctiond -f -o cat
```
