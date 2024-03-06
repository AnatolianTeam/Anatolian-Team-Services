"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1871],{2805:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var n=i(5893),r=i(1151);const d={title:"\u2934\ufe0f Komutlar",description:"Faydal\u0131 komutlar.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/img/Mantra-Service-Cover.jpg",keywords:["mantra","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},t="Komutlar",l={id:"Testnet/Cosmos-Ecosystem/mantra/ycheatsheets",title:"\u2934\ufe0f Komutlar",description:"Faydal\u0131 komutlar.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/ycheatsheets.md",sourceDirName:"Testnet/Cosmos-Ecosystem/mantra",slug:"/Testnet/Cosmos-Ecosystem/mantra/ycheatsheets",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/mantra/ycheatsheets",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/ycheatsheets.md",tags:[],version:"current",frontMatter:{title:"\u2934\ufe0f Komutlar",description:"Faydal\u0131 komutlar.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/mantra/img/Mantra-Service-Cover.jpg",keywords:["mantra","chain","kurulum","snapshot","statesync","g\xfcncelleme"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/mantra/update"},next:{title:"Pryzm Zone",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/pryzm-zone/"}},s={},o=[{value:"Servis \u0130\u015flemleri",id:"servis-i\u0307\u015flemleri",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Node&#39;u Ba\u015flatma",id:"nodeu-ba\u015flatma",level:3},{value:"Node&#39;u Durdurma",id:"nodeu-durdurma",level:3},{value:"Node&#39;u Yeniden Ba\u015flatma",id:"nodeu-yeniden-ba\u015flatma",level:3},{value:"Node Senkronizasyon Durumu",id:"node-senkronizasyon-durumu",level:3},{value:"Node Bilgileri",id:"node-bilgileri",level:3},{value:"Node ID \xd6\u011frenme",id:"node-id-\xf6\u011frenme",level:3},{value:"Node IP Adresini \xd6\u011frenme",id:"node-ip-adresini-\xf6\u011frenme",level:3},{value:"Node Peer Adresini \xd6\u011frenme",id:"node-peer-adresini-\xf6\u011frenme",level:3},{value:"C\xfczdan Y\xf6netimi",id:"c\xfczdan-y\xf6netimi",level:2},{value:"C\xfczdanlar\u0131n Listesine Bakma",id:"c\xfczdanlar\u0131n-listesine-bakma",level:3},{value:"C\xfczdan Adresini G\xf6rme",id:"c\xfczdan-adresini-g\xf6rme",level:3},{value:"C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan\u0131 Silme",id:"c\xfczdan\u0131-silme",level:3},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Token \u0130\u015flemleri",id:"token-i\u0307\u015flemleri",level:2},{value:"Bir C\xfczdandan Di\u011fer Bir C\xfczdana Transfer Yapma",id:"bir-c\xfczdandan-di\u011fer-bir-c\xfczdana-transfer-yapma",level:3},{value:"Proposal Oylamas\u0131na Kat\u0131lma",id:"proposal-oylamas\u0131na-kat\u0131lma",level:3},{value:"Validatore Stake Etme / Delegate Etme",id:"validatore-stake-etme--delegate-etme",level:3},{value:"Stake&#39;ten \xc7\u0131kma",id:"staketen-\xe7\u0131kma",level:3},{value:"Mevcut Validatorden Di\u011fer Validatore Stake Etme / Redelegate Etme",id:"mevcut-validatorden-di\u011fer-validatore-stake-etme--redelegate-etme",level:3},{value:"\xd6d\xfclleri \xc7ekme",id:"\xf6d\xfclleri-\xe7ekme",level:3},{value:"Komisyon \xd6d\xfcllerini \xc7ekme",id:"komisyon-\xf6d\xfcllerini-\xe7ekme",level:3},{value:"Validator \u0130\u015flemleri",id:"validator-i\u0307\u015flemleri",level:2},{value:"Validator Bilgileri",id:"validator-bilgileri",level:3},{value:"Validator \u0130smini De\u011fi\u015ftirme",id:"validator-i\u0307smini-de\u011fi\u015ftirme",level:3},{value:"Validator Komisyon Oran\u0131n\u0131 De\u011fi\u015ftirme",id:"validator-komisyon-oran\u0131n\u0131-de\u011fi\u015ftirme",level:3},{value:"Validator Bilgilerinizi D\xfczenleme",id:"validator-bilgilerinizi-d\xfczenleme",level:3},{value:"Validator Detaylar\u0131",id:"validator-detaylar\u0131",level:3},{value:"Jailing Bilgisi",id:"jailing-bilgisi",level:3},{value:"Slashing Parametreleri",id:"slashing-parametreleri",level:3},{value:"Validatoru Jail Durumundan Kurtarma",id:"validatoru-jail-durumundan-kurtarma",level:3},{value:"Actif Validator Listesi",id:"actif-validator-listesi",level:3},{value:"Validator Anahtar\u0131n\u0131 Kontrol Etme",id:"validator-anahtar\u0131n\u0131-kontrol-etme",level:3},{value:"\u0130mzalama Bilgisi",id:"i\u0307mzalama-bilgisi",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"komutlar",children:"Komutlar"}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"Rehberimizden kurulum yapt\u0131ysan\u0131z aksi belirtilmedi\u011fi s\xfcrece a\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015fiklik yapman\u0131za gerek yoktur."})}),"\n",(0,n.jsx)(a.h2,{id:"servis-i\u0307\u015flemleri",children:"Servis \u0130\u015flemleri"}),"\n",(0,n.jsx)(a.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"journalctl -fu mantrachaind -o cat\n"})}),"\n",(0,n.jsx)(a.h3,{id:"nodeu-ba\u015flatma",children:"Node'u Ba\u015flatma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"systemctl start mantrachaind\n"})}),"\n",(0,n.jsx)(a.h3,{id:"nodeu-durdurma",children:"Node'u Durdurma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"systemctl stop mantrachaind\n"})}),"\n",(0,n.jsx)(a.h3,{id:"nodeu-yeniden-ba\u015flatma",children:"Node'u Yeniden Ba\u015flatma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"systemctl restart mantrachaind\n"})}),"\n",(0,n.jsx)(a.h3,{id:"node-senkronizasyon-durumu",children:"Node Senkronizasyon Durumu"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,n.jsx)(a.h3,{id:"node-bilgileri",children:"Node Bilgileri"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind status 2>&1 | jq .NodeInfo\n"})}),"\n",(0,n.jsx)(a.h3,{id:"node-id-\xf6\u011frenme",children:"Node ID \xd6\u011frenme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tendermint show-node-id\n"})}),"\n",(0,n.jsx)(a.h3,{id:"node-ip-adresini-\xf6\u011frenme",children:"Node IP Adresini \xd6\u011frenme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"curl icanhazip.com\n"})}),"\n",(0,n.jsx)(a.h3,{id:"node-peer-adresini-\xf6\u011frenme",children:"Node Peer Adresini \xd6\u011frenme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"echo $(mantrachaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.mantrachain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/\".*//')\n"})}),"\n",(0,n.jsx)(a.h2,{id:"c\xfczdan-y\xf6netimi",children:"C\xfczdan Y\xf6netimi"}),"\n",(0,n.jsx)(a.h3,{id:"c\xfczdanlar\u0131n-listesine-bakma",children:"C\xfczdanlar\u0131n Listesine Bakma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind keys list\n"})}),"\n",(0,n.jsx)(a.h3,{id:"c\xfczdan-adresini-g\xf6rme",children:"C\xfczdan Adresini G\xf6rme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind keys show $BBN_WALLET --bech val -a\n"})}),"\n",(0,n.jsx)(a.h3,{id:"c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind keys add $BBN_WALLET --recover\n"})}),"\n",(0,n.jsx)(a.h3,{id:"c\xfczdan\u0131-silme",children:"C\xfczdan\u0131 Silme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind keys delete $BBN_WALLET\n"})}),"\n",(0,n.jsx)(a.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind query bank balances $BBN_WALLET_ADDRESS\n"})}),"\n",(0,n.jsx)(a.h2,{id:"token-i\u0307\u015flemleri",children:"Token \u0130\u015flemleri"}),"\n",(0,n.jsx)(a.h3,{id:"bir-c\xfczdandan-di\u011fer-bir-c\xfczdana-transfer-yapma",children:"Bir C\xfczdandan Di\u011fer Bir C\xfczdana Transfer Yapma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx bank send $BBN_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ubbn\n"})}),"\n",(0,n.jsx)(a.h3,{id:"proposal-oylamas\u0131na-kat\u0131lma",children:"Proposal Oylamas\u0131na Kat\u0131lma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx gov vote 1 yes --from $BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"validatore-stake-etme--delegate-etme",children:"Validatore Stake Etme / Delegate Etme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx staking delegate $BBN_VALOPER_ADDRESS 100000000ubbn --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"staketen-\xe7\u0131kma",children:"Stake'ten \xc7\u0131kma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx staking unbond $(mantrachaind keys show $BBN_WALLET --bech val -a) 1000000ubbn --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --fees 3000ubbn -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"mevcut-validatorden-di\u011fer-validatore-stake-etme--redelegate-etme",children:"Mevcut Validatorden Di\u011fer Validatore Stake Etme / Redelegate Etme"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"srcValidatorAddress"}),": Mevcut Stake edilen validator\xfcn adresi\n",(0,n.jsx)(a.code,{children:"destValidatorAddress"}),": Yeni stake edilecek validator\xfcn adresi"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ubbn --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"\xf6d\xfclleri-\xe7ekme",children:"\xd6d\xfclleri \xc7ekme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx distribution withdraw-all-rewards --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"komisyon-\xf6d\xfcllerini-\xe7ekme",children:"Komisyon \xd6d\xfcllerini \xc7ekme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx distribution withdraw-rewards $BBN_VALOPER_ADDRESS --from=$BBN_WALLET --commission --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,n.jsx)(a.h2,{id:"validator-i\u0307\u015flemleri",children:"Validator \u0130\u015flemleri"}),"\n",(0,n.jsx)(a.h3,{id:"validator-bilgileri",children:"Validator Bilgileri"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind status 2>&1 | jq .ValidatorInfo\n"})}),"\n",(0,n.jsx)(a.h3,{id:"validator-i\u0307smini-de\u011fi\u015ftirme",children:"Validator \u0130smini De\u011fi\u015ftirme"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"YENI-NODE-ADI"})," yazan yere yeni validator/moniker isminizi yaz\u0131n\u0131z. TR karakter i\xe7ermemelidir."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx staking edit-validator \\\n--new-moniker=YENI-NODE-ADI \\\n--chain-id=$BBN_CHAIN_ID \\\n--from=$BBN_WALLET \\\n--gas-prices 0.00001ubbn \\\n--gas-adjustment 1.5 \\\n--gas auto -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"validator-komisyon-oran\u0131n\u0131-de\u011fi\u015ftirme",children:"Validator Komisyon Oran\u0131n\u0131 De\u011fi\u015ftirme"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"commission-rate"})," yazan b\xf6l\xfcmdeki de\u011feri de\u011fi\u015ftiriyoruz."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'mantrachaind tx staking edit-validator --commission-rate "0.02" --moniker=$BBN_NODENAME --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto - y\n'})}),"\n",(0,n.jsx)(a.h3,{id:"validator-bilgilerinizi-d\xfczenleme",children:"Validator Bilgilerinizi D\xfczenleme"}),"\n",(0,n.jsxs)(a.p,{children:["Bu bilgileri de\u011fi\u015ftirmeden \xf6nce ",(0,n.jsx)(a.a,{href:"https://keybase.io/",children:"https://keybase.io/"})," adresine kay\u0131t olarak a\u015fa\u011f\u0131daki kodda g\xf6r\xfcld\xfc\u011f\xfc gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almal\u0131s\u0131n\u0131z. Ayr\u0131ca profil resmi vs. ayarlar\u0131 da yapabilirsiniz.\n",(0,n.jsx)(a.code,{children:"$BBN_NODENAME"})," ve ",(0,n.jsx)(a.code,{children:"$BBN_WALLET"}),": Validator (Moniker) ve c\xfczdan ad\u0131n\u0131z, de\u011fi\u015ftirmeniz gerekmez. \xc7\xfcnk\xfc de\u011fi\u015fkenlere ekledik."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'mantrachaind tx staking edit-validator \\\n--moniker=$BBN_NODENAME \\\n--identity=XXXX0000XXXX0000\\\n--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \\\n--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \\\n--chain-id=$BBN_CHAIN_ID \\\n--from=$BBN_WALLET\n'})}),"\n",(0,n.jsx)(a.h3,{id:"validator-detaylar\u0131",children:"Validator Detaylar\u0131"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind q staking validator $(mantrachaind keys show $WALLET --bech val -a)\n"})}),"\n",(0,n.jsx)(a.h3,{id:"jailing-bilgisi",children:"Jailing Bilgisi"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind q slashing signing-info $(mantrachaind tendermint show-validator)\n"})}),"\n",(0,n.jsx)(a.h3,{id:"slashing-parametreleri",children:"Slashing Parametreleri"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind q slashing params\n"})}),"\n",(0,n.jsx)(a.h3,{id:"validatoru-jail-durumundan-kurtarma",children:"Validatoru Jail Durumundan Kurtarma"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind tx slashing unjail --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,n.jsx)(a.h3,{id:"actif-validator-listesi",children:"Actif Validator Listesi"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status==\"BOND_STATUS_BONDED\")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + \" \t \" + .description.moniker' | sort -gr | nl\n"})}),"\n",(0,n.jsx)(a.h3,{id:"validator-anahtar\u0131n\u0131-kontrol-etme",children:"Validator Anahtar\u0131n\u0131 Kontrol Etme"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'[[ $(mantrachaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(mantrachaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"\n'})}),"\n",(0,n.jsx)(a.h3,{id:"i\u0307mzalama-bilgisi",children:"\u0130mzalama Bilgisi"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"mantrachaind q slashing signing-info $(mantrachaind tendermint show-validator)\n"})})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,i)=>{i.d(a,{Z:()=>l,a:()=>t});var n=i(7294);const r={},d=n.createContext(r);function t(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);