---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Uptick-Service-Cover.jpg
keywords: [uptick, network, NFT, web3, installation, snapshot, statesync, update]
slug: cheatsheets
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu uptickd -o cat
```

### Starting Node
```
systemctl start uptickd
```

### Stopping the Node
```
systemctl stop uptickd
```

### Restarting the Node
```
systemctl restart uptickd
```

### Node Sync Status
```
uptickd status 2>&1 | jq .SyncInfo
```

### Node Information
```
uptickd status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
uptickd tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(uptickd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.uptickd/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
uptickd keys list
```

### Seeing Wallet Address
```
uptickd keys show $UPTICK_WALLET --bech val -a
```

### Importing Wallet
```
uptickd keys add $UPTICK_WALLET --recover
```

### Deleting Your Wallet
```
uptickd keys delete $UPTICK_WALLET
```

### Checking Wallet Balance
```
uptickd query bank balances $UPTICK_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
uptickd tx bank send $UPTICK_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000auptick
```

### Participating in Proposal Voting
```
uptickd tx gov vote 1 yes --from $UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
uptickd tx staking delegate $UPTICK_VALOPER_ADDRESS 100000000auptick --from=$UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
uptickd tx staking unbond $(uptickd keys show $UPTICK_WALLET --bech val -a) 1000000auptick --from $UPTICK_WALLET --chain-id indigo-1 --fees 3000auptick -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
uptickd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000auptick --from=$UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
uptickd tx distribution withdraw-all-rewards --from=$UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
uptickd tx distribution withdraw-rewards $UPTICK_VALOPER_ADDRESS --from=$UPTICK_WALLET --commission --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
uptickd status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
uptickd tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$UPTICK_CHAIN_ID \
--from=$UPTICK_WALLET \
--gas-prices 0.00001auptick \
--gas-adjustment 1.5 \
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
uptickd tx staking edit-validator --commission-rate "0.02" --moniker=$UPTICK_NODENAME --from $UPTICK_WALLET --chain-id $UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$UPTICK_NODENAME` and `$UPTICK_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
uptickd tx staking edit-validator \
--moniker=$UPTICK_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$UPTICK_CHAIN_ID \
--from=$UPTICK_WALLET
```

### Validator Details
```
uptickd q staking validator $(uptickd keys show $WALLET --bech val -a)
```

### Jailing info
```
uptickd q slashing signing-info $(uptickd tendermint show-validator)
```

### Slashing parameters
```
uptickd q slashing params
```

### Recovering Validator from Jail
```
uptickd tx slashing unjail --from $UPTICK_WALLET --chain-id $UPTICK_CHAIN_ID --gas-prices 0.00001auptick --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
uptickd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(uptickd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(uptickd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
uptickd q slashing signing-info $(uptickd tendermint show-validator)
```
