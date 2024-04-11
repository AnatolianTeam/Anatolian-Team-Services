"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[9771],{1014:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var i=a(5893),r=a(1151);const l={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Mantra-Service-Cover.jpg",keywords:["mantra","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",t={id:"Testnet/Cosmos-Ecosystem/mantra/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/mantra",slug:"/Testnet/Cosmos-Ecosystem/mantra/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/mantra/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Mantra-Service-Cover.jpg",keywords:["mantra","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Mantra Chain",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/mantra/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/mantra/snapshot"}},o={image:a(1078).Z},c=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"Mantra&#39;n\u0131n Kurulmas\u0131",id:"mantran\u0131n-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,i.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$MANTRA_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$MANTRA_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,i.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export MANTRA_NODENAME=$MANTRA_NODENAME"  >> $HOME/.bash_profile\necho "export MANTRA_WALLET=$MANTRA_WALLET" >> $HOME/.bash_profile\necho "export MANTRA_PORT=11" >> $HOME/.bash_profile\necho "export MANTRA_CHAIN_ID=bbn-test-3" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsxs)(n.p,{children:["Node (",(0,i.jsx)(n.code,{children:"MANTRA_NODENAME"}),") ve C\xfczdan (",(0,i.jsx)(n.code,{children:"MANTRA_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,i.jsx)(n.code,{children:"MANTRA_PORT"}),") da ",(0,i.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export MANTRA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export MANTRA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export MANTRA_PORT=16" >> $HOME/.bash_profile\necho "export MANTRA_CHAIN_ID=bbn-test-2" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mantran\u0131n-kurulmas\u0131",children:"Mantra'n\u0131n Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd $HOME\nwget -O /usr/lib/libwasmvm.x86_64.so https://github.com/CosmWasm/wasmvm/releases/download/v1.3.0/libwasmvm.x86_64.so\nwget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/mantra/files/mantrachaind-linux-amd64.zip\nunzip mantrachaind-linux-amd64.zip\nrm mantrachaind-linux-amd64.zip\nmv mantrachaind $HOME/go/bin\nmantrachaind version\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Versiyon \xe7\u0131kt\u0131s\u0131 ",(0,i.jsx)(n.code,{children:"1.0.0"})," olacak."]}),"\n",(0,i.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'mantrachaind config keyring-backend test\nmantrachaind config chain-id $MANTRA_CHAIN_ID\nmantrachaind init --chain-id $MANTRA_CHAIN_ID $MANTRA_NODENAME\n\n# Genesis ve addrbook Dosyalar\u0131n\u0131 Kopyalama \ncurl -L https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/mantra/files/genesis.json > $HOME/.mantrachain/config/genesis.json\ncurl -L https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/mantra/files/addrbook.json > $HOME/.mantrachain/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.001ubbn"|g\' $HOME/.mantrachain/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.mantrachain/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nSEEDS="69fa5f7927f2b013f152b6dfc56324156feb1973@34.172.80.207:26656"\nPEERS="182a37a556ff0b6733fe58020e7746de3292492d@35.222.198.102:26656,64691a4202c1ad29a416b21ce21bfc9659783406@34.136.169.18:26656"\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" $HOME/.mantrachain/config/config.toml\nsed -i.bak -e "s/^seeds =.*/seeds = \\"$SEEDS\\"/" $HOME/.mantrachain/config/config.toml\nsed -i -e "s/^filter_peers *=.*/filter_peers = \\"true\\"/" $HOME/.mantrachain/config/config.toml\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.mantrachain/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.mantrachain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.mantrachain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.mantrachain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.mantrachain/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${MANTRA_PORT}658%g;\ns%:26657%:${MANTRA_PORT}657%g;\ns%:6060%:${MANTRA_PORT}060%g;\ns%:26656%:${MANTRA_PORT}656%g;\ns%:26660%:${MANTRA_PORT}660%g\n" $HOME/.mantrachain/config/config.toml\nsed -i.bak -e "\ns%:1317%:${MANTRA_PORT}317%g; \ns%:8080%:${MANTRA_PORT}080%g; \ns%:9090%:${MANTRA_PORT}090%g; \ns%:9091%:${MANTRA_PORT}091%g\n" $HOME/.mantrachain/config/app.toml\nsed -i.bak -e "s%:26657%:${MANTRA_PORT}657%g" $HOME/.mantrachain/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${MANTRA_PORT}656\\"|g" ~/.mantrachain/config/config.toml > ~/.mantrachain/config/config.toml.tmp\nmv ~/.mantrachain/config/config.toml.tmp  ~/.mantrachain/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/mantrachaind.service > /dev/null << EOF\n[Unit]\nDescription=Mantra Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which mantrachaind) start\nRestart=on-failure\nRestartSec=10\nLimitNOFILE=10000\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable mantrachaind\nsystemctl start mantrachaind\n"})}),"\n",(0,i.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u mantrachaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,i.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mantrachaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,i.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$MANTRA_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mantrachaind keys add $MANTRA_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mantrachaind keys add $MANTRA_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,i.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"MANTRA_WALLET_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET -a)\nMANTRA_VALOPER_ADDRESS=$(mantrachaind keys show $MANTRA_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export MANTRA_WALLET_ADDRESS='${MANTRA_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export MANTRA_VALOPER_ADDRESS='${MANTRA_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mantrachaind query bank balances $MANTRA_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,i.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirttilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"}),"  burada ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"}),"  ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'mantrachaind tx staking create-validator \\\n--amount=1000000ubbn \\\n--pubkey=$(mantrachaind tendermint show-validator) \\\n--moniker=$MANTRA_NODENAME \\\n--chain-id=$MANTRA_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.1ubbn \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$MANTRA_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"systemctl stop mantrachaind && \\\nsystemctl disable mantrachaind && \\\nrm /etc/systemd/system/mantrachaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm .mantrachain babylon -rf && \\\nrm $(which mantrachaind) -rf\nsed -i '/MANTRA_/d' ~/.bash_profile\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u200b"})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1078:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/Mantra-Service-Cover-0e29d7483f7168b9411030f2bf576c42.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>s});var i=a(7294);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);