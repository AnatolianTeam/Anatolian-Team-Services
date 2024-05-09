---
title: 📸 Snapshot
description: Snapshot ile node senkronizasyonu.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, yapay zeka, modüler, zincir, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop 0gchaind

cp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup 

0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/0g/ | egrep -o ">zgtendermint_9000-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/0g/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.0gchain

mv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json 

systemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat
```
