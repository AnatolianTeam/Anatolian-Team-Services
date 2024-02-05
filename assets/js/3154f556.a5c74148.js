"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2282],{5488:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(5893),o=a(1151);const r={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"https://github.com/AnatolianTeam/Anatolian-Team-Services/blob/a8dce3356e553aad55bb6531935b292faca6c2e2/docs/Mainnet/Forta/img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},i="Update",s={id:"Mainnet/Forta/update",title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",source:"@site/docs/Mainnet/Forta/update.md",sourceDirName:"Mainnet/Forta",slug:"/Mainnet/Forta/update",permalink:"/docs/Mainnet/Forta/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Forta/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"https://github.com/AnatolianTeam/Anatolian-Team-Services/blob/a8dce3356e553aad55bb6531935b292faca6c2e2/docs/Mainnet/Forta/img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Mainnet/Forta/installation"},next:{title:"\ud83c\udd99 Migration",permalink:"/docs/Mainnet/Forta/vmigrate"}},c={},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"update",children:"Update"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:"systemctl stop forta\ncurl https://dist.forta.network/artifacts/forta -o $(which forta)\nchmod +x /usr/bin/forta\nforta version \nsystemctl start forta\njournalctl -fu forta\n"})})]})}function u(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},1151:(t,e,a)=>{a.d(e,{Z:()=>s,a:()=>i});var n=a(7294);const o={},r=n.createContext(o);function i(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);