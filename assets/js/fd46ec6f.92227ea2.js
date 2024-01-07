"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1321],{5085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var s=n(5893),a=n(1151);const o={title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled."},l="Update",d={id:"Testnet/Cosmos-Ecosystem/babylon/up-babylon",title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled.",source:"@site/docs/Testnet/Cosmos-Ecosystem/babylon/up-babylon.md",sourceDirName:"Testnet/Cosmos-Ecosystem/babylon",slug:"/Testnet/Cosmos-Ecosystem/babylon/up-babylon",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/up-babylon",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/babylon/up-babylon.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Update",description:"Update node with manual or scheduled."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/st-babylon"},next:{title:"\u2934\ufe0f Cheatsheets",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/ycs-babylon"}},c={},r=[{value:"Manual Update",id:"manual-update",level:2},{value:"Scheduled Update",id:"scheduled-update",level:2}];function i(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"update",children:"Update"}),"\n",(0,s.jsx)(t.h2,{id:"manual-update",children:"Manual Update"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo systemctl stop babylond\n\ncd || return\nrm -rf babylon\ngit clone https://github.com/babylonchain/babylon\ncd babylon || return\ngit checkout v0.7.2\nmake install\nbabylond version\n\nsudo systemctl start dymd\n"})}),"\n",(0,s.jsx)(t.h2,{id:"scheduled-update",children:"Scheduled Update"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Install tmux dependency, if needed\nsudo apt update\nsudo apt install -y tmux\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'tmux new -s babylon "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n babylon -i bbn-test-2 -t 1651535 -v 0.7.2 -b babylondd -c https://services.anatolianteam.com/"\n# CTRL+B D to exit the session\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(7294);const a={},o=s.createContext(a);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);