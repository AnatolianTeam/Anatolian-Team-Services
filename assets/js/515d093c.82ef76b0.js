"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2797],{62605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(85893),s=n(11151);const r={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","installation","snapshot","statesync","update"]},i="StateSync",l={id:"Testnet Archive/alignedlayer/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet Archive/alignedlayer/statesync.md",sourceDirName:"Testnet Archive/alignedlayer",slug:"/Testnet Archive/alignedlayer/statesync",permalink:"/docs/Testnet Archive/alignedlayer/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/alignedlayer/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet Archive/alignedlayer/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet Archive/alignedlayer/update"}},c={image:n(31844).Z},o=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"statesync",children:"StateSync"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"systemctl stop alignedlayerd\n\ncp $HOME/.alignedlayer/data/priv_validator_state.json $HOME/.alignedlayer/priv_validator_state.json.backup\nalignedlayerd tendermint unsafe-reset-all --home $HOME/.alignedlayer --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-aligned.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.alignedlayer/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.alignedlayer/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.alignedlayer/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.alignedlayer/config/config.toml\n\nmv $HOME/.alignedlayer/priv_validator_state.json.backup $HOME/.alignedlayer/data/priv_validator_state.json\n\nsystemctl restart alignedlayerd && journalctl -u alignedlayerd -f -o cat\n"})})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},31844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Aligned-Service-Cover-b8e47bb7a37bb1b5ed060cedf1ac54e1.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(67294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);