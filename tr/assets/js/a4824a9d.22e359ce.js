"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9953],{4569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(5893),s=n(1151),i=n(2991);const c={id:"introduction",hide_table_of_contents:!0,description:"RPC Node kurulum rehberi.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},o="zksync",l={id:"RPC Node/zksync/introduction",title:"zksync",description:"RPC Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/RPC Node/zksync/index.md",sourceDirName:"RPC Node/zksync",slug:"/RPC Node/zksync/",permalink:"/tr/docs/RPC Node/zksync/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/RPC Node/zksync/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,description:"RPC Node kurulum rehberi.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf6 RPC Ekleme",permalink:"/tr/docs/RPC Node/layerzero/rpc-add"},next:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/RPC Node/zksync/installation"}},a={image:n(36).Z},d=[{value:"Ba\u011flant\u0131lar",id:"ba\u011flant\u0131lar",level:2},{value:"Gereksinimler",id:"gereksinimler",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"zksync",children:"zksync"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"zksync",src:n(4840).Z+"",width:"2000",height:"600"})}),"\n",(0,r.jsx)(t.h2,{id:"ba\u011flant\u0131lar",children:"Ba\u011flant\u0131lar"}),"\n",(0,r.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://zksync.io/",children:"Website"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://docs.zksync.io/",children:"Dok\xfcman"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://github.com/matter-labs",children:"GitHub"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://join.zksync.dev/",children:"Discord"})]}),"\n",(0,r.jsx)(t.h2,{id:"gereksinimler",children:"Gereksinimler"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"B\u015fle\u015fenler"}),(0,r.jsx)(t.th,{children:"Minimum"}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\xd6nerilen"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CPU"}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:"16"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RAM"}),(0,r.jsx)(t.td,{children:"16 GB"}),(0,r.jsx)(t.td,{children:"32 GB"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Disk"}),(0,r.jsx)(t.td,{children:"1 TB SSD"}),(0,r.jsx)(t.td,{children:"2 TB SSD"})]})]})]}),"\n","\n",(0,r.jsx)(i.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var r=n(512),s=n(3438),i=n(3692),c=n(8824),o=n(3919),l=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(5893);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,s.LM)(t),r=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,s.jA)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(j,{...e});const i=(0,s.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(7294),s=n(2263);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},36:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zksync-Service-Cover-7e221f0e5b8312598a3fd5c0d7ef34e9.jpg"},4840:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zksync-Service-4c9292821ab5599e075a1dd98d3dc884.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var r=n(7294);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);