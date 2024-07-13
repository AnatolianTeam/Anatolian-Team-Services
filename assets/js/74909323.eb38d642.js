"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[6386],{19830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(85893),i=t(11151);const l={title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","installation","snapshot","statesync","update"]},r="Installation",s={id:"Mainnet/penumbra/installation",title:"\ud83d\udcbe Installation",description:"Node installation guide.",source:"@site/docs/Mainnet/penumbra/installation.md",sourceDirName:"Mainnet/penumbra",slug:"/Mainnet/penumbra/installation",permalink:"/docs/Mainnet/penumbra/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Mainnet/penumbra/installation.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Installation",description:"Node installation guide.",image:"./img/Penumbra-Service-Cover.jpg",keywords:["penumbra","installation","snapshot","statesync","update"]},sidebar:"tutorialSidebar",previous:{title:"Penumbra Zone",permalink:"/docs/Mainnet/penumbra/"},next:{title:"\ud83c\udd99 Update",permalink:"/docs/Mainnet/penumbra/update"}},o={image:t(42385).Z},c=[{value:"Updating the System",id:"updating-the-system",level:2},{value:"Installing the Necessary Libraries",id:"installing-the-necessary-libraries",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Penumbra Command Line Interface (CLI) Installation",id:"penumbra-command-line-interface-cli-installation",level:2},{value:"Creating a Penumbra Wallet",id:"creating-a-penumbra-wallet",level:2},{value:"Set up Penumbra and CometBFT",id:"set-up-penumbra-and-cometbft",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["You can check versions of pcli, pd and pclientd ",(0,a.jsx)(n.a,{href:"https://github.com/penumbra-zone/penumbra/releases",children:"here"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"updating-the-system",children:"Updating the System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"apt update && apt upgrade -y\n"})}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-necessary-libraries",children:"Installing the Necessary Libraries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"installing-go",children:"Installing Go"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ver=\"1.21.6\"\nwget \"https://golang.org/dl/go$ver.linux-amd64.tar.gz\"\nrm -rf /usr/local/go\ntar -C /usr/local -xzf \"go$ver.linux-amd64.tar.gz\"\nrm -rf \"go$ver.linux-amd64.tar.gz\"\necho 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile\necho 'export GOPATH=$HOME/go' >> $HOME/.bash_profile\necho 'export GO111MODULE=on' >> $HOME/.bash_profile\necho 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\ngo version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"penumbra-command-line-interface-cli-installation",children:"Penumbra Command Line Interface (CLI) Installation"}),"\n",(0,a.jsx)(n.p,{children:"Requirements: Ubuntu version 22.04"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Important Note: This guide assumes you're comfortable using the command line."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pcli-installer.sh | sh\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"source $HOME/.cargo/env\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Please confirm that the Command Line Interface (CLI) installation has been successfully finalized."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli --version\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-penumbra-wallet",children:"Creating a Penumbra Wallet"}),"\n",(0,a.jsx)(n.p,{children:"Utilizing the CLI, you'll initiate the wallet generation."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli init soft-kms generate\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"As you go through the process, a private key (Private Seed) will be generated. It's crucial to safeguard this key diligently, as it serves as a lifeline in the unfortunate event of losing access to your wallet."})}),"\n",(0,a.jsx)(n.p,{children:"To locate your wallet address, employ the subsequent command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli view address\n"})}),"\n",(0,a.jsx)(n.p,{children:"Should you need to import a wallet you've previously generated:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli init soft-kms import-phrase\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Head over to the ",(0,a.jsx)(n.a,{href:"https://discord.gg/2Ez55n4txb",children:"Penumbra Discord"})," to redeem faucet tokens for the wallet you've generated."]}),"\n",(0,a.jsx)(n.p,{children:"Insert your wallet address into the #-testnet-faucet channel."}),"\n",(0,a.jsx)(n.p,{children:"Check your wallet balance:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pcli view sync\npcli view balance\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-up-penumbra-and-cometbft",children:"Set up Penumbra and CometBFT"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},42385:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Penumbra-Service-Cover-9b8346501f1f076cba2beda8f0510843.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);