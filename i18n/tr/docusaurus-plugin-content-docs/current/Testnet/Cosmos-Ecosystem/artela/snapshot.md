---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Artela-Service-Cover.jpg
keywords: [artela, network, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop artelad

cp $HOME/.artelad/data/priv_validator_state.json $HOME/.artelad/priv_validator_state.json.backup 

artelad tendermint unsafe-reset-all --home $HOME/.artelad --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">artela_11822-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/artela/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.artelad

mv $HOME/.artelad/priv_validator_state.json.backup $HOME/.artelad/data/priv_validator_state.json 

systemctl restart artelad && journalctl -u artelad -f -o cat
```
