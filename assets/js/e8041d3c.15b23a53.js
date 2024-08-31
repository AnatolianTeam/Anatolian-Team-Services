"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5046],{18056:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const o={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},l="Snapshot",r={id:"Testnet Archive/babylon/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet Archive/babylon/snapshot.md",sourceDirName:"Testnet Archive/babylon",slug:"/Testnet Archive/babylon/snapshot",permalink:"/docs/Testnet Archive/babylon/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/babylon/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet Archive/babylon/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet Archive/babylon/statesync"}},i={image:n(83249).Z},c=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:'systemctl stop babylond\n\ncp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup \n\nbabylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.babylond\n\nmv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json \n\nsystemctl restart babylond && journalctl -u babylond -f -o cat\n'})})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},83249:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Babylon-Service-Cover-28dbb10952875d3c2edfdd8e0002355a.jpg"},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>l});var a=n(67294);const s={},o=a.createContext(s);function l(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);