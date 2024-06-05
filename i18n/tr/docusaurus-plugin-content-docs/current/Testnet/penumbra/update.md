---
title: 🆙 Güncelleme
description: Node güncelleme.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, kurulum, snapshot, statesync, güncelleme]
---

# Güncelleme 

:::info
Güncelleme: v0.72.2
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

## Servisleri Yeniden Başlatma
```shell
systemctl restart penumbra cometbft
```