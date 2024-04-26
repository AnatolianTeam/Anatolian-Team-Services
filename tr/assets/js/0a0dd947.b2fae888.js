"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[768],{2608:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(5893),l=r(1151);const a={title:"\ud83d\udcbe Kurulum",description:"Gasp Operat\xf6r kurulum rehberi.",image:"./../../../../../../docs/Testnet/gasp/img/Gasp-Service-Cover.jpg",keywords:["Gasp","EigenLayer","Eigen","Layer","restake","Hole\u0161ky","kurulum","rehber","Holesky"]},o="Gasp Hole\u0161ky Operat\xf6r Kurulum",i={id:"Testnet/gasp/installation",title:"\ud83d\udcbe Kurulum",description:"Gasp Operat\xf6r kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/gasp/installation.md",sourceDirName:"Testnet/gasp",slug:"/Testnet/gasp/installation",permalink:"/tr/docs/Testnet/gasp/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/gasp/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Gasp Operat\xf6r kurulum rehberi.",image:"./../../../../../../docs/Testnet/gasp/img/Gasp-Service-Cover.jpg",keywords:["Gasp","EigenLayer","Eigen","Layer","restake","Hole\u0161ky","kurulum","rehber","Holesky"]},sidebar:"tutorialSidebar",previous:{title:"Gasp",permalink:"/tr/docs/Testnet/gasp/"},next:{title:"\ud83d\udc64 Kullan\u0131c\u0131 Rehberi",permalink:"/tr/docs/Testnet/gasp/user-guide"}},t={image:r(666).Z},c=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Docker Compose Kurulumu",id:"docker-compose-kurulumu",level:2},{value:"Gasp AWS Operator Kurulumu",id:"gasp-aws-operator-kurulumu",level:2},{value:".env Dosyas\u0131n\u0131n D\xfczenlenmesi",id:"env-dosyas\u0131n\u0131n-d\xfczenlenmesi",level:4},{value:"Scripti \xc7al\u0131\u015ft\u0131rma",id:"scripti-\xe7al\u0131\u015ft\u0131rma",level:2},{value:"Docker Compose \xc7al\u0131\u015ft\u0131rma",id:"docker-compose-\xe7al\u0131\u015ft\u0131rma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Docker ID \xd6\u011frenme",id:"docker-id-\xf6\u011frenme",level:3},{value:"Kontrol",id:"kontrol",level:3},{value:"Discord&#39;da Rol Alma",id:"discordda-rol-alma",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gasp-hole\u0161ky-operat\xf6r-kurulum",children:"Gasp Hole\u0161ky Operat\xf6r Kurulum"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Ba\u015flamadan \xf6nce yap\u0131lacaklar:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["EigenLayer ",(0,s.jsx)(n.a,{href:"/tr/docs/Testnet/eigenlayer/installation",children:"operator kurulumunuzu"})," yap\u0131n\u0131z."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://holesky-faucet.pk910.de",children:"PoW Faucet"})," adresinden en az 10.1 ya da 10.05 holETH temin edin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://testnet.ankr.com/staking/stake/ethereum/",children:"Ank"})," adresinden en az 10 holETH stake edin. Ard\u0131ndan ",(0,s.jsx)(n.a,{href:"https://holesky.eigenlayer.xyz/restake/ankrETH",children:"EigenLayer"}),"'da reStake edin ard\u0131ndan etmediyseniz EigenLayer operator\xfcn\xfcze delege edin."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,s.jsx)(n.h2,{id:"docker-compose-kurulumu",children:"Docker Compose Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'VER=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d \'"\' -f 4)\ncurl -L "https://github.com/docker/compose/releases/download/"$VER"/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n'})}),"\n",(0,s.jsx)(n.h2,{id:"gasp-aws-operator-kurulumu",children:"Gasp AWS Operator Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/mangata-finance/avs-operator-setup.git\ncd avs-operator-setup\nchmod +x run.sh\n"})}),"\n",(0,s.jsx)(n.h4,{id:"env-dosyas\u0131n\u0131n-d\xfczenlenmesi",children:".env Dosyas\u0131n\u0131n D\xfczenlenmesi"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"nano .env\n"})}),"\n",(0,s.jsx)(n.p,{children:"Bu dosyada sadece a\u015fa\u011f\u0131daki b\xf6l\xfcmleri d\xfczenliyoruz."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ETH_RPC_URL"}),"=",(0,s.jsx)(n.a,{href:"https://ethereum-holesky-rpc.publicnode.com",children:"https://ethereum-holesky-rpc.publicnode.com"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ETH_WS_URL"}),"=wss://ethereum-holesky-rpc.publicnode.com"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ECDSA_KEY_FILE_HOST"}),"=~/.eigenlayer/operator_keys/",(0,s.jsx)(n.strong,{children:"ADINIZ"}),".ecdsa.key.json"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BLS_KEY_FILE_HOST"}),"=~/.eigenlayer/operator_keys/",(0,s.jsx)(n.strong,{children:"ADINIZ"}),".bls.key.json"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ECDSA_KEY_PASSWORD=SIFRENIZ"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"BLS_KEY_PASSWORD=SIFRENIZ"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:".\n.\n.\n# TODO: Operators need to update this to provide connection to ETH & network nodes\nCHAIN_ID=17000\nETH_RPC_URL=https://ethereum-holesky-rpc.publicnode.com\nETH_WS_URL=wss://ethereum-holesky-rpc.publicnode.com\n\n# TODO: Operators need to update this to their own keys, either use files or encoded JSON\n# this is where your keys are stored on local storage\nECDSA_KEY_FILE_HOST=~/.eigenlayer/operator_keys/koltigin.ecdsa.key.json // koltigin yazan yerde kendi ad\u0131n\u0131z olacak\nBLS_KEY_FILE_HOST=~/.eigenlayer/operator_keys/koltigin.bls.key.json // koltigin yazan yerde kendi ad\u0131n\u0131z olacak\n.\n.\n.\n# TODO: Operators need to add password to decrypt the above keys\nECDSA_KEY_PASSWORD=SIFRENIZ\nBLS_KEY_PASSWORD=SIFRENIZ\n"})}),"\n",(0,s.jsx)(n.h2,{id:"scripti-\xe7al\u0131\u015ft\u0131rma",children:"Scripti \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./run.sh opt-in\n"})}),"\n",(0,s.jsx)(n.h2,{id:"docker-compose-\xe7al\u0131\u015ft\u0131rma",children:"Docker Compose \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker compose up -d\n"})}),"\n",(0,s.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,s.jsx)(n.h3,{id:"docker-id-\xf6\u011frenme",children:"Docker ID \xd6\u011frenme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker ps -a\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kontrol",children:"Kontrol"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker logs -f --tail 100 DOCKER-ID\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ard\u0131ndan ",(0,s.jsx)(n.code,{children:"CTRL C"})," ile loglar\u0131 kapat\u0131n. Kapatmadan bir screen i\xe7erisinde \xe7al\u0131\u015ft\u0131racak oluran\u0131z zamanla diskinizde bu loglar yer kaplayacakt\u0131r."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"discordda-rol-alma",children:"Discord'da Rol Alma"}),"\n",(0,s.jsxs)(n.p,{children:["Loglar akarken ald\u0131\u011f\u0131n\u0131z ekran g\xf6r\xfcnt\xfcs\xfcn\xfc ",(0,s.jsx)(n.a,{href:"https://discord.gg/hcM4DfGsRa",children:"Discord"}),"'da ",(0,s.jsx)(n.code,{children:"#\ud83e\udd16\u2551avs-operators"})," kanal\u0131na g\xf6nderip ",(0,s.jsx)(n.code,{children:"Magnatarians"})," rol\xfcn\xfc al\u0131n. Ayn\u0131 kanalda \u015fu mesajdaki botun ",(0,s.jsx)(n.a,{href:"https://discord.com/channels/776977650907480074/1192066266765197323/1204853636547477575",children:"mesaj\u0131nda"})," yer alan ",(0,s.jsx)(n.code,{children:"Node Runner Role"})," butonuna t\u0131klayarak da rol al\u0131n."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"eigenlayer operator update operator.yaml\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},666:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/Gasp-Service-Cover-9a7984bac976d77e5e4de7761ee0553c.jpg"},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var s=r(7294);const l={},a=s.createContext(l);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);