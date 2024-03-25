---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Babylon-Service-Cover.jpg
keywords: [babylon, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop babylond

cp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup 

babylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2_.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.babylond

mv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json 

systemctl restart babylond && journalctl -u babylond -f -o cat
```
