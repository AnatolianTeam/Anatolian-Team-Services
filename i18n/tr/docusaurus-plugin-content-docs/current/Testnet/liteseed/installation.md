---
title: 💾 Installation
description: Liteseed Seromoni katılım rehberi.
image: ./img/Liteseed-Service-Cover.jpg
keywords: [Liteseed, ao, veri, kurulum, rehber]
sidebar_position: 1
---

# Liteseed Kurulum Rehberi

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Docker Kurulumu
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Repoyu Klonlama
```shell
git clone https://github.com/liteseed/edge
```

## Docker Image Oluşturma

```shell
cd ./edge
docker build -t edge .
```

## Volume Oluşturma

```shell
docker volume create liteseed
```

## Arweave Özel Anahtarını Oluşturma ve SQLite Veritabanını Taşıma

```shell
docker run -v liteseed:/data edge generate
docker run -v liteseed:/data edge migrate
```

## Node'u Başlatma

```shell
docker run -v liteseed:/data edge start
```
* Ardından CTRL C ile logları kapatın. Kapatmadan bir screen içerisinde çalıştıracak oluranız zamanla diskinizde bu loglar yer kaplayacaktır.

## Cüzdan Adresini Öğrenme

```shell
docker run -v liteseed:/data edge balance
```

* Çıktı aşağıdaki gibi görünecektir
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 1000 LSD
Staked:  No
```

## Token İsteme

Token almak için cüzdan adresinizi ve varsa web sitenizi veya Twitter adresinizi `hello@liteseed.xyz` adresine gönderin.

## Stake Etme 
Token istemek için gönderdiğiniz e-postada verdiğiniz adresi (twitter or website) `https://yourbundlerurl.com` yazan yere yazın.
```shell
docker run -v liteseed:/data edge stake -u "https://yourbundlerurl.com"
```

## Stake Durumunu Kontrol Etme
```shell
docker run -v liteseed:/data edge balance
```

* Çıktı aşağıdaki gibi görünecektir
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 0 LSD
Staked:  Yes
```

## Bundlr'ı Çalıştırma
Artık hem $AR hem de $LSD kazanmaya başlayabilirsiniz.
```shell
docker run -v liteseed:/data edge start
```
