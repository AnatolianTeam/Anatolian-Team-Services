---
title: 💾 AI Node Kurulumu
description: Sonaric AI node kurulum rehberi.
image: ./img/Sonaric-Service-Cover.jpg
keywords: [Sonaric, AI, yapay zeka, node, kurulum]
---

# Sonaric AI Node Kurulumu (VPS)

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## NVM Kurulumu
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
```shell
source ~/.bashrc
```
```shell
nvm install 22
nvm use v22
npm install -g npm@latest
```

## Linux AI Node Kurulumu
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/monk-io/sonaric-install/main/linux-install-sonaric.sh)"
```

## Güncelleme
```shell
apt-get update
apt-get install sonaricd sonaric
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

## GUI'ye Erişim Verme
Aşağıdaki kodda `SUNUCU_IP_ADRESINIZ` yazan yere sunucu ip adresinizi yazıp kodu çalıştırın. 
```shell
YOUR_VPS_IP=SUNUCU_IP_ADRESINIZ
```
Ardından aşağıdaki kodu değiştirmeden olduğu gibi çalıştırın.
```shell
ssh -L 127.0.0.1:44003:127.0.0.1:44003 -L 127.0.0.1:44004:127.0.0.1:44004 -L 127.0.0.1:44005:127.0.0.1:44005 -L 127.0.0.1:44006:127.0.0.1:44006 root@$YOUR_VPS_IP
```


> Yukarıdaki kodu çalıştırdığınızda öncelikle `yes` yazıp `enter`, ardından `sunucu şifrenizi` girip `enter` tuşuna basın.


## Kimliği Yedekleme

Aşağıdaki kodda `YOUR_NODE_NAME` yazan yere node adınızı yazıp kodu çalıştırın. Ardından şifre belirleyin.
```shell
sonaric identity-export -o YOUR_NODE_NAME.identity
```
:::warning
Yuakrıdaki kod ile identity dosyasınız root dizinine kaydedilmiş olacak, yeeklemeyi unutmayın 
:::

## Operatör Rolü Alma
Sonaric [Discord](https://discord.gg/K75dYM5AEG) serverına katılın ardından `#general` kanalında /addnode yazıp mesaj atın. Aşağıdaki kodu çalıştırmadan önce `ADDNODE` yazan yeri silip size verilen kodu yazın ve kodu o şekilde çalıştırın.   

```shell
curl -sSL http://get.sonaric.xyz/scripts/register.sh | bash -s -- ADDNODE
```

## Puan Kontrolü

```shell
sonaric points
```

## Node Adı Değiştirme

```shell
sonaric node-rename
```

## Node Kontrolü

Sonaric [explorer](https://tracker.sonaric.xyz/) adresine gidin gidin ve arama kutusuna adınızı yazın. 
