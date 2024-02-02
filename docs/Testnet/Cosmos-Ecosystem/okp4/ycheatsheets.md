---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/OKP4-Service-Cover.jpg
keywords: [okp4, open knowledge protocol, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu okp4d -o cat
```

### Starting Node
```
systemctl start okp4d
```

### Stopping the Node
```
systemctl stop okp4d
```

### Restarting the Node
```
systemctl restart okp4d
```

### Node Sync Status
```
okp4d status 2>&1 | jq .SyncInfo
```

### Node Information
```
okp4d status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
okp4d tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(okp4d tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.okp4d/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
okp4d keys list
```

### Seeing Wallet Address
```
okp4d keys show $CROWD_WALLET --bech val -a
```

### Importing Wallet
```
okp4d keys add $CROWD_WALLET --recover
```

### Deleting Your Wallet
```
okp4d keys delete $CROWD_WALLET
```

### Checking Wallet Balance
```
okp4d query bank balances $CROWD_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
okp4d tx bank send $CROWD_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uknow
```

### Participating in Proposal Voting
```
okp4d tx gov vote 1 yes --from $CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
okp4d tx staking delegate $CROWD_VALOPER_ADDRESS 100000000uknow --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
okp4d tx staking unbond $(okp4d keys show $WALLET --bech val -a) 1000000uknow --from $WALLET --chain-id indigo-1 --fees 3000uknow -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
okp4d tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uknow --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
okp4d tx distribution withdraw-all-rewards --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
okp4d tx distribution withdraw-rewards $CROWD_VALOPER_ADDRESS --from=$CROWD_WALLET --commission --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
okp4d status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
okp4d tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET\
--gas-prices 0.00001uknow\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
okp4d tx staking edit-validator --commission-rate "0.02" --moniker=$CROWD_NODENAME --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$CROWD_NODENAME` and `$CROWD_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
okp4d tx staking edit-validator \
--moniker=$CROWD_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET
```

### Validator Details
```
okp4d q staking validator $(okp4d keys show $WALLET --bech val -a)
```

### Jailing info
```
okp4d q slashing signing-info $(okp4d tendermint show-validator)
```

### Slashing parameters
```
okp4d q slashing params
```

### Recovering Validator from Jail
```
okp4d tx slashing unjail --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001uknow --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
okp4d q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(okp4d q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(okp4d status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
okp4d q slashing signing-info $(okp4d tendermint show-validator)
```
