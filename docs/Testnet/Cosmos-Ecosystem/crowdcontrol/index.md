---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Testnet/Cosmos-Ecosystem/crowdcontrol/img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, card game, trade, installation, snapshot, statesync, update]
---
# Crowd Control

![Crowd Control](./img/CC-Service.jpg)

## Links
 ✔️ [Website](https://crowdcontrol.network/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Crowd%20Control) |
 ✔️ [Docs](https://github.com/DecentralCardGame/whitepaper/blob/master/whitepaper.pdf) |
 ✔️ [GitHub](https://github.com/DecentralCardGame) |
 ✔️ [Discord](https://discord.gg/5DYef3CpME)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 

* Network Chain ID: cardtestnet-8
* Binary: Cardchaind
* Denom: ubpf
* Working directory: .cardchaind

## Public Services
* **RPC:** https://rpc-t-carcrowdcontrol.anatolianteam.com/ 
* **API:** https://api-t-crowdcontrol.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Crowd%20Control

## Peering
You can use peer for fast connection or state sync.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.cardchaind/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.cardchaind/config/addrbook.json "https://testnet.anatolianteam.com/crowdcontrol/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
