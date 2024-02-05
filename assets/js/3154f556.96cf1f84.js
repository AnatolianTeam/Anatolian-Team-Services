"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2282],{5488:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(5893),r=n(1151);const o={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},i="Update",s={id:"Mainnet/Forta/update",title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",source:"@site/docs/Mainnet/Forta/update.md",sourceDirName:"Mainnet/Forta",slug:"/Mainnet/Forta/update",permalink:"/docs/Mainnet/Forta/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Forta/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Mainnet/Forta/installation"},next:{title:"\ud83c\udd99 Migration",permalink:"/docs/Mainnet/Forta/vmigrate"}},c={image:n(3204).Z},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"update",children:"Update"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"systemctl stop forta\ncurl https://dist.forta.network/artifacts/forta -o $(which forta)\nchmod +x /usr/bin/forta\nforta version \nsystemctl start forta\njournalctl -fu forta\n"})})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},3204:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Forta-Service-Cover-eb7cdd6941c02402891005b5fb498ba7.jpg"},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>i});var a=n(7294);const r={},o=a.createContext(r);function i(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);