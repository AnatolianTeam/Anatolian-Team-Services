---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/artela/img/Artela-Service-Cover.jpg
keywords: [artela, network, installation, snapshot, statesync, update]
---
# Artela Network 

![Chain4Energy](./img/Artela-Service.jpg)

## Links
 ✔️ [Website](https://artela.network/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Artela) |
 ✔️ [Docs](https://docs.artela.network/main) |
 ✔️ [GitHub](https://github.com/artela-network) |
 ✔️ [Discord](https://discord.gg/artela)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: artela_11822-1
* Binary: artelad
* Denom: uart
* Working directory: .artelad

## Public Services
* **RPC:** https://rpc-t-artela.anatolianteam.com/ 
* **API:** https://api-t-artela.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Artela

## Peering
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.artelad/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.artelad/config/addrbook.json "https://testnet.anatolianteam.com/artela/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
