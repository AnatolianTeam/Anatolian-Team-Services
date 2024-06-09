"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6443],{4864:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var i=a(5893),l=a(1151);const r={title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},s="Kurulum",c={id:"Testnet/Cosmos-Ecosystem/0g/installation",title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/installation.md",sourceDirName:"Testnet/Cosmos-Ecosystem/0g",slug:"/Testnet/Cosmos-Ecosystem/0g/installation",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/0g/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Kurulum",description:"Node kurulum rehberi.",image:"./img/0G-Service-Cover.jpg",keywords:["0g","ai","yapay zeka","mod\xfcler","zincir","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"0G Protocol",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/"},next:{title:"\ud83d\udcf8 Snapshot",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/0g/snapshot"}},d={image:a(3537).Z},t=[{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Go Kurulumu",id:"go-kurulumu",level:2},{value:"De\u011fi\u015fkenleri Y\xfckleme",id:"de\u011fi\u015fkenleri-y\xfckleme",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:3},{value:"0G Kurulmas\u0131",id:"0g-kurulmas\u0131",level:2},{value:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma",id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",level:2},{value:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma",id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"StateSync",id:"statesync",level:2},{value:"Senkronizasyonu Kontrol Etme",id:"senkronizasyonu-kontrol-etme",level:2},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Yeni C\xfczdan Olu\u015fturma",id:"yeni-c\xfczdan-olu\u015fturma",level:3},{value:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"EVM Adresinizi \xd6\u011frenme",id:"evm-adresinizi-\xf6\u011frenme",level:3},{value:"Musluk",id:"musluk",level:3},{value:"EVM C\xfczdan Private Key \xd6\u011frenme",id:"evm-c\xfczdan-private-key-\xf6\u011frenme",level:3},{value:"A\u011f\u0131 C\xfczdana Ekleme",id:"a\u011f\u0131-c\xfczdana-ekleme",level:4},{value:"C\xfczdan ve Valoper Bilgileri",id:"c\xfczdan-ve-valoper-bilgileri",level:2},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Validator Olu\u015fturma",id:"validator-olu\u015fturma",level:2},{value:"Node&#39;u Tamamen Silme",id:"nodeu-tamamen-silme",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kurulum",children:"Kurulum"}),"\n",(0,i.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"go-kurulumu",children:"Go Kurulumu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.5\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"de\u011fi\u015fkenleri-y\xfckleme",children:"De\u011fi\u015fkenleri Y\xfckleme"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131da de\u011fi\u015ftirmeniz gereken yerler belirtilmi\u015ftir."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$OG_NODENAME"})," validator ad\u0131n\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$OG_WALLET"})," c\xfczdan ad\u0131n\u0131z"]}),"\n",(0,i.jsxs)(n.li,{children:["E\u011fer portu ba\u015fka bir node kullan\u0131yorsa a\u015fa\u011f\u0131dan de\u011fi\u015ftirebilirsiniz. ",(0,i.jsx)(n.code,{children:"11"})," yazan yere farkl\u0131 bir de\u011fer girmelisiniz yine iki haneli olacak \u015fekilde."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export OG_NODENAME=$OG_NODENAME"  >> $HOME/.bash_profile\necho "export OG_WALLET=$OG_WALLET" >> $HOME/.bash_profile\necho "export OG_PORT=11" >> $HOME/.bash_profile\necho "export OG_CHAIN_ID=zgtendermint_16600-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsxs)(n.p,{children:["Node (",(0,i.jsx)(n.code,{children:"OG_NODENAME"}),") ve C\xfczdan (",(0,i.jsx)(n.code,{children:"OG_WALLET"}),") ad\u0131m\u0131z\u0131n ",(0,i.jsx)(n.code,{children:"Anatolian-Guide"})," oldu\u011funu ve kullanaca\u011f\u0131n\u0131z portun (",(0,i.jsx)(n.code,{children:"OG_PORT"}),") da ",(0,i.jsx)(n.code,{children:"16656"})," olaca\u011f\u0131n\u0131 varsayal\u0131m. Kod a\u015fa\u011f\u0131daki \u015fekilde d\xfczenlenecektir."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "export OG_NODENAME=Anatolian-Guide"  >> $HOME/.bash_profile\necho "export OG_WALLET=Anatolian-Guide" >> $HOME/.bash_profile\necho "export OG_PORT=16" >> $HOME/.bash_profile\necho "export OG_CHAIN_ID=zgtendermint_16600-1" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'})}),"\n",(0,i.jsx)(n.h2,{id:"0g-kurulmas\u0131",children:"0G Kurulmas\u0131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd $HOME\ngit clone -b v0.1.0 https://github.com/0glabs/0g-chain.git\n./0g-chain/networks/testnet/install.sh\nsource .profile\n0gchaind version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"uygulamay\u0131-yap\u0131land\u0131rma-ve-ba\u015flatma",children:"Uygulamay\u0131 Yap\u0131land\u0131rma ve Ba\u015flatma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015filik yapmadan kopyalay\u0131p yap\u0131\u015ft\u0131r\u0131yoruz."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'0gchaind config chain-id $OG_CHAIN_ID\n0gchaind config keyring-backend test\n0gchaind init --chain-id $OG_CHAIN_ID $OG_NODENAME\n\n# Genesis ve addrbook Dosyalar\u0131n\u0131 Kopyalama\nwget https://testnet.anatolianteam.com/0g/genesis.json -O $HOME/.0gchain/config/genesis.json\nwget https://testnet.anatolianteam.com/0g/addrbook.json -O $HOME/.0gchain/config/addrbook.json\n\n# Minimum GAS \xdccretinin Ayarlanmas\u0131\nsed -i "s/^minimum-gas-prices *=.*/minimum-gas-prices = \\"0ua0gi\\"/" $HOME/.0gchain/config/app.toml\n\n# Indexer Kapatma -Opsiyonel\nindexer="null"\nsed -i -e "s/^indexer *=.*/indexer = \\"$indexer\\"/" $HOME/.0gchain/config/config.toml\n\n# SEEDS ve PEERS Ayarlamas\u0131\nPEERS="6cb43c1a81a9db8008268b0951ca8525e5670745@85.10.200.82:26656,3ab056f065ee9d37c4ad2f393033d292651182ab@159.69.72.247:17656,097603a2a1f4e08bd57c4a13ea725081f991ba5e@62.171.153.225:16656,ae1c39dcf8d8a7c956a0333ca3d9176d1df87f64@62.169.23.106:26656,a4055b828e59832c7a06d61fc51347755a160d0b@157.90.33.62:21656,f878d40c538c8c23653a5b70f615f8dccec6fb9f@54.215.187.94:26656,9d88e34a436ec1b50155175bc6eba89e7a1f0e9a@213.199.61.18:26656,da1f4985ce3df05fd085460485adefa93592a54c@172.232.33.25:26656,23b0a0624699f85062ddebf910583f70a5b9e86b@14.167.152.116:14256,a4055b828e59832c7a06d61fc51347755a160d0b@157.90.33.62:21656,d4085fd93ab77576f2acdb25d2d817061db5afe6@62.169.19.156:26656,a83f5d07a8a64827851c9f1d0c21c900b9309608@188.166.181.110:26656,b92597c5124da2a5177c1c2e11f69dfec45a721a@45.90.220.92:26656,bcfbafecc407b1cfd7737a172adda535580c62ed@62.169.19.5:26656,5d81d59e81356a33e6ccccaa3d419ff73244697e@107.173.18.103:26656,535ddcc917ab5ee6ddd2259875dac6018651da24@176.9.183.45:32656,254bbbc42bca6b7e81081a42a4993086e20e06ed@89.116.29.154:26656,0494c33335eed845a7ba1f894b54f6b31054c09d@207.180.204.179:26656,a3e6c6214805c1c068882f1981855c7a9f5926ea@213.168.249.202:26656,57588ff7b1e862e754f3cd74fc2414f03cb79da4@213.133.111.189:26656,5a69dafc859eee83b623b0c88b392337bb82eeb3@194.163.144.148:26656,9d09d391b2cf706a597d03fe8bb6700fe5cac53d@65.108.198.183:18456,f3c912cf5653e51ee94aaad0589a3d176d31a19d@157.90.0.102:31656,141dbd90d5c3411c9ba72ba03704ccdb70875b01@65.109.147.58:36656,ac9ef9840f56295916b6f9cfb1453cfef14441c1@75.119.128.23:27656,b8f8ed478f2794629fdb5cf0c01edaed80f00f84@168.119.64.172:26656,3c2ddd1e25a99bcbad08f502eca719a52465c1fd@37.60.231.42:26656,d00273ac6a2470cd4e48008d9af4d2521b134394@62.169.29.136:26656,a6ff8a651dd0a0e66dbfb2174ccadcbbcf567b29@66.94.122.224:26656,2579a86e3c4c1fabe3955d3a9ed40363bf9618f7@138.201.37.195:26656,bc4a5cccc6c5ffcc933f92f460a68b6398ba84f9@84.247.151.2:26656,91f079ccd2e0edf42e0fa57183ac92c22c525658@14.245.25.144:14256,66cfdcd92e5206e59bc507bef3f6d72ed21a149d@109.199.100.254:26656,5b2a956457b2918426b1f685fa6e3791609fb30c@84.247.165.146:26656,d0770d94946e7beb86805c6d96550734838f70c9@74.48.157.34:26656,c4b9c3a7f3651af729d73b150e714ee91e7585c1@14.176.200.133:26656,a3b0aadd7772dfb7a7e708d8a113bbba13339846@77.237.243.33:26656"\nSEEDS="c4d619f6088cb0b24b4ab43a0510bf9251ab5d7f@54.241.167.190:26656,44d11d4ba92a01b520923f51632d2450984d5886@54.176.175.48:26656,f2693dd86766b5bf8fd6ab87e2e970d564d20aff@54.193.250.204:26656,f878d40c538c8c23653a5b70f615f8dccec6fb9f@54.215.187.94:26656"\nsed -i \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.0gchain/config/config.toml\n\n# Prometheus\'u Aktif Etme\nsed -i \'s|^prometheus *=.*|prometheus = true|\' $HOME/.0gchain/config/config.toml\n\n# Pruning Ayarlama \npruning="custom"\npruning_keep_recent="100"\npruning_keep_every="0"\npruning_interval="50"\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\"$pruning_keep_recent\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\"$pruning_keep_every\\"/" $HOME/.0gchain/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\"$pruning_interval\\"/" $HOME/.0gchain/config/app.toml\n\n# Portlar\u0131 Ayarlama\nsed -i.bak -e "\ns%:26658%:${OG_PORT}658%g;\ns%:26657%:${OG_PORT}657%g;\ns%:6060%:${OG_PORT}060%g;\ns%:26656%:${OG_PORT}656%g;\ns%:26660%:${OG_PORT}660%g\n" $HOME/.0gchain/config/config.toml\nsed -i.bak -e "\ns%:8545%:${OG_PORT}545%g;\ns%:8546%:${OG_PORT}546%g;\ns%:6065%:${OG_PORT}065%g;\ns%:1317%:${OG_PORT}317%g; \ns%:8080%:${OG_PORT}080%g; \ns%:9090%:${OG_PORT}090%g; \ns%:9091%:${OG_PORT}091%g\n" $HOME/.0gchain/config/app.toml\nsed -i.bak -e "s%:26657%:${OG_PORT}657%g" $HOME/.0gchain/config/client.toml\n\n# Harici Adres Ekleme\nPUB_IP=`curl -s -4 icanhazip.com`\nsed -e "s|external_address = \\".*\\"|external_address = \\"$PUB_IP:${OG_PORT}656\\"|g" ~/.0gchain/config/config.toml > ~/.0gchain/config/config.toml.tmp\nmv ~/.0gchain/config/config.toml.tmp  ~/.0gchain/config/config.toml\n\n# Servis Dosyas\u0131 Olu\u015fturma\ntee /etc/systemd/system/0gchaind.service > /dev/null << EOF\n[Unit]\nDescription=0G Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which 0gchaind) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,i.jsx)(n.h2,{id:"hizmeti-etkinle\u015ftirme-ve-ba\u015flatma",children:"Hizmeti Etkinle\u015ftirme ve Ba\u015flatma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl enable 0gchaind\nsystemctl start 0gchaind\n"})}),"\n",(0,i.jsx)(n.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"journalctl -u 0gchaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.h2,{id:"statesync",children:"StateSync"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop 0gchaind\n\ncp $HOME/.0gchain/data/priv_validator_state.json $HOME/.0gchain/priv_validator_state.json.backup\n0gchaind tendermint unsafe-reset-all --home $HOME/.0gchain --keep-addr-book\n\nSNAP_RPC=\"https://rpc-t-0g.anatolianteam.com:443\"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))\nTRUST_HASH=$(curl -s \"$SNAP_RPC/block?height=$BLOCK_HEIGHT\" | jq -r .result.block_id.hash)\n\necho $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH\n\nsed -i 's|^enable *=.*|enable = true|' $HOME/.0gchain/config/config.toml\nsed -i 's|^rpc_servers *=.*|rpc_servers = \"'$SNAP_RPC,$SNAP_RPC'\"|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_height *=.*|trust_height = '$BLOCK_HEIGHT'|' $HOME/.0gchain/config/config.toml\nsed -i 's|^trust_hash *=.*|trust_hash = \"'$TRUST_HASH'\"|' $HOME/.0gchain/config/config.toml\n\nmv $HOME/.0gchain/priv_validator_state.json.backup $HOME/.0gchain/data/priv_validator_state.json\n\nsystemctl restart 0gchaind && journalctl -u 0gchaind -f -o cat\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"BU A\u015eAMADAN SONRA NODE'UMUZUN E\u015eLE\u015eMES\u0130N\u0130 BEKL\u0130YORUZ."})}),"\n",(0,i.jsx)(n.h2,{id:"senkronizasyonu-kontrol-etme",children:"Senkronizasyonu Kontrol Etme"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"false"})," \xe7\u0131kt\u0131s\u0131 almad\u0131k\xe7a bir sonraki yani validator olu\u015fturma ad\u0131m\u0131na ge\xe7miyoruz."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind status 2>&1 | jq .sync_info\n"})}),"\n",(0,i.jsx)(n.p,{children:"ya da"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind status 2>&1 | jq -r .sync_info.catching_up\n"})}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,i.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015fturma",children:"Yeni C\xfczdan Olu\u015fturma"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$OG_WALLET"})," b\xf6l\xfcm\xfcn\xfc de\u011fi\u015ftirmiyoruz kurulumun ba\u015f\u0131nda c\xfczdan\u0131m\u0131za de\u011fi\u015fkenler ile isim belirledik."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys add $OG_WALLET\n"})}),"\n",(0,i.jsx)(n.h3,{id:"var-olan-c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"Var Olan C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys add $OG_WALLET --recover\n"})}),"\n",(0,i.jsx)(n.h3,{id:"evm-adresinizi-\xf6\u011frenme",children:"EVM Adresinizi \xd6\u011frenme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo \"0x$(0gchaind debug addr $(0gchaind keys show $OG_WALLET -a) | grep hex | awk '{print $3}')\"\n"})}),"\n",(0,i.jsx)(n.h3,{id:"musluk",children:"Musluk"}),"\n",(0,i.jsxs)(n.p,{children:["Daha sonra ",(0,i.jsx)(n.a,{href:"https://faucet.0g.ai/",children:"musluktan"})," yukar\u0131da \xe7\u0131kan adresinize token isteyin."]}),"\n",(0,i.jsx)(n.h3,{id:"evm-c\xfczdan-private-key-\xf6\u011frenme",children:"EVM C\xfczdan Private Key \xd6\u011frenme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"0gchaind keys unsafe-export-eth-key $OG_WALLET\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ard\u0131ndan c\xfczdan\u0131n\u0131z\u0131 i\xe7e aktarabilirsiniz."}),"\n",(0,i.jsx)(n.h4,{id:"a\u011f\u0131-c\xfczdana-ekleme",children:"A\u011f\u0131 C\xfczdana Ekleme"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Alan"}),(0,i.jsx)(n.th,{children:"Detaylar"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Network name"})}),(0,i.jsx)(n.td,{children:"0g Newton Testnet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"New RPC URL"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rpc-testnet.0g.ai/",children:"https://rpc-testnet.0g.ai/"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Chain ID"})}),(0,i.jsx)(n.td,{children:"9000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Currency symbol:"})}),(0,i.jsx)(n.td,{children:"A0GI"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"c\xfczdan-ve-valoper-bilgileri",children:"C\xfczdan ve Valoper Bilgileri"}),"\n",(0,i.jsx)(n.p,{children:"Burada c\xfczdan ve valoper bilgileri de\u011fi\u015fkene ekleniyor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"OG_WALLET_ADDRESS=$(0gchaind keys show $OG_WALLET -a)\nOG_VALOPER_ADDRESS=$(0gchaind keys show $OG_WALLET --bech val -a)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"echo 'export OG_WALLET_ADDRESS='${OG_WALLET_ADDRESS} >> $HOME/.bash_profile\necho 'export OG_VALOPER_ADDRESS='${OG_VALOPER_ADDRESS} >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0gchaind query bank balances $OG_WALLET_ADDRESS\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"E\u015fle\u015fme tamamland\u0131ysa a\u015fa\u011f\u0131daki ad\u0131ma ge\xe7iyoruz."})}),"\n",(0,i.jsx)(n.h2,{id:"validator-olu\u015fturma",children:"Validator Olu\u015fturma"}),"\n",(0,i.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki komutta a\u015fa\u011f\u0131da berlirtilen yerler d\u0131\u015f\u0131nda bir de\u011fi\u015fiklik yapman\u0131z gerekmez;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"}),"  burada ",(0,i.jsx)(n.code,{children:"XXXX1111XXXX1111"})," yazan yere ",(0,i.jsx)(n.a,{href:"https://keybase.io/",children:"keybase"})," sitesine \xfcye olarak size verilen kimlik numaran\u0131z\u0131 yaz\u0131yorsunuz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"details"})," ",(0,i.jsx)(n.code,{children:"Always forward with the Anatolian Team \ud83d\udc06"})," yazan yere kendiniz hakk\u0131nda bilgiler yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"website"}),"  ",(0,i.jsx)(n.code,{children:"https://anatolianteam.com"})," yazan yere varsa bir siteniz ya da twitter vb. adresinizi yazabilirsiniz."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"security-contact"}),"  E-posta adresiniz."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'0gchaind tx staking create-validator \\\n--amount=1000000ua0gi \\\n--pubkey=$(0gchaind tendermint show-validator) \\\n--moniker=$OG_NODENAME \\\n--chain-id=$OG_CHAIN_ID \\\n--commission-rate=0.10 \\\n--commission-max-rate=0.20 \\\n--commission-max-change-rate=0.05 \\\n--min-self-delegation="1" \\\n--gas-prices=7aevmos \\\n--gas-adjustment=1.5 \\\n--gas=auto \\\n--from=$OG_WALLET \\\n--details="Always forward with the Anatolian Team \ud83d\udc06" \\\n--security-contact="xxxxxxx@gmail.com" \\\n--website="https://anatolianteam.com" \\\n--identity="XXXX1111XXXX1111" \\\n--yes\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["E\u011fer hata al\u0131rsan\u0131z ",(0,i.jsx)(n.code,{children:"--yes"}),"'den \xf6nce \u015funu ekleyin: ",(0,i.jsx)(n.code,{children:"--node=https://rpc-t-0g.anatolianteam.com:443 \\"})]})}),"\n",(0,i.jsx)(n.h2,{id:"nodeu-tamamen-silme",children:"Node'u Tamamen Silme"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl stop 0gchaind && \\\nsystemctl disable 0gchaind && \\\nrm /etc/systemd/system/0gchaind.service && \\\nsystemctl daemon-reload && \\\ncd $HOME && \\\nrm -rf .0gchain 0g-chain && \\\nrm -rf $(which 0gchaind)\nsed -i '/OG_/d' ~/.bash_profile\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3537:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/0G-Service-Cover-a5e6bc44f298d49268bd4cb4871397dc.jpg"},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var i=a(7294);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);