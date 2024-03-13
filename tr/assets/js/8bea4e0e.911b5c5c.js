"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[204],{82:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(5893),a=n(1151);const o={title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/img/Lava-Service-Cover.jpg",keywords:["lava","network","kurulum","snapshot","statesync","g\xfcncelleme"]},r="StateSync",c={id:"Testnet/Cosmos-Ecosystem/lava/statesync",title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/lava",slug:"/Testnet/Cosmos-Ecosystem/lava/statesync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/lava/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/img/Lava-Service-Cover.jpg",keywords:["lava","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/lava/snapshot"},next:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/lava/update"}},i={},l=[];function u(t){const e={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"statesync",children:"StateSync"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"systemctl stop lavad\n\ncp $HOME/.lava/data/priv_validator_state.json $HOME/.lava/priv_validator_state.json.backup\nlavad tendermint unsafe-reset-all --home $HOME/.lava --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-lava.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.lava/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.lava/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.lava/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.lava/config/config.toml\n\nmv $HOME/.lava/priv_validator_state.json.backup $HOME/.lava/data/priv_validator_state.json\n\nsystemctl restart lavad && journalctl -u lavad -f -o cat\n"})})]})}function m(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var s=n(7294);const a={},o=s.createContext(a);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);