---
title: 💾 Light Node
description: Nubit Light Node kurulum rehberi.
image: ./img/Nubit-Service-Cover.jpg
keywords: [Nubit, Bitcoin, Native, DA, Veri Kullanılabilirliği, Katmanı, kurulum]
---

# Nubit Light Node Kurulum 

## Scripti Çalıştırın
```shell
curl -sL1 https://nubit.sh | bash
```

Ardından loglar ilk aktığı anda cüzdan adresinizi, kelimelerinizi, PUBKEY ve AUTH KEY verecek bunları kaydedip güvenli bir yerde saklayın ve `CTRL C` tuşlayın ve node'u durdurun.

## Screen Açıp Node'u Tekrar Başlatma
```shell
screen -S nubit
```

ardından ilk kullandığımız kodu kullanın;
```shell
curl -sL1 https://nubit.sh | bash
```

Ardından `CTRL A D` ile screenden çıkın.

## Puan Alma

Yukarıda kaydettiğiniz PUPKEY'inizi [Aplha](https://alpha.nubit.org/) sayfasında girip onaylatın.

## Video

[![Watch the video](./img/video-2.jpg)](https://youtu.be/krM2OlWnurQ)

# Faydalı Kodlar

## Nubit Cüzdan Adresini Öğrenme
```shell
$HOME/nubit-node/bin/nubit state account-address  --node.store $HOME/.nubit-light-nubit-alphatestnet-1
```

## Nubit Cüzdan PUPKEY Öğrenme
```shell
$HOME/nubit-node/bin/nkey list --p2p.network nubit-alphatestnet-1 --node.type light
```

## Nubit Cüzdan Kelimelerini Öğrenme
```shell
cat $HOME/nubit-node/mnemonic.txt
```

## Cüzdanı Değiştirme
### Mevcut cüzdanı Silme

```shell
$HOME/nubit-node/bin/nkey delete my_nubit_key -f --node.type light --p2p.network nubit-alphatestnet-1
```

### Varolan Cüzdanı Ekleme
```shell
$HOME/nubit-node/bin/nkey add CUZDAN_ADI --recover --keyring-backend test --node.type light --p2p.network nubit-alphatestnet-1
```

### Cüzdanların Listesine Bakma
```shell
$HOME/nubit-node/bin/nkey list --p2p.network nubit-alphatestnet-1 --node.type light
```

## Node'u Kaldırma
```shell
rm -rf $HOME/nubit-node
rm -rf $HOME/.nubit-light-nubit-alphatestnet-1
```

