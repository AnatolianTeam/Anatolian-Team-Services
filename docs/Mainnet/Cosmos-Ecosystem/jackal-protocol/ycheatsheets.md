---
title: ⤴️ Cheatsheets
description: Useful commands.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, installation, snapshot, statesync, update]
slug: cheatsheets
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu canined -o cat
```

### Starting Node
```
systemctl start canined
```

### Stopping the Node
```
systemctl stop canined
```

### Restarting the Node
```
systemctl restart canined
```

### Node Sync Status
```
canined status 2>&1 | jq .SyncInfo
```

### Node Information
```
canined status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
canined tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(canined tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.canine/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
canined keys list
```

### Seeing Wallet Address
```
canined keys show $JACKAL_WALLET --bech val -a
```

### Importing Wallet
```
canined keys add $JACKAL_WALLET --recover
```

### Deleting Your Wallet
```
canined keys delete $JACKAL_WALLET
```

### Checking Wallet Balance
```
canined query bank balances $JACKAL_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
canined tx bank send $JACKAL_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ujkl
```

### Participating in Proposal Voting
```
canined tx gov vote 1 yes --from $JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
canined tx staking delegate $JACKAL_VALOPER_ADDRESS 100000000ujkl --from=$JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
canined tx staking unbond $(canined keys show $JACKAL_WALLET --bech val -a) 1000000ujkl --from $JACKAL_WALLET --chain-id indigo-1 --fees 3000ujkl -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
canined tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ujkl --from=$JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
canined tx distribution withdraw-all-rewards --from=$JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
canined tx distribution withdraw-rewards $JACKAL_VALOPER_ADDRESS --from=$JACKAL_WALLET --commission --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
canined status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
canined tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$JACKAL_CHAIN_ID \
--from=$JACKAL_WALLET \
--gas-prices 0.00001ujkl \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
canined tx staking edit-validator --commission-rate "0.02" --moniker=$JACKAL_NODENAME --from $JACKAL_WALLET --chain-id $JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$JACKAL_NODENAME` and `$JACKAL_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
canined tx staking edit-validator \
--moniker=$JACKAL_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$JACKAL_CHAIN_ID \
--from=$JACKAL_WALLET
```

### Validator Details
```
canined q staking validator $(canined keys show $WALLET --bech val -a)
```

### Jailing info
```
canined q slashing signing-info $(canined tendermint show-validator)
```

### Slashing parameters
```
canined q slashing params
```

### Recovering Validator from Jail
```
canined tx slashing unjail --from $JACKAL_WALLET --chain-id $JACKAL_CHAIN_ID --gas-prices 0.00001ujkl --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
canined q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(canined q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(canined status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
canined q slashing signing-info $(canined tendermint show-validator)
```
