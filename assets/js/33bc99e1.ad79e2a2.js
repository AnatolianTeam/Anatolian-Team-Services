"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8167],{5691:(t,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var e=s(5893),o=s(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot."},l="Snapshot",r={id:"Testnet/Cosmos-Ecosystem/babylon/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/babylon/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/babylon",slug:"/Testnet/Cosmos-Ecosystem/babylon/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/babylon/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/statesync"}},c={},i=[];function d(t){const n={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-shell",children:"# install lz4\napt update\napt install snapd -y\nsnap install lz4\n"})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-shell",children:'systemctl stop babylond\n\ncp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup \n\nbabylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.babylond\n\nmv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json \n\nsystemctl restart babylond && journalctl -u babylond -f -o cat\n```shell\n'})})]})}function p(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(d,{...t})}):d(t)}},1151:(t,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var e=s(7294);const o={},a=e.createContext(o);function l(t){const n=e.useContext(a);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),e.createElement(a.Provider,{value:n},t.children)}}}]);