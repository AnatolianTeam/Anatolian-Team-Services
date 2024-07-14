"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6962],{34173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151),l=t(74866),s=t(85162);const i={title:"\ud83d\udcdd Kontrat Deploy",description:"Fuel testnet kontrat olu\u015fturma rehberi.",image:"./img/Fuel-Service-Cover.jpg",keywords:["Fuel","testnet","Ethereum","Rollup","rehber"]},u="Fuel Testnet Kontrat Olu\u015fturma Rehberi",o={id:"Testnet/fuel/contract-deploy",title:"\ud83d\udcdd Kontrat Deploy",description:"Fuel testnet kontrat olu\u015fturma rehberi.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/fuel/contract-deploy.md",sourceDirName:"Testnet/fuel",slug:"/Testnet/fuel/contract-deploy",permalink:"/tr/docs/Testnet/fuel/contract-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/fuel/contract-deploy.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcdd Kontrat Deploy",description:"Fuel testnet kontrat olu\u015fturma rehberi.",image:"./img/Fuel-Service-Cover.jpg",keywords:["Fuel","testnet","Ethereum","Rollup","rehber"]},sidebar:"tutorialSidebar",previous:{title:"Fuel",permalink:"/tr/docs/Testnet/fuel/"},next:{title:"EigenLayer",permalink:"/tr/docs/Testnet/eigenlayer/"}},c={image:t(81197).Z},d=[{value:"Video",id:"video",level:2},{value:"Root Yetkisi",id:"root-yetkisi",level:2},{value:"Sistemi G\xfcncelleme ve Gerekli K\xfct\xfcphanelerin Kurulmas\u0131",id:"sistemi-g\xfcncelleme-ve-gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",level:2},{value:"Rust Kurulumu",id:"rust-kurulumu",level:2},{value:"Stable S\xfcr\xfcm Kurulumu, G\xfcncelleme ve Varsay\u0131lan Ayarlama",id:"stable-s\xfcr\xfcm-kurulumu-g\xfcncelleme-ve-varsay\u0131lan-ayarlama",level:2},{value:"Fuel Kurulumu",id:"fuel-kurulumu",level:2},{value:"Fuel Toolchain Y\xfckleme ve G\xfcncelleme",id:"fuel-toolchain-y\xfckleme-ve-g\xfcncelleme",level:3},{value:"Kontrat Olu\u015fturma",id:"kontrat-olu\u015fturma",level:2},{value:"main.sw Dosyas\u0131n\u0131 D\xfczenleme",id:"mainsw-dosyas\u0131n\u0131-d\xfczenleme",level:3},{value:"Kontrat\u0131 Haz\u0131rlama",id:"kontrat\u0131-haz\u0131rlama",level:3},{value:"C\xfczdan",id:"c\xfczdan",level:2},{value:"Mevcut C\xfczdan\u0131 \u0130\xe7e Aktarma",id:"mevcut-c\xfczdan\u0131-i\u0307\xe7e-aktarma",level:3},{value:"Yeni C\xfczdan Olu\u015ftur",id:"yeni-c\xfczdan-olu\u015ftur",level:3},{value:"Kontrat\u0131 Olu\u015fturma",id:"kontrat\u0131-olu\u015fturma",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fuel-testnet-kontrat-olu\u015fturma-rehberi",children:"Fuel Testnet Kontrat Olu\u015fturma Rehberi"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Burada yap\u0131lan i\u015flemler herhangi bir \xf6d\xfcl\xfc garanti etmez. Bu i\u015flemleri kendinizi geli\u015ftimek i\xe7in yapaca\u011f\u0131nz i\u015flemler olarak d\xfc\u015f\xfcn\xfcn."})}),"\n",(0,r.jsxs)(n.p,{children:["Burada ",(0,r.jsx)(n.a,{href:"https://github.com/codespaces",children:"GitHup Codespaces"})," ile kontrat deploy edebilece\u011finiz \u015fekilde anlat\u0131m yap\u0131lm\u0131\u015ft\u0131r."]}),"\n",(0,r.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,r.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki ideoyu izleyerek i\u015flemlerinizi yapabilirsiniz.\n",(0,r.jsx)(n.a,{href:"https://youtu.be/Q_bCt0ervw4",children:(0,r.jsx)(n.img,{alt:"Watch the video",src:t(7211).Z+"",width:"3456",height:"2014"})})]}),"\n",(0,r.jsx)(n.h2,{id:"root-yetkisi",children:"Root Yetkisi"}),"\n",(0,r.jsx)(n.p,{children:"\u0130lk olarak a\u015fa\u011f\u0131daki kod ile root yetkisi al\u0131yoruz ve i\u015flemlere bu \u015fekilde devam ediyoruz."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo su\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sistemi-g\xfcncelleme-ve-gerekli-k\xfct\xfcphanelerin-kurulmas\u0131",children:"Sistemi G\xfcncelleme ve Gerekli K\xfct\xfcphanelerin Kurulmas\u0131"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"apt update\napt upgrade -y\napt-get install curl git screen -y\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rust-kurulumu",children:"Rust Kurulumu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source $HOME/.cargo/env\n"})}),"\n",(0,r.jsx)(n.p,{children:"Versionu kontrol edebilirsiniz."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"rustc --version\n"})}),"\n",(0,r.jsx)(n.h2,{id:"stable-s\xfcr\xfcm-kurulumu-g\xfcncelleme-ve-varsay\u0131lan-ayarlama",children:"Stable S\xfcr\xfcm Kurulumu, G\xfcncelleme ve Varsay\u0131lan Ayarlama"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"rustup install stable\nrustup update stable\nrustup default stable\n"})}),"\n",(0,r.jsx)(n.h2,{id:"fuel-kurulumu",children:"Fuel Kurulumu"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl https://install.fuel.network | sh\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"source /root/.bashrc\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fuel-toolchain-y\xfckleme-ve-g\xfcncelleme",children:"Fuel Toolchain Y\xfckleme ve G\xfcncelleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"fuelup toolchain install latest\nfuelup self update\nfuelup update && fuelup default latest\n"})}),"\n",(0,r.jsx)(n.h2,{id:"kontrat-olu\u015fturma",children:"Kontrat Olu\u015fturma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"mkdir fuel-project && cd fuel-project\nforc new counter-contract\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mainsw-dosyas\u0131n\u0131-d\xfczenleme",children:"main.sw Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nano counter-contract/src/main.sw\n"})}),"\n",(0,r.jsx)(n.p,{children:"Dosyay\u0131 a\xe7\u0131n ve i\xe7erisindeki her\u015feyi silin ard\u0131ndan a\u015fa\u011f\u0131daki kodlar\u0131 yap\u0131\u015ft\u0131rp CTRL, X, Y ve Enter ile kaydedip \xe7\u0131k\u0131n."}),"\n","\n",(0,r.jsx)(l.Z,{children:(0,r.jsx)(s.Z,{value:"main.sw dosyas\u0131 i\xe7in kodlar",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"contract;\n\nstorage {\n\t\tcounter: u64 = 0,\n}\n\nabi Counter {\n\t\t#[storage(read, write)]\n\t\tfn increment();\n\n\t\t#[storage(read)]\n\t\tfn count() -> u64;\n}\n\nimpl Counter for Contract {\n\t\t#[storage(read)]\n\t\tfn count() -> u64 {\n\t\t\t\tstorage.counter.read()\n\t\t}\n\n#[storage(read, write)]\nfn increment() {\n    let incremented = storage.counter.read() + 1;\n    storage.counter.write(incremented);\n\t\t}\n}\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"kontrat\u0131-haz\u0131rlama",children:"Kontrat\u0131 Haz\u0131rlama"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd counter-contract\nforc build\n"})}),"\n",(0,r.jsx)(n.h2,{id:"c\xfczdan",children:"C\xfczdan"}),"\n",(0,r.jsx)(n.h3,{id:"mevcut-c\xfczdan\u0131-i\u0307\xe7e-aktarma",children:"Mevcut C\xfczdan\u0131 \u0130\xe7e Aktarma"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forc wallet import \n"})}),"\n",(0,r.jsx)(n.p,{children:"yukar\u0131daki kod hata verirse a\u015fa\u011f\u0131daki kodu kullan\u0131n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forc-wallet import \n"})}),"\n",(0,r.jsx)(n.p,{children:"Yukar\u0131dak"}),"\n",(0,r.jsx)(n.h3,{id:"yeni-c\xfczdan-olu\u015ftur",children:"Yeni C\xfczdan Olu\u015ftur"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forc wallet account new\n"})}),"\n",(0,r.jsx)(n.p,{children:"yukar\u0131daki kod hata verirse a\u015fa\u011f\u0131daki kodu kullan\u0131n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forc-wallet new\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"C\xfczdan kelimelerinizi g\xfcvenli bir yerda saklamay\u0131 unutmay\u0131n."})}),"\n",(0,r.jsx)(n.h2,{id:"kontrat\u0131-olu\u015fturma",children:"Kontrat\u0131 Olu\u015fturma"}),"\n",(0,r.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki kodu girdikten sonra \xf6nce ",(0,r.jsx)(n.code,{children:"0"})," yaz\u0131p enterlay\u0131n ve ard\u0131ndan ",(0,r.jsx)(n.code,{children:"y"})," yaz\u0131p enterlay\u0131n."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forc deploy --testnet \n"})}),"\n",(0,r.jsxs)(n.p,{children:["\xc7\u0131kt\u0131da verilen TX Hash'\u0131 ",(0,r.jsx)(n.a,{href:"https://app.fuel.network/",children:"Fuel Explorer"}),"'dan kontrol edebilirsiniz."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(90512);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(90512),l=t(12466),s=t(16550),i=t(20469),u=t(91980),o=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,d]=p({queryString:t,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),g=(()=>{const e=o??v;return m({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(85893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==r&&(o(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=v(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,k.jsx)(b,{...n,...e}),(0,k.jsx)(x,{...n,...e})]})}function y(e){const n=(0,f.Z)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(n))}},81197:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Fuel-Service-Cover-9448aeef2cb5ea15eec117dc263ba441.jpg"},7211:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/FuelVideoGuide-08e397ef3dfb3d687c7eb717d21daaa3.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);