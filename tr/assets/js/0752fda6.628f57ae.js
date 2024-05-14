"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4452],{8769:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var a=i(5893),l=i(1151);const r={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",t={id:"Testnet/Cosmos-Ecosystem/initia/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/initia/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/initia",slug:"/Testnet/Cosmos-Ecosystem/initia/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/initia/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/initia/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Initia-Service-Cover.jpg",keywords:["initia","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Initia",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/initia/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/initia/snapshot"}},o={image:i(1668).Z},d=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"Initia Protocol&#39;\xfcn Kurulmas\u0131",id:"initia-protocol\xfcn-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"Musluk",id:"musluk",level:3},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"validator.json Dosyas\u0131 Olu\u015fturma",id:"validatorjson-dosyas\u0131-olu\u015fturma",level:3},{value:"json Dosyas\u0131yla Validator Olu\u015fturma",id:"json-dosyas\u0131yla-validator-olu\u015fturma",level:3},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,a.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$INITIA_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$INITIA_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,a.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export INITIA_NODENAME=$INITIA_NODENAME"  >> $HOME/.bash_profile\necho "export INITIA_WALLET=$INITIA_WALLET" >> $HOME/.bash_profile\necho "export INITIA_PORT=11" >> $HOME/.bash_profile\necho "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,a.jsxs)(n.p,{children:["Node (",(0,a.jsx)(n.code,{children:"INITIA_NODENAME"}),") ve C\xfczdan (",(0,a.jsx)(n.code,{children:"INITIA_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,a.jsx)(n.code,{children:"INITIA_PORT"}),") da ",(0,a.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export INITIA_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export INITIA_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export INITIA_PORT=16" >> $HOME/.bash_profile\necho "export INITIA_CHAIN_ID=initiation-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"initia-protocol\xfcn-kurulmas\u0131",children:"Initia Protocol'\xfcn Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $HOME\ngit clone https://github.com/initia-labs/initia.git\ncd initia\ngit checkout v0.2.12\nmake install\n"})}),"\n",(0,a.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'initiad config set client chain-id $INITIA_CHAIN_ID\ninitiad config set client keyring-backend test\ninitiad init --chain-id $INITIA_CHAIN_ID $INITIA_NODENAME\n\n# Genesis ve addrbook Dosyalar\u0131n\u0131 Kopyalama\nwget https://testnet.anatolianteam.com/initia/genesis.json -O $HOME/.initia/config/genesis.json\nwget https://testnet.anatolianteam.com/initia/addrbook.json -O $HOME/.initia/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.005uusdc"|g\' $HOME/.initia/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.initia/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nSEEDS=""\nPEERS="f9a3198644399763fe636c8dd42dd12d93f62279@85.10.200.82:26656,e1c61de5d437f35a715ac94b88ec62c482edc166@172.20.24.234:26656,c717995fd56dcf0056ed835e489788af4ffd8fe8@172.20.215.46:26656,4b477a8898fe3d160bfc87a3b7a2f293b8292d48@172.20.28.223:26656,d4af4ec2657c9756c87aa5b49d2d724b45f96d8b@188.165.228.73:26656,846bef6b31b20b075ff5b574d9733163b9b1958c@62.169.21.90:26656,22df256e71ba01bba80038c527a4f1103ad129d9@65.108.251.125:26656,a5d805241da9799d376b7e8a04e2cae22c323c56@10.0.102.171:26656,85abfb1a10ef88d37277e7462830890ff2f7a1ac@88.99.254.62:24656,999547a3b70a1b6a3d98fc13d4f9891354141166@10.0.101.171:26656,7cf7bf3e43f974b1c8d3a15531518d3ce8fb35de@31.220.75.164:26656,eb2e7095f86b24e8d5d286360c34e060a8db6334@188.40.85.207:12756,ee528080741055cb7067f3e0bdda9badac834fc5@81.0.249.86:11256,694dd68a81d0130f2c1af9f2b2891b5c9603cb7f@10.0.103.153:6656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.initia/config/config.toml\n\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.initia/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.initia/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.initia/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.initia/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.initia/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${INITIA_PORT}658%g;\ns%:26657%:${INITIA_PORT}657%g;\ns%:6060%:${INITIA_PORT}060%g;\ns%:26656%:${INITIA_PORT}656%g;\ns%:26660%:${INITIA_PORT}660%g\n" $HOME/.initia/config/config.toml\nsed -i.bak -e "\ns%:1317%:${INITIA_PORT}317%g; \ns%:8080%:${INITIA_PORT}080%g; \ns%:9090%:${INITIA_PORT}090%g; \ns%:9091%:${INITIA_PORT}091%g\n" $HOME/.initia/config/app.toml\nsed -i.bak -e "s%:26657%:${INITIA_PORT}657%g" $HOME/.initia/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${INITIA_PORT}656\\"|g" ~/.initia/config/config.toml > ~/.initia/config/config.toml.tmp\nmv ~/.initia/config/config.toml.tmp  ~/.initia/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/initiad.service > /dev/null << EOF\n[Unit]\nDescription=SelfChain Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which initiad) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable initiad\nsystemctl start initiad\n"})}),"\n",(0,a.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u initiad -f -o cat\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,a.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad status 2>&1 | jq .sync_info\n"})}),"\n",(0,a.jsx)(n.p,{children:"ya da"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad status 2>&1 | jq -r .sync_info.catching_up\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,a.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$INITIA_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad keys add $INITIA_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad keys add $INITIA_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,a.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"INITIA_WALLET_ADDRESS=$(initiad keys show $INITIA_WALLET -a)\nINITIA_VALOPER_ADDRESS=$(initiad keys show $INITIA_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export INITIA_WALLET_ADDRESS='${INITIA_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export INITIA_VALOPER_ADDRESS='${INITIA_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"musluk",children:"Musluk"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl --data \'{"address": "$INITIA_WALLET_ADDRESS"}\' https://faucet.buenavista.initiaprotocol.org\n'})}),"\n",(0,a.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"initiad query bank balances $INITIA_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,a.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"}),"  burada ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"}),"  ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"validatorjson-dosyas\u0131-olu\u015fturma",children:"validator.json Dosyas\u0131 Olu\u015fturma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cd $HOME\necho "{\\"pubkey\\":{\\"@type\\":\\"/cosmos.crypto.ed25519.PubKey\\",\\"key\\":\\"$(initiad comet show-validator | grep -Po \'\\"key\\":\\s*\\"\\K[^"]*\')\\"},\n    \\"amount\\": \\"9900000uusdc\\",\n    \\"moniker\\": \\"$INITIA_NODENAME\\",\n    \\"commission-rate\\": \\"0.1\\",\n    \\"commission-max-rate\\": \\"0.2\\",\n    \\"commission-max-change-rate\\": \\"0.01\\",\n    \\"min-self-delegation\\": \\"1\\",\n    \\"details\\": \\"Always forward with the Anatolian Team \ud83d\udc06\\",\n    \\"security\\": \\"xxxxxxx@gmail.com\\",\n    \\"website\\": \\"https://anatolianteam.com\\",\n    \\"identity\\": \\"XXXX1111XXXX1111\\"\n}" > validator.json\n'})}),"\n",(0,a.jsx)(n.h3,{id:"json-dosyas\u0131yla-validator-olu\u015fturma",children:"json Dosyas\u0131yla Validator Olu\u015fturma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"initiad tx staking create-validator $HOME/validator.json \\\n    --chain-id=$INITIA_CHAIN_ID \\\n    --gas-prices=0.25uusdc \\\n    --gas-adjustment=1.5 \\\n    --gas=auto \\\n    --from=$INITIA_WALLET \\\n    --yes\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop initiad && \\\nsystemctl disable initiad && \\\nrm /etc/systemd/system/initiad.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .initia initia && \\\nrm -rf $(which initiad)\nsed -i '/INITIA_/d' ~/.bash_profile\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1668:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/Initia-Service-Cover-0bd0c43fb15ae906c485cde9d923e265.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>s});var a=i(7294);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);