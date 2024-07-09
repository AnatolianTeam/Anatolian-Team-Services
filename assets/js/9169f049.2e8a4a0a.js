"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3885],{10648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(85893),o=n(11151);const s={title:"\ud83d\udee0\ufe0f Update",description:"Allora worker installation guide.",image:"./img/Allora-Service-Cover.jpg",keywords:["Allora","AI","Layer 1","installation","Update"]},l="Allora Update",a={id:"Testnet/allora/update",title:"\ud83d\udee0\ufe0f Update",description:"Allora worker installation guide.",source:"@site/docs/Testnet/allora/update.md",sourceDirName:"Testnet/allora",slug:"/Testnet/allora/update",permalink:"/docs/Testnet/allora/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/allora/update.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udee0\ufe0f Update",description:"Allora worker installation guide.",image:"./img/Allora-Service-Cover.jpg",keywords:["Allora","AI","Layer 1","installation","Update"]},sidebar:"tutorialSidebar",previous:{title:"Allora",permalink:"/docs/Testnet/allora/"},next:{title:"\ud83d\udcbe Worker",permalink:"/docs/Testnet/allora/worker"}},i={image:n(979).Z},c=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"allora-update",children:"Allora Update"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"1. Stop and Remove Allora Containers"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"\n'})}),"\n",(0,r.jsx)(t.p,{children:"This command stops and removes Allora containers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"2. Navigate to the basic-coin-prediction-node Directory"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd basic-coin-prediction-node\n"})}),"\n",(0,r.jsx)(t.p,{children:"Navigate to the basic-coin-prediction-node directory."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"3. Update the Docker-compose.yml File"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sed -i 's/timeout: 5s/timeout: 10s/g' docker-compose.yml\nsed -i 's/--topic=1/--topic=allora-topic-1-worker/g' docker-compose.yml\n"})}),"\n",(0,r.jsx)(t.p,{children:"Update your Docker-compose.yml file with these steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Increase the ",(0,r.jsx)(t.code,{children:"timeout"})," duration from 5 seconds to 10 seconds."]}),"\n",(0,r.jsxs)(t.li,{children:["Change ",(0,r.jsx)(t.code,{children:"--topic=1"})," to ",(0,r.jsx)(t.code,{children:"--topic=allora-topic-1-worker"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"4. Rebuild and Start Docker Containers"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"docker compose build\ndocker compose up -d\n"})}),"\n",(0,r.jsx)(t.p,{children:"Rebuild and start the Docker containers in the background with these commands."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"5. Check Logs"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"bash <(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/log.sh)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Finally, use this command to check the logs."}),"\n",(0,r.jsx)(t.p,{children:"Example log should look like this:"}),"\n",(0,r.jsx)("img",{width:"1362",alt:"Ekran Resmi 2024-07-04 01 58 08",src:"https://github.com/koltigin/Allora-Price-Prediction-Worker-Node/assets/107190154/6f13dda0-ffd8-4e6a-85a5-8b5f597d76f8"})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},979:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Allora-Service-Cover-cfd2d18aecc051f86a0c8e692e800e9b.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var r=n(67294);const o={},s=r.createContext(o);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);