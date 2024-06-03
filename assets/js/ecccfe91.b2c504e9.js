"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1388],{7558:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=l(5893),s=l(1151);const t={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Redbelly-Service-Cover.jpg",keywords:["Redbelly","network","installation","snapshot","statesync","update"]},r="Installation",d={id:"Testnet/redbelly/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Testnet/redbelly/installation.md",sourceDirName:"Testnet/redbelly",slug:"/Testnet/redbelly/installation",permalink:"/docs/Testnet/redbelly/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/redbelly/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Redbelly-Service-Cover.jpg",keywords:["Redbelly","network","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Redbelly Network",permalink:"/docs/Testnet/redbelly/"},next:{title:"\u2934\ufe0f Redbelly Node Utilities",permalink:"/docs/Testnet/redbelly/nodeutilities"}},a={image:l(4582).Z},o=[{value:"Things to Do First",id:"things-to-do-first",level:2},{value:"Domain and DNS Settings",id:"domain-and-dns-settings",level:3},{value:"Create EVM Wallets",id:"create-evm-wallets",level:3},{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"SSL Certificate",id:"ssl-certificate",level:2},{value:"Certbot Installation",id:"certbot-installation",level:3},{value:"Generating Let&#39;s Encrypt SSL",id:"generating-lets-encrypt-ssl",level:3},{value:"Registering Node",id:"registering-node",level:2},{value:"Installing Redbelly",id:"installing-redbelly",level:2},{value:"Download Binary",id:"download-binary",level:3},{value:"Download Config File",id:"download-config-file",level:3},{value:"Download Genesis File",id:"download-genesis-file",level:3},{value:"Creating observe.sh File",id:"creating-observesh-file",level:3},{value:"Creating start-rbn.sh File",id:"creating-start-rbnsh-file",level:3},{value:"Run Node",id:"run-node",level:2},{value:"Check Logs",id:"check-logs",level:3},{value:"Verifying the Node is Running",id:"verifying-the-node-is-running",level:2},{value:"Add Redbelly Network to Wallet",id:"add-redbelly-network-to-wallet",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Participation in the testnet is currently closed (",(0,i.jsx)(n.a,{href:"https://vine.redbelly.network/nds-node-running#apply",children:"Link"}),").. If you have received an e-mail from the team regarding your participation and you have been given a node id, you can participate."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ports Used:"})," ",(0,i.jsx)(n.code,{children:"8545"}),", ",(0,i.jsx)(n.code,{children:"8546"}),", ",(0,i.jsx)(n.code,{children:"1111"}),", and ",(0,i.jsx)(n.code,{children:"1888"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"things-to-do-first",children:"Things to Do First"}),"\n",(0,i.jsx)(n.h3,{id:"domain-and-dns-settings",children:"Domain and DNS Settings"}),"\n",(0,i.jsxs)(n.p,{children:["Buy a domain. Then, enter DNS management from the settings of the domain you purchased from your panel. Create an ",(0,i.jsx)(n.code,{children:"A record"}),". Type a subdomain name in the ",(0,i.jsx)(n.code,{children:"record"})," or ",(0,i.jsx)(n.code,{children:"domain name"})," section. In the ",(0,i.jsx)(n.code,{children:"IP section"}),", write the IP address of your server."]}),"\n",(0,i.jsxs)(n.p,{children:["After these settings, you will have an address such as ",(0,i.jsx)(n.code,{children:"subdomain.domain.xyz"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can control the propagation of your DNS settings ",(0,i.jsx)(n.a,{href:"https://dnschecker.org/",children:"here"}),". You can check the propagation status by searching ",(0,i.jsx)(n.code,{children:"subdomain.domain.xyz"})," on the site."]}),"\n",(0,i.jsx)(n.h3,{id:"create-evm-wallets",children:"Create EVM Wallets"}),"\n",(0,i.jsx)(n.p,{children:"Create two wallets."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Public Wallet: The wallet address where the rewards will come."}),"\n",(0,i.jsx)(n.li,{children:"Signer Wallet: Wallet that will perform signing transactions."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install screen snapd net-tools cron curl unzip -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ssl-certificate",children:"SSL Certificate"}),"\n",(0,i.jsx)(n.p,{children:"In this step, we take the necessary steps to obtain an SSL certificate for the domain we purchased."}),"\n",(0,i.jsx)(n.h3,{id:"certbot-installation",children:"Certbot Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt install python3-certbot-nginx\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generating-lets-encrypt-ssl",children:"Generating Let's Encrypt SSL"}),"\n",(0,i.jsx)(n.p,{children:"Run the code below by editing the email and domain."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DOMAIN"}),": your domain address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EMAIL"}),": your e-mail address"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"DOMAIN=subdomain.domain.xyz\nEMAIL=yourmail@mail.com\ncertbot certonly --standalone -d $DOMAIN. --non-interactive --agree-tos -m $EMAIL\n"})}),"\n",(0,i.jsx)(n.h2,{id:"registering-node",children:"Registering Node"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Registration is now closed."})}),"\n",(0,i.jsxs)(n.p,{children:["Go to the Redbelly ",(0,i.jsx)(n.a,{href:"https://vine.redbelly.network/nds-node-register",children:"registration page"}),", fill in the necessary information and then wait for the node ID to be sent."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-redbelly",children:"Installing Redbelly"}),"\n",(0,i.jsx)(n.h3,{id:"download-binary",children:"Download Binary"}),"\n",(0,i.jsx)(n.p,{children:"Download the Redbelly Binary file and move it to the relevant directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME\nmkdir -p Redbelly\ncurl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/RedbellyBinary > rbbc\nmv rbbc $HOME/Redbelly/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"download-config-file",children:"Download Config File"}),"\n",(0,i.jsx)(n.p,{children:"Download the Config file and move it to the relevant directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ncurl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/config_template.yaml > config.yaml\nmv config.yaml $HOME/Redbelly/\nnano $HOME/Redbelly/config.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Editing the following sections in the config.yaml file;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ip"})," your domain"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," your node id"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"privateKeyHex"})," your signin wallet private key"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ip: subdomain.domain.xyz\nid: XX\n.\n.\n.\n.\nprivateKeyHex: 0x.......................\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then save file. (CTRL X, Y, Enter)"}),"\n",(0,i.jsx)(n.h3,{id:"download-genesis-file",children:"Download Genesis File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ncurl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/genesis.json\nmv genesis.json $HOME/Redbelly/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-observesh-file",children:"Creating observe.sh File"}),"\n",(0,i.jsx)(n.p,{children:"Enter the following codes respectively;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"SSL_DOMAIN=subdomain.domain.xyz // Change it to yours\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'tee $HOME/Redbelly/observe.sh > /dev/null << EOF\n#!/bin/sh\n# filename: observe.sh\nif [ ! -d rbn ]; then\n  echo "rbn doesnt exist. Initialising redbelly"\n  mkdir -p rbn\n  mkdir -p consensus\n  cp config.yaml ./consensus\n\n  ./binaries/rbbc init --datadir=rbn --standalone\n  rm -rf ./rbn/database/chaindata\n  rm -rf ./rbn/database/nodes\n \xa0mkdir -p ./rbn/genesis\n  cp genesis.json ./rbn/genesis\nelse\n  echo "rbn already exists. continuing with existing setup"\n  cp config.yaml ./consensus\nfi\n\n\n# Run EVM\nrm -f log\n./binaries/rbbc run --datadir=rbn --consensus.dir=consensus --tls --consensus.tls --tls.cert=/etc/letsencrypt/live/$SSL_DOMAIN/cert.pem --tls.key=/etc/letsencrypt/live/$SSL_DOMAIN/privkey.pem --http --http.addr=0.0.0.0 --http.corsdomain=* --http.vhosts=* --http.port=8545 --http.api eth,net,web3,rbn --ws --ws.addr=0.0.0.0 --ws.port=8546 --ws.origins="*" --ws.api eth,net,web3,rbn --threshold=200 --timeout=500 --logging.level info --mode production --consensus.type dbft --config.file config.yaml --bootstrap.tries=10 --bootstrap.wait=10 --recovery.tries=10 --recovery.wait=10\nEOF\n'})}),"\n",(0,i.jsx)(n.h3,{id:"creating-start-rbnsh-file",children:"Creating start-rbn.sh File"}),"\n",(0,i.jsx)(n.p,{children:"Enter the following codes respectively;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tee $HOME/Redbelly/start-rbn.sh > /dev/null << EOF\n#!/bin/sh\n# filename: start-rbn.sh\nmkdir -p binaries\nmkdir -p consensus\nchmod +x rbbc\ncp rbbc binaries/rbbc\nmkdir -p logs\nnohup ./observe.sh > ./logs/rbbcLogs 2>&1 &\nEOF\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME/Redbelly\nchmod +x *.sh\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-node",children:"Run Node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME/Redbelly\n./start-rbn.sh\n"})}),"\n",(0,i.jsx)(n.h3,{id:"check-logs",children:"Check Logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tail -f $HOME/logs/rbbcLogs\n"})}),"\n",(0,i.jsx)(n.h2,{id:"verifying-the-node-is-running",children:"Verifying the Node is Running"}),"\n",(0,i.jsx)(n.h3,{id:"add-redbelly-network-to-wallet",children:"Add Redbelly Network to Wallet"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Details"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Network name"})}),(0,i.jsx)(n.td,{children:"Redbelly Network"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"New RPC URL"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://subdomain.domain.xyz:8545",children:"https://subdomain.domain.xyz:8545"})," // Change it to yours"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Chain ID"})}),(0,i.jsx)(n.td,{children:"152"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Currency symbol:"})}),(0,i.jsx)(n.td,{children:"RBNT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Block explorer URL"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://explorer.devnet.redbelly.network/",children:"https://explorer.devnet.redbelly.network/"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"And then check your wallet."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4582:(e,n,l)=>{l.d(n,{Z:()=>i});const i=l.p+"assets/images/Redbelly-Service-Cover-791afbc7eb0aab608efebbe19369b12d.jpg"},1151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>r});var i=l(7294);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);