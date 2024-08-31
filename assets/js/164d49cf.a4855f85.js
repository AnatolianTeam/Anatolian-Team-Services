"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1328],{42799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151),s=n(52991);const a={id:"introduction",hide_table_of_contents:!0,image:"./img/Rivalz-Service-Cover.jpg",description:"Rivalz Servis Page.",keywords:["Rivalz","AI","Dymension","Celestia","installation"]},o="Rivalz",c={id:"Testnet/rivalz/introduction",title:"Rivalz",description:"Rivalz Servis Page.",source:"@site/docs/Testnet/rivalz/index.md",sourceDirName:"Testnet/rivalz",slug:"/Testnet/rivalz/",permalink:"/docs/Testnet/rivalz/",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/rivalz/index.md",tags:[],version:"current",frontMatter:{id:"introduction",hide_table_of_contents:!0,image:"./img/Rivalz-Service-Cover.jpg",description:"Rivalz Servis Page.",keywords:["Rivalz","AI","Dymension","Celestia","installation"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 Update",permalink:"/docs/Testnet/redbelly/update"},next:{title:"\ud83d\udcbe Rivalz Client",permalink:"/docs/Testnet/rivalz/client"}},l={image:n(57161).Z},d=[{value:"Links",id:"links",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rivalz",children:"Rivalz"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Rivalz",src:n(58958).Z+"",width:"2000",height:"600"})}),"\n",(0,r.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://rivalz.ai/",children:"Website"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://docs.rivalz.ai/",children:"Docs"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://rivalz.ai?r=mkoltigin",children:"Dashboard"})," |\n\u2714\ufe0f ",(0,r.jsx)(t.a,{href:"https://discord.gg/grNNnSBPBG",children:"Discord"})]}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>x});n(67294);var r=n(90512),i=n(53438),s=n(33692),a=n(88824),o=n(13919),c=n(95999),l=n(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(85893);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t),r=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(g,{...e});const s=(0,i.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(v,{item:e})},t)))})}},88824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(67294),i=n(52263);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},57161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rivalz-Service-Cover-57ed23a48ab5c6942fa86e1246758c2a.jpg"},58958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Rivalz-Service-9acc2d0e3736363195421fc853b8c1b1.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);