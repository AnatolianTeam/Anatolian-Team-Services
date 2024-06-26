---
id: introduction
hide_table_of_contents: true
image: ./img/0G-Service-Cover.jpg
description: 0G Protocol Servis Sayfası
keywords: [0g, ai, yapay zeka, modüler, zincir, kurulum, snapshot, statesync, güncelleme]
---
# 0G Protocol

![0G](./img/0G-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://0g.ai/) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/0G) |
 ✔️ [Doküman](https://0glabs.gitbook.io/) |
 ✔️ [GitHub](https://github.com/0glabs) |
 ✔️ [Discord](https://discord.gg/0glabs)

## Gereksinimler

| Bşleşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD | 

## Ağ Bilgisi 

* Network Chain ID: zgtendermint_16600-1
* Binary: 0gchaind
* Denom: ua0gi
* Çalışma dizini: .0gchain

## Hizmetler
* **RPC:** https://rpc-t-0g.anatolianteam.com/ 
* **API:** https://api-t-0g.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/0G

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
PEERS="6cb43c1a81a9db8008268b0951ca8525e5670745@85.10.200.82:26656,1248487ea585730cdf5d3c32e0c2a43ad0cda973@peer-zero-gravity-testnet.trusted-point.com:26326,b2a30b824a4358f8bc2ee648770b31b5eba3a853@85.10.200.82:26656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.0gchain/config/config.toml
```
Adres defteri saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.0gchain/config/addrbook.json "https://testnet.anatolianteam.com/0g/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
