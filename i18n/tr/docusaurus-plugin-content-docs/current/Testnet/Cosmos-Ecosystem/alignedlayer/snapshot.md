---
title: 📸 Snapshot
description: Snapshot ile node senkronizasyonu.
image: ./img/Aligned-Service-Cover.jpg
keywords: [Aligned, Layer, alignedlayer, katman, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop alignedlayerd

cp $HOME/.alignedlayer/data/priv_validator_state.json $HOME/.alignedlayer/priv_validator_state.json.backup 

alignedlayerd tendermint unsafe-reset-all --home $HOME/.alignedlayer --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/0g/ | egrep -o ">zgtendermint_9000-1.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/0g/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.alignedlayer

mv $HOME/.alignedlayer/priv_validator_state.json.backup $HOME/.alignedlayer/data/priv_validator_state.json 

systemctl restart alignedlayerd && journalctl -u alignedlayerd -f -o cat
```
