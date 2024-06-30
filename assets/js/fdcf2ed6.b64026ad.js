"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1285],{16356:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=s(85893),n=s(11151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Lava-Service-Cover.jpg",keywords:["lava","installation","snapshot","statesync","update"]},c="StateSync",r={id:"Testnet/Cosmos-Ecosystem/lava/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/lava/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/lava",slug:"/Testnet/Cosmos-Ecosystem/lava/statesync",permalink:"/docs/Testnet/Cosmos-Ecosystem/lava/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/lava/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Lava-Service-Cover.jpg",keywords:["lava","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/lava/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/lava/update"}},i={image:s(63877).Z},l=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,n.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"systemctl stop lavad\n\ncp $HOME/.lava/data/priv_validator_state.json $HOME/.lava/priv_validator_state.json.backup\nlavad tendermint unsafe-reset-all --home $HOME/.lava --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-lava.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.lava/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.lava/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.lava/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.lava/config/config.toml\n\nmv $HOME/.lava/priv_validator_state.json.backup $HOME/.lava/data/priv_validator_state.json\n\nsystemctl restart lavad && journalctl -u lavad -f -o cat\n"})})]})}function m(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},63877:(t,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/Lava-Service-Cover-4290caf19153fab30dec650b506e356f.jpg"},11151:(t,e,s)=>{s.d(e,{Z:()=>r,a:()=>c});var a=s(67294);const n={},o=a.createContext(n);function c(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:c(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);