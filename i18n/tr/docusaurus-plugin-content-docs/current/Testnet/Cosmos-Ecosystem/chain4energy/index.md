---
id: introduction
hide_table_of_contents: true
image: ./img/C4E-Service-Cover.jpg
description: Chain4Energy Servis Sayfası
keywords: [chain4energy, c4e, kurulum, snapshot, statesync, güncelleme]
---
# Chain4Energy

![Chain4Energy](./img/C4E-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://c4e.io/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Chain4Energy) |
 ✔️ [Doküman](https://docs.c4e.io/) |
 ✔️ [GitHub](https://github.com/chain4energy) |
 ✔️ [Discord](https://discord.gg/chain4energy)

## Gereksinimler

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Ağ Bilgisi 

* Network Chain ID: babajaga-1
* Binary: c4ed
* Denom: uc4e
* Working directory: .c4e-chain

## Hizmetler
* **RPC:** https://rpc-t-c4e.anatolianteam.com/
* **API:** https://api-t-c4e.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Chain4Energy

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.c4e-chain/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.c4e-chain/config/addrbook.json "https://testnet.anatolianteam.com/c4e/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
