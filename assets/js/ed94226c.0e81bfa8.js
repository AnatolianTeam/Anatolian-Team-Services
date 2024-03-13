"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5533],{124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(5893),t=i(1151);const a={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/crossfi/img/CrossFi-Service-Cover.jpg",keywords:["crossfi","installation","snapshot","statesync","update"]},l="Installation",o={id:"Testnet/Cosmos-Ecosystem/crossfi/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet/Cosmos-Ecosystem/crossfi/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crossfi",slug:"/Testnet/Cosmos-Ecosystem/crossfi/installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/crossfi/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/crossfi/img/CrossFi-Service-Cover.jpg",keywords:["crossfi","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"CrossFi Network",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/snapshot"}},r={},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing CrossFi",id:"installing-crossfi",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,s.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$CFI_NODENAME"})," your validator name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$CFI_WALLET"})," your wallet name"]}),"\n",(0,s.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,s.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "export CFI_NODENAME=$CFI_NODENAME"  >> $HOME/.bash_profile\necho "export CFI_WALLET=$CFI_WALLET" >> $HOME/.bash_profile\necho "export CFI_PORT=11" >> $HOME/.bash_profile\necho "export CFI_CHAIN_ID=crossfi-evm-testnet-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsxs)(n.p,{children:["Let's assume that your Node (",(0,s.jsx)(n.code,{children:"CFI_NODENAME"}),") and Wallet (",(0,s.jsx)(n.code,{children:"CFI_WALLET"}),") name is ",(0,s.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,s.jsx)(n.code,{children:"CFI_PORT"}),") will be ",(0,s.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "export CFI_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export CFI_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export CFI_PORT=16" >> $HOME/.bash_profile\necho "export CFI_CHAIN_ID=crossfi-evm-testnet-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,s.jsx)(n.h2,{id:"installing-crossfi",children:"Installing CrossFi"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd $HOME\nmkdir -p $HOME/go/bin\ncurl -L https://github.com/crossfichain/crossfi-node/releases/download/v0.3.0-prebuild3/crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz > crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz\ntar -xvzf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz\nchmod +x $HOME/bin/crossfid\nmv $HOME/bin/crossfid $HOME/go/bin\nrm -rf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz readme.md $HOME/bin\ncrossfid version\n"})}),"\n",(0,s.jsx)(n.p,{children:"The version output will be ``."}),"\n",(0,s.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,s.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'crossfid config keyring-backend test\ncrossfid config chain-id $CFI_CHAIN_ID\ncrossfid init --chain-id $CFI_CHAIN_ID $CFI_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/crossfi/files/genesis.json -O $HOME/.mineplex-chain/config/genesis.json\nwget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/Cosmos-Ecosystem/crossfi/files/addrbook.json -O $HOME/.mineplex-chain/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i -e \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "5000000000mpx"|\' $HOME/.mineplex-chain/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.mineplex-chain/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS="89752fa7945a06e972d7d860222a5eeaeab5c357@128.140.70.97:26656,dd83e3c7c4e783f8a46dbb010ec8853135d29df0@crossfi-testnet-seed.itrocket.net:36656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.mineplex-chain/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.mineplex-chain/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.mineplex-chain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.mineplex-chain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.mineplex-chain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.mineplex-chain/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${CFI_PORT}658%g;\ns%:26657%:${CFI_PORT}657%g;\ns%:6060%:${CFI_PORT}060%g;\ns%:26656%:${CFI_PORT}656%g;\ns%:26660%:${CFI_PORT}660%g\n" $HOME/.mineplex-chain/config/config.toml\nsed -i.bak -e "\ns%:1317%:${CFI_PORT}317%g; \ns%:8080%:${CFI_PORT}080%g; \ns%:9090%:${CFI_PORT}090%g; \ns%:9091%:${CFI_PORT}091%g\n" $HOME/.mineplex-chain/config/app.toml\nsed -i.bak -e "s%:26657%:${CFI_PORT}657%g" $HOME/.mineplex-chain/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${CFI_PORT}656\\"|g" ~/.mineplex-chain/config/config.toml > ~/.mineplex-chain/config/config.toml.tmp\nmv ~/.mineplex-chain/config/config.toml.tmp  ~/.mineplex-chain/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/crossfid.service > /dev/null << EOF\n[Unit]\nDescription=CrossFi Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which crossfid) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,s.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable crossfid\nsystemctl start crossfid\n"})}),"\n",(0,s.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"journalctl -u crossfid -f -o cat\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,s.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,s.jsxs)(n.p,{children:["Unless we get a ",(0,s.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,s.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,s.jsxs)(n.p,{children:["We do not change the ",(0,s.jsx)(n.code,{children:"$CFI_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid keys add $CFI_WALLET\n"})}),"\n",(0,s.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid keys add $CFI_WALLET --recover\n"})}),"\n",(0,s.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,s.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"CFI_WALLET_ADDRESS=$(crossfid keys show $CFI_WALLET -a)\nCFI_VALOPER_ADDRESS=$(crossfid keys show $CFI_WALLET --bech val -a)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"echo 'export CFI_WALLET_ADDRESS='${CFI_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export CFI_VALOPER_ADDRESS='${CFI_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,s.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"crossfid query bank balances $CFI_WALLET_ADDRESS\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,s.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,s.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"identity"})," where it says ",(0,s.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,s.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,s.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"website"})," where it says ",(0,s.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'crossfid tx staking create-validator \\\n--amount=940000mpx  \\\n--pubkey=$(crossfid tendermint show-validator) \\\n--moniker=$CFI_NODENAME \\\n--chain-id=$CFI_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25mpx  \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$CFI_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,s.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"systemctl stop crossfid && \\\nsystemctl disable crossfid && \\\nrm /etc/systemd/system/crossfid.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .mineplex-chain crossfi && \\\nrm -rf $(which crossfid)\nsed -i '/CFI_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(7294);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);