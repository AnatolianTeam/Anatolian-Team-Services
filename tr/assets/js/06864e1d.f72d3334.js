"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4372],{17161:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(85893),o=t(11151);const a={title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",position:3,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","network","kurulum","snapshot","statesync","g\xfcncelleme"]},i="Snapshot (YAKINDA)",r={id:"Mainnet/Cosmos-Ecosystem/crossfi/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/crossfi/snapshot.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/crossfi",slug:"/Mainnet/Cosmos-Ecosystem/crossfi/snapshot",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/crossfi/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/crossfi/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",position:3,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/crossfi/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/crossfi/statesync"}},c={image:t(36474).Z},l=[];function p(s){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"snapshot-yakinda",children:"Snapshot (YAKINDA)"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'systemctl stop crossfid\n\ncp $HOME/.mineplex-chain/data/priv_validator_state.json $HOME/.mineplex-chain/priv_validator_state.json.backup \n\ncrossfid tendermint unsafe-reset-all --home $HOME/.mineplex-chain --keep-addr-book\nSNAP_NAME=$(curl -s COMING_SOON | egrep -o ">crossfi-evm-testnet-1_.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/crossfi/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.mineplex-chain\n\nmv $HOME/.mineplex-chain/priv_validator_state.json.backup $HOME/.mineplex-chain/data/priv_validator_state.json \n\nsystemctl restart crossfid && journalctl -u crossfid -f -o cat\n'})})]})}function m(s={}){const{wrapper:e}={...(0,o.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(p,{...s})}):p(s)}},36474:(s,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/CrossFi-Service-Cover-dbcaf4e2e572b560c7e0ec3c268daf1c.jpg"},11151:(s,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var n=t(67294);const o={},a=n.createContext(o);function i(s){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(o):s.components||o:i(s.components),n.createElement(a.Provider,{value:e},s.children)}}}]);