"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7729],{1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(5893),s=n(1151);const o={title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","katman","kurulum","snapshot","statesync","g\xfcncelleme"]},r="Snapshot (YAKINDA)",l={id:"Testnet/Cosmos-Ecosystem/alignedlayer/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/alignedlayer/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/alignedlayer",slug:"/Testnet/Cosmos-Ecosystem/alignedlayer/snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/alignedlayer/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/alignedlayer/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Snapshot ile node senkronizasyonu.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","katman","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/alignedlayer/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/alignedlayer/statesync"}},i={image:n(6677).Z},c=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"snapshot-yakinda",children:"Snapshot (YAKINDA)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'systemctl stop alignedlayerd\n\ncp $HOME/.alignedlayer/data/priv_validator_state.json $HOME/.alignedlayer/priv_validator_state.json.backup \n\nalignedlayerd tendermint unsafe-reset-all --home $HOME/.alignedlayer --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/aligned/ | egrep -o ">alignedlayer.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/aligned/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.alignedlayer\n\nmv $HOME/.alignedlayer/priv_validator_state.json.backup $HOME/.alignedlayer/data/priv_validator_state.json \n\nsystemctl restart alignedlayerd && journalctl -u alignedlayerd -f -o cat\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6677:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Aligned-Service-Cover-bccdcac3ad032b7b40296b83fa3c87f8.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);