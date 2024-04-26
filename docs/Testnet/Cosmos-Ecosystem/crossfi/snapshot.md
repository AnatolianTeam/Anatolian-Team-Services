---
title: 📸 Snapshot
description: Node installation with snapshot.
position: 3
image: ./img/CrossFi-Service-Cover.jpg
keywords: [crossfi, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop crossfid

cp $HOME/.mineplex-chain/data/priv_validator_state.json $HOME/.mineplex-chain/priv_validator_state.json.backup 

crossfid tendermint unsafe-reset-all --home $HOME/.mineplex-chain --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/crossfi/ | egrep -o ">crossfi-evm-testnet-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/crossfi/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.mineplex-chain

mv $HOME/.mineplex-chain/priv_validator_state.json.backup $HOME/.mineplex-chain/data/priv_validator_state.json 

systemctl restart crossfid && journalctl -u crossfid -f -o cat
```
