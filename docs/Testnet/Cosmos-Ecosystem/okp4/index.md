---
id: introduction
hide_table_of_contents: true
---
# OKP4 

![Chain4Energy](./img/OKP4-Service.jpg)

## Links
 ✔️ [Website](https://c4e.io/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Chain4Energy) |
 ✔️ [Docs](https://docs.c4e.io/) |
 ✔️ [GitHub](https://github.com/chain4energy) |
 ✔️ [Discord](https://discord.gg/chain4energy)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 

* Network Chain ID: babajaga-1
* Binary: c4ed
* Denom: uc4e
* Working directory: .c4e-chain

## Public Services
* **RPC:** https://rpc-t-cardchain.anatolianteam.com/ (Coming soon)
* **API:** https://api-t-cardchain.anatolianteam.com/ (Coming soon)
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Crowd%20Control

## Peering
You can use peer for fast connection or state sync (Coming soon)
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.c4e-chain/config/config.toml
```
The address book is updated once an hour. You can use it for quick launch.
```shell
wget -O $HOME/.pryzm/config/addrbook.json "COMING SOON"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
