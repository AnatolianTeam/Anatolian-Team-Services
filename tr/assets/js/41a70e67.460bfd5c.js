"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5645],{2260:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=e(5893),o=e(1151);const a={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","kurulum","snapshot","statesync","g\xfcncelleme"]},r="Snapshot",c={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync"}},i={},l=[];function d(t){const n={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'systemctl stop Cardchaind\n\ncp $HOME/.Cardchain/data/priv_validator_state.json $HOME/.Cardchain/priv_validator_state.json.backup \n\nCardchaind tendermint unsafe-reset-all --home $HOME/.Cardchain --keep-addr-book\nSNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.Cardchain\n\nmv $HOME/.Cardchain/priv_validator_state.json.backup $HOME/.Cardchain/data/priv_validator_state.json \n\nsystemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat\n'})})]})}function u(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>r});var s=e(7294);const o={},a=s.createContext(o);function r(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);