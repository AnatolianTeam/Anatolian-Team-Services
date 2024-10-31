---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Warden-Service-Cover.jpg
keywords: [warden, protocol, chain, kurulum, snapshot, statesync, güncelleme]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu wardend -o cat
```

### Starting Node
```
systemctl start wardend
```

### Stopping the Node
```
systemctl stop wardend
```

### Restarting the Node
```
systemctl restart wardend
```

### Node Sync Status
```
wardend status 2>&1 | jq .SyncInfo
```

### Node Information
```
wardend status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
wardend tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(wardend tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.warden/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
wardend keys list
```

### Seeing Wallet Address
```
wardend keys show $WARDEN_WALLET --bech val -a
```

### Importing Wallet
```
wardend keys add $WARDEN_WALLET --recover
```

### Deleting Your Wallet
```
wardend keys delete $WARDEN_WALLET
```

### Checking Wallet Balance
```
wardend query bank balances $WARDEN_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
wardend tx bank send $WARDEN_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000award
```

### Participating in Proposal Voting
```
wardend tx gov vote 1 yes --from $WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
wardend tx staking delegate $WARDEN_VALOPER_ADDRESS 100000000award --from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
wardend tx staking unbond $(wardend keys show $WARDEN_WALLET --bech val -a) 1000000award --from $WARDEN_WALLET --chain-id indigo-1 --fees 3000award -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
wardend tx staking redelegate srcValidatorAddress destValidatorAddress 100000000award --from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
wardend tx distribution withdraw-all-rewards --from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
wardend tx distribution withdraw-rewards $WARDEN_VALOPER_ADDRESS --from=$WARDEN_WALLET --commission --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
wardend status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
wardend tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$WARDEN_CHAIN_ID \
--from=$WARDEN_WALLET \
--gas-prices 0.00001award \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
wardend tx staking edit-validator --commission-rate "0.02" --moniker=$WARDEN_NODENAME --from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$WARDEN_NODENAME` and `$WARDEN_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
wardend tx staking edit-validator \
--moniker=$WARDEN_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$WARDEN_CHAIN_ID \
--from=$WARDEN_WALLET
```

### Validator Details
```
wardend q staking validator $(wardend keys show $WARDEN_WALLET --bech val -a)
```

### Jailing info
```
wardend q slashing signing-info $(wardend tendermint show-validator)
```

### Slashing parameters
```
wardend q slashing params
```

### Recovering Validator from Jail
```
wardend tx slashing unjail --from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --gas-prices 0.00001award --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
wardend q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(wardend q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(wardend status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
wardend q slashing signing-info $(wardend tendermint show-validator)
```
