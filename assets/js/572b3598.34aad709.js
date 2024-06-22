"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5421],{7655:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=i(85893),l=i(11151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/SelfChain-Service-Cover.jpg",keywords:["selfchain","self","chain","installation","snapshot","statesync","update"]},t="Installation",c={id:"Testnet Archive/selfchain/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet Archive/selfchain/installation.md",sourceDirName:"Testnet Archive/selfchain",slug:"/Testnet Archive/selfchain/installation",permalink:"/docs/Testnet Archive/selfchain/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/selfchain/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/SelfChain-Service-Cover.jpg",keywords:["selfchain","self","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Self Chain",permalink:"/docs/Testnet Archive/selfchain/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet Archive/selfchain/snapshot"}},r={image:i(89080).Z},o=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Self Chain",id:"installing-self-chain",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,a.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$SELF_NODENAME"})," your validator name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$SELF_WALLET"})," your wallet name"]}),"\n",(0,a.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,a.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export SELF_NODENAME=$SELF_NODENAME"  >> $HOME/.bash_profile\necho "export SELF_WALLET=$SELF_WALLET" >> $HOME/.bash_profile\necho "export SELF_PORT=11" >> $HOME/.bash_profile\necho "export SELF_CHAIN_ID=self-dev-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,a.jsxs)(n.p,{children:["Let's assume that your Node (",(0,a.jsx)(n.code,{children:"SELF_NODENAME"}),") and Wallet (",(0,a.jsx)(n.code,{children:"SELF_WALLET"}),") name is ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,a.jsx)(n.code,{children:"SELF_PORT"}),") will be ",(0,a.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export SELF_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export SELF_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export SELF_PORT=16" >> $HOME/.bash_profile\necho "export SELF_CHAIN_ID=self-dev-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-self-chain",children:"Installing Self Chain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $HOME\nmkdir -p $HOME/go/bin/\nwget https://anatolianteam.com/selfchaind\nchmod +x selfchaind\nmv selfchaind $HOME/go/bin/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,a.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'selfchaind config keyring-backend test\nselfchaind config chain-id $SELF_CHAIN_ID\nselfchaind init --chain-id $SELF_CHAIN_ID $SELF_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://raw.githubusercontent.com/hotcrosscom/selfchain-genesis/main/networks/devnet/genesis.json -O $HOME/.selfchain/config/genesis.json\nwget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/files/addrbook.json -O $HOME/.selfchain/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0uself "|g\' $HOME/.selfchain/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.selfchain/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS="94a7baabb2bcc00c7b47cbaa58adf4f433df9599@157.230.119.165:26656,d3b5b6ca39c8c62152abbeac4669816166d96831@165.22.24.236:26656,35f478c534e2d58dc2c4acdf3eb22eeb6f23357f@165.232.125.66:26656"\nPEERS="94a7baabb2bcc00c7b47cbaa58adf4f433df9599@157.230.119.165:26656,d3b5b6ca39c8c62152abbeac4669816166d96831@165.22.24.236:26656,35f478c534e2d58dc2c4acdf3eb22eeb6f23357f@165.232.125.66:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.selfchain/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.selfchain/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.selfchain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.selfchain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.selfchain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.selfchain/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${SELF_PORT}658%g;\ns%:26657%:${SELF_PORT}657%g;\ns%:6060%:${SELF_PORT}060%g;\ns%:26656%:${SELF_PORT}656%g;\ns%:26660%:${SELF_PORT}660%g\n" $HOME/.selfchain/config/config.toml\nsed -i.bak -e "\ns%:8545%:${SELF_PORT}545%g;\ns%:8546%:${SELF_PORT}546%g;\ns%:6065%:${SELF_PORT}065%g;\ns%:1317%:${SELF_PORT}317%g; \ns%:8080%:${SELF_PORT}080%g; \ns%:9090%:${SELF_PORT}090%g; \ns%:9091%:${SELF_PORT}091%g\n" $HOME/.selfchain/config/app.toml\nsed -i.bak -e "s%:26657%:${SELF_PORT}657%g" $HOME/.selfchain/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${SELF_PORT}656\\"|g" ~/.selfchain/config/config.toml > ~/.selfchain/config/config.toml.tmp\nmv ~/.selfchain/config/config.toml.tmp  ~/.selfchain/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/selfchaind.service > /dev/null << EOF\n[Unit]\nDescription=SelfChain Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which selfchaind) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable selfchaind\nsystemctl start selfchaind\n"})}),"\n",(0,a.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u selfchaind -f -o cat\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,a.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,a.jsxs)(n.p,{children:["Unless we get a ",(0,a.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"selfchaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,a.jsxs)(n.p,{children:["We do not change the ",(0,a.jsx)(n.code,{children:"$SELF_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"selfchaind keys add $SELF_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"selfchaind keys add $SELF_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,a.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"SELF_WALLET_ADDRESS=$(selfchaind keys show $SELF_WALLET -a)\nSELF_VALOPER_ADDRESS=$(selfchaind keys show $SELF_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export SELF_WALLET_ADDRESS='${SELF_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export SELF_VALOPER_ADDRESS='${SELF_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"selfchaind query bank balances $SELF_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,a.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,a.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"})," where it says ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"})," where it says ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'selfchaind tx staking create-validator \\\n--amount=940000uself  \\\n--pubkey=$(selfchaind tendermint show-validator) \\\n--moniker=$SELF_NODENAME \\\n--chain-id=$SELF_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25uself  \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$SELF_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,a.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop selfchaind && \\\nsystemctl disable selfchaind && \\\nrm /etc/systemd/system/selfchaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .selfchain && \\\nrm -rf $(which selfchaind)\nsed -i '/SELF_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},89080:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/SelfChain-Service-Cover-9177468565f242a0411a413cf6f4166b.jpg"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var a=i(67294);const l={},s=a.createContext(l);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);