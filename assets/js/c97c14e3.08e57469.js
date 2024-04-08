"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9591],{2712:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=s(5893),o=s(1151);const a={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","modular","chain","installation","snapshot","statesync","update"]},c="StateSync",r={id:"Testnet/Cosmos-Ecosystem/0g/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/0g/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/statesync",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/0g/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","modular","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/0g/update"}},i={image:s(3270).Z},d=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"systemctl stop evmosd\n\ncp $HOME/.evmosd/data/priv_validator_state.json $HOME/.evmosd/priv_validator_state.json.backup\nevmosd tendermint unsafe-reset-all --home $HOME/.evmosd --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-0g.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.evmosd/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.evmosd/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.evmosd/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.evmosd/config/config.toml\n\nmv $HOME/.evmosd/priv_validator_state.json.backup $HOME/.evmosd/data/priv_validator_state.json\n\nsystemctl restart evmosd && journalctl -u evmosd -f -o cat\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},3270:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/0G-Service-Cover-98960b183eb86dd7d944869365d34be6.jpg"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>c});var n=s(7294);const o={},a=n.createContext(o);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);