---
title: 🎊 Ceremony
description: Penumbra Summoning Ceremony installation guide.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, summoning, ceremony, private, chain, installation,]
---

# Penumbra Ceremony Phase 2 Installation

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the screen
```shell
apt install screen
```

## Installing Penumbra pcli

```
curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.77.2/pcli-x86_64-unknown-linux-gnu.tar.xz
unxz pcli-x86_64-unknown-linux-gnu.tar.xz
tar -xf pcli-x86_64-unknown-linux-gnu.tar
sudo mv pcli-x86_64-unknown-linux-gnu/pcli /usr/local/bin/
pcli --version
```
The version output will be `pcli v0.77.2`.

### Updating pcli
:::warning
If you have participated in Phase 1 before and the previous pcli version is installed on your server, run the code below. If not, you do not need to do this.
:::
```shell
pcli view reset
```
**No wallet needs to be generated. The existing wallet will be used automatically.**

## Wallet
You can download the Penumbra wallet [here](https://chromewebstore.google.com/detail/penumbra-wallet/lkpmkhpnhknhmibgnmmhdhgdilepfghe).

### Creating a New Wallet
Create a new wallet by running the code below.
```shell 
pcli init soft-kms generate
```  
:::warning
Don't forget to save your wallet seed phrase!
:::

### Importing an Existing Wallet
If you have participated in previous ceremony and already have a wallet, you can import it.
```shell
pcli init soft-kms import-phrase
```

### Learning Wallet Address
```shell
pcli view address 0
```

### Faucet
Request tokens by sending your wallet address to the `#🚰┃testnet-faucet` channel on the [Discord](https://discord.gg/T7E5U929AV) server.

### Sync Wallet
```shell
pcli view sync
```

### Checking Balance
```shell
pcli view balance
```

## Participating in the Ceremony Phase 2

You may need to increase the bid at this stage. You can increase your own bid by checking the highest bet in [Explorer](https://summoning.penumbra.zone/phase/2). To do this, just change where it says `80penumbra`. The process may take a long time, so run the code in screen. Press `CTRL A D` to exit the screen.
```shell
screen -S pen
pcli ceremony contribute --phase 2 --bid 80penumbra 
```

## Sharing on X
Make a post that includes the `contribution receipt hash`.

## Fill Out the Form
Complete the `Penumbra Summoning Phase 2 Attestations` [form](https://form.asana.com/?k=THhk7qmp3IDwCvXWTPHkow&d=1206052071402903).


