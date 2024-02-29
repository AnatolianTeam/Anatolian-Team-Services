---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/img/CC-Service-Cover.jpg
description: Crowd Control Servis Sayfası
keywords: [crowdcontrol, cardchain, kurulum, snapshot, statesync, güncelleme]
---
# Crowd Control

![Crowd Control](./img/CC-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://crowdcontrol.network/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Crowd%20Control) |
 ✔️ [Doküman](https://github.com/DecentralCardGame/whitepaper/blob/master/whitepaper.pdf) |
 ✔️ [GitHub](https://github.com/DecentralCardGame) |
 ✔️ [Discord](https://discord.gg/5DYef3CpME)

## Gereksinimler

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Ağ Bilgisi 

* Network Chain ID: cardtestnet-8
* Binary: Cardchaind
* Denom: ubpf
* Working directory: .Cardchain

## Hizmetler
* **RPC:** https://rpc-t-crowdcontrol.anatolianteam.com/
* **API:** https://api-t-crowdcontrol.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Crowd%20Control

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.Cardchain/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.Cardchain/config/addrbook.json "https://testnet.anatolianteam.com/crowdcontrol/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
