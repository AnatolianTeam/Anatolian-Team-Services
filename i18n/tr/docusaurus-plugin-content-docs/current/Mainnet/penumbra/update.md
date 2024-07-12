---
title: 🆙 Güncelleme
description: Node güncelleme.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme 

:::info
Güncelleme: v0.79.0
:::

## Servisleri Durdurma
```shell
systemctl stop penumbra cometbft
```

## Penumbra Command Line Interface (CLI) Güncelleme
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pcli-installer.sh | sh
```

## Penumbra Clientd Güncelleme
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pclientd-installer.sh | sh
```

## pd Güncelleme 
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pd-installer.sh | sh
```

## Verileri Resetleme
Önceki test ağlarından kalan test ağı verilerini sıfırlıyoruz.
```shell
pd testnet unsafe-reset-all
```

## Snap İndirme

## Migrate
```shell
pd migrate --home PD_HOME --comet-home COMETBFT_HOME
```

## Servisleri Yeniden Başlatma
```shell
systemctl restart penumbra cometbft
```