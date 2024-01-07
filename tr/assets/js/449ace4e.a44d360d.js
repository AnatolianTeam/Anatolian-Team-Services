"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4415],{8925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=t(5893),l=t(1151);const o={title:"\ud83c\udd99 G\xfcncelleme",description:"Update node with manual or scheduled."},a="G\xfcncelleme",c={id:"Testnet/Cosmos-Ecosystem/babylon/up-babylon",title:"\ud83c\udd99 G\xfcncelleme",description:"Update node with manual or scheduled.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/babylon/up-babylon.md",sourceDirName:"Testnet/Cosmos-Ecosystem/babylon",slug:"/Testnet/Cosmos-Ecosystem/babylon/up-babylon",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/babylon/up-babylon",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/babylon/up-babylon.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 G\xfcncelleme",description:"Update node with manual or scheduled."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/babylon/st-babylon"},next:{title:"\u2934\ufe0f Komutlar",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/babylon/ycs-babylon"}},r={},i=[{value:"Elle G\xfcncelleme",id:"elle-g\xfcncelleme",level:2},{value:"Planl\u0131 G\xfcncelleme",id:"planl\u0131-g\xfcncelleme",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"g\xfcncelleme",children:"G\xfcncelleme"}),"\n",(0,s.jsx)(n.h2,{id:"elle-g\xfcncelleme",children:"Elle G\xfcncelleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo systemctl stop babylond\n\ncd || return\nrm -rf babylon\ngit clone https://github.com/babylonchain/babylon\ncd babylon || return\ngit checkout v0.7.2\nmake install\nbabylond version\n\nsudo systemctl start dymd\n"})}),"\n",(0,s.jsx)(n.h2,{id:"planl\u0131-g\xfcncelleme",children:"Planl\u0131 G\xfcncelleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Kurulu de\u011filse tmux y\xfckleyin \nsudo apt update\nsudo apt install -y tmux\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'tmux new -s babylon "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n babylon -i bbn-test-2 -t 1651535 -v 0.7.2 -b babylondd -c https://services.anatolianteam.com/"\n# CTRL+B ard\u0131nda D bas\u0131p oturumdan \xe7\u0131k\u0131n.\n'})})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var s=t(7294);const l={},o=s.createContext(l);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);