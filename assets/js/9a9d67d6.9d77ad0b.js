"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5186],{9914:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var e=a(5893),s=a(1151);const o={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/mantra/img/Mantra-Service-Cover.jpg",keywords:["mantra","chain","installation","snapshot","statesync","update"]},r="Snapshot",i={id:"Testnet/Cosmos-Ecosystem/mantra/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/mantra",slug:"/Testnet/Cosmos-Ecosystem/mantra/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/mantra/img/Mantra-Service-Cover.jpg",keywords:["mantra","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/statesync"}},c={},m=[];function l(t){const n={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-shell",children:'systemctl stop mantrachaind\n\ncp $HOME/.mantrachain/data/priv_validator_state.json $HOME/.mantrachain/priv_validator_state.json.backup \n\nmantrachaind tendermint unsafe-reset-all --home $HOME/.mantrachain --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.mantrachain\n\nmv $HOME/.mantrachain/priv_validator_state.json.backup $HOME/.mantrachain/data/priv_validator_state.json \n\nsystemctl restart mantrachaind && journalctl -u mantrachaind -f -o cat\n'})})]})}function p(t={}){const{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(l,{...t})}):l(t)}},1151:(t,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var e=a(7294);const s={},o=e.createContext(s);function r(t){const n=e.useContext(o);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function i(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),e.createElement(o.Provider,{value:n},t.children)}}}]);