---
title: 🗳️ Delegasyon
description: Ar.io testnete katılım rehberi.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
---

# Ar.io Delegasyon Rehberi

Bu bölümde bir başkasına ya da kendinize delege etmek için yapılması gerekenler anlatılmıştır.

## delegate-stake.ts Dosyasnın Düzenlenmesi

Aşağıdaki kod ile dosyası açıyoruz.
```shell
nano $HOME/testnet-contract/tools/delegate-stake.ts
```

Ardından aşağıdaki değişiklikleri yapıyoruz:
1. `const qty = 500;` Ne kadar stake etmek istiyorsanız miktarı değiştiriyorsunuz
2. `const target = 'CÜZDAN_ADRESİ';` delege etmek istediğiniz validatorün cüzdan adresini yazıyorsunuz.

Değişiklikleri tamamladıysanız aşağıdaki komutu çalıştırıp stake işlemini başlatıyoruz:
```shell
cd $HOME/testnet-contract
yarn ts-node tools/delegate-stake.ts
```

:::warning
Her delege işleminden önce bu dosyayı düzenlemeyi unutmayın yoksa sürekli aynı adrese delege edersiniz.
:::

