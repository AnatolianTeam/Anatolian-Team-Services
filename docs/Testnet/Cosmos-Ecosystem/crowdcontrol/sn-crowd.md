---
title: 📸 Snapshot
description: Node installation with snapshot.
---

# Snapshot (COMING SOON)

```shell
# install lz4
apt update
apt install snapd -y
snap install lz4
```

```shell
systemctl stop Cardchaind

cp $HOME/.Cardchaind/data/priv_validator_state.json $HOME/.Cardchaind/priv_validator_state.json.backup 

Cardchaind tendermint unsafe-reset-all --home $HOME/.Cardchaind --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\.tar.lz4" | tr -d ">")
curl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.Cardchaind

mv $HOME/.Cardchaind/priv_validator_state.json.backup $HOME/.Cardchaind/data/priv_validator_state.json 

systemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat
```shell
