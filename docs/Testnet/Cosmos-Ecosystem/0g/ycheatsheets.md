---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, modular, chain, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu evmosd -o cat
```

### Starting Node
```
systemctl start evmosd
```

### Stopping the Node
```
systemctl stop evmosd
```

### Restarting the Node
```
systemctl restart evmosd
```

### Node Sync Status
```
evmosd status 2>&1 | jq .SyncInfo
```

### Node Information
```
evmosd status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
evmosd tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(evmosd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.evmosd/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
evmosd keys list
```

### Seeing Wallet Address
```
evmosd keys show $OG_WALLET --bech val -a
```

### Importing Wallet
```
evmosd keys add $OG_WALLET --recover
```

### Deleting Your Wallet
```
evmosd keys delete $OG_WALLET
```

### Checking Wallet Balance
```
evmosd query bank balances $OG_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
evmosd tx bank send $OG_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aevmos
```

### Participating in Proposal Voting
```
evmosd tx gov vote 1 yes --from $OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
evmosd tx staking delegate $OG_VALOPER_ADDRESS 100000000aevmos --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
evmosd tx staking unbond $(evmosd keys show $OG_WALLET --bech val -a) 1000000aevmos --from $OG_WALLET --chain-id indigo-1 --fees 3000aevmos -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
evmosd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aevmos --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
evmosd tx distribution withdraw-all-rewards --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
evmosd tx distribution withdraw-rewards $OG_VALOPER_ADDRESS --from=$OG_WALLET --commission --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
evmosd status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
evmosd tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$OG_CHAIN_ID \
--from=$OG_WALLET \
--gas-prices 0.00001aevmos \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
evmosd tx staking edit-validator --commission-rate "0.02" --moniker=$OG_NODENAME --from $OG_WALLET --chain-id $OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$OG_NODENAME` and `$OG_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
evmosd tx staking edit-validator \
--moniker=$OG_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$OG_CHAIN_ID \
--from=$OG_WALLET
```

### Validator Details
```
evmosd q staking validator $(evmosd keys show $WALLET --bech val -a)
```

### Jailing info
```
evmosd q slashing signing-info $(evmosd tendermint show-validator)
```

### Slashing parameters
```
evmosd q slashing params
```

### Recovering Validator from Jail
```
evmosd tx slashing unjail --from $OG_WALLET --chain-id $OG_CHAIN_ID --gas-prices 0.00001aevmos --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
evmosd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(evmosd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(evmosd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
evmosd q slashing signing-info $(evmosd tendermint show-validator)
```
