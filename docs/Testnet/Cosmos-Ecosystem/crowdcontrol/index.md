---
id: introduction
hide_table_of_contents: true
---
# Crowd Control

![Crowd Control](./img/CC-Service.jpg)

## Links
 ✔️ [Website](https://crowdcontrol.network/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Crowd%20Control) |
 ✔️ [Doküman](https://github.com/DecentralCardGame/whitepaper/blob/master/whitepaper.pdf) |
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
* Working directory: .Cardchaind

## Public Services
* **RPC:** https://rpc-t-cardchain.anatolianteam.com/ (Coming soon)
* **API:** https://api-t-cardchain.anatolianteam.com/ (Coming soon)
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Crowd%20Control

## Peering
You can use peer for fast connection or state sync (Coming soon)
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.Cardchaind/config/config.toml
```
The address book is updated once an hour. You can use it for quick launch.
```shell
wget -O $HOME/.pryzm/config/addrbook.json "COMING SOON"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
