---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, kurulum, snapshot, statesync, güncelleme]
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
curl https://testnet.anatolianteam.com/crowdcontrol/cardtestnet-10.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.cardchaind

mv $HOME/.cardchaind/priv_validator_state.json.backup $HOME/.cardchaind/data/priv_validator_state.json

systemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat
```
