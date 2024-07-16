---
title: 💾 Rivalz Client
description: Rivalz Client kurulum rehberi.
image: ./img/Rivalz-Service-Cover.jpg
keywords: [Rivalz, AI, Dymension, Celestia, kurulum]
---

# Rivalz Client Kurulum Rehberi

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install curl build-essential pkg-config libssl-dev git wget jq make gcc chrony -y
```

## NodeJS Kurulumu

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt install nodejs 
apt update -y && apt upgrade -y
```

## NPM Kurulumu
```shell
apt install npm
```

## NPM Web3 Kurulumu
```shell
npm install web3@1.5.3
```

## Client Kurulumu
Öncelikle bir screen açalım.
```shell
screen -S rivalz
```
Ardından clienti kurarlım.
```shell
npm i -g rivalz-node-cli
```

## Cienti Başlatma
```shell
rivalz run
```

:::warning
Eğer `Your version is outdated. Please run 'rivalz update-version' to update to the latest version` uyarısı alırsanız aşağıdaki kodu çalıştırın.
:::

```shell
rivalz update-version
```
Ardından yeniden
```shell
rivalz run
```

Kodu çalıştırdığınızda aşağıdakileri soracak;
> 1. `? Enter wallet address (EVM):`  [kullanıcı panelinize](https://rivalz.ai?r=mkoltigin) bağlanırken kullandığınız EVM cüzdan adresiniz
> 2. `? Enter CPU cores number you want to use (Max 6):` sisteminize göre buraya bir rakam girin. Eğer 6CPU var ve başka node'lar da çalışyorsa hepsini yazmamanız iyi olur.
> 3. `? Enter Ram size you want to use (GB, Max 16 GB):` buradada kullanılmasını istediğiniz RAM miktarını yazın
> 4. `? Select disk type you want to use:  (Use arrow keys)` HD seçiliyken Enter tuşuna basın.
> 5. `? Select disk serial number you want to use (Enter if no option):` yine Enter şuna basın.
> 6. `Enter Disk size of drive-scsi0 (HD) you want to use (GB, Max 600 GB):` kullanılmasını istediğini disk miktarını yazın.

## Doğrulama

[Node Validate](https://rivalz.ai/dashboard/node-validate) sayfasına gidip tanımladığınız cüzdanınızla bağlanıp imza vererek node'unuzu doğrulayın. 