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

cp $HOME/.Cardchaind/data/priv_validator_state.json $HOME/.Cardchaind/priv_validator_state.json.backup 

Cardchaind tendermint unsafe-reset-all --home $HOME/.Cardchaind --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/crowdcontrol/ | egrep -o ">cardtestnet-8_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/crowdcontrol/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.Cardchain

mv $HOME/.Cardchaind/priv_validator_state.json.backup $HOME/.Cardchaind/data/priv_validator_state.json 

systemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat
```
