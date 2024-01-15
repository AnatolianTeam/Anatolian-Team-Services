---
title: 📸 Snapshot
description: Node installation with snapshot.
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install snapd -y
snap install lz4
```

```shell
systemctl stop c4ed

cp $HOME/.c4e-chain/data/priv_validator_state.json $HOME/.c4e-chain/priv_validator_state.json.backup 

c4ed tendermint unsafe-reset-all --home $HOME/.c4e-chain --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.c4e-chain

mv $HOME/.c4e-chain/priv_validator_state.json.backup $HOME/.c4e-chain/data/priv_validator_state.json 

systemctl restart c4ed && journalctl -u c4ed -f -o cat
```shell
