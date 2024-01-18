"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7082],{8187:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=a(5893),s=a(1151);const t={title:"\ud83d\udcbe Installation",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","card game","trade","installation","snapshot","statesync","update"]},l="Installation",r={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/installation",title:"\ud83d\udcbe Installation",description:"Updating the System",source:"@site/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","card game","trade","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Crowd Control",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot"}},o={image:a(4031).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Cardchain",id:"installing-cardchain",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,i.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$CROWD_NODENAME"})," your validator name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$CROWD_WALLET"})," your wallet name"]}),"\n",(0,i.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,i.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export CROWD_NODENAME=$CROWD_NODENAME"  >> $HOME/.bash_profile\necho "export CROWD_WALLET=$CROWD_WALLET" >> $HOME/.bash_profile\necho "export CROWD_PORT=11" >> $HOME/.bash_profile\necho "export CROWD_CHAIN_ID=cardtestnet-8" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(n.p,{children:["Let's assume that your Node (",(0,i.jsx)(n.code,{children:"CROWD_NODENAME"}),") and Wallet (",(0,i.jsx)(n.code,{children:"CROWD_WALLET"}),") name is ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,i.jsx)(n.code,{children:"CROWD_PORT"}),") will be ",(0,i.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export CROWD_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export CROWD_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export CROWD_PORT=16" >> $HOME/.bash_profile\necho "export CROWD_CHAIN_ID=cardtestnet-8" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-cardchain",children:"Installing Cardchain"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd $HOME\ngit clone https://github.com/DecentralCardGame/Cardchain\nwget -O Cardchaind https://github.com/DecentralCardGame/Cardchain/releases/download/v0.13.0/Cardchaind\nchmod +x Cardchaind\nmv $HOME/Cardchaind /usr/local/bin\nCardchaind version\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The version output will be ",(0,i.jsx)(n.code,{children:"0.13.0"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,i.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Cardchaind config keyring-backend test\nCardchaind config chain-id $CROWD_CHAIN_ID\nCardchaind init --chain-id $CROWD_CHAIN_ID $CROWD_NODENAME\n\n# Copying the Genesis File\nwget http://45.136.28.158:3000/genesis.json -O $HOME/.Cardchain/config/genesis.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0ubpf"|g\' $HOME/.Cardchain/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.Cardchain/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.Cardchain/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.Cardchain/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.Cardchain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.Cardchain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.Cardchain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.Cardchain/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${CROWD_PORT}658%g;\ns%:26657%:${CROWD_PORT}657%g;\ns%:6060%:${CROWD_PORT}060%g;\ns%:26656%:${CROWD_PORT}656%g;\ns%:26660%:${CROWD_PORT}660%g\n" $HOME/.Cardchain/config/config.toml\nsed -i.bak -e "\ns%:1317%:${CROWD_PORT}317%g; \ns%:8080%:${CROWD_PORT}080%g; \ns%:9090%:${CROWD_PORT}090%g; \ns%:9091%:${CROWD_PORT}091%g\n" $HOME/.Cardchain/config/app.toml\nsed -i.bak -e "s%:26657%:${CROWD_PORT}657%g" $HOME/.Cardchain/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${CROWD_PORT}656\\"|g" ~/.Cardchain/config/config.toml > ~/.Cardchain/config/config.toml.tmp\nmv ~/.Cardchain/config/config.toml.tmp  ~/.Cardchain/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/Cardchaind.service > /dev/null << EOF\n[Unit]\nDescription=Cardchaind\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which Cardchaind) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable Cardchaind\nsystemctl start Cardchaind\n"})}),"\n",(0,i.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u Cardchaind -f -o cat\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,i.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,i.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["Unless we get a ",(0,i.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Cardchaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,i.jsxs)(n.p,{children:["We do not change the ",(0,i.jsx)(n.code,{children:"$CROWD_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Cardchaind keys add $CROWD_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Cardchaind keys add $CROWD_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,i.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"CROWD_WALLET_ADDRESS=$(Cardchaind keys show $CROWD_WALLET -a)\nCROWD_VALOPER_ADDRESS=$(Cardchaind keys show $CROWD_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export CROWD_WALLET_ADDRESS='${CROWD_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export CROWD_VALOPER_ADDRESS='${CROWD_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Cardchaind query bank balances $CROWD_WALLET_ADDRESS\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,i.jsx)(n.strong,{children:"If the synchronization is completed, we proceed to the following step."})]}),"\n",(0,i.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,i.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"})," where it says ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"})," where it says ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'Cardchaind tx staking create-validator \\\n--amount=490000000000000000000ubpf \\\n--pubkey=$(Cardchaind tendermint show-validator) \\\n--moniker=$CROWD_NODENAME \\\n--chain-id=$CROWD_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25ubpf \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$CROWD_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop Cardchaind && \\\nsystemctl disable Cardchaind && \\\nrm /etc/systemd/system/Cardchaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .Cardchain Cardchain && \\\nrm -rf $(which Cardchaind)\nsed -i '/CROWD_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4031:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/CC-Service-Cover-af316c761b2ff21956661566d1e7feff.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>l});var i=a(7294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);