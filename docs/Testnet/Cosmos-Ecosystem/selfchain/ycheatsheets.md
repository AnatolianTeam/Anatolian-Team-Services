---
title: ⤴️ Cheatsheets
description: Useful commands.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg
keywords: [selfchain, self, chain, installation, snapshot, statesync, update]
---

# Cheatsheets 
:::note
If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise.
:::

## Service Operations

### Checking Logs
```
journalctl -fu selfchaind -o cat
```

### Starting Node
```
systemctl start selfchaind
```

### Stopping the Node
```
systemctl stop selfchaind
```

### Restarting the Node
```
systemctl restart selfchaind
```

### Node Sync Status
```
selfchaind status 2>&1 | jq .SyncInfo
```

### Node Information
```
selfchaind status 2>&1 | jq .NodeInfo
```

### Learning Node ID
```
selfchaind tendermint show-node-id
```

### Learning Node IP Address
```
curl icanhazip.com
```

### Your node peer
```
echo $(selfchaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.selfchain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Wallet Management

### Viewing the List of Wallets
```
selfchaind keys list
```

### Seeing Wallet Address
```
selfchaind keys show $SELF_WALLET --bech val -a
```

### Importing Wallet
```
selfchaind keys add $SELF_WALLET --recover
```

### Deleting Your Wallet
```
selfchaind keys delete $SELF_WALLET
```

### Checking Wallet Balance
```
selfchaind query bank balances $SELF_WALLET_ADDRESS
```

## Tokens

### Transferring from One Wallet to Another
```
selfchaind tx bank send $SELF_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uself
```

### Participating in Proposal Voting
```
selfchaind tx gov vote 1 yes --from $SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto -y
```

### Validatore Staking / Delegation
```
selfchaind tx staking delegate $SELF_VALOPER_ADDRESS 100000000uself --from=$SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto -y
```
### Unbonding
```
selfchaind tx staking unbond $(selfchaind keys show $SELF_WALLET --bech val -a) 1000000uself --from $SELF_WALLET --chain-id indigo-1 --fees 3000uself -y
```

### Staking / Redelegate from Current Validator to Other Validator
`srcValidatorAddress`: Address of the current staked validator
`destValidatorAddress`: Address of the new validator to be staked
```
selfchaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uself --from=$SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto -y
```

### Withdraw Rewards
```
selfchaind tx distribution withdraw-all-rewards --from=$SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto -y
```

### Withdrawing Commission Rewards

```
selfchaind tx distribution withdraw-rewards $SELF_VALOPER_ADDRESS --from=$SELF_WALLET --commission --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto -y
```

## Validator operations

### Validator Information
```
selfchaind status 2>&1 | jq .ValidatorInfo
```

### Changing Validator Name
Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters.
```
selfchaind tx staking edit-validator \
--new-moniker=NEW-NODE-NAME\
--chain-id=$SELF_CHAIN_ID\
--from=$SELF_WALLET\
--gas-prices 0.00001uself\
--gas-adjustment 1.5\
--gas auto -y
```

### Changing Validator Commission Rate
We change the value in the section that says 'commission-rate'.
```
selfchaind tx staking edit-validator --commission-rate "0.02" --moniker=$SELF_NODENAME --from $SELF_WALLET --chain-id $SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto - y
```

### Editing Your Validator Information
Before changing this information, you must register at https://keybase.io/ and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.
`$SELF_NODENAME` and `$SELF_WALLET`: Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables.
```
selfchaind tx staking edit-validator \
--moniker=$SELF_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$SELF_CHAIN_ID\
--from=$SELF_WALLET
```

### Validator Details
```
selfchaind q staking validator $(selfchaind keys show $WALLET --bech val -a)
```

### Jailing info
```
selfchaind q slashing signing-info $(selfchaind tendermint show-validator)
```

### Slashing parameters
```
selfchaind q slashing params
```

### Recovering Validator from Jail
```
selfchaind tx slashing unjail --from $SELF_WALLET --chain-id $SELF_CHAIN_ID --gas-prices 0.00001uself --gas-adjustment 1.5 --gas auto -y
```

### Active Validators List
```
selfchaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Checking Validator key
```
[[ $(selfchaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(selfchaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### Signing info
```
selfchaind q slashing signing-info $(selfchaind tendermint show-validator)
```
