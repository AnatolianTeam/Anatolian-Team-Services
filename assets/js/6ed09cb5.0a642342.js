"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3023],{5100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=n(5893),a=n(1151);const i={title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/SelfChain-Service-Cover.jpg",keywords:["selfchain","self","chain","installation","snapshot","statesync","update"]},o="Snapshot",c={id:"Testnet Archive/selfchain/snapshot",title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",source:"@site/docs/Testnet Archive/selfchain/snapshot.md",sourceDirName:"Testnet Archive/selfchain",slug:"/Testnet Archive/selfchain/snapshot",permalink:"/docs/Testnet Archive/selfchain/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/selfchain/snapshot.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcf8 Snapshot",description:"Node installation with snapshot.",image:"./img/SelfChain-Service-Cover.jpg",keywords:["selfchain","self","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet Archive/selfchain/installation"},next:{title:"\ud83d\udd04 StateSync",permalink:"/docs/Testnet Archive/selfchain/statesync"}},l={image:n(9080).Z},r=[];function h(e){const t={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"snapshot",children:"Snapshot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# install lz4\napt update\napt install lz4 -y\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'systemctl stop selfchaind\n\ncp $HOME/.selfchain/data/priv_validator_state.json $HOME/.selfchain/priv_validator_state.json.backup \n\nselfchaind tendermint unsafe-reset-all --home $HOME/.selfchain --keep-addr-book\nSNAP_NAME=$(curl -s https://testnet.anatolianteam.com/selfchain/ | egrep -o ">self-dev-1_.*\\.tar.lz4" | tr -d ">")\ncurl -L https://testnet.anatolianteam.com/selfchain/${SNAP_NAME} | tar -I lz4 -xf - -C $HOME/.pryzm\n\nmv $HOME/.selfchain/priv_validator_state.json.backup $HOME/.selfchain/data/priv_validator_state.json \n\nsystemctl restart selfchaind && journalctl -u selfchaind -f -o cat\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9080:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/SelfChain-Service-Cover-9177468565f242a0411a413cf6f4166b.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);