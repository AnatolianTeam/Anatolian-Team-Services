---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Entangle-Service-Cover.jpg
keywords: [entangle, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu entangled -o cat
```

### Starting Node
```
systemctl start entangled
```

### Stopping the Node
```
systemctl stop entangled
```

### Restarting the Node
```
systemctl restart entangled
```

### Node Sync Status
```
entangled status 2>&1 | jq .SyncInfo
```

### Node Information
```
entangled status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
entangled tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(entangled tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.entangled/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
entangled keys list
```

### Seeing Wallet Address
```
entangled keys show $ENT_WALLET --bech val -a
```

### Importing Wallet
```
entangled keys add $ENT_WALLET --recover
```

### Deleting Your Wallet
```
entangled keys delete $ENT_WALLET
```

### Checking Wallet Balance
```
entangled query bank balances $ENT_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
entangled tx bank send $ENT_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aNGL
```

### Participating in Proposal Voting
```
entangled tx gov vote 1 yes --from $ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
entangled tx staking delegate $ENT_VALOPER_ADDRESS 100000000aNGL --from=$ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
entangled tx staking unbond $(entangled keys show $WALLET --bech val -a) 1000000aNGL --from $WALLET --chain-id indigo-1 --fees 3000aNGL -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
entangled tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aNGL --from=$ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
entangled tx distribution withdraw-all-rewards --from=$ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
entangled tx distribution withdraw-rewards $ENT_VALOPER_ADDRESS --from=$ENT_WALLET --commission --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
entangled status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
entangled tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$ENT_CHAIN_ID\
--from=$ENT_WALLET\
--gas-prices 0.00001aNGL\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
entangled tx staking edit-validator --commission-rate "0.02" --moniker=$ENT_NODENAME --from $ENT_WALLET --chain-id $ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$ENT_NODENAME` and `$ENT_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
entangled tx staking edit-validator \
--moniker=$ENT_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ENT_CHAIN_ID\
--from=$ENT_WALLET
```

### Validator Details
```
entangled q staking validator $(entangled keys show $WALLET --bech val -a)
```

### Jailing info
```
entangled q slashing signing-info $(entangled tendermint show-validator)
```

### Slashing parameters
```
entangled q slashing params
```

### Recovering Validator from Jail
```
entangled tx slashing unjail --from $ENT_WALLET --chain-id $ENT_CHAIN_ID --gas-prices 0.00001aNGL --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
entangled q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(entangled q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(entangled status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
entangled q slashing signing-info $(entangled tendermint show-validator)
```
