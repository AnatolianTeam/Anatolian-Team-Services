"use strict";(self.webpackChunkservice=self.webpackChunkservice||[]).push([[4959],{32270:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=a(85893),r=a(11151);const i={title:"\ud83d\udcbe Worker",description:"Allora worker installation guide.",image:"./img/Allora-Service-Cover.jpg",keywords:["Allora","AI","Layer 1","installation"]},t="Allora Price Prediction Worker Node Installation",o={id:"Testnet/allora/worker",title:"\ud83d\udcbe Worker",description:"Allora worker installation guide.",source:"@site/docs/Testnet/allora/worker.md",sourceDirName:"Testnet/allora",slug:"/Testnet/allora/worker",permalink:"/tr/docs/Testnet/allora/worker",draft:!1,unlisted:!1,editUrl:"https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/docs/Testnet/allora/worker.md",tags:[],version:"current",frontMatter:{title:"\ud83d\udcbe Worker",description:"Allora worker installation guide.",image:"./img/Allora-Service-Cover.jpg",keywords:["Allora","AI","Layer 1","installation"]},sidebar:"tutorialSidebar",previous:{title:"Allora",permalink:"/tr/docs/Testnet/allora/"},next:{title:"Eclipse",permalink:"/tr/docs/Testnet/eclipse/"}},d={image:a(979).Z},s=[{value:"Updating the System, Installing Python and Installing Required Libraries",id:"updating-the-system-installing-python-and-installing-required-libraries",level:2},{value:"Installing the Docker",id:"installing-the-docker",level:2},{value:"Installing the Docker Compose",id:"installing-the-docker-compose",level:2},{value:"Installing the Go",id:"installing-the-go",level:2},{value:"Installing Allora &amp; Wallet",id:"installing-allora--wallet",level:2},{value:"Creating a New Wallet",id:"creating-a-new-wallet",level:3},{value:"Importing an Existing Wallet",id:"importing-an-existing-wallet",level:3},{value:"Adding the Allora Network",id:"adding-the-allora-network",level:2},{value:"Allora Dasboard",id:"allora-dasboard",level:2},{value:"Faucet",id:"faucet",level:2},{value:"Installing the Allora Worker",id:"installing-the-allora-worker",level:2},{value:"Creating the Data Files",id:"creating-the-data-files",level:3},{value:"Settings the Data File Permissions",id:"settings-the-data-file-permissions",level:3},{value:"Creating the Head Key",id:"creating-the-head-key",level:3},{value:"Worker Key Olu\u015fturma",id:"worker-key-olu\u015fturma",level:3},{value:"Learning the Head Key",id:"learning-the-head-key",level:3},{value:"Preparing the docker-compose.yml File",id:"preparing-the-docker-composeyml-file",level:3},{value:"Deleting the Existing File",id:"deleting-the-existing-file",level:4},{value:"Preparing the New File",id:"preparing-the-new-file",level:4},{value:"Starting the Allora Worker",id:"starting-the-allora-worker",level:2},{value:"Checking the Node",id:"checking-the-node",level:2},{value:"Allora Points",id:"allora-points",level:2},{value:"Completely Deleting the Node",id:"completely-deleting-the-node",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"allora-price-prediction-worker-node-installation",children:"Allora Price Prediction Worker Node Installation"}),"\n",(0,l.jsx)(n.h2,{id:"updating-the-system-installing-python-and-installing-required-libraries",children:"Updating the System, Installing Python and Installing Required Libraries"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'apt update && apt upgrade -y\nsudo apt install python3 && sudo apt install python3-pip\napt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen wget make jq gcc unzip lz4 build-essential pkg-config libssl-dev libreadline-dev libffi-dev zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev -y < "/dev/null"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-docker",children:"Installing the Docker"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-docker-compose",children:"Installing the Docker Compose"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-go",children:"Installing the Go"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'ver="1.22.2" && \\\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" && \\\nrm -rf /usr/local/go && \\\ntar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" && \\\nrm "go$ver.linux-amd64.tar.gz" && \\\necho "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile && \\\nsource $HOME/.bash_profile\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-allora--wallet",children:"Installing Allora & Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/allora-network/allora-chain.git\ncd allora-chain && make all\n"})}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-new-wallet",children:"Creating a New Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"allorad keys add CUZDAN_ADI\n"})}),"\n",(0,l.jsx)(n.h3,{id:"importing-an-existing-wallet",children:"Importing an Existing Wallet"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"allorad keys add CUZDAN_ADI --recover\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Ard\u0131ndan c\xfczdan\u0131n\u0131z\u0131 Keplr'e import edin."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"adding-the-allora-network",children:"Adding the Allora Network"}),"\n",(0,l.jsxs)(n.p,{children:["Allora ",(0,l.jsx)(n.a,{href:"https://explorer.edgenet.allora.network/wallet/suggest",children:"explorer"})," sayfas\u0131na gidip a\u011f\u0131 ekleyin."]}),"\n",(0,l.jsx)(n.h2,{id:"allora-dasboard",children:"Allora Dasboard"}),"\n",(0,l.jsxs)(n.p,{children:["Allora ",(0,l.jsx)(n.a,{href:"https://app.allora.network",children:"kontrol paneli"}),"'nde puanlar\u0131m\u0131z\u0131 takip edece\u011fiz."]}),"\n",(0,l.jsx)(n.h2,{id:"faucet",children:"Faucet"}),"\n",(0,l.jsxs)(n.p,{children:["Allora c\xfczdan\u0131m\u0131za ",(0,l.jsx)(n.a,{href:"https://faucet.edgenet.allora.network/",children:"Faucet"}),"'tan token istiyoruz."]}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-allora-worker",children:"Installing the Allora Worker"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cd $HOME\ngit clone https://github.com/allora-network/basic-coin-prediction-node\n"})}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-data-files",children:"Creating the Data Files"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cd basic-coin-prediction-node\nmkdir worker-data\nmkdir head-data\n"})}),"\n",(0,l.jsx)(n.h3,{id:"settings-the-data-file-permissions",children:"Settings the Data File Permissions"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"chmod -R 777 worker-data\nchmod -R 777 head-data\n"})}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-head-key",children:"Creating the Head Key"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'docker run -it --entrypoint=bash -v ./head-data:/data alloranetwork/allora-inference-base:latest -c "mkdir -p /data/keys && (cd /data/keys && allora-keys)"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"worker-key-olu\u015fturma",children:"Worker Key Olu\u015fturma"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'docker run -it --entrypoint=bash -v ./worker-data:/data alloranetwork/allora-inference-base:latest -c "mkdir -p /data/keys && (cd /data/keys && allora-keys)"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"learning-the-head-key",children:"Learning the Head Key"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cat head-data/keys/identity\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Keyi kaydedin, a\u015fa\u011f\u0131daki b\xf6l\xfcmlerde laz\u0131m olacak."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"preparing-the-docker-composeyml-file",children:"Preparing the docker-compose.yml File"}),"\n",(0,l.jsx)(n.h4,{id:"deleting-the-existing-file",children:"Deleting the Existing File"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"rm docker-compose.yml\n"})}),"\n",(0,l.jsx)(n.h4,{id:"preparing-the-new-file",children:"Preparing the New File"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki varsay\u0131lan olarak kullan\u0131lacak portlar yaz\u0131lm\u0131\u015ft\u0131r. E\u011fer bu portlar sunucusunuzda kullan\u0131l\u0131yorsa bunlar\u0131 de\u011fi\u015ftirin.\n",(0,l.jsx)(n.code,{children:"MNEMONIC"})," b\xf6l\xfcm\xfcne c\xfczdan kelimelerini,\n",(0,l.jsx)(n.code,{children:"CUZDAN_ADI"})," b\xf6l\xfcm\xfcne c\xfczdan ad\u0131n\u0131z\u0131,\n",(0,l.jsx)(n.code,{children:"HEAD_ID"})," b\xf6l\xfcm\xfcne ise yukar\u0131da al\u0131nan head key kodunu yaz\u0131n. Ard\u0131ndan kodu \xe7al\u0131\u015ft\u0131r\u0131n."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'PY_PORT="8000"\nW_PORT1="9011"\nW_PORT2="9010"\nREST_PORT="6000"\nMNEMONIC=""\nHEAD_ID=""\nCUZDAN_ADI=""\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u015eimdi yeni dosyam\u0131z\u0131 olu\u015fturuyoruz a\u015fa\u011f\u0131daki kodu oldu\u011fu gibi \xe7al\u0131\u015ft\u0131r\u0131."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'tee $HOME/basic-coin-prediction-node/docker-compose.yml > /dev/null << EOF\nversion: \'3\'\n\nservices:\n  inference:\n    container_name: inference-basic-eth-pred\n    build:\n      context: .\n    command: python -u /app/app.py\n    ports:\n      - "$PY_PORT:$PY_PORT"\n    networks:\n      eth-model-local:\n        aliases:\n          - inference\n        ipv4_address: 172.22.0.4\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:$PY_PORT/inference/ETH"]\n      interval: 10s\n      timeout: 10s\n      retries: 12\n    volumes:\n      - ./inference-data:/app/data\n\n  updater:\n    container_name: updater-basic-eth-pred\n    build: .\n    environment:\n      - INFERENCE_API_ADDRESS=http://inference:$PY_PORT\n    command: >\n      sh -c "\n      while true; do\n        python -u /app/update_app.py;\n        sleep 24h;\n      done\n      "\n    depends_on:\n      inference:\n        condition: service_healthy\n    networks:\n      eth-model-local:\n        aliases:\n          - updater\n        ipv4_address: 172.22.0.5\n\n  worker:\n    container_name: worker-basic-eth-pred\n    environment:\n      - INFERENCE_API_ADDRESS=http://inference:$PY_PORT\n      - HOME=/data\n    build:\n      context: .\n      dockerfile: Dockerfile_b7s\n    entrypoint:\n      - "/bin/bash"\n      - "-c"\n      - |\n        if [ ! -f /data/keys/priv.bin ]; then\n          echo "Generating new private keys..."\n          mkdir -p /data/keys\n          cd /data/keys\n          allora-keys\n        fi\n        # Change boot-nodes below to the key advertised by your head\n        allora-node --role=worker --peer-db=/data/peerdb --function-db=/data/function-db \\\n          --runtime-path=/app/runtime --runtime-cli=bls-runtime --workspace=/data/workspace \\\n          --private-key=/data/keys/priv.bin --log-level=debug --port=$W_PORT1 \\\n          --boot-nodes=/ip4/172.22.0.100/tcp/$W_PORT2/p2p/$HEAD_ID \\\n          --topic=allora-topic-1-worker \\\n          --allora-chain-key-name=$CUZDAN_ADI \\\n          --allora-chain-restore-mnemonic=\'$MNEMONIC\' \\\n          --allora-node-rpc-address=https://allora-rpc.edgenet.allora.network/ \\\n          --allora-chain-topic-id=1\n    volumes:\n      - ./worker-data:/data\n    working_dir: /data\n    depends_on:\n      - inference\n      - head\n    networks:\n      eth-model-local:\n        aliases:\n          - worker\n        ipv4_address: 172.22.0.10\n\n  head:\n    container_name: head-basic-eth-pred\n    image: alloranetwork/allora-inference-base-head:latest\n    environment:\n      - HOME=/data\n    entrypoint:\n      - "/bin/bash"\n      - "-c"\n      - |\n        if [ ! -f /data/keys/priv.bin ]; then\n          echo "Generating new private keys..."\n          mkdir -p /data/keys\n          cd /data/keys\n          allora-keys\n        fi\n        allora-node --role=head --peer-db=/data/peerdb --function-db=/data/function-db  \\\n          --runtime-path=/app/runtime --runtime-cli=bls-runtime --workspace=/data/workspace \\\n          --private-key=/data/keys/priv.bin --log-level=debug --port=$W_PORT2 --rest-api=:$REST_PORT\n    ports:\n      - "$REST_PORT:$REST_PORT"\n    volumes:\n      - ./head-data:/data\n    working_dir: /data\n    networks:\n      eth-model-local:\n        aliases:\n          - head\n        ipv4_address: 172.22.0.100\n\n\nnetworks:\n  eth-model-local:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.22.0.0/24\n\nvolumes:\n  inference-data:\n  worker-data:\n  head-data:\nEOF\n'})}),"\n",(0,l.jsx)(n.h2,{id:"starting-the-allora-worker",children:"Starting the Allora Worker"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"cd $HOME/basic-coin-prediction-node\ndocker compose build\ndocker compose up -d\n"})}),"\n",(0,l.jsx)(n.h2,{id:"checking-the-node",children:"Checking the Node"}),"\n",(0,l.jsxs)(n.p,{children:["Allora docker konteyn\u0131r (",(0,l.jsx)(n.code,{children:"basic-coin-prediction-node-worker"}),") id'sini almak i\xe7in a\u015fa\u011f\u0131daki kodu girin."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker ps\n"})}),"\n",(0,l.jsxs)(n.p,{children:["A\u015fa\u011f\u0131daki kodda ",(0,l.jsx)(n.code,{children:"C_ID"})," b\xf6l\xfcm\xfcne id yaz\u0131p \xe7al\u0131\u015ft\u0131ral\u0131m."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker logs -f C_ID\n"})}),"\n",(0,l.jsx)(n.p,{children:"A\u015fa\u011f\u0131daki gibi bir \xe7\u0131kt\u0131 alamn\u0131z gerekiyor."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:".\n.\nSucces: register node TX Hash:\n.\n.\n"})}),"\n",(0,l.jsx)(n.h2,{id:"allora-points",children:"Allora Points"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://app.allora.network?ref=eyJyZWZlcnJlcl9pZCI6IjBlNWRhMjlmLTc3YjItNDQ2NS1hYTcxLTk0NWI3NjRhMTA0ZiJ9",children:"Allora Points"})," sayfas\u0131na gidip c\xfczdan\u0131n\u0131z\u0131 ba\u011flay\u0131p puanlar\u0131n\u0131z\u0131 kontrol edebilirsiniz."]}),"\n",(0,l.jsx)(n.h2,{id:"completely-deleting-the-node",children:"Completely Deleting the Node"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'rm -rf allora-chain\nrm -rf .allorad\nrm -rf basic-coin-prediction-node\nbash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},979:(e,n,a)=>{a.d(n,{Z:()=>l});const l=a.p+"assets/images/Allora-Service-Cover-cfd2d18aecc051f86a0c8e692e800e9b.jpg"},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>t});var l=a(67294);const r={},i=l.createContext(r);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);