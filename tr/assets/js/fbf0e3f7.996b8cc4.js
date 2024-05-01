"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3906],{7985:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var a=i(5893),s=i(1151);const r={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",position:2,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","network","kurulum","snapshot","statesync","g\xfcncelleme"]},l="Kurulum",o={id:"Mainnet/Cosmos-Ecosystem/crossfi/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/crossfi/installation.md",sourceDirName:"Mainnet/Cosmos-Ecosystem/crossfi",slug:"/Mainnet/Cosmos-Ecosystem/crossfi/installation",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/crossfi/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/crossfi/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",position:2,image:"./img/CrossFi-Service-Cover.jpg",keywords:["crossfi","network","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"Cross Finance",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/crossfi/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Mainnet/Cosmos-Ecosystem/crossfi/snapshot"}},c={image:i(6474).Z},t=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"CrossFi&#39;nin Kurulmas\u0131",id:"crossfinin-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,a.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm tmux htop screen gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$CFI_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$CFI_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,a.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,a.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export CFI_NODENAME=$CFI_NODENAME"  >> $HOME/.bash_profile\necho "export CFI_WALLET=$CFI_WALLET" >> $HOME/.bash_profile\necho "export CFI_PORT=11" >> $HOME/.bash_profile\necho "export CFI_CHAIN_ID=mineplex-mainnet-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,a.jsxs)(n.p,{children:["Node (",(0,a.jsx)(n.code,{children:"CFI_NODENAME"}),") ve C\xfczdan (",(0,a.jsx)(n.code,{children:"CFI_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,a.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,a.jsx)(n.code,{children:"CFI_PORT"}),") da ",(0,a.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "export CFI_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export CFI_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export CFI_PORT=16" >> $HOME/.bash_profile\necho "export CFI_CHAIN_ID=mineplex-mainnet-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"crossfinin-kurulmas\u0131",children:"CrossFi'nin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $HOME\nmkdir -p $HOME/go/bin\nwget https://github.com/crossfichain/crossfi-node/releases/download/v0.1.1/mineplex-2-node._v0.1.1_linux_amd64.tar.gz && tar -xf mineplex-2-node._v0.1.1_linux_amd64.tar.gz\ntar -xvf mineplex-2-node._v0.1.1_linux_amd64.tar.gz\nchmod +x $HOME/mineplex-chaind\nmv $HOME/mineplex-chaind $HOME/go/bin/crossfid\nrm mineplex-2-node._v0.1.1_linux_amd64.tar.gz\ncrossfid version\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Versiyon \xe7\u0131kt\u0131s\u0131 ",(0,a.jsx)(n.code,{children:"0.1.1"})," olacak."]}),"\n",(0,a.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'crossfid config keyring-backend test\ncrossfid config chain-id $CFI_CHAIN_ID\ncrossfid init --chain-id $CFI_CHAIN_ID $CFI_NODENAME\ngit clone https://github.com/crossfichain/mainnet.git\nmv $HOME/mainnet/ $HOME/.mineplex-chain/\n\n# Copying the Genesis and addrbook Files\nwget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/crossfi/files/genesis.json -O $HOME/.mineplex-chain/config/genesis.json\nwget https://github.com/AnatolianTeam/Anatolian-Team-Services/raw/main/docs/Testnet/Cosmos-Ecosystem/crossfi/files/addrbook.json -O $HOME/.mineplex-chain/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i -e \'s|^minimum-gas-prices *=.*|minimum-gas-prices = "5000000000mpx"|\' $HOME/.mineplex-chain/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.mineplex-chain/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nPEERS="c31ce65bbf90059d18cc4988b01a649151ac3707@85.10.200.82:26656,2c8951227c667c8833e2930bc07ce1a9f0acbe28@seed-v2.mineplex.io:26656,e9fd5cca36b36d6646cfa65ff72b2f22abec4667@46.101.138.73:26656,641157ecbfec8e0ec37ca4c411c1208ca1327154@crossfi-mainnet-peer.itrocket.net:11656,a018736ec7202096918618dda318678ec4c7d728@167.235.7.100:26656,044a7dc14869ff871f21f61796c6017a6584945b@65.109.62.39:16656,9795aa2f9d463700cbd61862f8b29bf5bd47c042@138.68.84.81:26656,aedb4ff19edd4363c67f1bd9e9f40104098fe2b8@146.190.25.59:26656,6877c2c450b53bce5d40e659a74cd2d0dca24576@172.104.244.18:26656,9b500d3f67c22a5a5e5cff6c8db10bf947dbea95@13.231.218.123:26656,bed7ce073a39802f6eb76cecd69b311dabcb4744@64.226.124.173:36656,2d409d9d724364608978d11a3975c7556c813ffc@188.246.224.43:26656,0e2ef910151cd0a171e466b8850a0c1333c48577@95.217.107.249:29656,94bd757a9f002e5ec72f1f7d0a1f96eec0d49f1b@3.95.243.5:30656,d12f9642a604cbcf1afa85608179f49259709f3e@135.181.178.119:22656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.mineplex-chain/config/config.toml\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.mineplex-chain/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.mineplex-chain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.mineplex-chain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.mineplex-chain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.mineplex-chain/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:8545%:${CFI_PORT}545%g;\ns%:8546%:${CFI_PORT}546%g;\ns%:26658%:${CFI_PORT}658%g;\ns%:26657%:${CFI_PORT}657%g;\ns%:6060%:${CFI_PORT}060%g;\ns%:26656%:${CFI_PORT}656%g;\ns%:26660%:${CFI_PORT}660%g\n" $HOME/.mineplex-chain/config/config.toml\nsed -i.bak -e "\ns%:1317%:${CFI_PORT}317%g; \ns%:8080%:${CFI_PORT}080%g; \ns%:9090%:${CFI_PORT}090%g; \ns%:9091%:${CFI_PORT}091%g\n" $HOME/.mineplex-chain/config/app.toml\nsed -i.bak -e "s%:26657%:${CFI_PORT}657%g" $HOME/.mineplex-chain/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${CFI_PORT}656\\"|g" ~/.mineplex-chain/config/config.toml > ~/.mineplex-chain/config/config.toml.tmp\nmv ~/.mineplex-chain/config/config.toml.tmp  ~/.mineplex-chain/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/crossfid.service > /dev/null << EOF\n[Unit]\nDescription=CrossFi Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which crossfid) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable crossfid\nsystemctl start crossfid\n"})}),"\n",(0,a.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"journalctl -u crossfid -f -o cat\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,a.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"crossfid status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,a.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$CFI_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"crossfid keys add $CFI_WALLET\n"})}),"\n",(0,a.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"crossfid keys add $CFI_WALLET --recover\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,a.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"CFI_WALLET_ADDRESS=$(crossfid keys show $CFI_WALLET -a)\nCFI_VALOPER_ADDRESS=$(crossfid keys show $CFI_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"echo 'export CFI_WALLET_ADDRESS='${CFI_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export CFI_VALOPER_ADDRESS='${CFI_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"crossfid query bank balances $CFI_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,a.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,a.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"identity"}),"  burada ",(0,a.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,a.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"details"})," ",(0,a.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\ude80"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"website"}),"  ",(0,a.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'```shell \ncrossfid tx staking create-validator \\\n--amount=490000000000000000000mpx \\\n--pubkey=$(crossfid tendermint show-validator) \\\n--moniker=$CFI_NODENAME \\\n--chain-id=$CFI_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=0.25mpx \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$CFI_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\ude80" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,a.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop crossfid && \\\nsystemctl disable crossfid && \\\nrm /etc/systemd/system/crossfid.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .mineplex-chain crossfi && \\\nrm -rf $(which crossfid)\nsed -i '/CFI_/d' ~/.bash_profile\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},6474:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/CrossFi-Service-Cover-dbcaf4e2e572b560c7e0ec3c268daf1c.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var a=i(7294);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);