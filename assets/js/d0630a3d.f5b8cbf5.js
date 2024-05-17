"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8462],{5254:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var t=i(5893),s=i(1151);const l={title:"\ud83d\udcbe Oracle",description:"Oracle installation guide.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},a="Oracle Installation",c={id:"Testnet/Cosmos-Ecosystem/initia/oracle",title:"\ud83d\udcbe Oracle",description:"Oracle installation guide.",source:"@site/docs/Testnet/Cosmos-Ecosystem/initia/oracle.md",sourceDirName:"Testnet/Cosmos-Ecosystem/initia",slug:"/Testnet/Cosmos-Ecosystem/initia/oracle",permalink:"/docs/Testnet/Cosmos-Ecosystem/initia/oracle",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/initia/oracle.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Oracle",description:"Oracle installation guide.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/initia/installation"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/initia/snapshot"}},o={image:i(8459).Z},r=[{value:"Installing the Oracle",id:"installing-the-oracle",level:2},{value:"Creating the Service File",id:"creating-the-service-file",level:2},{value:"Configuring the Initia Node",id:"configuring-the-initia-node",level:2},{value:"Enabling and Starting the Services",id:"enabling-and-starting-the-services",level:2},{value:"Checking the Initia Logs",id:"checking-the-initia-logs",level:2},{value:"Checking the Oracle Logs",id:"checking-the-oracle-logs",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"oracle-installation",children:"Oracle Installation"}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-oracle",children:"Installing the Oracle"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/skip-mev/slinky.git\ncd slinky\ngit checkout v0.4.3\nmake build\nmv build/slinky /usr/local/bin/\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-the-service-file",children:"Creating the Service File"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you ",(0,t.jsx)(n.code,{children:"have not done"})," the node installation according to our guide, change the ",(0,t.jsx)(n.code,{children:"127.0.0.1:${INITIA_PORT}090"})," section in the code below according to which port your node uses. Ex.: ",(0,t.jsx)(n.code,{children:"127.0.0.1:15090"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"tee /etc/systemd/system/slinkyd.service > /dev/null <<EOF\n[Unit]\nDescription=Initia Slinky Oracle\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which slinky) --oracle-config-path $HOME/slinky/config/core/oracle.json --market-map-endpoint 127.0.0.1:${INITIA_PORT}090\nRestart=on-failure\nRestartSec=30\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuring-the-initia-node",children:"Configuring the Initia Node"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you have not done the node setup according to our guide, use the 2nd code below and change the 'PORT' section according to which port your node uses. Ex.: ",(0,t.jsx)(n.code,{children:"PORT=15080"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'sed -i.bak -e "\ns|oracle_address = \\"\\"|oracle_address = \\"127.0.0.1:${INITIA_PORT}080\\"|\n" $HOME/.initia/config/app.toml\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enabling-and-starting-the-services",children:"Enabling and Starting the Services"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable slinkyd.service\nsystemctl start slinkyd.service\nsystemctl restart initiad\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-the-initia-logs",children:"Checking the Initia Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"journalctl -u initiad -f -o cat\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-the-oracle-logs",children:"Checking the Oracle Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"journalctl -u slinkyd -f -o cat\n"})}),"\n",(0,t.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl stop slinkyd && \\\nsystemctl disable slinkyd && \\\nrm /etc/systemd/system/slinkyd.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .slinky slinky && \\\nrm -rf $(which slinkyd)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8459:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Initia-Service-Cover-3cd644af547f7267f9f96f1cf35e856b.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var t=i(7294);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);