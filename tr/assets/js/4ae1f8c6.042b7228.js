"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1441],{6397:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(5893),l=i(1151);const r={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Uptick-Service-Cover.jpg",keywords:["uptick","network","NFT","web3","kurulum","snapshot","statesync","g\xfcncelleme"]},t="Kurulum",s={id:"Mainnet/Cosmos-Ecosystem/uptick-network/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/uptick-network/installation.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/uptick-network",slug:"/Mainnet/Cosmos-Ecosystem/uptick-network/installation",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/uptick-network/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/uptick-network/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/Uptick-Service-Cover.jpg",keywords:["uptick","network","NFT","web3","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Uptick Network",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/uptick-network/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/uptick-network/snapshot"}},o={image:i(9536).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"Uptick&#39;in Kurulmas\u0131",id:"uptickin-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$UPTICK_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$UPTICK_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,a.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export UPTICK_NODENAME=$UPTICK_NODENAME"  >> $HOME/.bash_profile\necho "export UPTICK_WALLET=$UPTICK_WALLET" >> $HOME/.bash_profile\necho "export UPTICK_PORT=11" >> $HOME/.bash_profile\necho "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,a.jsxs)(n.p,{children:["Node (",(0,a.jsx)(n.code,{children:"UPTICK_NODENAME"}),") ve C\xfczdan (",(0,a.jsx)(n.code,{children:"UPTICK_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,a.jsx)(n.code,{children:"UPTICK_PORT"}),") da ",(0,a.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export UPTICK_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export UPTICK_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export UPTICK_PORT=16" >> $HOME/.bash_profile\necho "export UPTICK_CHAIN_ID=acre_9052-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"uptickin-kurulmas\u0131",children:"Uptick'in Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/UptickNetwork/uptick.git\ncd uptick\ngit checkout v0.2.17\nmake install\nuptickd version\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The version output will be ",(0,a.jsx)(n.code,{children:"v1.2.0"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'uptickd config keyring-backend test\nuptickd config chain-id $UPTICK_CHAIN_ID\nuptickd init --chain-id $UPTICK_CHAIN_ID $UPTICK_NODENAME\n\n# Copying the Genesis File\nwget  -O $HOME/.uptickd/config/genesis.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.25auptick"|g\' $HOME/.uptickd/config/app.toml\n\n# Closing Indexer-Optional\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.uptickd/config/config.toml\n\n# Set up SEED and PEERS\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.uptickd/config/config.toml\n\n# Enabling Prometheus\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.uptickd/config/config.toml\n\n# Set up Pruning \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.uptickd/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.uptickd/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.uptickd/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.uptickd/config/app.toml\n\n# Set up Ports\nsed -i.bak -e "\ns%:26658%:${UPTICK_PORT}658%g;\ns%:26657%:${UPTICK_PORT}657%g;\ns%:6060%:${UPTICK_PORT}060%g;\ns%:26656%:${UPTICK_PORT}656%g;\ns%:26660%:${UPTICK_PORT}660%g\n" $HOME/.uptickd/config/config.toml\nsed -i.bak -e "\ns%:1317%:${UPTICK_PORT}317%g; \ns%:8080%:${UPTICK_PORT}080%g; \ns%:9090%:${UPTICK_PORT}090%g; \ns%:9091%:${UPTICK_PORT}091%g\n" $HOME/.empowerchain/config/app.toml\nsed -i.bak -e "s%:26657%:${UPTICK_PORT}657%g" $HOME/.uptickd/config/client.toml\n\n# Adding External Address\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${UPTICK_PORT}656\\"|g" ~/.uptickd/config/config.toml > ~/.uptickd/config/config.toml.tmp\nmv ~/.uptickd/config/config.toml.tmp  ~/.uptickd/config/config.toml\n\n# Creating the Service File\ntee /etc/systemd/system/uptickd.service > /dev/null << EOF\n[Unit]\nDescription=Acred Node\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which uptickd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable uptickd\n"})}),"\n",(0,a.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u uptickd -f -o cat\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,a.jsx)(n.strong,{children:"AFTER THIS STAGE, WE EXPECT OUR NODE TO SYNC."})]}),"\n",(0,a.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"uptickd status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,a.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$UPTICK_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"uptickd keys add $UPTICK_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"uptickd keys add $UPTICK_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,a.jsx)(n.p,{children:"Here we add our wallet and valve information to the variable."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"UPTICK_WALLET_ADDRESS=$(uptickd keys show $UPTICK_WALLET -a)\nUPTICK_VALOPER_ADDRESS=$(uptickd keys show $UPTICK_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export UPTICK_WALLET_ADDRESS='${UPTICK_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export UPTICK_VALOPER_ADDRESS='${UPTICK_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"uptickd query bank balances $UPTICK_WALLET_ADDRESS\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\ud83d\udd34 ",(0,a.jsx)(n.strong,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})]}),"\n",(0,a.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"}),"  burada ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"}),"  ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'uptickd tx staking create-validator \\\n--amount=490000000000000000000auptick \\\n--pubkey=$(uptickd tendermint show-validator) \\\n--moniker=$UPTICK_NODENAME \\\n--chain-id=$UPTICK_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25auptick \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$UPTICK_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,a.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"systemctl stop uptickd && \\\nsystemctl disable uptickd && \\\nrm /etc/systemd/system/uptickd.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .uptickd uptick && \\\nrm -rf $(which uptickd)\nsed -i '/UPTICK_/d' ~/.bash_profile\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u200b"})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9536:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/Uptick-Service-Cover-52de10042a2a975398ad1bb388f70f51.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>t});var a=i(7294);const l={},r=a.createContext(l);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);