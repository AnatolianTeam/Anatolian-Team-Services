---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg
description: Entangle Network Servis Sayfası
keywords: [entangle, network, kurulum, snapshot, statesync, güncelleme]
---
# Entangle

![Chain4Energy](./img/Entangle-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://entangle.fi/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/entangle) |
 ✔️ [Doküman](https://entangle-protocol.gitbook.io/) |
 ✔️ [Discord](https://discord.gg/entanglefi)

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD | 

## Ağ Bilgisi 

* Network Chain ID: entangle_33133-1
* Binary: entangled
* Denom: aNGL
* Çalışma dizini: .entangled

## Hizmetler
* **RPC:** https://rpc-t-entangle.anatolianteam.com/ 
* **API:** https://api-t-entangle.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/entangle

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.entangled/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.entangled/config/addrbook.json "https://testnet.anatolianteam.com/entangle/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
