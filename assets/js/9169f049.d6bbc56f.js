"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[3885],{10648:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(85893),t=r(11151);const a={title:"\ud83d\udee0\ufe0f Update",description:"Allora worker installation guide.",image:"./img/Allora-Service-Cover.jpg",keywords:["Allora","AI","Layer 1","installation","Update"]},l="Allora Update",c={id:"Testnet/allora/update",title:"\ud83d\udee0\ufe0f Update",description:"Allora worker installation guide.",source:"@site/docs/Testnet/allora/update.md",sourceDirName:"Testnet/allora",slug:"/Testnet/allora/update",permalink:"/docs/Testnet/allora/update",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/allora/update.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udee0\ufe0f Update",description:"Allora worker installation guide.",image:"./img/Allora-Service-Cover.jpg",keywords:["Allora","AI","Layer 1","installation","Update"]},sidebar:"tutorialSidebar",previous:{title:"Allora",permalink:"/docs/Testnet/allora/"},next:{title:"\ud83d\udcbe Worker Intallation",permalink:"/docs/Testnet/allora/worker"}},i={image:r(979).Z},s=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"allora-update",children:"Allora Update"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. Stop and Remove Basic Price Node Containers"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"\n'})}),"\n",(0,o.jsx)(n.p,{children:"This command stops and removes Allora containers."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Delete basic-coin-prediction-node Directory"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd $HOME && rm -rf basic-coin-prediction-node\n"})}),"\n",(0,o.jsx)(n.p,{children:"**3. Cloning the Allora Huggingface Walkthrough *"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/allora-network/allora-huggingface-walkthrough\ncd allora-huggingface-walkthrough\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. Create New Files"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mkdir -p worker-data\nchmod -R 777 worker-data\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"5. Creating the Config File"}),"\nRun the code below by entering your wallet name and seed phrase."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'MNEMONIC=""\nCUZDAN_ADI=""\n'})}),"\n",(0,o.jsx)(n.p,{children:"Run the following code without any changes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'tee $HOME/allora-huggingface-walkthrough/config.json > /dev/null << EOF\n{\n    "wallet": {\n        "addressKeyName": "$CUZDAN_ADI",\n        "addressRestoreMnemonic": "$MNEMONIC",\n        "alloraHomeDir": "/root/.allorad",\n        "gas": "1000000",\n        "gasAdjustment": 1.0,\n        "nodeRpc": "https://allora-rpc.testnet-1.testnet.allora.network/",\n        "maxRetries": 1,\n        "delay": 1,\n        "submitTx": false\n    },\n    "worker": [\n        {\n            "topicId": 1,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 1,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "ETH"\n            }\n        },\n        {\n            "topicId": 2,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 3,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "ETH"\n            }\n        },\n        {\n            "topicId": 3,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 5,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "BTC"\n            }\n        },\n        {\n            "topicId": 4,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 2,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "BTC"\n            }\n        },\n        {\n            "topicId": 5,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 4,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "SOL"\n            }\n        },\n        {\n            "topicId": 6,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 5,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "SOL"\n            }\n        },\n        {\n            "topicId": 7,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 2,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "ETH"\n            }\n        },\n        {\n            "topicId": 8,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 3,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "BNB"\n            }\n        },\n        {\n            "topicId": 9,\n            "inferenceEntrypointName": "api-worker-reputer",\n            "loopSeconds": 5,\n            "parameters": {\n                "InferenceEndpoint": "http://inference:8000/inference/{Token}",\n                "Token": "ARB"\n            }\n        }\n        \n    ]\n}\nEOF\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4. Creating the Coingecko API key"}),"\nGet an API Key for yourself at ",(0,o.jsx)(n.a,{href:"https://www.coingecko.com/en/developers/dashboard",children:"https://www.coingecko.com/en/developers/dashboard"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Write your own API in the code below, where it says",(0,o.jsx)(n.code,{children:"YOUR_API"}),", and run the code."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'APIKEY="YOUR_API"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then run following code."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'sed -i.bak -e "s%<Your Coingecko API key>%${APIKEY}%g" $HOME/allora-huggingface-walkthrough/app.py \n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"4. Running the Run Huggingface Worker"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"chmod +x init.config\n./init.config\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker compose up --build -d\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"5. Checking the Logs"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker compose logs -f worker\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker compose logs -f\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},979:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/Allora-Service-Cover-cfd2d18aecc051f86a0c8e692e800e9b.jpg"},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var o=r(67294);const t={},a=o.createContext(t);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);