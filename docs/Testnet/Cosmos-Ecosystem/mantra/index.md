---
id: introduction
hide_table_of_contents: true
description: Mantra Chain Service Page
image: ./img/Mantra-Service-Cover.jpg
keywords: [mantra, chain, installation, snapshot, statesync, update]
---
   
# Mantra Chain

![Mantra Chain](./img/Mantra-Service.jpg)

## Links
 ✔️ [Website](https://www.mantrachain.io/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Mantra%20Chain) |
 ✔️ [Dosc](https://docs.mantrachain.io/) |
 ✔️ [Discord](https://discord.gg/nthADXJHKM)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 

* Network Chain ID: mantrachain-testnet-1
* Binary: mantrachaind
* Denom: uaum
* Working directory: .mantrachain

## Public Services
* **RPC:** https://rpc-t-mantra.anatolianteam.com/
* **API:** https://api-t-mantra.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Mantra%20Chain


## Peering
You can use peer for fast connection or state sync.
```shell
peers="fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.mantrachain/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.mantrachain/config/addrbook.json "https://testnet.anatolianteam.com/mantra/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
