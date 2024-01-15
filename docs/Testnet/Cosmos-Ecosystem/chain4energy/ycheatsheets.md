---
title: ⤴️ Cheatsheets
description: Node installation guide.
---

# Cheatsheets
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu c4ed -o cat
```

### Starting Node
```
systemctl start c4ed
```

### Stopping the Node
```
systemctl stop c4ed
```

### Restarting the Node
```
systemctl restart c4ed
```

### Node Sync Status
```
c4ed status 2>&1 | jq .SyncInfo
```

### Node Information
```
c4ed status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
c4ed tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(c4ed tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.bablond/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
c4ed keys list
```

### Seeing Wallet Address
```
c4ed keys show $CROWD_WALLET --bech val -a
```

### Importing Wallet
```
c4ed keys add $CROWD_WALLET --recover
```

### Deleting Your Wallet
```
c4ed keys delete $CROWD_WALLET
```

### Checking Wallet Balance
```
c4ed query bank balances $CROWD_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
c4ed tx bank send $CROWD_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ubbn
```

### Participating in Proposal Voting
```
c4ed tx gov vote 1 yes --from $CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
c4ed tx staking delegate $CROWD_VALOPER_ADDRESS 100000000ubbn --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
c4ed tx staking unbond $(c4ed keys show $WALLET --bech val -a) 1000000ubbn --from $WALLET --chain-id indigo-1 --fees 3000ubbn -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
c4ed tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ubbn --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
c4ed tx distribution withdraw-all-rewards --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
c4ed tx distribution withdraw-rewards $CROWD_VALOPER_ADDRESS --from=$CROWD_WALLET --commission --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
c4ed status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
c4ed tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET\
--gas-prices 0.00001ubbn\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
c4ed tx staking edit-validator --commission-rate "0.02" --moniker=$CROWD_NODENAME --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$CROWD_NODENAME` and `$CROWD_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
c4ed tx staking edit-validator \
--moniker=$CROWD_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET
```

### Validator Details
```
c4ed q staking validator $(c4ed keys show $WALLET --bech val -a)
```

### Jailing info
```
c4ed q slashing signing-info $(c4ed tendermint show-validator)
```

### Slashing parameters
```
c4ed q slashing params
```

### Recovering Validator from Jail
```
c4ed tx slashing unjail --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
c4ed q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(c4ed q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(c4ed status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
c4ed q slashing signing-info $(c4ed tendermint show-validator)
```
