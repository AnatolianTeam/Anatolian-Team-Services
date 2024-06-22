"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[2871],{57217:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var d=a(85893),r=a(11151);const i={title:"\ud83d\udcbe Kurulum",description:"Node installation guide.",image:"./img/Q-Service-Cover.jpg",keywords:["Q","blockchain","installation","snapshot","statesync","update"],slug:"installation"},s="Kurulum",l={id:"Mainnet/Q-Blockhahin/ins-q",title:"\ud83d\udcbe Kurulum",description:"Node installation guide.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Q-Blockhahin/ins-q.md",sourceDirName:"Mainnet/Q-Blockhahin",slug:"/Mainnet/Q-Blockhahin/installation",permalink:"/tr/docs/Mainnet/Q-Blockhahin/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Q-Blockhahin/ins-q.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node installation guide.",image:"./img/Q-Service-Cover.jpg",keywords:["Q","blockchain","installation","snapshot","statesync","update"],slug:"installation"},sidebar:"tutorialSidebar",previous:{title:"Q Blockchain",permalink:"/tr/docs/Mainnet/Q-Blockhahin/"},next:{title:"\u2699\ufe0f OmniBridge Kurulumu",permalink:"/tr/docs/Mainnet/Q-Blockhahin/omnibridge-setup"}},o={image:a(21441).Z},t=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Q Kurulumu",id:"q-kurulumu",level:2},{value:"keystore Klas\xf6r\xfc ve pwd.txt Dosyas\u0131n\u0131n Olu\u015fturulmas\u0131",id:"keystore-klas\xf6r\xfc-ve-pwdtxt-dosyas\u0131n\u0131n-olu\u015fturulmas\u0131",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:".env Dosyas\u0131n\u0131 D\xfczenleme",id:"env-dosyas\u0131n\u0131-d\xfczenleme",level:2},{value:"docker-compose.yaml Dosyas\u0131n\u0131 D\xfczenleme",id:"docker-composeyaml-dosyas\u0131n\u0131-d\xfczenleme",level:2},{value:"config.json Dosyas\u0131n\u0131 D\xfczenleme",id:"configjson-dosyas\u0131n\u0131-d\xfczenleme",level:2},{value:"Node&#39;u Ba\u015flatma",id:"nodeu-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Node&#39;u H\u0131zla Senkronize Etme",id:"nodeu-h\u0131zla-senkronize-etme",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,d.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,d.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"apt install ca-certificates curl gnupg lsb-release git htop tmux\n"})}),"\n",(0,d.jsx)(n.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,d.jsx)(n.h2,{id:"q-kurulumu",children:"Q Kurulumu"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"cd $HOME\ngit clone https://gitlab.com/q-dev/mainnet-public-tools\n"})}),"\n",(0,d.jsx)(n.h2,{id:"keystore-klas\xf6r\xfc-ve-pwdtxt-dosyas\u0131n\u0131n-olu\u015fturulmas\u0131",children:"keystore Klas\xf6r\xfc ve pwd.txt Dosyas\u0131n\u0131n Olu\u015fturulmas\u0131"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/validator/\nmkdir keystore\n"})}),"\n",(0,d.jsxs)(n.p,{children:["C\xfczdan\u0131n\u0131zda kullanaca\u011f\u0131n\u0131z \u015fifreyi a\u015fa\u011f\u0131daki kodda ",(0,d.jsx)(n.code,{children:"YOUR_PASS"})," yazan yere yaz\u0131n."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"echo YOUR_PASS > keystore/pwd.txt\n"})}),"\n",(0,d.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,d.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'docker run --entrypoint="" --rm -v $PWD:/data -it qblockchain/q-client:1.3.6 geth account new --datadir=/data --password=/data/keystore/pwd.txt\n'})}),"\n",(0,d.jsx)(n.p,{children:"\xc7\u0131kt\u0131 a\u015fa\u011f\u0131daki gibi ise her \u015fey yolunda demektir."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Your new key was generated\n\nPublic address of the key:   0xb3FF24F818b0ff6Cc50de951bcB8f86b52287dac\nPath of the secret key file: /data/keystore/UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac\n\n- You can share your public address with anyone. Others need it to interact with you.\n- You must NEVER share the secret key with anyone! The key controls access to your funds!\n- You must BACKUP your key file! Without the key, it's impossible to access account funds!\n- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!\n"})}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.p,{children:["Daha sonra \xe7\u0131kt\u0131da yaz\u0131l\u0131 olan (",(0,d.jsx)(n.code,{children:"/data/keystore"}),") klas\xf6r\xfcn\xfczdeki dosyalar\u0131 g\xfcvenli bir yerde saklamak i\xe7in yedekleyin."]})}),"\n",(0,d.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,d.jsxs)(n.p,{children:["Zaten bir c\xfczdan\u0131n\u0131z varsa, json dosyas\u0131n\u0131 (UTC ile ba\u015flayan) a\u015fa\u011f\u0131da g\xf6sterildi\u011fi gibi keystore klas\xf6r\xfcne kopyalay\u0131n. (",(0,d.jsx)(n.code,{children:"/root/mainnet-public-tools/validator/keystore/"}),")."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"validator\n|   ...\n|   ...\n\u2514 keystore\n  |   UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac\n  |   pwd.txt\n"})}),"\n",(0,d.jsx)(n.h2,{id:"env-dosyas\u0131n\u0131-d\xfczenleme",children:".env Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"cp .env.example .env\nnano .env\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Dosyay\u0131 a\xe7t\u0131\u011f\u0131n\u0131zda a\u015fa\u011f\u0131daki koddaki gibi ",(0,d.jsx)(n.code,{children:"ADDRESS"})," yazan yere ",(0,d.jsx)(n.code,{children:"0x"})," olmadan c\xfczdan\u0131n\u0131z\u0131 yaz\u0131n,\ndaha sonra ",(0,d.jsx)(n.code,{children:"IP"})," k\u0131sm\u0131na kendi IP adresinizin yazd\u0131\u011f\u0131n\u0131zdan emin olun ve kaydedip \xe7\u0131k\u0131n. (CTRL+XY)"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"# docker image for q client\nQCLIENT_IMAGE=qblockchain/q-client:v1.3.6\n\n# your q address here (without leading 0x)\nADDRESS=b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc\n\n# your public IP address here\nIP=193.19.228.94\n\n# the port you want to use for p2p communication (default is 30303)\nEXT_PORT=30303\n\n# extra bootnode you want to use\nBOOTNODE1_ADDR=enode://22adab037308f02abbb0fd7e831c75afa367b36615b2a0358a5c4673912cf384de6c8e688371822488622ebee383aeea5d41087160cb70484a9f1671876871b1@bootnode.q.org:30301\nBOOTNODE2_ADDR=enode://3021f73a6f14f8594384923f7f0228f81a806d1708e5c046db12661bdce6b0f10625fae12771aa36f7a4d1f110d4e5a589bf3d34ec4b1d2c6d10e382d90f6983@extrabootnode.q.org:30314\nBOOTNODE3_ADDR=enode://34b9e4e18bc37e4437bc0a9b10ac8ae5d0aab2b2e827310e90ec1012e818d07962b162d98e083ec5487e0cf87d1ffefb46332ec05209ec82fb675ae7afe3e241@extrabootnode.q.org:30315\n"})}),"\n",(0,d.jsx)(n.h2,{id:"docker-composeyaml-dosyas\u0131n\u0131-d\xfczenleme",children:"docker-compose.yaml Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"nano docker-compose.yaml\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Dosyan\u0131n ",(0,d.jsx)(n.code,{children:"--ethstats"})," b\xf6l\xfcm\xfcne kendi moniker ad\u0131n\u0131z\u0131 (",(0,d.jsx)(n.code,{children:"YOUR_MONIKER"}),") ve ana a\u011f eri\u015fim anahtar\u0131n\u0131z\u0131 (",(0,d.jsx)(n.code,{children:"MAINNET_ACCESS_KEY"}),") a\u015fa\u011f\u0131dakine benzer \u015fekilde yaz\u0131n ve kaydedin."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'.\n.\n.\n"--ethstats=YOUR_MONIKER:MAINNET_ACCESS_KEY@stats.q.org",\n.\n.\n.\n'})}),"\n",(0,d.jsx)(n.h2,{id:"configjson-dosyas\u0131n\u0131-d\xfczenleme",children:"config.json Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"nano config.json\n"})}),"\n",(0,d.jsx)(n.p,{children:"Dosyada adres k\u0131sm\u0131na c\xfczdan adresinizi ba\u015f\u0131nda 0x olmadan yaz\u0131n.\nDaha sonra \u015fifre k\u0131sm\u0131na c\xfczdan\u0131n\u0131z\u0131n \u201c\u015fifresini\u201d yaz\u0131p (\u201csupersecurepassword\u201d yerine) dosyay\u0131 kaydedin."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'    {\n      "address": "b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc",\n      "password": "supersecurepassword",\n      "keystoreDirectory": "/data",\n      "rpc": "https://rpc.q.org"\n    }\n'})}),"\n",(0,d.jsx)(n.h2,{id:"nodeu-ba\u015flatma",children:"Node'u Ba\u015flatma"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,d.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'docker-compose logs -f --tail "100"\n'})}),"\n",(0,d.jsx)(n.h2,{id:"nodeu-h\u0131zla-senkronize-etme",children:"Node'u H\u0131zla Senkronize Etme"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker-compose down && cd\nrm -rf /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata\nmkdir /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata\ncd /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://snapshots.stakecraft.com/",children:"Stake Craft"})," anl\u0131k g\xf6r\xfcnt\xfc servisine gidin ve Q Blockchain'in URL'sini kopyalay\u0131n ve a\u015fa\u011f\u0131da ",(0,d.jsx)(n.code,{children:"SNAPHOT_URL"})," yazan yere yaz\u0131n."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"wget -O - SNAPHOT_URL | tar xf -\n"})}),"\n",(0,d.jsx)(n.p,{children:"Ard\u0131ndan node'u yeniden ba\u015flat\u0131n."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"cd $HOME/mainnet-public-tools/validator/\ndocker-compose up -d\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u200b"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},21441:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/Q-Service-Cover-64c771cbc62d9bf592b79755c86588b3.jpg"},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var d=a(67294);const r={},i=d.createContext(r);function s(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);