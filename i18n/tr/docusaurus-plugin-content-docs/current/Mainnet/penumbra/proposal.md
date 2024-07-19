---
title: 🗳️ Oy Kullanma
description: Penumbra Oy Kullanma Rehberi.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, stake, swap, kullanıcı rehberi, rehber]
---

# Delegatorler için Penumbra Oy Kullanma Rehberi

Burada delegatorlerin oylarını kullanması için basit bir rehber hazırlanmıştır. 

## Penumbra pcli Kurulumu

```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.1/pcli-installer.sh | sh
```

## Cüzdanı İçe Aktarma
Aşağıdaki kodu girdikten sonra cüzdan kelimelerinizi yazın (yazdığınızda kelimeleriniz göremezsiniz, arka planda yazılmış olacak) ve enter tuşuna basın. 

```shell
pcli init --grpc-url https://grpc-penumbra.anatolianteam.com soft-kms import-phrase
```

### Cüzdan Adresinizi Teyit Etme 
```shell
pcli view address 0
```

### Bakiyenizi Kontrol Etme
```shell
pcli view balance
```

## Öneriyi Okuma
Oylamaya sunulan öneri hakkında bilgi edinmek isterseniz aşağıdaki kodu giriniz.
```shell
pcli query governance proposal 0 definition
```

## Oy Kullanma
```shell
pcli tx vote yes --on 0
```

## 🎉 Tebrikler

Penumbra Faz 0'dan Faz 1'e geçiş için oy verdiniz. 