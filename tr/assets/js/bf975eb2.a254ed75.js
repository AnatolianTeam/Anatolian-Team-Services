"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7206],{7381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(5893),s=n(1151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg",keywords:["entangle","installation","snapshot","statesync","update"]},r="StateSync",c={id:"Testnet Archive/entangle/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet Archive/entangle/statesync.md",sourceDirName:"Testnet Archive/entangle",slug:"/Testnet Archive/entangle/statesync",permalink:"/tr/docs/Testnet Archive/entangle/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/entangle/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg",keywords:["entangle","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet Archive/entangle/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/tr/docs/Testnet Archive/entangle/update"}},i={},l=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"systemctl stop entangled\n\ncp $HOME/.entangled/data/priv_validator_state.json $HOME/.entangled/priv_validator_state.json.backup\nentangled tendermint unsafe-reset-all --home $HOME/.entangled --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-entangle.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.entangled/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.entangled/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.entangled/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.entangled/config/config.toml\n\nmv $HOME/.entangled/priv_validator_state.json.backup $HOME/.entangled/data/priv_validator_state.json\n\nsystemctl restart entangled && journalctl -u entangled -f -o cat\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(7294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);