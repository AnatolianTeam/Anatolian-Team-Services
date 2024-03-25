"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5176],{3675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(5893),c=n(1151);const o={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/C4E-Service-Cover.jpg",keywords:["chain4energy","c4e","kurulum","snapshot","statesync","g\xfcncelleme"]},a="StateSync",r={id:"Testnet/Cosmos-Ecosystem/chain4energy/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/chain4energy/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/chain4energy",slug:"/Testnet/Cosmos-Ecosystem/chain4energy/statesync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/chain4energy/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/chain4energy/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/C4E-Service-Cover.jpg",keywords:["chain4energy","c4e","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/chain4energy/snapshot"},next:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/chain4energy/update"}},i={image:n(2764).Z},l=[];function h(e){const t={code:"code",h1:"h1",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"systemctl stop c4ed\n\ncp $HOME/.c4e-chain/data/priv_validator_state.json $HOME/.c4e-chain/priv_validator_state.json.backup\nc4ed tendermint unsafe-reset-all --home $HOME/.c4e-chain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-c4e.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.c4e-chain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.c4e-chain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.c4e-chain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.c4e-chain/config/config.toml\n\nmv $HOME/.c4e-chain/priv_validator_state.json.backup $HOME/.c4e-chain/data/priv_validator_state.json\n\nsystemctl restart c4ed && journalctl -u c4ed -f -o cat\n"})})]})}function d(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2764:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/C4E-Service-Cover-52c8f7b4c59f01669e8c56a8a1fef53a.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const c={},o=s.createContext(c);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);