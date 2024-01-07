---
id: introduction
hide_table_of_contents: true
---
# Babylon Chain

![Babylon Chain](./img/Babylon-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://www.babylonchain.io/) |
 ✔️ [Blockchain Explorer](https://babylon.explorers.guru/) |
 ✔️ [Doküman](https://docs.babylonchain.io/) |
 ✔️ [GitHub](https://github.com/babylonchain) |
 ✔️ [Discord](https://discord.gg/XcCtr53g8F) | 
 ✔️ [Zealy](https://zealy.io/c/babylonchain/invite/H74AmwvpVNPGL8suCk1xL)

## Gereksinimler

| Bileşenler| Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Disk	| 250 GB SSD | 500 GB SSD |

## Ağ Bilgisi 

* Network Chain ID: bbn-test-2
* Binary: babylond
* Denom: ubbn
* Working directory: .babylond

## Hizmetler
* **RPC:** https://rpc-t-babylon.anatolianteam.com/
* **API:** https://api-t-babylon.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Babylon

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="fc0a973bd9c9da2b3a9f2aebb2efa9f14c25e8a5@86.48.0.190:12656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.babylond/config/config.toml
```
Adres defteri saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.pryzm/config/addrbook.json "https://testnet.anatolianteam.com/babylon/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
