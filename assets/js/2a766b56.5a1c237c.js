"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8346],{70892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Mainnet/Forta/installation","title":"\ud83d\udcbe Installation","description":"Node installation guide.","source":"@site/docs/Mainnet/Forta/installation.md","sourceDirName":"Mainnet/Forta","slug":"/Mainnet/Forta/installation","permalink":"/docs/Mainnet/Forta/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Forta/installation.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe Installation","description":"Node installation guide.","image":"./img/Forta-Service-Cover.jpg","keywords":["forta","network","security","intel"]},"sidebar":"tutorialSidebar","previous":{"title":"Forta","permalink":"/docs/Mainnet/Forta/"},"next":{"title":"\ud83c\udd99 Update","permalink":"/docs/Mainnet/Forta/update"}}');var a=t(74848),l=t(28453),s=t(65537),i=t(79329);const o={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"]},c="Installation",d={image:t(84287).A},u=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Docker",id:"installing-docker",level:2},{value:"Creating a Docker Daemon File",id:"creating-a-docker-daemon-file",level:2},{value:"Restarting Docker",id:"restarting-docker",level:2},{value:"Installing Forta",id:"installing-forta",level:2},{value:"Creating Alchemy Account",id:"creating-alchemy-account",level:2},{value:"Creating a Configuration File",id:"creating-a-configuration-file",level:2},{value:"Registering Wallet",id:"registering-wallet",level:2},{value:"Creating the Service File",id:"creating-the-service-file",level:2},{value:"Activating and Running Forta",id:"activating-and-running-forta",level:2},{value:"Node Status",id:"node-status",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-docker-daemon-file",children:"Creating a Docker Daemon File"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'sudo tee /etc/docker/daemon.json > /dev/null <<EOF\n{\n   "default-address-pools": [\n        {\n            "base":"172.17.0.0/12",\n            "size":16\n        },\n        {\n            "base":"192.168.0.0/16",\n            "size":20\n        },\n        {\n            "base":"10.99.0.0/16",\n            "size":24\n        }\n    ]\n}\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"restarting-docker",children:"Restarting Docker"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl restart docker\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-forta",children:"Installing Forta"}),"\n",(0,a.jsxs)(n.p,{children:["Enter your password in the ",(0,a.jsx)(n.code,{children:"PASSWORD"})," section. Do not use special characters. Problems may occur when using special characters."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo curl https://dist.forta.network/pgp.public -o /usr/share/keyrings/forta-keyring.asc -s\necho 'deb [signed-by=/usr/share/keyrings/forta-keyring.asc] https://dist.forta.network/repositories/apt stable main' | sudo tee -a /etc/apt/sources.list.d/forta.list\napt-get update\napt-get install forta\nforta init --passphrase PASSWORD\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"In the output of the above codes, you will see your Scanner address as follows. After sending 0.1 MATIC to this address from your EVM wallet, we continue the transactions."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"Scanner address: 0xAAA8C491232cB65a65FBf7F36b71220B3E695AAA\n\nSuccessfully initialized at /root/.forta\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-alchemy-account",children:"Creating Alchemy Account"}),"\n",(0,a.jsxs)(n.p,{children:["We create an account by going to ",(0,a.jsx)(n.a,{href:"https://alchemy.com/?r=zc3NjI5NzM1NzMxN",children:"Alchemy"}),". Here, from the 'Create App' section, we create an 'App' for the network on which you will run your Forta Scanner Node. Here, we take our link starting with 'https' from the 'View Key' section and save it in a txt file to use where the Alchemy link is mentioned during installation."]}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-configuration-file",children:"Creating a Configuration File"}),"\n",(0,a.jsx)(n.p,{children:"Whichever network you want to run it on, you need to make the following configurations for that network."}),"\n","\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"Polygon",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 137\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(i.A,{value:"BSC",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 56\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(i.A,{value:"Ethereum",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 1\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(i.A,{value:"Arbitrum",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 42161\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(i.A,{value:"Optimism",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 10\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(i.A,{value:"Avalanche",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 43114\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,a.jsx)(i.A,{value:"Fantom",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 250\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"registering-wallet",children:"Registering Wallet"}),"\n",(0,a.jsxs)(n.p,{children:["We enter your EVM wallet address where it says ",(0,a.jsx)(n.code,{children:"EVM_ADDRESS"})," and the password you set in the Forta installation above where it says ",(0,a.jsx)(n.code,{children:"PASSWORD"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"forta register --owner-address EVM_ADDRESS --passphrase PASSWORD\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-the-service-file",children:"Creating the Service File"}),"\n",(0,a.jsxs)(n.p,{children:["We enter the password you set in the Forta installation above where it says ",(0,a.jsx)(n.code,{children:"PASSWORD"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'tee /lib/systemd/system/forta.service > /dev/null <<EOF\n[Unit]\nDescription=Forta\nAfter=network-online.target\nWants=network-online.target systemd-networkd-wait-online.service\n\nStartLimitIntervalSec=500\nStartLimitBurst=5\n\n[Service]\nEnvironment="FORTA_DIR=/root/.forta/"\nEnvironment="FORTA_PASSPHRASE=PASSWORD"\nRestart=on-failure\nRestartSec=15s\n\nExecStart=/usr/bin/forta run\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,a.jsx)(n.h2,{id:"activating-and-running-forta",children:"Activating and Running Forta"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl enable forta\nsystemctl daemon-reload\nsystemctl start forta\n"})}),"\n",(0,a.jsx)(n.h2,{id:"node-status",children:"Node Status"}),"\n",(0,a.jsxs)(n.p,{children:["To check the status of your node, you can follow it by signing up at ",(0,a.jsx)(n.a,{href:"https://scannerx.net/",children:"https://scannerx.net/"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"systemctl stop forta\nsystemctl disable forta\nrm /lib/systemd/system/forta.service -rf\nrm $HOME/.forta -rf\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u200b"})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(34164),l=t(65627),s=t(56347),i=t(50372),o=t(30604),c=t(11861),d=t(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=c??f;return g({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function j(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},84287:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Forta-Service-Cover-eb7cdd6941c02402891005b5fb498ba7.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);