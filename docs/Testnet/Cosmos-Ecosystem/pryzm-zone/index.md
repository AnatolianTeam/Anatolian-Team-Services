---
id: introduction
hide_table_of_contents: true
image: ./img/Pryzm-Service-Cover.jpg
keywords: [pryzm, zone, installation, snapshot, statesync, update]
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
* **RPC:** https://rpc-t-pryzm.anatolianteam.com/ 
* **API:** https://api-t-pryzm.anatolianteam.com/ 
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Pryzm

## Peering
You can use peer for fast connection or state sync.
```shell
peers=""
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.pryzm/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.okppryzm4d/config/addrbook.json "https://testnet.anatolianteam.com/pryzm/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```