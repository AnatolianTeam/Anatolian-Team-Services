---
title: 🗳️ Delegasyon
description: Ar.io testnete katılım rehberi.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
sidebar_position: 4
---

# Ar.io Delegasyon Rehberi

Bu bölümde bir başkasına ya da kendinize delege etmek için yapılması gerekenler anlatılmıştır.

## delegate-stake.ts Dosyasnın Düzenlenmesi

Aşağıdaki kod ile dosyası açıyoruz.
```shell
nano $HOME/testnet-contract/tools/delegate-stake.ts
```

Ardından aşağıdaki değişiklikleri yapıyoruz:
1. `const qty = 100;` Ne kadar stake etmek istiyorsanız miktarı değiştiriyorsunuz
2. `const target = 'CÜZDAN_ADRESİ';` delege etmek istediğiniz validatorün cüzdan adresini yazıyorsunuz.

Değişiklikleri tamamladıysanız aşağıdaki komutu çalıştırıp stake işlemini başlatıyoruz:
```shell
cd $HOME/testnet-contract
yarn ts-node tools/delegate-stake.ts
```

:::warning
Her delege işleminden önce bu dosyayı düzenlemeyi unutmayın yoksa sürekli aynı adrese delege edersiniz.
:::

### Delege Etmek için Adresler

Aşağıdaki adreslere delege edebilirsiniz.

* `EhkVW8-6SnOm1UBVI-TJH2Hsmoz9ppv1jQMRaSo2W_g`
* `BIa3UE0QEPRJC4HBSU252qHtA8ZOR4ClnzBq1LZQ_WU`
* `lC5I5rQvGZn36DodBvWiMD_abkprE20p6GgGiZakk9Y`
* `k5GhUmInR23Jt0I14A_EMFAtFHBCRSZyN7Ibr_2cY-k`
* `Z7gvVfG9n_AXsCQL9hfpknYQawYR30DFNTuBAzWzoOk`
* `vOrKy_8JvhhIxzWj7fe9E59AGKVi4Jb6YfgauAvCvxU`
* `lCzTnlf_Xmi0I0CTtsZgCI-aljcf4L0H8GcrddkDH7Y`

:::info
Adreslerinizi [telegram kanalımızdan](https://t.me/AnatolianTeam) yazarsanız listeye ekleyelim.
:::
