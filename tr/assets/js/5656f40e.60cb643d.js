"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7855],{88696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=n(85893),o=n(11151);const c={title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},a="StateSync",r={id:"Testnet/Cosmos-Ecosystem/0g/statesync",title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/statesync",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"StateSync ile node senkronizasyonu.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/snapshot"},next:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/update"}},i={image:n(13537).Z},l=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"systemctl stop 0gchaind\n\ncp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup\n0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-0g.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.0gchain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.0gchain/config/config.toml\n\nmv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json\n\nsystemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},13537:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/0G-Service-Cover-a5e6bc44f298d49268bd4cb4871397dc.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(67294);const o={},c=s.createContext(o);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);