---
id: introduction
hide_table_of_contents: true
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/okp4/img/OKP4-Service-Cover.jpg
keywords: [okp4, open, knowledge, protocol, kurulum, snapshot, statesync, güncelleme]
---
# OKP4

![Chain4Energy](./img/OKP4-Service.jpg)

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

* Network Chain ID: okp4-nemeton-1
* Binary: okp4d
* Denom: uknow
* Working directory: .okp4d

## Hizmetler
* **RPC:** https://rpc-t-okp4.anatolianteam.com/
* **API:** https://api-t-okp4.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/OKP4

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.okp4d/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.okp4d/config/addrbook.json "https://testnet.anatolianteam.com/okp4/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
