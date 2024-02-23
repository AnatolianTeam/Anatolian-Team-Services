---
title: ⤴️ Cheatsheets
description: Useful commands.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/img/Pryzm-Service-Cover.jpg
keywords: [pryzm, zone, installation, snapshot, statesync, update]
---

# Cheatsheets
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu pryzmd -o cat
```

### Starting Node
```
systemctl start pryzmd
```

### Stopping the Node
```
systemctl stop pryzmd
```

### Restarting the Node
```
systemctl restart pryzmd
```

### Node Sync Status
```
pryzmd status 2>&1 | jq .SyncInfo
```

### Node Information
```
pryzmd status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
pryzmd tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(pryzmd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.pryzm/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
pryzmd keys list
```

### Seeing Wallet Address
```
pryzmd keys show $PRYZM_WALLET --bech val -a
```

### Importing Wallet
```
pryzmd keys add $PRYZM_WALLET --recover
```

### Deleting Your Wallet
```
pryzmd keys delete $PRYZM_WALLET
```

### Checking Wallet Balance
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
pryzmd tx bank send $PRYZM_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000upryzm
```

### Participating in Proposal Voting
```
pryzmd tx gov vote 1 yes --from $PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
pryzmd tx staking delegate $PRYZM_VALOPER_ADDRESS 100000000upryzm --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
pryzmd tx staking unbond $(pryzmd keys show $WALLET --bech val -a) 1000000upryzm --from $PRYZM_WALLET --chain-id indigo-1 --fees 3000upryzm -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
pryzmd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000upryzm --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
pryzmd tx distribution withdraw-all-rewards --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
pryzmd tx distribution withdraw-rewards $PRYZM_VALOPER_ADDRESS --from=$PRYZM_WALLET --commission --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
pryzmd status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
pryzmd tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$PRYZM_CHAIN_ID\
--from=$PRYZM_WALLET\
--gas-prices 0.00001upryzm\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
pryzmd tx staking edit-validator --commission-rate "0.02" --moniker=$PRYZM_NODENAME --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$PRYZM_NODENAME` and `$PRYZM_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
pryzmd tx staking edit-validator \
--moniker=$PRYZM_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$PRYZM_CHAIN_ID\
--from=$PRYZM_WALLET
```

### Validator Details
```
pryzmd q staking validator $(pryzmd keys show $WALLET --bech val -a)
```

### Jailing info
```
pryzmd q slashing signing-info $(pryzmd tendermint show-validator)
```

### Slashing parameters
```
pryzmd q slashing params
```

### Recovering Validator from Jail
```
pryzmd tx slashing unjail --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
pryzmd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(pryzmd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(pryzmd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
pryzmd q slashing signing-info $(pryzmd tendermint show-validator)
```
