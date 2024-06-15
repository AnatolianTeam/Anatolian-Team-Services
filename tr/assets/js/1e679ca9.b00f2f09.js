"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6815],{1306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=t(5893),i=t(1151),r=t(2991);const c={id:"introduction",hide_table_of_contents:!0,image:"./img/SelfChain-Service-Cover.jpg",description:"Self Chain Service Page",keywords:["selfchain","self","chain","installation","snapshot","statesync","update"]},l="Self Chain",a={id:"Testnet Archive/selfchain/introduction",title:"Self Chain",description:"Self Chain Service Page",source:"@site/docs/Testnet Archive/selfchain/index.md",sourceDirName:"Testnet Archive/selfchain",slug:"/Testnet Archive/selfchain/",permalink:"/tr/docs/Testnet Archive/selfchain/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/selfchain/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,image:"./img/SelfChain-Service-Cover.jpg",description:"Self Chain Service Page",keywords:["selfchain","self","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\u2934\ufe0f Cheatsheets",permalink:"/tr/docs/Testnet Archive/pryzm-zone/cheatsheets"},next:{title:"\ud83d\udcbe Installation",permalink:"/tr/docs/Testnet Archive/selfchain/installation"}},o={image:t(9080).Z},h=[{value:"Links",id:"links",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Network Info",id:"network-info",level:2},{value:"Public Services",id:"public-services",level:2},{value:"Peering",id:"peering",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"self-chain",children:"Self Chain"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SelfChain",src:t(9194).Z+"",width:"2000",height:"600"})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://selfchain.xyz",children:"Website"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://cosmos-testnet.anatolianteam.com/SelfChain",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://docs.selfchain.xyz/",children:"Docs"})," |\n\u2714\ufe0f ",(0,s.jsx)(n.a,{href:"https://discord.gg/selfchainxyz",children:"Discord"})]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Components"}),(0,s.jsx)(n.th,{children:"Minimum"}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Recommended"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPU"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RAM"}),(0,s.jsx)(n.td,{children:"8 GB"}),(0,s.jsx)(n.td,{children:"16 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage"}),(0,s.jsx)(n.td,{children:"250 GB SSD"}),(0,s.jsx)(n.td,{children:"500 GB SSD"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"network-info",children:"Network Info"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Network Chain ID: self-dev-1"}),"\n",(0,s.jsx)(n.li,{children:"Binary: selfchaind"}),"\n",(0,s.jsx)(n.li,{children:"Denom: uself"}),"\n",(0,s.jsx)(n.li,{children:"Working directory: .selfchain"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"public-services",children:"Public Services"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RPC:"})," ",(0,s.jsx)(n.a,{href:"https://rpc-t-selfchain.anatolianteam.com/",children:"https://rpc-t-selfchain.anatolianteam.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API:"})," ",(0,s.jsx)(n.a,{href:"https://api-t-selfchain.anatolianteam.com/",children:"https://api-t-selfchain.anatolianteam.com/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Explorer:"})," ",(0,s.jsx)(n.a,{href:"https://cosmos-testnet.anatolianteam.com/SelfChain",children:"https://cosmos-testnet.anatolianteam.com/SelfChain"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"peering",children:"Peering"}),"\n",(0,s.jsx)(n.p,{children:"You can use peer for fast connection or state sync"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'peers="e8502eb858f555051f3f80edc13f46ea942e7507@23.111.23.233:26656,2ff64c736dd3fc7649a108b2ac139a3c5100f614@135.181.176.109:39356,108749a0b4f8c05534014a64697520b6385dc997@65.108.196.251:10156"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.selfchain/config/config.toml\n'})}),"\n",(0,s.jsx)(n.p,{children:"The address book is updated once three hour. You can use it for quick launch."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'wget -O $HOME/.selfchain/config/addrbook.json "https://testnet.anatolianteam.com/selfchain/addrbook.json"\n'})}),"\n","\n",(0,s.jsx)(r.Z,{})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2991:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var s=t(512),i=t(3438),r=t(3692),c=t(8824),l=t(3919),a=t(5999),o=t(2503);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(5893);function u(e){let{href:n,children:t}=e;return(0,d.jsx)(r.Z,{href:n,className:(0,s.Z)("card padding--lg",h.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:i,description:r}=e;return(0,d.jsxs)(u,{href:n,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,s.Z)("text--truncate",h.cardTitle),title:i,children:[t," ",i]}),r&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",h.cardDescription),title:r,children:r})]})}function m(e){let{item:n}=e;const t=(0,i.LM)(n),s=function(){const{selectMessage:e}=(0,c.c)();return n=>e(n,(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function p(e){let{item:n}=e;const t=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(n.docId??void 0);return(0,d.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(p,{item:n});case"category":return(0,d.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function j(e){let{className:n}=e;const t=(0,i.jA)();return(0,d.jsx)(g,{items:t.items,className:n})}function g(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(j,{...e});const r=(0,i.MN)(n);return(0,d.jsx)("section",{className:(0,s.Z)("row",t),children:r.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},n)))})}},8824:(e,n,t)=>{t.d(n,{c:()=>o});var s=t(7294),i=t(2263);const r=["zero","one","two","few","many","other"];function c(e){return r.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function o(){const e=a();return{selectMessage:(n,t)=>function(e,n,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=t.select(n),r=t.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(t,n,e)}}},9080:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/SelfChain-Service-Cover-9177468565f242a0411a413cf6f4166b.jpg"},9194:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/SelfChain-Service-0d070810d03c8a40acadf4b8a9f4d988.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var s=t(7294);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);