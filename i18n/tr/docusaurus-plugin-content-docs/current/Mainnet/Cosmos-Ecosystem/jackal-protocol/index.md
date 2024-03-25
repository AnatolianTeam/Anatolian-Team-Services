---
id: introduction
hide_table_of_contents: true
description: Node kurulum rehberi.
image: ./img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, kurulum, snapshot, statesync, güncelleme]
---
# Jackal Protocol

![Jackal](./img/Jackal-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://www.jackalprotocol.com/) |
 ✔️ [Blockchain Explorer](https://cosmos.anatolianteam.com/jackal) |
 ✔️ [Doküman](https://docs.jackalprotocol.com/) |
 ✔️ [GitHub](https://github.com/jackallabs/) |
 ✔️ [Discord](https://discord.com/invite/5GKym3p6rj)

## Bizimle Stake Edin ♻️
Restake kullanarak fee ücreti ödemeden auto-restake kullanarak [buradan](hhttps://restake.anatolianteam.com/jackal/jklvaloper1qhm6hucmshaz6s3mdyl8jje9ryk7t5uxgxy6w8) stake edebilirsiniz.

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 8 |
| RAM	| 16 GB | 32 GB |
| Storage	| 500 GB SSD | 1 TB SSD | 

## Ağ Bilgisi 

* Network Chain ID: jackal-1
* Binary: canined
* Denom: ujkl
* Çalışma dizini: .canine

## Hizmetler
* **RPC:**
    * https://rpc.jackalprotocol.com
    * https://jackal-rpc.polkachu.com
    * https://rpc.jackal.nodestake.top
* **API:**
    * https://api.jackalprotocol.com
    * https://jackal-api.polkachu.com
    * https://api.jackal.nodestake.top
* **Explorer:** https://cosmos.anatolianteam.com/jackal

## Peering (Yakında)
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.canine/config/config.toml
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.artelad/config/addrbook.json "https://mainnet.anatolianteam.com/jackal/genesis.json"
wget -O $HOME/.artelad/config/addrbook.json "https://mainnet.anatolianteam.com/jackal/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
