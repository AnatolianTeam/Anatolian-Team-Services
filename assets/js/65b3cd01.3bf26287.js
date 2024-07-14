"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[723],{36396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(85893),l=t(11151),r=t(74866),s=t(85162);const i={title:"\ud83d\udcdd Contract Deploy",description:"Fuel testnet contract deploy guide.",image:"./img/Fuel-Service-Cover.jpg",keywords:["Fuel","AI","Layer 1","installation"]},o="Fuel Testnet Contract Deploy Guide",c={id:"Testnet/fuel/contract-deploy",title:"\ud83d\udcdd Contract Deploy",description:"Fuel testnet contract deploy guide.",source:"@site/docs/Testnet/fuel/contract-deploy.md",sourceDirName:"Testnet/fuel",slug:"/Testnet/fuel/contract-deploy",permalink:"/docs/Testnet/fuel/contract-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/fuel/contract-deploy.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcdd Contract Deploy",description:"Fuel testnet contract deploy guide.",image:"./img/Fuel-Service-Cover.jpg",keywords:["Fuel","AI","Layer 1","installation"]},sidebar:"tutorialSidebar",previous:{title:"Fuel",permalink:"/docs/Testnet/fuel/"},next:{title:"EigenLayer",permalink:"/docs/Testnet/eigenlayer/"}},u={image:t(69003).Z},d=[{value:"Video",id:"video",level:2},{value:"Updating the System and Installing Required Libraries",id:"updating-the-system-and-installing-required-libraries",level:2},{value:"Installing the Rust",id:"installing-the-rust",level:2},{value:"Installing the Stable Version, Update and Default Set up",id:"installing-the-stable-version-update-and-default-set-up",level:2},{value:"Installing the Fuel",id:"installing-the-fuel",level:2},{value:"Installing and Updating the Fuel Toolchain",id:"installing-and-updating-the-fuel-toolchain",level:3},{value:"Creating the Contract",id:"creating-the-contract",level:2},{value:"main.sw Dosyas\u0131n\u0131 D\xfczenleme",id:"mainsw-dosyas\u0131n\u0131-d\xfczenleme",level:3},{value:"Preparing the Contract",id:"preparing-the-contract",level:3},{value:"Wallet",id:"wallet",level:2},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Musluk",id:"musluk",level:2},{value:"Creating the Contract",id:"creating-the-contract-1",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"fuel-testnet-contract-deploy-guide",children:"Fuel Testnet Contract Deploy Guide"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Transactions made here do not guarantee any rewards. Think of these actions as actions you will take to improve yourself."})}),"\n",(0,a.jsxs)(n.p,{children:["Here it is explained how you can deploy a contract with ",(0,a.jsx)(n.a,{href:"https://github.com/codespaces",children:"GitHup Codespaces"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,a.jsxs)(n.p,{children:["You can make your transactions by following the video below.\n",(0,a.jsx)(n.a,{href:"https://youtu.be/Q_bCt0ervw4",children:(0,a.jsx)(n.img,{alt:"Watch the video",src:t(7211).Z+"",width:"3456",height:"2014"})})]}),"\n",(0,a.jsx)(n.p,{children:"First, we obtain root permission with the code below and continue the process in this way."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo su\n"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system-and-installing-required-libraries",children:"Updating the System and Installing Required Libraries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update\napt upgrade -y\napt-get install curl git screen -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-rust",children:"Installing the Rust"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"source $HOME/.cargo/env\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can check the version."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"rustc --version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-stable-version-update-and-default-set-up",children:"Installing the Stable Version, Update and Default Set up"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"rustup install stable\nrustup update stable\nrustup default stable\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-fuel",children:"Installing the Fuel"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"curl https://install.fuel.network | sh\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"source /root/.bashrc\n"})}),"\n",(0,a.jsx)(n.h3,{id:"installing-and-updating-the-fuel-toolchain",children:"Installing and Updating the Fuel Toolchain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"fuelup toolchain install latest\nfuelup self update\nfuelup update && fuelup default latest\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-the-contract",children:"Creating the Contract"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mkdir fuel-project && cd fuel-project\nforc new counter-contract\n"})}),"\n",(0,a.jsx)(n.h3,{id:"mainsw-dosyas\u0131n\u0131-d\xfczenleme",children:"main.sw Dosyas\u0131n\u0131 D\xfczenleme"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"nano counter-contract/src/main.sw\n"})}),"\n",(0,a.jsx)(n.p,{children:"Open the file and delete everything in it, then paste the codes below, save and exit with CTRL, X, Y and Enter."}),"\n","\n",(0,a.jsx)(r.Z,{children:(0,a.jsx)(s.Z,{value:"Codes for main.sw file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"contract;\n\nstorage {\n\t\tcounter: u64 = 0,\n}\n\nabi Counter {\n\t\t#[storage(read, write)]\n\t\tfn increment();\n\n\t\t#[storage(read)]\n\t\tfn count() -> u64;\n}\n\nimpl Counter for Contract {\n\t\t#[storage(read)]\n\t\tfn count() -> u64 {\n\t\t\t\tstorage.counter.read()\n\t\t}\n\n#[storage(read, write)]\nfn increment() {\n    let incremented = storage.counter.read() + 1;\n    storage.counter.write(incremented);\n\t\t}\n}\n"})})})}),"\n",(0,a.jsx)(n.h3,{id:"preparing-the-contract",children:"Preparing the Contract"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd counter-contract\nforc build\n"})}),"\n",(0,a.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,a.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forc wallet import \n"})}),"\n",(0,a.jsx)(n.p,{children:"If the above code gives an error, use the code below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forc-wallet import \n"})}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forc wallet account new\n"})}),"\n",(0,a.jsx)(n.p,{children:"If the above code gives an error, use the code below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forc-wallet new\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Don't forget to keep your wallet words in a safe place."})}),"\n",(0,a.jsx)(n.h2,{id:"musluk",children:"Musluk"}),"\n",(0,a.jsxs)(n.p,{children:["Kontar deploy etmek i\xe7in c\xfczdan\u0131m\u0131zda test ETH olmas\u0131 gerekiyor. Token almak i\xe7in ",(0,a.jsx)(n.a,{href:"https://faucet-testnet.fuel.network/",children:"faucet"}),"sayfas\u0131na gidin."]}),"\n",(0,a.jsx)(n.h2,{id:"creating-the-contract-1",children:"Creating the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["After entering the code below, first type ",(0,a.jsx)(n.code,{children:"0"})," and enter, and then type ",(0,a.jsx)(n.code,{children:"y"})," and enter."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forc deploy --testnet\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can check the TX Hash given in the output from ",(0,a.jsx)(n.a,{href:"https://app.fuel.network/",children:"Fuel Explorer"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(90512);const l={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),l=t(90512),r=t(12466),s=t(16550),i=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:l}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,u.Nk)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),v=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==a&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,l.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,l.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,m.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},69003:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Fuel-Service-Cover-6f4d93fac0d15328cd0f060695e07973.jpg"},7211:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/FuelVideoGuide-08e397ef3dfb3d687c7eb717d21daaa3.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const l={},r=a.createContext(l);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);