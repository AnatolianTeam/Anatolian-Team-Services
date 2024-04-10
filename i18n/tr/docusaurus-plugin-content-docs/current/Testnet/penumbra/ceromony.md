---
title: 🎊 Seromoni
description: Penumbra Summoning Seromoni katılım rehberi.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [Penumbra, Zone, summoning, özel, gizlilik, seromoni, kurulum]
---

# Penumbra Summoning Seromoni Faz 2 Kurulum

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Screen Kurulması
```shell
apt install screen
```

## Penumbra pcli Kurulumu
```
curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.71.0/pcli-x86_64-unknown-linux-gnu.tar.xz
unxz pcli-x86_64-unknown-linux-gnu.tar.xz
tar -xf pcli-x86_64-unknown-linux-gnu.tar
sudo mv pcli-x86_64-unknown-linux-gnu/pcli /usr/local/bin/
pcli --version
```
Versiyon çıktısı `pcli v0.71.0` olacak.

### pcli Güncelleme

:::warning
Eğer daha önce Faz 1'e katıldoysanız ve pcli sürümü sunucunuzda yüklü ise aşağıdaki kodu çalıştırın. Değilse bu işlemi yapmanıza gerek yoktur.
:::

```shell
pcli view reset
```
**Bu aşamada herhangi bir cüzdan oluşturulmasına gerek yoktur. Mevcut cüzdan otomatik olarak kullanılacaktır.**

## Cüzdan
Penumbra cüzdanı [buradan](https://chromewebstore.google.com/detail/penumbra-wallet/lkpmkhpnhknhmibgnmmhdhgdilepfghe) indirebilirsiniz.

### Yeni Cüzdan Oluşturma
Aşağıdaki kod ile yeni bir cüzdan oluşturuyoruz.
```shell 
pcli init soft-kms generate
```  
:::warning
Cüzdan tohum ifadenizi kaydetmeyi unutmayın!
:::

### Var Olan Cüzdanı İçeri Aktarma
Daha önceki seromoniye katıldıysanız ve hali hazırda bir cüzdanınız varsa onu içe aktarabilirsiniz.
```shell
pcli init soft-kms import-phrase
```

### Cüzdan Adresini Öğrenme
```shell
pcli view address 0
```

### Musluk
Cüzdan adresinizi [Discord](https://discord.gg/T7E5U929AV) sunucusundaki `#🚰┃testnet-faucet` kanalına göndererek token isteyin.

### Cüzdanı Senkronize Etme
```shell
pcli view sync
```

### Bakiye Kontrol
```shell
pcli view balance
```

## Ceremony Phase 2'ye Katılma

Bu aşamada teklifi artırmanız gerekebilir. [Explorer](https://summoning.penumbra.zone/phase/2)'daki en yüksek bahsi kontrol ederek kendi teklifinizi artırabilirsiniz. Bunu yapmak için '80penumbra' yazan yeri değiştirmeniz yeterlidir. İşlem uzun zaman alabilir, bu nedenle kodu ekranda çalıştırıyoruz. Ekrandan çıkmak için 'CTRL A D' tuşunlarına basın.
```shell
screen -S pen
pcli ceremony contribute --phase 2 --bid 80penumbra
```

## X'te Paylaşım Yapma
Katkınıza ait 'hash' kodunu içeren bir paylaşım yapın.

## Form
`Penumbra Summoning Phase 2 Attestations` [formunu](https://form.asana.com/?k=THhk7qmp3IDwCvXWTPHkow&d=1206052071402903) doldurun.

