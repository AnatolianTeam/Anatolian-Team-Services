---
title: 🗳️ Proposal
description: Penumbra Proposal Guide.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, stake, user, guide]
---

# Penumbra Proposal Guide for the Delegators

Here is a simple guide for delegates to cast their votes.

## Installing the Penumbra PCLI 

:::warning
Ubuntu version must be minimum 22.04
:::

```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.1/pcli-installer.sh | sh
```
```shell
source $HOME/.cargo/env
```
```shell
pcli --version
```
The version output will be `pcli v0.79.1`.

### Updating pcli
:::warning
If you have installed it before and the previous pcli version is installed on your server, run the code below. If not, you do not need to do this.
:::
```shell
pcli view reset
```
**No wallet needs to be generated. The existing wallet will be used automatically.**

## Importing the Wallet
After entering the code below, type your wallet words (you won't be able to see your words when you type, they will be written in the background) and press enter.

```shell
pcli init --grpc-url https://grpc-penumbra.anatolianteam.com soft-kms import-phrase 
```

### Confirming Your Wallet Address
```shell
pc view address 0
```

### Sync Wallet
```shell
pcli view sync
```

### Checking Your Balance
```shell
pc view balance
```

## Reading the Propposal
If you would like to get information about the proposal put to vote, enter the code below.
```shell
pcli query governance proposal 0 definition
```

## Voting
```shell
pcli tx vote yes --on 0
```
```shell
pcli tx vote no --on 0
```
```shell
pcli tx vote abstain --on 0
```

## 🎉 Congratulations

You voted to move from Penumbra Phase 0 to Phase 1.