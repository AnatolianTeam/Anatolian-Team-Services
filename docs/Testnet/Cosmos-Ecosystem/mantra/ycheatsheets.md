---
title: ⤴️ Cheatsheets
description: Useful commands.
image: ./img/Mantra-Service-Cover.jpg
keywords: [mantra, chain, installation, snapshot, statesync, update]
position: 5
slug: cheatsheets
---

# Cheatsheets
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu mantrachaind -o cat
```

### Starting Node
```
systemctl start mantrachaind
```

### Stopping the Node
```
systemctl stop mantrachaind
```

### Restarting the Node
```
systemctl restart mantrachaind
```

### Node Sync Status
```
mantrachaind status 2>&1 | jq .SyncInfo
```

### Node Information
```
mantrachaind status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
mantrachaind tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(mantrachaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.mantrachain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
mantrachaind keys list
```

### Seeing Wallet Address
```
mantrachaind keys show $MANTRA_WALLET --bech val -a
```

### Importing Wallet
```
mantrachaind keys add $MANTRA_WALLET --recover
```

### Deleting Your Wallet
```
mantrachaind keys delete $MANTRA_WALLET
```

### Checking Wallet Balance
```
mantrachaind query bank balances $MANTRA_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
mantrachaind tx bank send $MANTRA_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uom
```

### Participating in Proposal Voting
```
mantrachaind tx gov vote 1 yes --from $MANTRA_WALLET --chain-id=$MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
mantrachaind tx staking delegate $MANTRA_VALOPER_ADDRESS 100000000uom --from=$MANTRA_WALLET --chain-id=$MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
mantrachaind tx staking unbond $(mantrachaind keys show $MANTRA_WALLET --bech val -a) 1000000uom --from $MANTRA_WALLET --chain-id indigo-1 --fees 3000uom -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
mantrachaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uom --from=$MANTRA_WALLET --chain-id=$MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
mantrachaind tx distribution withdraw-all-rewards --from=$MANTRA_WALLET --chain-id=$MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
mantrachaind tx distribution withdraw-rewards $MANTRA_VALOPER_ADDRESS --from=$MANTRA_WALLET --commission --chain-id=$MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
mantrachaind status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
mantrachaind tx staking edit-validator \
--new-moniker=NEW-NODE-NAME \
--chain-id=$MANTRA_CHAIN_ID \
--from=$MANTRA_WALLET \
--gas-prices 0.00001uom\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
mantrachaind tx staking edit-validator --commission-rate "0.02" --moniker=$MANTRA_NODENAME --from $MANTRA_WALLET --chain-id $MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$MANTRA_NODENAME` and `$MANTRA_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
mantrachaind tx staking edit-validator \
--moniker=$MANTRA_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$MANTRA_CHAIN_ID \
--from=$MANTRA_WALLET
```

### Validator Details
```
mantrachaind q staking validator $(mantrachaind keys show $MANTRA_WALLET --bech val -a)
```

### Jailing info
```
mantrachaind q slashing signing-info $(mantrachaind tendermint show-validator)
```

### Slashing parameters
```
mantrachaind q slashing params
```

### Recovering Validator from Jail
```
mantrachaind tx slashing unjail --from $MANTRA_WALLET --chain-id $MANTRA_CHAIN_ID --gas-prices 0.00001uom --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
mantrachaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(mantrachaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(mantrachaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
mantrachaind q slashing signing-info $(mantrachaind tendermint show-validator)
```
