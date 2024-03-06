---
title: 📸 Snapshot
description: Node installation with snapshot.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/mantra/img/Mantra-Service-Cover.jpg
keywords: [mantra, chain, installation, snapshot, statesync, update]
---

# Snapshot

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop mantrachaind

cp $HOME/.mantrachain/data/priv_validator_state.json $HOME/.mantrachain/priv_validator_state.json.backup 

mantrachaind tendermint unsafe-reset-all --home $HOME/.mantrachain --keep-addr-book
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2_.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.mantrachain

mv $HOME/.mantrachain/priv_validator_state.json.backup $HOME/.mantrachain/data/priv_validator_state.json 

systemctl restart mantrachaind && journalctl -u mantrachaind -f -o cat
```
