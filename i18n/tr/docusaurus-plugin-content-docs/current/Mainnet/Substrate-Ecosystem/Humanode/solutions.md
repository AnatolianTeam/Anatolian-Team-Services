---
title: ⚙️ Çözümler
description: Node kurulum rehberi.
image: ./img/Humanode-Service-Cover.jpg
keywords: [Humanode, network, insan, node]
---

# Çözümler

### Mnemonic Insert Hatası
:::warning
Öncelikle Humanode Launcher ana sayfasındaki `STOP THE NODE` butonuna tıklayın ve node’unuzu durdurun.
:::

Aşağıdaki kodları sunucunuzda çalıştırın, ardından Launcher'ı kapatıp yeniden açın ve tekrar deneyin.
```shell
echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
apt update
apt install libssl1.1
```

:::warning
Yukarıdaki adımlar işe yaramazsa aşağıdaki kodları girin ve sunucunuzu yeniden başlatın. Ardından Launcher'ı kapatıp yeniden açın ve tekrar deneyin.
:::
```shell
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.22_amd64.deb
dpkg -i libssl1.1_1.1.1f-1ubuntu2.22_amd64.deb
```