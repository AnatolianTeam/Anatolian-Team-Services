"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[1156],{28649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"Testnet/nubit/lightnode","title":"\ud83d\udcbe Ligth Node","description":"Nubit Light Node installation guide.","source":"@site/docs/Testnet/nubit/lightnode.md","sourceDirName":"Testnet/nubit","slug":"/Testnet/nubit/lightnode","permalink":"/docs/Testnet/nubit/lightnode","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/nubit/lightnode.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe Ligth Node","description":"Nubit Light Node installation guide.","image":"./img/Nubit-Service-Cover.jpg","keywords":["Nubit","Bitcoin","Native","DA","Data Availability Layer","installation"]},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcbe Installation","permalink":"/docs/Testnet/nubit/installation"},"next":{"title":"\ud83d\udc64 User Guide","permalink":"/docs/Testnet/nubit/user-guide"}}');var l=t(74848),s=t(28453);const a={title:"\ud83d\udcbe Ligth Node",description:"Nubit Light Node installation guide.",image:"./img/Nubit-Service-Cover.jpg",keywords:["Nubit","Bitcoin","Native","DA","Data Availability Layer","installation"]},d="Nubit Light Node Installation",r={image:t(33334).A},o=[{value:"Run the Script",id:"run-the-script",level:2},{value:"Open Screen and Restart Node",id:"open-screen-and-restart-node",level:2},{value:"Getting Points",id:"getting-points",level:2},{value:"Video",id:"video",level:2},{value:"Learning Nubit Wallet Address",id:"learning-nubit-wallet-address",level:2},{value:"Nubit Wallet PUPKEY Learning",id:"nubit-wallet-pupkey-learning",level:2},{value:"Learning Nubit Wallet Mnemonics",id:"learning-nubit-wallet-mnemonics",level:2},{value:"Changing Wallet",id:"changing-wallet",level:2},{value:"Deleting Existing Wallet",id:"deleting-existing-wallet",level:3},{value:"Adding an Existing Wallet",id:"adding-an-existing-wallet",level:3},{value:"Viewing the List of Wallets",id:"viewing-the-list-of-wallets",level:3},{value:"Uninstall Node",id:"uninstall-node",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"nubit-light-node-installation",children:"Nubit Light Node Installation"})}),"\n",(0,l.jsx)(n.h2,{id:"run-the-script",children:"Run the Script"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl -sL1 https://nubit.sh | bash\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Then, when the logs first flow, it will give your wallet address, mnemonics, PUBKEY and AUTH KEY, save them and keep them in a safe place and press ",(0,l.jsx)(n.code,{children:"CTRL C"})," and stop the node."]}),"\n",(0,l.jsx)(n.h2,{id:"open-screen-and-restart-node",children:"Open Screen and Restart Node"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"screen -S nubit\n"})}),"\n",(0,l.jsx)(n.p,{children:"then use the code we used first;"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl -sL1 https://nubit.sh | bash\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Then exit the screen with ",(0,l.jsx)(n.code,{children:"CTRL A D"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"getting-points",children:"Getting Points"}),"\n",(0,l.jsxs)(n.p,{children:["Enter the PUPKEY you saved above on the ",(0,l.jsx)(n.a,{href:"https://alpha.nubit.org/",children:"Aplha"})," page and confirm it."]}),"\n",(0,l.jsx)(n.h2,{id:"video",children:"Video"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://youtu.be/krM2OlWnurQ",children:(0,l.jsx)(n.img,{alt:"Watch the video",src:t(28070).A+"",width:"3456",height:"2014"})})}),"\n",(0,l.jsx)(n.h1,{id:"useful-codes",children:"Useful Codes"}),"\n",(0,l.jsx)(n.h2,{id:"learning-nubit-wallet-address",children:"Learning Nubit Wallet Address"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$HOME/nubit-node/bin/nubit state account-address --node.store $HOME/.nubit-light-nubit-alphatestnet-1\n"})}),"\n",(0,l.jsx)(n.h2,{id:"nubit-wallet-pupkey-learning",children:"Nubit Wallet PUPKEY Learning"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$HOME/nubit-node/bin/nkey list --p2p.network nubit-alphatestnet-1 --node.type light\n"})}),"\n",(0,l.jsx)(n.h2,{id:"learning-nubit-wallet-mnemonics",children:"Learning Nubit Wallet Mnemonics"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cat $HOME/nubit-node/mnemonic.txt\n"})}),"\n",(0,l.jsx)(n.h2,{id:"changing-wallet",children:"Changing Wallet"}),"\n",(0,l.jsx)(n.h3,{id:"deleting-existing-wallet",children:"Deleting Existing Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$HOME/nubit-node/bin/nkey delete my_nubit_key -f --node.type light --p2p.network nubit-alphatestnet-1\n"})}),"\n",(0,l.jsx)(n.h3,{id:"adding-an-existing-wallet",children:"Adding an Existing Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$HOME/nubit-node/bin/nkey add CUZDAN_NAME --recover --keyring-backend test --node.type light --p2p.network nubit-alphatestnet-1\n"})}),"\n",(0,l.jsx)(n.h3,{id:"viewing-the-list-of-wallets",children:"Viewing the List of Wallets"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$HOME/nubit-node/bin/nkey list --p2p.network nubit-alphatestnet-1 --node.type light\n"})}),"\n",(0,l.jsx)(n.h2,{id:"uninstall-node",children:"Uninstall Node"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"rm -rf $HOME/nubit-node\nrm -rf $HOME/.nubit-light-nubit-alphatestnet-1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},33334:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Nubit-Service-Cover-17fd35cfabeb3df0ead946c8f39939d2.jpg"},28070:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/video-2-5417d6610f614e648788e0f5abdcc010.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const l={},s=i.createContext(l);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);