"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1858],{2345:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=r(5893),t=r(1151),l=r(4866),s=r(5162);const o={title:"\ud83c\udd99 Ta\u015f\u0131ma",description:"Node kurulum rehberi.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Forta/img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},i="Forta Node Ta\u015f\u0131ma",u={id:"Mainnet/Forta/vmigrate",title:"\ud83c\udd99 Ta\u015f\u0131ma",description:"Node kurulum rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Forta/vmigrate.md",sourceDirName:"Mainnet/Forta",slug:"/Mainnet/Forta/vmigrate",permalink:"/tr/docs/Mainnet/Forta/vmigrate",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Forta/vmigrate.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Ta\u015f\u0131ma",description:"Node kurulum rehberi.",image:"https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Forta/img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 G\xfcncelleme",permalink:"/tr/docs/Mainnet/Forta/update"},next:{title:"\u2934\ufe0f Komutlar",permalink:"/tr/docs/Mainnet/Forta/ycheatsheets"}},c={},d=[{value:".forta Klas\xf6r\xfcn\xfcn Kopyalanmas\u0131",id:"forta-klas\xf6r\xfcn\xfcn-kopyalanmas\u0131",level:2},{value:"Sistemi G\xfcncelleme",id:"sistemi-g\xfcncelleme",level:2},{value:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Docker Kurulumu",id:"docker-kurulumu",level:2},{value:"Docker Daemon Dosyas\u0131n\u0131n Olu\u015fturulmas\u0131",id:"docker-daemon-dosyas\u0131n\u0131n-olu\u015fturulmas\u0131",level:2},{value:"Docker&#39;\u0131 Ba\u015flatma",id:"docker\u0131-ba\u015flatma",level:2},{value:"Forta Kurulumu",id:"forta-kurulumu",level:2},{value:".forta Klas\xf6r\xfcn\xfc Yeni Sunucuya Ta\u015f\u0131ma",id:"forta-klas\xf6r\xfcn\xfc-yeni-sunucuya-ta\u015f\u0131ma",level:2},{value:"Yap\u0131land\u0131rma Dosyas\u0131n Kontrol Etme",id:"yap\u0131land\u0131rma-dosyas\u0131n-kontrol-etme",level:2},{value:"C\xfczdan\u0131 Kaydetme",id:"c\xfczdan\u0131-kaydetme",level:2},{value:"Servis Dosyas\u0131n\u0131 Kontrol Etme",id:"servis-dosyas\u0131n\u0131-kontrol-etme",level:2},{value:"Forta Node Aktif Etme ve \xc7al\u0131\u015ft\u0131rma",id:"forta-node-aktif-etme-ve-\xe7al\u0131\u015ft\u0131rma",level:2},{value:"Node Durumunu Kontrol Ediyoruz",id:"node-durumunu-kontrol-ediyoruz",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"forta-node-ta\u015f\u0131ma",children:"Forta Node Ta\u015f\u0131ma"}),"\n",(0,a.jsx)(n.h2,{id:"forta-klas\xf6r\xfcn\xfcn-kopyalanmas\u0131",children:".forta Klas\xf6r\xfcn\xfcn Kopyalanmas\u0131"}),"\n",(0,a.jsxs)(n.p,{children:["\xd6ncelikle sunucumuza winscp, termius vb. bir program ile ba\u011flanarak root dizininde yer alan .forta klas\xf6r\xfcn\xfc bilgisayar\u0131m\u0131za kopyal\u0131yoruz.\n",(0,a.jsx)(n.img,{alt:"Forta-1",src:r(8514).Z+"",width:"1522",height:"762"})]}),"\n",(0,a.jsx)(n.p,{children:"Bu ad\u0131m\u0131 ger\xe7ekle\u015ftirdikten sonra yeni sunucumuza kurulum yap\u0131yoruz."}),"\n",(0,a.jsx)(n.h2,{id:"sistemi-g\xfcncelleme",children:"Sistemi G\xfcncelleme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo apt update && sudo apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'sudo apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"docker-kurulumu",children:"Docker Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Yukar\u0131daki kodlar\u0131 tek seferde girdi\u011finizde hata verirse ya da ",(0,a.jsx)(n.code,{children:"Abort"})," \xe7\u0131kt\u0131s\u0131 al\u0131rsan\u0131z, kodlar\u0131 tek tek giriniz."]}),"\n",(0,a.jsx)(n.h2,{id:"docker-daemon-dosyas\u0131n\u0131n-olu\u015fturulmas\u0131",children:"Docker Daemon Dosyas\u0131n\u0131n Olu\u015fturulmas\u0131"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'sudo tee /etc/docker/daemon.json > /dev/null <<EOF\n{\n   "default-address-pools": [\n        {\n            "base":"172.17.0.0/12",\n            "size":16\n        },\n        {\n            "base":"192.168.0.0/16",\n            "size":20\n        },\n        {\n            "base":"10.99.0.0/16",\n            "size":24\n        }\n    ]\n}\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"docker\u0131-ba\u015flatma",children:"Docker'\u0131 Ba\u015flatma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl restart docker\n"})}),"\n",(0,a.jsx)(n.h2,{id:"forta-kurulumu",children:"Forta Kurulumu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo curl https://dist.forta.network/pgp.public -o /usr/share/keyrings/forta-keyring.asc -s\necho 'deb [signed-by=/usr/share/keyrings/forta-keyring.asc] https://dist.forta.network/repositories/apt stable main' | sudo tee -a /etc/apt/sources.list.d/forta.list\napt-get update\napt-get install forta\n"})}),"\n",(0,a.jsx)(n.h2,{id:"forta-klas\xf6r\xfcn\xfc-yeni-sunucuya-ta\u015f\u0131ma",children:".forta Klas\xf6r\xfcn\xfc Yeni Sunucuya Ta\u015f\u0131ma"}),"\n",(0,a.jsxs)(n.p,{children:["Burada yeni sunucumuza kopyalam\u0131\u015f oldu\u011fumuz .forta klas\xf6r\xfcn\xfc bu sefer sunucumuza kopyal\u0131yoruz.\n",(0,a.jsx)(n.img,{alt:"Forta-2",src:r(7566).Z+"",width:"1553",height:"666"})]}),"\n",(0,a.jsx)(n.h2,{id:"yap\u0131land\u0131rma-dosyas\u0131n-kontrol-etme",children:"Yap\u0131land\u0131rma Dosyas\u0131n Kontrol Etme"}),"\n",(0,a.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki kod ile ",(0,a.jsx)(n.code,{children:"config.yml"})," dosyas\u0131n\u0131 a\xe7\u0131yoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"nano /root/.forta/config.yml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Dosya i\xe7eri\u011finin a\u015fa\u011f\u0131daki gibi olup omad\u0131\u011f\u0131n\u0131 kontrol ediyoruz. ",(0,a.jsx)(n.code,{children:"ALCHEMY_LINKINIZ"})," k\u0131sm\u0131nda ",(0,a.jsx)(n.code,{children:"https"})," ile ba\u015flayan alchemy adresinizin de do\u011fru olup olmad\u0131\u011f\u0131n\u0131 kontrol ediyoruz. E\u011fer dosya i\xe7eri\u011fi a\u015fa\u011f\u0131daki gibi de\u011filse dosya i\xe7erisindeki kodlar\u0131 silip a\u015fa\u011f\u0131daki kodu d\xfczenleyip dosya i\xe7erisine yap\u0131\u015ft\u0131r\u0131yoruz."]}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{value:"Polygon",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 137\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(s.Z,{value:"BSC",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 56\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(s.Z,{value:"Ethereum",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 1\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(s.Z,{value:"Arbitrum",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 42161\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(s.Z,{value:"Optimism",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 10\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(s.Z,{value:"Avalanche",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 43114\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(s.Z,{value:"Fantom",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 250\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"c\xfczdan\u0131-kaydetme",children:"C\xfczdan\u0131 Kaydetme"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"EVM_ADRESINIZ"})," b\xf6l\xfcm\xfcnde EVM c\xfczdan adresinizi ve ",(0,a.jsx)(n.code,{children:"SIFRENIZ"})," yerine de yukar\u0131da Forta kurulumunda belirledi\u011finiz \u015fifreyi giriyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forta register --owner-address EVM_ADRESINIZ --passphrase SIFRENIZ\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki gibi bir \xe7\u0131kt\u0131 al\u0131yoruz.\n",(0,a.jsx)(n.img,{alt:"Forta-3",src:r(5858).Z+"",width:"1347",height:"102"})]}),"\n",(0,a.jsx)(n.h2,{id:"servis-dosyas\u0131n\u0131-kontrol-etme",children:"Servis Dosyas\u0131n\u0131 Kontrol Etme"}),"\n",(0,a.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki kod ile ",(0,a.jsx)(n.code,{children:"forta.service"})," dosyas\u0131n\u0131 a\xe7\u0131yoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"nano /lib/systemd/system/forta.service\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Dosya i\xe7eri\u011finin a\u015fa\u011f\u0131daki gibi olup olmad\u0131\u011f\u0131n\u0131 kontrol ediyoruz.\n",(0,a.jsx)(n.code,{children:"SIFRENIZ"})," yerine ilk Forta kurulumunda belirledi\u011finiz \u015fifre ile ayn\u0131 olup olmad\u0131\u011f\u0131n\u0131 kontrol ediyoruz."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'sudo tee /lib/systemd/system/forta.service > /dev/null <<EOF\n[Unit]\nDescription=Forta\nAfter=network-online.target\nWants=network-online.target systemd-networkd-wait-online.service\n\nStartLimitIntervalSec=500\nStartLimitBurst=5\n\n[Service]\nEnvironment="FORTA_DIR=/root/.forta/"\nEnvironment="FORTA_PASSPHRASE=SIFRENIZ"\nRestart=on-failure\nRestartSec=15s\n\nExecStart=/usr/bin/forta run\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"forta-node-aktif-etme-ve-\xe7al\u0131\u015ft\u0131rma",children:"Forta Node Aktif Etme ve \xc7al\u0131\u015ft\u0131rma"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl restart forta\n"})}),"\n",(0,a.jsx)(n.h2,{id:"node-durumunu-kontrol-ediyoruz",children:"Node Durumunu Kontrol Ediyoruz"}),"\n",(0,a.jsx)(n.p,{children:"Son olarak node'umuzu kontrol ediyoruz."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl status forta\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki gibi bir \xe7\u0131kt\u0131 ald\u0131ysan\u0131z ta\u015f\u0131ma i\u015flemi ba\u015far\u0131yla tamamlanm\u0131\u015ft\u0131r.\n",(0,a.jsx)(n.img,{alt:"Forta-4",src:r(4355).Z+"",width:"1582",height:"543"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>s});r(7294);var a=r(512);const t={tabItem:"tabItem_Ymn6"};var l=r(5893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>x});var a=r(7294),t=r(512),l=r(2466),s=r(6550),o=r(469),i=r(1980),u=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=p({queryString:r,groupId:t}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),y=(()=>{const e=u??f;return h({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{y&&i(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(5893);function v(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==a&&(u(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=f(e);return(0,k.jsxs)("div",{className:(0,t.Z)("tabs-container",y.tabList),children:[(0,k.jsx)(v,{...e,...n}),(0,k.jsx)(b,{...e,...n})]})}function x(e){const n=(0,g.Z)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(n))}},8514:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/migrate-1-661239c22f37dcb3ea72af13909f27aa.jpeg"},7566:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/migrate-2-9bcf2a574b050d8f3c8d058b47f2ce20.jpeg"},5858:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/migrate-3-e4707d38f9b100988ac0d0a4b63ad823.png"},4355:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/migrate-4-af967a14a9276400fdb30339e1abe42e.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var a=r(7294);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);