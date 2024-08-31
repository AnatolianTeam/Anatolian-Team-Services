"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1322],{77457:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var l=a(85893),i=a(11151);const t={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","installation","snapshot","statesync","update"]},s="Installation",r={id:"Testnet Archive/alignedlayer/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet Archive/alignedlayer/installation.md",sourceDirName:"Testnet Archive/alignedlayer",slug:"/Testnet Archive/alignedlayer/installation",permalink:"/docs/Testnet Archive/alignedlayer/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/alignedlayer/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe EigenLayer AVS \ud83c\udd95",permalink:"/docs/Testnet Archive/alignedlayer/eigenlayer-avs"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet Archive/alignedlayer/snapshot"}},d={image:a(31844).Z},o=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Sample",id:"sample",level:3},{value:"Installing Rust",id:"installing-rust",level:2},{value:"Installing Ignite CLI",id:"installing-ignite-cli",level:2},{value:"Installing Aligned",id:"installing-aligned",level:2},{value:"Configuring and Launching the Node",id:"configuring-and-launching-the-node",level:2},{value:"Enabling and Starting the Service",id:"enabling-and-starting-the-service",level:2},{value:"Checking the Logs",id:"checking-the-logs",level:2},{value:"StateSync",id:"statesync",level:2},{value:"Checking Synchronization",id:"checking-synchronization",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Faucet",id:"faucet",level:3},{value:"Wallet and Valoper Info",id:"wallet-and-valoper-info",level:2},{value:"Checking Wallet Balance",id:"checking-wallet-balance",level:3},{value:"Creating Validator",id:"creating-validator",level:2},{value:"Creating the validator.json File",id:"creating-the-validatorjson-file",level:3},{value:"Creating Validator Using the json File",id:"creating-validator-using-the-json-file",level:3},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,l.jsx)(n.p,{children:"The areas you need to change are written below."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"$ALIGNED_NODENAME"})," your validator name"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"$ALIGNED_WALLET"})," your wallet name"]}),"\n",(0,l.jsxs)(n.li,{children:["If another node is using the port, you can change it below. You must enter a different value where it says ",(0,l.jsx)(n.code,{children:"11"}),", again as two digits."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'echo "export ALIGNED_NODENAME=$ALIGNED_NODENAME"  >> $HOME/.bash_profile\necho "export ALIGNED_WALLET=$ALIGNED_WALLET" >> $HOME/.bash_profile\necho "export ALIGNED_PORT=11" >> $HOME/.bash_profile\necho "export ALIGNED_CHAIN_ID=alignedlayer" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,l.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,l.jsxs)(n.p,{children:["Let's assume that your Node (",(0,l.jsx)(n.code,{children:"ALIGNED_NODENAME"}),") and Wallet (",(0,l.jsx)(n.code,{children:"ALIGNED_WALLET"}),") name is ",(0,l.jsx)(n.code,{children:"Anatolian-Guide"})," and the port you will use (",(0,l.jsx)(n.code,{children:"ALIGNED_PORT"}),") will be ",(0,l.jsx)(n.code,{children:"16656"}),". The code will be arranged as shown below."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'echo "export ALIGNED_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export ALIGNED_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export ALIGNED_PORT=16" >> $HOME/.bash_profile\necho "export ALIGNED_CHAIN_ID=alignedlayer" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-rust",children:"Installing Rust"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source $HOME/.cargo/env\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-ignite-cli",children:"Installing Ignite CLI"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl https://get.ignite.com/cli | bash\nmv ignite /usr/local/bin/\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-aligned",children:"Installing Aligned"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"rm -rf $HOME/aligned_layer_tendermint\ngit clone https://github.com/yetanotherco/aligned_layer_tendermint.git\ncd $HOME/aligned_layer_tendermint\ngit checkout 98643167990f8a597b331ddd879e079bafb25b08\nmake build-linux\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configuring-and-launching-the-node",children:"Configuring and Launching the Node"}),"\n",(0,l.jsx)(n.p,{children:"We copy and paste the codes below without making any changes."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'alignedlayerd config chain-id $ALIGNED_CHAIN_ID\nalignedlayerd config keyring-backend test\nalignedlayerd init --chain-id $ALIGNED_CHAIN_ID $ALIGNED_NODENAME\n\n# Copying the Genesis and addrbook Files\nwget https://testnet.anatolianteam.com/aligned/genesis.json -O $HOME/.alignedlayer/config/genesis.json\nwget https://testnet.anatolianteam.com/aligned/addrbook.json.new -O $HOME/.alignedlayer/config/addrbook.json\n\n# Set up the minimum gas price\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.0001stake"|g\' $HOME/.alignedlayer/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.alignedlayer/config/config.toml\n\n# Set up SEED and PEERS\nPEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326,b2a30b824a4358f8bc2ee648770b31b5eba3a853@85.10.200.82:26656"\nSEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.alignedlayer/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.alignedlayer/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.alignedlayer/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.alignedlayer/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.alignedlayer/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.alignedlayer/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${ALIGNED_PORT}658%g;\ns%:26657%:${ALIGNED_PORT}657%g;\ns%:6060%:${ALIGNED_PORT}060%g;\ns%:26656%:${ALIGNED_PORT}656%g;\ns%:26660%:${ALIGNED_PORT}660%g\n" $HOME/.alignedlayer/config/config.toml\nsed -i.bak -e "\ns%:8545%:${ALIGNED_PORT}545%g;\ns%:8546%:${ALIGNED_PORT}546%g;\ns%:6065%:${ALIGNED_PORT}065%g;\ns%:1317%:${ALIGNED_PORT}317%g; \ns%:8080%:${ALIGNED_PORT}080%g; \ns%:9090%:${ALIGNED_PORT}090%g; \ns%:9091%:${ALIGNED_PORT}091%g\n" $HOME/.alignedlayer/config/app.toml\nsed -i.bak -e "s%:26657%:${ALIGNED_PORT}657%g" $HOME/.alignedlayer/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${ALIGNED_PORT}656\\"|g" ~/.alignedlayer/config/config.toml > ~/.alignedlayer/config/config.toml.tmp\nmv ~/.alignedlayer/config/config.toml.tmp  ~/.alignedlayer/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/alignedlayerd.service > /dev/null << EOF\n[Unit]\nDescription=Aligned Layer Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which alignedlayerd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,l.jsx)(n.h2,{id:"enabling-and-starting-the-service",children:"Enabling and Starting the Service"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable alignedlayerd\nsystemctl start alignedlayerd\n"})}),"\n",(0,l.jsx)(n.h2,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"journalctl -u alignedlayerd -f -o cat\n"})}),"\n",(0,l.jsx)(n.h2,{id:"statesync",children:"StateSync"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl stop alignedlayerd\n\ncp $HOME/.alignedlayer/data/priv_validator_state.json $HOME/.alignedlayer/priv_validator_state.json.backup\nalignedlayerd tendermint unsafe-reset-all --home $HOME/.alignedlayer --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-aligned.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.alignedlayer/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.alignedlayer/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.alignedlayer/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.alignedlayer/config/config.toml\n\nmv $HOME/.alignedlayer/priv_validator_state.json.backup $HOME/.alignedlayer/data/priv_validator_state.json\n\nsystemctl restart alignedlayerd && journalctl -u alignedlayerd -f -o cat\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})}),"\n",(0,l.jsx)(n.h2,{id:"checking-synchronization",children:"Checking Synchronization"}),"\n",(0,l.jsxs)(n.p,{children:["Unless we get a ",(0,l.jsx)(n.code,{children:"false"})," output, we do not move on to the next step, namely creating a validator."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"alignedlayerd status 2>&1 | jq -r .sync_info.catching_up\n"})}),"\n",(0,l.jsx)(n.p,{children:"or"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"alignedlayerd status 2>&1 | jq .sync_info\n"})}),"\n",(0,l.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,l.jsxs)(n.p,{children:["We do not change the ",(0,l.jsx)(n.code,{children:"$ALIGNED_WALLET"})," section, we named our wallet with variables at the beginning of the installation."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"alignedlayerd keys add $ALIGNED_WALLET\n"})}),"\n",(0,l.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"alignedlayerd keys add $ALIGNED_WALLET --recover\n"})}),"\n",(0,l.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,l.jsxs)(n.p,{children:["And then request tokens from the ",(0,l.jsx)(n.a,{href:"https://faucet.alignedlayer.com/",children:"faucet"})," to your Aligned address."]}),"\n",(0,l.jsx)(n.h2,{id:"wallet-and-valoper-info",children:"Wallet and Valoper Info"}),"\n",(0,l.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ALIGNED_WALLET_ADDRESS=$(alignedlayerd keys show $ALIGNED_WALLET -a)\nALIGNED_VALOPER_ADDRESS=$(alignedlayerd keys show $ALIGNED_WALLET --bech val -a)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"echo 'export ALIGNED_WALLET_ADDRESS='${ALIGNED_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export ALIGNED_VALOPER_ADDRESS='${ALIGNED_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,l.jsx)(n.h3,{id:"checking-wallet-balance",children:"Checking Wallet Balance"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"alignedlayerd query bank balances $ALIGNED_WALLET_ADDRESS\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"If the synchronization is completed, we proceed to the following step."})}),"\n",(0,l.jsx)(n.h2,{id:"creating-validator",children:"Creating Validator"}),"\n",(0,l.jsx)(n.p,{children:"You do not need to make any changes to the following command other than the places specified below;"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"identity"})," where it says ",(0,l.jsx)(n.code,{children:"XXXX1111XXXX1111"})," you write your identification number given to you as a member of the ",(0,l.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," site."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"details"})," You can write information about yourself where it says ",(0,l.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"website"})," where it says ",(0,l.jsx)(n.code,{children:"https://anatolianteam.com"}),", if you have a website or twitter etc. You can write your address."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"security-contact"})," Your email address."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-validatorjson-file",children:"Creating the validator.json File"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'cd $HOME\necho "{\\"pubkey\\":{\\"@type\\":\\"/cosmos.crypto.ed25519.PubKey\\",\\"key\\":\\"$(alignedlayerd comet show-validator | grep -Po \'\\"key\\":\\s*\\"\\K[^"]*\')\\"},\n    \\"amount\\": \\"9900000stake\\",\n    \\"moniker\\": \\"$ALIGNED_NODENAME\\",\n    \\"commission-rate\\": \\"0.1\\",\n    \\"commission-max-rate\\": \\"0.2\\",\n    \\"commission-max-change-rate\\": \\"0.01\\",\n    \\"min-self-delegation\\": \\"1\\",\n    \\"details\\": \\"Always forward with the Anatolian Team \ud83d\udc06\\",\n    \\"security\\": \\"xxxxxxx@gmail.com\\",\n    \\"website\\": \\"https://anatolianteam.com\\",\n    \\"identity\\": \\"XXXX1111XXXX1111\\"\n}" > validator.json\n'})}),"\n",(0,l.jsx)(n.h3,{id:"creating-validator-using-the-json-file",children:"Creating Validator Using the json File"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"alignedlayerd tx staking create-validator $HOME/validator.json \\\n    --chain-id=$ALIGNED_CHAIN_ID \\\n    --gas-prices=0.25stake \\\n    --gas-adjustment=1.5 \\\n    --gas=auto \\\n    --from=$ALIGNED_WALLET \\\n    --yes\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["If you get an error, add this before ",(0,l.jsx)(n.code,{children:"--yes"}),": ",(0,l.jsx)(n.code,{children:"--node=https://rpc-t-aligned.anatolianteam.com:443 \\"})]})}),"\n",(0,l.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo systemctl stop alignedlayerd && \\\nsudo systemctl disable alignedlayerd && \\\nsudo rm /etc/systemd/system/alignedlayerd.service && \\\nsudo systemctl daemon-reload && \\\nsudo rm -f /usr/local/bin/alignedlayerd && \\\nsudo rm -f $(which alignedlayerd) && \\\nsudo rm -rf $HOME/.alignedlayer && \\\nsudo rm -rf $HOME/aligned_layer_tendermint\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},31844:(e,n,a)=>{a.d(n,{Z:()=>l});const l=a.p+"assets/images/Aligned-Service-Cover-b8e47bb7a37bb1b5ed060cedf1ac54e1.jpg"},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var l=a(67294);const i={},t=l.createContext(i);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);