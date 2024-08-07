---
title: 💰 Delegation
description: Ar.io delegation guide.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
sidebar_position: 4
---

# Ar.io Delegation Guide

This section describes what you need to do to delegate to someone else or to yourself.

## Editing the delegate-stake.ts File

Open the file with the code below.
```shell
nano $HOME/testnet-contract/tools/delegate-stake.ts
```

Then make the following changes:
1. `const qty = 100;` You change the amount how much you want to stake
2. `const target = 'WALLET_ADDRESS';` You write the wallet address of the validator you want to delegate.

If you have completed the changes, run the command below to start the delegating process:
```shell
cd $HOME/testnet-contract
yarn ts-node tools/delegate-stake.ts
```

:::warning
Don't forget to edit this file before each delegation, otherwise you will always delegate to the same address.
:::

### Addresses to Delegate

You can delegate to the addresses below.

* `EhkVW8-6SnOm1UBVI-TJH2Hsmoz9ppv1jQMRaSo2W_g`
* `BIa3UE0QEPRJC4HBSU252qHtA8ZOR4ClnzBq1LZQ_WU`
* `lC5I5rQvGZn36DodBvWiMD_abkprE20p6GgGiZakk9Y`
* `k5GhUmInR23Jt0I14A_EMFAtFHBCRSZyN7Ibr_2cY-k`
* `Z7gvVfG9n_AXsCQL9hfpknYQawYR30DFNTuBAzWzoOk`
* `vOrKy_8JvhhIxzWj7fe9E59AGKVi4Jb6YfgauAvCvxU`
* `lCzTnlf_Xmi0I0CTtsZgCI-aljcf4L0H8GcrddkDH7Y`
* `qJU-4reunu8JdPHrzCL2eH_vsyU_kljRcFWDgR8s-tU`
* `QAGGs4RNR6e2gG0a0A3vrGRk2L6OlJxFPng5bfGNJUA`
* `pqJmLkaXWjgSgsTB2_l5slTdRrx7lgzq1XTc4LRV0l4`
* `lQ1e2TNADS1kLJy5gUTW2GS0s1po6s3GI15hHsgNKks`
* `9my2TT05SwQrk8TCXmASpr3nh_DuEIKh5GicUfn4d-Q`
* `GY0MysWAv83ANosil942egXtxMxxlAPEiI1LFF5hxjA`
* `EUc8hlu2jMeMRC8rF14OMJ8k5jZ9Mu-eAidjw_a5Vtw`

:::info
If you write your addresses on our [telegram channel](https://t.me/AnatolianTeam), we will add them to the list.
:::