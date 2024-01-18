"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2591],{2101:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=s(5893),o=s(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/OKP4-Service-Cover.jpg",keywords:["okp4","open","knowledge","protocol","kurulum","snapshot","statesync","g\xfcncelleme"]},r="Snapshot (YAKINDA)",c={id:"Testnet/Cosmos-Ecosystem/okp4/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/okp4/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/okp4",slug:"/Testnet/Cosmos-Ecosystem/okp4/snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/okp4/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/okp4/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/OKP4-Service-Cover.jpg",keywords:["okp4","open","knowledge","protocol","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/okp4/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/okp4/statesync"}},i={image:s(1886).Z},p=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"snapshot-yakinda",children:"Snapshot (YAKINDA)"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install snapd -y\nsnap install lz4\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'systemctl stop okp4d\n\ncp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup \n\nokp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book\nSNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.okp4d\n\nmv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json \n\nsystemctl restart okp4d && journalctl -u okp4d -f -o cat\n```shell\n'})})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},1886:(t,e,s)=>{s.d(e,{Z:()=>n});const n=s.p+"assets/images/OKP4-Service-Cover-78d7425c88b9368c3145ecbb2b872932.jpg"},1151:(t,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var n=s(7294);const o={},a=n.createContext(o);function r(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);