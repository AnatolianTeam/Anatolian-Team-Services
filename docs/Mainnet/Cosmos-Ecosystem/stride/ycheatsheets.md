---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Stride-Service-Cover.jpg
keywords: [stride, zone, network, installation, snapshot, statesync, update]
slug: cheatsheets
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu strided -o cat
```

### Starting Node
```
systemctl start strided
```

### Stopping the Node
```
systemctl stop strided
```

### Restarting the Node
```
systemctl restart strided
```

### Node Sync Status
```
strided status 2>&1 | jq .SyncInfo
```

### Node Information
```
strided status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
strided tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(strided tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.stride/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
strided keys list
```

### Seeing Wallet Address
```
strided keys show $STRD_WALLET --bech val -a
```

### Importing Wallet
```
strided keys add $STRD_WALLET --recover
```

### Deleting Your Wallet
```
strided keys delete $STRD_WALLET
```

### Checking Wallet Balance
```
strided query bank balances $STRD_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
strided tx bank send $STRD_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ustrd
```

### Participating in Proposal Voting
```
strided tx gov vote 1 yes --from $STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
strided tx staking delegate $STRD_VALOPER_ADDRESS 100000000ustrd --from=$STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
strided tx staking unbond $(strided keys show $STRD_WALLET --bech val -a) 1000000ustrd --from $STRD_WALLET --chain-id indigo-1 --fees 3000ustrd -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
strided tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ustrd --from=$STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
strided tx distribution withdraw-all-rewards --from=$STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
strided tx distribution withdraw-rewards $STRD_VALOPER_ADDRESS --from=$STRD_WALLET --commission --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
strided status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
strided tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$STRD_CHAIN_ID \
--from=$STRD_WALLET \
--gas-prices 0.00001ustrd \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
strided tx staking edit-validator --commission-rate "0.02" --moniker=$STRD_NODENAME --from $STRD_WALLET --chain-id $STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$STRD_NODENAME` and `$STRD_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
strided tx staking edit-validator \
--moniker=$STRD_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$STRD_CHAIN_ID \
--from=$STRD_WALLET
```

### Validator Details
```
strided q staking validator $(strided keys show $WALLET --bech val -a)
```

### Jailing info
```
strided q slashing signing-info $(strided tendermint show-validator)
```

### Slashing parameters
```
strided q slashing params
```

### Recovering Validator from Jail
```
strided tx slashing unjail --from $STRD_WALLET --chain-id $STRD_CHAIN_ID --gas-prices 0.00001ustrd --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
strided q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(strided q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(strided status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
strided q slashing signing-info $(strided tendermint show-validator)
```
