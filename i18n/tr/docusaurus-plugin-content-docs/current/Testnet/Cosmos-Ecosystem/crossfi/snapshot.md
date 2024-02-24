---
title: 📸 Snapshot
description: Node installation with snapshot.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/artela/img/Artela-Service-Cover.jpg
keywords: [artela, network, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop crossfid

cp $HOME/.crossfid/data/priv_validator_state.json $HOME/.crossfid/priv_validator_state.json.backup 

crossfid tendermint unsafe-reset-all --home $HOME/.crossfid --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">artela_11822-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/artela/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.crossfid/priv_validator_state.json.backup $HOME/.crossfid/data/priv_validator_state.json 

systemctl restart crossfid && journalctl -u crossfid -f -o cat
```
