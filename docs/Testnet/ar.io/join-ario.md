---
title: ▶️ Joining the Testnet
description: Joining the Ar.io Testnet Guide
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, Permaweb, installation]
---

# Joining the Ar.io Testnet Guide

If you have completed the steps on the previous page, we will participate in the testnet network here.

## Cloning the Contract

```shell
cd $HOME
git clone https://github.com/ar-io/testnet-contract
```

### Creating the key.json File

Export your ArConnect wallet (Settings > Wallets > Export wallet). Then copy the file content and paste it into the file we opened in the code below.

```shell
cd testnet-contract
nano key.json
```
Then we save it by pressing `CTRL X` followed by `Enter`.


We make the necessary installations with Yarn.
```shell
cd $HOME/testnet-contract
yarn install
```

## Editing the join-network.ts File
```shell
nano $HOME/testnet-contract/tools/join-network.ts 
```
We organize the following sections in the file.
* `100_000`: replace it with 10_000.
* `Permagate`: write your node name.
* `permagate.io`: write our domain address: like ar.domain.com.
* `Owned and operated by DTF`: write a description. You can write `Always forward with the Anatolian Team 🐆.`
* `observerWallet`: write your wallet address.

```shell
  // the quantity of tokens to stake.  Must be greater than the minimum
  const qty = 100_000; // replace it with 10_000 

  // the friendly label for this gateway
  const label = 'Permagate'; // write your node name.

  // the fully qualified domain name for this gateway eg. arweave.net
  const fqdn = 'permagate.io'; // write our domain address: like ar.domain.com

  // the port used for this gateway eg. 443
  const port = 443;

  // the application layer protocol used by this gateway eg http or https
  const protocol = 'https';

  // an optional gateway properties file located at this Arweave transaction id eg.
  const properties = 'FH1aVetOoulPGqgYukj0VE0wIhDy90WiQoV3U2PeY44';

  // an optional, short note to further describe this gateway and its status
  const note = 'Owned and operated by DTF.'; //  write a description. You can write Always forward with the Anatolian Team 🐆 

  // The observer wallet public address eg.iKryOeZQMONi2965nKz528htMMN_sBcjlhc-VncoRjA which is used to upload observation reports
  const observerWallet = ''; // write your wallet address.
```

### Joining the Network

:::warning
Run the code below if your test tokens have arrived.
:::

To check whether a test token has arrived, go to [token address](https://viewblock.io/arweave/contract/bLAgYxAdX2Ry-nt6aH2ixgvJXbpsEYm28NgJgyqfs-U) and click on the button in the upper right corner to add the token to your wallet or use [explorer](https:/ Search your wallet at /viewblock.io/arweave) and check if you have received any tokens.

```shell
cd $HOME/testnet-contract
yarn ts-node tools/join-network.ts
```

If the output of this command gives TX id: null, your tokens is missing, and if it gives a long TX, the transaction is successful. You can check your node by going to [gateways](https://gateways.ar-io.dev/) and searching for your name.

If you get an error like the following:

```shell
Usage Error: Couldn't find the node_modules state file - running an install might help (findPackageLocation)
```

Run this code and then try again.
```shell
cd $HOME/testnet-contract
rm -rf node_modules
yarn install
```

## Checking the Node

Edit the address below according to your domain and type it into your browser. If uptine increases when you refresh the page, there is no problem.
* `https://ar.domain.com/ar-io/healthcheck`

Additionally, search for yourself at [gateways](https://gateways.ar-io.dev/).

## OG Role

To get the role, we send the following information to the `#testnet-participants-to-be` channel on the [ar.io Discord](https://discord.gg/ApxXjvwECK) server.

* https://ar.domain.com/ar-io/info
* https://ar.domain.com/ar-io/healthcheck

A moderator will then ask you to send a screenshot of your name appearing in your address below. Take a screenshot and send it with your name on the site, with the address below also visible on the screen.

Then send the following information to the `#testnet` channel.

* https://ar.domain.com/ar-io/info
* Wallet Address