---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Arable-Service-Cover.jpg
keywords: [arable, protocol, acre, network, installation, snapshot, statesync, update]
slug: cheatsheets
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu acred -o cat
```

### Starting Node
```
systemctl start acred
```

### Stopping the Node
```
systemctl stop acred
```

### Restarting the Node
```
systemctl restart acred
```

### Node Sync Status
```
acred status 2>&1 | jq .SyncInfo
```

### Node Information
```
acred status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
acred tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(acred tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.acred/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
acred keys list
```

### Seeing Wallet Address
```
acred keys show $ACRE_WALLET --bech val -a
```

### Importing Wallet
```
acred keys add $ACRE_WALLET --recover
```

### Deleting Your Wallet
```
acred keys delete $ACRE_WALLET
```

### Checking Wallet Balance
```
acred query bank balances $ACRE_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
acred tx bank send $ACRE_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aacre
```

### Participating in Proposal Voting
```
acred tx gov vote 1 yes --from $ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
acred tx staking delegate $ACRE_VALOPER_ADDRESS 100000000aacre --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
acred tx staking unbond $(acred keys show $ACRE_WALLET --bech val -a) 1000000aacre --from $ACRE_WALLET --chain-id indigo-1 --fees 3000aacre -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
acred tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aacre --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
acred tx distribution withdraw-all-rewards --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
acred tx distribution withdraw-rewards $ACRE_VALOPER_ADDRESS --from=$ACRE_WALLET --commission --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
acred status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
acred tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$ACRE_CHAIN_ID \
--from=$ACRE_WALLET \
--gas-prices 0.00001aacre \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
acred tx staking edit-validator --commission-rate "0.02" --moniker=$ACRE_NODENAME --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$ACRE_NODENAME` and `$ACRE_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
acred tx staking edit-validator \
--moniker=$ACRE_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ACRE_CHAIN_ID \
--from=$ACRE_WALLET
```

### Validator Details
```
acred q staking validator $(acred keys show $ACRE_WALLET --bech val -a)
```

### Jailing info
```
acred q slashing signing-info $(acred tendermint show-validator)
```

### Slashing parameters
```
acred q slashing params
```

### Recovering Validator from Jail
```
acred tx slashing unjail --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001aacre --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
acred q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(acred q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(acred status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
acred q slashing signing-info $(acred tendermint show-validator)
```
