"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8216],{81629:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(85893),t=a(11151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Mantra-Service-Cover.jpg",position:1,keywords:["mantra","chain","installation","snapshot","statesync","update"]},l="Installation",r={id:"Testnet/Cosmos-Ecosystem/mantra/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet/Cosmos-Ecosystem/mantra/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/mantra",slug:"/Testnet/Cosmos-Ecosystem/mantra/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/mantra/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Mantra-Service-Cover.jpg",position:1,keywords:["mantra","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Mantra Chain",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot"}},o={image:a(78004).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Mantra",id:"installing-mantra",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling the Service",id:"enabling-the-service",level:2},{value:"StateSync",id:"statesync",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Faucet",id:"faucet",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(e.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(e.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(e.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,i.jsx)(e.p,{children:"The areas you need to change are written below."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"$MANTRA_NODENAME"})," your validator name"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"$MANTRA_WALLET"})," your wallet name"]}),"\n",(0,i.jsxs)(e.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,i.jsx)(e.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'echo "export MANTRA_NODENAME=$MANTRA_NODENAME" >> $HOME/.bash_profile\necho "export MANTRA_WALLET=$MANTRA_WALLET" >> $HOME/.bash_profile\necho "export MANTRA_PORT=11" >> $HOME/.bash_profile\necho "export MANTRA_CHAIN_ID=mantra-hongbai-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(e.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(e.p,{children:["Let's assume that your Node (",(0,i.jsx)(e.code,{children:"MANTRA_NODENAME"}),") and Wallet (",(0,i.jsx)(e.code,{children:"MANTRA_WALLET"}),") name is ",(0,i.jsx)(e.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,i.jsx)(e.code,{children:"MANTRA_PORT"}),") will be ",(0,i.jsx)(e.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'echo "export MANTRA_NODENAME=Anatolian-Guide" >> $HOME/.bash_profile\necho "export MANTRA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export MANTRA_PORT=16" >> $HOME/.bash_profile\necho "export MANTRA_CHAIN_ID=mantra-hongbai-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(e.h2,{id:"installing-mantra",children:"Installing Mantra"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"cd $HOME\nwget -O /usr/lib/libwasmvm.x86_64.so https://github.com/CosmWasm/wasmvm/releases/download/v1.3.1/libwasmvm.x86_64.so\nwget https://github.com/MANTRA-Finance/public/raw/main/mantrachain-hongbai/mantrachaind-linux-amd64.zip\nunzip mantrachaind-linux-amd64.zip\nrm mantrachaind-linux-amd64.zip\nmv mantrachaind $HOME/go/bin\nmantrachaind version\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The version output will be ",(0,i.jsx)(e.code,{children:"3.0.0"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,i.jsx)(e.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'mantrachaind config keyring-backend test\nmantrachaind config chain-id $MANTRA_CHAIN_ID\nmantrachaind init --chain-id $MANTRA_CHAIN_ID $MANTRA_NODENAME\n\n# Copying the Genesis and addrbook File\ncurl -L https://testnet.anatolianteam.com/mantra/genesis.json > $HOME/.mantrachain/config/genesis.json\ncurl -L https://testnet.anatolianteam.com/mantra/addrbook.json > $HOME/.mantrachain/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0002uom"|g\' $HOME/.mantrachain/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.mantrachain/config/config.toml\n\n# Set up SEEDS and PEERS\nSEEDS="69fa5f7927f2b013f152b6dfc56324156feb1973@34.172.80.207:26656"\nPEERS="182a37a556ff0b6733fe58020e7746de3292492d@35.222.198.102:26656,64691a4202c1ad29a416b21ce21bfc9659783406@34.136.169.18:26656"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.mantrachain/config/config.toml\nsed -i.bak -e "s/^seeds =.*/seeds = \\"$SEEDS\\"/" $HOME/.mantrachain/config/config.toml\nsed -i -e "s/^filter_peers *=.*/filter_peers = \\"true\\"/" $HOME/.mantrachain/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.mantrachain/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.mantrachain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.mantrachain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.mantrachain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.mantrachain/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${MANTRA_PORT}658%g;\ns%:26657%:${MANTRA_PORT}657%g;\ns%:6060%:${MANTRA_PORT}060%g;\ns%:26656%:${MANTRA_PORT}656%g;\ns%:26660%:${MANTRA_PORT}660%g\n" $HOME/.mantrachain/config/config.toml\nsed -i.bak -e "\ns%:8545%:${MANTRA_PORT}545%g;\ns%:8546%:${MANTRA_PORT}546%g;\ns%:6065%:${MANTRA_PORT}065%g;\ns%:1317%:${MANTRA_PORT}317%g; \ns%:8080%:${MANTRA_PORT}080%g; \ns%:9090%:${MANTRA_PORT}090%g; \ns%:9091%:${MANTRA_PORT}091%g\n" $HOME/.mantrachain/config/app.toml\nsed -i.bak -e "s%:26657%:${MANTRA_PORT}657%g" $HOME/.mantrachain/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${MANTRA_PORT}656\\"|g" ~/.mantrachain/config/config.toml > ~/.mantrachain/config/config.toml.tmp\nmv ~/.mantrachain/config/config.toml.tmp  ~/.mantrachain/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/mantrachaind.service > /dev/null << EOF\n[Unit]\nDescription=Mantra Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which mantrachaind) start\nRestart=on-failure\nRestartSec=10\nLimitNOFILE=10000\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(e.h2,{id:"enabling-the-service",children:"Enabling the Service"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable mantrachaind\n"})}),"\n",(0,i.jsx)(e.h2,{id:"statesync",children:"StateSync"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"systemctl stop mantrachaind\n\ncp $HOME/.mantrachain/data/priv_validator_state.json $HOME/.mantrachain/priv_validator_state.json.backup\nmantrachaind tendermint unsafe-reset-all --home $HOME/.mantrachain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-mantra.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.mantrachain/config/config.toml\n\nmv $HOME/.mantrachain/priv_validator_state.json.backup $HOME/.mantrachain/data/priv_validator_state.json\n\nsystemctl restart mantrachaind && journalctl -u mantrachaind -f -o cat\n"})}),"\n",(0,i.jsx)(e.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"journalctl -u mantrachaind -f -o cat\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsx)(e.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,i.jsx)(e.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,i.jsxs)(e.p,{children:["Unless we get a ",(0,i.jsx)(e.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"mantrachaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(e.h2,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsx)(e.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,i.jsxs)(e.p,{children:["We do not change the ",(0,i.jsx)(e.code,{children:"$MANTRA_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"mantrachaind keys add $MANTRA_WALLET\n"})}),"\n",(0,i.jsx)(e.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"mantrachaind keys add $MANTRA_WALLET --recover\n"})}),"\n",(0,i.jsx)(e.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,i.jsx)(e.p,{children:"Here, wallet and valoper information are added to the variable."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"MANTRA_WALLET_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET -a)\nMANTRA_VALOPER_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"echo 'export MANTRA_WALLET_ADDRESS='${MANTRA_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export MANTRA_VALOPER_ADDRESS='${MANTRA_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(e.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mantrachaind query bank balances $MANTRA_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(e.h3,{id:"faucet",children:"Faucet"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://faucet.hongbai.mantrachain.io/",children:"https://faucet.hongbai.mantrachain.io/"})}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsx)(e.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,i.jsx)(e.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,i.jsx)(e.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"identity"})," where it says ",(0,i.jsx)(e.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,i.jsx)(e.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"details"})," You can write information about yourself where it says ",(0,i.jsx)(e.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"website"})," where it says ",(0,i.jsx)(e.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'mantrachaind tx staking create-validator \\\n--amount=1000000uom \\\n--pubkey=$(mantrachaind tendermint show-validator) \\\n--moniker=$MANTRA_NODENAME \\\n--chain-id=$MANTRA_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.002uom \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$MANTRA_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(e.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"systemctl stop mantrachaind && \\\nsystemctl disable mantrachaind && \\\nrm /etc/systemd/system/mantrachaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm .mantrachain babylon -rf && \\\nrm $(which mantrachaind) -rf\nsed -i '/MANTRA_/d' ~/.bash_profile\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u200b"})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},78004:(n,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/Mantra-Service-Cover-54ec7390608d5af9c0929e8ac1d83b1f.jpg"},11151:(n,e,a)=>{a.d(e,{Z:()=>r,a:()=>l});var i=a(67294);const t={},s=i.createContext(t);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);