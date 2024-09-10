---
title: 🛠️ Güncelleme  
description: Allora worker güncelleme rehberi.
image: ./img/Allora-Service-Cover.jpg
keywords: [Allora, AI, Layer 1, Kurulum, Güncelleme]
---

# Allora Güncelleme

**1. Basic Price Node Konteynerını Durdurma ve Kaldırma**
**
```shell
bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"
```

This command stops and removes Allora containers.

**2. basic-coin-prediction-node Dizinini Kaldırma**

```shell
cd $HOME && rm -rf basic-coin-prediction-node
```

**3. Allora Huggingface Walkthrough Reposunu Klonlama**

```shell
cd $HOME
git clone https://github.com/allora-network/allora-huggingface-walkthrough
cd allora-huggingface-walkthrough
```
**4. Yeni Dosyaları Oluşturma**

```shell
mkdir -p worker-data
chmod -R 777 worker-data
```

**5. Config Dosyası Oluşturma**
Aşağıdaki kodu, cüzdan adınızı ve kelimelerinizi girerek çalıştırın.
```shell
MNEMONIC=""
CUZDAN_ADI=""
```

Ardından aşağıdaki kodu çalıştırın. 
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

**4. Coingecko API key Oluşturma**
https://www.coingecko.com/en/developers/dashboard adresine gidrek kendinize bir API Key alın.

Ardından aşağıdaki kodda `YOUR_API` yazan yere kodunuzu yazın ve kodu çalıştırın.
```shell
APIKEY="YOUR_API"
```
Ardından aşağıdaki kodu çalıştırın.
```shell
sed -i.bak -e "s%<Your Coingecko API key>%${APIKEY}%g" $HOME/allora-huggingface-walkthrough/app.py 
```

**4. Huggingface Worker'ı Çalıştırma**

```shell
chmod +x init.config
./init.config
```

```shell
docker compose up --build -d
```

**5. Logları Kontrol Etme**

```shell
docker compose logs -f worker
```

```shell
docker compose logs -f
```
