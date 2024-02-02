---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Babylon-Service-Cover.jpg
keywords: [babylon, installation, snapshot, statesync, update]
---

# Cheatsheets
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu babylond -o cat
```

### Starting Node
```
systemctl start babylond
```

### Stopping the Node
```
systemctl stop babylond
```

### Restarting the Node
```
systemctl restart babylond
```

### Node Sync Status
```
babylond status 2>&1 | jq .SyncInfo
```

### Node Information
```
babylond status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
babylond tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(babylond tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.babylond/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
babylond keys list
```

### Seeing Wallet Address
```
babylond keys show $BBN_WALLET --bech val -a
```

### Importing Wallet
```
babylond keys add $BBN_WALLET --recover
```

### Deleting Your Wallet
```
babylond keys delete $BBN_WALLET
```

### Checking Wallet Balance
```
babylond query bank balances $BBN_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
babylond tx bank send $BBN_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ubbn
```

### Participating in Proposal Voting
```
babylond tx gov vote 1 yes --from $BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
babylond tx staking delegate $BBN_VALOPER_ADDRESS 100000000ubbn --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
babylond tx staking unbond $(babylond keys show $WALLET --bech val -a) 1000000ubbn --from $WALLET --chain-id indigo-1 --fees 3000ubbn -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
babylond tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ubbn --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
babylond tx distribution withdraw-all-rewards --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
babylond tx distribution withdraw-rewards $BBN_VALOPER_ADDRESS --from=$BBN_WALLET --commission --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
babylond status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
babylond tx staking edit-validator \
--moniker=NEW-NODE-NAME\
--chain-id=$BBN_CHAIN_ID\
--from=$BBN_WALLET\
--gas-prices 0.00001ubbn\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
babylond tx staking edit-validator --commission-rate "0.02" --moniker=$BBN_NODENAME --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$BBN_NODENAME` and `$BBN_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
babylond tx staking edit-validator \
--moniker=$BBN_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$BBN_CHAIN_ID\
--from=$BBN_WALLET
```

### Validator Details
```
babylond q staking validator $(babylond keys show $WALLET --bech val -a)
```

### Jailing info
```
babylond q slashing signing-info $(babylond tendermint show-validator)
```

### Slashing parameters
```
babylond q slashing params
```

### Recovering Validator from Jail
```
babylond tx slashing unjail --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
babylond q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(babylond q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(babylond status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
babylond q slashing signing-info $(babylond tendermint show-validator)
```
