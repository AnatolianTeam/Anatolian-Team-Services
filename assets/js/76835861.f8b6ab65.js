"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[8423],{6727:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"Testnet/Arweave Ecosystem/liteseed/installation","title":"\ud83d\udcbe Installation","description":"Liteseed installation guide.","source":"@site/docs/Testnet/Arweave Ecosystem/liteseed/installation.md","sourceDirName":"Testnet/Arweave Ecosystem/liteseed","slug":"/Testnet/Arweave Ecosystem/liteseed/installation","permalink":"/docs/Testnet/Arweave Ecosystem/liteseed/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/Arweave Ecosystem/liteseed/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"\ud83d\udcbe Installation","description":"Liteseed installation guide.","image":"./img/Liteseed-Service-Cover.jpg","keywords":["Liteseed","ao","data","Permaweb","installation"],"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Liteseed","permalink":"/docs/Testnet/Arweave Ecosystem/liteseed/"},"next":{"title":"Orbit","permalink":"/docs/Testnet/Arweave Ecosystem/orbit/"}}');var s=i(74848),l=i(28453);const r={title:"\ud83d\udcbe Installation",description:"Liteseed installation guide.",image:"./img/Liteseed-Service-Cover.jpg",keywords:["Liteseed","ao","data","Permaweb","installation"],sidebar_position:1},a="Liteseed Installation Guide",d={image:i(21422).A},o=[{value:"Domain",id:"domain",level:2},{value:"Creating a Subdomain",id:"creating-a-subdomain",level:3},{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing Docker",id:"installing-docker",level:2},{value:"Installing Nnginx and Certbot",id:"installing-nnginx-and-certbot",level:2},{value:"Cloning the Repo",id:"cloning-the-repo",level:2},{value:"Creating Docker Image",id:"creating-docker-image",level:2},{value:"Creating Volume",id:"creating-volume",level:2},{value:"Generating Arweave Private Key and Migrate the SQLite Database",id:"generating-arweave-private-key-and-migrate-the-sqlite-database",level:2},{value:"Starting the Node",id:"starting-the-node",level:2},{value:"Learning Wallet Address",id:"learning-wallet-address",level:2},{value:"Domain SSL and TXT Record",id:"domain-ssl-and-txt-record",level:2},{value:"Create SSL (HTTPS) Certificates for Your Domain:",id:"create-ssl-https-certificates-for-your-domain",level:3},{value:"Preparing Nginx .conf Files",id:"preparing-nginx-conf-files",level:3},{value:"Requesting Tokens",id:"requesting-tokens",level:2},{value:"Staking",id:"staking",level:2},{value:"Controling Stake",id:"controling-stake",level:2},{value:"Restarting the Node",id:"restarting-the-node",level:2},{value:"Backing Up the Wallet",id:"backing-up-the-wallet",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"liteseed-installation-guide",children:"Liteseed Installation Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"domain",children:"Domain"}),"\n",(0,s.jsx)(n.p,{children:"Before starting, you must have a domain. Get yourself a domain from a service provider. You can find a domain for $1 per year."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-subdomain",children:"Creating a Subdomain"}),"\n",(0,s.jsx)(n.p,{children:"Go to your service provider's panel and enter the advanced DNS settings or IP Based DNS settings section. Create 2 A records here."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["*For the first ",(0,s.jsx)(n.code,{children:"A"})," record, write ",(0,s.jsx)(n.code,{children:"lite"})," or ",(0,s.jsx)(n.code,{children:"litesedd"})," in the ",(0,s.jsx)(n.code,{children:"record name"})," section and the ",(0,s.jsx)(n.code,{children:"IP address"})," of your server in the ",(0,s.jsx)(n.code,{children:"value"})," section and save."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When the time comes, we will take action here again, this time we will create a ",(0,s.jsx)(n.code,{children:"TXT"})," record."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-docker",children:"Installing Docker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io\ndocker version\n'})}),"\n",(0,s.jsx)(n.h2,{id:"installing-nnginx-and-certbot",children:"Installing Nnginx and Certbot"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"apt install certbot nginx -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cloning-the-repo",children:"Cloning the Repo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/liteseed/edge\n"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-docker-image",children:"Creating Docker Image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd ./edge\ndocker build -t edge .\n"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-volume",children:"Creating Volume"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker volume create liteseed\n"})}),"\n",(0,s.jsx)(n.h2,{id:"generating-arweave-private-key-and-migrate-the-sqlite-database",children:"Generating Arweave Private Key and Migrate the SQLite Database"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -v liteseed:/data edge generate\ndocker run -v liteseed:/data edge migrate\n"})}),"\n",(0,s.jsx)(n.h2,{id:"starting-the-node",children:"Starting the Node"}),"\n",(0,s.jsx)(n.p,{children:"Write the port number you want to use on your server to the variable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export EXTERNAL_PORT=8080\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then run the node.\ndocker run -d -p $EXTERNAL_PORT:8080 -v liteseed:/data edge start"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -d -p $EXTERNAL_PORT:8080 -v liteseed:/data edge start\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"And then close the logs with CTRL C. If you run it on a screen without closing it, these logs will take up space on your disk over time."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"learning-wallet-address",children:"Learning Wallet Address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -v liteseed:/data edge balance\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The output would look something this below"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU\nBalance: 1000 LSD\nStaked:  No\n"})}),"\n",(0,s.jsx)(n.h2,{id:"domain-ssl-and-txt-record",children:"Domain SSL and TXT Record"}),"\n",(0,s.jsx)(n.h3,{id:"create-ssl-https-certificates-for-your-domain",children:"Create SSL (HTTPS) Certificates for Your Domain:"}),"\n",(0,s.jsx)(n.p,{children:"After editing your email address and domain in the code below, run the code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"certbot certonly --manual --preferred-challenges dns --email EMAIL_ADDRESS -d liteseed.domain.com\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After entering the code, you will pass the places where you need to write ",(0,s.jsx)(n.code,{children:"yes"})," to accept it."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Be careful in this part. It will give you two codes for the ",(0,s.jsx)(n.code,{children:"TXT"})," record, one is ",(0,s.jsx)(n.code,{children:"Record name"})," and the other is ",(0,s.jsx)(n.code,{children:"value"}),". You will add them to your service provider."]})}),"\n",(0,s.jsxs)(n.p,{children:["Please pay attention to the following when recording ",(0,s.jsx)(n.code,{children:"TXT"}),". If your domain name is ",(0,s.jsx)(n.code,{children:"liteseed.domain.com"}),", your registration name will be: ",(0,s.jsx)(n.code,{children:"_acme-challenge.liteseed"}),"\nYou will use ",(0,s.jsx)(n.code,{children:"the code given in the output"})," as the value."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Before moving on to the next step, go to a ",(0,s.jsx)(n.a,{href:"https://dnschecker.org/",children:"DNS Checker"})," and search for ",(0,s.jsx)(n.code,{children:"_acme-challenge.liteseed.domain.com"})," to see if the record is propagated. Propagation may take a while. Press ",(0,s.jsx)(n.code,{children:"Enter"})," when the propagation starts."]})}),"\n",(0,s.jsx)(n.p,{children:"Finally, you will receive a printout showing you the directory of your certificate files."}),"\n",(0,s.jsx)(n.h3,{id:"preparing-nginx-conf-files",children:"Preparing Nginx .conf Files"}),"\n",(0,s.jsx)(n.p,{children:"We create a new .conf file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"nano /etc/nginx/conf.d/liteseed.node.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, we edit the codes below and save them to this file and exit. To exit, we say ",(0,s.jsx)(n.code,{children:"CTRL X"})," then ",(0,s.jsx)(n.code,{children:"Enter"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the fields that say ",(0,s.jsx)(n.code,{children:"liteseed.domain.com"})," and ",(0,s.jsx)(n.code,{children:"8080"})," according to your own domain name."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"server {\n    listen 443 ssl;\n    listen [::]:443 ssl;\n    server_name ar.domain.com;\n\n    ssl_certificate /etc/letsencrypt/live/liteseed.domain.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/liteseed.domain.com/privkey.pem;\n\n    location / {\n        proxy_pass http://localhost:8080;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_http_version 1.1;\n    }\n\n}\nserver {\n    listen 80;\n    listen [::]:80;\n    server_name liteseed.domain.com;\n\n    location / {\n        return 301 https://$host$request_uri;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we enter the following codes one by one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"unlink /etc/nginx/sites-available/default\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ln -s /etc/nginx/sites-available/liteseed.node.conf /etc/nginx/sites-enabled/liteseed.node.conf\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"nginx -t\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you do not see an error in the output of this code, it will give an output of OK. This shows that there is no problem with nginx settings."}),"\n",(0,s.jsx)(n.p,{children:"Finally, we restart the nginx service."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"service nginx restart\n"})}),"\n",(0,s.jsx)(n.h2,{id:"requesting-tokens",children:"Requesting Tokens"}),"\n",(0,s.jsxs)(n.p,{children:["First, fill out the ",(0,s.jsx)(n.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLSdqFBwz9h6RUSyk4So16u6aIn1b_sfuGv6JYDew_hoM8rxoRQ/viewform",children:"form"})," here."]}),"\n",(0,s.jsxs)(n.p,{children:["Then send your ",(0,s.jsx)(n.code,{children:"wallet address"}),", ",(0,s.jsx)(n.code,{children:"dicord ID"})," and ",(0,s.jsx)(n.code,{children:"website"})," you set above to ",(0,s.jsx)(n.a,{href:"mailto:hello@liteseed.xyz",children:"hello@liteseed.xyz"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Don't forget to join the ",(0,s.jsx)(n.a,{href:"https://discord.gg/WgnX4r6SMZ",children:"Discord"})," server."]}),"\n",(0,s.jsx)(n.h2,{id:"staking",children:"Staking"}),"\n",(0,s.jsxs)(n.p,{children:["To request a token, write the address (twitter or website) you gave in the e-mail you sent to where it says ",(0,s.jsx)(n.code,{children:"https://liteseed.domain.com"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'docker run -v liteseed:/data edge stake -u "https://liteseed.domain.com"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"controling-stake",children:"Controling Stake"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -v liteseed:/data edge balance\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The output would look something this below"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU\nBalance: 0 LSD\nStaked:  Yes\n"})}),"\n",(0,s.jsx)(n.h2,{id:"restarting-the-node",children:"Restarting the Node"}),"\n",(0,s.jsx)(n.p,{children:"Now you can start earning both $AR and $LSD."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -v liteseed:/data edge start\n"})}),"\n",(0,s.jsx)(n.h2,{id:"backing-up-the-wallet",children:"Backing Up the Wallet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cat /var/lib/docker/volumes/liteseed/_data/signer.json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21422:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Liteseed-Service-Cover-68e78697aa1dbdbd5f33516f3ac240e2.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);