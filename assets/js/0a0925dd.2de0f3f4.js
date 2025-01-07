"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6232],{63705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Testnet/Cosmos-Ecosystem/chain4energy/snapshot","title":"\ud83d\udcf8 Snapshot","description":"Node installation with snapshot.","source":"@site/docs/Testnet/Cosmos-Ecosystem/chain4energy/snapshot.md","sourceDirName":"Testnet/Cosmos-Ecosystem/chain4energy","slug":"/Testnet/Cosmos-Ecosystem/chain4energy/snapshot","permalink":"/docs/Testnet/Cosmos-Ecosystem/chain4energy/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/chain4energy/snapshot.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcf8 Snapshot","description":"Node installation with snapshot.","image":"./img/C4E-Service-Cover.jpg","keywords":["chain4energy","c4e","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcbe Installation","permalink":"/docs/Testnet/Cosmos-Ecosystem/chain4energy/installation"},"next":{"title":"\ud83d\udd04 StateSync","permalink":"/docs/Testnet/Cosmos-Ecosystem/chain4energy/statesync"}}');var a=n(74848),o=n(28453);const c={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/C4E-Service-Cover.jpg",keywords:["chain4energy","c4e","installation","snapshot","statesync","update"]},i="Snapshot",r={image:n(91883).A},l=[];function p(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"snapshot",children:"Snapshot"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'systemctl stop c4ed\n\ncp $HOME/.c4e-chain/data/priv_validator_state.json $HOME/.c4e-chain/priv_validator_state.json.backup \n\nc4ed tendermint unsafe-reset-all --home $HOME/.c4e-chain --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/c4e/ | egrep -o ">babajaga-1.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/c4e/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.c4e-chain\n\nmv $HOME/.c4e-chain/priv_validator_state.json.backup $HOME/.c4e-chain/data/priv_validator_state.json \n\nsystemctl restart c4ed && journalctl -u c4ed -f -o cat\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},91883:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/C4E-Service-Cover-ca09a9205c62c51e0f6a6b275ef10074.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);