"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3257],{9129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(5893),r=n(1151),i=n(2991);const o={id:"introduction",hide_table_of_contents:!0,image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/pryzm-zone/img/Pryzm-Service-Cover.jpg",keywords:["Pryzm","node","protocol","kurulum","snapshot","statesync","g\xfcncelleme"]},c="Pryzm Zone",l={id:"Testnet/Cosmos-Ecosystem/pryzm-zone/introduction",title:"Pryzm Zone",description:"PryzmZone",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/pryzm-zone/index.md",sourceDirName:"Testnet/Cosmos-Ecosystem/pryzm-zone",slug:"/Testnet/Cosmos-Ecosystem/pryzm-zone/",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/pryzm-zone/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/pryzm-zone/img/Pryzm-Service-Cover.jpg",keywords:["Pryzm","node","protocol","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\u2934\ufe0f Komutlar",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/okp4/ycheatsheets"},next:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/installation"}},a={},d=[{value:"Links",id:"links",level:2},{value:"Gereksinimler",id:"gereksinimler",level:2},{value:"A\u011f Bilgisi",id:"a\u011f-bilgisi",level:2},{value:"Hizmetler",id:"hizmetler",level:2},{value:"Peering",id:"peering",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pryzm-zone",children:"Pryzm Zone"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"PryzmZone",src:n(9003).Z+"",width:"2000",height:"600"})}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://pryzm.zone/",children:"Website"})," | \u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://cosmos-testnet.anatolianteam.com/Pryzm",children:"Explorer"})," | \u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://docs.pryzm.zone/",children:"Doc"})," | \u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://github.com/pryzm-finance",children:"GitHub"})," | \u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://discord.gg/eZGaXFEeEZ",children:"Discord"})," | \u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://zealy.io/c/pryzm/invite/cfNmFH3eoXrvl2Rr9qk7o",children:"Zealy"})]}),"\n",(0,s.jsx)(t.h2,{id:"gereksinimler",children:"Gereksinimler"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Components"}),(0,s.jsx)(t.th,{children:"Minimum"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Recommended"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CPU"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RAM"}),(0,s.jsx)(t.td,{children:"16 GB"}),(0,s.jsx)(t.td,{children:"16 GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Storage"}),(0,s.jsx)(t.td,{children:"120 GB SSD"}),(0,s.jsx)(t.td,{children:"250 GB SSD"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"a\u011f-bilgisi",children:"A\u011f Bilgisi"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Network Chain ID: indigo-1"}),"\n",(0,s.jsx)(t.li,{children:"Binary: pryzmd"}),"\n",(0,s.jsx)(t.li,{children:"Denom: upryzm"}),"\n",(0,s.jsx)(t.li,{children:"Working directory: .pryzm"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"hizmetler",children:"Hizmetler"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RPC:"})," ",(0,s.jsx)(t.a,{href:"https://rpc-t-pryzm.anatolianteam.com/",children:"https://rpc-t-pryzm.anatolianteam.com/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"API:"})," ",(0,s.jsx)(t.a,{href:"https://api-t-pryzm.anatolianteam.com/",children:"https://api-t-pryzm.anatolianteam.com/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Explorer:"})," ",(0,s.jsx)(t.a,{href:"https://cosmos-testnet.anatolianteam.com/Pryzm",children:"https://cosmos-testnet.anatolianteam.com/Pryzm"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"peering",children:"Peering"}),"\n",(0,s.jsx)(t.p,{children:"H\u0131zl\u0131 ba\u011flant\u0131 ya da durum senkronizasyonu (statesync) i\xe7in e\u015f (peer) kullanabilirsiniz."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'peers=""\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.pryzm/config/config.toml\n'})}),"\n",(0,s.jsx)(t.p,{children:"Adres defteri \xfc\xe7 saatte bir g\xfcncellenir. H\u0131zl\u0131 ba\u015flatma i\xe7in kullanabilirsiniz."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'wget -O $HOME/.pryzm/config/addrbook.json "https://testnet.anatolianteam.com/pryzm/addrbook.json"\n'})}),"\n","\n","\n",(0,s.jsx)(i.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>y});n(7294);var s=n(512),r=n(3438),i=n(3692),o=n(3919),c=n(5999),l=n(2503);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",a.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:r,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,s.Z)("text--truncate",a.cardTitle),title:r,children:[n," ",r]}),i&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",a.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(u,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(j,{...e});const i=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,s.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},9003:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Pryzm-Service-9a3b857a93fbb27c11b7d06e8a09e702.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);