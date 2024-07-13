"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3258],{43241:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var a=n(85893),i=n(11151);const s={title:"\ud83d\udcbe Eclipse Testnet",description:"Eclipse testnet ile etkile\u015fim rehberi.",image:"./img/Eclipse-Service-Cover.jpg",keywords:["Eclipse","solana","eth","layer 2","Katman 2","kurulum"]},r="Eclipse Testnet ile Etkile\u015fim Rehberi",t={id:"Testnet/eclipse/testnet",title:"\ud83d\udcbe Eclipse Testnet",description:"Eclipse testnet ile etkile\u015fim rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/eclipse/testnet.md",sourceDirName:"Testnet/eclipse",slug:"/Testnet/eclipse/testnet",permalink:"/tr/docs/Testnet/eclipse/testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/eclipse/testnet.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Eclipse Testnet",description:"Eclipse testnet ile etkile\u015fim rehberi.",image:"./img/Eclipse-Service-Cover.jpg",keywords:["Eclipse","solana","eth","layer 2","Katman 2","kurulum"]},sidebar:"tutorialSidebar",previous:{title:"Eclipse",permalink:"/tr/docs/Testnet/eclipse/"},next:{title:"Fuel",permalink:"/tr/docs/Testnet/fuel/"}},d={image:n(26499).Z},c=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"NodeJS Kurulumu",id:"nodejs-kurulumu",level:2},{value:"NVM Kurulumu",id:"nvm-kurulumu",level:3},{value:"NPM Kurulumu",id:"npm-kurulumu",level:2},{value:"Yarn Kurulumu",id:"yarn-kurulumu",level:2},{value:"Rust Kurulumu",id:"rust-kurulumu",level:2},{value:"Solana CLI Kurulmas\u0131",id:"solana-cli-kurulmas\u0131",level:2},{value:"Anchor Kurulumu",id:"anchor-kurulumu",level:2},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan\u0131 Kullanmak i\xe7in Yap\u0131land\u0131rmay\u0131 G\xfcncelleme",id:"c\xfczdan\u0131-kullanmak-i\xe7in-yap\u0131land\u0131rmay\u0131-g\xfcncelleme",level:3},{value:"Solana Adresini \xdc\u011frenme",id:"solana-adresini-\xfc\u011frenme",level:3},{value:"Sepolia ETH Temin Etme",id:"sepolia-eth-temin-etme",level:2},{value:"Eclipse K\xf6pr\xfc Script Kurulumu",id:"eclipse-k\xf6pr\xfc-script-kurulumu",level:2},{value:"K\xf6pr\xfc Scriptini \xc7al\u0131\u015ft\u0131rma",id:"k\xf6pr\xfc-scriptini-\xe7al\u0131\u015ft\u0131rma",level:3},{value:"Token Olu\u015fturma",id:"token-olu\u015fturma",level:2},{value:"Bakiyeyi Kontrol Etme",id:"bakiyeyi-kontrol-etme",level:3},{value:"Token Adresi Olu\u015fturma",id:"token-adresi-olu\u015fturma",level:3},{value:"Token Mint Etme",id:"token-mint-etme",level:3},{value:"Token Adedini Belirleme",id:"token-adedini-belirleme",level:3},{value:"Token Kontrol Etme",id:"token-kontrol-etme",level:3},{value:"Form",id:"form",level:2}];function u(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h1,{id:"eclipse-testnet-ile-etkile\u015fim-rehberi",children:"Eclipse Testnet ile Etkile\u015fim Rehberi"}),"\n",(0,a.jsx)(l.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(l.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'apt install pkg-config protobuf-compiler libssl-dev llvm libclang-dev build-essential -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(l.h2,{id:"nodejs-kurulumu",children:"NodeJS Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -\napt-get install -y nodejs\napt update -y && apt upgrade -y\n"})}),"\n",(0,a.jsx)(l.h3,{id:"nvm-kurulumu",children:"NVM Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n"})}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"source ~/.bashrc\n"})}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"nvm install 22\nnvm use v22.4.0\n"})}),"\n",(0,a.jsx)(l.p,{children:"Yukar\u0131daki kodda hata al\u0131rsan\u0131z a\u015fa\u011f\u0131daki kod ile mevcut s\xfcr\xfcmlerinizi kontrol edin."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"nvm ls\n"})}),"\n",(0,a.jsx)(l.p,{children:"Ard\u0131ndan en \xfcst s\xfcr\xfcm\xfc a\u015fa\u011f\u0131daki \xf6rnek kodda oldu\u011fu gibi aktif hale getirin;"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"nvm use v22.4.0\n"})}),"\n",(0,a.jsx)(l.h2,{id:"npm-kurulumu",children:"NPM Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"apt install npm\n"})}),"\n",(0,a.jsx)(l.h2,{id:"yarn-kurulumu",children:"Yarn Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"npm install --global yarn\n"})}),"\n",(0,a.jsx)(l.h2,{id:"rust-kurulumu",children:"Rust Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y\n"})}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"source $HOME/.cargo/env\n"})}),"\n",(0,a.jsx)(l.h2,{id:"solana-cli-kurulmas\u0131",children:"Solana CLI Kurulmas\u0131"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'sh -c "$(curl -sSfL https://release.solana.com/stable/install)"\nexport PATH="/root/.local/share/solana/install/active_release/bin:$PATH"\n'})}),"\n",(0,a.jsx)(l.h2,{id:"anchor-kurulumu",children:"Anchor Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"cargo install --git https://github.com/project-serum/anchor anchor-cli --locked\n"})}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"\n```shell\n\n## C\xfczdan\n\n### Yeni C\xfczdan Olu\u015fturma\n```shell\nsolana-keygen new -o /path-to-wallet/my-wallet.json\n'})}),"\n",(0,a.jsx)(l.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"solana-keygen recover 'prompt://?key=0/0' -o /path-to-wallet/my-wallet.json\n"})}),"\n",(0,a.jsx)(l.h3,{id:"c\xfczdan\u0131-kullanmak-i\xe7in-yap\u0131land\u0131rmay\u0131-g\xfcncelleme",children:"C\xfczdan\u0131 Kullanmak i\xe7in Yap\u0131land\u0131rmay\u0131 G\xfcncelleme"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"solana config set --url https://testnet.dev2.eclipsenetwork.xyz/\n"})}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"solana config set --keypair /path-to-wallet/my-wallet.json\n"})}),"\n",(0,a.jsx)(l.h3,{id:"solana-adresini-\xfc\u011frenme",children:"Solana Adresini \xdc\u011frenme"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"solana address \n"})}),"\n",(0,a.jsx)(l.h2,{id:"sepolia-eth-temin-etme",children:"Sepolia ETH Temin Etme"}),"\n",(0,a.jsx)(l.p,{children:"Solana c\xfczdan kelimerinizi bir c\xfczdanda i\xe7e aktar\u0131n ve c\xfczdan adresinizi al\u0131n daha sonra privaate key'inizi de kaydedin. Sonraki ad\u0131mmlarda laz\u0131m olacak."}),"\n",(0,a.jsxs)(l.p,{children:[(0,a.jsx)(l.a,{href:"https://sepolia-faucet.pk910.de/",children:"PoW Faucet"})," adresinde test Sepolia ETH edinin, ard\u0131ndan Eclipse i\xe7in kullanaca\u011f\u0131n\u0131z c\xfczdana Sepolia ETH g\xf6nderin."]}),"\n",(0,a.jsx)(l.h2,{id:"eclipse-k\xf6pr\xfc-script-kurulumu",children:"Eclipse K\xf6pr\xfc Script Kurulumu"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"git clone https://github.com/Eclipse-Laboratories-Inc/testnet-deposit\ncd testnet-deposit\nnpm install\n"})}),"\n",(0,a.jsx)(l.h3,{id:"k\xf6pr\xfc-scriptini-\xe7al\u0131\u015ft\u0131rma",children:"K\xf6pr\xfc Scriptini \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,a.jsx)(l.p,{children:"A\u015fa\u011f\u0131daki kodda g\xfczenlemeniz gereken yerler;"}),"\n",(0,a.jsxs)(l.ol,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"Solana_Cuzdan"})," buraya c\xfczdan adresinizi,"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"Gwei_Miktar"})," buraya 3000000 ya da daha y\xfcksek bir rakam,"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"Gwei_Fee_Miktar"})," buraya 100000 ya da daha y\xfcksek bir rakam,"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"Cuzdan_Private_Key"}),"buraya c\xfczdan private keyinizi,"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"Sepolia_RPC_Endpoint"})," buraya da ",(0,a.jsx)(l.a,{href:"https://rpc.sepolia.org/",children:"https://rpc.sepolia.org/"})," yaz\u0131n."]}),"\n"]}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"node deposit.js Solana_Cuzdan 0x7C9e161ebe55000a3220F972058Fb83273653a6e Gwei_Miktar Gwei_Fee_Miktar Cuzdan_Private_Key Sepolia_RPC_Endpoint\n"})}),"\n",(0,a.jsx)(l.h2,{id:"token-olu\u015fturma",children:"Token Olu\u015fturma"}),"\n",(0,a.jsx)(l.h3,{id:"bakiyeyi-kontrol-etme",children:"Bakiyeyi Kontrol Etme"}),"\n",(0,a.jsx)(l.p,{children:"\xd6ncelikle c\xfczdan bakiyenini kontrol edin."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"solana balance\n"})}),"\n",(0,a.jsx)(l.h3,{id:"token-adresi-olu\u015fturma",children:"Token Adresi Olu\u015fturma"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"spl-token create-token --enable-metadata -p TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb\n"})}),"\n",(0,a.jsx)(l.p,{children:"Kodun \xe7\u0131kt\u0131s\u0131 a\u015fa\u011f\u0131dakine benzer olacak. Bu adresinizi kaydedin. Bir sonraki ad\u0131mda kullan\u0131lacak."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell"})}),"\n",(0,a.jsx)(l.h3,{id:"token-mint-etme",children:"Token Mint Etme"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"spl-token create-account TOKEN_ADRESI\n"})}),"\n",(0,a.jsx)(l.h3,{id:"token-adedini-belirleme",children:"Token Adedini Belirleme"}),"\n",(0,a.jsx)(l.p,{children:"A\u015fa\u011f\u0131daki 10000 yerine istedi\u011finiz adeti yazabilirsiniz."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"spl-token mint TOKEN_ADRESI 10000\n"})}),"\n",(0,a.jsx)(l.h3,{id:"token-kontrol-etme",children:"Token Kontrol Etme"}),"\n",(0,a.jsx)(l.p,{children:"A\u015fa\u011f\u0131daki kodun  \xe7\u0131kt\u0131\u0131snda hesab\u0131n\u0131za ait ka\xe7 token oldu\u011funu g\xf6receksiniz."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"spl-token accounts\n"})}),"\n",(0,a.jsx)(l.h2,{id:"form",children:"Form"}),"\n",(0,a.jsxs)(l.p,{children:["Son olarak ",(0,a.jsx)(l.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLSfJQCFBKHpiy2HVw9lTjCj7k0BqNKnP6G1cd0YdKhaPLWD-AA/viewform?pli=1",children:"Eclipse Deployment Address"})," formunu doldurup g\xf6nderin."]})]})}function o(e={}){const{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},26499:(e,l,n)=>{n.d(l,{Z:()=>a});const a=n.p+"assets/images/Eclipse-Service-Cover-ef931a69cb9c11dbd9d552bf8dbfa904.jpg"},11151:(e,l,n)=>{n.d(l,{Z:()=>t,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const l=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:l},e.children)}}}]);