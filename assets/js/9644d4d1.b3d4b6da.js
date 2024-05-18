"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6007],{5984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(5893),o=n(1151);const s={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Jackal-Service-Cover.jpg",keywords:["jackal","protocol","canine","network","installation","snapshot","statesync","update"]},c="Update",i={id:"Mainnet/Cosmos-Ecosystem/jackal-protocol/update",title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",source:"@site/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/update.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/jackal-protocol",slug:"/Mainnet/Cosmos-Ecosystem/jackal-protocol/update",permalink:"/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Jackal-Service-Cover.jpg",keywords:["jackal","protocol","canine","network","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/statesync"},next:{title:"\u2934\ufe0f Cheatsheets",permalink:"/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/cheatsheets"}},r={image:n(2850).Z},l=[{value:"Version 3.2.2",id:"version-322",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"update",children:"Update"}),"\n",(0,a.jsx)(t.h2,{id:"version-322",children:"Version 3.2.2"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"systemctl stop canined\ncd $HOME\nrm -rf canine-chain\ngit clone https://github.com/JackalLabs/canine-chain.git\ncd canine-chain\ngit checkout v3.2.2\nmake install\n\nsystemctl restart canined && journalctl -u canined -f -o cat\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Jackal-Service-Cover-d6cdba4b0e65bd1773c32cbf0874bac1.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var a=n(7294);const o={},s=a.createContext(o);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);