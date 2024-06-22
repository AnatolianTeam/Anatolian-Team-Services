"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3009],{87460:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=i(85893),t=i(11151);const l={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","chain","installation","snapshot","statesync","update"]},s="Installation",r={id:"Testnet Archive/initia/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet Archive/initia/installation.md",sourceDirName:"Testnet Archive/initia",slug:"/Testnet Archive/initia/installation",permalink:"/docs/Testnet Archive/initia/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/initia/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Initia",permalink:"/docs/Testnet Archive/initia/"},next:{title:"\ud83d\udcbe Oracle",permalink:"/docs/Testnet Archive/initia/oracle"}},o={image:i(18879).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Initia",id:"installing-initia",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Faucet",id:"faucet",level:3},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.22.2\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"If your server is ARM, use the following code."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.22.2\"\nwget \"https://golang.org/dl/go$ver.linux-arm64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-arm64.tar.gz\"\nrm -rf \"go$ver.linux-arm64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,a.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$INITIA_NODENAME"})," your validator name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$INITIA_WALLET"})," your wallet name"]}),"\n",(0,a.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,a.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export INITIA_NODENAME=$INITIA_NODENAME"  >> $HOME/.bash_profile\necho "export INITIA_WALLET=$INITIA_WALLET" >> $HOME/.bash_profile\necho "export INITIA_PORT=11" >> $HOME/.bash_profile\necho "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,a.jsxs)(n.p,{children:["Let's assume that your Node (",(0,a.jsx)(n.code,{children:"INITIA_NODENAME"}),") and Wallet (",(0,a.jsx)(n.code,{children:"INITIA_WALLET"}),") name is ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,a.jsx)(n.code,{children:"INITIA_PORT"}),") will be ",(0,a.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo \'export INITIA_NODENAME="Anatolian-Guide"\' >> $HOME/.bash_profile\necho "export INITIA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export INITIA_PORT=16" >> $HOME/.bash_profile\necho "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-initia",children:"Installing Initia"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $HOME\ngit clone https://github.com/initia-labs/initia.git\ncd initia\ngit checkout v0.2.15\nmake install\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,a.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'initiad config set client chain-id $INITIA_CHAIN_ID\ninitiad config set client keyring-backend test\ninitiad init --chain-id $INITIA_CHAIN_ID $INITIA_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://testnet.anatolianteam.com/initia/genesis.json -O $HOME/.initia/config/genesis.json\nwget https://testnet.anatolianteam.com/initia/addrbook.json -O $HOME/.initia/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|minimum-gas-prices =.*|minimum-gas-prices = "0.15uinit,0.01uusdc"|g\' $HOME/.initia/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.initia/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS="2eaa272622d1ba6796100ab39f58c75d458b9dbc@34.142.181.82:26656,c28827cb96c14c905b127b92065a3fb4cd77d7f6@testnet-seeds.whispernode.com:25756"\nPEERS="aee7083ab11910ba3f1b8126d1b3728f13f54943@initia-testnet-peer.itrocket.net:11656,d17d2d48b4741b21b16cba7aa5a0496151dec2e3@65.109.37.125:26656,767fdcfdb0998209834b929c59a2b57d474cc496@207.148.114.112:26656,72b8b9f0e826fa9be3f5ab55f56e67d409f0cef8@185.197.250.199:51656,9f0ae0790fae9a2d327d8d6fe767b73eb8aa5c48@176.126.87.65:22656,e43ce5800e48df7917942191c95276cb88bdd699@212.90.121.127:51656,7317b8c930c52a8183590166a7b5c3599f40d4db@185.187.170.186:26656,b79874ca9607e5d4a3fd730617cca863ff9f590e@5.78.116.66:26656,b8fcc8886246b3bd6058583a8017a7f987d7437e@185.182.186.46:26656,a45314423c15f024ff850fad7bd031168d937931@162.62.219.188:26656,00bf6d94bc8bae9d75c29a9bb198eaa401d34f4d@95.216.216.74:15656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.initia/config/config.toml\nsed -i \'s/max_num_inbound_peers =.*/max_num_inbound_peers = 150/g\' $HOME/.initia/config/config.toml\nsed -i \'s/max_num_outbound_peers =.*/max_num_outbound_peers = 150/g\' $HOME/.initia/config/config.toml\n\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.initia/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.initia/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.initia/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.initia/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.initia/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${INITIA_PORT}658%g;\ns%:26657%:${INITIA_PORT}657%g;\ns%:6060%:${INITIA_PORT}060%g;\ns%:26656%:${INITIA_PORT}656%g;\ns%:26660%:${INITIA_PORT}660%g\n" $HOME/.initia/config/config.toml\nsed -i.bak -e "\ns%:8545%:${INITIA_PORT}545%g;\ns%:8546%:${INITIA_PORT}546%g;\ns%:6065%:${INITIA_PORT}065%g;\ns%:1317%:${INITIA_PORT}317%g; \ns%:8080%:${INITIA_PORT}080%g; \ns%:9090%:${INITIA_PORT}090%g; \ns%:9091%:${INITIA_PORT}091%g\n" $HOME/.initia/config/app.toml\nsed -i.bak -e "s%:26657%:${INITIA_PORT}657%g" $HOME/.initia/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${INITIA_PORT}656\\"|g" ~/.initia/config/config.toml > ~/.initia/config/config.toml.tmp\nmv ~/.initia/config/config.toml.tmp  ~/.initia/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/initiad.service > /dev/null << EOF\n[Unit]\nDescription=Initia Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which initiad) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable initiad\nsystemctl start initiad\n"})}),"\n",(0,a.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u initiad -f -o cat\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,a.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,a.jsxs)(n.p,{children:["Unless we get a ",(0,a.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad status 2>&1 | jq .sync_info\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad status 2>&1 | jq -r .sync_info.catching_up\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,a.jsxs)(n.p,{children:["We do not change the ",(0,a.jsx)(n.code,{children:"$INITIA_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad keys add $INITIA_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad keys add $INITIA_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,a.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"INITIA_WALLET_ADDRESS=$(initiad keys show $INITIA_WALLET -a)\nINITIA_VALOPER_ADDRESS=$(initiad keys show $INITIA_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export INITIA_WALLET_ADDRESS='${INITIA_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export INITIA_VALOPER_ADDRESS='${INITIA_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://faucet.testnet.initia.xyz",children:"https://faucet.testnet.initia.xyz"})}),"\n",(0,a.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"initiad query bank balances $INITIA_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,a.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,a.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"})," where it says ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"})," where it says ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'initiad tx mstaking create-validator \\\n--amount=25000000uinit \\\n--pubkey=$(initiad tendermint show-validator) \\\n--moniker=$INITIA_NODENAME \\\n--chain-id=$INITIA_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--gas-prices=7uinit \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$INITIA_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,a.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop initiad && \\\nsystemctl disable initiad && \\\nrm /etc/systemd/system/initiad.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .initia initia && \\\nrm -rf $(which initiad)\nsed -i '/INITIA_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},18879:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/Initia-Service-Cover-3cd644af547f7267f9f96f1cf35e856b.jpg"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var a=i(67294);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);