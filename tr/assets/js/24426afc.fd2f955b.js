"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2070],{5174:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(5893),o=n(1151);const c={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","kurulum","snapshot","statesync","g\xfcncelleme"]},r="StateSync",a={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/CC-Service-Cover.jpg",keywords:["crowdcontrol","cardchain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot"},next:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/update"}},i={image:n(6355).Z},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"systemctl stop Cardchaind\n\ncp $HOME/.Cardchain/data/priv_validator_state.json $HOME/.Cardchain/priv_validator_state.json.backup\nCardchaind tendermint unsafe-reset-all --home $HOME/.Cardchain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-crowdcontrol.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.Cardchain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.Cardchain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.Cardchain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.Cardchain/config/config.toml\n\nmv $HOME/.Cardchain/priv_validator_state.json.backup $HOME/.Cardchain/data/priv_validator_state.json\n\nsystemctl restart Cardchaind && journalctl -u Cardchaind -f -o cat\n"})})]})}function u(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},6355:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/CC-Service-Cover-a353aff78b38f40b5fb434a2a1a8f2b2.jpg"},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var s=n(7294);const o={},c=s.createContext(o);function r(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);