---
id: introduction
hide_table_of_contents: true
image: ./img/Artela-Service-Cover.jpg
description: Artela Network Servis Sayfası
keywords: [artela, network, kurulum, snapshot, statesync, güncelleme]
---
# Artela Network

![Artela](./img/Artela-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://artela.network/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Artela) |
 ✔️ [Doküman](https://docs.artela.network/main) |
 ✔️ [GitHub](https://github.com/artela-network) |
 ✔️ [Discord](https://discord.gg/artela)

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD | 

## Ağ Bilgisi 

* Network Chain ID: artela_11822-1
* Binary: artelad
* Denom: uart
* Çalışma dizini: .artelad

## Hizmetler
* **RPC:** https://rpc-t-artela.anatolianteam.com/ 
* **API:** https://api-t-artela.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Artela

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.artelad/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.artelad/config/addrbook.json "https://testnet.anatolianteam.com/artela/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
