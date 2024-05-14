"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9677],{2139:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=e(5893),i=e(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},o="Snapshot (COMING SOON)",r={id:"Testnet/Cosmos-Ecosystem/initia/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/initia/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/initia",slug:"/Testnet/Cosmos-Ecosystem/initia/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/initia/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/initia/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/initia/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/initia/statesync"}},c={image:e(8459).Z},l=[];function p(t){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snapshot-coming-soon",children:"Snapshot (COMING SOON)"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Snapshots are taken every 6 hours."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install lz4 -y\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'systemctl stop initiad\n\ncp $HOME/.initia/data/priv_validator_state.json $HOME/.initia/priv_validator_state.json.backup \n\ninitiad tendermint unsafe-reset-all --home $HOME/.initia --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/initia/ | egrep -o ">initiation-1.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/initia/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.initia\n\nmv $HOME/.initia/priv_validator_state.json.backup $HOME/.initia/data/priv_validator_state.json \n\nsystemctl restart initiad && journalctl -u initiad -f -o cat\n'})})]})}function d(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},8459:(t,n,e)=>{e.d(n,{Z:()=>s});const s=e.p+"assets/images/Initia-Service-Cover-3cd644af547f7267f9f96f1cf35e856b.jpg"},1151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>o});var s=e(7294);const i={},a=s.createContext(i);function o(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);