---
title: ⤴️ Yardımcı Programlar
description: Redbelly için yardımcı araçlar.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/redbelly/img/Redbelly-Service-Cover.jpg
keywords: [redbelly, network, kurulum, snapshot, statesync, güncelleme]
---

# Redbelly Node Yardımcı Programları
:::note
Komutlarda aksi belirtilmedikçe değişiklik yapılmamalıdır.
:::

## sisyemi Güncelleme ve Phyton Kurulumu
```shell
apt update && apt upgrade -y
sudo apt install python3
```

## Redbelly-Utils Reposunu Klonlama
```shell
git clone https://github.com/ilkermanap/redbelly-utils
```

## Nasıl Çalışır?
```shell
cd $HOME/redbelly-utils && python3 checksync.py https://subdomain.domain.xyz:8545 //adresi sizin adresiniz ile değiştirin.
```

Sonrasında aşağıdaki gibi bir çıktı alacaksınız. Yukarıda yer alan ağın son blok yüksekliği, aşağıda yer alan ise sizin node'unuzun blok yükekliği.
```shell
   ilker@t440s:~ $ python3 checksync.py https://redbelly.manap.se:8545
   This is the first check for https://rbn-gcp-australia-southeast1-a-0-b-v2.devnet.redbelly.network:8545. I will wait for 10 seconds and check again
   This is the first check for https://redbelly.manap.se:8545. I will wait for 10 seconds and check again  
   --------------------------------------------------
   URL          :  https://rbn-gcp-australia-southeast1-a-0-b-v2.devnet.redbelly.network:8545
   Block Height :  42105
   Sync Speed   :  0.0
   Time to sync :  0
   --------------------------------------------------
   URL          :  https://redbelly.manap.se:8545
   Block Height :  42105
   Sync Speed   :  0.0
   Time to sync :  0
```

