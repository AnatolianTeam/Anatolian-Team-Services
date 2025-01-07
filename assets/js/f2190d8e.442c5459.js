"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5008],{76435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Testnet/galadriel/introduction","title":"Galadriel","description":"Galadriel Servis Page.","source":"@site/docs/Testnet/galadriel/index.md","sourceDirName":"Testnet/galadriel","slug":"/Testnet/galadriel/","permalink":"/docs/Testnet/galadriel/","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/galadriel/index.md","tags":[],"version":"current","frontMatter":{"id":"introduction","hide_table_of_contents":true,"image":"./img/Galadriel-Service-Cover.jpg","description":"Galadriel Servis Page.","keywords":["Galadriel","AI","Layer 1","installation"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83c\udd99 Update","permalink":"/docs/Testnet/fractal/update"},"next":{"title":"\ud83d\udcbe Contract Deploy","permalink":"/docs/Testnet/galadriel/contract-deploy"}}');var i=r(74848),a=r(28453),s=r(99563);const l={id:"introduction",hide_table_of_contents:!0,image:"./img/Galadriel-Service-Cover.jpg",description:"Galadriel Servis Page.",keywords:["Galadriel","AI","Layer 1","installation"]},c="Galadriel",o={image:r(98210).A},d=[{value:"Links",id:"links",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"galadriel",children:"Galadriel"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Galadriel",src:r(50621).A+"",width:"2000",height:"600"})}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,i.jsx)(t.a,{href:"https://galadriel.com/",children:"Website"})," |\n\u2714\ufe0f ",(0,i.jsx)(t.a,{href:"https://docs.galadriel.com/",children:"Dosc"})," |\n\u2714\ufe0f ",(0,i.jsx)(t.a,{href:"https://github.com/galadriel-ai",children:"GitHub"})," |\n\u2714\ufe0f ",(0,i.jsx)(t.a,{href:"https://discord.gg/xfKhQWbVdV",children:"Discord"})]}),"\n","\n",(0,i.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},99563:(e,t,r)=>{r.d(t,{A:()=>j});r(96540);var n=r(34164),i=r(93751),a=r(56289),s=r(81430),l=r(22887),c=r(50539),o=r(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function h(e){let{href:t,children:r}=e;return(0,u.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:a}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(o.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),a&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.$S)();return(0,u.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const a=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},81430:(e,t,r)=>{r.d(t,{W:()=>o});var n=r(96540),i=r(40797);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function o(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),a=r.pluralForms.indexOf(i);return n[Math.min(a,n.length-1)]}(r,t,e)}}},98210:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Galadriel-Service-Cover-885a1e8e7aa90032c3f1fcf22460c3cf.jpg"},50621:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Galadriel-Service-cbf3d98ae1672264463838a42fcfaf85.jpg"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);