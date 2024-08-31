"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2084],{51504:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var t=i(85893),a=i(11151);const d={title:"\u2934\ufe0f Cheatsheets",description:"Useful commands.",image:"./img/Airchains-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},r="Cheatsheets",s={id:"Testnet Archive/airchains/ycheatsheets",title:"\u2934\ufe0f Cheatsheets",description:"Useful commands.",source:"@site/docs/Testnet Archive/airchains/ycheatsheets.md",sourceDirName:"Testnet Archive/airchains",slug:"/Testnet Archive/airchains/ycheatsheets",permalink:"/docs/Testnet Archive/airchains/ycheatsheets",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/airchains/ycheatsheets.md",tags:[],version:"current",frontMatter:{title:"\u2934\ufe0f Cheatsheets",description:"Useful commands.",image:"./img/Airchains-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet Archive/airchains/update"},next:{title:"Aligned Layer",permalink:"/docs/Testnet Archive/alignedlayer/"}},o={image:i(34822).Z},l=[{value:"Service Operations",id:"service-operations",level:2},{value:"Checking Logs",id:"checking-logs",level:3},{value:"Starting Node",id:"starting-node",level:3},{value:"Stopping the Node",id:"stopping-the-node",level:3},{value:"Restarting the Node",id:"restarting-the-node",level:3},{value:"Node Sync Status",id:"node-sync-status",level:3},{value:"Node Information",id:"node-information",level:3},{value:"Learning Node ID",id:"learning-node-id",level:3},{value:"Learning Node IP Address",id:"learning-node-ip-address",level:3},{value:"Your node peer",id:"your-node-peer",level:3},{value:"Wallet Management",id:"wallet-management",level:2},{value:"Viewing the List of Wallets",id:"viewing-the-list-of-wallets",level:3},{value:"Seeing Wallet Address",id:"seeing-wallet-address",level:3},{value:"Importing Wallet",id:"importing-wallet",level:3},{value:"Deleting Your Wallet",id:"deleting-your-wallet",level:3},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Tokens",id:"tokens",level:2},{value:"Transferring from One Wallet to Another",id:"transferring-from-one-wallet-to-another",level:3},{value:"Participating in Proposal Voting",id:"participating-in-proposal-voting",level:3},{value:"Validatore Staking / Delegation",id:"validatore-staking--delegation",level:3},{value:"Unbonding",id:"unbonding",level:3},{value:"Staking / Redelegate from Current Validator to Other Validator",id:"staking--redelegate-from-current-validator-to-other-validator",level:3},{value:"Withdraw Rewards",id:"withdraw-rewards",level:3},{value:"Withdrawing Commission Rewards",id:"withdrawing-commission-rewards",level:3},{value:"Validator operations",id:"validator-operations",level:2},{value:"Validator Information",id:"validator-information",level:3},{value:"Changing Validator Name",id:"changing-validator-name",level:3},{value:"Changing Validator Commission Rate",id:"changing-validator-commission-rate",level:3},{value:"Editing Your Validator Information",id:"editing-your-validator-information",level:3},{value:"Validator Details",id:"validator-details",level:3},{value:"Jailing info",id:"jailing-info",level:3},{value:"Slashing parameters",id:"slashing-parameters",level:3},{value:"Recovering Validator from Jail",id:"recovering-validator-from-jail",level:3},{value:"Active Validators List",id:"active-validators-list",level:3},{value:"Checking Validator key",id:"checking-validator-key",level:3},{value:"Signing info",id:"signing-info",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cheatsheets",children:"Cheatsheets"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If you have installed from our guide, you do not need to make any changes in the codes below unless stated otherwise."})}),"\n",(0,t.jsx)(n.h2,{id:"service-operations",children:"Service Operations"}),"\n",(0,t.jsx)(n.h3,{id:"checking-logs",children:"Checking Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"journalctl -fu junctiond -o cat\n"})}),"\n",(0,t.jsx)(n.h3,{id:"starting-node",children:"Starting Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl start junctiond\n"})}),"\n",(0,t.jsx)(n.h3,{id:"stopping-the-node",children:"Stopping the Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl stop junctiond\n"})}),"\n",(0,t.jsx)(n.h3,{id:"restarting-the-node",children:"Restarting the Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl restart junctiond\n"})}),"\n",(0,t.jsx)(n.h3,{id:"node-sync-status",children:"Node Sync Status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,t.jsx)(n.h3,{id:"node-information",children:"Node Information"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond status 2>&1 | jq .NodeInfo\n"})}),"\n",(0,t.jsx)(n.h3,{id:"learning-node-id",children:"Learning Node ID"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tendermint show-node-id\n"})}),"\n",(0,t.jsx)(n.h3,{id:"learning-node-ip-address",children:"Learning Node IP Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl icanhazip.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"your-node-peer",children:"Your node peer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"echo $(junctiond tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.junction/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/\".*//')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wallet-management",children:"Wallet Management"}),"\n",(0,t.jsx)(n.h3,{id:"viewing-the-list-of-wallets",children:"Viewing the List of Wallets"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond keys list\n"})}),"\n",(0,t.jsx)(n.h3,{id:"seeing-wallet-address",children:"Seeing Wallet Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond keys show $AIRCHAINS_WALLET --bech val -a\n"})}),"\n",(0,t.jsx)(n.h3,{id:"importing-wallet",children:"Importing Wallet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond keys add $AIRCHAINS_WALLET --recover\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deleting-your-wallet",children:"Deleting Your Wallet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond keys delete $AIRCHAINS_WALLET\n"})}),"\n",(0,t.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond query bank balances $AIRCHAINS_WALLET_ADDRESS\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tokens",children:"Tokens"}),"\n",(0,t.jsx)(n.h3,{id:"transferring-from-one-wallet-to-another",children:"Transferring from One Wallet to Another"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx bank send $AIRCHAINS_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uusdc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"participating-in-proposal-voting",children:"Participating in Proposal Voting"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx gov vote 1 yes --from $AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"validatore-staking--delegation",children:"Validatore Staking / Delegation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx mstaking delegate $AIRCHAINS_VALOPER_ADDRESS 100000000uusdc --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"unbonding",children:"Unbonding"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx mstaking unbond $(junctiond keys show $AIRCHAINS_WALLET --bech val -a) 1000000uusdc --from $AIRCHAINS_WALLET --chain-id indigo-1 --fees 3000uusdc -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"staking--redelegate-from-current-validator-to-other-validator",children:"Staking / Redelegate from Current Validator to Other Validator"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"srcValidatorAddress"}),": Address of the current staked validator\n",(0,t.jsx)(n.code,{children:"destValidatorAddress"}),": Address of the new validator to be staked"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx mstaking redelegate srcValidatorAddress destValidatorAddress 100000000uusdc --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"withdraw-rewards",children:"Withdraw Rewards"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx distribution withdraw-all-rewards --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"withdrawing-commission-rewards",children:"Withdrawing Commission Rewards"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx distribution withdraw-rewards $AIRCHAINS_VALOPER_ADDRESS --from=$AIRCHAINS_WALLET --commission --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validator-operations",children:"Validator operations"}),"\n",(0,t.jsx)(n.h3,{id:"validator-information",children:"Validator Information"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond status 2>&1 | jq .ValidatorInfo\n"})}),"\n",(0,t.jsx)(n.h3,{id:"changing-validator-name",children:"Changing Validator Name"}),"\n",(0,t.jsx)(n.p,{children:"Write your new validator/moniker name where it says 'NEW-NODE-NAME'. It should not contain TR characters."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx mstaking edit-validator \\\n--new-moniker=YENI-NODE-ADI \\\n--chain-id=$AIRCHAINS_CHAIN_ID \\\n--from=$AIRCHAINS_WALLET \\\n--node=https://rpc-t-initia.anatolianteam.com:443 \\\n--gas-prices=11uinit \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--yes\n"})}),"\n",(0,t.jsx)(n.h3,{id:"changing-validator-commission-rate",children:"Changing Validator Commission Rate"}),"\n",(0,t.jsx)(n.p,{children:"We change the value in the section that says 'commission-rate'."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'junctiond tx mstaking edit-validator --commission-rate "0.02" --moniker=$AIRCHAINS_NODENAME --from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto - y\n'})}),"\n",(0,t.jsx)(n.h3,{id:"editing-your-validator-information",children:"Editing Your Validator Information"}),"\n",(0,t.jsxs)(n.p,{children:["Before changing this information, you must register at ",(0,t.jsx)(n.a,{href:"https://keybase.io/",children:"https://keybase.io/"})," and receive your 16-digit code (XXXX0000XXXX0000) as seen in the code below. Also profile picture etc. You can also adjust the settings.\n",(0,t.jsx)(n.code,{children:"$AIRCHAINS_NODENAME"})," and ",(0,t.jsx)(n.code,{children:"$AIRCHAINS_WALLET"}),": Your Validator (Moniker) and wallet name, you do not need to change it. Because we added it to variables."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'junctiond tx mstaking edit-validator \\\n--moniker=$AIRCHAINS_NODENAME \\\n--identity=XXXX0000XXXX0000\\\n--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \\\n--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \\\n--chain-id=$AIRCHAINS_CHAIN_ID \\\n--from=$AIRCHAINS_WALLET\n--node=https://rpc-t-initia.anatolianteam.com:443 \\\n--gas-prices=11uinit \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--yes\n'})}),"\n",(0,t.jsx)(n.h3,{id:"validator-details",children:"Validator Details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond q mstaking validator $(junctiond keys show $AIRCHAINS_WALLET --bech val -a)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"jailing-info",children:"Jailing info"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond q slashing signing-info $(junctiond tendermint show-validator)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"slashing-parameters",children:"Slashing parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond q slashing params\n"})}),"\n",(0,t.jsx)(n.h3,{id:"recovering-validator-from-jail",children:"Recovering Validator from Jail"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond tx slashing unjail --from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"active-validators-list",children:"Active Validators List"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond q mstaking validators -oj --limit=2000 | jq '.validators[] | select(.status==\"BOND_STATUS_BONDED\")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + \" \t \" + .description.moniker' | sort -gr | nl\n"})}),"\n",(0,t.jsx)(n.h3,{id:"checking-validator-key",children:"Checking Validator key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[[ $(junctiond q mstaking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(junctiond status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"signing-info",children:"Signing info"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"junctiond q slashing signing-info $(junctiond tendermint show-validator)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},34822:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Airchains-Service-Cover-f1de8d48e4fd39509044babb9d7b7a83.jpg"},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var t=i(67294);const a={},d=t.createContext(a);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);