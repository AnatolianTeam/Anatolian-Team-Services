"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5487],{6371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const l={title:"\ud83d\udcbe Installation",description:"Pingpong installation guide.",image:"./img/Pingpong-Service-Cover.jpg",keywords:["Pingpong","build","DePINFi","installation"]},o="Pingpong Installation",a={id:"Testnet/pingpong/installation",title:"\ud83d\udcbe Installation",description:"Pingpong installation guide.",source:"@site/docs/Testnet/pingpong/installation.md",sourceDirName:"Testnet/pingpong",slug:"/Testnet/pingpong/installation",permalink:"/docs/Testnet/pingpong/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/pingpong/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Pingpong installation guide.",image:"./img/Pingpong-Service-Cover.jpg",keywords:["Pingpong","build","DePINFi","installation"]},sidebar:"tutorialSidebar",previous:{title:"Pingpong",permalink:"/docs/Testnet/pingpong/"},next:{title:"\ud83d\udc64 User Guide",permalink:"/docs/Testnet/pingpong/user-guide"}},r={image:t(9887).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing the Docker",id:"installing-the-docker",level:2},{value:"Downloading the Pingpong",id:"downloading-the-pingpong",level:2},{value:"Running the Pingpong",id:"running-the-pingpong",level:2},{value:"Other Tasks",id:"other-tasks",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pingpong-installation",children:"Pingpong Installation"}),"\n",(0,i.jsx)(n.p,{children:"Ubuntu installation is explained here."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The server you will install on must be 22.04."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Things to do before you start:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Connect to ",(0,i.jsx)(n.a,{href:"https://harvester.pingpong.build/",children:"Harvester"})," with your Google account and create an account."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Add Devices"})," button you see in the picture below.\n",(0,i.jsx)(n.img,{alt:"Pingpong-1",src:t(567).Z+"",width:"3456",height:"1762"})]}),"\n",(0,i.jsxs)(n.li,{children:["In the window that opens, enter ",(0,i.jsx)(n.code,{children:"your device name"})," and get your ",(0,i.jsx)(n.code,{children:"ID"})," as you see in the picture below. ",(0,i.jsx)(n.code,{children:"This ID will be needed at the last stage."}),"\n",(0,i.jsx)(n.img,{alt:"Pingpong-2",src:t(3848).Z+"",width:"3452",height:"1756"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Linux"})," and then click on the ",(0,i.jsx)(n.code,{children:"Let's Gooo!"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'apt install wget screen -y < "/dev/null"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-docker",children:"Installing the Docker"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,i.jsx)(n.h2,{id:"downloading-the-pingpong",children:"Downloading the Pingpong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget https://pingpong-build.s3.ap-southeast-1.amazonaws.com/linux/latest/PINGPONG\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Alternative:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget https://anatolianteam.com/PINGPONG\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-the-pingpong",children:"Running the Pingpong"}),"\n",(0,i.jsx)(n.p,{children:"Open a screen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"screen -S pin\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ID"})," yazan yere panelde size verilen DI'ui yaz\u0131n\u0131z."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"chmod +x ./PINGPONG && ./PINGPONG --key ID\n"})}),"\n",(0,i.jsx)(n.h2,{id:"other-tasks",children:"Other Tasks"}),"\n",(0,i.jsxs)(n.p,{children:["You can do the tasks by going to the ",(0,i.jsx)(n.a,{href:"https://app.pingpong.build/points?invite_code=FvjWneYQ",children:"Application"})," page and connecting wallet and twitter."]}),"\n",(0,i.jsx)(n.p,{children:"In addition, you can collect points by requesting your tokens on the holesky network with the wallet on the panel and doing tasks."})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9887:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Pingpong-Service-Cover-086f4d4c9b8ad45631ebe0fb0e54a30b.jpg"},567:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pingpong-1-fb773e8397db10e11d4dcefe120772bb.png"},3848:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pingpong-2-491a8e6e10ff4218673f80a55878e448.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);