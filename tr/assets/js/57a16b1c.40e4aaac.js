"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6443],{4864:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var i=a(5893),r=a(1151);const l={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",t={id:"Testnet/Cosmos-Ecosystem/0g/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"0G Protocol",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/snapshot"}},d={image:a(3537).Z},c=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"0G Kurulmas\u0131",id:"0g-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"StateSync",id:"statesync",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"EVM Adresinizi \xd6\u011frenme",id:"evm-adresinizi-\xf6\u011frenme",level:3},{value:"Musluk",id:"musluk",level:3},{value:"EVM C\xfczdan Private Key \xd6\u011frenme",id:"evm-c\xfczdan-private-key-\xf6\u011frenme",level:3},{value:"A\u011f\u0131 C\xfczdana Ekleme",id:"a\u011f\u0131-c\xfczdana-ekleme",level:4},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,i.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$OG_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$OG_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,i.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export OG_NODENAME=$OG_NODENAME"  >> $HOME/.bash_profile\necho "export OG_WALLET=$OG_WALLET" >> $HOME/.bash_profile\necho "export OG_PORT=11" >> $HOME/.bash_profile\necho "export OG_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsxs)(n.p,{children:["Node (",(0,i.jsx)(n.code,{children:"OG_NODENAME"}),") ve C\xfczdan (",(0,i.jsx)(n.code,{children:"OG_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,i.jsx)(n.code,{children:"OG_PORT"}),") da ",(0,i.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export OG_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export OG_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export OG_PORT=16" >> $HOME/.bash_profile\necho "export OG_CHAIN_ID=zgtendermint_9000-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"0g-kurulmas\u0131",children:"0G Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd $HOME\ngit clone -b v0.1.0 https://github.com/0glabs/0g-chain.git\n./0g-chain/networks/testnet/install.sh\nsource .profile\n0gchaind version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'0gchaind config chain-id $OG_CHAIN_ID\n0gchaind config keyring-backend test\n0gchaind init --chain-id $OG_CHAIN_ID $OG_NODENAME\n\n# Genesis ve addrbook Dosyalar\u0131n\u0131 Kopyalama\nwget https://testnet.anatolianteam.com/0g/genesis.json -O $HOME/.0gchain/config/genesis.json\nwget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.0gchain/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i "s/^minimum-gas-prices *=.*/minimum-gas-prices = \\"0ua0gi\\"/" $HOME/.0gchain/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.0gchain/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nPEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326,b2a30b824a4358f8bc2ee648770b31b5eba3a853@85.10.200.82:26656"\nSEEDS="8c01665f88896bca44e8902a30e4278bed08033f@54.241.167.190:26656,b288e8b37f4b0dbd9a03e8ce926cd9c801aacf27@54.176.175.48:26656,8e20e8e88d504e67c7a3a58c2ea31d965aa2a890@54.193.250.204:26656,e50ac888b35175bfd4f999697bdeb5b7b52bfc06@54.215.187.94:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.0gchain/config/config.toml\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.0gchain/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.0gchain/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${OG_PORT}658%g;\ns%:26657%:${OG_PORT}657%g;\ns%:6060%:${OG_PORT}060%g;\ns%:26656%:${OG_PORT}656%g;\ns%:26660%:${OG_PORT}660%g\n" $HOME/.0gchain/config/config.toml\nsed -i.bak -e "\ns%:1317%:${OG_PORT}317%g; \ns%:8080%:${OG_PORT}080%g; \ns%:9090%:${OG_PORT}090%g; \ns%:9091%:${OG_PORT}091%g\n" $HOME/.0gchain/config/app.toml\nsed -i.bak -e "s%:26657%:${OG_PORT}657%g" $HOME/.0gchain/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${OG_PORT}656\\"|g" ~/.0gchain/config/config.toml > ~/.0gchain/config/config.toml.tmp\nmv ~/.0gchain/config/config.toml.tmp  ~/.0gchain/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/0gchaind.service > /dev/null << EOF\n[Unit]\nDescription=0G Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which 0gchaind) start --home $HOME\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable 0gchaind\nsystemctl start 0gchaind\n"})}),"\n",(0,i.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u 0gchaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.h2,{id:"statesync",children:"StateSync"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop 0gchaind\n\ncp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup\n0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-0g.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.0gchain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.0gchain/config/config.toml\n\nmv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json\n\nsystemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,i.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,i.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$OG_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys add $OG_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys add $OG_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h3,{id:"evm-adresinizi-\xf6\u011frenme",children:"EVM Adresinizi \xd6\u011frenme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo \"0x$(0gchaind debug addr $(0gchaind keys show $OG_WALLET -a) | grep hex | awk '{print $3}')\"\n"})}),"\n",(0,i.jsx)(n.h3,{id:"musluk",children:"Musluk"}),"\n",(0,i.jsxs)(n.p,{children:["Daha sonra ",(0,i.jsx)(n.a,{href:"https://faucet.0g.ai/",children:"musluktan"})," yukar\u0131da \xe7\u0131kan adresinize token isteyin."]}),"\n",(0,i.jsx)(n.h3,{id:"evm-c\xfczdan-private-key-\xf6\u011frenme",children:"EVM C\xfczdan Private Key \xd6\u011frenme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys unsafe-export-eth-key $OG_WALLET\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ard\u0131ndan c\xfczdan\u0131n\u0131z\u0131 i\xe7e aktarabilirsiniz."}),"\n",(0,i.jsx)(n.h4,{id:"a\u011f\u0131-c\xfczdana-ekleme",children:"A\u011f\u0131 C\xfczdana Ekleme"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Alan"}),(0,i.jsx)(n.th,{children:"Detaylar"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Network name"})}),(0,i.jsx)(n.td,{children:"0g Newton Testnet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"New RPC URL"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rpc-testnet.0g.ai/",children:"https://rpc-testnet.0g.ai/"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Chain ID"})}),(0,i.jsx)(n.td,{children:"9000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Currency symbol:"})}),(0,i.jsx)(n.td,{children:"A0GI"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,i.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"OG_WALLET_ADDRESS=$(0gchaind keys show $OG_WALLET -a)\nOG_VALOPER_ADDRESS=$(0gchaind keys show $OG_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export OG_WALLET_ADDRESS='${OG_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export OG_VALOPER_ADDRESS='${OG_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0gchaind query bank balances $OG_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,i.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"}),"  burada ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"}),"  ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'0gchaind tx staking create-validator \\\n--amount=1000000ua0gi \\\n--pubkey=$(0gchaind tendermint show-validator) \\\n--moniker=$OG_NODENAME \\\n--chain-id=$OG_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=7aevmos \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$OG_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\udc06" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["E\u011fer hata al\u0131rsan\u0131z ",(0,i.jsx)(n.code,{children:"--yes"}),"'den \xf6nce \u015funu ekleyin: ",(0,i.jsx)(n.code,{children:"--node=https://rpc-t-0g.anatolianteam.com:443 \\"})]})}),"\n",(0,i.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop 0gchaind && \\\nsystemctl disable 0gchaind && \\\nrm /etc/systemd/system/0gchaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .0gchain 0g-chain && \\\nrm -rf $(which 0gchaind)\nsed -i '/OG_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3537:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/0G-Service-Cover-a5e6bc44f298d49268bd4cb4871397dc.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>s});var i=a(7294);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);