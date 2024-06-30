"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5660],{92361:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(85893),l=i(11151);const r={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",o={id:"Testnet/Cosmos-Ecosystem/airchains/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/airchains/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/airchains",slug:"/Testnet/Cosmos-Ecosystem/airchains/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/airchains/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/airchains/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Airchains-Service-Cover.jpg",keywords:["airchains","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd17 EVMRollapp",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/airchains/EVMRollapp"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/airchains/snapshot"}},t={image:i(45281).Z},c=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"Airchains Kurulmas\u0131",id:"airchains-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"Musluk",id:"musluk",level:3},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"validator.json Dosyas\u0131 Olu\u015fturma",id:"validatorjson-dosyas\u0131-olu\u015fturma",level:3},{value:"json Dosyas\u0131yla Validator Olu\u015fturma",id:"json-dosyas\u0131yla-validator-olu\u015fturma",level:3},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,a.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.22.2\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$AIRCHAINS_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$AIRCHAINS_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,a.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export AIRCHAINS_NODENAME=$AIRCHAINS_NODENAME"  >> $HOME/.bash_profile\necho "export AIRCHAINS_WALLET=$AIRCHAINS_WALLET" >> $HOME/.bash_profile\necho "export AIRCHAINS_PORT=11" >> $HOME/.bash_profile\necho "export AIRCHAINS_CHAIN_ID=junction" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,a.jsxs)(n.p,{children:["Node (",(0,a.jsx)(n.code,{children:"AIRCHAINS_NODENAME"}),") ve C\xfczdan (",(0,a.jsx)(n.code,{children:"AIRCHAINS_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,a.jsx)(n.code,{children:"AIRCHAINS_PORT"}),") da ",(0,a.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export AIRCHAINS_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export AIRCHAINS_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export AIRCHAINS_PORT=16" >> $HOME/.bash_profile\necho "export AIRCHAINS_CHAIN_ID=junction" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"airchains-kurulmas\u0131",children:"Airchains Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $HOME\nwget -O junctiond https://github.com/airchains-network/junction/releases/download/v0.1.0/junctiond\nchmod +x junctiond\nmv junctiond $HOME/go/bin/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'junctiond config set client chain-id $AIRCHAINS_CHAIN_ID\njunctiond config set client keyring-backend test\njunctiond init --chain-id $AIRCHAINS_CHAIN_ID $AIRCHAINS_NODENAME\n\n# Genesis ve addrbook Dosyalar\u0131n\u0131 Kopyalama\nwget https://testnet.anatolianteam.com/airchains/genesis.json -O $HOME/.junction/config/genesis.json\nwget https://testnet.anatolianteam.com/airchains/addrbook.json -O $HOME/.junction/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|minimum-gas-prices =.*|minimum-gas-prices = "0.001amf"|g\' $HOME/.junction/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.junction/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nSEEDS=""\nPEERS="e78a440c57576f3743e6aa9db00438462980927e@5.161.199.115:26656,61e609631e8be6e04c43ed3d7bfef23c064dc912@[2a01:4f8:221:26e0::2]:43456,f786dcc80601ddd33ba98c609795083ba418d740@158.220.119.11:43456,0b1159b05e940a611b275fe0006070439e5b6e69@[2a03:cfc0:8000:13::b910:277f]:13756,c8f6b1a795a6d9cd2ec39faf277163a9711fc81b@38.242.194.19:43456,552d2a5c3d9889444f123d740a20237c89711109@109.199.96.143:43456,cc27f4e54a78b950adaf46e5413f92f5d53d2212@209.126.86.186:43456,f5b69a02abeb3340ccd266f049ed6aabc7c0ea88@94.72.114.150:43456,db38d672f66df4de01b26e1fa97e1632fbfb1bdf@173.249.57.190:26656,d9a5e20668955bdd5c2fc28cffd6f06e23794638@[2a01:4f8:10a:3a51::2]:43456"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.junction/config/config.toml\n\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.junction/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.junction/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.junction/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.junction/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.junction/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${AIRCHAINS_PORT}658%g;\ns%:26657%:${AIRCHAINS_PORT}657%g;\ns%:6060%:${AIRCHAINS_PORT}060%g;\ns%:26656%:${AIRCHAINS_PORT}656%g;\ns%:26660%:${AIRCHAINS_PORT}660%g\n" $HOME/.junction/config/config.toml\nsed -i.bak -e "\ns%:8545%:${AIRCHAINS_PORT}545%g;\ns%:8546%:${AIRCHAINS_PORT}546%g;\ns%:6065%:${AIRCHAINS_PORT}065%g;\ns%:1317%:${AIRCHAINS_PORT}317%g; \ns%:8080%:${AIRCHAINS_PORT}080%g; \ns%:9090%:${AIRCHAINS_PORT}090%g; \ns%:9091%:${AIRCHAINS_PORT}091%g\n" $HOME/.junction/config/app.toml\nsed -i.bak -e "s%:26657%:${AIRCHAINS_PORT}657%g" $HOME/.junction/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${AIRCHAINS_PORT}656\\"|g" ~/.junction/config/config.toml > ~/.junction/config/config.toml.tmp\nmv ~/.junction/config/config.toml.tmp  ~/.junction/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/junctiond.service > /dev/null << EOF\n[Unit]\nDescription=Airchains Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which junctiond) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable junctiond\nsystemctl start junctiond\n"})}),"\n",(0,a.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u junctiond -f -o cat\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,a.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond status 2>&1 | jq .sync_info\n"})}),"\n",(0,a.jsx)(n.p,{children:"ya da"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond status 2>&1 | jq -r .sync_info.catching_up\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,a.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$AIRCHAINS_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond keys add $AIRCHAINS_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond keys add $AIRCHAINS_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,a.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"AIRCHAINS_WALLET_ADDRESS=$(junctiond keys show $AIRCHAINS_WALLET -a)\nAIRCHAINS_VALOPER_ADDRESS=$(junctiond keys show $AIRCHAINS_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export AIRCHAINS_WALLET_ADDRESS='${AIRCHAINS_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export AIRCHAINS_VALOPER_ADDRESS='${AIRCHAINS_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"musluk",children:"Musluk"}),"\n",(0,a.jsxs)(n.p,{children:["C\xfczdan adresinizi ",(0,a.jsx)(n.a,{href:"https://discord.gg/wuT88TCQsw",children:"Discord"})," sunucusundaki ",(0,a.jsx)(n.code,{children:"#\ud83d\udeb0\u2758switchyard-faucet-bot"})," kanal\u0131na g\xf6ndererek token isteyin."]}),"\n",(0,a.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"junctiond query bank balances $AIRCHAINS_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,a.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"}),"  burada ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"}),"  ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"validatorjson-dosyas\u0131-olu\u015fturma",children:"validator.json Dosyas\u0131 Olu\u015fturma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'cd $HOME\necho "{\\"pubkey\\":{\\"@type\\":\\"/cosmos.crypto.ed25519.PubKey\\",\\"key\\":\\"$(wardend comet show-validator | grep -Po \'\\"key\\":\\s*\\"\\K[^"]*\')\\"},\n    \\"amount\\": \\"1700000amf\\",\n    \\"moniker\\": \\"$AIRCHAINS_NODENAME\\",\n    \\"commission-rate\\": \\"0.1\\",\n    \\"commission-max-rate\\": \\"0.2\\",\n    \\"commission-max-change-rate\\": \\"0.01\\",\n    \\"min-self-delegation\\": \\"1\\",\n    \\"details\\": \\"Always forward with the Anatolian Team \ud83d\udc06\\",\n    \\"security\\": \\"xxxxxxx@gmail.com\\",\n    \\"website\\": \\"https://anatolianteam.com\\",\n    \\"identity\\": \\"XXXX1111XXXX1111\\"\n}" > validator.json\n'})}),"\n",(0,a.jsx)(n.h3,{id:"json-dosyas\u0131yla-validator-olu\u015fturma",children:"json Dosyas\u0131yla Validator Olu\u015fturma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"junctiond tx staking create-validator validator.json \\\n    --from $AIRCHAINS_WALLET \\\n    --chain-id $AIRCHAINS_CHAIN_ID \\\n    --fees 200amf \\\n    --yes\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop junctiond && \\\nsystemctl disable junctiond && \\\nrm /etc/systemd/system/junctiond.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .junction && \\\nrm -rf $(which junctiond)\nsed -i '/AIRCHAINS_/d' ~/.bash_profile\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},45281:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/Airchains-Service-Cover-783f119956b4ba5b7a4272b8e72ace24.jpg"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var a=i(67294);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);