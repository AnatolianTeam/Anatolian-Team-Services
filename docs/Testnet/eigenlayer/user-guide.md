---
title: 👤 User Guide
description: EigenLayer Holešky User Guide.
image: ./img/EigenLayer-Service-Cover.jpg
keywords: [Eigen Layer, Eigen, Layer, restake, user, guide, Holešky, Holesky]
---

# Eigen Layer Holešky User Guide

## Add the Holešky Testnet to Wallet

* Network Adı: Holešky  
* RPC URL: https://ethereum-holesky-rpc.publicnode.com
* Network Chain ID: 17000
* Currency symbol: holETH
* Block explorer URL: https://holesky.etherscan.io/
* Block explorer URL (Alternatif): https://holesky.beaconcha.in

* Add Holešky to your Web3 wallet (example instructions (here)[https://www.coingecko.com/learn/holesky-testnet-eth#add-the-holesky-testnet-to-metamask]).

## Obtaining Holešky ETH

Obtain test ETH using (PoW Faucet)[https://holesky-faucet.pk910.de/].

## Swap, Stake and Mint Transactions

### Swap holETH for wETH (Wrapped ETH)​
1. Send holETH to address `0x94373a4919B3240D86eA41593D5eBa789FEF3848`.
2. Import the WETH token address `0x94373a4919B3240D86eA41593D5eBa789FEF3848` to your web3 wallet to view your token balance.

### Swap holETH for stETH (Lido)​
1. Visit: https://stake-holesky.testnet.fi/
2. Connect your web3 wallet, choose the amount and click `Stake`.
3. Import the (Lido and stETH token (proxy))[https://docs.lido.fi/deployed-contracts/holesky/] address for Holesky stETH token to your web3 wallet to view your token balance.
* Note: Lido on Holesky staking is rate-limited to 1500 holETH per rolling 24hr window.

### Swap holETH for ETHx (Stader)​
1. Visit the `Stader Holesky proxy contract’s Write as Proxy contract` in Etherscan here: `0x7F09ceb3874F5E35Cd2135F56fd4329b88c5d119`.
2. Click Connect to Web3 to connect your web3 wallet.
3. Click either of the `1.deposit()` or `2.deposit()` functions to expand their section:
4. `payableAmount:` Enter the `ETH amount` you wish to deposit.
5. `_receiver:` the recipient of the ETHx. Most likely this will be `your wallet address`.
6. `_referralId (string):` use the `empty string` (“”), if prompted.
7. Click `Write` to initiate the transaction. `Approve` the transaction in your web3 wallet.
8. Import the `Holesky ETHx token` address (`0xB4F5fc289a778B80392b86fa70A7111E5bE0F859`) to your web3 wallet to view your token balance.

### Stake holETH for ankrETH (Ankr)​
1. Visit (testnet.ankr.com/staking/stake/ethereum)[https://testnet.ankr.com/staking/stake/ethereum/].
2. Follow the instructions on screen to stake (convert) your desired amount of Holesky ETH for Holesky ankrETH.
3. Click `Add ankrETH to wallet` to add the `ankrETH token` to your web3 wallet and view your available balance.

### Mint osETH (Stakewise)
1. Visit the (Stakewise Holesky Vault Marketplace)[https://app.stakewise.io/vaults?networkId=holesky].
2. Select a vault to `mint osETH`.
3. Input the amount you wish to stake and click `Stake` and verify the transaction in your Web3 wallet.
4. Click `Mint` to convert `your staked holETH` to `osETH` and verify the transaction in your Web3 wallet.
5. Click `Add osETH to your Wallet`
6. Or import the `osETH address (`0xF603c5A3F774F05d4D848A9bB139809790890864`) for `Holesky stETH token` to your web3 wallet to view your token balance.

### Swap holETH for LsETH (Liquid Staked ETH from Liquid Collective)​​
1. Visit the Liquid Staked ETH LsETH proxy contract’s Write as Proxy contract in Etherscan here: (0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09)[https://holesky.etherscan.io/address/0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09#writeProxyContract].
2. Click `Connect to Web3` to connect your web3 wallet.
3. Click on the `5.deposit()` function to expand its section:
4. `payableAmount:` Enter the ETH amount you wish to deposit.
5. Click `Write` to initiate the transaction. `Approve` the transaction in your web3 wallet.
6. Import the `Holesky ETHx token` address (`0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09`) to your web3 wallet to view your token balance.

### Mint and Stake to Swap holETH for sfrxETH
1. Manually switch your wallet to the Holesky network. The Frax Finance app does not allow the user to choose Holesky directly.
2. Open the Frax Finance Mint app: (app.frax.finance/frxeth/mint)[https://app.frax.finance/frxeth/mint] .
3. Enter the amount you wish to mint and click `Mint & Stake`.
4. Import the `Holesky sfrxETH` token address (`0xa63f56985F9C7F3bc9fFc5685535649e0C1a55f3`) to your web3 wallet to view your token balance.

### Swap holETH for mETH (Mantle ETH)​
1. Visit the MantleETH proxy contract’s Write as Proxy contract in Etherscan here: (0xbe16244EAe9837219147384c8A7560BA14946262)[https://holesky.etherscan.io/address/0xbe16244EAe9837219147384c8A7560BA14946262#writeProxyContract].
2. Click Connect to Web3 to connect your web3 wallet.
3. Click on the `19.stake()` function to expand its section:
4. `payableAmount:` Enter the ETH amount you wish to deposit.
5. `minMETHAmount:` set to 0.
6. Click `Write` to initiate the transaction. `Approve` the transaction in your web3 wallet.
7. Import the `Holesky mETH token` address (`0xe3C063B1BEe9de02eb28352b55D49D85514C67FF`) to your web3 wallet to view your token balance.

## ReStake

Visit (holesky.eigenlayer.xyz)[https://holesky.eigenlayer.xyz/restake] and deposit your tokens.

## Delegate 

Go to (Anatolian Team Operator)[https://holesky.eigenlayer.xyz/operator/0xb32d1d947b19983d49025856297df3337ce04bad] and delegate your tokens 