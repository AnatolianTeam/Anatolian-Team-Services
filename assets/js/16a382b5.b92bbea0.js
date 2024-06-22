"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6944],{7142:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=n(85893),r=n(11151),i=n(52991);const c={id:"introduction",hide_table_of_contents:!0,description:"Cross Finance Service Page",position:1,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","finance","cross finance","installation","snapshot","statesync","update"]},o="Cross Finance",l={id:"Testnet/Cosmos-Ecosystem/crossfi/introduction",title:"Cross Finance",description:"Cross Finance Service Page",source:"@site/docs/Testnet/Cosmos-Ecosystem/crossfi/index.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crossfi",slug:"/Testnet/Cosmos-Ecosystem/crossfi/",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Cosmos-Ecosystem/crossfi/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,description:"Cross Finance Service Page",position:1,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","finance","cross finance","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\u2934\ufe0f Cheatsheets",permalink:"/docs/Testnet/Cosmos-Ecosystem/chain4energy/cheatsheets"},next:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet/Cosmos-Ecosystem/crossfi/installation"}},a={image:n(4636).Z},d=[{value:"Links",id:"links",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Network Info",id:"network-info",level:2},{value:"Public Services",id:"public-services",level:2},{value:"Peering",id:"peering",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"cross-finance",children:"Cross Finance"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chain4Energy",src:n(2286).Z+"",width:"2000",height:"600"})}),"\n",(0,t.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(s.p,{children:["\u2714\ufe0f ",(0,t.jsx)(s.a,{href:"https://crossfi.org/",children:"Website"})," |\n\u2714\ufe0f ",(0,t.jsx)(s.a,{href:"https://test.xfiscan.com/validators",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,t.jsx)(s.a,{href:"https://docs.crossfi.org",children:"Docs"})," |\n\u2714\ufe0f ",(0,t.jsx)(s.a,{href:"https://github.com/crossfichain",children:"GitHub"})," |\n\u2714\ufe0f ",(0,t.jsx)(s.a,{href:"https://discord.gg/crossfi",children:"Discord"})]}),"\n",(0,t.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Components"}),(0,t.jsx)(s.th,{children:"Minimum"}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Recommended"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CPU"}),(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RAM"}),(0,t.jsx)(s.td,{children:"8 GB"}),(0,t.jsx)(s.td,{children:"16 GB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Storage"}),(0,t.jsx)(s.td,{children:"250 GB SSD"}),(0,t.jsx)(s.td,{children:"500 GB SSD"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"network-info",children:"Network Info"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Network Chain ID: crossfi-evm-testnet-1"}),"\n",(0,t.jsx)(s.li,{children:"Binary: crossfid"}),"\n",(0,t.jsx)(s.li,{children:"Denom: mpx"}),"\n",(0,t.jsx)(s.li,{children:"Working directory: .mineplex-chain"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"public-services",children:"Public Services"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"RPC:"})," ",(0,t.jsx)(s.a,{href:"https://rpc-t-crossfi.anatolianteam.com/",children:"https://rpc-t-crossfi.anatolianteam.com/"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"API:"})," ",(0,t.jsx)(s.a,{href:"https://api-t-crossfi.anatolianteam.com/",children:"https://api-t-crossfi.anatolianteam.com/"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Explorer:"})," ",(0,t.jsx)(s.a,{href:"https://cosmos-testnet.anatolianteam.com/Cross%20Finance",children:"https://cosmos-testnet.anatolianteam.com/Cross%20Finance"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"peering",children:"Peering"}),"\n",(0,t.jsx)(s.p,{children:"You can use peer for fast connection or state sync"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'peers="COMING SOON"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.mineplex-chain/config/config.toml\n'})}),"\n",(0,t.jsx)(s.p,{children:"The address book is updated once three hour. You can use it for quick launch."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'wget -O $HOME/.mineplex-chain/config/addrbook.json "https://testnet.anatolianteam.com/crossfi/addrbook.json"\n'})}),"\n","\n",(0,t.jsx)(i.Z,{})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},52991:(e,s,n)=>{n.d(s,{Z:()=>g});n(67294);var t=n(90512),r=n(53438),i=n(33692),c=n(88824),o=n(13919),l=n(95999),a=n(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(85893);function u(e){let{href:s,children:n}=e;return(0,h.jsx)(i.Z,{href:s,className:(0,t.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:s,icon:n,title:r,description:i}=e;return(0,h.jsxs)(u,{href:s,children:[(0,h.jsxs)(a.Z,{as:"h2",className:(0,t.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),i&&(0,h.jsx)("p",{className:(0,t.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:s}=e;const n=(0,r.LM)(s),t=function(){const{selectMessage:e}=(0,c.c)();return s=>e(s,(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return n?(0,h.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??t(s.items.length)}):null}function f(e){let{item:s}=e;const n=(0,o.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,r.xz)(s.docId??void 0);return(0,h.jsx)(m,{href:s.href,icon:n,title:s.label,description:s.description??t?.description})}function x(e){let{item:s}=e;switch(s.type){case"link":return(0,h.jsx)(f,{item:s});case"category":return(0,h.jsx)(p,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function j(e){let{className:s}=e;const n=(0,r.jA)();return(0,h.jsx)(g,{items:n.items,className:s})}function g(e){const{items:s,className:n}=e;if(!s)return(0,h.jsx)(j,{...e});const i=(0,r.MN)(s);return(0,h.jsx)("section",{className:(0,t.Z)("row",n),children:i.map(((e,s)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(x,{item:e})},s)))})}},88824:(e,s,n)=>{n.d(s,{c:()=>a});var t=n(67294),r=n(52263);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((s=>e.includes(s)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,t.useMemo)((()=>{try{return function(e){const s=new Intl.PluralRules(e);return{locale:e,pluralForms:c(s.resolvedOptions().pluralCategories),select:e=>s.select(e)}}(e)}catch(s){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${s.message}\n`),o}}),[e])}function a(){const e=l();return{selectMessage:(s,n)=>function(e,s,n){const t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const r=n.select(s),i=n.pluralForms.indexOf(r);return t[Math.min(i,t.length-1)]}(n,s,e)}}},4636:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/CrossFi-Service-Cover-0ce1a6b9e36b5df88eb11c5ca9de4d21.jpg"},2286:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/CrossFi-Service-d6814ca61b4c9ddc32797287c286709c.jpg"},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>c});var t=n(67294);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);