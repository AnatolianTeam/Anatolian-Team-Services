---
title: 💾 Ligth Node
description: Nubit Light Node installation guide.
image: ./img/Nubit-Service-Cover.jpg
keywords: [Nubit, Bitcoin, Native, DA, Data Availability Layer, installation]
---

# Nubit Light Node Installation 

## Run the Script
```shell
curl -sL1 https://nubit.sh | bash
```

Then, when the logs first flow, it will give your wallet address, mnemonics, PUBKEY and AUTH KEY, save them and keep them in a safe place and press `CTRL C` and stop the node.

## Open Screen and Restart Node
```shell
screen -S nubit
```

then use the code we used first;
```shell
curl -sL1 https://nubit.sh | bash
```

Then exit the screen with `CTRL A D`.

## Getting Points

Enter the PUPKEY you saved above on the [Aplha](https://alpha.nubit.org/) page and confirm it.

## Video

[![Watch the video](../../../i18n/tr/docusaurus-plugin-content-docs/current/Testnet/nubit/img/video-2.jpg)](https://youtu.be/krM2OlWnurQ)

# Useful Codes

## Learning Nubit Wallet Address
```shell
$HOME/nubit-node/bin/nubit state account-address --node.store $HOME/.nubit-light-nubit-alphatestnet-1
```

## Nubit Wallet PUPKEY Learning
```shell
$HOME/nubit-node/bin/nkey list --p2p.network nubit-alphatestnet-1 --node.type light
```

## Learning Nubit Wallet Mnemonics
```shell
cat $HOME/nubit-node/mnemonic.txt
```

## Changing Wallet
### Deleting Existing Wallet

```shell
$HOME/nubit-node/bin/nkey delete my_nubit_key -f --node.type light --p2p.network nubit-alphatestnet-1
```

### Adding an Existing Wallet
```shell
$HOME/nubit-node/bin/nkey add CUZDAN_NAME --recover --keyring-backend test --node.type light --p2p.network nubit-alphatestnet-1
```

### Viewing the List of Wallets
```shell
$HOME/nubit-node/bin/nkey list --p2p.network nubit-alphatestnet-1 --node.type light
```

## Uninstall Node
```shell
rm -rf $HOME/nubit-node
rm -rf $HOME/.nubit-light-nubit-alphatestnet-1
```