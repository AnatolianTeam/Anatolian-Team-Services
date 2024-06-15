"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5686],{4656:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>t,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var l=a(5893),r=a(1151);const o={title:"\ud83d\udcbe Kurulum",description:"RPC Node kurulum rehberi.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},i="Kurulum",s={id:"Mainnet/zksync/installation",title:"\ud83d\udcbe Kurulum",description:"RPC Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/zksync/installation.md",sourceDirName:"Mainnet/zksync",slug:"/Mainnet/zksync/installation",permalink:"/tr/docs/Mainnet/zksync/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/zksync/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"RPC Node kurulum rehberi.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},sidebar:"tutorialSidebar",previous:{title:"zksync",permalink:"/tr/docs/Mainnet/zksync/"},next:{title:"\ud83d\udcf6 RPC Ekleme",permalink:"/tr/docs/Mainnet/zksync/rpc-add"}},c={image:a(1163).Z},d=[{value:"Sunucu Kiralama",id:"sunucu-kiralama",level:2},{value:"Updating the System",id:"updating-the-system",level:2},{value:"G\xfct Kurulmas\u0131",id:"g\xfct-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Docker Version Kontrol\xfc",id:"docker-version-kontrol\xfc",level:3},{value:"Docker Compose Kurulumu",id:"docker-compose-kurulumu",level:2},{value:"Docker Compose \xc7al\u0131\u015ft\u0131rma \u0130zni",id:"docker-compose-\xe7al\u0131\u015ft\u0131rma-i\u0307zni",level:3},{value:"Docker Compose Version Kontrol\xfc",id:"docker-compose-version-kontrol\xfc",level:3},{value:"zksync Reposunun Klonlanmas\u0131",id:"zksync-reposunun-klonlanmas\u0131",level:2},{value:"Node&#39;u Ba\u015flatma",id:"nodeu-ba\u015flatma",level:2},{value:"Docker Konteyn\u0131rlar\u0131n\u0131 Kontrol Etme",id:"docker-konteyn\u0131rlar\u0131n\u0131-kontrol-etme",level:3},{value:"Loglara Bakma",id:"loglara-bakma",level:3},{value:"RPC URL Alma",id:"rpc-url-alma",level:2},{value:"\u0130\u015flem Sonu",id:"i\u0307\u015flem-sonu",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Rehber yap\u0131m a\u015famas\u0131ndad\u0131r. Bitti\u011finde bu uyar\u0131 burada olmayacakt\u0131r."})}),"\n",(0,l.jsx)(n.h2,{id:"sunucu-kiralama",children:"Sunucu Kiralama"}),"\n",(0,l.jsxs)(n.p,{children:["Bunun i\xe7in ",(0,l.jsx)(n.a,{href:"https://hetzner.cloud/?ref=z9uy37L7ovja",children:"Hetzner"}),"'den saatlik olarak kullanabilece\u011finiz AX52 VDS 1TB'l\u0131k sunucuyu temin etmeniz faydal\u0131 olacakt\u0131r. payla\u015f\u0131ml\u0131 (VPS) sunucularda s\u0131k\u0131nt\u0131 ya\u015famamak ad\u0131na bu elzem. Suncucuya Ubuntu 22.04 kurlumunu sa\u011flad\u0131ktan sonra ala\u011f\u0131daki ad\u0131mlara ge\u015febilirsini.z"]}),"\n",(0,l.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,l.jsx)(n.h2,{id:"g\xfct-kurulmas\u0131",children:"G\xfct Kurulmas\u0131"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt install git\n"})}),"\n",(0,l.jsx)(n.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt install docker.io\n"})}),"\n",(0,l.jsx)(n.h3,{id:"docker-version-kontrol\xfc",children:"Docker Version Kontrol\xfc"}),"\n",(0,l.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kod ile kurulumu kontrol edin."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker --version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"docker-compose-kurulumu",children:"Docker Compose Kurulumu"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n'})}),"\n",(0,l.jsx)(n.h3,{id:"docker-compose-\xe7al\u0131\u015ft\u0131rma-i\u0307zni",children:"Docker Compose \xc7al\u0131\u015ft\u0131rma \u0130zni"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,l.jsx)(n.h3,{id:"docker-compose-version-kontrol\xfc",children:"Docker Compose Version Kontrol\xfc"}),"\n",(0,l.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kod ile kurulumu kontrol edin."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker-compose --version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"zksync-reposunun-klonlanmas\u0131",children:"zksync Reposunun Klonlanmas\u0131"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/matter-labs/zksync-era.git\n"})}),"\n",(0,l.jsx)(n.h2,{id:"nodeu-ba\u015flatma",children:"Node'u Ba\u015flatma"}),"\n",(0,l.jsx)(n.p,{children:"\xd6ncelikle ilgili dizine gidelim."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples\n"})}),"\n",(0,l.jsx)(n.p,{children:"Ard\u0131ndan node'u ba\u015flatal\u0131m."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker-compose -f mainnet-external-node-docker-compose.yml up -d\n"})}),"\n",(0,l.jsx)(n.h3,{id:"docker-konteyn\u0131rlar\u0131n\u0131-kontrol-etme",children:"Docker Konteyn\u0131rlar\u0131n\u0131 Kontrol Etme"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker ps\n"})}),"\n",(0,l.jsx)(n.h3,{id:"loglara-bakma",children:"Loglara Bakma"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker logs -f --tail 100 docker-compose-examples_external-node_1\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Ard\u0131ndan CTRL C ile loglar\u0131 kapat\u0131n. Loglar\u0131 kapatman\u0131z node'u durdurmaz, arka planda \xe7al\u0131\u015fmaya devam ediyor zaten. Kapatmadan bir screen i\xe7erisinde \xe7al\u0131\u015ft\u0131racak oluran\u0131z zamanla diskinizde bu loglar yer kaplayacakt\u0131r."})}),"\n",(0,l.jsx)(n.h2,{id:"rpc-url-alma",children:"RPC URL Alma"}),"\n",(0,l.jsxs)(n.p,{children:["Node, 3000 portunu kullan\u0131yor olacak. Metamaska rpc adresinizi \u015fu \u015fekilde ekleyebilirsiniz. ",(0,l.jsx)(n.code,{children:"http://SUNUCU_IP_ADRESI:3000"})]}),"\n",(0,l.jsx)(n.h2,{id:"i\u0307\u015flem-sonu",children:"\u0130\u015flem Sonu"}),"\n",(0,l.jsx)(n.p,{children:"RPC ile i\u015fleminiz bittikten sonra Hetzner kontrol panelinizden sunucunuzu kapatabilirsiniz."}),"\n",(0,l.jsx)(n.p,{children:"\u200b"})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},1163:(e,n,a)=>{a.d(n,{Z:()=>l});const l=a.p+"assets/images/zksync-Service-Cover-7e221f0e5b8312598a3fd5c0d7ef34e9.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>i});var l=a(7294);const r={},o=l.createContext(r);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);