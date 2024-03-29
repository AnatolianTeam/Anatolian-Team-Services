---
id: introduction
hide_table_of_contents: true
description: Cross Finance Service Page
position: 1
image: ./img/CrossFi-Service-Cover.jpg
keywords: [crossfi, finance, cross finance, installation, snapshot, statesync, update]
---
# Cross Finance 

![Chain4Energy](./img/CrossFi-Service.jpg)

## Links
 ✔️ [Website](https://crossfi.org/) |
 ✔️ [Blockchain Explorer](https://test.xfiscan.com/validators) |
 ✔️ [Docs](https://docs.crossfi.org) |
 ✔️ [GitHub](https://github.com/crossfichain) |
 ✔️ [Discord](https://discord.gg/crossfi)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: crossfi-evm-testnet-1
* Binary: crossfid
* Denom: mpx
* Working directory: .mineplex-chain

## Public Services
* **RPC:** https://rpc-t-crossfi.anatolianteam.com/ 
* **API:** https://api-t-crossfi.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Cross%20Finance

## Peering
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.mineplex-chain/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.mineplex-chain/config/addrbook.json "https://testnet.anatolianteam.com/crossfi/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
