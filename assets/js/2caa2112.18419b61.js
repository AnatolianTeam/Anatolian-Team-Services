"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[372],{33757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(85893),a=t(11151),i=t(52991);const s={id:"introduction",hide_table_of_contents:!0,image:"./img/Penumbra-Service-Cover.jpg",description:"Penumbra Service Page",keywords:["Penumbra","modular","chain","installation","snapshot","statesync","update"]},o="Penumbra Zone",c={id:"Mainnet/penumbra/introduction",title:"Penumbra Zone",description:"Penumbra Service Page",source:"@site/docs/Mainnet/penumbra/index.md",sourceDirName:"Mainnet/penumbra",slug:"/Mainnet/penumbra/",permalink:"/docs/Mainnet/penumbra/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/penumbra/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,image:"./img/Penumbra-Service-Cover.jpg",description:"Penumbra Service Page",keywords:["Penumbra","modular","chain","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 Update Q",permalink:"/docs/Mainnet/Q-Blockhahin/update"},next:{title:"\ud83d\udcbe Installation",permalink:"/docs/Mainnet/penumbra/installation"}},l={image:t(42385).Z},u=[{value:"Links",id:"links",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"penumbra-zone",children:"Penumbra Zone"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Penumbra",src:t(40957).Z+"",width:"2000",height:"600"})}),"\n",(0,r.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://penumbra.zone/",children:"Website"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://penumbra.anatolianteam.com/app",children:"App"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://guide.penumbra.zone/main/index.html",children:"Docs"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://github.com/penumbra-zone",children:"GitHub"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://discord.gg/T7E5U929AV",children:"Discord"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["GRPC-1: ",(0,r.jsx)(n.a,{href:"https://penumbra.anatolianteam.com",children:"https://penumbra.anatolianteam.com"})," ",(0,r.jsx)("br",{}),"\nGRPC-2: ",(0,r.jsx)(n.a,{href:"https://grpc-penumbra.anatolianteam.com",children:"https://grpc-penumbra.anatolianteam.com"})," ",(0,r.jsx)("br",{}),"\nAPP-1: ",(0,r.jsx)(n.a,{href:"https://penumbra.anatolianteam.com/app",children:"https://penumbra.anatolianteam.com/app"})," ",(0,r.jsx)("br",{}),"\nAPP-2: ",(0,r.jsx)(n.a,{href:"https://grpc-penumbra.anatolianteam.com/app",children:"https://grpc-penumbra.anatolianteam.com/app"})," ",(0,r.jsx)("br",{}),"\nRPC: ",(0,r.jsx)(n.a,{href:"https://rpc-penumbra.anatolianteam.com",children:"https://rpc-penumbra.anatolianteam.com"})]}),"\n"]}),"\n","\n",(0,r.jsx)(i.Z,{})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},52991:(e,n,t)=>{t.d(n,{Z:()=>x});t(67294);var r=t(90512),a=t(53438),i=t(33692),s=t(88824),o=t(13919),c=t(95999),l=t(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=t(85893);function p(e){let{href:n,children:t}=e;return(0,m.jsx)(i.Z,{href:n,className:(0,r.Z)("card padding--lg",u.cardContainer),children:t})}function d(e){let{href:n,icon:t,title:a,description:i}=e;return(0,m.jsxs)(p,{href:n,children:[(0,m.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:a,children:[t," ",a]}),i&&(0,m.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:n}=e;const t=(0,a.LM)(n),r=function(){const{selectMessage:e}=(0,s.c)();return n=>e(n,(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,m.jsx)(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function f(e){let{item:n}=e;const t=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(n.docId??void 0);return(0,m.jsx)(d,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function b(e){let{item:n}=e;switch(n.type){case"link":return(0,m.jsx)(f,{item:n});case"category":return(0,m.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e;const t=(0,a.jA)();return(0,m.jsx)(x,{items:t.items,className:n})}function x(e){const{items:n,className:t}=e;if(!n)return(0,m.jsx)(g,{...e});const i=(0,a.MN)(n);return(0,m.jsx)("section",{className:(0,r.Z)("row",t),children:i.map(((e,n)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(b,{item:e})},n)))})}},88824:(e,n,t)=>{t.d(n,{c:()=>l});var r=t(67294),a=t(52263);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=t.select(n),i=t.pluralForms.indexOf(a);return r[Math.min(i,r.length-1)]}(t,n,e)}}},42385:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Penumbra-Service-Cover-9b8346501f1f076cba2beda8f0510843.jpg"},40957:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Penumbra-Service-4a0cf8efc202533ec1136c61e2ae5d8f.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);