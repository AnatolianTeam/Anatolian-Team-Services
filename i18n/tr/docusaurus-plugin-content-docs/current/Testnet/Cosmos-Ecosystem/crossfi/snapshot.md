---
title: 📸 Snapshot
description: Snapshot ile node senkronizasyonu.
position: 3
image: ./img/CrossFi-Service-Cover.jpg
keywords: [crossfi, network, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop crossfid

cp $HOME/.crossfid/data/priv_validator_state.json $HOME/.crossfid/priv_validator_state.json.backup 

crossfid tendermint unsafe-reset-all --home $HOME/.crossfid --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/crossfi/ | egrep -o ">crossfi-evm-testnet-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/crossfi/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.crossfid

mv $HOME/.crossfid/priv_validator_state.json.backup $HOME/.crossfid/data/priv_validator_state.json 

systemctl restart crossfid && journalctl -u crossfid -f -o cat
```
