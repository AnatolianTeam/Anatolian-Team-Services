---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/OKP4-Service-Cover.jpg
keywords: [okp4, open, knowledge, protocol, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
``` 

```shell
systemctl stop okp4d

cp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup 

okp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/okp4/ | egrep -o ">okp4-nemeton-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/okp4/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.okp4d

mv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json 

systemctl restart okp4d && journalctl -u okp4d -f -o cat
```
