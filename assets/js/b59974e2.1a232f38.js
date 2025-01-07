"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7314],{48015:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"Mainnet/Q-Blockhahin/ob-q","title":"\u2699\ufe0f OmniBridge Setup","description":"OmniBridge Oracle guide.","source":"@site/docs/Mainnet/Q-Blockhahin/ob-q.md","sourceDirName":"Mainnet/Q-Blockhahin","slug":"/Mainnet/Q-Blockhahin/omnibridge-setup","permalink":"/docs/Mainnet/Q-Blockhahin/omnibridge-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Q-Blockhahin/ob-q.md","tags":[],"version":"current","frontMatter":{"title":"\u2699\ufe0f OmniBridge Setup","description":"OmniBridge Oracle guide.","image":"./img/Q-Service-Cover.jpg","keywords":["Q","blockchain","OmniBridge","Oracle","installation","snapshot","statesync","update"],"slug":"omnibridge-setup"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcbe Installation","permalink":"/docs/Mainnet/Q-Blockhahin/installation"},"next":{"title":"\ud83c\udd99 Update Q","permalink":"/docs/Mainnet/Q-Blockhahin/update"}}');var r=i(74848),d=i(28453);const l={title:"\u2699\ufe0f OmniBridge Setup",description:"OmniBridge Oracle guide.",image:"./img/Q-Service-Cover.jpg",keywords:["Q","blockchain","OmniBridge","Oracle","installation","snapshot","statesync","update"],slug:"omnibridge-setup"},a="OmniBridge Setup",c={image:i(41969).A},s=[{value:"Launching OmniBridge Oracle",id:"launching-omnibridge-oracle",level:2},{value:"Editing .env File",id:"editing-env-file",level:3},{value:"Starting Oracle",id:"starting-oracle",level:3},{value:"Setup and launch the OmniBridge-UI",id:"setup-and-launch-the-omnibridge-ui",level:2},{value:"Editing .env File",id:"editing-env-file-1",level:3},{value:"Starting Service",id:"starting-service",level:3},{value:"Setup and launch the OmniBridge-ALM",id:"setup-and-launch-the-omnibridge-alm",level:2},{value:"Editing .env File",id:"editing-env-file-2",level:3},{value:"Starting Service",id:"starting-service-1",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"omnibridge-setup",children:"OmniBridge Setup"})}),"\n",(0,r.jsx)(n.p,{children:"On this page, necessary settings will be made for OmniBridge Oracle, OmniBridge-UI and OmniBridge-ALM."}),"\n",(0,r.jsx)(n.h2,{id:"launching-omnibridge-oracle",children:"Launching OmniBridge Oracle"}),"\n",(0,r.jsx)(n.h3,{id:"editing-env-file",children:"Editing .env File"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/omnibridge-oracle\ncp .env.mainnet .env\nnano .env\n"})}),"\n",(0,r.jsx)(n.p,{children:"When you open the file, we fill in the relevant fields specified in the table below, save it in the file and exit."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"PARAMETER NAME"}),(0,r.jsx)(n.th,{children:"VALUE"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ORACLE_VALIDATOR_ADDRESS"}),(0,r.jsx)(n.td,{children:"Provide your Q validator address. Example: 0xac8e5047d122f801..."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY"}),(0,r.jsx)(n.td,{children:"Provide your Q validator private key. Example: a385db8296ceb9a...."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COMMON_HOME_RPC_URL"}),(0,r.jsxs)(n.td,{children:["You can keep the default, use ",(0,r.jsx)(n.a,{href:"https://rpc.q.org",children:"https://rpc.q.org"})," or use the RPC endpoint of our own full node if you are operating one."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COMMON_FOREIGN_RPC_URL"}),(0,r.jsxs)(n.td,{children:["Provide an RPC endpoint of a client of the blockchain on the other side of the bridge. Q mainnet bridges to the Ethereum mainnet. You can use your own ethereum client, a public endpoint or create an infura account for free to get a personal Ethereum mainnet access point (e.g. ",(0,r.jsx)(n.a,{href:"https://mainnet.infura.io/v3/1673abc",children:"https://mainnet.infura.io/v3/1673abc"}),"....)."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"starting-oracle",children:"Starting Oracle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setup-and-launch-the-omnibridge-ui",children:"Setup and launch the OmniBridge-UI"}),"\n",(0,r.jsx)(n.h3,{id:"editing-env-file-1",children:"Editing .env File"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/omnibridge-ui\ncp .env.mainnet .env\nnano .env\n"})}),"\n",(0,r.jsx)(n.p,{children:"When you open the file and then fill in the relevant field specified in the table below, and save it in the file and exit."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"PARAMETER NAME"}),(0,r.jsx)(n.th,{children:"VALUE"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"REACT_APP_FOREIGN_RPC_URL"}),(0,r.jsxs)(n.td,{children:["Provide an RPC endpoint of a client of the blockchain on the other side of the bridge, e.g. ",(0,r.jsx)(n.a,{href:"https://mainnet.infura.io/v3/1673abc",children:"https://mainnet.infura.io/v3/1673abc"}),"...."]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"starting-service",children:"Starting Service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setup-and-launch-the-omnibridge-alm",children:"Setup and launch the OmniBridge-ALM"}),"\n",(0,r.jsx)(n.h3,{id:"editing-env-file-2",children:"Editing .env File"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/omnibridge-alm\ncp .env.mainnet .env\nnano .env\n"})}),"\n",(0,r.jsx)(n.p,{children:"When you open the file and then fill in the relevant fields specified in the table below, and save it in the file and exit."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"PARAMETER NAME"}),(0,r.jsx)(n.th,{children:"VALUE"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PORT"}),(0,r.jsx)(n.td,{children:"You can keep the default 8090 or change to some other port."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COMMON_HOME_RPC_URL"}),(0,r.jsxs)(n.td,{children:["You can keep the default, use ",(0,r.jsx)(n.a,{href:"https://rpc.q.org",children:"https://rpc.q.org"})," or use the RPC endpoint of our own full node if you are operating one."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COMMON_FOREIGN_RPC_URL"}),(0,r.jsxs)(n.td,{children:["Provide an RPC endpoint of a client of the blockchain on the other side of the bridge, e.g. ",(0,r.jsx)(n.a,{href:"https://mainnet.infura.io/v3/1673abc",children:"https://mainnet.infura.io/v3/1673abc"}),"...."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ALM_HOME_EXPLORER_TX_TEMPLATE"}),(0,r.jsxs)(n.td,{children:["You can keep the default ",(0,r.jsx)(n.a,{href:"https://explorer.q.org/tx/%25s",children:"https://explorer.q.org/tx/%s"})," or change with the IP of your own full node block explorer."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"starting-service-1",children:"Starting Service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose up -d\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},41969:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Q-Service-Cover-ccc2148be3dccc7a75fd36ddf2d8007a.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const r={},d=t.createContext(r);function l(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);