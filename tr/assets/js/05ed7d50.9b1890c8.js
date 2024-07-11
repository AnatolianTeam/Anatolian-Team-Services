"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[616],{87292:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var n=r(85893),l=r(11151);const s={title:"\ud83c\udf8a Seromoni",description:"RiscZero Seromoni kat\u0131l\u0131m rehberi.",image:"./img/RiscZero-Service-Cover.jpg",keywords:["RiscZero","Risc","Zero","universal","knowledge","seromoni","kurulum","rehber"],sidebar_position:1},a="Risc Zero Seromoniye Kat\u0131l\u0131m Rehberi",t={id:"Testnet/risczero/ceromony",title:"\ud83c\udf8a Seromoni",description:"RiscZero Seromoni kat\u0131l\u0131m rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/risczero/ceromony.md",sourceDirName:"Testnet/risczero",slug:"/Testnet/risczero/ceromony",permalink:"/tr/docs/Testnet/risczero/ceromony",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/risczero/ceromony.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83c\udf8a Seromoni",description:"RiscZero Seromoni kat\u0131l\u0131m rehberi.",image:"./img/RiscZero-Service-Cover.jpg",keywords:["RiscZero","Risc","Zero","universal","knowledge","seromoni","kurulum","rehber"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"RiscZero Rehberi",permalink:"/tr/docs/Testnet/risczero/"},next:{title:"Redbelly Network",permalink:"/tr/docs/Testnet/redbelly/"}},o={image:r(16385).Z},c=[{value:"Gereklilikler",id:"gereklilikler",level:2},{value:"NVM Kurulumu",id:"nvm-kurulumu",level:2},{value:"Sitemi G\xfcncelleme",id:"sitemi-g\xfcncelleme",level:2},{value:"phase2cli Kurulumu",id:"phase2cli-kurulumu",level:2},{value:"GitHub ile Kimlik Do\u011frulama",id:"github-ile-kimlik-do\u011frulama",level:2},{value:"Kat\u0131l\u0131m",id:"kat\u0131l\u0131m",level:2},{value:"Kat\u0131l\u0131m Sonras\u0131",id:"kat\u0131l\u0131m-sonras\u0131",level:2},{value:"Verileri Temizleme",id:"verileri-temizleme",level:3},{value:"Oturumu Kapatma",id:"oturumu-kapatma",level:3}];function u(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"risc-zero-seromoniye-kat\u0131l\u0131m-rehberi",children:"Risc Zero Seromoniye Kat\u0131l\u0131m Rehberi"}),"\n",(0,n.jsx)(i.h2,{id:"gereklilikler",children:"Gereklilikler"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"G\xfc\xe7l\xfc bir internet ba\u011flant\u0131s\u0131. Bant genili\u011finizin en az 25 mbps olmas\u0131."}),"\n",(0,n.jsx)(i.li,{children:"GitHu hesab\u0131n\u0131z en az 1 ayl\u0131k ve en az 1 takip\xe7inizin olmas\u0131 ve en az 5 ki\u015fiyi akip ediyor olmas\u0131 gerekiyor."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"nvm-kurulumu",children:"NVM Kurulumu"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash\nsource ~/.bashrc\nnvm install 16.20 && nvm use 16.20\n"})}),"\n",(0,n.jsx)(i.h2,{id:"sitemi-g\xfcncelleme",children:"Sitemi G\xfcncelleme"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"mkdir ~/p0tion-tmp\ncd ~/p0tion-tmp\n"})}),"\n",(0,n.jsx)(i.h2,{id:"phase2cli-kurulumu",children:"phase2cli Kurulumu"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"npm i @p0tion/phase2cli\n"})}),"\n",(0,n.jsx)(i.h2,{id:"github-ile-kimlik-do\u011frulama",children:"GitHub ile Kimlik Do\u011frulama"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"npx phase2cli auth\n"})}),"\n",(0,n.jsx)(i.h2,{id:"kat\u0131l\u0131m",children:"Kat\u0131l\u0131m"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"npx phase2cli contribute\n"})}),"\n",(0,n.jsx)(i.h2,{id:"kat\u0131l\u0131m-sonras\u0131",children:"Kat\u0131l\u0131m Sonras\u0131"}),"\n",(0,n.jsx)(i.p,{children:"Kat\u0131l\u0131m\u0131z\u0131n\u0131 tamalad\u0131ktan sonra a\u015fa\u011f\u0131daki i\u015flemleri yapabilirsiniz."}),"\n",(0,n.jsx)(i.h3,{id:"verileri-temizleme",children:"Verileri Temizleme"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"npx phase2cli clean\nnpx phase2cli logout\n"})}),"\n",(0,n.jsx)(i.h3,{id:"oturumu-kapatma",children:"Oturumu Kapatma"}),"\n",(0,n.jsx)(i.p,{children:"A\u015fa\u011f\u0131daki komutun \xe7al\u0131\u015ft\u0131rarak her zaman oturumu kapatabilirsiniz"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"phase2cli logout \n"})})]})}function m(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},16385:(e,i,r)=>{r.d(i,{Z:()=>n});const n=r.p+"assets/images/RiscZero-Service-Cover-fedfa5b674401c87a83a50d7438e6fea.jpg"},11151:(e,i,r)=>{r.d(i,{Z:()=>t,a:()=>a});var n=r(67294);const l={},s=n.createContext(l);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);