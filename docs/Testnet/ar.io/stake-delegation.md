---
title: 💰 Delegation
description: Ar.io delegation guide.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
---

# Ar.io Delegation Guide

This section describes what you need to do to delegate to someone else or to yourself.

## Editing the delegate-stake.ts File

Open the file with the code below.
```shell
nano $HOME/testnet-contract/tools/delegate-stake.ts
```

Then make the following changes:
1. `const qty = 500;` You change the amount how much you want to stake
2. `const target = 'WALLET_ADDRESS';` You write the wallet address of the validator you want to stake.

If you have completed the changes, run the command below to start the staking process:
```shell
cd $HOME/testnet-contract
yarn ts-node tools/delegate-stake.ts
```

:::warning
Don't forget to edit this file before each stake, otherwise you will always stake to the same address.
:::