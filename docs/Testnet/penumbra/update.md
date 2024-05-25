---
title: 🆙 Update
description: Update node.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, installation, snapshot, statesync, update]
---

# Update 

:::info
Update: v0.76.0
:::

## Stopping the Services
```shell
systemctl stop penumbra cometbft
```

## Update the Penumbra Command Line Interface (CLI)
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.76.0/pcli-installer.sh | sh
```

## Update the Penumbra Clientd
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.76.0/pclientd-installer.sh | sh
```

## Update the pd 
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.76.0/pd-installer.sh | sh
```

## Restartin the Services
```shell
systemctl restart penumbra cometbft
```
