"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[635],{2779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(5893),s=n(1151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Pryzm-Service-Cover.jpg",keywords:["pryzm","zone","installation","snapshot","statesync","update"]},a="StateSync",c={id:"Testnet Archive/pryzm-zone/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet Archive/pryzm-zone/statesync.md",sourceDirName:"Testnet Archive/pryzm-zone",slug:"/Testnet Archive/pryzm-zone/statesync",permalink:"/tr/docs/Testnet Archive/pryzm-zone/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/pryzm-zone/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Pryzm-Service-Cover.jpg",keywords:["pryzm","zone","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet Archive/pryzm-zone/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/tr/docs/Testnet Archive/pryzm-zone/update"}},i={image:n(9794).Z},p=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"systemctl stop pryzmd\n\ncp $HOME/.pryzm/data/priv_validator_state.json $HOME/.pryzm/priv_validator_state.json.backup\npryzmd tendermint unsafe-reset-all --home $HOME/.pryzm --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-pryzm.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.pryzm/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.pryzm/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.pryzm/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.pryzm/config/config.toml\n\nmv $HOME/.pryzm/priv_validator_state.json.backup $HOME/.pryzm/data/priv_validator_state.json\n\nsystemctl restart pryzmd && journalctl -u pryzmd -f -o cat\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9794:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Pryzm-Service-Cover-8d456b09af5439e35eecd24f9b431fe8.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(7294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);