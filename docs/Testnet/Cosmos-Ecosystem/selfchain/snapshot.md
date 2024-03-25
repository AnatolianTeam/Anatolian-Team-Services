---
title: 📸 Snapshot
description: Node installation with snapshot.
image: ./img/SelfChain-Service-Cover.jpg
keywords: [selfchain, self, chain, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop selfchaind

cp $HOME/.selfchain/data/priv_validator_state.json $HOME/.selfchain/priv_validator_state.json.backup 

selfchaind tendermint unsafe-reset-all --home $HOME/.selfchain --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/selfchain/ | egrep -o ">self-dev-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/selfchain/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.selfchain/priv_validator_state.json.backup $HOME/.selfchain/data/priv_validator_state.json 

systemctl restart selfchaind && journalctl -u selfchaind -f -o cat
```
