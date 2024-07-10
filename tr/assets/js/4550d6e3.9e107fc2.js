"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4029],{42334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),s=t(11151),i=t(52991);const o={id:"introduction",hide_table_of_contents:!0,image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},l="Babylon Chain",c={id:"Testnet Archive/babylon/introduction",title:"Babylon Chain",description:"Babylon Chain",source:"@site/docs/Testnet Archive/babylon/index.md",sourceDirName:"Testnet Archive/babylon",slug:"/Testnet Archive/babylon/",permalink:"/tr/docs/Testnet Archive/babylon/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/babylon/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,image:"./img/Babylon-Service-Cover.jpg",keywords:["babylon","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Avail Project",permalink:"/tr/docs/Testnet Archive/avail-project/"},next:{title:"\ud83d\udcbe Installation",permalink:"/tr/docs/Testnet Archive/babylon/installation"}},a={image:t(83249).Z},d=[{value:"Links",id:"links",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Network Info",id:"network-info",level:2},{value:"Public Services",id:"public-services",level:2},{value:"Peering",id:"peering",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"babylon-chain",children:"Babylon Chain"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Babylon Chain",src:t(98503).Z+"",width:"2000",height:"600"})}),"\n",(0,r.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://www.babylonchain.io/",children:"Website"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://babylon.explorers.guru/",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://docs.babylonchain.io/",children:"Dok\xfcman"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://github.com/babylonchain",children:"GitHub"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://discord.gg/XcCtr53g8F",children:"Discord"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://zealy.io/c/babylonchain/invite/H74AmwvpVNPGL8suCk1xL",children:"Zealy"})]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Components"}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Recommended"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"8 GB"}),(0,r.jsx)(n.td,{children:"16 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"250 GB SSD"}),(0,r.jsx)(n.td,{children:"500 GB SSD"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"network-info",children:"Network Info"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Network Chain ID: bbn-test-2"}),"\n",(0,r.jsx)(n.li,{children:"Binary: babylond"}),"\n",(0,r.jsx)(n.li,{children:"Denom: ubbn"}),"\n",(0,r.jsx)(n.li,{children:"Working directory: .babylond"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"public-services",children:"Public Services"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RPC:"})," ",(0,r.jsx)(n.a,{href:"https://rpc-t-babylon.anatolianteam.com/",children:"https://rpc-t-babylon.anatolianteam.com/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"API:"})," ",(0,r.jsx)(n.a,{href:"https://api-t-babylon.anatolianteam.com/",children:"https://api-t-babylon.anatolianteam.com/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Explorer:"})," ",(0,r.jsx)(n.a,{href:"https://cosmos-testnet.anatolianteam.com/Babylon",children:"https://cosmos-testnet.anatolianteam.com/Babylon"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"peering",children:"Peering"}),"\n",(0,r.jsx)(n.p,{children:"You can use peer for fast connection or state sync."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'peers="fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.babylond/config/config.toml\n'})}),"\n",(0,r.jsx)(n.p,{children:"The address book is updated once three hour. You can use it for quick launch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'wget -O $HOME/.babylond/config/addrbook.json "https://testnet.anatolianteam.com/babylon/addrbook.json"\n'})}),"\n","\n",(0,r.jsx)(i.Z,{})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},52991:(e,n,t)=>{t.d(n,{Z:()=>f});t(67294);var r=t(90512),s=t(53438),i=t(33692),o=t(88824),l=t(13919),c=t(95999),a=t(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(85893);function u(e){let{href:n,children:t}=e;return(0,h.jsx)(i.Z,{href:n,className:(0,r.Z)("card padding--lg",d.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:s,description:i}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:s,children:[t," ",s]}),i&&(0,h.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function b(e){let{item:n}=e;const t=(0,s.LM)(n),r=function(){const{selectMessage:e}=(0,o.c)();return n=>e(n,(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,h.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function p(e){let{item:n}=e;const t=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(n.docId??void 0);return(0,h.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(p,{item:n});case"category":return(0,h.jsx)(b,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function j(e){let{className:n}=e;const t=(0,s.jA)();return(0,h.jsx)(f,{items:t.items,className:n})}function f(e){const{items:n,className:t}=e;if(!n)return(0,h.jsx)(j,{...e});const i=(0,s.MN)(n);return(0,h.jsx)("section",{className:(0,r.Z)("row",t),children:i.map(((e,n)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(x,{item:e})},n)))})}},88824:(e,n,t)=>{t.d(n,{c:()=>a});var r=t(67294),s=t(52263);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=t.select(n),i=t.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(t,n,e)}}},83249:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Babylon-Service-Cover-28dbb10952875d3c2edfdd8e0002355a.jpg"},98503:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Babylon-Service-26a3c6f1b6783e4653d351473bb9f1b7.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);