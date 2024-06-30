"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[826],{6062:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var a=i(85893),t=i(11151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","chain","installation","snapshot","statesync","update"]},l="Installation",o={id:"Testnet/Cosmos-Ecosystem/airchains/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet/Cosmos-Ecosystem/airchains/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/airchains",slug:"/Testnet/Cosmos-Ecosystem/airchains/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/airchains/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/airchains/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd17 EVMRollapp",permalink:"/docs/Testnet/Cosmos-Ecosystem/airchains/EVMRollapp"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/airchains/snapshot"}},c={image:i(5638).Z},r=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Airchains",id:"installing-airchains",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Faucet",id:"faucet",level:3},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Creating the validator.json File",id:"creating-the-validatorjson-file",level:3},{value:"Creating Validator Using the json File",id:"creating-validator-using-the-json-file",level:3},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.22.2\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,a.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$AIRCHAINS_NODENAME"})," your validator name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$AIRCHAINS_WALLET"})," your wallet name"]}),"\n",(0,a.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,a.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export AIRCHAINS_NODENAME=$AIRCHAINS_NODENAME"  >> $HOME/.bash_profile\necho "export AIRCHAINS_WALLET=$AIRCHAINS_WALLET" >> $HOME/.bash_profile\necho "export AIRCHAINS_PORT=11" >> $HOME/.bash_profile\necho "export AIRCHAINS_CHAIN_ID=junction" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,a.jsxs)(n.p,{children:["Let's assume that your Node (",(0,a.jsx)(n.code,{children:"AIRCHAINS_NODENAME"}),") and Wallet (",(0,a.jsx)(n.code,{children:"AIRCHAINS_WALLET"}),") name is ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,a.jsx)(n.code,{children:"AIRCHAINS_PORT"}),") will be ",(0,a.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export AIRCHAINS_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export AIRCHAINS_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export AIRCHAINS_PORT=16" >> $HOME/.bash_profile\necho "export AIRCHAINS_CHAIN_ID=junction" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-airchains",children:"Installing Airchains"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $HOME\nwget -O junctiond https://github.com/airchains-network/junction/releases/download/v0.1.0/junctiond\nchmod +x junctiond\nmv junctiond $HOME/go/bin/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,a.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'junctiond config set client chain-id $AIRCHAINS_CHAIN_ID\njunctiond config set client keyring-backend test\njunctiond init --chain-id $AIRCHAINS_CHAIN_ID $AIRCHAINS_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://testnet.anatolianteam.com/airchains/genesis.json -O $HOME/.junction/config/genesis.json\nwget https://testnet.anatolianteam.com/airchains/addrbook.json -O $HOME/.junction/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|minimum-gas-prices =.*|minimum-gas-prices = "0.001amf"|g\' $HOME/.junction/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.junction/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nPEERS="e78a440c57576f3743e6aa9db00438462980927e@5.161.199.115:26656,61e609631e8be6e04c43ed3d7bfef23c064dc912@[2a01:4f8:221:26e0::2]:43456,f786dcc80601ddd33ba98c609795083ba418d740@158.220.119.11:43456,0b1159b05e940a611b275fe0006070439e5b6e69@[2a03:cfc0:8000:13::b910:277f]:13756,c8f6b1a795a6d9cd2ec39faf277163a9711fc81b@38.242.194.19:43456,552d2a5c3d9889444f123d740a20237c89711109@109.199.96.143:43456,cc27f4e54a78b950adaf46e5413f92f5d53d2212@209.126.86.186:43456,f5b69a02abeb3340ccd266f049ed6aabc7c0ea88@94.72.114.150:43456,db38d672f66df4de01b26e1fa97e1632fbfb1bdf@173.249.57.190:26656,d9a5e20668955bdd5c2fc28cffd6f06e23794638@[2a01:4f8:10a:3a51::2]:43456"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.junction/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.junction/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.junction/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.junction/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.junction/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.junction/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${AIRCHAINS_PORT}658%g;\ns%:26657%:${AIRCHAINS_PORT}657%g;\ns%:6060%:${AIRCHAINS_PORT}060%g;\ns%:26656%:${AIRCHAINS_PORT}656%g;\ns%:26660%:${AIRCHAINS_PORT}660%g\n" $HOME/.junction/config/config.toml\nsed -i.bak -e "\ns%:8545%:${AIRCHAINS_PORT}545%g;\ns%:8546%:${AIRCHAINS_PORT}546%g;\ns%:6065%:${AIRCHAINS_PORT}065%g;\ns%:1317%:${AIRCHAINS_PORT}317%g; \ns%:8080%:${AIRCHAINS_PORT}080%g; \ns%:9090%:${AIRCHAINS_PORT}090%g; \ns%:9091%:${AIRCHAINS_PORT}091%g\n" $HOME/.junction/config/app.toml\nsed -i.bak -e "s%:26657%:${AIRCHAINS_PORT}657%g" $HOME/.junction/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${AIRCHAINS_PORT}656\\"|g" ~/.junction/config/config.toml > ~/.junction/config/config.toml.tmp\nmv ~/.junction/config/config.toml.tmp  ~/.junction/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/junctiond.service > /dev/null << EOF\n[Unit]\nDescription=Airchains Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which junctiond) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable junctiond\nsystemctl start junctiond\n"})}),"\n",(0,a.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u junctiond -f -o cat\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,a.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,a.jsxs)(n.p,{children:["Unless we get a ",(0,a.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond status 2>&1 | jq .sync_info\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond status 2>&1 | jq -r .sync_info.catching_up\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,a.jsxs)(n.p,{children:["We do not change the ",(0,a.jsx)(n.code,{children:"$AIRCHAINS_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond keys add $AIRCHAINS_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond keys add $AIRCHAINS_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,a.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"AIRCHAINS_WALLET_ADDRESS=$(junctiond keys show $AIRCHAINS_WALLET -a)\nAIRCHAINS_VALOPER_ADDRESS=$(junctiond keys show $AIRCHAINS_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export AIRCHAINS_WALLET_ADDRESS='${AIRCHAINS_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export AIRCHAINS_VALOPER_ADDRESS='${AIRCHAINS_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,a.jsxs)(n.p,{children:["Request tokens by sending your wallet address to the ",(0,a.jsx)(n.code,{children:"#\ud83d\udeb0\u2758switchyard-faucet-bot"})," on the ",(0,a.jsx)(n.a,{href:"https://discord.gg/wuT88TCQsw",children:"Discord"})," server."]}),"\n",(0,a.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"junctiond query bank balances $AIRCHAINS_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,a.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,a.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"})," where it says ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"})," where it says ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"creating-the-validatorjson-file",children:"Creating the validator.json File"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cd $HOME\necho "{\\"pubkey\\":{\\"@type\\":\\"/cosmos.crypto.ed25519.PubKey\\",\\"key\\":\\"$(wardend comet show-validator | grep -Po \'\\"key\\":\\s*\\"\\K[^"]*\')\\"},\n    \\"amount\\": \\"1700000amf\\",\n    \\"moniker\\": \\"$AIRCHAINS_NODENAME\\",\n    \\"commission-rate\\": \\"0.1\\",\n    \\"commission-max-rate\\": \\"0.2\\",\n    \\"commission-max-change-rate\\": \\"0.01\\",\n    \\"min-self-delegation\\": \\"1\\",\n    \\"details\\": \\"Always forward with the Anatolian Team \ud83d\udc06\\",\n    \\"security\\": \\"xxxxxxx@gmail.com\\",\n    \\"website\\": \\"https://anatolianteam.com\\",\n    \\"identity\\": \\"XXXX1111XXXX1111\\"\n}" > validator.json\n'})}),"\n",(0,a.jsx)(n.h3,{id:"creating-validator-using-the-json-file",children:"Creating Validator Using the json File"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond tx staking create-validator validator.json \\\n    --from $AIRCHAINS_WALLET \\\n    --chain-id $AIRCHAINS_CHAIN_ID \\\n    --fees 200amf \\\n    --yes\n"})}),"\n",(0,a.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop junctiond && \\\nsystemctl disable junctiond && \\\nrm /etc/systemd/system/junctiond.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .junction && \\\nrm -rf $(which junctiond)\nsed -i '/AIRCHAINS_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5638:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/Airchains-Service-Cover-f1de8d48e4fd39509044babb9d7b7a83.jpg"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var a=i(67294);const t={},s=a.createContext(t);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);