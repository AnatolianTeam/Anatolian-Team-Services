"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1900],{658:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var s=e(5893),o=e(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot."},l="Snapshot",r={id:"Testnet/Cosmos-Ecosystem/babylon/sn-babylon",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/babylon/sn-babylon.md",sourceDirName:"Testnet/Cosmos-Ecosystem/babylon",slug:"/Testnet/Cosmos-Ecosystem/babylon/sn-babylon",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/sn-babylon",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/babylon/sn-babylon.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/ins-babylon"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/st-babylon"}},c={},i=[];function b(t){const n={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# install lz4\napt update\napt install snapd -y\nsnap install lz4\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'systemctl stop babylond\n\ncp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup \n\nbabylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/babylon/ | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.babylond\n\nmv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json \n\nsystemctl restart babylond && journalctl -u babylond -f -o cat\n```shell\n'})})]})}function d(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(b,{...t})}):b(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>l});var s=e(7294);const o={},a=s.createContext(o);function l(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);