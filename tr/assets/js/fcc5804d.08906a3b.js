"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4608],{14413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var r=i(85893),l=i(11151);const a={title:"\ud83d\udcbe Kurulum",description:"Pingpong kurulum rehberi.",image:"./img/Pingpong-Service-Cover.jpg",keywords:["Pingpong","build","DePINFi","kurulum"]},s="Pingpong Kurulum",t={id:"Testnet/pingpong/installation",title:"\ud83d\udcbe Kurulum",description:"Pingpong kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/pingpong/installation.md",sourceDirName:"Testnet/pingpong",slug:"/Testnet/pingpong/installation",permalink:"/tr/docs/Testnet/pingpong/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/pingpong/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Pingpong kurulum rehberi.",image:"./img/Pingpong-Service-Cover.jpg",keywords:["Pingpong","build","DePINFi","kurulum"]},sidebar:"tutorialSidebar",previous:{title:"Pingpong",permalink:"/tr/docs/Testnet/pingpong/"},next:{title:"\ud83d\udc64 Kullan\u0131c\u0131 Rehberi",permalink:"/tr/docs/Testnet/pingpong/user-guide"}},o={image:i(20903).Z},c=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Pingpong \u0130ndirme",id:"pingpong-i\u0307ndirme",level:2},{value:"Pingpong \xc7al\u0131\u015ft\u0131rma",id:"pingpong-\xe7al\u0131\u015ft\u0131rma",level:2},{value:"Di\u011fer G\xf6revler",id:"di\u011fer-g\xf6revler",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pingpong-kurulum",children:"Pingpong Kurulum"}),"\n",(0,r.jsx)(n.p,{children:"Burada Ubuntu kurulumu anlat\u0131lm\u0131\u015ft\u0131r."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Kurulum yapaca\u011f\u0131n\u0131z sunucu 22.04 olmal\u0131d\u0131r."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Ba\u015flamadan \xf6nce yap\u0131lacaklar:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://harvester.pingpong.build/",children:"Harvester"})," sayfas\u0131na google hesab\u0131n\u0131zla ba\u011flan\u0131p bir hesap olu\u015fturun."]}),"\n",(0,r.jsxs)(n.li,{children:["A\u015fa\u011f\u0131daki resimde g\xf6rd\xfc\u011f\xfcn\xfcz ",(0,r.jsx)(n.code,{children:"Add Devices"})," butonuna t\u0131klay\u0131n.\n",(0,r.jsx)(n.img,{alt:"Pingpong-1",src:i(50567).Z+"",width:"3456",height:"1762"})]}),"\n",(0,r.jsxs)(n.li,{children:["A\xe7\u0131lan pencerede a\u015fa\u011f\u0131daki resimge g\xf6rd\xfc\u011f\xfcn\xfcz gibi ",(0,r.jsx)(n.code,{children:"cihaz ad\u0131n\u0131z\u0131"})," yaz\u0131p ",(0,r.jsx)(n.code,{children:"ID"}),"'nizi al\u0131n. ",(0,r.jsx)(n.code,{children:"Bu ID son a\u015famada laz\u0131m olacak."}),"\n",(0,r.jsx)(n.img,{alt:"Pingpong-2",src:i(13848).Z+"",width:"3452",height:"1756"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Linux"})," se\xe7in ve ard\u0131ndan sonra ",(0,r.jsx)(n.code,{children:"Let's Gooo!"})," butonuna t\u0131klay\u0131n."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,r.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'apt install wget screen -y < "/dev/null"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,r.jsx)(n.h2,{id:"pingpong-i\u0307ndirme",children:"Pingpong \u0130ndirme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget https://pingpong-build.s3.ap-southeast-1.amazonaws.com/linux/latest/PINGPONG\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Alternatif:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wget https://anatolianteam.com/PINGPONG\n"})}),"\n",(0,r.jsx)(n.h2,{id:"pingpong-\xe7al\u0131\u015ft\u0131rma",children:"Pingpong \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,r.jsx)(n.p,{children:"Bir screen a\xe7\u0131n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"screen -S ping\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ID"})," yazan yere panelde size verilen DI'ui yaz\u0131n\u0131z."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"chmod +x ./PINGPONG && ./PINGPONG --key ID\n"})}),"\n",(0,r.jsx)(n.h2,{id:"di\u011fer-g\xf6revler",children:"Di\u011fer G\xf6revler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://app.pingpong.build/points?invite_code=FvjWneYQ",children:"Uygulama"})," sayfas\u0131na gidip c\xfczdan ve twitter ba\u011flayarak g\xf6revleri yapabilirsiniz."]}),"\n",(0,r.jsx)(n.p,{children:"Ek olarak panelde c\xfczdan ile Hole\u0161ky a\u011f\u0131nda tokenlerinizi talep edip g\xf6revleri yaparak puan toplayabilirsiniz."})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},20903:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/Pingpong-Service-Cover-b8a66798d074e6e515d731f125e74764.jpg"},50567:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/pingpong-1-fb773e8397db10e11d4dcefe120772bb.png"},13848:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/pingpong-2-491a8e6e10ff4218673f80a55878e448.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>s});var r=i(67294);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);