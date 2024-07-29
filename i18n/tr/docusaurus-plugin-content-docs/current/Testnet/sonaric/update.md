---
title: 💾 AI Node Güncelleme
description: Sonaric AI node güncelleme rehberi.
image: ./img/Sonaric-Service-Cover.jpg
keywords: [Sonaric, AI, yapay zeka, node, kurulum]
---

# Sonaric AI Node Güncelleme

## Sonaric Güncelleme
```shell
apt upgrade sonaric
```

## Sonaric Durum Kontrol
```shell
systemctl status sonaricd
```

## Node Bilgisi
```shell
sonaric node-info
```

Yukarıdaki kodun çıktısı aşağıdakine benzer olmalıdır.

```shell
✨ Node information loaded:
 ├─🧊 ID             12XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 ├─📥 Name           bright-slate-wharf
 ├─🧊 Version        v1.5.0
 ├─🧊 Country        
 ├─🧊 Daemon Version v1.5.0
 └─🧩 Host Info      
    ├─🧊 OS               linux
    ├─🧊 Platform         ubuntu
    ├─🧊 Platform Version 22.04
    └─🧊 Hostname         vmd95175.contaboserver.net
```

## Puan Kontrolü

```shell
sonaric points
```

## Node Kontrolü

Sonaric [explorer](https://tracker.sonaric.xyz/) adresine gidin gidin ve arama kutusuna adınızı yazın. 
