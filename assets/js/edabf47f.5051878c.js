"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8299],{9032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(5893),a=t(1151),s=t(4866),i=t(5162);const l={title:"\ud83c\udd99 Migration",description:"Update node with manual or scheduled.",image:"./img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"],slug:"migrate"},o="Forta Node Migration",c={id:"Mainnet/Forta/vmigrate",title:"\ud83c\udd99 Migration",description:"Update node with manual or scheduled.",source:"@site/docs/Mainnet/Forta/vmigrate.md",sourceDirName:"Mainnet/Forta",slug:"/Mainnet/Forta/migrate",permalink:"/docs/Mainnet/Forta/migrate",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/Forta/vmigrate.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd99 Migration",description:"Update node with manual or scheduled.",image:"./img/Forta-Service-Cover.jpg",keywords:["forta","network","security","intel"],slug:"migrate"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udd99 Update",permalink:"/docs/Mainnet/Forta/update"},next:{title:"\u2934\ufe0f Cheatsheets",permalink:"/docs/Mainnet/Forta/cheatsheets"}},d={image:t(3204).Z},u=[{value:"Copying the .forta Folder",id:"copying-the-forta-folder",level:2},{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Docker",id:"installing-docker",level:2},{value:"Creating a Docker Daemon File",id:"creating-a-docker-daemon-file",level:2},{value:"Restarting Docker",id:"restarting-docker",level:2},{value:"Installing Forta",id:"installing-forta",level:2},{value:"Moving .forta Folder to New Server",id:"moving-forta-folder-to-new-server",level:2},{value:"Checking the Configuration File",id:"checking-the-configuration-file",level:2},{value:"Registering Wallet",id:"registering-wallet",level:2},{value:"Checking Service File",id:"checking-service-file",level:2},{value:"Activating and Running Forta",id:"activating-and-running-forta",level:2},{value:"Checking Node Status",id:"checking-node-status",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"forta-node-migration",children:"Forta Node Migration"}),"\n",(0,r.jsx)(n.h2,{id:"copying-the-forta-folder",children:"Copying the .forta Folder"}),"\n",(0,r.jsxs)(n.p,{children:["First of all, we need to install winscp, termius etc. on our server. We connect with a program and copy the .forta folder in the root directory to our computer.\n",(0,r.jsx)(n.img,{alt:"Forta-1",src:t(8644).Z+"",width:"1522",height:"762"})]}),"\n",(0,r.jsx)(n.p,{children:"Bu ad\u0131m\u0131 ger\xe7ekle\u015ftirdikten sonra yeni sunucumuza kurulum yap\u0131yoruz."}),"\n",(0,r.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt update && sudo apt upgrade -y\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'sudo apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you get an error or 'Abort' output when you enter the above codes all at once, enter the codes one by one."}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-docker-daemon-file",children:"Creating a Docker Daemon File"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'tee /etc/docker/daemon.json > /dev/null <<EOF\n{\n   "default-address-pools": [\n        {\n            "base":"172.17.0.0/12",\n            "size":16\n        },\n        {\n            "base":"192.168.0.0/16",\n            "size":20\n        },\n        {\n            "base":"10.99.0.0/16",\n            "size":24\n        }\n    ]\n}\nEOF\n'})}),"\n",(0,r.jsx)(n.h2,{id:"restarting-docker",children:"Restarting Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl restart docker\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-forta",children:"Installing Forta"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo curl https://dist.forta.network/pgp.public -o /usr/share/keyrings/forta-keyring.asc -s\necho 'deb [signed-by=/usr/share/keyrings/forta-keyring.asc] https://dist.forta.network/repositories/apt stable main' | sudo tee -a /etc/apt/sources.list.d/forta.list\napt-get update\napt-get install forta\n"})}),"\n",(0,r.jsx)(n.h2,{id:"moving-forta-folder-to-new-server",children:"Moving .forta Folder to New Server"}),"\n",(0,r.jsxs)(n.p,{children:["This time we copy the .forta folder we copied here to our new server.\n",(0,r.jsx)(n.img,{alt:"Forta-2",src:t(7186).Z+"",width:"1553",height:"666"})]}),"\n",(0,r.jsx)(n.h2,{id:"checking-the-configuration-file",children:"Checking the Configuration File"}),"\n",(0,r.jsxs)(n.p,{children:["We open the ",(0,r.jsx)(n.code,{children:"config.yml"})," file with the code below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nano /root/.forta/config.yml\n"})}),"\n",(0,r.jsx)(n.p,{children:"We check whether the file content is as follows. In the 'ALCHEMY_LINK' section, we also check whether your alchemy address starting with 'https' is correct. If the file content is not as follows, we delete the codes in the file, edit the code below and paste it into the file."}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"Polygon",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 137\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(i.Z,{value:"BSC",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 56\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(i.Z,{value:"Ethereum",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 1\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(i.Z,{value:"Arbitrum",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 42161\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(i.Z,{value:"Optimism",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 10\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(i.Z,{value:"Avalanche",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 43114\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(i.Z,{value:"Fantom",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 250\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"registering-wallet",children:"Registering Wallet"}),"\n",(0,r.jsxs)(n.p,{children:["We enter your EVM wallet address where it says ",(0,r.jsx)(n.code,{children:"EVM_ADDRESS"})," and the password you set in the Forta installation above where it says ",(0,r.jsx)(n.code,{children:"PASSWORD"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"forta register --owner-address EVM_ADDRESS --passphrase PASSWORD\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki gibi bir \xe7\u0131kt\u0131 al\u0131yoruz.\n",(0,r.jsx)(n.img,{alt:"Forta-3",src:t(1102).Z+"",width:"1347",height:"102"})]}),"\n",(0,r.jsx)(n.h2,{id:"checking-service-file",children:"Checking Service File"}),"\n",(0,r.jsxs)(n.p,{children:["We open the ",(0,r.jsx)(n.code,{children:"forta.service"})," file with the code below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nano /lib/systemd/system/forta.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We check whether the file content is as follows.\nInstead of ",(0,r.jsx)(n.code,{children:"PASSWORD"}),", we check whether it is the same as the password you set in the first Forta installation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'sudo tee /lib/systemd/system/forta.service > /dev/null <<EOF\n[Unit]\nDescription=Forta\nAfter=network-online.target\nWants=network-online.target systemd-networkd-wait-online.service\n\nStartLimitIntervalSec=500\nStartLimitBurst=5\n\n[Service]\nEnvironment="FORTA_DIR=/root/.forta/"\nEnvironment="FORTA_PASSPHRASE=PASSWORD"\nRestart=on-failure\nRestartSec=15s\n\nExecStart=/usr/bin/forta run\n\n[Install]\nWantedBy=multi-user.target\nEOF\n'})}),"\n",(0,r.jsx)(n.h2,{id:"activating-and-running-forta",children:"Activating and Running Forta"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\nsystemctl restart forta\n"})}),"\n",(0,r.jsx)(n.h2,{id:"checking-node-status",children:"Checking Node Status"}),"\n",(0,r.jsx)(n.p,{children:"Finally, we check our node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl status forta\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you receive an output like the one below, the migration process has been completed successfully.\n",(0,r.jsx)(n.img,{alt:"Forta-4",src:t(2499).Z+"",width:"1582",height:"543"})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),a=t(512),s=t(2466),i=t(6550),l=t(469),o=t(1980),c=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=f({queryString:t,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=c??p;return g({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(x,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},3204:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Forta-Service-Cover-eb7cdd6941c02402891005b5fb498ba7.jpg"},8644:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/migrate-1-59c9598a2ebe7c85c67f97f2520e36d2.jpg"},7186:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/migrate-2-e043dbab44f4dd27727b34a871833ff3.jpg"},1102:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/migrate-3-e4707d38f9b100988ac0d0a4b63ad823.png"},2499:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/migrate-4-af967a14a9276400fdb30339e1abe42e.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(7294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);