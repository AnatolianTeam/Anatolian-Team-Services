"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7244],{6800:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=i(5893),t=i(1151);const l={title:"\ud83d\udcbe Installation",image:"./img/Pryzm-Service-Cover.jpg",keywords:["pryzm","zone","installation","snapshot","statesync","update"]},a="Installation",r={id:"Testnet/Cosmos-Ecosystem/pryzm-zone/installation",title:"\ud83d\udcbe Installation",description:"Updating the System",source:"@site/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/pryzm-zone",slug:"/Testnet/Cosmos-Ecosystem/pryzm-zone/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",image:"./img/Pryzm-Service-Cover.jpg",keywords:["pryzm","zone","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Pryzm Zone",permalink:"/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/snapshot"}},o={image:i(9625).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Pryzm",id:"installing-pryzm",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling the Service",id:"enabling-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,s.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$PRYZM_NODENAME"})," your validator name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$PRYZM_WALLET"})," your wallet name"]}),"\n",(0,s.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,s.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "export PRYZM_NODENAME=$PRYZM_NODENAME"  >> $HOME/.bash_profile\necho "export PRYZM_WALLET=$PRYZM_WALLET" >> $HOME/.bash_profile\necho "export PRYZM_PORT=11" >> $HOME/.bash_profile\necho "export PRYZM_CHAIN_ID=indigo-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsxs)(n.p,{children:["Let's assume that your Node (",(0,s.jsx)(n.code,{children:"PRYZM_NODENAME"}),") and Wallet (",(0,s.jsx)(n.code,{children:"PRYZM_WALLET"}),") name is ",(0,s.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,s.jsx)(n.code,{children:"PRYZM_PORT"}),") will be ",(0,s.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "export PRYZM_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export PRYZM_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export PRYZM_PORT=16" >> $HOME/.bash_profile\necho "export PRYZM_CHAIN_ID=indigo-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,s.jsx)(n.h2,{id:"installing-pryzm",children:"Installing Pryzm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd $HOME\nwget -O pryzmd https://storage.googleapis.com/pryzm-zone/core/0.11.1/pryzmd-0.11.1-linux-amd64\nchmod +x $HOME/pryzmd\nmv pryzmd /root/go/bin/\npryzmd version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The version output will be ",(0,s.jsx)(n.code,{children:"0.11.1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,s.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'pryzmd config keyring-backend test\npryzmd config chain-id $PRYZM_CHAIN_ID\npryzmd init --chain-id $PRYZM_CHAIN_ID $PRYZM_NODENAME\n\n# Copying the Genesis File\nwget -O $HOME/.pryzm/config/genesis.json "https://testnet.anatolianteam.com/pryzm/genesis.json"\nwget -O $HOME/.pryzm/config/addrbook.json "https://testnet.anatolianteam.com/pryzm/addrbook.json"\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.015upryzm"|g\' $HOME/.pryzm/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.pryzm/config/config.toml\n\n# Set up SEED and PEERS\nPEERS="a08dfd98fb5dd3fb0c843088c70610570965907e@86.48.0.190:16656,e48dc3817b1646dec199e66700945234a61f1cd6@135.181.15.158:26656,53c21574397826e080d9d88f756872c5b764d1a2@[2a01:4f9:3051:19c2::2]:12456,a45072cbd173d6dc62ba6b2e5b76f4f69c9c7eb5@207.244.253.244:38656,d9a846e2632764c44577ce71c859c4167b8c5c18@178.128.197.47:26656,c176528e93142915af27e73511e21afc2dce22f4@65.109.28.177:26706,0e236d748212fcf9de89c8882f44e682f93475dc@159.69.193.68:36656,19102f727574337f014772f56920c1e5a4efe52d@135.181.254.74:26656,db0e0cff276b3292804474eb8beb83538acf77f5@195.14.6.192:26656,fd04c898639bf85eab223e686f4506b90213e432@193.164.4.109:31656,6d84adfe688d43fee69b35a7c3f26980c3d37463@89.38.98.200:20256"\nSEEDS="ff17ca4f46230306412ff5c0f5e85439ee5136f0@testnet-seed.pryzm.zone:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.pryzm/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.pryzm/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.pryzm/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.pryzm/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.pryzm/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.pryzm/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${PRYZM_PORT}658%g;\ns%:26657%:${PRYZM_PORT}657%g;\ns%:6060%:${PRYZM_PORT}060%g;\ns%:26656%:${PRYZM_PORT}656%g;\ns%:26660%:${PRYZM_PORT}660%g\n" $HOME/.pryzm/config/config.toml\nsed -i.bak -e "\ns%:1317%:${PRYZM_PORT}317%g; \ns%:8080%:${PRYZM_PORT}080%g; \ns%:9090%:${PRYZM_PORT}090%g; \ns%:9091%:${PRYZM_PORT}091%g\n" $HOME/.pryzm/config/app.toml\nsed -i.bak -e "s%:26657%:${PRYZM_PORT}657%g" $HOME/.pryzm/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${PRYZM_PORT}656\\"|g" ~/.pryzm/config/config.toml > ~/.pryzm/config/config.toml.tmp\nmv ~/.pryzm/config/config.toml.tmp  ~/.pryzm/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/pryzmd.service > /dev/null << EOF\n[Unit]\nDescription=pryzmd\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which pryzmd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,s.jsx)(n.h2,{id:"enabling-the-service",children:"Enabling the Service"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable pryzmd\n"})}),"\n",(0,s.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"journalctl -u pryzmd -f -o cat\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,s.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,s.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,s.jsxs)(n.p,{children:["Unless we get a ",(0,s.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pryzmd status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,s.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,s.jsxs)(n.p,{children:["We do not change the ",(0,s.jsx)(n.code,{children:"$PRYZM_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pryzmd keys add $PRYZM_WALLET\n"})}),"\n",(0,s.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pryzmd keys add $PRYZM_WALLET --recover\n"})}),"\n",(0,s.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,s.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PRYZM_WALLET_ADDRESS=$(pryzmd keys show $PRYZM_WALLET -a)\nPRYZM_VALOPER_ADDRESS=$(pryzmd keys show $PRYZM_WALLET --bech val -a)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"echo 'export PRYZM_WALLET_ADDRESS='${PRYZM_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export PRYZM_VALOPER_ADDRESS='${PRYZM_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,s.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pryzmd query bank balances $PRYZM_WALLET_ADDRESS\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,s.jsx)(n.strong,{children:"If the synchronization is completed, we proceed to the following step."})]}),"\n",(0,s.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,s.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"identity"})," where it says ",(0,s.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,s.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,s.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"website"})," where it says ",(0,s.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'pryzmd tx staking create-validator \\\n--amount=490000000000000000000upryzm \\\n--pubkey=$(pryzmd tendermint show-validator) \\\n--moniker=$PRYZM_NODENAME \\\n--chain-id=$PRYZM_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25upryzm \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$PRYZM_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,s.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"systemctl stop pryzmd && \\\nsystemctl disable pryzmd && \\\nrm /etc/systemd/system/pryzmd.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm .pryzm -rf && \\\nrm $(which pryzmd) -rf\nsed -i '/PRYZM_/d' ~/.bash_profile \n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9625:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Pryzm-Service-Cover-8d456b09af5439e35eecd24f9b431fe8.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(7294);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);