"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5517],{50182:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var a=r(85893),i=r(11151);const l={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","kurulum","snapshot","statesync","update"]},u="Kurulum",t={id:"Mainnet/penumbra/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/penumbra/installation.md",sourceDirName:"Mainnet/penumbra",slug:"/Mainnet/penumbra/installation",permalink:"/tr/docs/Mainnet/penumbra/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/penumbra/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","kurulum","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Penumbra Zone",permalink:"/tr/docs/Mainnet/penumbra/"},next:{title:"\ud83d\uddf3\ufe0f Oy Kullanma",permalink:"/tr/docs/Mainnet/penumbra/proposal"}},s={image:r(4005).Z},d=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"Penumbra Command Line Interface (CLI) Kurulumu",id:"penumbra-command-line-interface-cli-kurulumu",level:2},{value:"Penumbra C\xfczdan",id:"penumbra-c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7e Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7e-aktarma",level:3},{value:"C\xfczdan Adresi",id:"c\xfczdan-adresi",level:3},{value:"C\xfczdan Bakiyesi",id:"c\xfczdan-bakiyesi",level:3},{value:"Penumbra ve CometBFT Kurulumu",id:"penumbra-ve-cometbft-kurulumu",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["pcli, pd ve pclientd s\xfcr\xfcmlerini ",(0,a.jsx)(n.a,{href:"https://github.com/penumbra-zone/penumbra/releases",children:"buradan"})," kontrol edebilirsiniz."]})}),"\n",(0,a.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"penumbra-command-line-interface-cli-kurulumu",children:"Penumbra Command Line Interface (CLI) Kurulumu"}),"\n",(0,a.jsx)(n.p,{children:"Gereklilik: Ubuntu versiyon 22.04"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"\xd6nemli Not: Bu k\u0131lavuz, komut sat\u0131r\u0131n\u0131 rahat\xe7a kulland\u0131\u011f\u0131n\u0131z\u0131 varsayar."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pcli-installer.sh | sh\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"source $HOME/.cargo/env\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"L\xfctfen Komut Sat\u0131r\u0131 Aray\xfcz\xfc (CLI) kurulumunun ba\u015far\u0131yla tamamland\u0131\u011f\u0131n\u0131 do\u011frulay\u0131n."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli --version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"penumbra-c\xfczdan",children:"Penumbra C\xfczdan"}),"\n",(0,a.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,a.jsx)(n.p,{children:"CLI'yi kullanarak c\xfczdan olu\u015fturma i\u015flemini ba\u015flatma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli init soft-kms generate\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"S\xfcre\xe7 boyunca ilerledik\xe7e \xf6zel bir anahtar (Private Seed) olu\u015fturulacakt\u0131r. Bu anahtar\u0131 \xf6zenle korumak \xe7ok \xf6nemlidir \xe7\xfcnk\xfc talihsiz bir durumda c\xfczdan\u0131n\u0131za eri\u015fiminizi kaybetmeniz durumunda bir cankurtaran halat\u0131 g\xf6revi g\xf6r\xfcr."})}),"\n",(0,a.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7e-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7e Aktarma"}),"\n",(0,a.jsx)(n.p,{children:"Daha \xf6nce olu\u015fturdu\u011funuz bir c\xfczdan\u0131 i\xe7e aktarman\u0131z gerekirse:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli init soft-kms import-phrase\n"})}),"\n",(0,a.jsx)(n.h3,{id:"c\xfczdan-adresi",children:"C\xfczdan Adresi"}),"\n",(0,a.jsx)(n.p,{children:"C\xfczdan adresinizi bulmak i\xe7in a\u015fa\u011f\u0131daki komutu kullan\u0131n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli view address\n"})}),"\n",(0,a.jsx)(n.h3,{id:"c\xfczdan-bakiyesi",children:"C\xfczdan Bakiyesi"}),"\n",(0,a.jsx)(n.p,{children:"C\xfczdan bakiyenizi kontrol edin:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli view sync\npcli view balance\n"})}),"\n",(0,a.jsx)(n.h2,{id:"penumbra-ve-cometbft-kurulumu",children:"Penumbra ve CometBFT Kurulumu"})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4005:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/Penumbra-Service-Cover-39dcac8b23dfbc657b308935f2897121.jpg"},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>u});var a=r(67294);const i={},l=a.createContext(i);function u(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:u(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);