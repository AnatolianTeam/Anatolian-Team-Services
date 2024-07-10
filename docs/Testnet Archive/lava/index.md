---
id: introduction
hide_table_of_contents: true
description: Lava Network Service Page
image: ./img/Lava-Service-Cover.jpg
keywords: [lava, network, installation, snapshot, statesync, update]
---
# Lava Network 

![Chain4Energy](./img/Lava-Service.jpg)

## Links/
 ✔️ [Website](https://www.lavanet.xyz) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Lava%20Network) |
 ✔️ [Docs](https://docs.lavanet.xyz/) |
 ✔️ [GitHub](https://github.com/lavanet) |
 ✔️ [Discord](https://discord.gg/zyvZ93yZpM)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: lava-testnet-2
* Binary: lavad
* Denom: ulava
* Working directory: .lava

## Public Services
* **RPC:** https://rpc-t-lava.anatolianteam.com/ 
* **API:** https://api-t-lava.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Lava%20Network

## Peering
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.lava/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.lava/config/addrbook.json "https://testnet.anatolianteam.com/lava/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
