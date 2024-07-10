---
title: 💾 Worker 
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

## Installing the Allora Worker

```shell
cd $HOME
git clone https://github.com/allora-network/basic-coin-prediction-node
```

### Creating the Data Files
```shell
cd basic-coin-prediction-node
mkdir worker-data
mkdir head-data
```

### Setting Data File Permissions
```shell
chmod -R 777 worker-data
chmod -R 777 head-data
```

### Creating the Head Key
```shell
docker run -it --entrypoint=bash -v ./head-data:/data alloranetwork/allora-inference-base:latest -c "mkdir -p /data/keys && (cd /data/keys && allora-keys)"
```

### Creating the Worker Key
```shell
docker run -it --entrypoint=bash -v ./worker-data:/data alloranetwork/allora-inference-base:latest -c "mkdir -p /data/keys && (cd /data/keys && allora-keys)"
```

### Obtaining the Head Key
```shell
cat head-data/keys/identity
```
> Save this key, it will be needed in the following sections.

### Preparing the docker-compose.yml File 

#### Deleting the Existing File
```shell
rm docker-compose.yml
```

#### Preparing the New File

> The default ports are listed below. If these ports are already in use on your server, change them.
> Replace `MNEMONIC` with your wallet mnemonic,
> Replace `WALLET_NAME` with your wallet name,
> Replace `HEAD_ID` with the head key obtained earlier. Then execute the code.

```shell
PY_PORT="8000"
W_PORT1="9011"
W_PORT2="9010"
REST_PORT="6000"
MNEMONIC=""
HEAD_ID=""
WALLET_NAME=""
```

> Now create our new file as the code written below.
```shell
tee $HOME/basic-coin-prediction-node/docker-compose.yml > /dev/null << EOF
version: '3'

services:
  inference:
    container_name: inference-basic-eth-pred
    build:
      context: .
    command: python -u /app/app.py
    ports:
      - "$PY_PORT:$PY_PORT"
    networks:
      eth-model-local:
        aliases:
          - inference
        ipv4_address: 172.22.0.4
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:$PY_PORT/inference/ETH"]
      interval: 10s
      timeout: 10s
      retries: 12
    volumes:
      - ./inference-data:/app/data

  updater:
    container_name: updater-basic-eth-pred
    build: .
    environment:
      - INFERENCE_API_ADDRESS=http://inference:$PY_PORT
    command: >
      sh -c "
      while true; do
        python -u /app/update_app.py;
        sleep 24h;
      done
      "
    depends_on:
      inference:
        condition: service_healthy
    networks:
      eth-model-local:
        aliases:
          - updater
        ipv4_address: 172.22.0.5

  worker:
    container_name: worker-basic-eth-pred
    environment:
      - INFERENCE_API_ADDRESS=http://inference:$PY_PORT
      - HOME=/data
    build:
      context: .
      dockerfile: Dockerfile_b7s
    entrypoint:
      - "/bin/bash"
      - "-c"
      - |
        if [ ! -f /data/keys/priv.bin ]; then
          echo "Generating new private keys..."
          mkdir -p /data/keys
          cd /data/keys
          allora-keys
        fi
        # Change boot-nodes below to the key advertised by your head
        allora-node --role=worker --peer-db=/data/peerdb --function-db=/data/function-db \
          --runtime-path=/app/runtime --runtime-cli=bls-runtime --workspace=/data/workspace \
          --private-key=/data/keys/priv.bin --log-level=debug --port=$W_PORT1 \
          --boot-nodes=/ip4/172.22.0.100/tcp/$W_PORT2/p2p/$HEAD_ID \
          --topic=allora-topic-1-worker \
          --allora-chain-key-name=$WALLET_NAME \
          --allora-chain-restore-mnemonic='$MNEMONIC' \
          --allora-node-rpc-address=https://allora-rpc.edgenet.allora.network/ \
          --allora-chain-topic-id=1
    volumes:
      - ./worker-data:/data
    working_dir: /data
    depends_on:
      - inference
      - head
    networks:
      eth-model-local:
        aliases:
          - worker
        ipv4_address: 172.22.0.10

  head:
    container_name: head-basic-eth-pred
    image: alloranetwork/allora-inference-base-head:latest
    environment:
      - HOME=/data
    entrypoint:
      - "/bin/bash"
      - "-c"
      - |
        if [ ! -f /data/keys/priv.bin ]; then
          echo "Generating new private keys..."
          mkdir -p /data/keys
          cd /data/keys
          allora-keys
        fi
        allora-node --role=head --peer-db=/data/peerdb --function-db=/data/function-db  \
          --runtime-path=/app/runtime --runtime-cli=bls-runtime --workspace=/data/workspace \
          --private-key=/data/keys/priv.bin --log-level=debug --port=$W_PORT2 --rest-api=:$REST_PORT
    ports:
      - "$REST_PORT:$REST_PORT"
    volumes:
      - ./head-data:/data
    working_dir: /data
    networks:
      eth-model-local:
        aliases:
          - head
        ipv4_address: 172.22.0.100


networks:
  eth-model-local:
    driver: bridge
    ipam:
      config:
        - subnet: 172.22.0.0/24

volumes:
  inference-data:
  worker-data:
  head-data:
EOF
```

## Starting the Allora Worker

```shell
cd $HOME/basic-coin-prediction-node
docker compose build
docker compose up -d
```

## Checking the Node

Enter the following code to get the Allora docker container (`basic-coin-prediction-node-worker`) id.
```shell
docker ps
```

Run the code below in the `C_ID` section.
```shell
docker logs -f C_ID
```

You should get output like this:
```shell
.
.
Success: register node TX Hash:
.
.
```

## Allora Points

Go to [Allora Points](https://app.allora.network?ref=eyJyZWZlcnJlcl9pZCI6IjBlNWRhMjlm

LTc3YjItNDQ2NS1hYTcxLTk0NWI3NjRhMTA0ZiJ9) page and connect your wallet to check your scores.

## Docker Compose Kurulumunu Test Etme
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
