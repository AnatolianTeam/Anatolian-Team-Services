"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4345],{76653:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"Testnet Archive/babylon/installation","title":"\ud83d\udcbe Installation","description":"Node installation guide.","source":"@site/docs/Testnet Archive/babylon/installation.md","sourceDirName":"Testnet Archive/babylon","slug":"/Testnet Archive/babylon/installation","permalink":"/docs/Testnet Archive/babylon/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/babylon/installation.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe Installation","description":"Node installation guide.","image":"./img/Babylon-Service-Cover.jpg","keywords":["babylon","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"Babylon Chain","permalink":"/docs/Testnet Archive/babylon/"},"next":{"title":"\ud83d\udcf8 Snapshot","permalink":"/docs/Testnet Archive/babylon/snapshot"}}');var i=a(74848),t=a(28453);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},o="Installation",r={image:a(76224).A},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Babylon",id:"installing-babylon",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling the Service",id:"enabling-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating BLS Key and Restarting",id:"creating-bls-key-and-restarting",level:2},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,i.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$BBN_NODENAME"})," your validator name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$BBN_WALLET"})," your wallet name"]}),"\n",(0,i.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,i.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export BBN_NODENAME=$BBN_NODENAME"  >> $HOME/.bash_profile\necho "export BBN_WALLET=$BBN_WALLET" >> $HOME/.bash_profile\necho "export BBN_PORT=11" >> $HOME/.bash_profile\necho "export BBN_CHAIN_ID=bbn-test-3" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(n.p,{children:["Let's assume that your Node (",(0,i.jsx)(n.code,{children:"BBN_NODENAME"}),") and Wallet (",(0,i.jsx)(n.code,{children:"BBN_WALLET"}),") name is ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,i.jsx)(n.code,{children:"BBN_PORT"}),") will be ",(0,i.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export BBN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export BBN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export BBN_PORT=16" >> $HOME/.bash_profile\necho "export BBN_CHAIN_ID=bbn-test-2" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-babylon",children:"Installing Babylon"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd $HOME\ngit clone https://github.com/babylonchain/babylon.git babylon\ncd babylon\ngit checkout v0.8.3\nmake install\nbabylond version\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The version output will be ",(0,i.jsx)(n.code,{children:"0.8.3"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,i.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'babylond config keyring-backend test\nbabylond config chain-id $BBN_CHAIN_ID\nbabylond init --chain-id $BBN_CHAIN_ID $BBN_NODENAME\n\n# Copying the Genesis and addrbook File\ncurl -L https://testnet.anatolianteam.com/babylon/genesis.json > $HOME/.babylond/config/genesis.json\ncurl -L https://testnet.anatolianteam.com/babylon/addrbook.json > $HOME/.babylond/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.001ubbn"|g\' $HOME/.babylond/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.babylond/config/config.toml\n\n# Set up SEEDS and PEERS\nsed -i \\\n  -e \'s|^seeds *=.*|seeds = "8da45f9ff83b4f8dd45bbcb4f850999637fbfe3b@seed0.testnet.babylonchain.io:26656,4b1f8a774220ba1073a4e9f4881de218b8a49c99@seed1.testnet.babylonchain.io:26656"|\' \\\n  -e \'s|^peers *=.*|peers = "fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656,03ce5e1b5be3c9a81517d415f65378943996c864@18.207.168.204:26656,a5fabac19c732bf7d814cf22e7ffc23113dc9606@34.238.169.221:26656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:20656"|\' \\\n  $HOME/.babylond/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.babylond/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.babylond/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.babylond/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.babylond/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.babylond/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${BBN_PORT}658%g;\ns%:26657%:${BBN_PORT}657%g;\ns%:6060%:${BBN_PORT}060%g;\ns%:26656%:${BBN_PORT}656%g;\ns%:26660%:${BBN_PORT}660%g\n" $HOME/.babylond/config/config.toml\nsed -i.bak -e "\ns%:8545%:${BBN_PORT}545%g;\ns%:8546%:${BBN_PORT}546%g;\ns%:6065%:${BBN_PORT}065%g;\ns%:1317%:${BBN_PORT}317%g; \ns%:8080%:${BBN_PORT}080%g; \ns%:9090%:${BBN_PORT}090%g; \ns%:9091%:${BBN_PORT}091%g\n" $HOME/.babylond/config/app.toml\nsed -i.bak -e "s%:26657%:${BBN_PORT}657%g" $HOME/.babylond/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${BBN_PORT}656\\"|g" ~/.babylond/config/config.toml > ~/.babylond/config/config.toml.tmp\nmv ~/.babylond/config/config.toml.tmp  ~/.babylond/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/babylond.service > /dev/null << EOF\n[Unit]\nDescription=Babylon Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which babylond) start\nRestart=on-failure\nRestartSec=10\nLimitNOFILE=10000\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enabling-the-service",children:"Enabling the Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable babylond\n"})}),"\n",(0,i.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u babylond -f -o cat\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,i.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,i.jsxs)(n.p,{children:["Unless we get a ",(0,i.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"babylond status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,i.jsxs)(n.p,{children:["We do not change the ",(0,i.jsx)(n.code,{children:"$BBN_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"babylond keys add $BBN_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"babylond keys add $BBN_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,i.jsx)(n.p,{children:"Here, wallet and valoper information are added to the variable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"BBN_WALLET_ADDRESS=$(babylond keys show $BBN_WALLET -a)\nBBN_VALOPER_ADDRESS=$(babylond keys show $BBN_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export BBN_WALLET_ADDRESS='${BBN_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export BBN_VALOPER_ADDRESS='${BBN_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"babylond query bank balances $BBN_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,i.jsx)(n.h2,{id:"creating-bls-key-and-restarting",children:"Creating BLS Key and Restarting"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# app.toml ve config.toml D\xfczenleme\nsed -i -e "s|^key-name *=.*|key-name = \\"$BBN_WALLET\\"|" $HOME/.babylond/config/app.toml\nsed -i -e "s|^timeout_commit *=.*|timeout_commit = \\"10s\\"|" $HOME/.babylond/config/config.toml\nbabylond create-bls-key $(babylond keys show $BBN_WALLET -a)\nsudo systemctl restart babylond\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,i.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"})," where it says ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"})," where it says ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'babylond tx checkpointing create-validator \\\n--amount=1000000ubbn \\\n--pubkey=$(babylond tendermint show-validator) \\\n--moniker=$BBN_NODENAME \\\n--chain-id=$BBN_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.1ubbn \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$BBN_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"systemctl stop babylond && \\\nsystemctl disable babylond && \\\nrm /etc/systemd/system/babylond.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm .babylond babylon -rf && \\\nrm $(which babylond) -rf\nsed -i '/BBN_/d' ~/.bash_profile\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u200b"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},76224:(e,n,a)=>{a.d(n,{A:()=>l});const l=a.p+"assets/images/Babylon-Service-Cover-28dbb10952875d3c2edfdd8e0002355a.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var l=a(96540);const i={},t=l.createContext(i);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);