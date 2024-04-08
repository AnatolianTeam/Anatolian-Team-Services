"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4187],{9912:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(5893),t=s(1151);const a={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","modular","chain","installation","snapshot","statesync","update"]},l="Installation",o={id:"Testnet/Cosmos-Ecosystem/0g/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet/Cosmos-Ecosystem/0g/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/0g/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","modular","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"0G",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/snapshot"}},r={image:s(3270).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing 0G Protocol",id:"installing-0g-protocol",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,i.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$0G_NODENAME"})," your validator name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$0G_WALLET"})," your wallet name"]}),"\n",(0,i.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,i.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export 0G_NODENAME=$0G_NODENAME"  >> $HOME/.bash_profile\necho "export 0G_WALLET=$0G_WALLET" >> $HOME/.bash_profile\necho "export 0G_PORT=11" >> $HOME/.bash_profile\necho "export 0G_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(n.p,{children:["Let's assume that your Node (",(0,i.jsx)(n.code,{children:"0G_NODENAME"}),") and Wallet (",(0,i.jsx)(n.code,{children:"0G_WALLET"}),") name is ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,i.jsx)(n.code,{children:"0G_PORT"}),") will be ",(0,i.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export 0G_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export 0G_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export 0G_PORT=16" >> $HOME/.bash_profile\necho "export 0G_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-0g-protocol",children:"Installing 0G Protocol"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/0glabs/0g-evmos.git\ncd 0g-evmos\ngit checkout v1.0.0-testnet\nmake install\nevmosd version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,i.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'evmosd config chain-id $0G_CHAIN_ID\nevmosd config keyring-backend test\nevmosd init --chain-id $0G_CHAIN_ID $0G_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://github.com/0glabs/0g-evmos/releases/download/v1.0.0-testnet/genesis.json -O $HOME/.evmosd/config/genesis.json\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005aevmos "|g\' $HOME/.evmosd/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.evmosd/config/config.toml\n\n# Set up SEED and PEERS\nPEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326"\nSEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.evmosd/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.evmosd/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.evmosd/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.evmosd/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.evmosd/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.evmosd/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${0G_PORT}658%g;\ns%:26657%:${0G_PORT}657%g;\ns%:6060%:${0G_PORT}060%g;\ns%:26656%:${0G_PORT}656%g;\ns%:26660%:${0G_PORT}660%g\n" $HOME/.evmosd/config/config.toml\nsed -i.bak -e "\ns%:1317%:${0G_PORT}317%g; \ns%:8080%:${0G_PORT}080%g; \ns%:9090%:${0G_PORT}090%g; \ns%:9091%:${0G_PORT}091%g\n" $HOME/.evmosd/config/app.toml\nsed -i.bak -e "s%:26657%:${0G_PORT}657%g" $HOME/.evmosd/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${0G_PORT}656\\"|g" ~/.evmosd/config/config.toml > ~/.evmosd/config/config.toml.tmp\nmv ~/.evmosd/config/config.toml.tmp  ~/.evmosd/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/evmosd.service > /dev/null << EOF\n[Unit]\nDescription=0G Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which evmosd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable evmosd\nsystemctl start evmosd\n"})}),"\n",(0,i.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u evmosd -f -o cat\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,i.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["Unless we get a ",(0,i.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"evmosd status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,i.jsxs)(n.p,{children:["We do not change the ",(0,i.jsx)(n.code,{children:"$0G_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"evmosd keys add $0G_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"evmosd keys add $0G_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,i.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0G_WALLET_ADDRESS=$(evmosd keys show $0G_WALLET -a)\n0G_VALOPER_ADDRESS=$(evmosd keys show $0G_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export 0G_WALLET_ADDRESS='${0G_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export 0G_VALOPER_ADDRESS='${0G_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"evmosd query bank balances $0G_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,i.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,i.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"})," where it says ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"})," where it says ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'evmosd tx staking create-validator \\\n--amount=10000000000000000aevmos \\\n--pubkey=$(evmosd tendermint show-validator) \\\n--moniker=$0G_NODENAME \\\n--chain-id=$0G_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25aevmos  \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$0G_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\udc06" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop evmosd && \\\nsystemctl disable evmosd && \\\nrm /etc/systemd/system/evmosd.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .evmosd 0g-evmos && \\\nrm -rf $(which evmosd)\nsed -i '/0G_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3270:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/0G-Service-Cover-98960b183eb86dd7d944869365d34be6.jpg"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);