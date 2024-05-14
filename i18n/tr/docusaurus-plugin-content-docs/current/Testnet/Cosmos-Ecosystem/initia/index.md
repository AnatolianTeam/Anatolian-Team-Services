---
id: introduction
hide_table_of_contents: true
image: ./img/Initia-Service-Cover.jpg
description: Initia Servis Sayfası
keywords: [initia, chain, kurulum, snapshot, statesync, güncelleme]
---
# Initia

![Initia](./img/Initia-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://initia.xyz/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Initia) |
 ✔️ [Doküman](https://docs.initia.xyz/) |
 ✔️ [GitHub](https://github.com/initia-labs) |
 ✔️ [Discord](https://discord.gg/initia)

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD | 

## Ağ Bilgisi 

* Network Chain ID: initiation-1
* Binary: initiad
* Denom: uusdc
* Çalışma dizini: .initia

## Hizmetler
* **RPC:** https://rpc-t-initia.anatolianteam.com/ 
* **API:** https://api-t-initia.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Initia

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
PEERS="093e1b89a498b6a8760ad2188fbda30a05e4f300@35.240.207.217:26656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.initia/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.initia/config/addrbook.json "https://testnet.anatolianteam.com/initia/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
