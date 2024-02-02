---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Empower-Service-Cover.jpg
keywords: [empower, chain, empowerchain, network, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu empowerd -o cat
```

### Starting Node
```
systemctl start empowerd
```

### Stopping the Node
```
systemctl stop empowerd
```

### Restarting the Node
```
systemctl restart empowerd
```

### Node Sync Status
```
empowerd status 2>&1 | jq .SyncInfo
```

### Node Information
```
empowerd status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
empowerd tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(empowerd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.empowerchain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
empowerd keys list
```

### Seeing Wallet Address
```
empowerd keys show $ACRE_WALLET --bech val -a
```

### Importing Wallet
```
empowerd keys add $ACRE_WALLET --recover
```

### Deleting Your Wallet
```
empowerd keys delete $ACRE_WALLET
```

### Checking Wallet Balance
```
empowerd query bank balances $ACRE_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
empowerd tx bank send $ACRE_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000umpwr
```

### Participating in Proposal Voting
```
empowerd tx gov vote 1 yes --from $ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
empowerd tx staking delegate $ACRE_VALOPER_ADDRESS 100000000umpwr --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
empowerd tx staking unbond $(empowerd keys show $WALLET --bech val -a) 1000000umpwr --from $WALLET --chain-id indigo-1 --fees 3000umpwr -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
empowerd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000umpwr --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
empowerd tx distribution withdraw-all-rewards --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
empowerd tx distribution withdraw-rewards $ACRE_VALOPER_ADDRESS --from=$ACRE_WALLET --commission --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
empowerd status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
empowerd tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$ACRE_CHAIN_ID\
--from=$ACRE_WALLET\
--gas-prices 0.00001umpwr\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
empowerd tx staking edit-validator --commission-rate "0.02" --moniker=$ACRE_NODENAME --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$ACRE_NODENAME` and `$ACRE_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
empowerd tx staking edit-validator \
--moniker=$ACRE_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ACRE_CHAIN_ID\
--from=$ACRE_WALLET
```

### Validator Details
```
empowerd q staking validator $(empowerd keys show $WALLET --bech val -a)
```

### Jailing info
```
empowerd q slashing signing-info $(empowerd tendermint show-validator)
```

### Slashing parameters
```
empowerd q slashing params
```

### Recovering Validator from Jail
```
empowerd tx slashing unjail --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
empowerd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(empowerd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(empowerd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
empowerd q slashing signing-info $(empowerd tendermint show-validator)
```
