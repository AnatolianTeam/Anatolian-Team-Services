"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6510],{2101:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var o=e(5893),s=e(1151);const a={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync."},c="StateSync",r={id:"Testnet/Cosmos-Ecosystem/babylon/st-babylon",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/babylon/st-babylon.md",sourceDirName:"Testnet/Cosmos-Ecosystem/babylon",slug:"/Testnet/Cosmos-Ecosystem/babylon/st-babylon",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/st-babylon",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/babylon/st-babylon.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/sn-babylon"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/babylon/up-babylon"}},l={},i=[];function b(t){const n={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"statesync",children:"StateSync"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo systemctl stop babylond\n\ncp $HOME/.babylond/data/priv_validator_state.json $HOME/.babylond/priv_validator_state.json.backup\nbabylond tendermint unsafe-reset-all --home $HOME/.babylond --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-babylon.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.babylond/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.babylond/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.babylond/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.babylond/config/config.toml\n\nmv $HOME/.babylond/priv_validator_state.json.backup $HOME/.babylond/data/priv_validator_state.json\n\nsudo systemctl restart babylond\nsudo journalctl -u babylond -f --no-hostname -o cat\n```shell\n"})})]})}function d(t={}){const{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(b,{...t})}):b(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>r,a:()=>c});var o=e(7294);const s={},a=o.createContext(s);function c(t){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),o.createElement(a.Provider,{value:n},t.children)}}}]);