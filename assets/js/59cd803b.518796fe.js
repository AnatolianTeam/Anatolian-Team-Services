"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[936],{5401:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(5893),a=n(1151);const o={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg",keywords:["entangle","installation","snapshot","statesync","update"]},l="Snapshot",i={id:"Testnet/Cosmos-Ecosystem/entangle/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/entangle/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/entangle",slug:"/Testnet/Cosmos-Ecosystem/entangle/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/entangle/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/entangle/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg",keywords:["entangle","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/entangle/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/entangle/statesync"}},r={},c=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'systemctl stop entangled\n\ncp $HOME/.entangled/data/priv_validator_state.json $HOME/.entangled/priv_validator_state.json.backup \n\nentangled tendermint unsafe-reset-all --home $HOME/.entangled --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/entangle/ | egrep -o ">entangle_11822-1_.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/entangle/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm\n\nmv $HOME/.entangled/priv_validator_state.json.backup $HOME/.entangled/data/priv_validator_state.json \n\nsystemctl restart entangled && journalctl -u entangled -f -o cat\n'})})]})}function m(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>l});var s=n(7294);const a={},o=s.createContext(a);function l(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:l(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);