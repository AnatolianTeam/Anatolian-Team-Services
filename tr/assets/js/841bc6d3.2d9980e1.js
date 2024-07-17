"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9737],{7205:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>t});var i=a(85893),r=a(11151);const l={title:"\ud83d\udcbe Kurulum",description:"Ar.io kurulum rehberi.",image:"./img/Ar-Service-Cover.jpg",keywords:["Ar.io","Ar","permaweb","kurulum","rehber"],sidebar_position:1},d="Ar.io Kurulum Rehberi",s={id:"Testnet/Arweave Ecosystem/ar.io/installation",title:"\ud83d\udcbe Kurulum",description:"Ar.io kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/ar.io/installation.md",sourceDirName:"Testnet/Arweave Ecosystem/ar.io",slug:"/Testnet/Arweave Ecosystem/ar.io/installation",permalink:"/tr/docs/Testnet/Arweave Ecosystem/ar.io/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Arweave Ecosystem/ar.io/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Ar.io kurulum rehberi.",image:"./img/Ar-Service-Cover.jpg",keywords:["Ar.io","Ar","permaweb","kurulum","rehber"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ar.io Kurulum Rehberi",permalink:"/tr/docs/Testnet/Arweave Ecosystem/ar.io/"},next:{title:"\u25b6\ufe0f Testnete Kat\u0131l\u0131m",permalink:"/tr/docs/Testnet/Arweave Ecosystem/ar.io/join-ario"}},o={image:a(84500).Z},t=[{value:"Alan Ad\u0131 (Domain)",id:"alan-ad\u0131-domain",level:2},{value:"Alt Alan Ad\u0131 (Subdomain) Olu\u015fturma",id:"alt-alan-ad\u0131-subdomain-olu\u015fturma",level:3},{value:"C\xfczdan Olu\u015fturma ve C\xfczdana AR Token Yollama",id:"c\xfczdan-olu\u015fturma-ve-c\xfczdana-ar-token-yollama",level:2},{value:"Sistemi G\xfcncelleme ve Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"sistemi-g\xfcncelleme-ve-gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"NVM Kurulumu",id:"nvm-kurulumu",level:2},{value:"Sitemi G\xfcncelleme",id:"sitemi-g\xfcncelleme",level:2},{value:"G\xfcvenlik Duvar\u0131n\u0131 Aktif Etme ve Gerekli Portlar\u0131n A\xe7\u0131lmas\u0131 (OPS\u0130YONEL)",id:"g\xfcvenlik-duvar\u0131n\u0131-aktif-etme-ve-gerekli-portlar\u0131n-a\xe7\u0131lmas\u0131-opsi\u0307yonel",level:2},{value:"Nginx Kurulumu",id:"nginx-kurulumu",level:2},{value:"Ar.io Node Kurulmas\u0131",id:"ario-node-kurulmas\u0131",level:2},{value:"Repoyu Klonlama",id:"repoyu-klonlama",level:3},{value:".env Dosyas\u0131n\u0131 D\xfczenleme",id:"env-dosyas\u0131n\u0131-d\xfczenleme",level:3},{value:"C\xfczdan\u0131n .json Dosyas\u0131",id:"c\xfczdan\u0131n-json-dosyas\u0131",level:3},{value:"Node&#39;u \xc7al\u0131\u015ft\u0131rma",id:"nodeu-\xe7al\u0131\u015ft\u0131rma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"A\u011f Kurulumu",id:"a\u011f-kurulumu",level:2},{value:"Alan Ad\u0131n\u0131z i\xe7in SSL (HTTPS) Sertifikas\u0131 Alma",id:"alan-ad\u0131n\u0131z-i\xe7in-ssl-https-sertifikas\u0131-alma",level:3},{value:"Nginx .conf. Dosyas\u0131n\u0131 Haz\u0131rlama",id:"nginx-conf-dosyas\u0131n\u0131-haz\u0131rlama",level:3},{value:"Website Kontrol\xfc",id:"website-kontrol\xfc",level:3},{value:"Node&#39;u Yeniden Ba\u015flatma",id:"nodeu-yeniden-ba\u015flatma",level:3},{value:"Node&#39;u Kontrol Etme",id:"nodeu-kontrol-etme",level:3},{value:"Testnete Kat\u0131l\u0131m Ba\u015fvurusu",id:"testnete-kat\u0131l\u0131m-ba\u015fvurusu",level:2},{value:"Ar.io Testnetine Kat\u0131lma",id:"ario-testnetine-kat\u0131lma",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ario-kurulum-rehberi",children:"Ar.io Kurulum Rehberi"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Sunucunuzun Ubuntu 22.04 s\xfcr\xfcm\xfcne sahip oldu\u011fundan emin olun."})}),"\n",(0,i.jsx)(n.h2,{id:"alan-ad\u0131-domain",children:"Alan Ad\u0131 (Domain)"}),"\n",(0,i.jsx)(n.p,{children:"Bu i\u015flemlere ba\u015flamadan \xf6nce bir domaine sahip olman\u0131z gerekmektedir. Bir servis sa\u011flay\u0131c\u0131dan kendinize domain al\u0131n. Y\u0131ll\u0131k 1 Dolar'a domain bulabilirsiniz."}),"\n",(0,i.jsx)(n.h3,{id:"alt-alan-ad\u0131-subdomain-olu\u015fturma",children:"Alt Alan Ad\u0131 (Subdomain) Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"Servis sa\u011flay\u0131c\u0131n\u0131z\u0131n paneline birin ve geli\u015fmi\u015f DNS ayarlar\u0131 ya da IP Bazl\u0131 DNS ayarlar\u0131 b\xf6l\xfcn\xfcne girin. Burada 2 adet A kayd\u0131 olu\u015fturun."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u0130lk ",(0,i.jsx)(n.code,{children:"A"})," kayd\u0131 i\xe7in ",(0,i.jsx)(n.code,{children:"kay\u0131t ismi"})," b\xf6l\xfcm\xfcne ",(0,i.jsx)(n.code,{children:"ar"})," ya da ",(0,i.jsx)(n.code,{children:"ario"}),", ",(0,i.jsx)(n.code,{children:"de\u011fere"})," ise sunucunuzun ",(0,i.jsx)(n.code,{children:"ip adresini"})," yaz\u0131p kaydedin."]}),"\n",(0,i.jsxs)(n.li,{children:["\u0130kinci ",(0,i.jsx)(n.code,{children:"A"})," kayd\u0131nda ise ",(0,i.jsx)(n.code,{children:"kay\u0131t ismi"})," b\xf6l\xfcm\xfcne ",(0,i.jsx)(n.code,{children:"*.ar"})," ya da ",(0,i.jsx)(n.code,{children:"*.ario"}),", ",(0,i.jsx)(n.code,{children:"de\u011fere"})," yine ayn\u0131 \u015fekilde sunucunuzun ",(0,i.jsx)(n.code,{children:"ip adresini"})," yaz\u0131p kaydedin."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Zaman\u0131 geldi\u011finde burada yine i\u015flem yapaca\u011f\u0131z bu sefer ",(0,i.jsx)(n.code,{children:"TXT"})," kayd\u0131 olu\u015fturaca\u011f\u0131z."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan-olu\u015fturma-ve-c\xfczdana-ar-token-yollama",children:"C\xfczdan Olu\u015fturma ve C\xfczdana AR Token Yollama"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.arconnect.io/",children:"ArConnect"})," adresinden c\xfczdan\u0131 taray\u0131c\u0131n\u0131za kurun ve bir c\xfczdan olu\u015fturun."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"C\xfczdan thum kelimelerinizi g\xfcvenli bir yere kaydetmeyi unutmay\u0131n."})}),"\n",(0,i.jsxs)(n.p,{children:["C\xfczdan\u0131n\u0131za 5-10 Dolar de\u011ferinde ",(0,i.jsx)(n.a,{href:"https://www.coingecko.com/en/coins/arweave",children:"Ar token"})," g\xf6nderin."]}),"\n",(0,i.jsx)(n.h2,{id:"sistemi-g\xfcncelleme-ve-gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Sistemi G\xfcncelleme ve Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt update -y && apt upgrade -y && apt install -y curl openssh-server docker-compose git certbot nginx sqlite3 build-essential && systemctl enable ssh && curl -sSL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt-get update -y && apt-get install -y yarn && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && source ~/.bashrc\n'})}),"\n",(0,i.jsx)(n.p,{children:"apt install -y curl openssh-server docker-compose git certbot nginx sqlite3 build-essential"}),"\n",(0,i.jsx)(n.h2,{id:"nvm-kurulumu",children:"NVM Kurulumu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nvm install 18.8.0 && nvm use 18.8.0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"sitemi-g\xfcncelleme",children:"Sitemi G\xfcncelleme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update -y && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"g\xfcvenlik-duvar\u0131n\u0131-aktif-etme-ve-gerekli-portlar\u0131n-a\xe7\u0131lmas\u0131-opsi\u0307yonel",children:"G\xfcvenlik Duvar\u0131n\u0131 Aktif Etme ve Gerekli Portlar\u0131n A\xe7\u0131lmas\u0131 (OPS\u0130YONEL)"}),"\n",(0,i.jsx)(n.p,{children:"E\u011fer Contabo gibi bir sunucu kullan\u0131yorsan\u0131z bnlar yapman\u0131za gerek yoktur."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ufw enable\n\n# Optional: If using SSH, allow port 22\nufw allow 22\n\n# Allow ports 80 and 443 for HTTP and HTTPS\nufw allow 80\nufw allow 443\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nginx-kurulumu",children:"Nginx Kurulumu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt install nginx -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ario-node-kurulmas\u0131",children:"Ar.io Node Kurulmas\u0131"}),"\n",(0,i.jsx)(n.h3,{id:"repoyu-klonlama",children:"Repoyu Klonlama"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git clone -b main https://github.com/ar-io/ar-io-node\ncd ar-io-node\n"})}),"\n",(0,i.jsx)(n.h3,{id:"env-dosyas\u0131n\u0131-d\xfczenleme",children:".env Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,i.jsx)(n.p,{children:"Dosyay\u0131 a\xe7al\u0131m."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nano .env\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Ard\u0131ndan a\u015fa\u011f\u0131daki kodlar\u0131 kendimize g\xf6re d\xfczenleyip ",(0,i.jsx)(n.code,{children:"CTRL X"})," ve ",(0,i.jsx)(n.code,{children:"Enter"})," diyerek kaydediyoruz."]}),"\n",(0,i.jsx)(n.p,{children:"Burada iki farkl\u0131 c\xfczdan adresi kullan\u0131l\u0131yor ancak biz Observer c\xfczdan olarak da ayn\u0131 c\xfczdan\u0131 kullanaca\u011f\u0131z. Maliyetlri d\xfc\u015f\xfcrmek i\xe7in bunu yap\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"GRAPHQL_HOST=arweave.net\nGRAPHQL_PORT=443\nSTART_HEIGHT=1407900\nRUN_OBSERVER=true\nARNS_ROOT_HOST=DOMA\u0130N_ADRES\u0130N\u0130Z // \xd6rnek: ar.domain.com\nAR_IO_WALLET=C\xdcZDAN_ADRES\u0130N\u0130Z\nOBSERVER_WALLET=C\xdcZDAN_ADRES\u0130N\u0130Z\n"})}),"\n",(0,i.jsx)(n.h3,{id:"c\xfczdan\u0131n-json-dosyas\u0131",children:"C\xfczdan\u0131n .json Dosyas\u0131"}),"\n",(0,i.jsxs)(n.p,{children:["Son olarak ArConnect c\xfczdan\u0131n\u0131z\u0131 a\xe7\u0131n ard\u0131ndan c\xfczdan\u0131n\u0131z\u0131n .json dosyas\u0131n\u0131 d\u0131\u015far\u0131 aktar\u0131n. Dosya ad\u0131n\u0131 ",(0,i.jsx)(n.code,{children:"cuzdan_adresiniz.json"})," olarak d\xfczeltin, ard\u0131ndan bu dosyay\u0131 ",(0,i.jsx)(n.code,{children:"root/ar-io-node/wallets"})," dizininne SFTP arac\u0131l\u0131\u011f\u0131yla g\xf6nderin."]}),"\n",(0,i.jsxs)(n.p,{children:["Veyahut d\u0131\u015far\u0131 aktard\u0131\u011f\u0131n\u0131z .json dosyas\u0131n\u0131 a\xe7\u0131n ve i\xe7eri\u011fini a\u015fa\u011f\u0131daki koda yap\u0131\u015ft\u0131r\u0131p kodu \xe7al\u0131\u015ft\u0131r\u0131n;\nA\u015fa\u011f\u0131daki kodda ",(0,i.jsx)(n.code,{children:"cuzdan_adresiniz"})," ve ",(0,i.jsx)(n.code,{children:"kodlar"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirin."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tee $HOME/ar-io-node/wallets/cuzdan_adresiniz.json > /dev/null <<EOF\nkodlar\nEOF\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131da node'u \xe7al\u0131\u015ft\u0131rd\u0131ktan sonra bu adrese gidin https://domain_adresiniz.com/ar-io/observer/info"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Bu b\xf6l\xfcmde ",(0,i.jsx)(n.code,{children:'wallet":"INVALID"'})," yerine ",(0,i.jsx)(n.code,{children:'wallet":"C\xfczdan_Adresiniz"'})," yazmal\u0131."]}),"\n",(0,i.jsx)(n.h2,{id:"nodeu-\xe7al\u0131\u015ft\u0131rma",children:"Node'u \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker-compose logs -f --tail=0\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CTRL C"})," diyerek loglar\u0131 kapatabilirsiniz."]}),"\n",(0,i.jsx)(n.h2,{id:"a\u011f-kurulumu",children:"A\u011f Kurulumu"}),"\n",(0,i.jsx)(n.h3,{id:"alan-ad\u0131n\u0131z-i\xe7in-ssl-https-sertifikas\u0131-alma",children:"Alan Ad\u0131n\u0131z i\xe7in SSL (HTTPS) Sertifikas\u0131 Alma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodda eposta adresiniz ve domaininizi d\xfczenledikten sonra kodu \xe7al\u0131\u015ft\u0131r\u0131n\u0131z."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"certbot certonly --manual --preferred-challenges dns --email EPOSTA_ADRES\u0130N\u0130Z -d ar.domain.com -d '*.ar.domain.com'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Kodu girdikten sonra sizden kabul etmeniz i\xe7in ",(0,i.jsx)(n.code,{children:"yes"})," yazman\u0131z gereken yerleri ge\xe7iyorsunuz."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Bu k\u0131s\u0131mda dikkatli olun. Size ",(0,i.jsx)(n.code,{children:"TXT"})," kayd\u0131 i\xe7in iki kod verecek birisi ",(0,i.jsx)(n.code,{children:"kay\u0131t ad\u0131 (Record name)"})," di\u011feri ise ",(0,i.jsx)(n.code,{children:"de\u011fer (value)"})," bunlar\u0131 servis sa\u011flay\u0131c\u0131n\u0131zda ekleyeceksiniz."]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TXT"})," kayd\u0131n\u0131 yaparken \u015funa dikkat edin. E\u011fer alan ad\u0131n\u0131z ",(0,i.jsx)(n.code,{children:"ar.domain.com"})," \u015feklinde ise kay\u0131t isminiz \u015fu \u015fekilde olacak: ",(0,i.jsx)(n.code,{children:"_acme-challenge.ar"}),"\nDe\u011fer olarak ise ",(0,i.jsx)(n.code,{children:"\xe7\u0131kt\u0131da verilen kodu"})," kullanacaks\u0131n\u0131z."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Bir sonraki ad\u0131ma ge\xe7meden \xf6nce kayd\u0131n yay\u0131ld\u0131\u011f\u0131n\u0131 g\xf6rmek i\xe7in ",(0,i.jsx)(n.a,{href:"https://dnschecker.org/",children:"DNS Checker"})," adresine gidip ",(0,i.jsx)(n.code,{children:"_acme-challenge.ar.domain.com"})," \u015feklinde arama yap\u0131n. Yay\u0131lma biraz uzun s\xfcrebilir. Yay\u0131lma ba\u015flad\u0131\u011f\u0131nda ",(0,i.jsx)(n.code,{children:"Enter"})," tu\u015funa bas\u0131n."]})}),"\n",(0,i.jsx)(n.p,{children:"Son olarak size sertifika dosylar\u0131n\u0131z\u0131n dizinini g\xf6steren bir \xe7\u0131kt\u0131 alacaks\u0131n\u0131z."}),"\n",(0,i.jsx)(n.h3,{id:"nginx-conf-dosyas\u0131n\u0131-haz\u0131rlama",children:"Nginx .conf. Dosyas\u0131n\u0131 Haz\u0131rlama"}),"\n",(0,i.jsx)(n.p,{children:"Yeni bir .conf dosyas\u0131 olu\u015fturuyoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nano /etc/nginx/conf.d/ar.node.conf\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Ard\u0131ndan  a\u015fa\u011f\u0131daki kodlar\u0131 kendinize g\xf6re d\xfczenleyerek bu dosyaya kaydedip \xe7\u0131k\u0131yoruz. \xc7\u0131kmak i\xe7in ",(0,i.jsx)(n.code,{children:"CTRL X"})," ard\u0131ndan ",(0,i.jsx)(n.code,{children:"Enter"})," diyoruz."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ar.domain.com"})," yazan yerleri kendi alan ad\u0131n\u0131za g\xf6re d\xfczenleyiniz."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"server {\n    listen 443 ssl;\n    listen [::]:443 ssl;\n    server_name ar.domain.com *.ar.domain.com;\n\n    ssl_certificate /etc/letsencrypt/live/ar.domain.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/ar.domain.com/privkey.pem;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_http_version 1.1;\n    }\n\n}\nserver {\n    listen 80;\n    listen [::]:80;\n    server_name ar.domain.com *.ar.domain.com;\n\n    location / {\n        return 301 https://$host$request_uri;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ard\u0131ndan a\u015fa\u011f\u0131daki kodlar\u0131 s\u0131ras\u0131yla giriyoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"unlink /etc/nginx/sites-available/default\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nginx -t\n"})}),"\n",(0,i.jsx)(n.p,{children:"Bu kodun \xe7\u0131kt\u0131s\u0131nda bir hata g\xf6rmezseniz OK \u015feklinde bir \xe7\u0131kt\u0131 verecektir. Bu da nginx ayarlar\u0131nda bir sor\u0131un olmad\u0131\u011f\u0131n\u0131 g\xf6sterir."}),"\n",(0,i.jsx)(n.p,{children:"Son olarak nginx servisini yeniden ba\u015flat\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"service nginx restart\n"})}),"\n",(0,i.jsx)(n.h3,{id:"website-kontrol\xfc",children:"Website Kontrol\xfc"}),"\n",(0,i.jsx)(n.p,{children:"Taray\u0131c\u0131n\u0131zda domain adresinize gidin ve a\u015fa\u011f\u0131dakine benzer bir \xe7\u0131kt\u0131 al\u0131rsan\u0131z her \u015fey yolunda demektir."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'{"network":"arweave.N.1","version":5,"release":68,"height":1385242,"current":"2tbqNmxc88z9Pzhlx5kKlwUOpk4hne23iMmLnFATDcQ2c-o7gtVKWJSg5twg6iMu","blocks":1385243,"peers":94,"queue_length":0,"node_state_latency":1}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"nodeu-yeniden-ba\u015flatma",children:"Node'u Yeniden Ba\u015flatma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker-compose down\ndocker-compose up -d\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nodeu-kontrol-etme",children:"Node'u Kontrol Etme"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki adreste domaininizi yaz\u0131p kontrol edin."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://ar.domain.com/3lyxgbgEvqNSvJrTX2J7CfRychUD5KClFhhVLyTPNCQ"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"testnete-kat\u0131l\u0131m-ba\u015fvurusu",children:"Testnete Kat\u0131l\u0131m Ba\u015fvurusu"}),"\n",(0,i.jsxs)(n.p,{children:["ar.io Testnet'e kat\u0131lmak i\xe7in en az 10.000 Test IO tokeni stake etmek gerekiyor. Test IO tokeni almak i\xe7in ",(0,i.jsx)(n.a,{href:"https://discord.gg/ApxXjvwECK",children:"ar.io Discord"})," suncusunda ",(0,i.jsx)(n.code,{children:"#testnet"})," kanal\u0131nda ",(0,i.jsx)(n.code,{children:"/apply"})," yaz\u0131p ",(0,i.jsx)(n.code,{children:"Application to join the ar.io Testnet!"})," se\xe7iyoruz ve bir bot bize mesaj at\u0131yor. Oradaki sorular\u0131 cevapl\u0131yoruz. Ard\u0131ndan testnet tokenlerinin gelmesini bekliyoruz..."]}),"\n",(0,i.jsx)(n.p,{children:"Sorularda sizden baz\u0131 adresler isteyecek, A\u015fa\u011f\u0131daki \xf6rnek adreslerde domainizi d\xfczelterek hem kontrol sa\u011flay\u0131n hem de sorulara cevap olarak g\xf6nderin.:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://ar.domain.com/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://gateways.ar.domain.com/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://ar.domain.com/ar-io/info"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://ar.domain.com/ar-io/healthcheck"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://ar.domain.com/ar-io/observer/reports/current"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"https://ardrive.ar.domain.com/"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"What project, team, or community are you with? (optional)"}),", bu soruya Anatolian Team yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"How did you find out about ar.io and the testnet?"})," bu soruya da Anatolian Team yazabilirsiniz."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tak\u0131ld\u0131\u011f\u0131n\u0131z yerler olursa telegram sohbet kanal\u0131m\u0131zdan bize ula\u015fabilirsiniz."}),"\n",(0,i.jsx)(n.h2,{id:"ario-testnetine-kat\u0131lma",children:"Ar.io Testnetine Kat\u0131lma"}),"\n",(0,i.jsx)(n.p,{children:"Bu ad\u0131m\u0131 di\u011fer sayfada bulacaksan\u0131z. S\u0131radaki sayfaya ge\xe7iniz..."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},84500:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/Ar-Service-Cover-016196db563584d25dcabf0e96b9b48f.jpg"},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>d});var i=a(67294);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);