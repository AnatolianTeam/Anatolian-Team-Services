---
title: ⚙️ OmniBridge Setup
description: OmniBridge Oracle guide.
image: ./img/Q-Service-Cover.jpg
keywords: [Q, blockchain, OmniBridge, Oracle, installation, snapshot, statesync, update]
slug: omnibridge-setup
---

# OmniBridge Setup

On this page, necessary settings will be made for OmniBridge Oracle, OmniBridge-UI and OmniBridge-ALM.

## Launching OmniBridge Oracle

### Editing .env File
```
cd $HOME/mainnet-public-tools/omnibridge-oracle
cp .env.mainnet .env
nano .env
```
When you open the file, we fill in the relevant fields specified in the table below, save it in the file and exit.

| PARAMETER NAME | VALUE |
| ------------ | ------------ |
| ORACLE_VALIDATOR_ADDRESS | Provide your Q validator address. Example: 0xac8e5047d122f801... |
| ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY	| 	Provide your Q validator private key. Example: a385db8296ceb9a.... | 
| COMMON_HOME_RPC_URL	| You can keep the default, use https://rpc.q.org or use the RPC endpoint of our own full node if you are operating one. |
| COMMON_FOREIGN_RPC_URL | 	Provide an RPC endpoint of a client of the blockchain on the other side of the bridge. Q mainnet bridges to the Ethereum mainnet. You can use your own ethereum client, a public endpoint or create an infura account for free to get a personal Ethereum mainnet access point (e.g. https://mainnet.infura.io/v3/1673abc....). |


### Starting Oracle
```
docker-compose up -d
```

## Setup and launch the OmniBridge-UI

### Editing .env File
```
cd $HOME/mainnet-public-tools/omnibridge-ui
cp .env.mainnet .env
nano .env
```
When you open the file and then fill in the relevant field specified in the table below, and save it in the file and exit.
| PARAMETER NAME |	VALUE |
| ------------ | ------------ |
| REACT_APP_FOREIGN_RPC_URL	| Provide an RPC endpoint of a client of the blockchain on the other side of the bridge, e.g. https://mainnet.infura.io/v3/1673abc.... |

### Starting Service
```
docker-compose up -d
```

## Setup and launch the OmniBridge-ALM

### Editing .env File
```
cd $HOME/mainnet-public-tools/omnibridge-alm
cp .env.mainnet .env
nano .env
```
When you open the file and then fill in the relevant fields specified in the table below, and save it in the file and exit.
| PARAMETER NAME |	VALUE |
| ------------ | ------------ |
| PORT | You can keep the default 8090 or change to some other port. |
| COMMON_HOME_RPC_URL	| You can keep the default, use https://rpc.q.org or use the RPC endpoint of our own full node if you are operating one. |
| COMMON_FOREIGN_RPC_URL	| Provide an RPC endpoint of a client of the blockchain on the other side of the bridge, e.g. https://mainnet.infura.io/v3/1673abc.... |
| ALM_HOME_EXPLORER_TX_TEMPLATE |	You can keep the default https://explorer.q.org/tx/%s or change with the IP of your own full node block explorer. |

### Starting Service
```
docker-compose up -d
```
