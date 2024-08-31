"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9888],{76810:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(85893),r=s(11151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",position:4,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","installation","snapshot","statesync","update"]},i="StateSync",c={id:"Testnet Archive/crossfi/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet Archive/crossfi/statesync.md",sourceDirName:"Testnet Archive/crossfi",slug:"/Testnet Archive/crossfi/statesync",permalink:"/tr/docs/Testnet Archive/crossfi/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/crossfi/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",position:4,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet Archive/crossfi/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/tr/docs/Testnet Archive/crossfi/update"}},a={image:s(26650).Z},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:"systemctl stop crossfid\n\ncp $HOME/.crossfid/data/priv_validator_state.json $HOME/.crossfid/priv_validator_state.json.backup\ncrossfid tendermint unsafe-reset-all --home $HOME/.crossfid --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-crossfi.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.crossfid/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.crossfid/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.crossfid/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.crossfid/config/config.toml\n\nmv $HOME/.crossfid/priv_validator_state.json.backup $HOME/.crossfid/data/priv_validator_state.json\n\nsystemctl restart crossfid && journalctl -u crossfid -f -o cat\n"})})]})}function h(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},26650:(t,e,s)=>{s.d(e,{Z:()=>n});const n=s.p+"assets/images/CrossFi-Service-Cover-0ce1a6b9e36b5df88eb11c5ca9de4d21.jpg"},11151:(t,e,s)=>{s.d(e,{Z:()=>c,a:()=>i});var n=s(67294);const r={},o=n.createContext(r);function i(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);