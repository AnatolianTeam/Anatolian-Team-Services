---
title: 📸 Snapshot
description: Node installation with snapshot.
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop babylond

cp $HOME/.pryzm/data/priv_validator_state.json $HOME/.pryzm/priv_validator_state.json.backup 

pryzmd tendermint unsafe-reset-all --home $HOME/.pryzm --keep-addr-book
curl https://testnet.anatolianteam.com/pryzm/pryzm_latest.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.pryzm

mv $HOME/.pryzm/priv_validator_state.json.backup $HOME/.pryzm/data/priv_validator_state.json 

systemctl restart pryzmd && journalctl -u pryzmd -f -o cat
```shell
