"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9399],{98658:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Testnet Archive/airchains/statesync","title":"\ud83d\udd04 StateSync","description":"Node synchronization with StateSync.","source":"@site/docs/Testnet Archive/airchains/statesync.md","sourceDirName":"Testnet Archive/airchains","slug":"/Testnet Archive/airchains/statesync","permalink":"/tr/docs/Testnet Archive/airchains/statesync","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/airchains/statesync.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udd04 StateSync","description":"Node synchronization with StateSync.","image":"./img/Airchains-Service-Cover.jpg","keywords":["airchains","oracle","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcf8 Snapshot","permalink":"/tr/docs/Testnet Archive/airchains/snapshot"},"next":{"title":"\ud83c\udd99 Update","permalink":"/tr/docs/Testnet Archive/airchains/update"}}');var i=n(74848),a=n(28453);const c={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","oracle","installation","snapshot","statesync","update"]},r="StateSync",o={image:n(54320).A},d=[];function h(t){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"statesync",children:"StateSync"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"systemctl stop junctiond\n\ncp $HOME/.junction/data/priv_validator_state.json $HOME/.junction/priv_validator_state.json.backup\njunctiond tendermint unsafe-reset-all --home $HOME/.junction --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-airchains.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.junction/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.junction/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.junction/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.junction/config/config.toml\n\nmv $HOME/.junction/priv_validator_state.json.backup $HOME/.junction/data/priv_validator_state.json\n\nsystemctl restart junctiond && journalctl -u junctiond -f -o cat\n"})})]})}function l(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},54320:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/Airchains-Service-Cover-f1de8d48e4fd39509044babb9d7b7a83.jpg"},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function c(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);