"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8167],{5691:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=e(5893),o=e(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/babylon/img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},l="Snapshot",i={id:"Testnet/Cosmos-Ecosystem/babylon/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/babylon/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/babylon",slug:"/Testnet/Cosmos-Ecosystem/babylon/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/babylon/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/babylon/img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/statesync"}},r={},c=[];function d(t){const n={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'systemctl stop babylond\n\ncp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup \n\nbabylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.babylond\n\nmv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json \n\nsystemctl restart babylond && journalctl -u babylond -f -o cat\n'})})]})}function b(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>i,a:()=>l});var s=e(7294);const o={},a=s.createContext(o);function l(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function i(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);