---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/OKP4-Service-Cover.jpg
keywords: [okp4, open knowledge protocol, installation, snapshot, statesync, update]
---

# Snapshot (COMING SOON) 

```shell
# install lz4
apt update
apt install snapd -y
snap install lz4
```

```shell
systemctl stop okp4d

cp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup 

okp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.okp4d

mv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json 

systemctl restart okp4d && journalctl -u okp4d -f -o cat
```shell
