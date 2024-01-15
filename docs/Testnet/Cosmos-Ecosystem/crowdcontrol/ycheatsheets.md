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
journalctl -fu Cardchaind -o cat
```

### Starting Node
```
systemctl start Cardchaind
```

### Stopping the Node
```
systemctl stop Cardchaind
```

### Restarting the Node
```
systemctl restart Cardchaind
```

### Node Sync Status
```
Cardchaind status 2>&1 | jq .SyncInfo
```

### Node Information
```
Cardchaind status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
Cardchaind tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(Cardchaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.bablond/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
Cardchaind keys list
```

### Seeing Wallet Address
```
Cardchaind keys show $CROWD_WALLET --bech val -a
```

### Importing Wallet
```
Cardchaind keys add $CROWD_WALLET --recover
```

### Deleting Your Wallet
```
Cardchaind keys delete $CROWD_WALLET
```

### Checking Wallet Balance
```
Cardchaind query bank balances $CROWD_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
Cardchaind tx bank send $CROWD_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ubbn
```

### Participating in Proposal Voting
```
Cardchaind tx gov vote 1 yes --from $CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
Cardchaind tx staking delegate $CROWD_VALOPER_ADDRESS 100000000ubbn --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
Cardchaind tx staking unbond $(Cardchaind keys show $WALLET --bech val -a) 1000000ubbn --from $WALLET --chain-id indigo-1 --fees 3000ubbn -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
Cardchaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ubbn --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
Cardchaind tx distribution withdraw-all-rewards --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
Cardchaind tx distribution withdraw-rewards $CROWD_VALOPER_ADDRESS --from=$CROWD_WALLET --commission --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
Cardchaind status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
Cardchaind tx staking edit-validator \
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
Cardchaind tx staking edit-validator --commission-rate "0.02" --moniker=$CROWD_NODENAME --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$CROWD_NODENAME` and `$CROWD_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
Cardchaind tx staking edit-validator \
--moniker=$CROWD_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET
```

### Validator Details
```
Cardchaind q staking validator $(Cardchaind keys show $WALLET --bech val -a)
```

### Jailing info
```
Cardchaind q slashing signing-info $(Cardchaind tendermint show-validator)
```

### Slashing parameters
```
Cardchaind q slashing params
```

### Recovering Validator from Jail
```
Cardchaind tx slashing unjail --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
Cardchaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(Cardchaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(Cardchaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
Cardchaind q slashing signing-info $(Cardchaind tendermint show-validator)
```
