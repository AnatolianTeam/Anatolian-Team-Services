"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2660],{69583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Testnet Archive/crossfi/introduction","title":"Cross Finance","description":"Cross Finance Service Page","source":"@site/docs/Testnet Archive/crossfi/index.md","sourceDirName":"Testnet Archive/crossfi","slug":"/Testnet Archive/crossfi/","permalink":"/tr/docs/Testnet Archive/crossfi/","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/crossfi/index.md","tags":[],"version":"current","frontMatter":{"id":"introduction","hide_table_of_contents":true,"description":"Cross Finance Service Page","position":1,"image":"./img/CrossFi-Service-Cover.jpg","keywords":["crossfi","finance","cross finance","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"\u2934\ufe0f Cheatsheets","permalink":"/tr/docs/Testnet Archive/babylon/cheatsheets"},"next":{"title":"\ud83d\udcbe Installation","permalink":"/tr/docs/Testnet Archive/crossfi/installation"}}');var r=t(74848),i=t(28453),c=t(99563);const o={id:"introduction",hide_table_of_contents:!0,description:"Cross Finance Service Page",position:1,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","finance","cross finance","installation","snapshot","statesync","update"]},l="Cross Finance",a={image:t(42920).A},d=[{value:"Links",id:"links",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Network Info",id:"network-info",level:2},{value:"Public Services",id:"public-services",level:2},{value:"Peering",id:"peering",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cross-finance",children:"Cross Finance"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Chain4Energy",src:t(64731).A+"",width:"2000",height:"600"})}),"\n",(0,r.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://crossfi.org/",children:"Website"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://test.xfiscan.com/validators",children:"Blockchain Explorer"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://docs.crossfi.org",children:"Docs"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://github.com/crossfichain",children:"GitHub"})," |\n\u2714\ufe0f ",(0,r.jsx)(n.a,{href:"https://discord.gg/crossfi",children:"Discord"})]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Components"}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Recommended"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"8 GB"}),(0,r.jsx)(n.td,{children:"16 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage"}),(0,r.jsx)(n.td,{children:"250 GB SSD"}),(0,r.jsx)(n.td,{children:"500 GB SSD"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"network-info",children:"Network Info"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Network Chain ID: crossfi-evm-testnet-1"}),"\n",(0,r.jsx)(n.li,{children:"Binary: crossfid"}),"\n",(0,r.jsx)(n.li,{children:"Denom: mpx"}),"\n",(0,r.jsx)(n.li,{children:"Working directory: .mineplex-chain"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"public-services",children:"Public Services"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RPC:"})," ",(0,r.jsx)(n.a,{href:"https://rpc-t-crossfi.anatolianteam.com/",children:"https://rpc-t-crossfi.anatolianteam.com/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"API:"})," ",(0,r.jsx)(n.a,{href:"https://api-t-crossfi.anatolianteam.com/",children:"https://api-t-crossfi.anatolianteam.com/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Explorer:"})," ",(0,r.jsx)(n.a,{href:"https://cosmos-testnet.anatolianteam.com/Cross%20Finance",children:"https://cosmos-testnet.anatolianteam.com/Cross%20Finance"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"peering",children:"Peering"}),"\n",(0,r.jsx)(n.p,{children:"You can use peer for fast connection or state sync"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'peers="COMING SOON"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.mineplex-chain/config/config.toml\n'})}),"\n",(0,r.jsx)(n.p,{children:"The address book is updated once three hour. You can use it for quick launch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'wget -O $HOME/.mineplex-chain/config/addrbook.json "https://testnet.anatolianteam.com/crossfi/addrbook.json"\n'})}),"\n","\n",(0,r.jsx)(c.A,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},99563:(e,n,t)=>{t.d(n,{A:()=>g});t(96540);var s=t(34164),r=t(93751),i=t(56289),c=t(81430),o=t(22887),l=t(50539),a=t(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(74848);function u(e){let{href:n,children:t}=e;return(0,h.jsx)(i.A,{href:n,className:(0,s.A)("card padding--lg",d.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:r,description:i}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(a.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:r,children:[t," ",r]}),i&&(0,h.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:n}=e;const t=(0,r.Nr)(n),s=function(){const{selectMessage:e}=(0,c.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,h.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function f(e){let{item:n}=e;const t=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(n.docId??void 0);return(0,h.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(f,{item:n});case"category":return(0,h.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function j(e){let{className:n}=e;const t=(0,r.$S)();return(0,h.jsx)(g,{items:t.items,className:n})}function g(e){const{items:n,className:t}=e;if(!n)return(0,h.jsx)(j,{...e});const i=(0,r.d1)(n);return(0,h.jsx)("section",{className:(0,s.A)("row",t),children:i.map(((e,n)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(x,{item:e})},n)))})}},81430:(e,n,t)=>{t.d(n,{W:()=>a});var s=t(96540),r=t(40797);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((n=>e.includes(n)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),o}}),[e])}function a(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=t.select(n),i=t.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(t,n,e)}}},42920:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/CrossFi-Service-Cover-0ce1a6b9e36b5df88eb11c5ca9de4d21.jpg"},64731:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/CrossFi-Service-d6814ca61b4c9ddc32797287c286709c.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);