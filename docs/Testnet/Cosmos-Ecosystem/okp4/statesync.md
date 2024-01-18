---
title: 🔄 StateSync
description: Node synchronization with StateSync.
image: ./img/OKP4-Service-Cover.jpg
keywords: [okp4, open knowledge protocol, installation, snapshot, statesync, update]
---

# StateSync 

```shell
sudo systemctl stop okp4d

cp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup
okp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book

SNAP_RPC="https://rpc-t-okp4.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.okp4d/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.okp4d/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.okp4d/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.okp4d/config/config.toml

mv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json

sudo systemctl restart okp4d
sudo journalctl -u okp4d -f --no-hostname -o cat
```
