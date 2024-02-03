---
id: introduction
hide_table_of_contents: true
description: Node kurulum rehberi.
image: ./img/Arable-Service-Cover.jpg
keywords: [arable, protocol, acre, network, kurulum, snapshot, statesync, güncelleme]
---
# Arable Protocol

![Arable](./img/Arable-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://www.arable.finance/) |
 ✔️ [Blockchain Explorer](https://cosmos.anatolianteam.com/arable) |
 ✔️ [Doküman](https://about.arable.finance/) |
 ✔️ [GitHub](https://github.com/ArableProtocol) |
 ✔️ [Discord](http://discord.gg/arable)

## Bizimle Stake Edin ♻️
Restake kullanarak fee ücreti ödemeden auto-restake kullanarak [buradan](https://restake.app/acrechain/acrevaloper10uc3h2348v9dxa7evkjhep8xxtsd8f7de3xg5t) stake edebilirsiniz.

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 8 |
| RAM	| 16 GB | 32 GB |
| Storage	| 500 GB SSD | 1 TB SSD | 

## Ağ Bilgisi 

* Network Chain ID: acre_9052-1
* Binary: acred
* Denom: aacre
* Çalışma dizini: .acred

## Hizmetler
* **RPC:**
    * https://rpc.acre.nodestake.top/
    * https://rpc.acrescan.com/
    * https://rpc-acre.synergynodes.com/
    * https://rpc-acrechain.nodeist.net/
    * https://jsonrpc.point.nodestake.top/
    * https://api.acre.nodestake.top/
* **API:**
    * https://rest.acrescan.com/
    * https://lcd-acre.synergynodes.com/
    * https://api-acrechain.nodeist.net/
* **Explorer:** https://cosmos.anatolianteam.com/arable

## Peering (Yakında)
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.acred/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.acred/config/addrbook.json "https://mainnet.anatolianteam.com/arable/genesis.json"
wget -O $HOME/.acred/config/addrbook.json "https://mainnet.anatolianteam.com/arable/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
