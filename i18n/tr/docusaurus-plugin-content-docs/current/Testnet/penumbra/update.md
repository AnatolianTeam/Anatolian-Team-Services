---
title: 🆙 Güncelleme
description: Node güncelleme.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme 

:::info
Güncelleme: v0.77.2
:::

## Servisleri Durdurma
```shell
systemctl stop penumbra cometbft
```

## Penumbra Command Line Interface (CLI) Güncelleme
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pcli-installer.sh | sh
```

## Penumbra Clientd Güncelleme
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pclientd-installer.sh | sh
```

## pd Güncelleme 
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pd-installer.sh | sh
```

## Verileri Resetleme
Önceki test ağlarından kalan test ağı verilerini sıfırlıyoruz.
```shell
pd testnet unsafe-reset-all
```

## Snap İndirme
:::warning
Güncelleme durumuna göre doğru snap adresini [buradan](https://guide.penumbra.zone/node/pd/join-testnet.html) kontrol ediniz.
Aşağıda version 76'dan 77'ye geçiş için kullanılacak snap yer almaktadır. 
:::

`IP_ADDRESS` ve `MY_NODE_NAME` bölümlerini kendinize göre düzenleyiniz. 
```shell
pd testnet join --external-address IP_ADDRESS:26656 --moniker MY_NODE_NAME \
    --archive-url "https://snapshots.penumbra.zone/testnet/pd-migrated-state-76-77.tar.gz"
```

## Migrate
```shell
pd migrate --home PD_HOME --comet-home COMETBFT_HOME
```

## Servisleri Yeniden Başlatma
```shell
systemctl restart penumbra cometbft
```