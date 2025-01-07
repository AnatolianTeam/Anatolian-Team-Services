"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2085],{3838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"Testnet Archive/okp4/statesync","title":"\ud83d\udd04 StateSync","description":"Node synchronization with StateSync.","source":"@site/docs/Testnet Archive/okp4/statesync.md","sourceDirName":"Testnet Archive/okp4","slug":"/Testnet Archive/okp4/statesync","permalink":"/tr/docs/Testnet Archive/okp4/statesync","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/okp4/statesync.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udd04 StateSync","description":"Node synchronization with StateSync.","image":"./img/OKP4-Service-Cover.jpg","keywords":["okp4","open knowledge protocol","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcf8 Snapshot","permalink":"/tr/docs/Testnet Archive/okp4/snapshot"},"next":{"title":"\ud83c\udd99 Update","permalink":"/tr/docs/Testnet Archive/okp4/update"}}');var s=n(74848),a=n(28453);const r={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/OKP4-Service-Cover.jpg",keywords:["okp4","open knowledge protocol","installation","snapshot","statesync","update"]},c="StateSync",i={image:n(30662).A},d=[];function p(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"statesync",children:"StateSync"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo systemctl stop okp4d\n\ncp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup\nokp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-okp4.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.okp4d/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.okp4d/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.okp4d/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.okp4d/config/config.toml\n\nmv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json\n\nsystemctl restart okp4d && journalctl -u okp4d -f -o cat\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},30662:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/OKP4-Service-Cover-5a3197a260786efb895e4aaa9ad0df2d.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);