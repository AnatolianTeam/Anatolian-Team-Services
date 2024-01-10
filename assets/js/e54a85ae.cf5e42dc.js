"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7871],{2097:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=s(5893),n=s(1151);const c={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync."},a="StateSync (COMING SOON)",r={id:"Testnet/Cosmos-Ecosystem/okp4/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/okp4/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/okp4",slug:"/Testnet/Cosmos-Ecosystem/okp4/statesync",permalink:"/docs/Testnet/Cosmos-Ecosystem/okp4/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/okp4/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/okp4/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/okp4/update"}},i={},d=[];function p(t){const e={code:"code",h1:"h1",pre:"pre",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"statesync-coming-soon",children:"StateSync (COMING SOON)"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"sudo systemctl stop okp4d\n\ncp $HOME/.okp4d/data/priv_validator_state.json $HOME/.okp4d/priv_validator_state.json.backup\nokp4d tendermint unsafe-reset-all --home $HOME/.okp4d --keep-addr-book\n\nSNAP_RPC=\"COMING_SOON\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.okp4d/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.okp4d/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.okp4d/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.okp4d/config/config.toml\n\nmv $HOME/.okp4d/priv_validator_state.json.backup $HOME/.okp4d/data/priv_validator_state.json\n\nsudo systemctl restart okp4d\nsudo journalctl -u okp4d -f --no-hostname -o cat\n```shell\n"})})]})}function l(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},1151:(t,e,s)=>{s.d(e,{Z:()=>r,a:()=>a});var o=s(7294);const n={},c=o.createContext(n);function a(t){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:a(t.components),o.createElement(c.Provider,{value:e},t.children)}}}]);