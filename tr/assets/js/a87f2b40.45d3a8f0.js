"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6884],{10418:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>t,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(85893),d=n(11151);const r={title:"\u2934\ufe0f Komutlar",description:"Faydal\u0131 komutlar.",image:"./img/Warden-Service-Cover.jpg",keywords:["warden","protocol","chain","kurulum","snapshot","statesync","g\xfcncelleme"],slug:"cheatsheets"},l="Komutlar",s={id:"Testnet/Cosmos-Ecosystem/warden/ycheatsheets",title:"\u2934\ufe0f Komutlar",description:"Faydal\u0131 komutlar.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/warden/ycheatsheets.md",sourceDirName:"Testnet/Cosmos-Ecosystem/warden",slug:"/Testnet/Cosmos-Ecosystem/warden/cheatsheets",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/warden/cheatsheets",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/warden/ycheatsheets.md",tags:[],version:"current",frontMatter:{title:"\u2934\ufe0f Komutlar",description:"Faydal\u0131 komutlar.",image:"./img/Warden-Service-Cover.jpg",keywords:["warden","protocol","chain","kurulum","snapshot","statesync","g\xfcncelleme"],slug:"cheatsheets"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Testnet/Cosmos-Ecosystem/warden/update"},next:{title:"Eclipse",permalink:"/tr/docs/Testnet/eclipse/"}},t={image:n(97589).Z},o=[{value:"Servis \u0130\u015flemleri",id:"servis-i\u0307\u015flemleri",level:2},{value:"Loglar\u0131 Kontrol Etme",id:"loglar\u0131-kontrol-etme",level:2},{value:"Node&#39;u Ba\u015flatma",id:"nodeu-ba\u015flatma",level:3},{value:"Node&#39;u Durdurma",id:"nodeu-durdurma",level:3},{value:"Node&#39;u Yeniden Ba\u015flatma",id:"nodeu-yeniden-ba\u015flatma",level:3},{value:"Node Senkronizasyon Durumu",id:"node-senkronizasyon-durumu",level:3},{value:"Node Bilgileri",id:"node-bilgileri",level:3},{value:"Node ID \xd6\u011frenme",id:"node-id-\xf6\u011frenme",level:3},{value:"Node IP Adresini \xd6\u011frenme",id:"node-ip-adresini-\xf6\u011frenme",level:3},{value:"Node Peer Adresini \xd6\u011frenme",id:"node-peer-adresini-\xf6\u011frenme",level:3},{value:"C\xfczdan Y\xf6netimi",id:"c\xfczdan-y\xf6netimi",level:2},{value:"C\xfczdanlar\u0131n Listesine Bakma",id:"c\xfczdanlar\u0131n-listesine-bakma",level:3},{value:"C\xfczdan Adresini G\xf6rme",id:"c\xfczdan-adresini-g\xf6rme",level:3},{value:"C\xfczdan\u0131 \u0130\xe7eri Aktarma",id:"c\xfczdan\u0131-i\u0307\xe7eri-aktarma",level:3},{value:"C\xfczdan\u0131 Silme",id:"c\xfczdan\u0131-silme",level:3},{value:"C\xfczdan Bakiyesini Kontrol Etme",id:"c\xfczdan-bakiyesini-kontrol-etme",level:3},{value:"Token \u0130\u015flemleri",id:"token-i\u0307\u015flemleri",level:2},{value:"Bir C\xfczdandan Di\u011fer Bir C\xfczdana Transfer Yapma",id:"bir-c\xfczdandan-di\u011fer-bir-c\xfczdana-transfer-yapma",level:3},{value:"Proposal Oylamas\u0131na Kat\u0131lma",id:"proposal-oylamas\u0131na-kat\u0131lma",level:3},{value:"Validatore Stake Etme / Delegate Etme",id:"validatore-stake-etme--delegate-etme",level:3},{value:"Stake&#39;ten \xc7\u0131kma",id:"staketen-\xe7\u0131kma",level:3},{value:"Mevcut Validatorden Di\u011fer Validatore Stake Etme / Redelegate Etme",id:"mevcut-validatorden-di\u011fer-validatore-stake-etme--redelegate-etme",level:3},{value:"\xd6d\xfclleri \xc7ekme",id:"\xf6d\xfclleri-\xe7ekme",level:3},{value:"Komisyon \xd6d\xfcllerini \xc7ekme",id:"komisyon-\xf6d\xfcllerini-\xe7ekme",level:3},{value:"Validator \u0130\u015flemleri",id:"validator-i\u0307\u015flemleri",level:2},{value:"Validator Bilgileri",id:"validator-bilgileri",level:3},{value:"Validator \u0130smini De\u011fi\u015ftirme",id:"validator-i\u0307smini-de\u011fi\u015ftirme",level:3},{value:"Validator Komisyon Oran\u0131n\u0131 De\u011fi\u015ftirme",id:"validator-komisyon-oran\u0131n\u0131-de\u011fi\u015ftirme",level:3},{value:"Validator Bilgilerinizi D\xfczenleme",id:"validator-bilgilerinizi-d\xfczenleme",level:3},{value:"Validator Detaylar\u0131",id:"validator-detaylar\u0131",level:3},{value:"Jailing Bilgisi",id:"jailing-bilgisi",level:3},{value:"Slashing Parametreleri",id:"slashing-parametreleri",level:3},{value:"Validatoru Jail Durumundan Kurtarma",id:"validatoru-jail-durumundan-kurtarma",level:3},{value:"Actif Validator Listesi",id:"actif-validator-listesi",level:3},{value:"Validator Anahtar\u0131n\u0131 Kontrol Etme",id:"validator-anahtar\u0131n\u0131-kontrol-etme",level:3},{value:"\u0130mzalama Bilgisi",id:"i\u0307mzalama-bilgisi",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"komutlar",children:"Komutlar"}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Rehberimizden kurulum yapt\u0131ysan\u0131z aksi belirtilmedi\u011fi s\xfcrece a\u015fa\u011f\u0131daki kodlarda herhangi bir de\u011fi\u015fiklik yapman\u0131za gerek yoktur."})}),"\n",(0,a.jsx)(i.h2,{id:"servis-i\u0307\u015flemleri",children:"Servis \u0130\u015flemleri"}),"\n",(0,a.jsx)(i.h2,{id:"loglar\u0131-kontrol-etme",children:"Loglar\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"journalctl -fu wardend -o cat\n"})}),"\n",(0,a.jsx)(i.h3,{id:"nodeu-ba\u015flatma",children:"Node'u Ba\u015flatma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"systemctl start wardend\n"})}),"\n",(0,a.jsx)(i.h3,{id:"nodeu-durdurma",children:"Node'u Durdurma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"systemctl stop wardend\n"})}),"\n",(0,a.jsx)(i.h3,{id:"nodeu-yeniden-ba\u015flatma",children:"Node'u Yeniden Ba\u015flatma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"systemctl restart wardend\n"})}),"\n",(0,a.jsx)(i.h3,{id:"node-senkronizasyon-durumu",children:"Node Senkronizasyon Durumu"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend status 2>&1 | jq .SyncInfo\n"})}),"\n",(0,a.jsx)(i.h3,{id:"node-bilgileri",children:"Node Bilgileri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend status 2>&1 | jq .NodeInfo\n"})}),"\n",(0,a.jsx)(i.h3,{id:"node-id-\xf6\u011frenme",children:"Node ID \xd6\u011frenme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tendermint show-node-id\n"})}),"\n",(0,a.jsx)(i.h3,{id:"node-ip-adresini-\xf6\u011frenme",children:"Node IP Adresini \xd6\u011frenme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"curl icanhazip.com\n"})}),"\n",(0,a.jsx)(i.h3,{id:"node-peer-adresini-\xf6\u011frenme",children:"Node Peer Adresini \xd6\u011frenme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"echo $(wardend tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.warden/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/\".*//')\n"})}),"\n",(0,a.jsx)(i.h2,{id:"c\xfczdan-y\xf6netimi",children:"C\xfczdan Y\xf6netimi"}),"\n",(0,a.jsx)(i.h3,{id:"c\xfczdanlar\u0131n-listesine-bakma",children:"C\xfczdanlar\u0131n Listesine Bakma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend keys list\n"})}),"\n",(0,a.jsx)(i.h3,{id:"c\xfczdan-adresini-g\xf6rme",children:"C\xfczdan Adresini G\xf6rme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend keys show $WARDEN_WALLET --bech val -a\n"})}),"\n",(0,a.jsx)(i.h3,{id:"c\xfczdan\u0131-i\u0307\xe7eri-aktarma",children:"C\xfczdan\u0131 \u0130\xe7eri Aktarma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend keys add $WARDEN_WALLET --recover\n"})}),"\n",(0,a.jsx)(i.h3,{id:"c\xfczdan\u0131-silme",children:"C\xfczdan\u0131 Silme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend keys delete $WARDEN_WALLET\n"})}),"\n",(0,a.jsx)(i.h3,{id:"c\xfczdan-bakiyesini-kontrol-etme",children:"C\xfczdan Bakiyesini Kontrol Etme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend query bank balances $WARDEN_WALLET_ADDRESS\n"})}),"\n",(0,a.jsx)(i.h2,{id:"token-i\u0307\u015flemleri",children:"Token \u0130\u015flemleri"}),"\n",(0,a.jsx)(i.h3,{id:"bir-c\xfczdandan-di\u011fer-bir-c\xfczdana-transfer-yapma",children:"Bir C\xfczdandan Di\u011fer Bir C\xfczdana Transfer Yapma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx bank send $WARDEN_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uward\n"})}),"\n",(0,a.jsx)(i.h3,{id:"proposal-oylamas\u0131na-kat\u0131lma",children:"Proposal Oylamas\u0131na Kat\u0131lma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx gov vote 1 yes --from $WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"validatore-stake-etme--delegate-etme",children:"Validatore Stake Etme / Delegate Etme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx staking delegate $WARDEN_VALOPER_ADDRESS 100000000uward--from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"staketen-\xe7\u0131kma",children:"Stake'ten \xc7\u0131kma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx staking unbond $(wardend keys show $WARDEN_WALLET --bech val -a) 1000000uward--from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --fees 3000uward-y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"mevcut-validatorden-di\u011fer-validatore-stake-etme--redelegate-etme",children:"Mevcut Validatorden Di\u011fer Validatore Stake Etme / Redelegate Etme"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"srcValidatorAddress"}),": Mevcut Stake edilen validator\xfcn adresi\n",(0,a.jsx)(i.code,{children:"destValidatorAddress"}),": Yeni stake edilecek validator\xfcn adresi"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uward--from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"\xf6d\xfclleri-\xe7ekme",children:"\xd6d\xfclleri \xc7ekme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx distribution withdraw-all-rewards --from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"komisyon-\xf6d\xfcllerini-\xe7ekme",children:"Komisyon \xd6d\xfcllerini \xc7ekme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx distribution withdraw-rewards $WARDEN_VALOPER_ADDRESS --from=$WARDEN_WALLET --commission --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,a.jsx)(i.h2,{id:"validator-i\u0307\u015flemleri",children:"Validator \u0130\u015flemleri"}),"\n",(0,a.jsx)(i.h3,{id:"validator-bilgileri",children:"Validator Bilgileri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend status 2>&1 | jq .ValidatorInfo\n"})}),"\n",(0,a.jsx)(i.h3,{id:"validator-i\u0307smini-de\u011fi\u015ftirme",children:"Validator \u0130smini De\u011fi\u015ftirme"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"YENI-NODE-ADI"})," yazan yere yeni validator/moniker isminizi yaz\u0131n\u0131z. TR karakter i\xe7ermemelidir."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx staking edit-validator \\\n--new-moniker=YENI-NODE-ADI \\\n--chain-id=$WARDEN_CHAIN_ID \\\n--from=$WARDEN_WALLET \\\n--gas-prices 0.00001uward \\\n--gas-adjustment 1.5 \\\n--gas auto -y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"validator-komisyon-oran\u0131n\u0131-de\u011fi\u015ftirme",children:"Validator Komisyon Oran\u0131n\u0131 De\u011fi\u015ftirme"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"commission-rate"})," yazan b\xf6l\xfcmdeki de\u011feri de\u011fi\u015ftiriyoruz."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:'wardend tx staking edit-validator --commission-rate "0.02" --moniker=$WARDEN_NODENAME --from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto - y\n'})}),"\n",(0,a.jsx)(i.h3,{id:"validator-bilgilerinizi-d\xfczenleme",children:"Validator Bilgilerinizi D\xfczenleme"}),"\n",(0,a.jsxs)(i.p,{children:["Bu bilgileri de\u011fi\u015ftirmeden \xf6nce ",(0,a.jsx)(i.a,{href:"https://keybase.io/",children:"https://keybase.io/"})," adresine kay\u0131t olarak a\u015fa\u011f\u0131daki kodda g\xf6r\xfcld\xfc\u011f\xfc gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almal\u0131s\u0131n\u0131z. Ayr\u0131ca profil resmi vs. ayarlar\u0131 da yapabilirsiniz.\n",(0,a.jsx)(i.code,{children:"$WARDEN_NODENAME"})," ve ",(0,a.jsx)(i.code,{children:"$WARDEN_WALLET"}),": Validator (Moniker) ve c\xfczdan ad\u0131n\u0131z, de\u011fi\u015ftirmeniz gerekmez. \xc7\xfcnk\xfc de\u011fi\u015fkenlere ekledik."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:'wardend tx staking edit-validator \\\n--moniker=$WARDEN_NODENAME \\\n--identity=XXXX0000XXXX0000\\\n--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \\\n--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \\\n--chain-id=$WARDEN_CHAIN_ID \\\n--from=$WARDEN_WALLET\n'})}),"\n",(0,a.jsx)(i.h3,{id:"validator-detaylar\u0131",children:"Validator Detaylar\u0131"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend q staking validator $(wardend keys show $WARDEN_WALLET --bech val -a)\n"})}),"\n",(0,a.jsx)(i.h3,{id:"jailing-bilgisi",children:"Jailing Bilgisi"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend q slashing signing-info $(wardend tendermint show-validator)\n"})}),"\n",(0,a.jsx)(i.h3,{id:"slashing-parametreleri",children:"Slashing Parametreleri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend q slashing params\n"})}),"\n",(0,a.jsx)(i.h3,{id:"validatoru-jail-durumundan-kurtarma",children:"Validatoru Jail Durumundan Kurtarma"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend tx slashing unjail --from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --gas-prices 0.00001uward--gas-adjustment 1.5 --gas auto -y\n"})}),"\n",(0,a.jsx)(i.h3,{id:"actif-validator-listesi",children:"Actif Validator Listesi"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend q staking validators -oj --limit=2000 | jq '.validators[] | select(.status==\"BOND_STATUS_BONDED\")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + \" \t \" + .description.moniker' | sort -gr | nl\n"})}),"\n",(0,a.jsx)(i.h3,{id:"validator-anahtar\u0131n\u0131-kontrol-etme",children:"Validator Anahtar\u0131n\u0131 Kontrol Etme"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:'[[ $(wardend q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(wardend status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"\n'})}),"\n",(0,a.jsx)(i.h3,{id:"i\u0307mzalama-bilgisi",children:"\u0130mzalama Bilgisi"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"wardend q slashing signing-info $(wardend tendermint show-validator)\n"})})]})}function m(e={}){const{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},97589:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/Warden-Service-Cover-3888d4ddeb0678f967fe8bacb9d53c03.jpg"},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>l});var a=n(67294);const d={},r=a.createContext(d);function l(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);