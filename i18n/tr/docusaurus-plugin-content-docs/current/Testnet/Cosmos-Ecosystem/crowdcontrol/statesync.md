---
title: 🔄 StateSync
description: Node synchronization with StateSync.
image: ./img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, kurulum, snapshot, statesync, güncelleme]
---

# StateSync

```shell
sudo systemctl stop Cardchaind

cp $HOME/.Cardchain/data/priv_validator_state.json $HOME/.Cardchain/priv_validator_state.json.backup
Cardchaind tendermint unsafe-reset-all --home $HOME/.Cardchain --keep-addr-book

SNAP_RPC="https://rpc-t-crowdcontrol.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.Cardchain/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.Cardchain/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.Cardchain/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.Cardchain/config/config.toml

mv $HOME/.Cardchain/priv_validator_state.json.backup $HOME/.Cardchain/data/priv_validator_state.json

sudo systemctl restart Cardchaind
sudo journalctl -u Cardchaind -f --no-hostname -o cat
```
