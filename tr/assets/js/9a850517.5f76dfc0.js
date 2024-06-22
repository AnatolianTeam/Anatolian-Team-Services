"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4470],{84760:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=n(85893),t=n(11151);const l={title:"\ud83c\udd99 G\xfcncelleme",description:"Ar Node g\xfcncelleme.",image:"./img/Ar-Service-Cover.jpg",keywords:["Ar.io","Ar","permaweb","g\xfcncelelme","rehber"],sidebar_position:5},i="Ar Node G\xfcncelleme",s={id:"Testnet/Arweave Ecosystem/ar.io/update",title:"\ud83c\udd99 G\xfcncelleme",description:"Ar Node g\xfcncelleme.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/ar.io/update.md",sourceDirName:"Testnet/Arweave Ecosystem/ar.io",slug:"/Testnet/Arweave Ecosystem/ar.io/update",permalink:"/tr/docs/Testnet/Arweave Ecosystem/ar.io/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/ar.io/update.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83c\udd99 G\xfcncelleme",description:"Ar Node g\xfcncelleme.",image:"./img/Ar-Service-Cover.jpg",keywords:["Ar.io","Ar","permaweb","g\xfcncelelme","rehber"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddf3\ufe0f\xa0Delegasyon",permalink:"/tr/docs/Testnet/Arweave Ecosystem/ar.io/stake-delegation"},next:{title:"\u2699\ufe0f \xc7\xf6z\xfcmler",permalink:"/tr/docs/Testnet/Arweave Ecosystem/ar.io/solutions"}},a={image:n(84500).Z},c=[{value:"Versiyon Kontrol\xfc",id:"versiyon-kontrol\xfc",level:2},{value:"Konteyner ve Birimleri Kald\u0131rma",id:"konteyner-ve-birimleri-kald\u0131rma",level:2},{value:"G\xfcncel Konteynerlar\u0131 \xc7ekme",id:"g\xfcncel-konteynerlar\u0131-\xe7ekme",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Redis Error \xc7\xf6z\xfcm\xfc",id:"redis-error-\xe7\xf6z\xfcm\xfc",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"ar-node-g\xfcncelleme",children:"Ar Node G\xfcncelleme"}),"\n",(0,o.jsx)(r.h2,{id:"versiyon-kontrol\xfc",children:"Versiyon Kontrol\xfc"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"curl http://localhost:3000/ar-io/info\n"})}),"\n",(0,o.jsx)(r.h2,{id:"konteyner-ve-birimleri-kald\u0131rma",children:"Konteyner ve Birimleri Kald\u0131rma"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"cd $HOME/ar-io-node/\ndocker-compose down\n"})}),"\n",(0,o.jsx)(r.h2,{id:"g\xfcncel-konteynerlar\u0131-\xe7ekme",children:"G\xfcncel Konteynerlar\u0131 \xc7ekme"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"git pull \ngit checkout main \ndocker-compose up -d\n"})}),"\n",(0,o.jsx)(r.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"docker-compose logs -f --tail=0\n"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Ard\u0131ndan ",(0,o.jsx)(r.code,{children:"CTRL C"})," ile loglar\u0131 kapat\u0131n. Kapatmadan bir screen i\xe7erisinde \xe7al\u0131\u015ft\u0131racak oluran\u0131z zamanla diskinizde bu loglar yer kaplayacakt\u0131r."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"redis-error-\xe7\xf6z\xfcm\xfc",children:"Redis Error \xc7\xf6z\xfcm\xfc"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"docker-compose down --rmi all\nrm -rf $HOME/ar-io-node/data/redis\ndocker-compose up -d\n"})})]})}function m(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},84500:(e,r,n)=>{n.d(r,{Z:()=>o});const o=n.p+"assets/images/Ar-Service-Cover-016196db563584d25dcabf0e96b9b48f.jpg"},11151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var o=n(67294);const t={},l=o.createContext(t);function i(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);