"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8140],{9276:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var s=n(5893),o=n(1151);const c={title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},i="StateSync",a={id:"Testnet/Cosmos-Ecosystem/airchains/statesync",title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/airchains/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/airchains",slug:"/Testnet/Cosmos-Ecosystem/airchains/statesync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/airchains/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/airchains/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/airchains/snapshot"},next:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/airchains/update"}},r={image:n(8330).Z},u=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"systemctl stop junctiond\n\ncp $HOME/.junction/data/priv_validator_state.json $HOME/.junction/priv_validator_state.json.backup\njunctiond tendermint unsafe-reset-all --home $HOME/.junction --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-airchains.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.junction/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.junction/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.junction/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.junction/config/config.toml\n\nmv $HOME/.junction/priv_validator_state.json.backup $HOME/.junction/data/priv_validator_state.json\n\nsystemctl restart junctiond && journalctl -u junctiond -f -o cat\n"})})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},8330:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/Airchains-Service-Cover-783f119956b4ba5b7a4272b8e72ace24.jpg"},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>i});var s=n(7294);const o={},c=s.createContext(o);function i(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);