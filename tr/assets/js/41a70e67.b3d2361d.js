"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5645],{2260:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(5893),o=n(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","kurulum","snapshot","statesync","g\xfcncelleme"]},r="Snapshot",c={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync"}},i={image:n(6355).Z},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'systemctl stop Cardchaind\n\ncp $HOME/.Cardchaind/data/priv_validator_state.json $HOME/.Cardchaind/priv_validator_state.json.backup \n\nCardchaind tendermint unsafe-reset-all --home $HOME/.Cardchaind --keep-addr-book\nSNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.Cardchaind\n\nmv $HOME/.Cardchaind/priv_validator_state.json.backup $HOME/.Cardchaind/data/priv_validator_state.json \n\nsystemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat\n'})})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},6355:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/CC-Service-Cover-a353aff78b38f40b5fb434a2a1a8f2b2.jpg"},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var s=n(7294);const o={},a=s.createContext(o);function r(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);