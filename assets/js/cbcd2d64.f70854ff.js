"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[880],{1981:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(5893),o=s(1151);const i={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",position:4,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","installation","snapshot","statesync","update"]},c="StateSync",a={id:"Testnet/Cosmos-Ecosystem/crossfi/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/crossfi/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crossfi",slug:"/Testnet/Cosmos-Ecosystem/crossfi/statesync",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/crossfi/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",position:4,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/update"}},r={image:s(4636).Z},l=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"systemctl stop crossfid\n\ncp $HOME/.mineplex-chain/data/priv_validator_state.json $HOME/.mineplex-chain/priv_validator_state.json.backup\ncrossfid tendermint unsafe-reset-all --home $HOME/.mineplex-chain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-crossfi.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.mineplex-chain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.mineplex-chain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.mineplex-chain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.mineplex-chain/config/config.toml\n\nmv $HOME/.mineplex-chain/priv_validator_state.json.backup $HOME/.mineplex-chain/data/priv_validator_state.json\n\nsystemctl restart crossfid && journalctl -u crossfid -f -o cat\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4636:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/CrossFi-Service-Cover-0ce1a6b9e36b5df88eb11c5ca9de4d21.jpg"},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>c});var n=s(7294);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);