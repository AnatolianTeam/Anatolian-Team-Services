---
title: 💾 Worker Intallation
description: Allora worker installation guide.
image: ./img/Allora-Service-Cover.jpg
keywords: [Allora, AI, Layer 1, installation]
---

# Allora Price Prediction Worker Node Installation

## Updating the System, Installing Python and Installing Required Libraries
```shell
apt update && apt upgrade -y
sudo apt install python3 && sudo apt install python3-pip
apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen wget make jq gcc unzip lz4 build-essential pkg-config libssl-dev libreadline-dev libffi-dev zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev -y < "/dev/null"
```

## Installing Docker
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## Installing Docker Compose
```shell
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

## Installing Go
```
ver="1.22.2" && \
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" && \
rm -rf /usr/local/go && \
tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" && \
rm "go$ver.linux-amd64.tar.gz" && \
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile && \
source $HOME/.bash_profile
```

## Installing Allora & Wallet
```shell
git clone https://github.com/allora-network/allora-chain.git
cd allora-chain && make all
```

### Creating a New Wallet
```shell
allorad keys add WALLET_NAME
```

### Importing an Existing Wallet
```shell
allorad keys add WALLET_NAME --recover
```

> Then import your wallet to Keplr.

## Adding the Allora Network
Go to the Allora [explorer](https://explorer.edgenet.allora.network/wallet/suggest) page and add the network.

## Allora Dashboard

We will monitor our scores on the Allora [dashboard](https://app.allora.network).

## Faucet
Request tokens for the Allora wallet from the [Faucet](https://faucet.edgenet.allora.network/).

## Installing the Allora Huggingface Walkthrough Worker

```shell
cd $HOME
git clone https://github.com/allora-network/allora-huggingface-walkthrough
cd allora-huggingface-walkthrough
```

### Creating the Data Files
```shell
mkdir worker-data
chmod -R 777 worker-data
```

### Changing Port (Optional)
If there is another application on your server that uses port 8000, you need to change it.
> Kullanmak istediğiniz port numarasını `YOUR_PORT` yazan yere girin ve kodu çalıştırın.
> Enter the port number you want to use in the place where it says `YOUR_PORT` and run the code.
```shell
PORT="YOUR_PORT"
```

> Then run following code.
```shell
sed -i.bak -e "s%8000:8000%${YOUR_PORT}:${YOUR_PORT}%g" $HOME/allora-huggingface-walkthrough/docker-compose.yaml 
```



### Creating the Config File
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

### Creating the Coingecko API key**
Get an API Key for yourself at https://www.coingecko.com/en/developers/dashboard.

Write your own API in the code below, where it says`YOUR_API`, and run the code.
```shell
APIKEY="YOUR_API"
```
Then run following code.
```shell
sed -i.bak -e "s%<Your Coingecko API key>%${APIKEY}%g" $HOME/allora-huggingface-walkthrough/app.py 
```

## Running the Allora Huggingface Worker

```shell
chmod +x init.config
./init.config
```

```shell
docker compose up --build -d
```

## Checking the Logs

```shell
docker compose logs -f worker
```

```shell
docker compose logs -f
```

## Allora Points

Go to [Allora Points](https://app.allora.network?ref=eyJyZWZlcnJlcl9pZCI6IjBlNWRhMjlmLTc3YjItNDQ2NS1hYTcxLTk0NWI3NjRhMTA0ZiJ9) page and connect your wallet to check your scores.


## Cheking Update the Node and ETH Price
```
curl http://localhost:8000/update
```
```
curl http://localhost:8000/inference/ETH
```

## Completely Deleting the Node
```
rm -rf allora-chain
rm -rf .allorad
rm -rf basic-coin-prediction-node
bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"
```
