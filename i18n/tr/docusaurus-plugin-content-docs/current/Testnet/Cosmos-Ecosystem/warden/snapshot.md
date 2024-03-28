---
title: 📸 Snapshot
description: Snapshot ile node senkronizasyonu.
image: ./img/Warden-Service-Cover.jpg
keywords: [warden, protocol, chain, kurulum, snapshot, statesync, güncelleme]
---

# Snapshot (YAKINDA)

```shell
# install lz4
apt update
apt install lz4 -y
```

```shell
systemctl stop wardend

cp $HOME/.warden/data/priv_validator_state.json $HOME/.warden/priv_validator_state.json.backup 

wardend tendermint unsafe-reset-all --home $HOME/.warden --keep-addr-book
SNAP_NAME=$(curl -s COMING_SOON | egrep -o ">alfama_.*\.tar.lz4" | tr -d ">")
curl -L https://testnet.anatolianteam.com/selfchain/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm

mv $HOME/.warden/priv_validator_state.json.backup $HOME/.warden/data/priv_validator_state.json 

systemctl restart wardend && journalctl -u wardend -f -o cat
```