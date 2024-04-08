---
id: introduction
hide_table_of_contents: true
image: ./img/0G-Service-Cover.jpg
description: 0G Service Page
keywords: [0g, ai, modular, chain, installation, snapshot, statesync, update]
---
# 0G

![0G](./img/0G-Service.jpg)

## Links
 ✔️ [Website](https://0g.ai/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/0G) |
 ✔️ [Docs](https://0glabs.gitbook.io/) |
 ✔️ [GitHub](https://github.com/0glabs) |
 ✔️ [Discord](https://discord.gg/0glabs)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: zgtendermint_9000-1
* Binary: evmosd
* Denom: aevmos
* Working directory: .evmosd

## Public Services
* **RPC:** https://rpc-t-0g.anatolianteam.com/ 
* **API:** https://api-t-0g.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/0G

## Peering
You can use peer for fast connection or state sync 
```shell
PEERS="1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.evmosd/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.evmosd/config/addrbook.json "https://testnet.anatolianteam.com/0g/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
