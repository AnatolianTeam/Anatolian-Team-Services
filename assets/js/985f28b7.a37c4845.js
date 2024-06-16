"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7343],{4704:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(5893),a=i(1151);const s={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},r="StateSync",c={id:"Testnet Archive/initia/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet Archive/initia/statesync.md",sourceDirName:"Testnet Archive/initia",slug:"/Testnet Archive/initia/statesync",permalink:"/docs/Testnet Archive/initia/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/initia/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","oracle","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet Archive/initia/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet Archive/initia/update"}},o={image:i(8879).Z},l=[];function d(t){const e={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:"systemctl stop initiad\n\ncp $HOME/.initia/data/priv_validator_state.json $HOME/.initia/priv_validator_state.json.backup\ninitiad tendermint unsafe-reset-all --home $HOME/.initia --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-initia.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.initia/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.initia/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.initia/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.initia/config/config.toml\n\nmv $HOME/.initia/priv_validator_state.json.backup $HOME/.initia/data/priv_validator_state.json\n\nsystemctl restart initiad && journalctl -u initiad -f -o cat\n"})})]})}function h(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8879:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/Initia-Service-Cover-3cd644af547f7267f9f96f1cf35e856b.jpg"},1151:(t,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var n=i(7294);const a={},s=n.createContext(a);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);