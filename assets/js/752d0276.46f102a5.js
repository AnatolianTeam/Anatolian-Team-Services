"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9190],{6753:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=e(85893),s=e(11151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Mantra-Service-Cover.jpg",position:3,keywords:["mantra","chain","installation","snapshot","statesync","update"]},r="StateSync",c={id:"Testnet/Cosmos-Ecosystem/mantra/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/mantra/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/mantra",slug:"/Testnet/Cosmos-Ecosystem/mantra/statesync",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/mantra/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Mantra-Service-Cover.jpg",position:3,keywords:["mantra","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/mantra/update"}},i={image:e(78004).Z},m=[];function d(t){const n={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"statesync",children:"StateSync"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop mantrachaind\n\ncp $HOME/.mantrachain/data/priv_validator_state.json $HOME/.mantrachain/priv_validator_state.json.backup\nmantrachaind tendermint unsafe-reset-all --home $HOME/.mantrachain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-mantra.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.mantrachain/config/config.toml\n\nmv $HOME/.mantrachain/priv_validator_state.json.backup $HOME/.mantrachain/data/priv_validator_state.json\n\nsystemctl restart mantrachaind && journalctl -u mantrachaind -f -o cat\n"})})]})}function l(t={}){const{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},78004:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/Mantra-Service-Cover-54ec7390608d5af9c0929e8ac1d83b1f.jpg"},11151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>r});var a=e(67294);const s={},o=a.createContext(s);function r(t){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(o.Provider,{value:n},t.children)}}}]);