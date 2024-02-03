"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3960],{3942:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(5893),l=i(1151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Uptick-Service-Cover.jpg",keywords:["uptick","network","NFT","web3","installation","snapshot","statesync","update"]},a="Installation",o={id:"Mainnet/Cosmos-Ecosystem/uptick-network/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Mainnet/Cosmos-Ecosystem/uptick-network/installation.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/uptick-network",slug:"/Mainnet/Cosmos-Ecosystem/uptick-network/installation",permalink:"/docs/Mainnet/Cosmos-Ecosystem/uptick-network/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Cosmos-Ecosystem/uptick-network/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Uptick-Service-Cover.jpg",keywords:["uptick","network","NFT","web3","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Uptick Network",permalink:"/docs/Mainnet/Cosmos-Ecosystem/uptick-network/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Mainnet/Cosmos-Ecosystem/uptick-network/snapshot"}},r={image:i(5836).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Uptick",id:"installing-uptick",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling the Service",id:"enabling-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,t.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$UPTICK_NODENAME"})," your validator name"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$UPTICK_WALLET"})," your wallet name"]}),"\n",(0,t.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,t.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'echo "export UPTICK_NODENAME=$UPTICK_NODENAME"  >> $HOME/.bash_profile\necho "export UPTICK_WALLET=$UPTICK_WALLET" >> $HOME/.bash_profile\necho "export UPTICK_PORT=11" >> $HOME/.bash_profile\necho "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsxs)(n.p,{children:["Let's assume that your Node (",(0,t.jsx)(n.code,{children:"UPTICK_NODENAME"}),") and Wallet (",(0,t.jsx)(n.code,{children:"UPTICK_WALLET"}),") name is ",(0,t.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,t.jsx)(n.code,{children:"UPTICK_PORT"}),") will be ",(0,t.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'echo "export UPTICK_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export UPTICK_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export UPTICK_PORT=16" >> $HOME/.bash_profile\necho "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installing-uptick",children:"Installing Uptick"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/UptickNetwork/uptick.git\ncd uptick\ngit checkout v0.2.17\nmake install\nuptickd version\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The version output will be ",(0,t.jsx)(n.code,{children:"v0.2.17"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,t.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'uptickd config keyring-backend test\nuptickd config chain-id $UPTICK_CHAIN_ID\nuptickd init --chain-id $UPTICK_CHAIN_ID $UPTICK_NODENAME\n\n# Copying the Genesis File\nwget  -O $HOME/.uptickd/config/genesis.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25auptick"|g\' $HOME/.uptickd/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.uptickd/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.uptickd/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.uptickd/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.uptickd/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.uptickd/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.uptickd/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.uptickd/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${UPTICK_PORT}658%g;\ns%:26657%:${UPTICK_PORT}657%g;\ns%:6060%:${UPTICK_PORT}060%g;\ns%:26656%:${UPTICK_PORT}656%g;\ns%:26660%:${UPTICK_PORT}660%g\n" $HOME/.uptickd/config/config.toml\nsed -i.bak -e "\ns%:1317%:${UPTICK_PORT}317%g; \ns%:8080%:${UPTICK_PORT}080%g; \ns%:9090%:${UPTICK_PORT}090%g; \ns%:9091%:${UPTICK_PORT}091%g\n" $HOME/.empowerchain/config/app.toml\nsed -i.bak -e "s%:26657%:${UPTICK_PORT}657%g" $HOME/.uptickd/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${UPTICK_PORT}656\\"|g" ~/.uptickd/config/config.toml > ~/.uptickd/config/config.toml.tmp\nmv ~/.uptickd/config/config.toml.tmp  ~/.uptickd/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/uptickd.service > /dev/null << EOF\n[Unit]\nDescription=Acred Node\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which uptickd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enabling-the-service",children:"Enabling the Service"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable uptickd\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"journalctl -u uptickd -f -o cat\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,t.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,t.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"uptickd status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,t.jsxs)(n.p,{children:["We do not change the ",(0,t.jsx)(n.code,{children:"$UPTICK_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"uptickd keys add $UPTICK_WALLET\n"})}),"\n",(0,t.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"uptickd keys add $UPTICK_WALLET --recover\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,t.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"UPTICK_WALLET_ADDRESS=$(uptickd keys show $UPTICK_WALLET -a)\nUPTICK_VALOPER_ADDRESS=$(uptickd keys show $UPTICK_WALLET --bech val -a)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"echo 'export UPTICK_WALLET_ADDRESS='${UPTICK_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export UPTICK_VALOPER_ADDRESS='${UPTICK_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,t.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"uptickd query bank balances $UPTICK_WALLET_ADDRESS\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,t.jsx)(n.strong,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})]}),"\n",(0,t.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,t.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"identity"})," where it says ",(0,t.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,t.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,t.jsx)(n.code,{children:"Always forward with the Anatolian Team."}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"website"})," where it says ",(0,t.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'uptickd tx staking create-validator \\\n--amount=490000000000000000000auptick \\\n--pubkey=$(uptickd tendermint show-validator) \\\n--moniker=$UPTICK_NODENAME \\\n--chain-id=$UPTICK_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25auptick \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$UPTICK_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,t.jsx)(n.h3,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl stop uptickd && \\\nsystemctl disable uptickd && \\\nrm /etc/systemd/system/uptickd.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .uptickd uptick && \\\nrm -rf $(which uptickd)\nsed -i '/UPTICK_/d' ~/.bash_profile\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u200b"})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5836:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Uptick-Service-Cover-8bbf3ec5bb2efda73aed3031c3c6278d.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(7294);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);