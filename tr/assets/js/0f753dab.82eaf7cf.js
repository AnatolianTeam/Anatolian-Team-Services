"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4845],{92218:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Testnet/eigenlayer/installation","title":"\ud83d\udcbe Kurulum","description":"Hole\u0161ky Operat\xf6r kurulum rehberi.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/eigenlayer/installation.md","sourceDirName":"Testnet/eigenlayer","slug":"/Testnet/eigenlayer/installation","permalink":"/tr/docs/Testnet/eigenlayer/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/eigenlayer/installation.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe Kurulum","description":"Hole\u0161ky Operat\xf6r kurulum rehberi.","image":"./../../../../../../docs/Testnet/eigenlayer/img/EigenLayer-Service-Cover.jpg","keywords":["EigenLayer","Eigen","Layer","restake","Hole\u0161ky","kurulum","rehber","Holesky"]},"sidebar":"tutorialSidebar","previous":{"title":"EigenLayer","permalink":"/tr/docs/Testnet/eigenlayer/"},"next":{"title":"\ud83d\udc64 Kullan\u0131c\u0131 Rehberi","permalink":"/tr/docs/Testnet/eigenlayer/user-guide"}}');var l=n(74848),i=n(28453);const s={title:"\ud83d\udcbe Kurulum",description:"Hole\u0161ky Operat\xf6r kurulum rehberi.",image:"./../../../../../../docs/Testnet/eigenlayer/img/EigenLayer-Service-Cover.jpg",keywords:["EigenLayer","Eigen","Layer","restake","Hole\u0161ky","kurulum","rehber","Holesky"]},t="EigenLayer Hole\u0161ky Operat\xf6r Kurulum",d={image:n(7218).A},o=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"CLI&#39;i Kaynaktan Y\xfckleme",id:"clii-kaynaktan-y\xfckleme",level:2},{value:"Key Olu\u015fturma ve Listeleme",id:"key-olu\u015fturma-ve-listeleme",level:2},{value:"Yeni Key Olu\u015fturma",id:"yeni-key-olu\u015fturma",level:3},{value:"ECDSA Key Olu\u015fturma",id:"ecdsa-key-olu\u015fturma",level:4},{value:"BLS Key Olu\u015fturma",id:"bls-key-olu\u015fturma",level:4},{value:"Keyleri \u0130\xe7eri Aktarma (Import)",id:"keyleri-i\u0307\xe7eri-aktarma-import",level:3},{value:"Listing Keys",id:"listing-keys",level:3},{value:"Key&#39;leri D\u0131\u015fa Aktarma",id:"keyleri-d\u0131\u015fa-aktarma",level:3},{value:"Export ECDSA Key",id:"export-ecdsa-key",level:4},{value:"Export BLS Key",id:"export-bls-key",level:4},{value:"Hole\u0161ky ETH Edinme",id:"hole\u0161ky-eth-edinme",level:2},{value:"Operat\xf6r Kayd\u0131",id:"operat\xf6r-kayd\u0131",level:2},{value:"Config Dosyalar\u0131n\u0131 Olu\u015fturma",id:"config-dosyalar\u0131n\u0131-olu\u015fturma",level:3},{value:"metadata.json Dosyas\u0131 Olu\u015fturma",id:"metadatajson-dosyas\u0131-olu\u015fturma",level:4},{value:"operator.yaml Dosyas\u0131n\u0131n D\xfczenlenmesi",id:"operatoryaml-dosyas\u0131n\u0131n-d\xfczenlenmesi",level:4},{value:"Kay\u0131t",id:"kay\u0131t",level:3},{value:"Kay\u0131t Durumunu Kontrol Etme",id:"kay\u0131t-durumunu-kontrol-etme",level:2},{value:"Metadata G\xfcncellemeleri",id:"metadata-g\xfcncellemeleri",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"eigenlayer-hole\u0161ky-operat\xf6r-kurulum",children:"EigenLayer Hole\u0161ky Operat\xf6r Kurulum"})}),"\n",(0,l.jsx)(a.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,l.jsx)(a.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm gcc -y < "/dev/null"\n\n'})}),"\n",(0,l.jsx)(a.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,l.jsx)(a.h2,{id:"clii-kaynaktan-y\xfckleme",children:"CLI'i Kaynaktan Y\xfckleme"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/Layr-Labs/eigenlayer-cli.git\ncd eigenlayer-cli\nmkdir -p build\ngo build -o build/eigenlayer cmd/eigenlayer/main.go\ncd $HOME\ncp eigenlayer-cli/build/eigenlayer /usr/local/bin/\n"})}),"\n",(0,l.jsx)(a.h2,{id:"key-olu\u015fturma-ve-listeleme",children:"Key Olu\u015fturma ve Listeleme"}),"\n",(0,l.jsx)(a.h3,{id:"yeni-key-olu\u015fturma",children:"Yeni Key Olu\u015fturma"}),"\n",(0,l.jsx)(a.p,{children:"Burada iki anahtar olu\u015fturuyoruz. Daha \xf6nce y\xfcklediyseniz i\xe7e aktarma ad\u0131m\u0131na ge\xe7in."}),"\n",(0,l.jsx)(a.p,{children:"De\u011fi\u015ftirmeniz gereken alanlar a\u015fa\u011f\u0131da yaz\u0131lm\u0131\u015ft\u0131r:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"KEY_NAME"}),": anahtar ad\u0131n\u0131z. Anahtar\u0131n\u0131za bir ad verin."]}),"\n"]}),"\n",(0,l.jsx)(a.admonition,{type:"warning",children:(0,l.jsx)(a.p,{children:"A\u015fa\u011f\u0131daki kodlar\u0131 tek tek girin, \u015fifrenizi belirleyin ve \xe7\u0131kt\u0131lar\u0131 g\xfcvenli bir yerde saklay\u0131n."})}),"\n",(0,l.jsx)(a.h4,{id:"ecdsa-key-olu\u015fturma",children:"ECDSA Key Olu\u015fturma"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator keys create --key-type ecdsa KEY_NAME\n"})}),"\n",(0,l.jsx)(a.h4,{id:"bls-key-olu\u015fturma",children:"BLS Key Olu\u015fturma"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator keys create --key-type bls KEY_NAME\n"})}),"\n",(0,l.jsx)(a.h3,{id:"keyleri-i\u0307\xe7eri-aktarma-import",children:"Keyleri \u0130\xe7eri Aktarma (Import)"}),"\n",(0,l.jsx)(a.p,{children:"De\u011fi\u015ftirmeniz gereken alanlar a\u015fa\u011f\u0131da yaz\u0131lm\u0131\u015ft\u0131r:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"KEY_NAME"}),": anahtar ad\u0131n\u0131z. Anahtar\u0131n\u0131za bir ad verin."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"PRIV_KEY"}),": anahtar\u0131n\u0131z\u0131n \xf6zel anahtar\u0131"]}),"\n"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator keys import --key-type ecdsa KEY_NAME PRIV_KEY\neigenlayer operator keys import --key-type bls KEY_NAME PRIV_KEY\n"})}),"\n",(0,l.jsx)(a.h3,{id:"listing-keys",children:"Listing Keys"}),"\n",(0,l.jsx)(a.p,{children:"Bu, EigenLayer CLI arac\u0131yla olu\u015fturdu\u011funuz anahtarlar\u0131n bir listesini almak i\xe7in kullanabilece\u011finiz komuttur."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator keys list\n"})}),"\n",(0,l.jsx)(a.admonition,{type:"info",children:(0,l.jsx)(a.p,{children:"Ethereum adresinizi kaydedin veya c\xfczdan\u0131n\u0131za aktar\u0131n. Bu c\xfczdana testnet ETH talebinde bulunaca\u011f\u0131z."})}),"\n",(0,l.jsx)(a.h3,{id:"keyleri-d\u0131\u015fa-aktarma",children:"Key'leri D\u0131\u015fa Aktarma"}),"\n",(0,l.jsx)(a.p,{children:"Mevcut anahtarlar\u0131n \xf6zel anahtarlar\u0131n\u0131 g\xf6rmek istiyorsan\u0131z a\u015fa\u011f\u0131daki komutu kullanabilirsiniz. Bu yaln\u0131zca anahtarlar\u0131n\u0131z varsay\u0131lan konumdaysa i\u015fe yarar (~/.eigenlayer/operator_keys)"}),"\n",(0,l.jsx)(a.h4,{id:"export-ecdsa-key",children:"Export ECDSA Key"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator keys export --key-type ecdsa KEY_NAME\n"})}),"\n",(0,l.jsx)(a.h4,{id:"export-bls-key",children:"Export BLS Key"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator keys export --key-type bls KEY_NAME\n"})}),"\n",(0,l.jsx)(a.h2,{id:"hole\u0161ky-eth-edinme",children:"Hole\u0161ky ETH Edinme"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"https://holesky-faucet.pk910.de",children:"PoW Faucet"})," adresinden biraz test ETH temin edin."]}),"\n",(0,l.jsx)(a.h2,{id:"operat\xf6r-kayd\u0131",children:"Operat\xf6r Kayd\u0131"}),"\n",(0,l.jsx)(a.h3,{id:"config-dosyalar\u0131n\u0131-olu\u015fturma",children:"Config Dosyalar\u0131n\u0131 Olu\u015fturma"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator config create\n"})}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"Would you like to populate config files"})," sorusunda \xf6nce ",(0,l.jsx)(a.code,{children:"y"}),"ye, ard\u0131ndan ",(0,l.jsx)(a.code,{children:"enter"}),"'a bas\u0131n."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"Enter your operator address"})," ve ",(0,l.jsx)(a.code,{children:"Enter your earning address"}),"  sorular\u0131na ECDSA anahtar\u0131n\u0131 olu\u015ftururken verilen ",(0,l.jsx)(a.code,{children:"Ethereum adresinizi"})," yaz\u0131n."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"Enter your ETH rpc url:"})," sorusuna \u015funu yaz\u0131n: ",(0,l.jsx)(a.code,{children:"https://ethereum-holesky-rpc.publicnode.com"})]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"In the Enter your ecdsa key path"})," sorusuna, yukar\u0131daki ",(0,l.jsx)(a.code,{children:"eigenlayer operator keys list"})," kodunu girdi\u011finizde \xe7\u0131kt\u0131da belirtilen yolu yaz\u0131n."]}),"\n"]}),"\n",(0,l.jsx)(a.h4,{id:"metadatajson-dosyas\u0131-olu\u015fturma",children:"metadata.json Dosyas\u0131 Olu\u015fturma"}),"\n",(0,l.jsx)(a.p,{children:"A\u015fa\u011f\u0131daki kodlarla bir metadata.json dosyas\u0131 olu\u015fturun ve bu dosyay\u0131 github'a veya siteniz varsa herkesin eri\u015febilece\u011fi bir yere y\xfckleyin. Bunun i\xe7in github hesab\u0131n\u0131z\u0131 kullanabilirsiniz."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'{\n  "name": "OPERATOR_ADINIZ",\n  "website": "WEBSITE_ADRESINIZ",\n  "description": "TANIM_SLOGAN_VB",\n  "logo": "LOGO_LINKINIZ",\n  "twitter": "WITTER_ADRESINIZ"\n}\n'})}),"\n",(0,l.jsx)(a.h4,{id:"operatoryaml-dosyas\u0131n\u0131n-d\xfczenlenmesi",children:"operator.yaml Dosyas\u0131n\u0131n D\xfczenlenmesi"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"nano operator.yaml\n"})}),"\n",(0,l.jsx)(a.p,{children:"Bu dosyada sadece a\u015fa\u011f\u0131daki b\xf6l\xfcm\xfc d\xfczenliyoruz."}),"\n",(0,l.jsxs)(a.p,{children:["Yukar\u0131da olu\u015fturdu\u011fumuz ",(0,l.jsx)(a.code,{children:"metadata.json dosyas\u0131na olan ba\u011flant\u0131y\u0131"})," ekliyoruz."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'.\n.\n.\nmetadata_url: "https://your-address.com/metadata.json"\n.\n.\n.\n'})}),"\n",(0,l.jsx)(a.h3,{id:"kay\u0131t",children:"Kay\u0131t"}),"\n",(0,l.jsx)(a.admonition,{type:"warning",children:(0,l.jsx)(a.p,{children:"SONRAK\u0130 ADIMA GE\xc7MEDEN \xd6NCE C\xdcZDANINIZDA ETH OLDU\u011eUNDAN EM\u0130N OLUN."})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator register operator.yaml\n"})}),"\n",(0,l.jsxs)(a.p,{children:["Bu kodu girdikten sonra biraz bekliyoruz. \u0130\u015flem ba\u015far\u0131l\u0131 oldu\u011funda bize TX Hash id verecektir. Bunu ",(0,l.jsx)(a.a,{href:"https://holesky.etherscan.io",children:"explorer"}),"'da kontrol edebilirsiniz."]}),"\n",(0,l.jsxs)(a.p,{children:["Bir s\xfcre sonra operat\xf6r\xfcn\xfcz ",(0,l.jsx)(a.a,{href:"https://holesky.eigenlayer.xyz/operator",children:"bu adreste"})," adresinde g\xf6r\xfcnmeye ba\u015flayacakt\u0131r."]}),"\n",(0,l.jsx)(a.h2,{id:"kay\u0131t-durumunu-kontrol-etme",children:"Kay\u0131t Durumunu Kontrol Etme"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator status operator.yaml\n"})}),"\n",(0,l.jsx)(a.h2,{id:"metadata-g\xfcncellemeleri",children:"Metadata G\xfcncellemeleri"}),"\n",(0,l.jsx)(a.p,{children:"Operat\xf6r bilgilerinizde de\u011fi\u015fiklik yapmak i\xe7in metadata.json dosyan\u0131z\u0131 g\xfcncellerseniz. Bu g\xfcncellemeyi a\u011f \xfczerinde a\u015fa\u011f\u0131daki kodla ger\xe7ekle\u015ftirin."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:"eigenlayer operator update operator.yaml\n"})})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},7218:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/EigenLayer-Service-Cover-6db45b40f02a21b64896597432ad1e3a.jpg"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>t});var r=n(96540);const l={},i=r.createContext(l);function s(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);