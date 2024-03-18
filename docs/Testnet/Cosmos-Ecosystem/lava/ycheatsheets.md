---
title: ⤴️ Cheatsheets
description: Useful commands.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/lava/img/Lava-Service-Cover.jpg
keywords: [lava, installation, snapshot, statesync, update]
slug: cheatsheets
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu lavad -o cat
```

### Starting Node
```
systemctl start lavad
```

### Stopping the Node
```
systemctl stop lavad
```

### Restarting the Node
```
systemctl restart lavad
```

### Node Sync Status
```
lavad status 2>&1 | jq .SyncInfo
```

### Node Information
```
lavad status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
lavad tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(lavad tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.lava/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
lavad keys list
```

### Seeing Wallet Address
```
lavad keys show $LAVA_WALLET --bech val -a
```

### Importing Wallet
```
lavad keys add $LAVA_WALLET --recover
```

### Deleting Your Wallet
```
lavad keys delete $LAVA_WALLET
```

### Checking Wallet Balance
```
lavad query bank balances $LAVA_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
lavad tx bank send $LAVA_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ulava
```

### Participating in Proposal Voting
```
lavad tx gov vote 1 yes --from $LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
lavad tx staking delegate $LAVA_VALOPER_ADDRESS 100000000ulava --from=$LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
lavad tx staking unbond $(lavad keys show $LAVA_WALLET --bech val -a) 1000000ulava --from $LAVA_WALLET --chain-id indigo-1 --fees 3000ulava -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
lavad tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ulava --from=$LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
lavad tx distribution withdraw-all-rewards --from=$LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
lavad tx distribution withdraw-rewards $LAVA_VALOPER_ADDRESS --from=$LAVA_WALLET --commission --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
lavad status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
lavad tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$LAVA_CHAIN_ID \
--from=$LAVA_WALLET \
--gas-prices 0.00001ulava \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
lavad tx staking edit-validator --commission-rate "0.02" --moniker=$LAVA_NODENAME --from $LAVA_WALLET --chain-id $LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$LAVA_NODENAME` and `$LAVA_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
lavad tx staking edit-validator \
--moniker=$LAVA_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$LAVA_CHAIN_ID \
--from=$LAVA_WALLET
```

### Validator Details
```
lavad q staking validator $(lavad keys show $WALLET --bech val -a)
```

### Jailing info
```
lavad q slashing signing-info $(lavad tendermint show-validator)
```

### Slashing parameters
```
lavad q slashing params
```

### Recovering Validator from Jail
```
lavad tx slashing unjail --from $LAVA_WALLET --chain-id $LAVA_CHAIN_ID --gas-prices 0.00001ulava --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
lavad q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(lavad q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(lavad status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
lavad q slashing signing-info $(lavad tendermint show-validator)
```
