"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4772],{4641:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(5893),r=i(1151);const a={title:"\ud83d\udcbe Kurulum",description:"Node installation guide.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/artela/img/Artela-Service-Cover.jpg",keywords:["artela","network","kurulum","snapshot","statesync","g\xfcncelleme"]},l="Kurulum",o={id:"Testnet/Cosmos-Ecosystem/crossfi/installation",title:"\ud83d\udcbe Kurulum",description:"Node installation guide.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crossfi/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/crossfi",slug:"/Testnet/Cosmos-Ecosystem/crossfi/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crossfi/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crossfi/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node installation guide.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/artela/img/Artela-Service-Cover.jpg",keywords:["artela","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Cross Finance",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crossfi/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/crossfi/snapshot"}},t={},d=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"CrossFi&#39;nin Kurulmas\u0131",id:"crossfinin-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"EIP-55 Adresini \xd6\u011frenme",id:"eip-55-adresini-\xf6\u011frenme",level:3},{value:"Faucet",id:"faucet",level:4},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,s.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,s.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,s.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$CFI_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$CFI_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,s.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,s.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "export CFI_NODENAME=$CFI_NODENAME"  >> $HOME/.bash_profile\necho "export CFI_WALLET=$CFI_WALLET" >> $HOME/.bash_profile\necho "export CFI_PORT=11" >> $HOME/.bash_profile\necho "export CFI_CHAIN_ID=crossfi-evm-testnet-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,s.jsxs)(n.p,{children:["Node (",(0,s.jsx)(n.code,{children:"CFI_NODENAME"}),") ve C\xfczdan (",(0,s.jsx)(n.code,{children:"CFI_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,s.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,s.jsx)(n.code,{children:"CFI_PORT"}),") da ",(0,s.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "export CFI_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export CFI_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export CFI_PORT=16" >> $HOME/.bash_profile\necho "export CFI_CHAIN_ID=crossfi-evm-testnet-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,s.jsx)(n.h2,{id:"crossfinin-kurulmas\u0131",children:"CrossFi'nin Kurulmas\u0131"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd $HOME\nwget https://github.com/crossfichain/crossfi-node/releases/download/v0.3.0-prebuild3/crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz && tar -xf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz\ntar -xvf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz\nchmod +x $HOME/bin/crossfid\nmv $HOME/bin/crossfid $HOME/go/bin\nrm -rf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz $HOME/bin\ncrossfid version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Versiyon \xe7\u0131kt\u0131s\u0131 ",(0,s.jsx)(n.code,{children:"v0.3.0-prebuild3"})," olacak."]}),"\n",(0,s.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,s.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'crossfid config keyring-backend test\ncrossfid config chain-id $CFI_CHAIN_ID\ncrossfid init --chain-id $CFI_CHAIN_ID $CFI_NODENAME\ngit clone https://github.com/crossfichain/testnet.git\nmv $HOME/testnet/ $HOME/.crossfid/\n\n# Copying the Genesis and addrbook Files\nwget https://raw.githubusercontent.com/crossfichain/testnet/master/config/genesis.json -O $HOME/.crossfid/config/genesis.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "0.02uart"|g\' $HOME/.crossfid/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.crossfid/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nSEEDS=""\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.crossfid/config/config.toml\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.crossfid/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.crossfid/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.crossfid/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.crossfid/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.crossfid/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${CFI_PORT}658%g;\ns%:26657%:${CFI_PORT}657%g;\ns%:6060%:${CFI_PORT}060%g;\ns%:26656%:${CFI_PORT}656%g;\ns%:26660%:${CFI_PORT}660%g\n" $HOME/.crossfid/config/config.toml\nsed -i.bak -e "\ns%:1317%:${CFI_PORT}317%g; \ns%:8080%:${CFI_PORT}080%g; \ns%:9090%:${CFI_PORT}090%g; \ns%:9091%:${CFI_PORT}091%g\n" $HOME/.crossfid/config/app.toml\nsed -i.bak -e "s%:26657%:${CFI_PORT}657%g" $HOME/.crossfid/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${CFI_PORT}656\\"|g" ~/.crossfid/config/config.toml > ~/.crossfid/config/config.toml.tmp\nmv ~/.crossfid/config/config.toml.tmp  ~/.crossfid/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/crossfid.service > /dev/null << EOF\n[Unit]\nDescription=CrossFi Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which crossfid) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,s.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable crossfid\nsystemctl start crossfid\n"})}),"\n",(0,s.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"journalctl -u crossfid -f -o cat\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,s.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,s.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,s.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$CFI_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid keys add $CFI_WALLET\n"})}),"\n",(0,s.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid keys add $CFI_WALLET --recover\n"})}),"\n",(0,s.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,s.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"CFI_WALLET_ADDRESS=$(crossfid keys show $CFI_WALLET -a)\nCFI_VALOPER_ADDRESS=$(crossfid keys show $CFI_WALLET --bech val -a)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"echo 'export CFI_WALLET_ADDRESS='${CFI_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export CFI_VALOPER_ADDRESS='${CFI_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,s.jsx)(n.h3,{id:"eip-55-adresini-\xf6\u011frenme",children:"EIP-55 Adresini \xd6\u011frenme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"crossfid debug addr $CFI_WALLET_ADDRESS\n"})}),"\n",(0,s.jsx)(n.h4,{id:"faucet",children:"Faucet"}),"\n",(0,s.jsxs)(n.p,{children:["Discord sunucusunda ",(0,s.jsx)(n.code,{children:"#\ud83d\udeb0\u2503testnet-faucet"})," kanal\u0131ndan a\u015fa\u011f\u0131daki \u015fekilde token istiyoruz.."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"$request EIP-55_Address"})}),"\n",(0,s.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"crossfid query bank balances $CFI_WALLET_ADDRESS\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,s.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,s.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"identity"}),"  burada ",(0,s.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,s.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"details"})," ",(0,s.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"website"}),"  ",(0,s.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'```shell \ncrossfid tx staking create-validator \\\n--amount=490000000000000000000uart \\\n--pubkey=$(crossfid tendermint show-validator) \\\n--moniker=$CFI_NODENAME \\\n--chain-id=$CFI_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25uart \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$CFI_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,s.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"systemctl stop crossfid && \\\nsystemctl disable crossfid && \\\nrm /etc/systemd/system/crossfid.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .crossfid artela && \\\nrm -rf $(which crossfid)\nsed -i '/CFI_/d' ~/.bash_profile\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(7294);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);