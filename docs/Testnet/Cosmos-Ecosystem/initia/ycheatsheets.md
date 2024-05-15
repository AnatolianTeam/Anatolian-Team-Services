---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, chain, kurulum, snapshot, statesync, güncelleme]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu initiad -o cat
```

### Starting Node
```
systemctl start initiad
```

### Stopping the Node
```
systemctl stop initiad
```

### Restarting the Node
```
systemctl restart initiad
```

### Node Sync Status
```
initiad status 2>&1 | jq .SyncInfo
```

### Node Information
```
initiad status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
initiad tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(initiad tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.initia/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
initiad keys list
```

### Seeing Wallet Address
```
initiad keys show $INITIA_WALLET --bech val -a
```

### Importing Wallet
```
initiad keys add $INITIA_WALLET --recover
```

### Deleting Your Wallet
```
initiad keys delete $INITIA_WALLET
```

### Checking Wallet Balance
```
initiad query bank balances $INITIA_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
initiad tx bank send $INITIA_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uusdc
```

### Participating in Proposal Voting
```
initiad tx gov vote 1 yes --from $INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
initiad tx mstaking delegate $INITIA_VALOPER_ADDRESS 100000000uusdc --from=$INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
initiad tx mstaking unbond $(initiad keys show $INITIA_WALLET --bech val -a) 1000000uusdc --from $INITIA_WALLET --chain-id indigo-1 --fees 3000uusdc -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
initiad tx mstaking redelegate srcValidatorAddress destValidatorAddress 100000000uusdc --from=$INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
initiad tx distribution withdraw-all-rewards --from=$INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
initiad tx distribution withdraw-rewards $INITIA_VALOPER_ADDRESS --from=$INITIA_WALLET --commission --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
initiad status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
initiad tx mstaking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$INITIA_CHAIN_ID \
--from=$INITIA_WALLET \
--gas-prices 0.00001uusdc \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
initiad tx mstaking edit-validator --commission-rate "0.02" --moniker=$INITIA_NODENAME --from $INITIA_WALLET --chain-id $INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$INITIA_NODENAME` and `$INITIA_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
initiad tx mstaking edit-validator \
--moniker=$INITIA_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$INITIA_CHAIN_ID \
--from=$INITIA_WALLET
```

### Validator Details
```
initiad q mstaking validator $(initiad keys show $INITIA_WALLET --bech val -a)
```

### Jailing info
```
initiad q slashing signing-info $(initiad tendermint show-validator)
```

### Slashing parameters
```
initiad q slashing params
```

### Recovering Validator from Jail
```
initiad tx slashing unjail --from $INITIA_WALLET --chain-id $INITIA_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
initiad q mstaking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(initiad q mstaking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(initiad status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
initiad q slashing signing-info $(initiad tendermint show-validator)
```
