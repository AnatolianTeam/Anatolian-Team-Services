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
 ✔️ [Blockchain Explorer](https://scan.testnet.initia.xyz/initiation-1/validators) |
 ✔️ [Doküman](https://docs.initia.xyz/) |
 ✔️ [GitHub](https://github.com/initia-labs) |
 ✔️ [Validator Görevleri](https://initia-xyz.notion.site/The-Initiation-Validator-Tasks-6d88ab0034644473907435662f9285b3) |
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
* Denom: uinit, uusdc
* Çalışma dizini: .initia

## Hizmetler
* **RPC:** https://rpc-t-initia.anatolianteam.com/ 
* **API:** https://api-t-initia.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Initia

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
PEERS="aee7083ab11910ba3f1b8126d1b3728f13f54943@initia-testnet-peer.itrocket.net:11656,d17d2d48b4741b21b16cba7aa5a0496151dec2e3@65.109.37.125:26656,767fdcfdb0998209834b929c59a2b57d474cc496@207.148.114.112:26656,72b8b9f0e826fa9be3f5ab55f56e67d409f0cef8@185.197.250.199:51656,9f0ae0790fae9a2d327d8d6fe767b73eb8aa5c48@176.126.87.65:22656,e43ce5800e48df7917942191c95276cb88bdd699@212.90.121.127:51656,7317b8c930c52a8183590166a7b5c3599f40d4db@185.187.170.186:26656,b79874ca9607e5d4a3fd730617cca863ff9f590e@5.78.116.66:26656,b8fcc8886246b3bd6058583a8017a7f987d7437e@185.182.186.46:26656,a45314423c15f024ff850fad7bd031168d937931@162.62.219.188:26656,00bf6d94bc8bae9d75c29a9bb198eaa401d34f4d@95.216.216.74:15656"
sed -i -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" "$HOME/.initia/config/config.toml"

systemctl restart initiad && journalctl -u initiad -f -o cat
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.initia/config/addrbook.json "https://testnet.anatolianteam.com/initia/addrbook.json"
systemctl restart initiad && journalctl -u initiad -f -o cat
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
