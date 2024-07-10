---
id: introduction
hide_table_of_contents: true
image: ./img/Airchains-Service-Cover.jpg
description: Airchains Servis Sayfası
keywords: [airchains, chain, kurulum, snapshot, statesync, güncelleme]
---
# Airchains

![Airchains](./img/Airchains-Service.jpg)

## Bağlantılar
 ✔️ [Website](https://www.airchains.io) |
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Airchains) |
 ✔️ [Doküman](https://docs.airchains.io) |
 ✔️ [GitHub](https://github.com/airchains-network) |
 ✔️ [Discord](https://discord.gg/airchains)

## Gereksinimler

| Bileşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD | 

## Ağ Bilgisi 

* Network Chain ID: junction
* Binary: junctiond
* Denom: amf
* Çalışma dizini: .junction

## Hizmetler
* **RPC:** https://rpc-t-airchains.anatolianteam.com/ 
* **API:** https://api-t-airchains.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Airchains

## Peering
Hızlı bağlantı ya da durum senkronizasyonu (statesync) için eş (peer) kullanabilirsiniz.
```shell
peers="e78a440c57576f3743e6aa9db00438462980927e@5.161.199.115:26656,61e609631e8be6e04c43ed3d7bfef23c064dc912@[2a01:4f8:221:26e0::2]:43456,f786dcc80601ddd33ba98c609795083ba418d740@158.220.119.11:43456,0b1159b05e940a611b275fe0006070439e5b6e69@[2a03:cfc0:8000:13::b910:277f]:13756,c8f6b1a795a6d9cd2ec39faf277163a9711fc81b@38.242.194.19:43456,552d2a5c3d9889444f123d740a20237c89711109@109.199.96.143:43456,cc27f4e54a78b950adaf46e5413f92f5d53d2212@209.126.86.186:43456,f5b69a02abeb3340ccd266f049ed6aabc7c0ea88@94.72.114.150:43456,db38d672f66df4de01b26e1fa97e1632fbfb1bdf@173.249.57.190:26656,d9a5e20668955bdd5c2fc28cffd6f06e23794638@[2a01:4f8:10a:3a51::2]:43456"
sed -i -e "s|^persistent_peers *=.*|persistent_peers = \"$peers\"|" $HOME/.junction/config/config.toml

systemctl restart junctiond && journalctl -u junctiond -f -o cat
```
Adres defteri üç saatte bir güncellenir. Hızlı başlatma için kullanabilirsiniz.
```shell
wget -O $HOME/.junction/config/addrbook.json "https://testnet.anatolianteam.com/airchains/addrbook.json"
systemctl restart junctiond && journalctl -u junctiond -f -o cat
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
