"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5583],{6734:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Testnet/farcaster/installation","title":"\ud83d\udcbe Installation","description":"Farcaster Hubble installation guide.","source":"@site/docs/Testnet/farcaster/installation.md","sourceDirName":"Testnet/farcaster","slug":"/Testnet/farcaster/installation","permalink":"/docs/Testnet/farcaster/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/farcaster/installation.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe Installation","description":"Farcaster Hubble installation guide.","image":"./img/Farcaster-Service-Cover.jpg","keywords":["Farcaster","Hubble","ETH","Optimism","installation"]},"sidebar":"tutorialSidebar","previous":{"title":"Farcaster","permalink":"/docs/Testnet/farcaster/"},"next":{"title":"Fractal","permalink":"/docs/Testnet/fractal/"}}');var r=a(74848),i=a(28453);const s={title:"\ud83d\udcbe Installation",description:"Farcaster Hubble installation guide.",image:"./img/Farcaster-Service-Cover.jpg",keywords:["Farcaster","Hubble","ETH","Optimism","installation"]},t="Farcaster Hubble Installation Guide",d={image:a(28990).A},c=[{value:"Gereklilikler",id:"gereklilikler",level:2},{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Docker Compose Kurulumu",id:"docker-compose-kurulumu",level:2},{value:"Script ile Kurulum",id:"script-ile-kurulum",level:2},{value:"Log Kontrol Etme",id:"log-kontrol-etme",level:3},{value:"Hubble&#39;\u0131 Durdurma",id:"hubble\u0131-durdurma",level:3},{value:"Hubble&#39;\u0131 Ba\u015flatma",id:"hubble\u0131-ba\u015flatma",level:3},{value:"Hubble Veritaban\u0131n\u0131 S\u0131f\u0131rlama",id:"hubble-veritaban\u0131n\u0131-s\u0131f\u0131rlama",level:3},{value:"FID Kontrol Etme",id:"fid-kontrol-etme",level:3},{value:"G\xfcncelleme",id:"g\xfcncelleme",level:3},{value:"Docker ile Elle Kurulum",id:"docker-ile-elle-kurulum",level:2},{value:"Repoyu Klonlama",id:"repoyu-klonlama",level:3},{value:"Anahtar \xc7ifti Olu\u015fturma",id:"anahtar-\xe7ifti-olu\u015fturma",level:3},{value:".env Dosyas\u0131 Olu\u015fturma",id:"env-dosyas\u0131-olu\u015fturma",level:3},{value:"Hubble \xc7al\u0131\u015ft\u0131rma",id:"hubble-\xe7al\u0131\u015ft\u0131rma",level:3},{value:"Log Kontrol Etme",id:"log-kontrol-etme-1",level:3},{value:"FID Kontrol Etme",id:"fid-kontrol-etme-1",level:3},{value:"G\xfcncelleme",id:"g\xfcncelleme-1",level:3},{value:"Grafana Monit\xf6r Ayarlar\u0131 (El ile kurulum i\xe7in)",id:"grafana-monit\xf6r-ayarlar\u0131-el-ile-kurulum-i\xe7in",level:2},{value:"Grafana Port De\u011fi\u015ftirme",id:"grafana-port-de\u011fi\u015ftirme",level:3},{value:"Grafana Klas\xf6r Olu\u015fturma ve \u0130zinleri Verme",id:"grafana-klas\xf6r-olu\u015fturma-ve-i\u0307zinleri-verme",level:3},{value:"Grafana \xc7al\u0131\u015ft\u0131rma",id:"grafana-\xe7al\u0131\u015ft\u0131rma",level:3},{value:"Grafana Panele Eri\u015fim",id:"grafana-panele-eri\u015fim",level:3},{value:"Hubble Durumunu Kontrol Etme",id:"hubble-durumunu-kontrol-etme",level:2}];function o(e){const l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.header,{children:(0,r.jsx)(l.h1,{id:"farcaster-hubble-installation-guide",children:"Farcaster Hubble Installation Guide"})}),"\n",(0,r.jsx)(l.h2,{id:"gereklilikler",children:"Gereklilikler"}),"\n",(0,r.jsxs)(l.ol,{children:["\n",(0,r.jsxs)(l.li,{children:["Warpcast kullan\u0131c\u0131 id'nizi (FID), Warpcast hesab\u0131n\u0131z yoksa ",(0,r.jsx)(l.a,{href:"https://warpcast.com/~/invite-page/328172?id=bfbf46c5",children:"buradan"})," 5-6 dolar maliyetle bir hesap a\xe7abilirsiniz."]}),"\n",(0,r.jsx)(l.li,{children:"Hubble 2281, 2282, 2283 ve 3000 (grafana) portlar\u0131n\u0131 kullanacakt\u0131r. Sisteminizde bu portlar\u0131n kullan\u0131lmad\u0131\u011f\u0131ndan emin olun."}),"\n",(0,r.jsxs)(l.li,{children:["Ethereum ve Optimism RPC, ",(0,r.jsx)(l.a,{href:"https://dashboard.alchemy.com/",children:"Alchemy"})," ya da ",(0,r.jsx)(l.a,{href:"https://app.infura.io/",children:"Infura"}),"'dan bunlar\u0131 temin edebilirsiniz."]}),"\n"]}),"\n",(0,r.jsxs)(l.blockquote,{children:["\n",(0,r.jsxs)(l.p,{children:["Warpcast FID Nerede?\n",(0,r.jsx)(l.img,{alt:"Farcaster",src:a(57884).A+"",width:"3448",height:"1734"})]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,r.jsx)(l.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:'apt install ca-certificates gnupg lsb-release make git curl screen -y < "/dev/null"\n'})}),"\n",(0,r.jsx)(l.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,r.jsx)(l.h2,{id:"docker-compose-kurulumu",children:"Docker Compose Kurulumu"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n'})}),"\n",(0,r.jsx)(l.h2,{id:"script-ile-kurulum",children:"Script ile Kurulum"}),"\n",(0,r.jsxs)(l.p,{children:["A\u015fa\u011f\u0131daki kodu \xe7al\u0131\u015ft\u0131rd\u0131\u011f\u0131n\u0131zda sizden ",(0,r.jsx)(l.code,{children:"Ethereum"})," ve ",(0,r.jsx)(l.code,{children:"Optimism RPC"})," ile birlikte ",(0,r.jsx)(l.code,{children:"Warpcast FID"})," isteyecek."]}),"\n",(0,r.jsx)(l.p,{children:(0,r.jsx)(l.img,{alt:"Farcaster",src:a(42167).A+"",width:"2102",height:"370"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"curl -sSL https://download.thehubble.xyz/bootstrap.sh | bash\n"})}),"\n",(0,r.jsx)(l.h3,{id:"log-kontrol-etme",children:"Log Kontrol Etme"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hubble \n./hubble.sh logs\n"})}),"\n",(0,r.jsx)(l.h3,{id:"hubble\u0131-durdurma",children:"Hubble'\u0131 Durdurma"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hubble \n./hubble.sh down\n"})}),"\n",(0,r.jsx)(l.h3,{id:"hubble\u0131-ba\u015flatma",children:"Hubble'\u0131 Ba\u015flatma"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hubble \n./hubble.sh up\n"})}),"\n",(0,r.jsx)(l.h3,{id:"hubble-veritaban\u0131n\u0131-s\u0131f\u0131rlama",children:"Hubble Veritaban\u0131n\u0131 S\u0131f\u0131rlama"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hubble \nrm -rf .rocks\n"})}),"\n",(0,r.jsx)(l.h3,{id:"fid-kontrol-etme",children:"FID Kontrol Etme"}),"\n",(0,r.jsx)(l.p,{children:"Senkronize olduktan sonra a\u015fa\u011f\u0131daki kod ile Warpcast FID do\u011frumu kontrol edin."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:'docker logs hubble-hubble-1 2>&1 | grep "Hub Operator FID"\n'})}),"\n",(0,r.jsx)(l.h3,{id:"g\xfcncelleme",children:"G\xfcncelleme"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hubble && ./hubble.sh upgrade\n"})}),"\n",(0,r.jsx)(l.h2,{id:"docker-ile-elle-kurulum",children:"Docker ile Elle Kurulum"}),"\n",(0,r.jsx)(l.h3,{id:"repoyu-klonlama",children:"Repoyu Klonlama"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"git clone -c advice.detachedHead=false -b @latest https://github.com/farcasterxyz/hub-monorepo.git\n"})}),"\n",(0,r.jsx)(l.h3,{id:"anahtar-\xe7ifti-olu\u015fturma",children:"Anahtar \xc7ifti Olu\u015fturma"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hub-monorepo/apps/hubble\nchmod -R 777 $HOME/hub-monorepo/apps/hubble/.hub\nchmod -R 777 $HOME/hub-monorepo/apps/hubble/.rocks\n"})}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"docker compose run hubble yarn identity create\n"})}),"\n",(0,r.jsx)(l.h3,{id:"env-dosyas\u0131-olu\u015fturma",children:".env Dosyas\u0131 Olu\u015fturma"}),"\n",(0,r.jsxs)(l.p,{children:["A\u015fa\u011f\u0131daki kodda ",(0,r.jsx)(l.code,{children:"ETH_MAINNET_RPC_URL"}),", ",(0,r.jsx)(l.code,{children:"OPTIMISM_L2_RPC_URL"})," ve ",(0,r.jsx)(l.code,{children:"OPTIMISM_L2_RPC_URL"})," b\xf6l\xfcmlerini kendi bilgilerinize doldurup \xe7al\u0131\u015ft\u0131r\u0131n."]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"tee $HOME/hub-monorepo/apps/hubble/.env > /dev/null << EOF\nETH_MAINNET_RPC_URL=https://mainnet.infura.io/v3/XXXXXXXXXXXXXXXXXXXXXXXXXXXX # Replace your Alchemy / Infura ETH Mainnet RPC\nOPTIMISM_L2_RPC_URL=https://optimism-mainnet.infura.io/v3/XXXXXXXXXXXXXXXXXXXXXXXXXXXX # Replace your Alchemy / Infura Optimism Mainnet RPC\nOPTIMISM_L2_RPC_URL=Warpcast_FID # Replace your FID\nFC_NETWORK_ID=1\nBOOTSTRAP_NODE=/dns/nemes.farcaster.xyz/tcp/2282\nSTATSD_METRICS_SERVER=statsd:8125\nEOF\n"})}),"\n",(0,r.jsx)(l.h3,{id:"hubble-\xe7al\u0131\u015ft\u0131rma",children:"Hubble \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hub-monorepo/apps/hubble\ndocker compose up hubble -d\n"})}),"\n",(0,r.jsx)(l.h3,{id:"log-kontrol-etme-1",children:"Log Kontrol Etme"}),"\n",(0,r.jsx)(l.p,{children:"\xc7al\u0131\u015ft\u0131rd\u0131ktan sonra a\u015fa\u011f\u0131daki kod ile senktronizasyonu kontrol edin. Biraz uzun s\xfcrecektir."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hub-monorepo/apps/hubble\ndocker compose logs -f hubble\n"})}),"\n",(0,r.jsx)(l.h3,{id:"fid-kontrol-etme-1",children:"FID Kontrol Etme"}),"\n",(0,r.jsx)(l.p,{children:"Senkronize olduktan sonra a\u015fa\u011f\u0131daki kod ile Warpcast FID do\u011fru mu kontrol edin."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:'cd $HOME/hub-monorepo/apps/hubble\ndocker logs hubble-hubble-1 2>&1 | grep "Hub Operator FID"\n'})}),"\n",(0,r.jsx)(l.h3,{id:"g\xfcncelleme-1",children:"G\xfcncelleme"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hub-monorepo/apps/hubble\ngit fetch --tags --force && git checkout @latest\ndocker compose stop && docker compose up -d --force-recreate --pull always\n"})}),"\n",(0,r.jsx)(l.h2,{id:"grafana-monit\xf6r-ayarlar\u0131-el-ile-kurulum-i\xe7in",children:"Grafana Monit\xf6r Ayarlar\u0131 (El ile kurulum i\xe7in)"}),"\n",(0,r.jsx)(l.p,{children:"Burada 3000 portunu kullanan sunucularda Grafana yap\u0131land\u0131r\u0131lmas\u0131 anlat\u0131lm\u0131\u015ft\u0131r."}),"\n",(0,r.jsx)(l.h3,{id:"grafana-port-de\u011fi\u015ftirme",children:"Grafana Port De\u011fi\u015ftirme"}),"\n",(0,r.jsx)(l.p,{children:"Varsay\u0131lan olarak 3000 olan portu de\u011fi\u015ftirmek i\xe7in a\u015fa\u011f\u0131daki kodda m\xfcsait portunuzu yaz\u0131n ve kodu \xe7al\u0131\u015ft\u0131r\u0131n."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"GRAFANA_PORT=3005\n"})}),"\n",(0,r.jsx)(l.p,{children:"Ard\u0131ndan a\u015fa\u011f\u0131daki kodu \xe7al\u0131\u015ft\u0131r\u0131n."}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:'sed -i.bak -e "s%:3000%:${GRAFANA_PORT}%g" $HOME//hub-monorepo/apps/hubble/docker-compose.yml\nsed -i.bak -e "s%3000:3000%:${GRAFANA_PORT}:${GRAFANA_PORT}%g" $HOME//hub-monorepo/apps/hubble/docker-compose.yml\n'})}),"\n",(0,r.jsx)(l.h3,{id:"grafana-klas\xf6r-olu\u015fturma-ve-i\u0307zinleri-verme",children:"Grafana Klas\xf6r Olu\u015fturma ve \u0130zinleri Verme"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME\nmkdir -p /var/lib/grafana/plugins/\nchmod -R 777 /var/lib/grafana/\nchmod -R 777 /var/lib/grafana/plugins/\n"})}),"\n",(0,r.jsx)(l.h3,{id:"grafana-\xe7al\u0131\u015ft\u0131rma",children:"Grafana \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"cd $HOME/hub-monorepo/apps/hubble\ndocker compose up statsd grafana -d\n"})}),"\n",(0,r.jsx)(l.h3,{id:"grafana-panele-eri\u015fim",children:"Grafana Panele Eri\u015fim"}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.code,{children:"IP_ADRESI:30XX"})," adresine gidin kullan\u0131c\u0131 ad\u0131 ve parola olarak ",(0,r.jsx)(l.code,{children:"admin"})," ile giri\u015f yap\u0131n."]}),"\n",(0,r.jsx)(l.h2,{id:"hubble-durumunu-kontrol-etme",children:"Hubble Durumunu Kontrol Etme"}),"\n",(0,r.jsxs)(l.p,{children:["A\u015fa\u011f\u0131daki kodun \xe7\u0131ks\u0131t\u0131 ",(0,r.jsx)(l.code,{children:"false"})," olmal\u0131."]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-shell",children:"curl http://127.0.0.1:2281/v1/info?dbstats=1 | jq\n"})})]})}function u(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28990:(e,l,a)=>{a.d(l,{A:()=>n});const n=a.p+"assets/images/Farcaster-Service-Cover-fdad23ee6fe86c8986855e7a0edfc0aa.jpg"},42167:(e,l,a)=>{a.d(l,{A:()=>n});const n=a.p+"assets/images/guide-1-12ebb9b0466c300442f8c3538e7b07c8.png"},57884:(e,l,a)=>{a.d(l,{A:()=>n});const n=a.p+"assets/images/guide-2-65027d684281d4f6041a6adcd6ba4d8b.png"},28453:(e,l,a)=>{a.d(l,{R:()=>s,x:()=>t});var n=a(96540);const r={},i=n.createContext(r);function s(e){const l=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:l},e.children)}}}]);