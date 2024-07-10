---
title: 🔄 StateSync
description: Node synchronization with StateSync.
image: ./img/Airchains-Service-Cover.jpg
keywords: [airchains, oracle, installation, snapshot, statesync, update]
---

# StateSync

```shell
systemctl stop junctiond

cp $HOME/.junction/data/priv_validator_state.json $HOME/.junction/priv_validator_state.json.backup
junctiond tendermint unsafe-reset-all --home $HOME/.junction --keep-addr-book

SNAP_RPC="https://rpc-t-airchains.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.junction/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.junction/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.junction/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.junction/config/config.toml

mv $HOME/.junction/priv_validator_state.json.backup $HOME/.junction/data/priv_validator_state.json

systemctl restart junctiond && journalctl -u junctiond -f -o cat
```
