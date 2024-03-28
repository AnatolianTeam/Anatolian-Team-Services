---
title: 👤 Kullanıcı Rehberi
description: EigenLayer Holešky kullanıcı rehberi.
image: ./../../../../../../docs/Testnet/eigenlayer/img/EigenLayer-Service-Cover.jpg
keywords: [EigenLayer, restake, Holesky, Holešky, kullanıcı rehberi, rehber]
---

# EigenLayer Holešky Holešky Kullanıcı Rehberi

## Holešky Ağını Cüzdanınıza Ekleme

* Network Adı: Holešky  
* RPC URL: https://ethereum-holesky-rpc.publicnode.com
* Network Chain ID: 17000
* Currency symbol: holETH
* Block explorer URL: https://holesky.etherscan.io/
* Block explorer URL (Alternatif): https://holesky.beaconcha.in

* Holešky ağını Web3 cüzdanınıza ekleyin (örnek talimatlar (burada)[https://www.coingecko.com/learn/holesky-testnet-eth#add-the-holesky-testnet-to-metamask]).


## Holešky ETH Temin Etme

(PoW Faucet)[https://holesky-faucet.pk910.de/] adresinde test ETH edinin.

## Swap, Stake ve Mint İşlemleri

### wETH (Wrapped ETH)​ Edinin
1. holETH'yi `0x94373a4919B3240D86eA41593D5eBa789FEF3848` adresine gönderin.
2. Token bakiyenizi görüntülemek için `wETH` token adresini `0x94373a4919B3240D86eA41593D5eBa789FEF3848` web3 cüzdanınıza aktarın.


### stETH (Lido) Edinin
1. https://stake-holesky.testnet.fi/ adresine gidin.
2. Web3 cüzdanınızı bağlayın, miktarı seçin ve `Stake`'e tıklayın.
3. Token bakiyenizi görüntülemek için `Holesky stETH` tokeninin (Lido ve stETH token (proxy))[https://docs.lido.fi/deployed-contracts/holesky/] adresini web3 cüzdanınıza aktarın.
* Not: Holesky'deki Lido stake etme oranı, 24 saatlik aralık başına 1500 holETH ile sınırlıdır.

### ETHx (Stader) Edinin
1. Etherscan'da `Stader Holesky proxy sözleşmesinin Proxy Olarak Yazma` sözleşmesini buradan ziyaret edin:`0x7F09ceb3874F5E35Cd2135F56fd4329b88c5d119`.
2. Web3 cüzdanınızı bağlamak için `Connect to Web3`'a tıklayın.
3. Sekmeleri genişletmek için `1.deposit()` veya `2.deposit()` fonksiyonlarından birine tıklayın:
4. `payableAmount:` Yatırmak istediğiniz `ETH tutarını' girin.
5. `_receiver:` ETHx'in alıcısı. Buraya `cüzdan adresiniz`i yazın.
6. `_referralId (string):` Burayı `boş bırakın` (“”) kullanın.
7. İşlemi başlatmak için `Write`'a tıklayın. Web3 cüzdanınızdaki işlemi `onaylayın`.
8. Token bakiyenizi görüntülemek için `Holesky ETHx token` adresini (`0xB4F5fc289a778B80392b86fa70A7111E5bE0F859`) web3 cüzdanınıza aktarın.

### AnkrETH (Ankr) Edinin
1. (testnet.ankr.com/staking/stake/ethereum)[https://testnet.ankr.com/staking/stake/ethereum/] adresine gidin.
2. Holesky ankrETH'ye istediğiniz miktarda Holesky ETH'yi stake etmek (dönüştürmek) için ekrandaki talimatları izleyin.
3. `AnkrETH tokeni` web3 cüzdanınıza eklemek ve mevcut bakiyenizi görüntülemek için `Add ankrETH to wallet`'ı tıklayın.

### osETH (Stakewise) Mint Etme
1. (Stakewise Holesky Vault Pazaryeri)[https://app.stakewise.io/vaults?networkId=holesky] adresine gidin.
2. `osETH`yi mint etme için bir vault seçin.
3. Stake etmek istediğiniz tutarı girin ve `Stake`e tıklayın ve Web3 cüzdanınızda işlemi doğrulayın.
4. `Stake edilmiş holETH`'nizi `osETH`'ye dönüştürmek için `Mint`'e tıklayın ve Web3 cüzdanınızdaki işlemi doğrulayın.
5. `Add osETH to your Wallet`'ı tıklayın ya da token bakiyenizi görüntülemek için `Holesky stETH token`'in `osETH adresini` (`0xF603c5A3F774F05d4D848A9bB139809790890864`) web3 cüzdanınıza aktarın.

### HoleETH'yi LsETH ile değiştirin (Liquid Collective'den Liquid Stacked ETH)​
1. Etherscan'da `Liquid Staked ETH LsETH proxy sözleşmesinin Proxy Olarak Yaz` sözleşmesini buradan ziyaret edin: (0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09)[https://holesky.etherscan.io/address/0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09#writeProxyContract].
2. Web3 cüzdanınızı bağlamak için `Connect to Web3`'ü tıklayın.
3. Sekmeyi genişletmek için `5.deposit()` fonksiyonuna tıklayın:
4. `payableAmount:` Yatırmak istediğiniz ETH tutarını girin.
5. İşlemi başlatmak için `Write`a tıklayın. Web3 cüzdanınızdaki işlemi `onaylayın`.
6. Token bakiyenizi görüntülemek için `Holesky ETHx token` adresini (`0x1d8b30cC38Dba8aBce1ac29Ea27d9cFd05379A09`) web3 cüzdanınıza aktarın.

### sfrxETH Mint ve Swap İşlemi
1. Cüzdanınızı `manuel olarak` Holesky ağına geçirin. Frax Finance uygulaması kullanıcının doğrudan Holesky'yi seçmesine izin vermiyor.
2. Frax Finance Mint uygulamasını açın: (app.frax.finance/frxeth/mint)[https://app.frax.finance/frxeth/mint] .
3. Mint etmek istediğiniz miktarı girin ve `Mint & Stake` seçeneğine tıklayın.
4. Token bakiyenizi görüntülemek için `Holesky sfrxETH` token adresini (`0xa63f56985F9C7F3bc9fFc5685535649e0C1a55f3`) web3 cüzdanınıza aktarın.

### mETH (Mantle ETH) Edinme
1. Etherscan'da `MantleETH proxy sözleşmesinin Proxy Olarak Yaz` sözleşmesini ziyaret edin: (0xbe16244EAe9837219147384c8A7560BA14946262)[https://holesky.etherscan.io/address/0xbe16244EAe9837219147384c8A7560BA14946262#writeProxyContract]
2. Web3 cüzdanınızı bağlamak için `Connect to Web3`'e tıklayın.
3. Bölümünü genişletmek için `19.stake()` fonksiyonuna tıklayın:
4. `payableAmount:` Yatırmak istediğiniz ETH tutarını girin.
5. `minMETHAmount:` `0` olarak ayarlandı.
6. İşlemi başlatmak için `Write`a tıklayın. Web3 cüzdanınızdaki işlemi `onaylayın`.
7. Token bakiyenizi görüntülemek için `Holesky mETH token` adresini ("0xe3C063B1BEe9de02eb28352b55D49D85514C67FF") web3 cüzdanınıza aktarın.


## ReStake

(holesky.eigenlayer.xyz)[https://holesky.eigenlayer.xyz/restake] adresini ziyaret edin ve tokenlerinizi deposit edin.

## Delegate 

(Anatolian Team Operator)[https://holesky.eigenlayer.xyz/operator/0xb32d1d947b19983d49025856297df3337ce04bad] adresine gidin ve tokenlerinizi bize delege edin. 
