"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4987],{3173:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=e(5893),o=e(1151);const r={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot."},a="Snapshot (COMING SOON)",c={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/sn-crowd",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/sn-crowd.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/sn-crowd",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/sn-crowd",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/sn-crowd.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/ins-crowd"},next:{title:"\ud83d\udd04 StateSync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/st-crowd"}},i={},d=[];function l(t){const n={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snapshot-coming-soon",children:"Snapshot (COMING SOON)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# install lz4\napt update\napt install snapd -y\nsnap install lz4\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'systemctl stop Cardchaind\n\ncp $HOME/.Cardchaind/data/priv_validator_state.json $HOME/.Cardchaind/priv_validator_state.json.backup \n\nCardchaind tendermint unsafe-reset-all --home $HOME/.Cardchaind --keep-addr-book\nSNAP_NAME=$(curl -s COMING_SOON | egrep -o ">bbn-test-2_.*\\.tar.lz4" | tr -d ">")\ncurl https://testnet.anatolianteam.com/babylon/${SNAP_NAME} | lz4 -dc - | tar -xf - -C $HOME/.Cardchaind\n\nmv $HOME/.Cardchaind/priv_validator_state.json.backup $HOME/.Cardchaind/data/priv_validator_state.json \n\nsystemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat\n```shell\n'})})]})}function p(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>a});var s=e(7294);const o={},r=s.createContext(o);function a(t){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),s.createElement(r.Provider,{value:n},t.children)}}}]);