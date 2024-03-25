"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6522],{4495:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var r=a(5893),i=a(1151);const l={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Warden-Service-Cover.jpg",keywords:["warden","protocol","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",d={id:"Testnet/Cosmos-Ecosystem/warden/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/warden/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/warden",slug:"/Testnet/Cosmos-Ecosystem/warden/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/warden/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/warden/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Warden-Service-Cover.jpg",keywords:["warden","protocol","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Warden Protocol",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/warden/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/warden/snapshot"}},o={image:a(7589).Z},t=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"Warden Protocol&#39;\xfcn Kurulmas\u0131",id:"warden-protocol\xfcn-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,r.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,r.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,r.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$WARDEN_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$WARDEN_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,r.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,r.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo "export WARDEN_NODENAME=$WARDEN_NODENAME"  >> $HOME/.bash_profile\necho "export WARDEN_WALLET=$WARDEN_WALLET" >> $HOME/.bash_profile\necho "export WARDEN_PORT=11" >> $HOME/.bash_profile\necho "export WARDEN_CHAIN_ID=alfama" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,r.jsxs)(n.p,{children:["Node (",(0,r.jsx)(n.code,{children:"WARDEN_NODENAME"}),") ve C\xfczdan (",(0,r.jsx)(n.code,{children:"WARDEN_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,r.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,r.jsx)(n.code,{children:"WARDEN_PORT"}),") da ",(0,r.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo "export WARDEN_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export WARDEN_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export WARDEN_PORT=16" >> $HOME/.bash_profile\necho "export WARDEN_CHAIN_ID=alfama" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,r.jsx)(n.h2,{id:"warden-protocol\xfcn-kurulmas\u0131",children:"Warden Protocol'\xfcn Kurulmas\u0131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd $HOME\nmkdir -p $HOME/go/bin/\ngit clone https://github.com/warden-protocol/wardenprotocol\ncd  wardenprotocol\ngit checkout v0.1.0\n\n# Build binary\ncd  warden/cmd/wardend\ngo build\nmv wardend $HOME/go/bin\n"})}),"\n",(0,r.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'wardend config chain-id $WARDEN_CHAIN_ID\nwardend config keyring-backend test\nwardend init --chain-id $WARDEN_CHAIN_ID $WARDEN_NODENAME\n\n# Genesis ve addrbook Dosyalar\u0131n\u0131 Kopyalama\nwget https://raw.githubusercontent.com/warden-protocol/networks/main/testnet-alfama/genesis.json -O $HOME/.warden/config/genesis.json\nwget https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/warden/files/addrbook.json -O $HOME/.warden/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005uward"|g\' $HOME/.warden/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.warden/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nSEEDS=""\nPEERS="6a8de92a3bb422c10f764fe8b0ab32e1e334d0bd@sentry-1.alfama.wardenprotocol.org:26656,7560460b016ee0867cae5642adace5d011c6c0ae@sentry-2.alfama.wardenprotocol.org:26656,24ad598e2f3fc82630554d98418d26cc3edf28b9@sentry-3.alfama.wardenprotocol.org:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.warden/config/config.toml\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.warden/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.warden/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.warden/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.warden/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.warden/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${WARDEN_PORT}658%g;\ns%:26657%:${WARDEN_PORT}657%g;\ns%:6060%:${WARDEN_PORT}060%g;\ns%:26656%:${WARDEN_PORT}656%g;\ns%:26660%:${WARDEN_PORT}660%g\n" $HOME/.warden/config/config.toml\nsed -i.bak -e "\ns%:1317%:${WARDEN_PORT}317%g; \ns%:8080%:${WARDEN_PORT}080%g; \ns%:9090%:${WARDEN_PORT}090%g; \ns%:9091%:${WARDEN_PORT}091%g\n" $HOME/.warden/config/app.toml\nsed -i.bak -e "s%:26657%:${WARDEN_PORT}657%g" $HOME/.warden/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${WARDEN_PORT}656\\"|g" ~/.warden/config/config.toml > ~/.warden/config/config.toml.tmp\nmv ~/.warden/config/config.toml.tmp  ~/.warden/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/wardend.service > /dev/null << EOF\n[Unit]\nDescription=SelfChain Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which wardend) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,r.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable wardend\nsystemctl start wardend\n"})}),"\n",(0,r.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"journalctl -u wardend -f -o cat\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,r.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wardend status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,r.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,r.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$WARDEN_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wardend keys add $WARDEN_WALLET\n"})}),"\n",(0,r.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"wardend keys add $WARDEN_WALLET --recover\n"})}),"\n",(0,r.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,r.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"WARDEN_WALLET_ADDRESS=$(wardend keys show $WARDEN_WALLET -a)\nWARDEN_VALOPER_ADDRESS=$(wardend keys show $WARDEN_WALLET --bech val -a)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"echo 'export WARDEN_WALLET_ADDRESS='${WARDEN_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export WARDEN_VALOPER_ADDRESS='${WARDEN_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,r.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"wardend query bank balances $WARDEN_WALLET_ADDRESS\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,r.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identity"}),"  burada ",(0,r.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,r.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"details"})," ",(0,r.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"website"}),"  ",(0,r.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'```shell \nwardend tx staking create-validator \\\n--amount=1000000uward \\\n--pubkey=$(wardend tendermint show-validator) \\\n--moniker=$WARDEN_NODENAME \\\n--chain-id=$WARDEN_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25uward \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$WARDEN_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\udc06" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,r.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl stop wardend && \\\nsystemctl disable wardend && \\\nrm /etc/systemd/system/wardend.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .warden wardenprotocol && \\\nrm -rf $(which wardend)\nsed -i '/WARDEN_/d' ~/.bash_profile\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7589:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/Warden-Service-Cover-3888d4ddeb0678f967fe8bacb9d53c03.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>s});var r=a(7294);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);