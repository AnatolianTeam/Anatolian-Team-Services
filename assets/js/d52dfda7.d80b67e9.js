"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7348],{72700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(85893),s=n(11151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/OKP4-Service-Cover.jpg",keywords:["okp4","open knowledge protocol","installation","snapshot","statesync","update"]},r="Snapshot",i={id:"Testnet Archive/okp4/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet Archive/okp4/snapshot.md",sourceDirName:"Testnet Archive/okp4",slug:"/Testnet Archive/okp4/snapshot",permalink:"/docs/Testnet Archive/okp4/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/okp4/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/OKP4-Service-Cover.jpg",keywords:["okp4","open knowledge protocol","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet Archive/okp4/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet Archive/okp4/statesync"}},p={image:n(12806).Z},c=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:'systemctl stop okp4d\n\ncp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup \n\nokp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/okp4/ | egrep -o ">okp4-nemeton-1_.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/okp4/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.okp4d\n\nmv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json \n\nsystemctl restart okp4d && journalctl -u okp4d -f -o cat\n'})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},12806:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/OKP4-Service-Cover-5a3197a260786efb895e4aaa9ad0df2d.jpg"},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);