"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6097],{74502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var a=n(85893),s=n(11151);const d={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},o="Update",l={id:"Testnet Archive/babylon/update",title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",source:"@site/docs/Testnet Archive/babylon/update.md",sourceDirName:"Testnet Archive/babylon",slug:"/Testnet Archive/babylon/update",permalink:"/docs/Testnet Archive/babylon/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/babylon/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet Archive/babylon/statesync"},next:{title:"\u2934\ufe0f Cheatsheets",permalink:"/docs/Testnet Archive/babylon/cheatsheets"}},c={image:n(83249).Z},i=[{value:"Manual Update",id:"manual-update",level:2},{value:"Scheduled Update",id:"scheduled-update",level:2}];function r(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"update",children:"Update"}),"\n",(0,a.jsx)(t.h2,{id:"manual-update",children:"Manual Update"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"sudo systemctl stop babylond\n\ncd || return\nrm -rf babylon\ngit clone https://github.com/babylonchain/babylon\ncd babylon || return\ngit checkout v0.7.2\nmake install\nbabylond version\n\nsudo systemctl start dymd\n"})}),"\n",(0,a.jsx)(t.h2,{id:"scheduled-update",children:"Scheduled Update"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# Install tmux dependency, if needed\nsudo apt update\nsudo apt install -y tmux\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'tmux new -s babylon "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n babylon -i bbn-test-2 -t 1651535 -v 0.7.2 -b babylondd -c https://services.anatolianteam.com/"\n# CTRL+B D to exit the session\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},83249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Babylon-Service-Cover-28dbb10952875d3c2edfdd8e0002355a.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var a=n(67294);const s={},d=a.createContext(s);function o(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);