"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9279],{33573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"Testnet/Arweave Ecosystem/orbit/introduction","title":"Orbit","description":"Orbit Servis Sayfas\u0131","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/orbit/index.md","sourceDirName":"Testnet/Arweave Ecosystem/orbit","slug":"/Testnet/Arweave Ecosystem/orbit/","permalink":"/tr/docs/Testnet/Arweave Ecosystem/orbit/","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/orbit/index.md","tags":[],"version":"current","frontMatter":{"id":"introduction","hide_table_of_contents":true,"image":"./img/Orbit-Service-Cover.jpg","description":"Orbit Servis Sayfas\u0131","keywords":["Orbit","ao","veri","kurulum","rehber"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcbe Installation","permalink":"/tr/docs/Testnet/Arweave Ecosystem/liteseed/installation"},"next":{"title":"\ud83d\udcbe Installation","permalink":"/tr/docs/Testnet/Arweave Ecosystem/orbit/installation"}}');var s=r(74848),i=r(28453),o=r(99563);const c={id:"introduction",hide_table_of_contents:!0,image:"./img/Orbit-Service-Cover.jpg",description:"Orbit Servis Sayfas\u0131",keywords:["Orbit","ao","veri","kurulum","rehber"]},a="Orbit",l={image:r(36351).A},u=[{value:"Ba\u011flant\u0131lar",id:"ba\u011flant\u0131lar",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"orbit",children:"Orbit"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Orbit",src:r(79108).A+"",width:"2000",height:"600"})}),"\n",(0,s.jsx)(t.h2,{id:"ba\u011flant\u0131lar",children:"Ba\u011flant\u0131lar"}),"\n",(0,s.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://www.0rbit.co",children:"Website"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://docs.0rbit.co",children:"Dok\xfcman"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://github.com/0rbit-co",children:"GitHub"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://discord.gg/JVSjqaKJgV",children:"Discord"})]}),"\n","\n",(0,s.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},99563:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var n=r(34164),s=r(93751),i=r(56289),o=r(81430),c=r(22887),a=r(50539),l=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(b,{item:e})},t)))})}},81430:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),s=r(40797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}},36351:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Orbit-Service-Cover-b3a7f3c4fddbf02fbb2d1ee3dc1c5196.jpg"},79108:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Orbit-Service-7acd5ebeeabe4c1a210fb3980abc2697.jpg"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);