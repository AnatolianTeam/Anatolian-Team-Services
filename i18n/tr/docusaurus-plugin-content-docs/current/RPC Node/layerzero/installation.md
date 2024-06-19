---
title: 💾 Kurulum
description: Layer Zero RPC Node kurulum rehberi.
image: ./img/L0-Service-Cover.jpg
keywords: [Layer, Zero, LayerZero, rpc, node]
---

# Kurulum (YAKINDA)

## Sunucu Kiralama
Bunun için [Hetzner](https://hetzner.cloud/?ref=z9uy37L7ovja)'den saatlik olarak kullanabileceğiniz AX52 VDS 1TB'lık sunucuyu temin etmeniz faydalı olacaktır. paylaşımlı (VPS) sunucularda sıkıntı yaşamamak adına bu elzem. Suncucuya Ubuntu 22.04 kurlumunu sağladıktan sonra alağıdaki adımlara geşebilirsini.z


## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Git Kurulması
```shell
apt install git
```

### RPC URL Kullanımı
Node, XXXX portunu kullanıyor olacak. 

> Cüzdanınıza RPC adresinizi şu şekilde ekleyebilirsiniz.
```
Ağ adı: Adın önemi yok, dilediğiniz bir isim yazabilirsiniz.

RPC URL: http://SUNUCU_IP_ADRESI:PORT

Zincir Kimliği: X

Blok Gezgini: https://explorer.io/blocks/
```

## İşlem Sonu
RPC ile işleminiz bittikten sonra Hetzner kontrol panelinizden sunucunuzu kapatabilirsiniz.

​
