---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/C4E-Service-Cover.jpg
keywords: [chain4energy, c4e, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop c4ed

cp $HOME/.c4e-chain/data/priv_validator_state.json $HOME/.c4e-chain/priv_validator_state.json.backup 

c4ed tendermint unsafe-reset-all --home $HOME/.c4e-chain --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/c4e/ | egrep -o ">babajaga-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/c4e/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.c4e-chain

mv $HOME/.c4e-chain/priv_validator_state.json.backup $HOME/.c4e-chain/data/priv_validator_state.json 

systemctl restart c4ed && journalctl -u c4ed -f -o cat
```
