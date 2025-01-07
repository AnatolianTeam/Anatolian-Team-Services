"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3946],{8302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Testnet Archive/alignedlayer/eigenlayer-avs","title":"\ud83d\udcbe EigenLayer AVS \ud83c\udd95","description":"Aligned Testnet 3 - First EigenLayer AVS.","source":"@site/docs/Testnet Archive/alignedlayer/eigenlayer-avs.md","sourceDirName":"Testnet Archive/alignedlayer","slug":"/Testnet Archive/alignedlayer/eigenlayer-avs","permalink":"/tr/docs/Testnet Archive/alignedlayer/eigenlayer-avs","draft":false,"unlisted":false,"editUrl":"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet Archive/alignedlayer/eigenlayer-avs.md","tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcbe EigenLayer AVS \ud83c\udd95","description":"Aligned Testnet 3 - First EigenLayer AVS.","image":"./img/Aligned-Service-Cover.jpg","keywords":["Aligned","Layer","alignedlayer","installation","snapshot","statesync","update"]},"sidebar":"tutorialSidebar","previous":{"title":"Aligned Layer","permalink":"/tr/docs/Testnet Archive/alignedlayer/"},"next":{"title":"\ud83d\udcbe Installation","permalink":"/tr/docs/Testnet Archive/alignedlayer/installation"}}');var a=t(74848),r=t(28453);const l={title:"\ud83d\udcbe EigenLayer AVS \ud83c\udd95",description:"Aligned Testnet 3 - First EigenLayer AVS.",image:"./img/Aligned-Service-Cover.jpg",keywords:["Aligned","Layer","alignedlayer","installation","snapshot","statesync","update"]},s="Aligned Testnet 3 - First EigenLayer AVS",o={image:t(33655).A},d=[{value:"Aligned Installation",id:"aligned-installation",level:2},{value:"Download Sample SP1 Evidence File with ELF File",id:"download-sample-sp1-evidence-file-with-elf-file",level:2},{value:"Sending Proof",id:"sending-proof",level:2},{value:"Validating Proof on the Network",id:"validating-proof-on-the-network",level:2},{value:"Tweet Task",id:"tweet-task",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"aligned-testnet-3---first-eigenlayer-avs",children:"Aligned Testnet 3 - First EigenLayer AVS"})}),"\n",(0,a.jsx)(n.h2,{id:"aligned-installation",children:"Aligned Installation"}),"\n",(0,a.jsx)(n.p,{children:"Download Aligned to send proofs to the testnet."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/install_aligned.sh | bash\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"source /root/.bashrc\n"})}),"\n",(0,a.jsx)(n.h2,{id:"download-sample-sp1-evidence-file-with-elf-file",children:"Download Sample SP1 Evidence File with ELF File"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/get_proof_test_files.sh | bash\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sending-proof",children:"Sending Proof"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"aligned submit \\\n  --proving_system SP1 \\\n  --proof ~/.aligned/test_files/sp1_fibonacci.proof \\\n  --vm_program ~/.aligned/test_files/sp1_fibonacci-elf \\\n  --aligned_verification_data_path ~/aligned_verification_data \\\n  --conn wss://batcher.alignedlayer.com\n"})}),"\n",(0,a.jsx)(n.p,{children:"Take the output of the code as a screenshot."}),"\n",(0,a.jsx)(n.h2,{id:"validating-proof-on-the-network",children:"Validating Proof on the Network"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"aligned verify-proof-onchain \\\n  --aligned-verification-data ~/aligned_verification_data/*.json \\\n  --rpc https://ethereum-holesky-rpc.publicnode.com \\\n  --chain holesky\n"})}),"\n",(0,a.jsx)(n.h2,{id:"tweet-task",children:"Tweet Task"}),"\n",(0,a.jsxs)(n.p,{children:["Finally, we copy the explorer link in the output of the code, tag Aligned and send a tweet with the screenshot we took. Then share the link of this tweet on the ",(0,a.jsx)(n.code,{children:"#\ud83e\uddea\u2503testnet"})," channel on the Aligned ",(0,a.jsx)(n.a,{href:"https://discord.gg/Kvvqf3kVBm",children:"discord"})," server."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},33655:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Aligned-Service-Cover-b8e47bb7a37bb1b5ed060cedf1ac54e1.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(96540);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);