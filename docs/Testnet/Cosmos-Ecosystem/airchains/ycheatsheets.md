---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Airchains-Service-Cover.jpg
keywords: [initia, oracle, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu junctiond -o cat
```

### Starting Node
```
systemctl start junctiond
```

### Stopping the Node
```
systemctl stop junctiond
```

### Restarting the Node
```
systemctl restart junctiond
```

### Node Sync Status
```
junctiond status 2>&1 | jq .SyncInfo
```

### Node Information
```
junctiond status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
junctiond tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(junctiond tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.junction/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
junctiond keys list
```

### Seeing Wallet Address
```
junctiond keys show $AIRCHAINS_WALLET --bech val -a
```

### Importing Wallet
```
junctiond keys add $AIRCHAINS_WALLET --recover
```

### Deleting Your Wallet
```
junctiond keys delete $AIRCHAINS_WALLET
```

### Checking Wallet Balance
```
junctiond query bank balances $AIRCHAINS_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
junctiond tx bank send $AIRCHAINS_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uusdc
```

### Participating in Proposal Voting
```
junctiond tx gov vote 1 yes --from $AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
junctiond tx mstaking delegate $AIRCHAINS_VALOPER_ADDRESS 100000000uusdc --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
junctiond tx mstaking unbond $(junctiond keys show $AIRCHAINS_WALLET --bech val -a) 1000000uusdc --from $AIRCHAINS_WALLET --chain-id indigo-1 --fees 3000uusdc -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
junctiond tx mstaking redelegate srcValidatorAddress destValidatorAddress 100000000uusdc --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
junctiond tx distribution withdraw-all-rewards --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
junctiond tx distribution withdraw-rewards $AIRCHAINS_VALOPER_ADDRESS --from=$AIRCHAINS_WALLET --commission --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
junctiond status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
junctiond tx mstaking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$AIRCHAINS_CHAIN_ID \
--from=$AIRCHAINS_WALLET \
--node=https://rpc-t-initia.anatolianteam.com:443 \
--gas-prices=11uinit \
--gas-adjustment=1.5 \
--gas=auto \
--yes
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
junctiond tx mstaking edit-validator --commission-rate "0.02" --moniker=$AIRCHAINS_NODENAME --from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$AIRCHAINS_NODENAME` and `$AIRCHAINS_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
junctiond tx mstaking edit-validator \
--moniker=$AIRCHAINS_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$AIRCHAINS_CHAIN_ID \
--from=$AIRCHAINS_WALLET
--node=https://rpc-t-initia.anatolianteam.com:443 \
--gas-prices=11uinit \
--gas-adjustment=1.5 \
--gas=auto \
--yes
```

### Validator Details
```
junctiond q mstaking validator $(junctiond keys show $AIRCHAINS_WALLET --bech val -a)
```

### Jailing info
```
junctiond q slashing signing-info $(junctiond tendermint show-validator)
```

### Slashing parameters
```
junctiond q slashing params
```

### Recovering Validator from Jail
```
junctiond tx slashing unjail --from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
junctiond q mstaking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(junctiond q mstaking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(junctiond status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
junctiond q slashing signing-info $(junctiond tendermint show-validator)
```
