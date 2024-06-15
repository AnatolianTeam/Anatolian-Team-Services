"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3509],{3943:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>t,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=l(5893),r=l(1151);const o={title:"\ud83d\udcbe Kurulum",description:"RPC Node kurulum rehberi.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},s="Kurulum",d={id:"RPC Node/zksync/installation",title:"\ud83d\udcbe Kurulum",description:"RPC Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/RPC Node/zksync/installation.md",sourceDirName:"RPC Node/zksync",slug:"/RPC Node/zksync/installation",permalink:"/tr/docs/RPC Node/zksync/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/RPC Node/zksync/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"RPC Node kurulum rehberi.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},sidebar:"tutorialSidebar",previous:{title:"zksync",permalink:"/tr/docs/RPC Node/zksync/"},next:{title:"\ud83d\udcf6 RPC Ekleme",permalink:"/tr/docs/RPC Node/zksync/rpc-add"}},i={image:l(36).Z},c=[{value:"Sunucu Kiralama",id:"sunucu-kiralama",level:2},{value:"Updating the System",id:"updating-the-system",level:2},{value:"G\xfct Kurulmas\u0131",id:"g\xfct-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Docker Version Kontrol\xfc",id:"docker-version-kontrol\xfc",level:3},{value:"Docker Compose Kurulumu",id:"docker-compose-kurulumu",level:2},{value:"Docker Compose \xc7al\u0131\u015ft\u0131rma \u0130zni",id:"docker-compose-\xe7al\u0131\u015ft\u0131rma-i\u0307zni",level:3},{value:"Docker Compose Version Kontrol\xfc",id:"docker-compose-version-kontrol\xfc",level:3},{value:"zksync Reposunun Klonlanmas\u0131",id:"zksync-reposunun-klonlanmas\u0131",level:2},{value:"Node&#39;u Ba\u015flatma",id:"nodeu-ba\u015flatma",level:2},{value:"Docker Konteyn\u0131rlar\u0131n\u0131 Kontrol Etme",id:"docker-konteyn\u0131rlar\u0131n\u0131-kontrol-etme",level:3},{value:"Loglara Bakma",id:"loglara-bakma",level:3},{value:"RPC URL \u0130\u015flemleri",id:"rpc-url-i\u0307\u015flemleri",level:2},{value:".yml Dosyas\u0131n\u0131 D\xfczenleme",id:"yml-dosyas\u0131n\u0131-d\xfczenleme",level:3},{value:"Node&#39;u Yeniden Ba\u015flatma",id:"nodeu-yeniden-ba\u015flatma",level:3},{value:"RPC URL Kullan\u0131m\u0131",id:"rpc-url-kullan\u0131m\u0131",level:3},{value:"\u0130\u015flem Sonu",id:"i\u0307\u015flem-sonu",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Rehber yap\u0131m a\u015famas\u0131ndad\u0131r. Bitti\u011finde bu uyar\u0131 burada olmayacakt\u0131r."})}),"\n",(0,a.jsx)(n.h2,{id:"sunucu-kiralama",children:"Sunucu Kiralama"}),"\n",(0,a.jsxs)(n.p,{children:["Bunun i\xe7in ",(0,a.jsx)(n.a,{href:"https://hetzner.cloud/?ref=z9uy37L7ovja",children:"Hetzner"}),"'den saatlik olarak kullanabilece\u011finiz AX52 VDS 1TB'l\u0131k sunucuyu temin etmeniz faydal\u0131 olacakt\u0131r. payla\u015f\u0131ml\u0131 (VPS) sunucularda s\u0131k\u0131nt\u0131 ya\u015famamak ad\u0131na bu elzem. Suncucuya Ubuntu 22.04 kurlumunu sa\u011flad\u0131ktan sonra ala\u011f\u0131daki ad\u0131mlara ge\u015febilirsini.z"]}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"g\xfct-kurulmas\u0131",children:"G\xfct Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt install git\n"})}),"\n",(0,a.jsx)(n.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt install docker.io\n"})}),"\n",(0,a.jsx)(n.h3,{id:"docker-version-kontrol\xfc",children:"Docker Version Kontrol\xfc"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kod ile kurulumu kontrol edin."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker --version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"docker-compose-kurulumu",children:"Docker Compose Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n'})}),"\n",(0,a.jsx)(n.h3,{id:"docker-compose-\xe7al\u0131\u015ft\u0131rma-i\u0307zni",children:"Docker Compose \xc7al\u0131\u015ft\u0131rma \u0130zni"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,a.jsx)(n.h3,{id:"docker-compose-version-kontrol\xfc",children:"Docker Compose Version Kontrol\xfc"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kod ile kurulumu kontrol edin."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker-compose --version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"zksync-reposunun-klonlanmas\u0131",children:"zksync Reposunun Klonlanmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/matter-labs/zksync-era.git\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nodeu-ba\u015flatma",children:"Node'u Ba\u015flatma"}),"\n",(0,a.jsx)(n.p,{children:"\xd6ncelikle ilgili dizine gidelim."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ard\u0131ndan node'u ba\u015flatal\u0131m."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker-compose -f mainnet-external-node-docker-compose.yml up -d\n"})}),"\n",(0,a.jsx)(n.h3,{id:"docker-konteyn\u0131rlar\u0131n\u0131-kontrol-etme",children:"Docker Konteyn\u0131rlar\u0131n\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker ps\n"})}),"\n",(0,a.jsx)(n.h3,{id:"loglara-bakma",children:"Loglara Bakma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker logs -f --tail 100 docker-compose-examples_external-node_1\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Ard\u0131ndan CTRL C ile loglar\u0131 kapat\u0131n. Loglar\u0131 kapatman\u0131z node'u durdurmaz, arka planda \xe7al\u0131\u015fmaya devam ediyor zaten. Kapatmadan bir screen i\xe7erisinde \xe7al\u0131\u015ft\u0131racak oluran\u0131z zamanla diskinizde bu loglar yer kaplayacakt\u0131r."})}),"\n",(0,a.jsx)(n.h2,{id:"rpc-url-i\u0307\u015flemleri",children:"RPC URL \u0130\u015flemleri"}),"\n",(0,a.jsx)(n.h3,{id:"yml-dosyas\u0131n\u0131-d\xfczenleme",children:".yml Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,a.jsx)(n.p,{children:"\xd6ncelikle bu dosyay\u0131 a\xe7\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"nano $HOME/zksync-era/docs/guides/external-node/docker-compose-examples/mainnet-external-node-docker-compose.yml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Ard\u0131ndan dosyada a\u015fa\u011f\u0131daki g\xf6sterilen - ",(0,a.jsx)(n.code,{children:'"127.0.0.1:3060:3060"'})," b\xf6l\xfcm\xfc ",(0,a.jsx)(n.code,{children:'"0.0.0.0:3060:3060"'})," olarak de\u011fi\u015ftiriyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'.\n.\n.\n  external-node:\n    image: "matterlabs/external-node:2.0-v24.0.0"\n    depends_on:\n      postgres:\n        condition: service_healthy\n    ports:\n      - "127.0.0.1:3060:3060". ## Bu b\xf6l\xfcm\xfc \u015fu \u015fekilde de\u011fi\u015ftiriyoruz: `"0.0.0.0:3060:3060"`\n      - "127.0.0.1:3061:3061"\n      - "127.0.0.1:3081:3081"\n    volumes:\n      - mainnet-rocksdb:/db\n    expose:\n      - 3322\n.\n.\n.\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Ard\u0131ndan ",(0,a.jsx)(n.code,{children:"CTRL X, Y ve ard\u0131ndan enter"})," tu\u015flay\u0131p laydediyoruz."]}),"\n",(0,a.jsx)(n.h3,{id:"nodeu-yeniden-ba\u015flatma",children:"Node'u Yeniden Ba\u015flatma"}),"\n",(0,a.jsx)(n.p,{children:"Bu i\u015flemle yukar\u0131da yapt\u0131\u011f\u0131m\u0131z de\u011fi\u015fiklkleri uygulayaca\u011f\u0131z."}),"\n",(0,a.jsx)(n.p,{children:"\xd6nce docker compose'u kapat\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples\ndocker-compose -f mainnet-external-node-docker-compose.yml down\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ard\u0131ndan yenien ba\u015flat\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker-compose -f mainnet-external-node-docker-compose.yml up -d\n"})}),"\n",(0,a.jsx)(n.h3,{id:"rpc-url-kullan\u0131m\u0131",children:"RPC URL Kullan\u0131m\u0131"}),"\n",(0,a.jsxs)(n.p,{children:["Node, 3060 portunu kullan\u0131yor olacak. C\xfczdan\u0131n\u0131za RPC adresinizi \u015fu \u015fekilde ekleyebilirsiniz. ",(0,a.jsx)(n.code,{children:"http://SUNUCU_IP_ADRESI:3060"})]}),"\n",(0,a.jsx)(n.h2,{id:"i\u0307\u015flem-sonu",children:"\u0130\u015flem Sonu"}),"\n",(0,a.jsx)(n.p,{children:"RPC ile i\u015fleminiz bittikten sonra Hetzner kontrol panelinizden sunucunuzu kapatabilirsiniz."}),"\n",(0,a.jsx)(n.p,{children:"\u200b"})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},36:(e,n,l)=>{l.d(n,{Z:()=>a});const a=l.p+"assets/images/zksync-Service-Cover-7e221f0e5b8312598a3fd5c0d7ef34e9.jpg"},1151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>s});var a=l(7294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);