---
id: introduction
hide_table_of_contents: true
---

# Pryzm Zone

![PryzmZone](./img/Pryzm-Service.jpg)

## Links

 ✔️ [Website](https://pryzm.zone/) | ✔️ [Explorer](https://cosmos-testnet.anatolianteam.com/Pryzm) | ✔️ [Doc](https://docs.pryzm.zone/) | ✔️ [GitHub](https://github.com/pryzm-finance) | ✔️ [Discord](https://discord.gg/eZGaXFEeEZ) | ✔️ [Zealy](https://zealy.io/c/pryzm/invite/cfNmFH3eoXrvl2Rr9qk7o)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 16 GB | 16 GB |
| Storage	| 120 GB SSD | 250 GB SSD |

## Network Info 

* Network Chain ID: indigo-1
* Binary: pryzmd
* Denom: upryzm
* Working directory: .pryzm

## Public Services
* **RPC:** 
* **API:** 
* **Explorer:** 

## Peering
You can use peer for fast connection or state sync
```shell
peers=""
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.pryzm/config/config.toml
```
The address book is updated once an hour. You can use it for quick launch.
```shell
wget -O $HOME/.pryzm/config/addrbook.json ""
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```