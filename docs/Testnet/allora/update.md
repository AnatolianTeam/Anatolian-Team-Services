---
title: 🛠️ Update  
description: Allora worker installation guide.
image: ./img/Allora-Service-Cover.jpg
keywords: [Allora, AI, Layer 1, installation, Update]
---

# Allora Update

**1. Stop and Remove Basic Price Node Containers**

```shell
bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"
```

This command stops and removes Allora containers.

**2. Delete basic-coin-prediction-node Directory**

```shell
cd $HOME && rm -rf basic-coin-prediction-node
```

**3. Cloning the Allora Huggingface Walkthrough *

```shell
cd $HOME
git clone https://github.com/allora-network/allora-huggingface-walkthrough
cd allora-huggingface-walkthrough
```
**4. Create New Files**

```shell
mkdir -p worker-data
chmod -R 777 worker-data
```

**5. Creating the Config File**
Run the code below by entering your wallet name and seed phrase.
```shell
MNEMONIC=""
CUZDAN_ADI=""
```

Run the following code without any changes.
```shell
tee $HOME/allora-huggingface-walkthrough/config.json > /dev/null << EOF
{
    "wallet": {
        "addressKeyName": "$CUZDAN_ADI",
        "addressRestoreMnemonic": "$MNEMONIC",
        "alloraHomeDir": "/root/.allorad",
        "gas": "1000000",
        "gasAdjustment": 1.0,
        "nodeRpc": "https://allora-rpc.testnet-1.testnet.allora.network/",
        "maxRetries": 1,
        "delay": 1,
        "submitTx": false
    },
    "worker": [
        {
            "topicId": 1,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 1,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "ETH"
            }
        },
        {
            "topicId": 2,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 3,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "ETH"
            }
        },
        {
            "topicId": 3,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 5,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "BTC"
            }
        },
        {
            "topicId": 4,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 2,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "BTC"
            }
        },
        {
            "topicId": 5,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 4,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "SOL"
            }
        },
        {
            "topicId": 6,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 5,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "SOL"
            }
        },
        {
            "topicId": 7,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 2,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "ETH"
            }
        },
        {
            "topicId": 8,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 3,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "BNB"
            }
        },
        {
            "topicId": 9,
            "inferenceEntrypointName": "api-worker-reputer",
            "loopSeconds": 5,
            "parameters": {
                "InferenceEndpoint": "http://inference:8000/inference/{Token}",
                "Token": "ARB"
            }
        }
        
    ]
}
EOF
```

**4. Creating the Coingecko API key**
Get an API Key for yourself at https://www.coingecko.com/en/developers/dashboard.

Write your own API in the code below, where it says`YOUR_API`, and run the code.
```shell
APIKEY="YOUR_API"
```
Then run following code.
```shell
sed -i.bak -e "s%<Your Coingecko API key>%${APIKEY}%g" $HOME/allora-huggingface-walkthrough/app.py 
```

**4. Running the Run Huggingface Worker**

```shell
chmod +x init.config
./init.config
```

```shell
docker compose up --build -d
```

**5. Checking the Logs**

```shell
docker compose logs -f worker
```

```shell
docker compose logs -f
```
