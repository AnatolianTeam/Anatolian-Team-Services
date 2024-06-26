---
id: introduction
hide_table_of_contents: true
image: ./img/SelfChain-Service-Cover.jpg
description: Self Chain Service Page
keywords: [selfchain, self, chain, installation, snapshot, statesync, update]
---
# Self Chain 

![SelfChain](./img/SelfChain-Service.jpg)

## Links
 ✔️ [Website](https://selfchain.xyz) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/SelfChain) |
 ✔️ [Docs](https://docs.selfchain.xyz/) |
 ✔️ [Discord](https://discord.gg/selfchainxyz)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: self-dev-1
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
peers="e8502eb858f555051f3f80edc13f46ea942e7507@23.111.23.233:26656,2ff64c736dd3fc7649a108b2ac139a3c5100f614@135.181.176.109:39356,108749a0b4f8c05534014a64697520b6385dc997@65.108.196.251:10156"
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
