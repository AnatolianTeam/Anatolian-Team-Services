---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, chain, kurulum, snapshot, statesync, güncelleme]
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
systemctl stop initiad

cp $HOME/.initia/data/priv_validator_state.json $HOME/.initia/priv_validator_state.json.backup 

initiad tendermint unsafe-reset-all --home $HOME/.initia --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/initia/ | egrep -o ">initiation-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/initia/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.initia

mv $HOME/.initia/priv_validator_state.json.backup $HOME/.initia/data/priv_validator_state.json 

systemctl restart initiad && journalctl -u initiad -f -o cat
```
