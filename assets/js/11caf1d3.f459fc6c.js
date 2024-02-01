"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8822],{7978:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(5893),l=a(1151);const s={title:"\ud83d\udcbe Installation",image:"./img/Entangle-Service-Cover.jpg",keywords:["entangle","installation","snapshot","statesync","update"]},i="Installation",o={id:"Testnet/Cosmos-Ecosystem/entangle/installation",title:"\ud83d\udcbe Installation",description:"Updating the System",source:"@site/docs/Testnet/Cosmos-Ecosystem/entangle/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/entangle",slug:"/Testnet/Cosmos-Ecosystem/entangle/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/entangle/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/entangle/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",image:"./img/Entangle-Service-Cover.jpg",keywords:["entangle","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"entangle Network",permalink:"/docs/Testnet/Cosmos-Ecosystem/entangle/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/entangle/snapshot"}},r={image:a(735).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Entangle",id:"installing-entangle",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Learn EIP-55 Address",id:"learn-eip-55-address",level:3},{value:"Faucet",id:"faucet",level:4},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,t.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$ENT_NODENAME"})," your validator name"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$ENT_WALLET"})," your wallet name"]}),"\n",(0,t.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,t.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'echo "export ENT_NODENAME=$ENT_NODENAME"  >> $HOME/.bash_profile\necho "export ENT_WALLET=$ENT_WALLET" >> $HOME/.bash_profile\necho "export ENT_PORT=16" >> $HOME/.bash_profile\necho "export ENT_CHAIN_ID=entangle_33133-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsxs)(n.p,{children:["Let's assume that your Node (",(0,t.jsx)(n.code,{children:"ENT_NODENAME"}),") and Wallet (",(0,t.jsx)(n.code,{children:"ENT_WALLET"}),") name is ",(0,t.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,t.jsx)(n.code,{children:"ENT_PORT"}),") will be ",(0,t.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'echo "export ENT_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export ENT_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export ENT_PORT=16" >> $HOME/.bash_profile\necho "export ENT_CHAIN_ID=entangle_33133-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installing-entangle",children:"Installing Entangle"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd $HOME\ncd $HOME\ngit clone https://github.com/Entangle-Protocol/entangle-blockchain\ncd entangle-blockchain\nmake install\nentangled version\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The version output will be ",(0,t.jsx)(n.code,{children:"v0.4.7-rc6"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,t.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'entangled config keyring-backend test\nentangled config chain-id $ENT_CHAIN_ID\nentangled init --chain-id $ENT_CHAIN_ID $ENT_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://testnet.anatolianteam.com/entangle/genesis.json -O $HOME/.entangled/config/genesis.json\nwget https://testnet.anatolianteam.com/entangle/addrbook.json -O $HOME/.entangled/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001uNGL "|g\' $HOME/.entangled/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.entangled/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.entangled/config/config.toml\n*\nSEEDS="b65b6270a053b8a5b5bc037aa90d5790fcc555fa@entangle-testnet-seed.itrocket.net:29656"\nPEERS="fe8c954ed37bfc3e5fc5eaf19b861d8a5947b2f5@entangle-testnet-peer.itrocket.net:29656,1786a89fc8ae055b775276c8f64197653aa9efa0@159.203.128.93:26656,7bff324a17426a00731f425ae29fe6ef05eebbac@213.239.217.52:33656,0188b9ed89f9aa60cf3691fbe336e0a36fc6bb9c@[2a02:4780:d:bec4::1]:26656,b02c2619b81356ce5ee0c0c832ab9f96cec46e87@8.217.49.46:26656,f7faae4bb64024ca0d7eb81f525cf33ea7d7e94f@89.58.18.47:27464,4895c46a55c7991f998277bd2f8ab45bcaba77cd@167.86.84.79:26656,68b0732e1a6ea2c37dbe4085b43b1a7c8d9bf8c6@185.209.223.103:14656,2cd6d17b7fcf2930684ba9332f3cae8219d1f1ea@46.250.236.48:26656,3d15d612fad5ffa14dce2dc99d29d651df399db2@144.217.68.182:17956,a24ccb1bcfdb940b640a9288021841a3386b6c0f@65.109.68.87:23656"\nsed -i -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/; s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.entangled/config/config.toml\n*\n\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.entangled/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.entangled/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.entangled/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.entangled/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.entangled/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${ENT_PORT}658%g;\ns%:26657%:${ENT_PORT}657%g;\ns%:6060%:${ENT_PORT}060%g;\ns%:26656%:${ENT_PORT}656%g;\ns%:26660%:${ENT_PORT}660%g\n" $HOME/.entangled/config/config.toml\nsed -i.bak -e "\ns%:1317%:${ENT_PORT}317%g; \ns%:8080%:${ENT_PORT}080%g; \ns%:9090%:${ENT_PORT}090%g; \ns%:9091%:${ENT_PORT}091%g\ns%:8545%:${ENT_PORT}545%g;\ns%:8546%:${ENT_PORT}546%g\n" $HOME/.entangled/config/app.toml\nsed -i.bak -e "s%:26657%:${ENT_PORT}657%g" $HOME/.entangled/config/client.toml\n\n\n\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${ENT_PORT}656\\"|g" ~/.entangled/config/config.toml > ~/.entangled/config/config.toml.tmp\nmv ~/.entangled/config/config.toml.tmp  ~/.entangled/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/entangled.service > /dev/null << EOF\n[Unit]\nDescription=Entangle Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which entangled) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable entangled\nsystemctl start entangled\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"journalctl -u entangled -f -o cat\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,t.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,t.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,t.jsxs)(n.p,{children:["Unless we get a ",(0,t.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"entangled status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,t.jsxs)(n.p,{children:["We do not change the ",(0,t.jsx)(n.code,{children:"$ENT_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"entangled keys add $ENT_WALLET\n"})}),"\n",(0,t.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"entangled keys add $ENT_WALLET --recover\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,t.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ENT_WALLET_ADDRESS=$(entangled keys show $ENT_WALLET -a)\nENT_VALOPER_ADDRESS=$(entangled keys show $ENT_WALLET --bech val -a)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"echo 'export ENT_WALLET_ADDRESS='${ENT_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export ENT_VALOPER_ADDRESS='${ENT_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,t.jsx)(n.h3,{id:"learn-eip-55-address",children:"Learn EIP-55 Address"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"entangled debug addr $ENT_WALLET_ADDRESS\n"})}),"\n",(0,t.jsx)(n.h4,{id:"faucet",children:"Faucet"}),"\n",(0,t.jsxs)(n.p,{children:["Request tokens by sending a message to the ",(0,t.jsx)(n.code,{children:"#\ud83d\udeb0\u2503testnet-faucet"})," channel on the Discord server as follows."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"$request EIP-55_Address"})}),"\n",(0,t.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entangled query bank balances $ENT_WALLET_ADDRESS\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,t.jsx)(n.strong,{children:"If the synchronization is completed, we proceed to the following step."})]}),"\n",(0,t.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,t.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"identity"})," where it says ",(0,t.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,t.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,t.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"website"})," where it says ",(0,t.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'entangled tx staking create-validator \\\n--amount=940000uNGL  \\\n--pubkey=$(entangled tendermint show-validator) \\\n--moniker=$ENT_NODENAME \\\n--chain-id=$ENT_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25uNGL  \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$ENT_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,t.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl stop entangled && \\\nsystemctl disable entangled && \\\nrm /etc/systemd/system/entangled.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .entangled entangle-blockchain && \\\nrm -rf $(which entangled)\nsed -i '/ENT_/d' ~/.bash_profile\n"})})]})}function g(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},735:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Entangle-Service-Cover-05653db1b0916306bd54edf4bb9d21e1.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(7294);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);