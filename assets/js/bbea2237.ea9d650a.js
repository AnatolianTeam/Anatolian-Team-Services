"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7396],{1808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var s=a(5893),n=a(1151);const o={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Lava-Service-Cover.jpg",keywords:["lava","installation","snapshot","statesync","update"]},d="Update",l={id:"Testnet/Cosmos-Ecosystem/lava/update",title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",source:"@site/docs/Testnet/Cosmos-Ecosystem/lava/update.md",sourceDirName:"Testnet/Cosmos-Ecosystem/lava",slug:"/Testnet/Cosmos-Ecosystem/lava/update",permalink:"/docs/Testnet/Cosmos-Ecosystem/lava/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/lava/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Lava-Service-Cover.jpg",keywords:["lava","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/lava/statesync"},next:{title:"\u2934\ufe0f Cheatsheets",permalink:"/docs/Testnet/Cosmos-Ecosystem/lava/cheatsheets"}},c={image:a(3877).Z},r=[{value:"Manual Update",id:"manual-update",level:2},{value:"Scheduled Update",id:"scheduled-update",level:2}];function i(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"update",children:"Update"}),"\n",(0,s.jsx)(t.h2,{id:"manual-update",children:"Manual Update"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"systemctl stop lavad\nexport LAVA_BINARY=lavad\ncd || return\nrm -rf lava\ngit clone https://github.com/lavanet/lava\ncd lava || return\ngit checkout v1.0.1\ninstall\nsystemctl start lavad\njournalctl -u lavad -f --no-hostname -o cat\n"})}),"\n",(0,s.jsx)(t.h2,{id:"scheduled-update",children:"Scheduled Update"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Install tmux dependency, if needed\napt update\napt install -y tmux\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},3877:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/Lava-Service-Cover-4290caf19153fab30dec650b506e356f.jpg"},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>d});var s=a(7294);const n={},o=s.createContext(n);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);