"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7246],{89010:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(85893),o=n(11151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","card game","trade","installation","snapshot","statesync","update"]},c="Snapshot",r={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","card game","trade","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync"}},i={image:n(44031).Z},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"systemctl stop Cardchaind\n\ncp $HOME/.cardchaind/data/priv_validator_state.json $HOME/.cardchaind/priv_validator_state.json.backup\n\nCardchaind tendermint unsafe-reset-all --home $HOME/.cardchaind --keep-addr-book\ncurl https://testnet.anatolianteam.com/crowdcontrol/cardtestnet-10.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.cardchaind\n\nmv $HOME/.cardchaind/priv_validator_state.json.backup $HOME/.cardchaind/data/priv_validator_state.json\n\nsystemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat\n"})})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},44031:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/CC-Service-Cover-af316c761b2ff21956661566d1e7feff.jpg"},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>c});var s=n(67294);const o={},a=s.createContext(o);function c(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);