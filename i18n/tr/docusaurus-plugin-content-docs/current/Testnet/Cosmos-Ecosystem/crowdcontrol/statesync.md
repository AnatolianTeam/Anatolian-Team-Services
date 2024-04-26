---
title: 🔄 StateSync
description: Node synchronization with StateSync.
image: ./img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, kurulum, snapshot, statesync, güncelleme]
---

# StateSync

```shell
systemctl stop Cardchaind

cp $HOME/.cardchaind/data/priv_validator_state.json $HOME/.cardchaind/priv_validator_state.json.backup
Cardchaind tendermint unsafe-reset-all --home $HOME/.cardchaind --keep-addr-book

SNAP_RPC="https://rpc-t-crowdcontrol.anatolianteam.com:443"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH

sed -i 's|^enable *=.*|enable = true|' $HOME/.cardchaind/config/config.toml
sed -i 's|^rpc_servers *=.*|rpc_servers = "'$SNAP_RPC,$SNAP_RPC'"|' $HOME/.cardchaind/config/config.toml
sed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.cardchaind/config/config.toml
sed -i 's|^trust_hash *=.*|trust_hash = "'$TRUST_HASH'"|' $HOME/.cardchaind/config/config.toml

mv $HOME/.cardchaind/priv_validator_state.json.backup $HOME/.cardchaind/data/priv_validator_state.json

systemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat
```
