"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1608],{6266:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"Testnet/Cosmos-Ecosystem/mantra/statesync","title":"\ud83d\udd04 StateSync","description":"Node synchronization with StateSync.","source":"@site/docs/Testnet/Cosmos-Ecosystem/mantra/statesync.md","sourceDirName":"Testnet/Cosmos-Ecosystem/mantra","slug":"/Testnet/Cosmos-Ecosystem/mantra/statesync","permalink":"/docs/Testnet/Cosmos-Ecosystem/mantra/statesync","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/mantra/statesync.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udd04 StateSync","description":"Node synchronization with StateSync.","image":"./img/Mantra-Service-Cover.jpg","position":3,"keywords":["mantra","chain","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcf8 Snapshot","permalink":"/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot"},"next":{"title":"\ud83c\udd99 Update","permalink":"/docs/Testnet/Cosmos-Ecosystem/mantra/update"}}');var s=n(74848),o=n(28453);const r={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Mantra-Service-Cover.jpg",position:3,keywords:["mantra","chain","installation","snapshot","statesync","update"]},c="StateSync",i={image:n(89236).A},m=[];function d(t){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"statesync",children:"StateSync"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"systemctl stop mantrachaind\n\ncp $HOME/.mantrachain/data/priv_validator_state.json $HOME/.mantrachain/priv_validator_state.json.backup\nmantrachaind tendermint unsafe-reset-all --home $HOME/.mantrachain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-mantra.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.mantrachain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.mantrachain/config/config.toml\n\nmv $HOME/.mantrachain/priv_validator_state.json.backup $HOME/.mantrachain/data/priv_validator_state.json\n\nsystemctl restart mantrachaind && journalctl -u mantrachaind -f -o cat\n"})})]})}function l(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},89236:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/Mantra-Service-Cover-54ec7390608d5af9c0929e8ac1d83b1f.jpg"},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var a=n(96540);const s={},o=a.createContext(s);function r(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);