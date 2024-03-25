"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1911],{602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(5893),a=n(1151);const o={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg",keywords:["warden","protocol","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},r="Snapshot",c={id:"Testnet/Cosmos-Ecosystem/warden/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet/Cosmos-Ecosystem/warden/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/warden",slug:"/Testnet/Cosmos-Ecosystem/warden/snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/warden/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/warden/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg",keywords:["warden","protocol","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/warden/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet/Cosmos-Ecosystem/warden/statesync"}},i={},l=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'systemctl stop wardend\n\ncp $HOME/.warden/data/priv_validator_state.json $HOME/.warden/priv_validator_state.json.backup \n\nwardend tendermint unsafe-reset-all --home $HOME/.warden --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/selfchain/ | egrep -o ">alfama_.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/selfchain/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm\n\nmv $HOME/.warden/priv_validator_state.json.backup $HOME/.warden/data/priv_validator_state.json \n\nsystemctl restart wardend && journalctl -u wardend -f -o cat\n'})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);