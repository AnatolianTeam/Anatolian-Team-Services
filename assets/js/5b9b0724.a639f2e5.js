"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7202],{81212:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Mainnet/penumbra/proposal","title":"\ud83d\uddf3\ufe0f Proposal","description":"Penumbra Proposal Guide.","source":"@site/docs/Mainnet/penumbra/proposal.md","sourceDirName":"Mainnet/penumbra","slug":"/Mainnet/penumbra/proposal","permalink":"/docs/Mainnet/penumbra/proposal","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/penumbra/proposal.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\uddf3\ufe0f Proposal","description":"Penumbra Proposal Guide.","image":"./img/Penumbra-Service-Cover.jpg","keywords":["penumbra","stake","user","guide"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcbe Installation","permalink":"/docs/Mainnet/penumbra/installation"},"next":{"title":"\ud83c\udd99 Update","permalink":"/docs/Mainnet/penumbra/update"}}');var r=l(74848),i=l(28453);const s={title:"\ud83d\uddf3\ufe0f Proposal",description:"Penumbra Proposal Guide.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","stake","user","guide"]},t="Penumbra Proposal Guide for the Delegators",o={image:l(7913).A},c=[{value:"Installing the Penumbra PCLI",id:"installing-the-penumbra-pcli",level:2},{value:"Updating pcli",id:"updating-pcli",level:3},{value:"Importing the Wallet",id:"importing-the-wallet",level:2},{value:"Confirming Your Wallet Address",id:"confirming-your-wallet-address",level:3},{value:"Sync Wallet",id:"sync-wallet",level:3},{value:"Checking Your Balance",id:"checking-your-balance",level:3},{value:"Reading the Propposal",id:"reading-the-propposal",level:2},{value:"Voting",id:"voting",level:2},{value:"\ud83c\udf89 Congratulations",id:"-congratulations",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"penumbra-proposal-guide-for-the-delegators",children:"Penumbra Proposal Guide for the Delegators"})}),"\n",(0,r.jsx)(n.p,{children:"Here is a simple guide for delegates to cast their votes."}),"\n",(0,r.jsx)(n.h2,{id:"installing-the-penumbra-pcli",children:"Installing the Penumbra PCLI"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Ubuntu version must be minimum 22.04"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.1/pcli-installer.sh | sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source $HOME/.cargo/env\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli --version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The version output will be ",(0,r.jsx)(n.code,{children:"pcli v0.79.1"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"updating-pcli",children:"Updating pcli"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"If you have installed it before and the previous pcli version is installed on your server, run the code below. If not, you do not need to do this."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli view reset\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"No wallet needs to be generated. The existing wallet will be used automatically."})}),"\n",(0,r.jsx)(n.h2,{id:"importing-the-wallet",children:"Importing the Wallet"}),"\n",(0,r.jsx)(n.p,{children:"After entering the code below, type your wallet words (you won't be able to see your words when you type, they will be written in the background) and press enter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli init --grpc-url https://grpc-penumbra.anatolianteam.com soft-kms import-phrase \n"})}),"\n",(0,r.jsx)(n.h3,{id:"confirming-your-wallet-address",children:"Confirming Your Wallet Address"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pc view address 0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sync-wallet",children:"Sync Wallet"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli view sync\n"})}),"\n",(0,r.jsx)(n.h3,{id:"checking-your-balance",children:"Checking Your Balance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pc view balance\n"})}),"\n",(0,r.jsx)(n.h2,{id:"reading-the-propposal",children:"Reading the Propposal"}),"\n",(0,r.jsx)(n.p,{children:"If you would like to get information about the proposal put to vote, enter the code below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli query governance proposal 0 definition\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voting",children:"Voting"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli tx vote yes --on 0\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli tx vote no --on 0\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli tx vote abstain --on 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"-congratulations",children:"\ud83c\udf89 Congratulations"}),"\n",(0,r.jsx)(n.p,{children:"You voted to move from Penumbra Phase 0 to Phase 1."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7913:(e,n,l)=>{l.d(n,{A:()=>a});const a=l.p+"assets/images/Penumbra-Service-Cover-9b8346501f1f076cba2beda8f0510843.jpg"},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>t});var a=l(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);