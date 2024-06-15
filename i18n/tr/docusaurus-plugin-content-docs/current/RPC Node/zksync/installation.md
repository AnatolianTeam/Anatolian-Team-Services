---
title: 💾 Kurulum
description: RPC Node kurulum rehberi.
image: ./img/zksync-Service-Cover.jpg
keywords: [zksync, rpc, node]
---

# Kurulum
:::warning
Rehber yapım aşamasındadır. Bittiğinde bu uyarı burada olmayacaktır.
:::

## Sunucu Kiralama
Bunun için [Hetzner](https://hetzner.cloud/?ref=z9uy37L7ovja)'den saatlik olarak kullanabileceğiniz AX52 VDS 1TB'lık sunucuyu temin etmeniz faydalı olacaktır. paylaşımlı (VPS) sunucularda sıkıntı yaşamamak adına bu elzem. Suncucuya Ubuntu 22.04 kurlumunu sağladıktan sonra alağıdaki adımlara geşebilirsini.z


## Updating the System
```shell
apt update && apt upgrade -y
```

## Güt Kurulması
```shell
apt install git
```

## Docker Kurulumu
```shell
apt install docker.io
```
### Docker Version Kontrolü
Aşağıdaki kod ile kurulumu kontrol edin.
```shell
docker --version
```

## Docker Compose Kurulumu
```shell
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Docker Compose Çalıştırma İzni
```shell
chmod +x /usr/local/bin/docker-compose
```

### Docker Compose Version Kontrolü
Aşağıdaki kod ile kurulumu kontrol edin.
```shell
docker-compose --version
```

## zksync Reposunun Klonlanması
```shell
git clone https://github.com/matter-labs/zksync-era.git
```

## Node'u Başlatma
Öncelikle ilgili dizine gidelim.
```shell
cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples
```

Ardından node'u başlatalım.
```shell
docker-compose -f mainnet-external-node-docker-compose.yml up -d
```

### Docker Konteynırlarını Kontrol Etme
```shell
docker ps
```  

### Loglara Bakma 
```shell
docker logs -f --tail 100 docker-compose-examples_external-node_1
```

:::warning
Ardından CTRL C ile logları kapatın. Logları kapatmanız node'u durdurmaz, arka planda çalışmaya devam ediyor zaten. Kapatmadan bir screen içerisinde çalıştıracak oluranız zamanla diskinizde bu loglar yer kaplayacaktır. 
:::

## RPC URL İşlemleri

### .yml Dosyasını Düzenleme
Öncelikle bu dosyayı açıyoruz.
```shell
nano $HOME/zksync-era/docs/guides/external-node/docker-compose-examples/mainnet-external-node-docker-compose.yml
```
Ardından dosyada aşağıdaki gösterilen - `"127.0.0.1:3060:3060"` bölümü `"0.0.0.0:3060:3060"` olarak değiştiriyoruz. 
```shell
.
.
.
  external-node:
    image: "matterlabs/external-node:2.0-v24.0.0"
    depends_on:
      postgres:
        condition: service_healthy
    ports:
      - "127.0.0.1:3060:3060". ## Bu bölümü şu şekilde değiştiriyoruz: `"0.0.0.0:3060:3060"`
      - "127.0.0.1:3061:3061"
      - "127.0.0.1:3081:3081"
    volumes:
      - mainnet-rocksdb:/db
    expose:
      - 3322
.
.
.
```

Ardından `CTRL X, Y ve ardından enter` tuşlayıp laydediyoruz.

### Node'u Yeniden Başlatma
Bu işlemle yukarıda yaptığımız değişiklkleri uygulayacağız.

Önce docker compose'u kapatıyoruz. 
```shell
cd $HOME/zksync-era/docs/guides/external-node/docker-compose-examples
docker-compose -f mainnet-external-node-docker-compose.yml down
```
Ardından yenien başlatıyoruz.
```shell
docker-compose -f mainnet-external-node-docker-compose.yml up -d
```

### RPC URL Kullanımı
Node, 3060 portunu kullanıyor olacak. 

> Cüzdanınıza RPC adresinizi şu şekilde ekleyebilirsiniz.

```
Ağ adı: Adın önemi yok, dilediğiniz bir isim yazabilirsiniz.

RPC URL: http://SUNUCU_IP_ADRESI:3060

Zincir Kimliği: 324

Blok Gezgini: https://explorer.zksync.io/blocks/
```

## İşlem Sonu
RPC ile işleminiz bittikten sonra Hetzner kontrol panelinizden sunucunuzu kapatabilirsiniz.

​
