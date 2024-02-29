---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/artela/img/SelfChain-Service-Cover.jpg
keywords: [selfchain, self, chain, installation, snapshot, statesync, update]
---
# Self Chain 

![SelfChain](./img/SelfChain-Service.jpg)

## Links
 ✔️ [Website](https://artela.network/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/SelfChain) |
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
* Binary: selfchaind
* Denom: uself
* Working directory: .selfchain

## Public Services
* **RPC:** https://rpc-t-selfchain.anatolianteam.com/ 
* **API:** https://api-t-selfchain.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/SelfChain

## Peering
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.selfchain/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.selfchain/config/addrbook.json "https://testnet.anatolianteam.com/selfchain/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
