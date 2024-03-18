"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8948],{3617:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var t=i(5893),a=i(1151);const s={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Q-Blockhahin/img/Q-Service-Cover.jpg",keywords:["Q","blockchain","installation","snapshot","statesync","update"],slug:"installation"},l="Installation",o={id:"Mainnet/Q-Blockhahin/ins-q",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Mainnet/Q-Blockhahin/ins-q.md",sourceDirName:"Mainnet/Q-Blockhahin",slug:"/Mainnet/Q-Blockhahin/installation",permalink:"/docs/Mainnet/Q-Blockhahin/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Q-Blockhahin/ins-q.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Q-Blockhahin/img/Q-Service-Cover.jpg",keywords:["Q","blockchain","installation","snapshot","statesync","update"],slug:"installation"},sidebar:"tutorialSidebar",previous:{title:"Q Blockchain",permalink:"/docs/Mainnet/Q-Blockhahin/"},next:{title:"\u2699\ufe0f OmniBridge Setup",permalink:"/docs/Mainnet/Q-Blockhahin/omnibridge-setup"}},d={},r=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Docker",id:"installing-docker",level:2},{value:"Installing Q",id:"installing-q",level:2},{value:"Creating Keystore Folder and pwd.txt File",id:"creating-keystore-folder-and-pwdtxt-file",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Editing .env File",id:"editing-env-file",level:2},{value:"Editing docker-compose.yaml File",id:"editing-docker-composeyaml-file",level:2},{value:"Editing config.json File",id:"editing-configjson-file",level:2},{value:"Starting Node",id:"starting-node",level:2},{value:"Checking Logs",id:"checking-logs",level:2},{value:"Synchronizing Node Quickly",id:"synchronizing-node-quickly",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"apt install ca-certificates curl gnupg lsb-release git htop tmux\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installing-q",children:"Installing Q"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd $HOME\ngit clone https://gitlab.com/q-dev/mainnet-public-tools\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-keystore-folder-and-pwdtxt-file",children:"Creating Keystore Folder and pwd.txt File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/validator/\nmkdir keystore\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Type the password you will use in your wallet where ",(0,t.jsx)(n.code,{children:"YOUR_PASS"})," is written in the code below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"echo YOUR_PASS > keystore/pwd.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker run --entrypoint="" --rm -v $PWD:/data -it qblockchain/q-client:1.3.6 geth account new --datadir=/data --password=/data/keystore/pwd.txt\n'})}),"\n",(0,t.jsx)(n.p,{children:"If the output is as follows, everything is OK."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Your new key was generated\n\nPublic address of the key:   0xb3FF24F818b0ff6Cc50de951bcB8f86b52287dac\nPath of the secret key file: /data/keystore/UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac\n\n- You can share your public address with anyone. Others need it to interact with you.\n- You must NEVER share the secret key with anyone! The key controls access to your funds!\n- You must BACKUP your key file! Without the key, it's impossible to access account funds!\n- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Then back up the files in your folder written (",(0,t.jsx)(n.code,{children:"/data/keystore"}),") in the output to keep them in a safe place."]})}),"\n",(0,t.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,t.jsxs)(n.p,{children:["If you already have a wallet, copy the json file (starting like UTC) to the keystore folder as shown below. (",(0,t.jsx)(n.code,{children:"/root/mainnet-public-tools/validator/keystore/"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"validator\n|   ...\n|   ...\n\u2514 keystore\n  |   UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac\n  |   pwd.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"editing-env-file",children:"Editing .env File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cp .env.example .env\nnano .env\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you open the file, write your wallet without ",(0,t.jsx)(n.code,{children:"0x"})," in the place where it says ",(0,t.jsx)(n.code,{children:"ADDRESS"})," as in the code below,\nthen make sure your own IP address is written in the ",(0,t.jsx)(n.code,{children:"IP"})," section, then save and exit. (CTRL+X Y)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# docker image for q client\nQCLIENT_IMAGE=qblockchain/q-client:v1.3.6\n\n# your q address here (without leading 0x)\nADDRESS=b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc\n\n# your public IP address here\nIP=193.19.228.94\n\n# the port you want to use for p2p communication (default is 30303)\nEXT_PORT=30303\n\n# extra bootnode you want to use\nBOOTNODE1_ADDR=enode://22adab037308f02abbb0fd7e831c75afa367b36615b2a0358a5c4673912cf384de6c8e688371822488622ebee383aeea5d41087160cb70484a9f1671876871b1@bootnode.q.org:30301\nBOOTNODE2_ADDR=enode://3021f73a6f14f8594384923f7f0228f81a806d1708e5c046db12661bdce6b0f10625fae12771aa36f7a4d1f110d4e5a589bf3d34ec4b1d2c6d10e382d90f6983@extrabootnode.q.org:30314\nBOOTNODE3_ADDR=enode://34b9e4e18bc37e4437bc0a9b10ac8ae5d0aab2b2e827310e90ec1012e818d07962b162d98e083ec5487e0cf87d1ffefb46332ec05209ec82fb675ae7afe3e241@extrabootnode.q.org:30315\n"})}),"\n",(0,t.jsx)(n.h2,{id:"editing-docker-composeyaml-file",children:"Editing docker-compose.yaml File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nano docker-compose.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the file, write your own moniker name (",(0,t.jsx)(n.code,{children:"YOUR_MONIKER"}),") and mainnet access key (",(0,t.jsx)(n.code,{children:"MAINNET_ACCESS_KEY"}),") in the ",(0,t.jsx)(n.code,{children:"--ethstats"})," section similar to the one below and save it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'.\n.\n.\n"--ethstats=YOUR_MONIKER:MAINNET_ACCESS_KEY@stats.q.org",\n.\n.\n.\n'})}),"\n",(0,t.jsx)(n.h2,{id:"editing-configjson-file",children:"Editing config.json File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nano config.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the address section of the file, write your wallet address without a leading ",(0,t.jsx)(n.code,{children:"0x"}),".\nThen write your wallet ",(0,t.jsx)(n.code,{children:"password"})," in the password section (instead of ",(0,t.jsx)(n.code,{children:"supersecurepassword"}),") and save the file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    {\n      "address": "b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc",\n      "password": "supersecurepassword",\n      "keystoreDirectory": "/data",\n      "rpc": "https://rpc.q.org"\n    }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"starting-node",children:"Starting Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-logs",children:"Checking Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'docker-compose logs -f --tail "100"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"synchronizing-node-quickly",children:"Synchronizing Node Quickly"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker-compose down && cd\nrm -rf /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata\nmkdir /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata\ncd /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://snapshots.stakecraft.com/",children:"Stake Craft"})," snapshots service and copy the URL of the Q Blockchain and write it where ",(0,t.jsx)(n.code,{children:"SNAPHOT_URL"})," is written below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wget -O - SNAPHOT_URL | tar xf -\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then restart the node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/validator/\ndocker-compose up -d\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u200b"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);