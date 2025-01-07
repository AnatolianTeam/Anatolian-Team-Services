"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7491],{19117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Testnet Archive/artela/introduction","title":"Artela Network","description":"Chain4Energy","source":"@site/docs/Testnet Archive/artela/index.md","sourceDirName":"Testnet Archive/artela","slug":"/Testnet Archive/artela/","permalink":"/tr/docs/Testnet Archive/artela/","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/artela/index.md","tags":[],"version":"current","frontMatter":{"id":"introduction","hide_table_of_contents":true,"image":"./img/Artela-Service-Cover.jpg","keywords":["artela","network","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\u2934\ufe0f Cheatsheets","permalink":"/tr/docs/Testnet Archive/alignedlayer/ycheatsheets"},"next":{"title":"\ud83d\udcbe Installation","permalink":"/tr/docs/Testnet Archive/artela/installation"}}');var s=n(74848),i=n(28453),a=n(99563);const l={id:"introduction",hide_table_of_contents:!0,image:"./img/Artela-Service-Cover.jpg",keywords:["artela","network","installation","snapshot","statesync","update"]},c="Artela Network",o={image:n(65136).A},d=[{value:"Links",id:"links",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Network Info",id:"network-info",level:2},{value:"Public Services",id:"public-services",level:2},{value:"Peering",id:"peering",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"artela-network",children:"Artela Network"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chain4Energy",src:n(88787).A+"",width:"2000",height:"600"})}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.p,{children:["\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://artela.network/",children:"Website"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://cosmos-testnet.anatolianteam.com/Artela",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://docs.artela.network/main",children:"Docs"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://github.com/artela-network",children:"GitHub"})," |\n\u2714\ufe0f ",(0,s.jsx)(t.a,{href:"https://discord.gg/artela",children:"Discord"})]}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Components"}),(0,s.jsx)(t.th,{children:"Minimum"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Recommended"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CPU"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RAM"}),(0,s.jsx)(t.td,{children:"8 GB"}),(0,s.jsx)(t.td,{children:"16 GB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Storage"}),(0,s.jsx)(t.td,{children:"250 GB SSD"}),(0,s.jsx)(t.td,{children:"500 GB SSD"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"network-info",children:"Network Info"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Network Chain ID: artela_11822-1"}),"\n",(0,s.jsx)(t.li,{children:"Binary: artelad"}),"\n",(0,s.jsx)(t.li,{children:"Denom: uart"}),"\n",(0,s.jsx)(t.li,{children:"Working directory: .artelad"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"public-services",children:"Public Services"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RPC:"})," ",(0,s.jsx)(t.a,{href:"https://rpc-t-artela.anatolianteam.com/",children:"https://rpc-t-artela.anatolianteam.com/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"API:"})," ",(0,s.jsx)(t.a,{href:"https://api-t-artela.anatolianteam.com/",children:"https://api-t-artela.anatolianteam.com/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Explorer:"})," ",(0,s.jsx)(t.a,{href:"https://cosmos-testnet.anatolianteam.com/Artela",children:"https://cosmos-testnet.anatolianteam.com/Artela"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"peering",children:"Peering"}),"\n",(0,s.jsx)(t.p,{children:"You can use peer for fast connection or state sync"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'peers="COMING SOON"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.artelad/config/config.toml\n'})}),"\n",(0,s.jsx)(t.p,{children:"The address book is updated once three hour. You can use it for quick launch."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'wget -O $HOME/.artelad/config/addrbook.json "https://testnet.anatolianteam.com/artela/addrbook.json"\n'})}),"\n","\n",(0,s.jsx)(a.A,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var r=n(34164),s=n(93751),i=n(56289),a=n(81430),l=n(22887),c=n(50539),o=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(74848);function u(e){let{href:t,children:n}=e;return(0,h.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(o.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function x(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,h.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(x,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,s.$S)();return(0,h.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(f,{...e});const i=(0,s.d1)(t);return(0,h.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(j,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>o});var r=n(96540),s=n(40797);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function o(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},65136:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Artela-Service-Cover-1fab625ad3379b0be3255fc67f0902a7.jpg"},88787:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Artela-Service-7c9398f698794b7db9e68da3ecc6e977.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);