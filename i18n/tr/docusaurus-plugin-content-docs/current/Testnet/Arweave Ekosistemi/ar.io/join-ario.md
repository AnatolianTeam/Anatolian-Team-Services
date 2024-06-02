---
title: ▶️ Testnete Katılım
description: Ar.io testnete katılım rehberi.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
sidebar_position: 2
---

# Ar.io Testnete Katılım Rehberi

Bir önceki sayfadaki işlemleri yaptıysanız burada testnet ağına katılım sağlayacağız. 

## Kontratı Klonlama

```shell
cd $HOME
git clone https://github.com/ar-io/testnet-contract
```

### key.json Dosyası Oluşturma

ArConnect cüzdanınızı dışarı aktarın (Ayarlar > Wallets > Export keyfile). Ardından dosya içeriğini kopyalayıp aşağıdaki kodda açtığımız dosyaya yapıştırın. 

```shell
cd testnet-contract
nano key.json
```
Ardından `CTRL X` ardından `Enter` diyerek kaydediyoruz.


Yarn ile gerekli yüklemeleri yapıyoruz.
```shell
cd $HOME/testnet-contract
yarn install
```

## join-network.ts Dosyasını Düzenleme
```shell
nano $HOME/testnet-contract/tools/join-network.ts 
```
Dosya içerisinde aşağıdaki bölümleri düzenliyoruz.
* `100_000`: 10_000 yapıyoruz.
* `Permagate`: Node adımızı yazıyoruz.
* `permagate.io`: domain adresimizi yazıyoruz: ar.domain.com gibi.
* Owned and operated by DTF: Açıklama yazıyoruz. `Always forward with the Anatolian Team 🐆` yazabilirsiniz.
* `observerWallet`: Cüzdan adresimizi yazıyoruz.
```shell
  // the quantity of tokens to stake.  Must be greater than the minimum
  const qty = 100_000; // 10_000 yapıyoruz

  // the friendly label for this gateway
  const label = 'Permagate'; // Node adımızı yazıyoruz

  // the fully qualified domain name for this gateway eg. arweave.net
  const fqdn = 'permagate.io'; // domain adresimizi yazıyoruz: ar.domain.com gibi.

  // the port used for this gateway eg. 443
  const port = 443;

  // the application layer protocol used by this gateway eg http or https
  const protocol = 'https';

  // an optional gateway properties file located at this Arweave transaction id eg.
  const properties = 'FH1aVetOoulPGqgYukj0VE0wIhDy90WiQoV3U2PeY44';

  // an optional, short note to further describe this gateway and its status
  const note = 'Owned and operated by DTF.'; // Bu bolüme açıklama yazıyoruz. Always forward with the Anatolian Team 🐆 yazabilirsiniz.

  // The observer wallet public address eg.iKryOeZQMONi2965nKz528htMMN_sBcjlhc-VncoRjA which is used to upload observation reports
  const observerWallet = ''; // Cüzdan adresimizi yazıyoruz.
```

### Ağa Katılma

:::warning
Aşağıdaki kodu test tokenlerimiz geldiyse çalıştırıyoruz. 
:::

Test token gelip gelmediğini kontrol etmek için [token adresine](https://viewblock.io/arweave/contract/bLAgYxAdX2Ry-nt6aH2ixgvJXbpsEYm28NgJgyqfs-U) gidin ve sağ üst köşede bulunan butonuna tıklayıp tokeni cüzdanınıza ekleyin ya da [explorer](https://viewblock.io/arweave)'da cüzdanınızı aratıp token gelip gelmediğini kontrol edin.

```shell
cd $HOME/testnet-contract
yarn ts-node tools/join-network.ts
```
Bu komutun çıktısında TX id: null verirse tokeniniz eksiktir, uzun bir TX verirse işlem başarılı olmus demektir. Node'unuzu [gateways](https://gateways.ar-io.dev/) adresine giderek isminizi aratıp kontrol edebilirsiniz.

Eğer aşağıdaki gibi bir hata alırsanız; 
```shell
Usage Error: Couldn't find the node_modules state file - running an install might help (findPackageLocation)
```

Bu kodu çalıştırıp ardından tekrar deneyiniz.
```shell
cd $HOME/testnet-contract
rm -rf node_modules
yarn install
```

## Node'unuzu Konrol Etme

Aşağıdaki adresin kendi domaininize göre düzenleyip tarayıcınıza yazın. Sayfayı yenilediğinizde uptine artıyorsa sorun yoktur.
* `https://ar.domain.com/ar-io/healthcheck`

Ek olarak [gateways](https://gateways.ar-io.dev/) adresinde kendinizi aratın.

## OG Rolü Alma

Rolü almak için [ar.io Discord](https://discord.gg/ApxXjvwECK) suncusunda `#testnet-participants-to-be ` kanalına aşaıdaki bilgileri gönderiyoruz.

* https://ar.domain.com/ar-io/info
* https://ar.domain.com/ar-io/healthcheck

Ardından bir moderator sizden aşağıdaki adresinizde kendi isminizin gözüktüğü bir ekran görüntüsü göndermenizi isteyecek. Aşağıdaki adres de ekranda gözükecek şekilde sitede kendi adınızın bulunduğu şekilde bir ekran görüntüsü alıp gönderin.

Ardından `#testnet` kanalına aşağıdaki bilgileri gönderiyoruz.

* https://ar.domain.com/ar-io/info
* Cüzdan Adresi