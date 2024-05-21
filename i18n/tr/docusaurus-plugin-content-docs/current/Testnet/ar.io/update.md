---
title: 🆙 Güncelleme
description: Ar Node güncelleme.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, güncelelme, rehber]
sidebar_position: 5
---

# Ar Node Güncelleme 

## Versiyon Kontrolü
```shell
curl http://localhost:3000/ar-io/info
```

## Konteyner ve Birimleri Kaldırma
```shell
cd $HOME/ar-io-node/
docker-compose down --rmi all
```

## Güncel Konteynerları Çekme
```shell
git pull 
git checkout main 
docker-compose up -d
```

## Logları Kontrol Etme
```shell
docker-compose logs -f --tail=0
```
* Ardından `CTRL C` ile logları kapatın. Kapatmadan bir screen içerisinde çalıştıracak oluranız zamanla diskinizde bu loglar yer kaplayacaktır. 


## Redis Error Çözümü
```shell
docker-compose down --rmi all
rm -rf /root/ar-io-node/data  
docker-compose up -d
```