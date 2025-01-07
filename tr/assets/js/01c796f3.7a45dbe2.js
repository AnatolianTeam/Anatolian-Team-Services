"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[652],{63818:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"Testnet Archive/initia/update","title":"\ud83c\udd99 Update","description":"Update node with manual or scheduled.","source":"@site/docs/Testnet Archive/initia/update.md","sourceDirName":"Testnet Archive/initia","slug":"/Testnet Archive/initia/update","permalink":"/tr/docs/Testnet Archive/initia/update","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/initia/update.md","tags":[],"version":"current","frontMatter":{"title":"\ud83c\udd99 Update","description":"Update node with manual or scheduled.","image":"./img/Initia-Service-Cover.jpg","keywords":["initia","oracle","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd04 StateSync","permalink":"/tr/docs/Testnet Archive/initia/statesync"},"next":{"title":"\u2934\ufe0f Cheatsheets","permalink":"/tr/docs/Testnet Archive/initia/ycheatsheets"}}');var a=i(74848),s=i(28453);const d={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},c="Update",r={image:i(18850).A},o=[{value:"Manual Update",id:"manual-update",level:2},{value:"Scheduled Update",id:"scheduled-update",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"update",children:"Update"})}),"\n",(0,a.jsx)(t.h2,{id:"manual-update",children:"Manual Update"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Update v0.2.15"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"cd $HOME\nrm -rf initia\ngit clone https://github.com/initia-labs/initia.git\ncd initia\ngit checkout v0.2.15\nmake build\nsudo mv $HOME/initia/build/initiad $(which initiad)\nsudo systemctl restart initiad && sudo journalctl -u initiad -f\n"})}),"\n",(0,a.jsx)(t.h2,{id:"scheduled-update",children:"Scheduled Update"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# Install tmux dependency, if needed\nsudo apt update\nsudo apt install -y tmux\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},18850:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Initia-Service-Cover-3cd644af547f7267f9f96f1cf35e856b.jpg"},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>c});var n=i(96540);const a={},s=n.createContext(a);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);