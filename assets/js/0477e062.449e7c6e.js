"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6315],{6116:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(5893),o=n(1151);const c={title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync."},r="StateSync (COMING SOON)",a={id:"Testnet/Cosmos-Ecosystem/crowdcontrol/statesync",title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync.",source:"@site/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crowdcontrol",slug:"/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/statesync.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udd04 StateSync",description:"Node synchronization with StateSync."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf8 Snapshot",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/snapshot"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/update"}},i={},d=[];function l(t){const e={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"statesync-coming-soon",children:"StateSync (COMING SOON)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"sudo systemctl stop Cardchaind\n\ncp $HOME/.Cardchaind/data/priv_validator_state.json $HOME/.Cardchaind/priv_validator_state.json.backup\nCardchaind tendermint unsafe-reset-all --home $HOME/.Cardchaind --keep-addr-book\n\nSNAP_RPC=\"COMING_SOON\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.Cardchaind/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.Cardchaind/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.Cardchaind/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.Cardchaind/config/config.toml\n\nmv $HOME/.Cardchaind/priv_validator_state.json.backup $HOME/.Cardchaind/data/priv_validator_state.json\n\nsudo systemctl restart Cardchaind\nsudo journalctl -u Cardchaind -f --no-hostname -o cat\n"})})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var s=n(7294);const o={},c=s.createContext(o);function r(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);