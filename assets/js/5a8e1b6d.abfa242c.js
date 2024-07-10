"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2401],{50843:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(85893),s=n(11151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},r="StateSync",c={id:"Testnet Archive/babylon/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet Archive/babylon/statesync.md",sourceDirName:"Testnet Archive/babylon",slug:"/Testnet Archive/babylon/statesync",permalink:"/docs/Testnet Archive/babylon/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/babylon/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet Archive/babylon/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet Archive/babylon/update"}},i={image:n(83249).Z},l=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"systemctl stop babylond\n\ncp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup\nbabylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-babylon.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.babylond/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.babylond/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.babylond/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.babylond/config/config.toml\n\nmv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json\n\nsystemctl restart babylond && journalctl -u babylond -f -o cat\n"})})]})}function b(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},83249:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Babylon-Service-Cover-28dbb10952875d3c2edfdd8e0002355a.jpg"},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);