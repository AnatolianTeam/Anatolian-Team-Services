---
id: introduction
hide_table_of_contents: true
image: ./img/Entangle-Service-Cover.jpg
keywords: [entangle, network, installation, snapshot, statesync, update]
---
# entangle Network 

![Entangle](./img/Entangle-Service.jpg)

## Links
 ✔️ [Website](https://entangle.fi/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/entangle) |
 ✔️ [Docs](https://entangle.gitbook.io/) |
 ✔️ [Discord](https://discord.gg/entanglefi)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 

* Network Chain ID: entangle_33133-1
* Binary: entangled
* Denom: uNGL
* Working directory: .entangled

## Public Services
* **RPC:** https://rpc-t-entangle.anatolianteam.com/ 
* **API:** https://api-t-entangle.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/entangle

## Peering
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.entangled/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.entangled/config/addrbook.json "https://testnet.anatolianteam.com/entangle/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
