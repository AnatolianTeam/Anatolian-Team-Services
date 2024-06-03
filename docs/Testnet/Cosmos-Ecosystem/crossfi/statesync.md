---
title: 🔄 StateSync
description: Node synchronization with StateSync.
position: 4
image: ./img/CrossFi-Service-Cover.jpg
keywords: [crossfi, installation, snapshot, statesync, update]
---

# StateSync

```shell
systemctl stop crossfid

cp $HOME/.crossfid/data/priv_validator_state.json $HOME/.crossfid/priv_validator_state.json.backup
crossfid tendermint unsafe-reset-all --home $HOME/.crossfid --keep-addr-book

SNAP_RPC="https://rpc-t-crossfi.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.crossfid/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.crossfid/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.crossfid/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.crossfid/config/config.toml

mv $HOME/.crossfid/priv_validator_state.json.backup $HOME/.crossfid/data/priv_validator_state.json

systemctl restart crossfid && journalctl -u crossfid -f -o cat
```
