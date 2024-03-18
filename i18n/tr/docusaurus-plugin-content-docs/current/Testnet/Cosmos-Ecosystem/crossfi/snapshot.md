---
title: 📸 Snapshot
description: Snapshot ile node senkronizasyonu.
position: 3
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crossfi/img/CrossFi-Service-Cover.jpg
keywords: [crossfi, network, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop crossfid

cp $HOME/.mineplex-chain/data/priv_validator_state.json $HOME/.mineplex-chain/priv_validator_state.json.backup 

crossfid tendermint unsafe-reset-all --home $HOME/.mineplex-chain --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">crossfi-evm-testnet-1_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/crossfi/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.mineplex-chain

mv $HOME/.mineplex-chain/priv_validator_state.json.backup $HOME/.mineplex-chain/data/priv_validator_state.json 

systemctl restart crossfid && journalctl -u crossfid -f -o cat
```
