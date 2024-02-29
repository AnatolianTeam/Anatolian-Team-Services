---
title: 📸 Snapshot
description: Node installation with snapshot.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/artela/img/SelfChain-Service-Cover.jpg
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
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/artela/ | egrep -o ">artela_11822-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/artela/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.selfchain/priv_validator_state.json.backup $HOME/.selfchain/data/priv_validator_state.json 

systemctl restart selfchaind && journalctl -u selfchaind -f -o cat
```
