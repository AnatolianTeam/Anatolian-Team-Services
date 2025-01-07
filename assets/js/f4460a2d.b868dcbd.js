"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7812],{49890:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Testnet/sonaric/ai-node","title":"\ud83d\udcbe AI Node installation","description":"Sonaric AI Node installation guide.","source":"@site/docs/Testnet/sonaric/ai-node.md","sourceDirName":"Testnet/sonaric","slug":"/Testnet/sonaric/ai-node","permalink":"/docs/Testnet/sonaric/ai-node","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/sonaric/ai-node.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe AI Node installation","description":"Sonaric AI Node installation guide.","image":"./img/Sonaric-Service-Cover.jpg","keywords":["Sonaric","AI","node","installation"]},"sidebar":"tutorialSidebar","previous":{"title":"Sonaric","permalink":"/docs/Testnet/sonaric/"},"next":{"title":"\ud83d\udcbe AI Node Update","permalink":"/docs/Testnet/sonaric/update"}}');var s=i(74848),a=i(28453);const o={title:"\ud83d\udcbe AI Node installation",description:"Sonaric AI Node installation guide.",image:"./img/Sonaric-Service-Cover.jpg",keywords:["Sonaric","AI","node","installation"]},l="Sonaric AI Node Installation (VPS)",r={image:i(65410).A},d=[{value:"Installing Docker",id:"installing-docker",level:2},{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the NVM",id:"installing-the-nvm",level:2},{value:"Installing the Linux AI Node",id:"installing-the-linux-ai-node",level:2},{value:"Updating",id:"updating",level:2},{value:"Node Information",id:"node-information",level:2},{value:"Granting Access to GUI",id:"granting-access-to-gui",level:2},{value:"Backuping the Identitiy",id:"backuping-the-identitiy",level:2},{value:"Getting the Operator Role",id:"getting-the-operator-role",level:2},{value:"Cheking Sonaric Points",id:"cheking-sonaric-points",level:2},{value:"Changing the Node Name",id:"changing-the-node-name",level:2},{value:"Checking the Node",id:"checking-the-node",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sonaric-ai-node-installation-vps",children:"Sonaric AI Node Installation (VPS)"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-nvm",children:"Installing the NVM"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"source ~/.bashrc\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"nvm install 22\nnvm use v22\nnpm install -g npm@latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-linux-ai-node",children:"Installing the Linux AI Node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'sh -c "$(curl -fsSL https://raw.githubusercontent.com/monk-io/sonaric-install/main/linux-install-sonaric.sh)"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt-get update\napt-get install sonicd sonic\n"})}),"\n",(0,s.jsx)(n.h2,{id:"node-information",children:"Node Information"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sonic node-info\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output of the above code should be similar to the following."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u2728 Node information loaded:\n \u251c\u2500\ud83e\uddca ID 12XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n \u251c\u2500\ud83d\udce5 Name bright-slate-wharf\n \u251c\u2500\ud83e\uddca Version v1.5.0\n \u251c\u2500\ud83e\uddca Country\n \u251c\u2500\ud83e\uddca Daemon Version v1.5.0\n \u2514\u2500\ud83e\udde9 Host Info\n \u251c\u2500\ud83e\uddca OS linux\n \u251c\u2500\ud83e\uddca Platform ubuntu\n \u251c\u2500\ud83e\uddca Platform Version 22.04\n \u2514\u2500\ud83e\uddca Hostname vmd95175.contaboserver.net\n"})}),"\n",(0,s.jsx)(n.h2,{id:"granting-access-to-gui",children:"Granting Access to GUI"}),"\n",(0,s.jsx)(n.p,{children:"In the code below, write your server IP address where it says 'YOUR SERVER_IP_ADDRESS' and run the code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"YOUR_VPS_IP=YOUR SERVER_IP_ADDRESS\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run the code below as is, without modifications."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ssh -L 127.0.0.1:44003:127.0.0.1:44003 -L 127.0.0.1:44004:127.0.0.1:44004 -L 127.0.0.1:44005:127.0.0.1:44005 -L 127.0.0.1:44006 :127.0. 0.1:44006 root@$YOUR_VPS_IP\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When you run the above code, first type 'yes' and 'enter', then enter your 'server password' and press 'enter'."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"backuping-the-identitiy",children:"Backuping the Identitiy"}),"\n",(0,s.jsx)(n.p,{children:"In the code below, write your node name where it says 'YOUR_NODE_NAME' and run the code. Then set the password."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sonic identity-export -o YOUR_NODE_NAME.identity\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"With the above code, your identity file will be saved in the root directory, do not forget to backup it."})}),"\n",(0,s.jsx)(n.h2,{id:"getting-the-operator-role",children:"Getting the Operator Role"}),"\n",(0,s.jsxs)(n.p,{children:["Join the Sonaric ",(0,s.jsx)(n.a,{href:"https://discord.gg/K75dYM5AEG",children:"Discord"})," server, then type /addnode in the ",(0,s.jsx)(n.code,{children:"#general"})," channel and send a message. Before running the code below, delete the area where it says ",(0,s.jsx)(n.code,{children:"ADDNODE"}),", write the code given to you and run the code that way."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -sSL http://get.sonaric.xyz/scripts/register.sh | bash -s -- ADDNODE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cheking-sonaric-points",children:"Cheking Sonaric Points"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sonic points\n"})}),"\n",(0,s.jsx)(n.h2,{id:"changing-the-node-name",children:"Changing the Node Name"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sonic node-rename\n"})}),"\n",(0,s.jsx)(n.h2,{id:"checking-the-node",children:"Checking the Node"}),"\n",(0,s.jsxs)(n.p,{children:["Go to Sonaric ",(0,s.jsx)(n.a,{href:"https://tracker.sonaric.xyz/",children:"explorer"})," and type your name in the search box."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65410:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Sonaric-Service-Cover-28ddc1492145896a86fb1df9eee97e52.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);