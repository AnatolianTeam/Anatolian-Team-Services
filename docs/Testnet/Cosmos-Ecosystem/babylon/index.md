---
id: introduction
hide_table_of_contents: true
image: ./img/Babylon-Service-Cover.jpg
keywords: [babylon, installation, snapshot, statesync, update]
---
   
# Babylon Chain

![Babylon Chain](./img/Babylon-Service.jpg)

## Links
 ✔️ [Website](https://www.babylonchain.io/) |
 ✔️ [Blockchain Explorer](https://babylon.explorers.guru/) |
 ✔️ [Doküman](https://docs.babylonchain.io/) |
 ✔️ [GitHub](https://github.com/babylonchain) |
 ✔️ [Discord](https://discord.gg/XcCtr53g8F) | 
 ✔️ [Zealy](https://zealy.io/c/babylonchain/invite/H74AmwvpVNPGL8suCk1xL)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 

* Network Chain ID: bbn-test-2
* Binary: babylond
* Denom: ubbn
* Working directory: .babylond

## Public Services
* **RPC:** https://rpc-t-babylon.anatolianteam.com/
* **API:** https://api-t-babylon.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Babylon

## Peering
You can use peer for fast connection or state sync.
```shell
peers="fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.babylond/config/config.toml
```
The address book is updated once an hour. You can use it for quick launch.
```shell
wget -O $HOME/.pryzm/config/addrbook.json "https://testnet.anatolianteam.com/babylon/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
