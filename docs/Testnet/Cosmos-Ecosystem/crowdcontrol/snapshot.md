---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, card game, trade, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop Cardchaind

cp $HOME/.cardchaind/data/priv_validator_state.json $HOME/.cardchaind/priv_validator_state.json.backup 

Cardchaind tendermint unsafe-reset-all --home $HOME/.cardchaind --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">cardtestnet-10.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/crowdcontrol/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.cardchaindd

mv $HOME/.cardchaind/priv_validator_state.json.backup $HOME/.cardchaind/data/priv_validator_state.json 

systemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat
```
