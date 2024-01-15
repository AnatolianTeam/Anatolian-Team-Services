---
title: 🔄 StateSync
description: Node synchronization with StateSync.
---

# StateSync (COMING SOON)

```shell
sudo systemctl stop Cardchaind

cp $HOME/.Cardchaind/data/priv_validator_state.json $HOME/.Cardchaind/priv_validator_state.json.backup
Cardchaind tendermint unsafe-reset-all --home $HOME/.Cardchaind --keep-addr-book

SNAP_RPC="COMING_SOON"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.Cardchaind/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.Cardchaind/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.Cardchaind/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.Cardchaind/config/config.toml

mv $HOME/.Cardchaind/priv_validator_state.json.backup $HOME/.Cardchaind/data/priv_validator_state.json

sudo systemctl restart Cardchaind
sudo journalctl -u Cardchaind -f --no-hostname -o cat
```
