---
title: 💾 Worker Kurulumu
description: Allora Worker kurulum rehberi.
image: ./img/Allora-Service-Cover.jpg
keywords: [Allora, AI, Layer 1, Katman 1, kurulum]
---

# Allora Price Prediction Worker Node Kurulumu

## Sistemi Güncelleme, Python Kurulumu ve Gerekli Kütüphanelerin Kurulması
```shell
apt update && apt upgrade -y
sudo apt install python3 && sudo apt install python3-pip
apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen wget make jq gcc unzip lz4 build-essential pkg-config libssl-dev libreadline-dev libffi-dev zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev -y < "/dev/null"
```

## Docker Kurulumu
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## Docker Compose Kurulumu
```shell
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

## Go Kurulumu
```shell
ver="1.22.2" && \
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" && \
rm -rf /usr/local/go && \
tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" && \
rm "go$ver.linux-amd64.tar.gz" && \
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile && \
source $HOME/.bash_profile
```

## Allora ve Cüzdan Kurulumu
```shell
git clone https://github.com/allora-network/allora-chain.git
cd allora-chain && make all
```

## Allora Cüzdan Kurulumu
```shell
allorad keys add CUZDAN_ADI
```

### Mevcut Cüzdanı İçe Aktarma
```shell
allorad keys add CUZDAN_ADI --recover
```

> Ardından cüzdanınızı Keplr'e import edin. 

### Allora Ağını Ekleme
Allora [explorer](https://explorer.edgenet.allora.network/wallet/suggest) sayfasına gidip ağı ekleyin.

### Allora Kontrol Paneli

Allora [kontrol paneli](https://app.allora.network)'nde puanlarımızı takip edeceğiz.

## Faucet
Allora cüzdanımıza [Faucet](https://faucet.edgenet.allora.network/)'tan token istiyoruz.

## Allora Huggingface Walkthrough Kurulumu

```shell
cd $HOME
git clone https://github.com/allora-network/allora-huggingface-walkthrough
cd allora-huggingface-walkthrough
```

### Data Dosyası Oluşturma
```shell
mkdir worker-data
chmod -R 777 worker-data
```

### Port Değiştirme (Opsiyonel)
Eğer sunucusunuzda 8000 portunu kullanan başka bir uygulama varsa bunu değiştirmeniz gerekir.
> Kullanmak istediğiniz port numarasını `YOUR_PORT` yazan yere girin ve kodu çalıştırın.
```shell
PORT="YOUR_PORT"
```

> Then run following code.
```shell
sed -i.bak -e "s%8000:8000%${YOUR_PORT}:${YOUR_PORT}%g" $HOME/allora-huggingface-walkthrough/docker-compose.yaml 
```

### Config Dosyası Oluşturma**
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

### Coingecko API key Oluşturma
https://www.coingecko.com/en/developers/dashboard adresine gidrek kendinize bir API Key alın.

Ardından aşağıdaki kodda `YOUR_API` yazan yere kodunuzu yazın ve kodu çalıştırın.
```shell
APIKEY="YOUR_API"
```
Ardından aşağıdaki kodu çalıştırın.
```shell
sed -i.bak -e "s%<Your Coingecko API key>%${APIKEY}%g" $HOME/allora-huggingface-walkthrough/app.py 
```

## Allora Huggingface Worker'ı Çalıştırma

```shell
chmod +x init.config
./init.config
```

```shell
docker compose up --build -d
```

## Logları Kontrol Etme

```shell
docker compose logs -f worker
```

```shell
docker compose logs -f
```

## Allora Puanları

[Allora Points](https://app.allora.network?ref=eyJyZWZlcnJlcl9pZCI6IjBlNWRhMjlmLTc3YjItNDQ2NS1hYTcxLTk0NWI3NjRhMTA0ZiJ9) sayfasına gidip cüzdanınızı bağlayıp puanlarınızı kontrol edebilirsiniz.

## Testing the Docker Compose Setup
```
curl --location 'http://localhost:6000/api/v1/functions/execute' --header 'Accept: application/json, text/plain, */*' --header 'Content-Type: application/json;charset=UTF-8' --data '{
    "function_id": "bafybeigpiwl3o73zvvl6dxdqu7zqcub5mhg65jiky2xqb4rdhfmikswzqm",
    "method": "allora-inference-function.wasm",
    "parameters": null,
    "topic": "1",
    "config": {
        "env_vars": [
            {                              
                "name": "BLS_REQUEST_PATH",
                "value": "/api"
            },
            {                              
                "name": "ALLORA_ARG_PARAMS",
                "value": "1711064725"
            }
        ],
        "number_of_nodes": -1,
        "timeout" : 2
    }
}'
```

## Node Fiyat Bilgisini Güncelleme ve ETH Fiyatını Kontrol Etme
```
curl http://localhost:8000/update
```
```
curl http://localhost:8000/inference/ETH
```

## Allora Silme Komutları
```
rm -rf allora-chain
rm -rf .allorad
rm -rf basic-coin-prediction-node
bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"
```
