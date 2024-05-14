---
id: introduction
hide_table_of_contents: true
image: ./img/Initia-Service-Cover.jpg
description: Initia Service Page
keywords: [initia, chain, installation, snapshot, statesync, update]
---
# Initia 

![Initia](./img/Initia-Service.jpg)

## Links
 ✔️ [Website](https://initia.xyz/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Initia) |
 ✔️ [Docs](https://docs.initia.xyz/) |
 ✔️ [GitHub](https://github.com/initia-labs) |
 ✔️ [Discord](https://discord.gg/initia)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: initiation-1
* Binary: initiad
* Denom: uinit, uusdc
* Working directory: .initia

## Public Services
* **RPC:** https://rpc-t-initia.anatolianteam.com/ 
* **API:** https://api-t-initia.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Initia

## Peering
You can use peer for fast connection or state sync 
```shell
SEEDS=""
PEERS="093e1b89a498b6a8760ad2188fbda30a05e4f300@35.240.207.217:26656"
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.initia/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.initia/config/addrbook.json "https://testnet.anatolianteam.com/initia/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
