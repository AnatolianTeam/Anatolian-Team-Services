"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2806],{40104:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var r=l(85893),a=l(11151);const t={title:"\ud83c\udd99 G\xfcncelleme",description:"Node g\xfcncelleme.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","kurulum","snapshot","statesync","g\xfcncelleme"]},i="G\xfcncelleme",s={id:"Mainnet/penumbra/update",title:"\ud83c\udd99 G\xfcncelleme",description:"Node g\xfcncelleme.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/penumbra/update.md",sourceDirName:"Mainnet/penumbra",slug:"/Mainnet/penumbra/update",permalink:"/tr/docs/Mainnet/penumbra/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/penumbra/update.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 G\xfcncelleme",description:"Node g\xfcncelleme.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddf3\ufe0f Oy Kullanma",permalink:"/tr/docs/Mainnet/penumbra/proposal"},next:{title:"\ud83d\udc64 Kullan\u0131c\u0131 Rehberi",permalink:"/tr/docs/Mainnet/penumbra/user-guide"}},c={image:l(4005).Z},d=[{value:"Servisleri Durdurma",id:"servisleri-durdurma",level:2},{value:"Penumbra Command Line Interface (CLI) G\xfcncelleme",id:"penumbra-command-line-interface-cli-g\xfcncelleme",level:2},{value:"Penumbra Clientd G\xfcncelleme",id:"penumbra-clientd-g\xfcncelleme",level:2},{value:"pd G\xfcncelleme",id:"pd-g\xfcncelleme",level:2},{value:"Verileri Resetleme",id:"verileri-resetleme",level:2},{value:"Snap \u0130ndirme",id:"snap-i\u0307ndirme",level:2},{value:"Migrate",id:"migrate",level:2},{value:"Servisleri Yeniden Ba\u015flatma",id:"servisleri-yeniden-ba\u015flatma",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"g\xfcncelleme",children:"G\xfcncelleme"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"G\xfcncelleme: v0.79.0"})}),"\n",(0,r.jsx)(n.h2,{id:"servisleri-durdurma",children:"Servisleri Durdurma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl stop penumbra cometbft\n"})}),"\n",(0,r.jsx)(n.h2,{id:"penumbra-command-line-interface-cli-g\xfcncelleme",children:"Penumbra Command Line Interface (CLI) G\xfcncelleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pcli-installer.sh | sh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"penumbra-clientd-g\xfcncelleme",children:"Penumbra Clientd G\xfcncelleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pclientd-installer.sh | sh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"pd-g\xfcncelleme",children:"pd G\xfcncelleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pd-installer.sh | sh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"verileri-resetleme",children:"Verileri Resetleme"}),"\n",(0,r.jsx)(n.p,{children:"\xd6nceki test a\u011flar\u0131ndan kalan test a\u011f\u0131 verilerini s\u0131f\u0131rl\u0131yoruz."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pd testnet unsafe-reset-all\n"})}),"\n",(0,r.jsx)(n.h2,{id:"snap-i\u0307ndirme",children:"Snap \u0130ndirme"}),"\n",(0,r.jsx)(n.h2,{id:"migrate",children:"Migrate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pd migrate --home PD_HOME --comet-home COMETBFT_HOME\n"})}),"\n",(0,r.jsx)(n.h2,{id:"servisleri-yeniden-ba\u015flatma",children:"Servisleri Yeniden Ba\u015flatma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl restart penumbra cometbft\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},4005:(e,n,l)=>{l.d(n,{Z:()=>r});const r=l.p+"assets/images/Penumbra-Service-Cover-39dcac8b23dfbc657b308935f2897121.jpg"},11151:(e,n,l)=>{l.d(n,{Z:()=>s,a:()=>i});var r=l(67294);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);