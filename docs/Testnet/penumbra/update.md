---
title: 🆙 Update
description: Update node.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, installation, snapshot, statesync, update]
---

# Update 

:::info
Update: v0.77.2
:::

## Stopping the Services
```shell
systemctl stop penumbra cometbft
```

## Update the Penumbra Command Line Interface (CLI)
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pcli-installer.sh | sh
```

## Update the Penumbra Clientd
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pclientd-installer.sh | sh
```

## Update the pd 
```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pd-installer.sh | sh
```

## Resetting Data
We reset remaining testnet data from previous testnets.
```shell
pd testnet unsafe-reset-all
```

## Snap Download
:::warning
Check the correct snap address [here](https://guide.penumbra.zone/node/pd/join-testnet.html) according to the update status.
Below is the snap to be used to migrate from version 76 to 77.
:::

Edit the `IP_ADDRESS` and `MY_NODE_NAME` sections according to your needs.
```shell
pd testnet join --external-address IP_ADDRESS:26656 --moniker MY_NODE_NAME \
 --archive-url "https://snapshots.penumbra.zone/testnet/pd-migrated-state-76-77.tar.gz"
```

## Migrate
```shell
pd migrate --home PD_HOME --comet-home COMETBFT_HOME
```

## Restartin the Services
```shell
systemctl restart penumbra cometbft
```
