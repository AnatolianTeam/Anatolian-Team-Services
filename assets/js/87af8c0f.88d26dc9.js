"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[878],{3015:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var l=a(5893),i=a(1151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Arable-Service-Cover.jpg",keywords:["arable","protocol","acre","network","installation","snapshot","statesync","update"]},r="Installation",t={id:"Mainnet/Cosmos-Ecosystem/arable-protocol/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/installation.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/arable-protocol",slug:"/Mainnet/Cosmos-Ecosystem/arable-protocol/installation",permalink:"/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Arable-Service-Cover.jpg",keywords:["arable","protocol","acre","network","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Arable Protocol",permalink:"/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/snapshot"}},o={image:a(3852).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Arable",id:"installing-arable",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling the Service",id:"enabling-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,l.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"$ACRE_NODENAME"})," your validator name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"$ACRE_WALLET"})," your wallet name"]}),"\n",(0,l.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,l.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'echo "export ACRE_NODENAME=$ACRE_NODENAME"  >> $HOME/.bash_profile\necho "export ACRE_WALLET=$ACRE_WALLET" >> $HOME/.bash_profile\necho "export ACRE_PORT=11" >> $HOME/.bash_profile\necho "export ACRE_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,l.jsxs)(n.p,{children:["Let's assume that your Node (",(0,l.jsx)(n.code,{children:"ACRE_NODENAME"}),") and Wallet (",(0,l.jsx)(n.code,{children:"ACRE_WALLET"}),") name is ",(0,l.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,l.jsx)(n.code,{children:"ACRE_PORT"}),") will be ",(0,l.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'echo "export ACRE_NODENAME=Mehmet"  >> $HOME/.bash_profile\necho "export ACRE_WALLET=Mehmet" >> $HOME/.bash_profile\necho "export ACRE_PORT=16" >> $HOME/.bash_profile\necho "export ACRE_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-arable",children:"Installing Arable"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/ArableProtocol/acrechain.git\ncd acrechain\ngit checkout v1.2.0\nmake install\ncd\nacred version\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The version output will be ",(0,l.jsx)(n.code,{children:"v1.2.0"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,l.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'acred config keyring-backend test\nacred config chain-id $ACRE_CHAIN_ID\nacred init --chain-id $ACRE_CHAIN_ID $ACRE_NODENAME\n\n# Copying the Genesis File\nwget  -O $HOME/.acred/config/genesis.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25aacre"|g\' $HOME/.acred/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.acred/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.babylond/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.acred/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.acred/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.acred/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.acred/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.acred/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "s%^proxy_app = \\"tcp://127.0.0.1:26658\\"%proxy_app = \\"tcp://127.0.0.1:${ACRE_PORT}658\\"%; s%^laddr = \\"tcp://127.0.0.1:26657\\"%laddr = \\"tcp://127.0.0.1:${ACRE_PORT}657\\"%; s%^pprof_laddr = \\"localhost:6060\\"%pprof_laddr = \\"localhost:${ACRE_PORT}060\\"%; s%^laddr = \\"tcp://0.0.0.0:26656\\"%laddr = \\"tcp://0.0.0.0:${ACRE_PORT}656\\"%; s%^prometheus_listen_addr = \\":26660\\"%prometheus_listen_addr = \\":${ACRE_PORT}660\\"%" $HOME/.acred/config/config.toml\nsed -i.bak -e "s%^address = \\"tcp://0.0.0.0:1317\\"%address = \\"tcp://0.0.0.0:${ACRE_PORT}317\\"%; s%^address = \\":8080\\"%address = \\":${ACRE_PORT}080\\"%; s%^address = \\"0.0.0.0:8545\\"%address = \\"0.0.0.0:${ACRE_PORT}545\\"%; s%^ws-address = \\"0.0.0.0:8546\\"%ws-address = \\"0.0.0.0:${ACRE_PORT}546\\"%; s%^address = \\"0.0.0.0:9090\\"%address = \\"0.0.0.0:${ACRE_PORT}090\\"%; s%^address = \\"0.0.0.0:9091\\"%address = \\"0.0.0.0:${ACRE_PORT}091\\"%" $HOME/.acred/config/app.toml\nsed -i.bak -e "s%^node = \\"tcp://localhost:26657\\"%node = \\"tcp://localhost:${ACRE_PORT}657\\"%" $HOME/.acred/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${ACRE_PORT}656\\"|g" ~/.acred/config/config.toml > ~/.acred/config/config.toml.tmp\nmv ~/.acred/config/config.toml.tmp  ~/.acred/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/acred.service > /dev/null << EOF\n[Unit]\nDescription=Acred Node\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which acred) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,l.jsx)(n.h2,{id:"enabling-the-service",children:"Enabling the Service"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable acred\n"})}),"\n",(0,l.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"journalctl -u acred -f -o cat\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,l.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,l.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"acred status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,l.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,l.jsxs)(n.p,{children:["We do not change the ",(0,l.jsx)(n.code,{children:"$ACRE_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"acred keys add $ACRE_WALLET\n"})}),"\n",(0,l.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"acred keys add $ACRE_WALLET --recover\n"})}),"\n",(0,l.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,l.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ACRE_WALLET_ADDRESS=$(acred keys show $ACRE_WALLET -a)\nACRE_VALOPER_ADDRESS=$(acred keys show $ACRE_WALLET --bech val -a)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"echo 'export ACRE_WALLET_ADDRESS='${ACRE_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export ACRE_VALOPER_ADDRESS='${ACRE_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,l.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"acred query bank balances $ACRE_WALLET_ADDRESS\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,l.jsx)(n.strong,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})]}),"\n",(0,l.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,l.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"identity"})," where it says ",(0,l.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,l.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,l.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"website"})," where it says ",(0,l.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'acred tx staking create-validator \\\n--amount=490000000000000000000aacre \\\n--pubkey=$(acred tendermint show-validator) \\\n--moniker=$ACRE_NODENAME \\\n--chain-id=$ACRE_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25aacre \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$ACRE_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,l.jsx)(n.h3,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"systemctl stop acred && \\\nsystemctl disable acred && \\\nrm /etc/systemd/system/acred.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .acred acrechain && \\\nrm -rf $(which acred)\nsed -i '/ACRE_/d' ~/.bash_profile\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u200b"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},3852:(e,n,a)=>{a.d(n,{Z:()=>l});const l=a.p+"assets/images/Arable-Service-Cover-6930ab1aa833e7f010c37f09b56555c7.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>r});var l=a(7294);const i={},s=l.createContext(i);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);