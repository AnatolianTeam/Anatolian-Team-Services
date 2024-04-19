---
title: 📸 Snapshot
description: Snapshot ile kurulum.
image: ./img/Mantra-Service-Cover.jpg
position: 2
keywords: [mantra, chain, kurulum, snapshot, statesync, güncelleme]
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
SNAP_NAME=$(curl -s https://testnet.anatolianteam.com/mantra/ | egrep -o ">mantra-hongbai-1.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/mantra/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.mantrachain

mv $HOME/.mantrachain/priv_validator_state.json.backup $HOME/.mantrachain/data/priv_validator_state.json 

systemctl restart mantrachaind && journalctl -u mantrachaind -f -o cat
```
