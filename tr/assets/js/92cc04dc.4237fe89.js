"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[7146],{82536:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var r=a(85893),i=a(11151);const l={title:"\ud83d\uddf3\ufe0f Oy Kullanma",description:"Penumbra Oy Kullanma Rehberi.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","stake","swap","kullan\u0131c\u0131 rehberi","rehber"]},s="Delegatorler i\xe7in Penumbra Oy Kullanma Rehberi",t={id:"Mainnet/penumbra/proposal",title:"\ud83d\uddf3\ufe0f Oy Kullanma",description:"Penumbra Oy Kullanma Rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/penumbra/proposal.md",sourceDirName:"Mainnet/penumbra",slug:"/Mainnet/penumbra/proposal",permalink:"/tr/docs/Mainnet/penumbra/proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/penumbra/proposal.md",tags:[],version:"current",frontMatter:{title:"\ud83d\uddf3\ufe0f Oy Kullanma",description:"Penumbra Oy Kullanma Rehberi.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","stake","swap","kullan\u0131c\u0131 rehberi","rehber"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe Kurulum",permalink:"/tr/docs/Mainnet/penumbra/installation"},next:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Mainnet/penumbra/update"}},c={image:a(4005).Z},o=[{value:"Penumbra pcli Kurulumu",id:"penumbra-pcli-kurulumu",level:2},{value:"C\xfczdan\u0131 \u0130\xe7e Aktarma",id:"c\xfczdan\u0131-i\u0307\xe7e-aktarma",level:2},{value:"C\xfczdan Adresinizi Teyit Etme",id:"c\xfczdan-adresinizi-teyit-etme",level:3},{value:"Bakiyenizi Kontrol Etme",id:"bakiyenizi-kontrol-etme",level:3},{value:"\xd6neriyi Okuma",id:"\xf6neriyi-okuma",level:2},{value:"Oy Kullanma",id:"oy-kullanma",level:2},{value:"\ud83c\udf89 Tebrikler",id:"-tebrikler",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"delegatorler-i\xe7in-penumbra-oy-kullanma-rehberi",children:"Delegatorler i\xe7in Penumbra Oy Kullanma Rehberi"}),"\n",(0,r.jsx)(n.p,{children:"Burada delegatorlerin oylar\u0131n\u0131 kullanmas\u0131 i\xe7in basit bir rehber haz\u0131rlanm\u0131\u015ft\u0131r."}),"\n",(0,r.jsx)(n.h2,{id:"penumbra-pcli-kurulumu",children:"Penumbra pcli Kurulumu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.1/pcli-installer.sh | sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source $HOME/.cargo/env\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli --version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Versiyon \xe7\u0131kt\u0131s\u0131 ",(0,r.jsx)(n.code,{children:"pcli v0.79.1"})," olacak."]}),"\n",(0,r.jsx)(n.h2,{id:"c\xfczdan\u0131-i\u0307\xe7e-aktarma",children:"C\xfczdan\u0131 \u0130\xe7e Aktarma"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodu girdikten sonra c\xfczdan kelimelerinizi yaz\u0131n (yazd\u0131\u011f\u0131n\u0131zda kelimeleriniz g\xf6remezsiniz, arka planda yaz\u0131lm\u0131\u015f olacak) ve enter tu\u015funa bas\u0131n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli init --grpc-url https://grpc-penumbra.anatolianteam.com soft-kms import-phrase \n"})}),"\n",(0,r.jsx)(n.h3,{id:"c\xfczdan-adresinizi-teyit-etme",children:"C\xfczdan Adresinizi Teyit Etme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli view address 0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"bakiyenizi-kontrol-etme",children:"Bakiyenizi Kontrol Etme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli view balance\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\xf6neriyi-okuma",children:"\xd6neriyi Okuma"}),"\n",(0,r.jsx)(n.p,{children:"Oylamaya sunulan \xf6neri hakk\u0131nda bilgi edinmek isterseniz a\u015fa\u011f\u0131daki kodu giriniz."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli query governance proposal 0 definition\n"})}),"\n",(0,r.jsx)(n.h2,{id:"oy-kullanma",children:"Oy Kullanma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli tx vote yes --on 0\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli tx vote no --on 0\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pcli tx vote abstain --on 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"-tebrikler",children:"\ud83c\udf89 Tebrikler"}),"\n",(0,r.jsx)(n.p,{children:"Penumbra Faz 0'dan Faz 1'e ge\xe7i\u015f i\xe7in oy verdiniz."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4005:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/Penumbra-Service-Cover-39dcac8b23dfbc657b308935f2897121.jpg"},11151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>s});var r=a(67294);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);