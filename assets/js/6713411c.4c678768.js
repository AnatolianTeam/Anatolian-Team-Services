"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2377],{36188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(85893),s=n(11151),i=n(52991);const a={id:"introduction",hide_table_of_contents:!0,description:"Lava Network Service Page",image:"./img/Lava-Service-Cover.jpg",keywords:["lava","network","installation","snapshot","statesync","update"]},c="Lava Network",l={id:"Testnet Archive/lava/introduction",title:"Lava Network",description:"Lava Network Service Page",source:"@site/docs/Testnet Archive/lava/index.md",sourceDirName:"Testnet Archive/lava",slug:"/Testnet Archive/lava/",permalink:"/docs/Testnet Archive/lava/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/lava/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,description:"Lava Network Service Page",image:"./img/Lava-Service-Cover.jpg",keywords:["lava","network","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc64 User Guide",permalink:"/docs/Testnet Archive/initia/user-guide"},next:{title:"\ud83d\udcbe Installation",permalink:"/docs/Testnet Archive/lava/installation"}},o={image:n(57210).Z},d=[{value:"Links/",id:"links",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Network Info",id:"network-info",level:2},{value:"Public Services",id:"public-services",level:2},{value:"Peering",id:"peering",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lava-network",children:"Lava Network"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Chain4Energy",src:n(96356).Z+"",width:"2000",height:"600"})}),"\n",(0,r.jsx)(t.h2,{id:"links",children:"Links/"}),"\n",(0,r.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://www.lavanet.xyz",children:"Website"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://cosmos-testnet.anatolianteam.com/Lava%20Network",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://docs.lavanet.xyz/",children:"Docs"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://github.com/lavanet",children:"GitHub"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://discord.gg/zyvZ93yZpM",children:"Discord"})]}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Components"}),(0,r.jsx)(t.th,{children:"Minimum"}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Recommended"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CPU"}),(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RAM"}),(0,r.jsx)(t.td,{children:"8 GB"}),(0,r.jsx)(t.td,{children:"16 GB"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Storage"}),(0,r.jsx)(t.td,{children:"250 GB SSD"}),(0,r.jsx)(t.td,{children:"500 GB SSD"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"network-info",children:"Network Info"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Network Chain ID: lava-testnet-2"}),"\n",(0,r.jsx)(t.li,{children:"Binary: lavad"}),"\n",(0,r.jsx)(t.li,{children:"Denom: ulava"}),"\n",(0,r.jsx)(t.li,{children:"Working directory: .lava"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"public-services",children:"Public Services"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RPC:"})," ",(0,r.jsx)(t.a,{href:"https://rpc-t-lava.anatolianteam.com/",children:"https://rpc-t-lava.anatolianteam.com/"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"API:"})," ",(0,r.jsx)(t.a,{href:"https://api-t-lava.anatolianteam.com/",children:"https://api-t-lava.anatolianteam.com/"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Explorer:"})," ",(0,r.jsx)(t.a,{href:"https://cosmos-testnet.anatolianteam.com/Lava%20Network",children:"https://cosmos-testnet.anatolianteam.com/Lava%20Network"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"peering",children:"Peering"}),"\n",(0,r.jsx)(t.p,{children:"You can use peer for fast connection or state sync"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'peers="COMING SOON"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.lava/config/config.toml\n'})}),"\n",(0,r.jsx)(t.p,{children:"The address book is updated once three hour. You can use it for quick launch."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'wget -O $HOME/.lava/config/addrbook.json "https://testnet.anatolianteam.com/lava/addrbook.json"\n'})}),"\n","\n",(0,r.jsx)(i.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>f});n(67294);var r=n(90512),s=n(53438),i=n(33692),a=n(88824),c=n(13919),l=n(95999),o=n(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(85893);function u(e){let{href:t,children:n}=e;return(0,h.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,s.LM)(t),r=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function x(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,h.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(x,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,s.jA)();return(0,h.jsx)(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(j,{...e});const i=(0,s.MN)(t);return(0,h.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}},88824:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(67294),s=n(52263);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},57210:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Lava-Service-Cover-4290caf19153fab30dec650b506e356f.jpg"},96356:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Lava-Service-9712fae16079647847677968fc5515d4.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(67294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);