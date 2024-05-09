"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2181],{5472:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(5893),a=n(1151);const o={title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},r="Snapshot (YAKINDA)",c={id:"Testnet/Cosmos-Ecosystem/0g/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/statesync"}},i={image:n(3537).Z},l=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"snapshot-yakinda",children:"Snapshot (YAKINDA)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'systemctl stop 0gchaind\n\ncp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup \n\n0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/0g/ | egrep -o ">zgtendermint_9000-1.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/0g/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.0gchain\n\nmv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json \n\nsystemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat\n'})})]})}function p(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},3537:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/0G-Service-Cover-a5e6bc44f298d49268bd4cb4871397dc.jpg"},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var s=n(7294);const a={},o=s.createContext(a);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);