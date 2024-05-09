"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4187],{9912:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var i=a(5893),t=a(1151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","modular","chain","installation","snapshot","statesync","update"]},l="Installation",c={id:"Testnet/Cosmos-Ecosystem/0g/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet/Cosmos-Ecosystem/0g/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/0g/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","modular","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"0G",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/snapshot"}},d={image:a(3270).Z},r=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing 0G",id:"installing-0g",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"StateSync",id:"statesync",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Learning Your EVM Address",id:"learning-your-evm-address",level:3},{value:"Faucet",id:"faucet",level:3},{value:"Add Network to Wallet",id:"add-network-to-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,i.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$OG_NODENAME"})," your validator name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$OG_WALLET"})," your wallet name"]}),"\n",(0,i.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,i.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export OG_NODENAME=$OG_NODENAME"  >> $HOME/.bash_profile\necho "export OG_WALLET=$OG_WALLET" >> $HOME/.bash_profile\necho "export OG_PORT=11" >> $HOME/.bash_profile\necho "export OG_CHAIN_ID=zgtendermint_16600-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(n.p,{children:["Let's assume that your Node (",(0,i.jsx)(n.code,{children:"OG_NODENAME"}),") and Wallet (",(0,i.jsx)(n.code,{children:"OG_WALLET"}),") name is ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,i.jsx)(n.code,{children:"OG_PORT"}),") will be ",(0,i.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export OG_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export OG_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export OG_PORT=16" >> $HOME/.bash_profile\necho "export OG_CHAIN_ID=zgtendermint_16600-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-0g",children:"Installing 0G"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd $HOME\ngit clone -b v0.1.0 https://github.com/0glabs/0g-chain.git\n./0g-chain/networks/testnet/install.sh\nsource .profile\n0gchaind version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,i.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'0gchaind config chain-id $OG_CHAIN_ID\n0gchaind config keyring-backend test\n0gchaind init --chain-id $OG_CHAIN_ID $OG_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://testnet.anatolianteam.com/0g/genesis.json -O $HOME/.0gchain/config/genesis.json\nwget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.0gchain/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i "s/^minimum-gas-prices *=.*/minimum-gas-prices = \\"0ua0gi\\"/" $HOME/.0gchain/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.0gchain/config/config.toml\n\n# Set up SEED and PEERS\nPEERS="fbc3b6d41cd39a62ef5e3fc596435adfaf428a34@37.120.189.81:16656,645531eb02b275a59cc3b1af99e541852849f695@84.247.139.25:16656,d00273ac6a2470cd4e48008d9af4d2521b134394@62.169.29.136:26656,f5a7d34355f6d89b7ece583131c6b1f79ac5485e@218.102.97.67:25856,a3e6c6214805c1c068882f1981855c7a9f5926ea@213.168.249.202:26656,da1f4985ce3df05fd085460485adefa93592a54c@172.232.33.25:26656,91f079ccd2e0edf42e0fa57183ac92c22c525658@14.245.25.144:14256,9d09d391b2cf706a597d03fe8bb6700fe5cac53d@65.108.198.183:18456,5a202fb905f20f96d8ff0726f0c0756d17cf23d8@43.248.98.100:26656,74775d65b6ab427c685efcaa8190912d3a60e562@123.19.45.21:12656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,9d7564df34efa146a94c073e5bf3f5e11f947b75@155.133.22.230:26656,e179d05dc792d9b902be3baa7a31a07a92afbcf0@118.142.83.5:26656,c4b9c3a7f3651af729d73b150e714ee91e7585c1@14.176.200.133:26656,f64f0fb500c62bffa33d60450d30792ee4b5fbd0@167.86.119.168:26656,d4085fd93ab77576f2acdb25d2d817061db5afe6@62.169.19.156:26656,2b8ee12f4f94ebc337af94dbec07de6f029a24e6@94.16.31.161:26656,0f5022e4265184052a5468379687625a81fd255e@154.12.253.116:26656,3859828e1099214de14dae91d1f7decf2374eeb4@47.236.170.254:26656,23b0a0624699f85062ddebf910583f70a5b9e86b@14.167.152.116:14256,b8f8ed478f2794629fdb5cf0c01edaed80f00f84@168.119.64.172:26656,5d81d59e81356a33e6ccccaa3d419ff73244697e@107.173.18.103:26656,c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,a83f5d07a8a64827851c9f1d0c21c900b9309608@188.166.181.110:26656,19943cbe46cdb9eb37cb06c0067ce63154eee6ea@213.199.52.155:26656,a6ff8a651dd0a0e66dbfb2174ccadcbbcf567b29@66.94.122.224:26656,f3c912cf5653e51ee94aaad0589a3d176d31a19d@157.90.0.102:31656,141dbd90d5c3411c9ba72ba03704ccdb70875b01@65.109.147.58:36656,cd529839591e13f5ed69e9a029c5d7d96de170fe@46.4.55.46:34656,a8d7c5a051c4649ba7e267c94e48a7c64a00f0eb@65.108.127.146:26656" && \\\nSEEDS="c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,44d11d4ba92a01b520923f51632d2450984d5886@54.176.175.48:26656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,f878d40c538c8c23653a5b70f615f8dccec6fb9f@54.215.187.94:26656" && \\\nsed -i -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/; s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.0gchain/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.0gchain/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.0gchain/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${OG_PORT}658%g;\ns%:26657%:${OG_PORT}657%g;\ns%:6060%:${OG_PORT}060%g;\ns%:26656%:${OG_PORT}656%g;\ns%:26660%:${OG_PORT}660%g\n" $HOME/.0gchain/config/config.toml\nsed -i.bak -e "\ns%:1317%:${OG_PORT}317%g; \ns%:8080%:${OG_PORT}080%g; \ns%:9090%:${OG_PORT}090%g; \ns%:9091%:${OG_PORT}091%g\n" $HOME/.0gchain/config/app.toml\nsed -i.bak -e "s%:26657%:${OG_PORT}657%g" $HOME/.0gchain/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${OG_PORT}656\\"|g" ~/.0gchain/config/config.toml > ~/.0gchain/config/config.toml.tmp\nmv ~/.0gchain/config/config.toml.tmp  ~/.0gchain/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/0gchaind.service > /dev/null << EOF\n[Unit]\nDescription=0G Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which 0gchaind) start --home $HOME\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable 0gchaind\nsystemctl start 0gchaind\n"})}),"\n",(0,i.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u 0gchaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.h2,{id:"statesync",children:"StateSync"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop 0gchaind\n\ncp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup\n0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-0g.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.0gchain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.0gchain/config/config.toml\n\nmv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json\n\nsystemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,i.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["Unless we get a ",(0,i.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,i.jsxs)(n.p,{children:["We do not change the ",(0,i.jsx)(n.code,{children:"$OG_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys add $OG_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys add $OG_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h3,{id:"learning-your-evm-address",children:"Learning Your EVM Address"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo \"0x$(0gchaind debug addr $(0gchaind keys show $OG_WALLET -a) | grep hex | awk '{print $3}')\"\n"})}),"\n",(0,i.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,i.jsxs)(n.p,{children:["And then request tokens from the ",(0,i.jsx)(n.a,{href:"https://faucet.0g.ai/",children:"faucet"})," to your address above."]}),"\n",(0,i.jsx)(n.h3,{id:"add-network-to-wallet",children:"Add Network to Wallet"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Details"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Network name"})}),(0,i.jsx)(n.td,{children:"0g Newton Testnet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"New RPC URL"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rpc-testnet.0g.ai/",children:"https://rpc-testnet.0g.ai/"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Chain ID"})}),(0,i.jsx)(n.td,{children:"9000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Currency symbol:"})}),(0,i.jsx)(n.td,{children:"A0GI"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,i.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"OG_WALLET_ADDRESS=$(0gchaind keys show $OG_WALLET -a)\nOG_VALOPER_ADDRESS=$(0gchaind keys show $OG_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export OG_WALLET_ADDRESS='${OG_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export OG_VALOPER_ADDRESS='${OG_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0gchaind query bank balances $OG_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,i.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,i.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"})," where it says ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"})," where it says ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'0gchaind tx staking create-validator \\\n--amount=1000000ua0gi \\\n--pubkey=$(0gchaind tendermint show-validator) \\\n--moniker=$OG_NODENAME \\\n--chain-id=$OG_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25ua0gi  \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$OG_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\udc06" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you get an error, add this before ",(0,i.jsx)(n.code,{children:"--yes"}),": ",(0,i.jsx)(n.code,{children:"--node=https://rpc-t-0g.anatolianteam.com:443 \\"})]})}),"\n",(0,i.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop 0gchaind && \\\nsystemctl disable 0gchaind && \\\nrm /etc/systemd/system/0gchaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .0gchain 0g-chain && \\\nrm -rf $(which 0gchaind)\nsed -i '/OG_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3270:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/0G-Service-Cover-98960b183eb86dd7d944869365d34be6.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>l});var i=a(7294);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);