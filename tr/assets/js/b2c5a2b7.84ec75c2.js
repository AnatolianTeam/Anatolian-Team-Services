"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2053],{7163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(5893),i=t(1151),r=t(2991);const a={id:"introduction",hide_table_of_contents:!0,description:"Node kurulum rehberi.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/rebuschain/img/Rebus-Service-Cover.jpg",keywords:["rebus","chain","network","kurulum","snapshot","statesync","g\xfcncelleme"]},c="Arable Protocol",l={id:"Mainnet/Cosmos-Ecosystem/rebuschain/introduction",title:"Arable Protocol",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/rebuschain/index.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/rebuschain",slug:"/Mainnet/Cosmos-Ecosystem/rebuschain/",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/rebuschain/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/rebuschain/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,description:"Node kurulum rehberi.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/rebuschain/img/Rebus-Service-Cover.jpg",keywords:["rebus","chain","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\u2934\ufe0f Komutlar",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/jackal-protocol/ycheatsheets"},next:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/rebuschain/installation"}},o={},d=[{value:"Ba\u011flant\u0131lar",id:"ba\u011flant\u0131lar",level:2},{value:"Bizimle Stake Edin \u267b\ufe0f",id:"bizimle-stake-edin-\ufe0f",level:2},{value:"Gereksinimler",id:"gereksinimler",level:2},{value:"A\u011f Bilgisi",id:"a\u011f-bilgisi",level:2},{value:"Hizmetler",id:"hizmetler",level:2},{value:"Peering (Yak\u0131nda)",id:"peering-yak\u0131nda",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"arable-protocol",children:"Arable Protocol"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Rebus",src:t(876).Z+"",width:"2000",height:"600"})}),"\n",(0,s.jsx)(n.h2,{id:"ba\u011flant\u0131lar",children:"Ba\u011flant\u0131lar"}),"\n",(0,s.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://www.rebuschain.com/",children:"Website"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://cosmos.anatolianteam.com/rebus",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://docs.rebuschain.com/",children:"Dok\xfcman"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://github.com/rebuschain",children:"GitHub"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://discord.com/invite/tqfSntHxvv",children:"Discord"})]}),"\n",(0,s.jsx)(n.h2,{id:"bizimle-stake-edin-\ufe0f",children:"Bizimle Stake Edin \u267b\ufe0f"}),"\n",(0,s.jsxs)(n.p,{children:["Restake kullanarak fee \xfccreti \xf6demeden auto-restake kullanarak ",(0,s.jsx)(n.a,{href:"https://restake.app/rebus/rebusvaloper183hv37en2dayslgf03zfr57crtjrchuazwm9h9",children:"buradan"})," stake edebilirsiniz."]}),"\n",(0,s.jsx)(n.h2,{id:"gereksinimler",children:"Gereksinimler"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"B\u015fle\u015fenler"}),(0,s.jsx)(n.th,{children:"Minimum"}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\xd6nerilen"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPU"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RAM"}),(0,s.jsx)(n.td,{children:"16 GB"}),(0,s.jsx)(n.td,{children:"32 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage"}),(0,s.jsx)(n.td,{children:"500 GB SSD"}),(0,s.jsx)(n.td,{children:"1 TB SSD"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"a\u011f-bilgisi",children:"A\u011f Bilgisi"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Network Chain ID: reb_1111-1"}),"\n",(0,s.jsx)(n.li,{children:"Binary: rebusd"}),"\n",(0,s.jsx)(n.li,{children:"Denom: arebus"}),"\n",(0,s.jsx)(n.li,{children:"\xc7al\u0131\u015fma dizini: .rebusd"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"hizmetler",children:"Hizmetler"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RPC:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.mainnet.rebus.money:26657",children:"https://api.mainnet.rebus.money:26657"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rpc.rebus.nodestake.top",children:"https://rpc.rebus.nodestake.top"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rebus-rpc.publicnode.com:443",children:"https://rebus-rpc.publicnode.com:443"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.mainnet.rebus.money:1317",children:"https://api.mainnet.rebus.money:1317"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.rebus.nodestake.top",children:"https://api.rebus.nodestake.top"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://rebus-rest.publicnode.com",children:"https://rebus-rest.publicnode.com"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Explorer:"})," ",(0,s.jsx)(n.a,{href:"https://cosmos.anatolianteam.com/rebus",children:"https://cosmos.anatolianteam.com/rebus"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"peering-yak\u0131nda",children:"Peering (Yak\u0131nda)"}),"\n",(0,s.jsx)(n.p,{children:"H\u0131zl\u0131 ba\u011flant\u0131 ya da durum senkronizasyonu (statesync) i\xe7in e\u015f (peer) kullanabilirsiniz."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'peers="COMING SOON"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.rebusd/config/config.toml\n'})}),"\n",(0,s.jsx)(n.p,{children:"Adres defteri \xfc\xe7 saatte bir g\xfcncellenir. H\u0131zl\u0131 ba\u015flatma i\xe7in kullanabilirsiniz."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'wget -O $HOME/.rebusd/config/addrbook.json "https://mainnet.anatolianteam.com/rebus/genesis.json"\nwget -O $HOME/.rebusd/config/addrbook.json "https://mainnet.anatolianteam.com/rebus/addrbook.json"\n'})}),"\n","\n","\n",(0,s.jsx)(r.Z,{})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2991:(e,n,t)=>{t.d(n,{Z:()=>b});t(7294);var s=t(512),i=t(3438),r=t(3692),a=t(3919),c=t(5999),l=t(2503);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(5893);function h(e){let{href:n,children:t}=e;return(0,d.jsx)(r.Z,{href:n,className:(0,s.Z)("card padding--lg",o.cardContainer),children:t})}function u(e){let{href:n,icon:t,title:i,description:r}=e;return(0,d.jsxs)(h,{href:n,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,s.Z)("text--truncate",o.cardTitle),title:i,children:[t," ",i]}),r&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",o.cardDescription),title:r,children:r})]})}function m(e){let{item:n}=e;const t=(0,i.LM)(n);return t?(0,d.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function p(e){let{item:n}=e;const t=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(n.docId??void 0);return(0,d.jsx)(u,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(p,{item:n});case"category":return(0,d.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function j(e){let{className:n}=e;const t=(0,i.jA)();return(0,d.jsx)(b,{items:t.items,className:n})}function b(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(j,{...e});const r=(0,i.MN)(n);return(0,d.jsx)("section",{className:(0,s.Z)("row",t),children:r.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},n)))})}},876:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Rebus-Service-8ee6cdc7f0dce9665397677ad574c3e2.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);