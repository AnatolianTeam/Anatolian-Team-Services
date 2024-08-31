---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Aligned-Service-Cover.jpg
keywords: [Aligned, Layer, alignedlayer, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu alignedlayerd -o cat
```

### Starting Node
```
systemctl start alignedlayerd
```

### Stopping the Node
```
systemctl stop alignedlayerd
```

### Restarting the Node
```
systemctl restart alignedlayerd
```

### Node Sync Status
```
alignedlayerd status 2>&1 | jq .SyncInfo
```

### Node Information
```
alignedlayerd status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
alignedlayerd tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(alignedlayerd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.alignedlayer/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
alignedlayerd keys list
```

### Seeing Wallet Address
```
alignedlayerd keys show $ALIGNED_WALLET --bech val -a
```

### Importing Wallet
```
alignedlayerd keys add $ALIGNED_WALLET --recover
```

### Deleting Your Wallet
```
alignedlayerd keys delete $ALIGNED_WALLET
```

### Checking Wallet Balance
```
alignedlayerd query bank balances $ALIGNED_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
alignedlayerd tx bank send $ALIGNED_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000stake
```

### Participating in Proposal Voting
```
alignedlayerd tx gov vote 1 yes --from $ALIGNED_WALLET --chain-id=$ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
alignedlayerd tx staking delegate $ALIGNED_VALOPER_ADDRESS 100000000stake --from=$ALIGNED_WALLET --chain-id=$ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
alignedlayerd tx staking unbond $(alignedlayerd keys show $ALIGNED_WALLET --bech val -a) 1000000stake --from $ALIGNED_WALLET --chain-id indigo-1 --fees 3000stake -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
alignedlayerd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000stake --from=$ALIGNED_WALLET --chain-id=$ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
alignedlayerd tx distribution withdraw-all-rewards --from=$ALIGNED_WALLET --chain-id=$ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
alignedlayerd tx distribution withdraw-rewards $ALIGNED_VALOPER_ADDRESS --from=$ALIGNED_WALLET --commission --chain-id=$ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
alignedlayerd status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
alignedlayerd tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$ALIGNED_CHAIN_ID \
--from=$ALIGNED_WALLET \
--gas-prices 0.00001stake \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
alignedlayerd tx staking edit-validator --commission-rate "0.02" --moniker=$ALIGNED_NODENAME --from $ALIGNED_WALLET --chain-id $ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$ALIGNED_NODENAME` and `$ALIGNED_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
alignedlayerd tx staking edit-validator \
--moniker=$ALIGNED_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ALIGNED_CHAIN_ID \
--from=$ALIGNED_WALLET
```

### Validator Details
```
alignedlayerd q staking validator $(alignedlayerd keys show $ALIGNED_WALLET --bech val -a)
```

### Jailing info
```
alignedlayerd q slashing signing-info $(alignedlayerd tendermint show-validator)
```

### Slashing parameters
```
alignedlayerd q slashing params
```

### Recovering Validator from Jail
```
alignedlayerd tx slashing unjail --from $ALIGNED_WALLET --chain-id $ALIGNED_CHAIN_ID --gas-prices 0.00001stake --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
alignedlayerd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(alignedlayerd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(alignedlayerd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
alignedlayerd q slashing signing-info $(alignedlayerd tendermint show-validator)
```
