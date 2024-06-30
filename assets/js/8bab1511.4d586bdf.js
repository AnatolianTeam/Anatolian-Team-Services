"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5193],{52987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=s(85893),l=s(11151);const i={title:"\ud83d\udcbe Installation",description:"RPC Node installation guide.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},t="Installation",r={id:"RPC Node/zksync/installation",title:"\ud83d\udcbe Installation",description:"RPC Node installation guide.",source:"@site/docs/RPC Node/zksync/installation.md",sourceDirName:"RPC Node/zksync",slug:"/RPC Node/zksync/installation",permalink:"/docs/RPC Node/zksync/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/RPC Node/zksync/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"RPC Node installation guide.",image:"./img/zksync-Service-Cover.jpg",keywords:["zksync","rpc","node"]},sidebar:"tutorialSidebar",previous:{title:"zksync",permalink:"/docs/RPC Node/zksync/"},next:{title:"\ud83d\udcf6 Add RPC",permalink:"/docs/RPC Node/zksync/rpc-add"}},c={image:s(8569).Z},a=[{value:"Server Rental",id:"server-rental",level:2},{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Git",id:"installing-the-git",level:2},{value:"Installing the Docker",id:"installing-the-docker",level:2},{value:"Checking the Docker Version",id:"checking-the-docker-version",level:3},{value:"Installing the Docker Compose",id:"installing-the-docker-compose",level:2},{value:"Docker Compose Run Permission",id:"docker-compose-run-permission",level:3},{value:"Checking the Docker Compose Version",id:"checking-the-docker-compose-version",level:3},{value:"Cloning the zksync Repo",id:"cloning-the-zksync-repo",level:2},{value:"Starting the Node",id:"starting-the-node",level:2},{value:"Checking the Docker Containers",id:"checking-the-docker-containers",level:3},{value:"Checking the Logs",id:"checking-the-logs",level:3},{value:"RPC URL Operations",id:"rpc-url-operations",level:2},{value:"Editing the .yml File",id:"editing-the-yml-file",level:3},{value:"Restarting Node",id:"restarting-node",level:3},{value:"Take the RPC URL",id:"take-the-rpc-url",level:2},{value:"End of Process",id:"end-of-process",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.h2,{id:"server-rental",children:"Server Rental"}),"\n",(0,o.jsxs)(n.p,{children:["For this, it would be useful to obtain the AX52 VDS 1TB server from ",(0,o.jsx)(n.a,{href:"https://hetzner.cloud/?ref=z9uy37L7ovja",children:"Hetzner"}),", which you can use on an hourly basis. This is essential to avoid problems on shared (VPS) servers. After installing Ubuntu 22.04 on the server, you can proceed to the following steps."]}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installing-the-git",children:"Installing the Git"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"apt install git\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installing-the-docker",children:"Installing the Docker"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"apt install docker.io\n"})}),"\n",(0,o.jsx)(n.h3,{id:"checking-the-docker-version",children:"Checking the Docker Version"}),"\n",(0,o.jsx)(n.p,{children:"Check the installation with the code below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker --version\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installing-the-docker-compose",children:"Installing the Docker Compose"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n'})}),"\n",(0,o.jsx)(n.h3,{id:"docker-compose-run-permission",children:"Docker Compose Run Permission"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,o.jsx)(n.h3,{id:"checking-the-docker-compose-version",children:"Checking the Docker Compose Version"}),"\n",(0,o.jsx)(n.p,{children:"Ala\u011f\u0131daki kod ile kurulumu kontrol edin."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker-compose --version\n"})}),"\n",(0,o.jsx)(n.h2,{id:"cloning-the-zksync-repo",children:"Cloning the zksync Repo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/matter-labs/zksync-era.git\n"})}),"\n",(0,o.jsx)(n.h2,{id:"starting-the-node",children:"Starting the Node"}),"\n",(0,o.jsx)(n.p,{children:"Go to the relevant directory."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then start the node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker-compose -f mainnet-external-node-docker-compose.yml up -d\n"})}),"\n",(0,o.jsx)(n.h3,{id:"checking-the-docker-containers",children:"Checking the Docker Containers"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker ps\n"})}),"\n",(0,o.jsx)(n.h3,{id:"checking-the-logs",children:"Checking the Logs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker logs -f --tail 100 docker-compose-examples_external-node_1\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Then close the logs with CTRL C. Turning off the logs does not stop the node, it continues to run in the background. If you run it on a screen without closing it, these logs will take up space on your disk over time."})}),"\n",(0,o.jsx)(n.h2,{id:"rpc-url-operations",children:"RPC URL Operations"}),"\n",(0,o.jsx)(n.h3,{id:"editing-the-yml-file",children:"Editing the .yml File"}),"\n",(0,o.jsx)(n.p,{children:"First, open this file."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"nano $HOME/zksync-era/docs/guides/external-node/docker-compose-examples/mainnet-external-node-docker-compose.yml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, change the section shown below in the file - ",(0,o.jsx)(n.code,{children:'"127.0.0.1:3060:3060"'})," to ",(0,o.jsx)(n.code,{children:'"0.0.0.0:3060:3060"'}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'.\n.\n.\n  external-node:\n    image: "matterlabs/external-node:2.0-v24.0.0"\n    depends_on:\n      postgres:\n        condition: service_healthy\n    ports:\n      - "127.0.0.1:3060:3060". ## Change this section to: `"0.0.0.0:3060:3060"`\n      - "127.0.0.1:3061:3061"\n      - "127.0.0.1:3081:3081"\n    volumes:\n      - mainnet-rocksdb:/db\n    expose:\n      - 3322\n.\n.\n.\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Then press ",(0,o.jsx)(n.code,{children:"CTRL X, Y and enter"})," and save it."]}),"\n",(0,o.jsx)(n.h3,{id:"restarting-node",children:"Restarting Node"}),"\n",(0,o.jsx)(n.p,{children:"With this process, we will apply the changes we made above."}),"\n",(0,o.jsx)(n.p,{children:"First close docker compose."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples\ndocker-compose -f mainnet-external-node-docker-compose.yml down\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then restart."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker-compose -f mainnet-external-node-docker-compose.yml up -d\n"})}),"\n",(0,o.jsx)(n.h2,{id:"take-the-rpc-url",children:"Take the RPC URL"}),"\n",(0,o.jsx)(n.p,{children:"The node will be using port 3060."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"You can add your rpc address to your wallet as follows."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Network name: The name does not matter, you can write any name you want.\n\nRPC URL: http://SERVER_IP_ADDRESS:3060\n\nChain ID: 324\n\nBlock Explorer: https://explorer.zksync.io/blocks/\n"})}),"\n",(0,o.jsx)(n.h2,{id:"end-of-process",children:"End of Process"}),"\n",(0,o.jsx)(n.p,{children:"After you are done with RPC, you can turn off your server from your Hetzner control panel."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8569:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/zksync-Service-Cover-4aaba1467f44d7fad32a2a3c446ffa15.jpg"},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var o=s(67294);const l={},i=o.createContext(l);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);