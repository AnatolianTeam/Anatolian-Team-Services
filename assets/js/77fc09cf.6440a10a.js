"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[5686],{6191:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var l=i(5893),a=i(1151);const t={title:"\ud83c\udf8a Ceremony",description:"Penumbra Summoning Ceremony installation guide.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","summoning","ceremony","private","chain","installation"]},r="Penumbra Ceremony Phase 2 Installation",s={id:"Testnet/penumbra/ceromony",title:"\ud83c\udf8a Ceremony",description:"Penumbra Summoning Ceremony installation guide.",source:"@site/docs/Testnet/penumbra/ceromony.md",sourceDirName:"Testnet/penumbra",slug:"/Testnet/penumbra/ceromony",permalink:"/docs/Testnet/penumbra/ceromony",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/penumbra/ceromony.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udf8a Ceremony",description:"Penumbra Summoning Ceremony installation guide.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","summoning","ceremony","private","chain","installation"]},sidebar:"tutorialSidebar",previous:{title:"Penumbra Zone",permalink:"/docs/Testnet/penumbra/"},next:{title:"Redbelly Network",permalink:"/docs/Testnet/redbelly/"}},c={image:i(4113).Z},o=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the screen",id:"installing-the-screen",level:2},{value:"Installing Penumbra pcli",id:"installing-penumbra-pcli",level:2},{value:"Updating pcli",id:"updating-pcli",level:3},{value:"Wallet",id:"wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Learning Wallet Address",id:"learning-wallet-address",level:3},{value:"Faucet",id:"faucet",level:3},{value:"Sync Wallet",id:"sync-wallet",level:3},{value:"Checking Balance",id:"checking-balance",level:3},{value:"Participating in the Ceremony Phase 2",id:"participating-in-the-ceremony-phase-2",level:2},{value:"Sharing on X",id:"sharing-on-x",level:2},{value:"Fill Out the Form",id:"fill-out-the-form",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"penumbra-ceremony-phase-2-installation",children:"Penumbra Ceremony Phase 2 Installation"}),"\n",(0,l.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-screen",children:"Installing the screen"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"apt install screen\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-penumbra-pcli",children:"Installing Penumbra pcli"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.71.0/pcli-x86_64-unknown-linux-gnu.tar.xz\nunxz pcli-x86_64-unknown-linux-gnu.tar.xz\ntar -xf pcli-x86_64-unknown-linux-gnu.tar\nsudo mv pcli-x86_64-unknown-linux-gnu/pcli /usr/local/bin/\npcli --version\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The version output will be ",(0,l.jsx)(n.code,{children:"pcli v0.71.0"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"updating-pcli",children:"Updating pcli"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"If you have participated in Phase 1 before and the previous pcli version is installed on your server, run the code below. If not, you do not need to do this."})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pcli view reset\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"No wallet needs to be generated. The existing wallet will be used automatically."})}),"\n",(0,l.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,l.jsxs)(n.p,{children:["You can download the Penumbra wallet ",(0,l.jsx)(n.a,{href:"https://chromewebstore.google.com/detail/penumbra-wallet/lkpmkhpnhknhmibgnmmhdhgdilepfghe",children:"here"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,l.jsx)(n.p,{children:"Create a new wallet by running the code below."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pcli init soft-kms generate\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Don't forget to save your wallet seed phrase!"})}),"\n",(0,l.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,l.jsx)(n.p,{children:"If you have participated in previous ceremony and already have a wallet, you can import it."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pcli init soft-kms import-phrase\n"})}),"\n",(0,l.jsx)(n.h3,{id:"learning-wallet-address",children:"Learning Wallet Address"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pcli view address 0\n"})}),"\n",(0,l.jsx)(n.h3,{id:"faucet",children:"Faucet"}),"\n",(0,l.jsxs)(n.p,{children:["Request tokens by sending your wallet address to the ",(0,l.jsx)(n.code,{children:"#\ud83d\udeb0\u2503testnet-faucet"})," channel on the ",(0,l.jsx)(n.a,{href:"https://discord.gg/T7E5U929AV",children:"Discord"})," server."]}),"\n",(0,l.jsx)(n.h3,{id:"sync-wallet",children:"Sync Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pcli view sync\n"})}),"\n",(0,l.jsx)(n.h3,{id:"checking-balance",children:"Checking Balance"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"pcli view balance\n"})}),"\n",(0,l.jsx)(n.h2,{id:"participating-in-the-ceremony-phase-2",children:"Participating in the Ceremony Phase 2"}),"\n",(0,l.jsxs)(n.p,{children:["You may need to increase the bid at this stage. You can increase your own bid by checking the highest bet in ",(0,l.jsx)(n.a,{href:"https://summoning.penumbra.zone/phase/2",children:"Explorer"}),". To do this, just change where it says ",(0,l.jsx)(n.code,{children:"80penumbra"}),". The process may take a long time, so run the code in screen. Press ",(0,l.jsx)(n.code,{children:"CTRL A D"})," to exit the screen."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"screen -S pen\npcli ceremony contribute --phase 2 --bid 80penumbra \n"})}),"\n",(0,l.jsx)(n.h2,{id:"sharing-on-x",children:"Sharing on X"}),"\n",(0,l.jsxs)(n.p,{children:["Make a post that includes the ",(0,l.jsx)(n.code,{children:"contribution receipt hash"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"fill-out-the-form",children:"Fill Out the Form"}),"\n",(0,l.jsxs)(n.p,{children:["Complete the ",(0,l.jsx)(n.code,{children:"Penumbra Summoning Phase 2 Attestations"})," ",(0,l.jsx)(n.a,{href:"https://form.asana.com/?k=THhk7qmp3IDwCvXWTPHkow&d=1206052071402903",children:"form"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4113:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/Penumbra-Service-Cover-9b8346501f1f076cba2beda8f0510843.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var l=i(7294);const a={},t=l.createContext(a);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);