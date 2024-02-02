"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1396],{6969:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var r=a(5893),i=a(1151);const l={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Arable-Service-Cover.jpg",keywords:["arable","protocol","network","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",t={id:"Mainnet/Cosmos-Ecosystem/arable-protocol/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/arable-protocol/installation.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/arable-protocol",slug:"/Mainnet/Cosmos-Ecosystem/arable-protocol/installation",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/arable-protocol/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Arable-Service-Cover.jpg",keywords:["arable","protocol","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Arable Protocol",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/arable-protocol/snapshot"}},o={image:a(5388).Z},d=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"Arable&#39;\u0131n Kurulmas\u0131",id:"arable\u0131n-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,r.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,r.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,r.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$ACRE_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$ACRE_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,r.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,r.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo "export ACRE_NODENAME=$ACRE_NODENAME"  >> $HOME/.bash_profile\necho "export ACRE_WALLET=$ACRE_WALLET" >> $HOME/.bash_profile\necho "export ACRE_PORT=11" >> $HOME/.bash_profile\necho "export ACRE_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,r.jsxs)(n.p,{children:["Node (",(0,r.jsx)(n.code,{children:"ACRE_NODENAME"}),") ve C\xfczdan (",(0,r.jsx)(n.code,{children:"ACRE_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,r.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,r.jsx)(n.code,{children:"ACRE_PORT"}),") da ",(0,r.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo "export ACRE_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export ACRE_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export ACRE_PORT=16" >> $HOME/.bash_profile\necho "export ACRE_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,r.jsx)(n.h2,{id:"arable\u0131n-kurulmas\u0131",children:"Arable'\u0131n Kurulmas\u0131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/ArableProtocol/acrechain.git\ncd acrechain\ngit checkout v1.2.0\nmake install\ncd\nacred version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The version output will be ",(0,r.jsx)(n.code,{children:"v1.2.0"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'acred config keyring-backend test\nacred config chain-id $ACRE_CHAIN_ID\nacred init --chain-id $ACRE_CHAIN_ID $ACRE_NODENAME\n\n# Copying the Genesis File\nwget  -O $HOME/.acred/config/genesis.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25aacre"|g\' $HOME/.acred/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.acred/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.babylond/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.acred/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.acred/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.acred/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.acred/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.acred/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "s%^proxy_app = \\"tcp://127.0.0.1:26658\\"%proxy_app = \\"tcp://127.0.0.1:${ACRE_PORT}658\\"%; s%^laddr = \\"tcp://127.0.0.1:26657\\"%laddr = \\"tcp://127.0.0.1:${ACRE_PORT}657\\"%; s%^pprof_laddr = \\"localhost:6060\\"%pprof_laddr = \\"localhost:${ACRE_PORT}060\\"%; s%^laddr = \\"tcp://0.0.0.0:26656\\"%laddr = \\"tcp://0.0.0.0:${ACRE_PORT}656\\"%; s%^prometheus_listen_addr = \\":26660\\"%prometheus_listen_addr = \\":${ACRE_PORT}660\\"%" $HOME/.acred/config/config.toml\nsed -i.bak -e "s%^address = \\"tcp://0.0.0.0:1317\\"%address = \\"tcp://0.0.0.0:${ACRE_PORT}317\\"%; s%^address = \\":8080\\"%address = \\":${ACRE_PORT}080\\"%; s%^address = \\"0.0.0.0:8545\\"%address = \\"0.0.0.0:${ACRE_PORT}545\\"%; s%^ws-address = \\"0.0.0.0:8546\\"%ws-address = \\"0.0.0.0:${ACRE_PORT}546\\"%; s%^address = \\"0.0.0.0:9090\\"%address = \\"0.0.0.0:${ACRE_PORT}090\\"%; s%^address = \\"0.0.0.0:9091\\"%address = \\"0.0.0.0:${ACRE_PORT}091\\"%" $HOME/.acred/config/app.toml\nsed -i.bak -e "s%^node = \\"tcp://localhost:26657\\"%node = \\"tcp://localhost:${ACRE_PORT}657\\"%" $HOME/.acred/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${ACRE_PORT}656\\"|g" ~/.acred/config/config.toml > ~/.acred/config/config.toml.tmp\nmv ~/.acred/config/config.toml.tmp  ~/.acred/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/acred.service > /dev/null << EOF\n[Unit]\nDescription=Acred Node\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which acred) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,r.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable acred\n"})}),"\n",(0,r.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"journalctl -u acred -f -o cat\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,r.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,r.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"acred status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,r.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,r.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$ACRE_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"acred keys add $ACRE_WALLET\n"})}),"\n",(0,r.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"acred keys add $ACRE_WALLET --recover\n"})}),"\n",(0,r.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,r.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ACRE_WALLET_ADDRESS=$(acred keys show $ACRE_WALLET -a)\nACRE_VALOPER_ADDRESS=$(acred keys show $ACRE_WALLET --bech val -a)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"echo 'export ACRE_WALLET_ADDRESS='${ACRE_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export ACRE_VALOPER_ADDRESS='${ACRE_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,r.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"acred query bank balances $ACRE_WALLET_ADDRESS\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,r.jsx)(n.strong,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})]}),"\n",(0,r.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,r.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identity"}),"  burada ",(0,r.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,r.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"details"})," ",(0,r.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"website"}),"  ",(0,r.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'acred tx staking create-validator \\\n--amount=490000000000000000000aacre \\\n--pubkey=$(acred tendermint show-validator) \\\n--moniker=$ACRE_NODENAME \\\n--chain-id=$ACRE_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25aacre \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$ACRE_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,r.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl stop acred && \\\nsystemctl disable acred && \\\nrm /etc/systemd/system/acred.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .acred acrechain && \\\nrm -rf $(which acred)\nsed -i '/ACRE_/d' ~/.bash_profile\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u200b"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5388:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/Arable-Service-Cover-35ade02084184d44625a5f49359242df.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>s});var r=a(7294);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);