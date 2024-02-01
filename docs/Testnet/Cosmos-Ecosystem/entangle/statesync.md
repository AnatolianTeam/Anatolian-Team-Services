---
title: 🔄 StateSync
description: Node synchronization with StateSync.
image: ./img/Entangle-Service-Cover.jpg
keywords: [entangle, installation, snapshot, statesync, update]
---

# StateSync

```shell
sudo systemctl stop entangled

cp $HOME/.entangled/data/priv_validator_state.json $HOME/.entangled/priv_validator_state.json.backup
entangled tendermint unsafe-reset-all --home $HOME/.entangled --keep-addr-book

SNAP_RPC="https://rpc-t.entangle.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.entangled/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.entangled/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.entangled/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.entangled/config/config.toml

mv $HOME/.entangled/priv_validator_state.json.backup $HOME/.entangled/data/priv_validator_state.json

sudo systemctl restart entangled
sudo journalctl -u entangled -f --no-hostname -o cat
```
