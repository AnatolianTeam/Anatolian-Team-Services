---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crossfi/img/CrossFi-Service-Cover.jpg
description: Cross Finance Servis Sayfası
keywords: [crossfi, finance, cross finance, kurulum, snapshot, statesync, güncelleme]
---
# Cross Finance

![CrossFi](./img/CrossFi-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://crossfi.org/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/CrossFi) |
 ✔️ [Doküman](https://docs.crossfi.org) |
 ✔️ [GitHub](https://github.com/crossfichain) |
 ✔️ [Discord](https://discord.gg/crossfi)

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD | 

## Ağ Bilgisi 

* Network Chain ID: crossfi-evm-testnet-1
* Binary: crossfid
* Denom: mpx
* Çalışma dizini: .mineplex-chain

## Hizmetler
* **RPC:** https://rpc-t-crossfi.anatolianteam.com/ 
* **API:** https://api-t-crossfi.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/CrossFi

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.mineplex-chain/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.mineplex-chain/config/addrbook.json "https://testnet.anatolianteam.com/crossfi/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
