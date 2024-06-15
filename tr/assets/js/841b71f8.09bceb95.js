"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1822],{6678:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=l(5893),r=l(1151);const s={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Redbelly-Service-Cover.jpg",keywords:["redbelly","network","kurulum","snapshot","statesync","g\xfcncelleme"]},a="Kurulum",d={id:"Testnet/redbelly/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/redbelly/installation.md",sourceDirName:"Testnet/redbelly",slug:"/Testnet/redbelly/installation",permalink:"/tr/docs/Testnet/redbelly/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/redbelly/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Redbelly-Service-Cover.jpg",keywords:["redbelly","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Redbelly Network",permalink:"/tr/docs/Testnet/redbelly/"},next:{title:"\u2934\ufe0f Yard\u0131mc\u0131 Programlar",permalink:"/tr/docs/Testnet/redbelly/nodeutilities"}},t={image:l(8643).Z},o=[{value:"\u0130lk Yap\u0131lacaklar",id:"i\u0307lk-yap\u0131lacaklar",level:2},{value:"Domain ve DNS Ayarlar\u0131",id:"domain-ve-dns-ayarlar\u0131",level:3},{value:"EVM C\xfczdanlar\u0131n Olu\u015fturulmas\u0131",id:"evm-c\xfczdanlar\u0131n-olu\u015fturulmas\u0131",level:3},{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"SSL Sertifika \u0130\u015flemleri",id:"ssl-sertifika-i\u0307\u015flemleri",level:2},{value:"Certbot Kurulmas\u0131",id:"certbot-kurulmas\u0131",level:3},{value:"Let&#39;s Encrypt SSL Olu\u015fturma",id:"lets-encrypt-ssl-olu\u015fturma",level:3},{value:"Node Kay\u0131t Etme",id:"node-kay\u0131t-etme",level:2},{value:"Redbelly Kurulmas\u0131",id:"redbelly-kurulmas\u0131",level:2},{value:"Binary Dosyas\u0131nu \u0130ndirme",id:"binary-dosyas\u0131nu-i\u0307ndirme",level:3},{value:"config.yaml Dosyas\u0131n\u0131 \u0130ndirme",id:"configyaml-dosyas\u0131n\u0131-i\u0307ndirme",level:3},{value:"Genesis Dosyas\u0131n \u0130ndirme",id:"genesis-dosyas\u0131n-i\u0307ndirme",level:3},{value:"observe.sh Dosyas\u0131 Olu\u015fturma",id:"observesh-dosyas\u0131-olu\u015fturma",level:3},{value:"start-rbn.sh Dosyas\u0131 Olu\u015fturma",id:"start-rbnsh-dosyas\u0131-olu\u015fturma",level:3},{value:"Node&#39;u Ba\u015flatma",id:"nodeu-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:3},{value:"Node&#39;un \xc7al\u0131\u015ft\u0131\u011f\u0131n\u0131 Do\u011frulama",id:"nodeun-\xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131-do\u011frulama",level:2},{value:"Redbelly A\u011f\u0131n\u0131 C\xfczdana Ekle",id:"redbelly-a\u011f\u0131n\u0131-c\xfczdana-ekle",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,i.jsxs)(n.p,{children:["Testnete kat\u0131l\u0131m \u015fu an kapal\u0131 (",(0,i.jsx)(n.a,{href:"https://vine.redbelly.network/nds-node-running#apply",children:"Ba\u011flant\u0131"}),"). E\u011fer ekipten kat\u0131l\u0131m\u0131n\u0131za ili\u015fki bir e-posta ald\u0131ysan\u0131z ve size bir node id verildiyse kat\u0131labilirsiniz."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Kullan\u0131lan Portlar:"})," ",(0,i.jsx)(n.code,{children:"8545"}),", ",(0,i.jsx)(n.code,{children:"8546"}),", ",(0,i.jsx)(n.code,{children:"1111"}),", and ",(0,i.jsx)(n.code,{children:"1888"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"i\u0307lk-yap\u0131lacaklar",children:"\u0130lk Yap\u0131lacaklar"}),"\n",(0,i.jsx)(n.h3,{id:"domain-ve-dns-ayarlar\u0131",children:"Domain ve DNS Ayarlar\u0131"}),"\n",(0,i.jsxs)(n.p,{children:["Bir domain sat\u0131n al\u0131n. Ard\u0131ndan panelinizden ald\u0131\u011f\u0131n\u0131z domainin ayarlar\u0131ndan ",(0,i.jsx)(n.code,{children:"DNS y\xf6netimine"})," girin. Bir ",(0,i.jsx)(n.code,{children:"A kayd\u0131"})," olu\u015fturun. ",(0,i.jsx)(n.code,{children:"Kay\u0131t"})," ya da ",(0,i.jsx)(n.code,{children:"domain ad\u0131"})," b\xf6l\xfcm\xfcne bir alt alan ad\u0131 yaz\u0131n. ",(0,i.jsx)(n.code,{children:"IP b\xf6l\xfcm\xfcne"})," ise sunucunuzun ",(0,i.jsx)(n.code,{children:"IP"})," adresini yaz\u0131n."]}),"\n",(0,i.jsxs)(n.p,{children:["Bu ayarlar sonras\u0131nda ",(0,i.jsx)(n.code,{children:"subdomain.domain.xyz"})," gibi bir adrese sahip olacaks\u0131n\u0131z."]}),"\n",(0,i.jsxs)(n.p,{children:["DNS ayarlar\u0131n\u0131z\u0131n yay\u0131lmas\u0131n\u0131 ",(0,i.jsx)(n.a,{href:"https://dnschecker.org/",children:"buradan"})," kontrol edebilirsiniz. Sitede subdomain.domain.xyz \u015feklinde arama yaparak yay\u0131lma durumunu kontrol edebilirsiniz."]}),"\n",(0,i.jsx)(n.h3,{id:"evm-c\xfczdanlar\u0131n-olu\u015fturulmas\u0131",children:"EVM C\xfczdanlar\u0131n Olu\u015fturulmas\u0131"}),"\n",(0,i.jsx)(n.p,{children:"\u0130ki c\xfczdan olu\u015fturun:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Public C\xfczdan: \xd6d\xfcllerin gelece\u011fi c\xfczdan adresi."}),"\n",(0,i.jsx)(n.li,{children:"Signer C\xfczdan: \u0130mzalama i\u015flemlerini yapacak c\xfczdan."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install screen snapd net-tools cron curl unzip -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ssl-sertifika-i\u0307\u015flemleri",children:"SSL Sertifika \u0130\u015flemleri"}),"\n",(0,i.jsx)(n.p,{children:"Bu ad\u0131mda haz\u0131rlad\u0131\u011f\u0131m\u0131z domain i\xe7in SSL sertifika almak i\xe7in gereken i\u015flemleri yap\u0131yoruz."}),"\n",(0,i.jsx)(n.h3,{id:"certbot-kurulmas\u0131",children:"Certbot Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt install python3-certbot-nginx\n"})}),"\n",(0,i.jsx)(n.h3,{id:"lets-encrypt-ssl-olu\u015fturma",children:"Let's Encrypt SSL Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodu e-posta ve domain d\xfczenlemesi yaparak \xe7al\u0131\u015ft\u0131r\u0131n."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DOMAIN"}),": your domain address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EMAIL"}),": your e-mail address"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"DOMAIN=subdomain.domain.xyz\nEMAIL=yourmail@mail.com\ncertbot certonly --standalone -d $DOMAIN. --non-interactive --agree-tos -m $EMAIL\n"})}),"\n",(0,i.jsx)(n.h2,{id:"node-kay\u0131t-etme",children:"Node Kay\u0131t Etme"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Kay\u0131tlar \u015fuan kapal\u0131."})}),"\n",(0,i.jsxs)(n.p,{children:["Redbelly ",(0,i.jsx)(n.a,{href:"https://vine.redbelly.network/nds-node-register",children:"kay\u0131t sayfas\u0131na"})," giderek gerekli bilgileri doldurun. Ard\u0131ndan node id g\xf6nderimesini bekleyin"]}),"\n",(0,i.jsx)(n.h2,{id:"redbelly-kurulmas\u0131",children:"Redbelly Kurulmas\u0131"}),"\n",(0,i.jsx)(n.h3,{id:"binary-dosyas\u0131nu-i\u0307ndirme",children:"Binary Dosyas\u0131nu \u0130ndirme"}),"\n",(0,i.jsx)(n.p,{children:"Redbelly Binary dosyas\u0131n\u0131 inidirip ilgili dizine ta\u015f\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME\nmkdir -p Redbelly\ncurl -s https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/redbelly/files/RedbellyBinary > rbbc\nmv rbbc $HOME/Redbelly/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configyaml-dosyas\u0131n\u0131-i\u0307ndirme",children:"config.yaml Dosyas\u0131n\u0131 \u0130ndirme"}),"\n",(0,i.jsx)(n.p,{children:"Config dosyas\u0131n\u0131 inidirip ilgili dizine ta\u015f\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ncurl -s https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/redbelly/files/config_template.yaml > config.yaml\nmv config.yaml $HOME/Redbelly/\nnano $HOME/Redbelly/config.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"config.yaml dosyas\u0131nda a\u015fa\u011f\u0131daki b\xf6l\xfcmleri d\xfczenleyin;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ip"})," domain adresiniz"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," node id numaran\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"privateKeyHex"})," signin c\xfczdan\u0131n\u0131za ait private key"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ip: subdomain.domain.xyz // kendi adresinizle de\u011fi\u015ftirin\nid: XX // kendi node id numaran\u0131zla de\u011fi\u015ftirin\n.\n.\n.\n.\nprivateKeyHex: 0x....................... // sginer c\xfczdan\u0131n\u0131z\u0131n private keyini yaz\u0131n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ard\u0131ndan dosyay\u0131 kaydedin (CTRL X, Y, Enter)"}),"\n",(0,i.jsx)(n.h3,{id:"genesis-dosyas\u0131n-i\u0307ndirme",children:"Genesis Dosyas\u0131n \u0130ndirme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ncurl -s https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/redbelly/files/genesis.json\nmv genesis.json $HOME/Redbelly/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"observesh-dosyas\u0131-olu\u015fturma",children:"observe.sh Dosyas\u0131 Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlar\u0131 s\u0131ras\u0131yla giriniz;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"SSL_DOMAIN=subdomain.domain.xyz // kendinizinki ile de\u011fi\u015ftirin\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'tee $HOME/Redbelly/observe.sh > /dev/null << EOF\n#!/bin/sh\n# filename: observe.sh\nif [ ! -d rbn ]; then\n  echo "rbn doesnt exist. Initialising redbelly"\n  mkdir -p rbn\n  mkdir -p consensus\n  cp config.yaml ./consensus\n\n  ./binaries/rbbc init --datadir=rbn --standalone\n  rm -rf ./rbn/database/chaindata\n  rm -rf ./rbn/database/nodes\n \xa0mkdir -p ./rbn/genesis\n  cp genesis.json ./rbn/genesis\nelse\n  echo "rbn already exists. continuing with existing setup"\n  cp config.yaml ./consensus\nfi\n\n\n# Run EVM\nrm -f log\n./binaries/rbbc run --datadir=rbn --consensus.dir=consensus --tls --consensus.tls --tls.cert=/etc/letsencrypt/live/$SSL_DOMAIN/cert.pem --tls.key=/etc/letsencrypt/live/$SSL_DOMAIN/privkey.pem --http --http.addr=0.0.0.0 --http.corsdomain=* --http.vhosts=* --http.port=8545 --http.api eth,net,web3,rbn --ws --ws.addr=0.0.0.0 --ws.port=8546 --ws.origins="*" --ws.api eth,net,web3,rbn --threshold=200 --timeout=500 --logging.level info --mode production --consensus.type dbft --config.file config.yaml --bootstrap.tries=10 --bootstrap.wait=10 --recovery.tries=10 --recovery.wait=10\nEOF\n'})}),"\n",(0,i.jsx)(n.h3,{id:"start-rbnsh-dosyas\u0131-olu\u015fturma",children:"start-rbn.sh Dosyas\u0131 Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlar\u0131 s\u0131ras\u0131yla giriniz;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tee $HOME/Redbelly/start-rbn.sh > /dev/null << EOF\n#!/bin/sh\n# filename: start-rbn.sh\nmkdir -p binaries\nmkdir -p consensus\nchmod +x rbbc\ncp rbbc binaries/rbbc\nmkdir -p logs\nnohup ./observe.sh > ./logs/rbbcLogs 2>&1 &\nEOF\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME/Redbelly\nchmod +x *.sh\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nodeu-ba\u015flatma",children:"Node'u Ba\u015flatma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd $HOME/Redbelly\n./start-rbn.sh\n"})}),"\n",(0,i.jsx)(n.h3,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tail -f $HOME/Redbelly/logs/rbbcLogs\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nodeun-\xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131-do\u011frulama",children:"Node'un \xc7al\u0131\u015ft\u0131\u011f\u0131n\u0131 Do\u011frulama"}),"\n",(0,i.jsx)(n.h3,{id:"redbelly-a\u011f\u0131n\u0131-c\xfczdana-ekle",children:"Redbelly A\u011f\u0131n\u0131 C\xfczdana Ekle"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Alan"}),(0,i.jsx)(n.th,{children:"Detaylar"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Network name"})}),(0,i.jsx)(n.td,{children:"Redbelly Network"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"New RPC URL"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://subdomain.domain.xyz:8545",children:"https://subdomain.domain.xyz:8545"})," // Domainiz ile de\u011fi\u015ftirin"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Chain ID"})}),(0,i.jsx)(n.td,{children:"152"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Currency symbol:"})}),(0,i.jsx)(n.td,{children:"RBNT"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Block explorer URL"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://explorer.devnet.redbelly.network/",children:"https://explorer.devnet.redbelly.network/"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Ard\u0131ndan c\xfczdan\u0131n\u0131z\u0131 kontrol edin."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8643:(e,n,l)=>{l.d(n,{Z:()=>i});const i=l.p+"assets/images/Redbelly-Service-Cover-ef3831c3a6ae5f5064fe8e771678156b.jpg"},1151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>a});var i=l(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);