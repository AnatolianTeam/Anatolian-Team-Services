---
title: 💰 Stake Aktif Etme
description: Ar.io testnete katılım rehberi.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
sidebar_position: 3
---

# Ar.io Stake Aktif Etme Rehberi

Bu bölümde stake etmeyi aktif etmek için yapılması gerekenler anlatılmıştır.

## update-gateway-settings.ts Dosyasnın Düzenlenmesi

Aşağıdaki kod ile dosyayı açıyoruz.
```shell
nano $HOME/testnet-contract/tools/update-gateway-settings.ts
```

Ardından aşağıdaki değişiklikleri yapıyoruz:
Değişkenlerin başında bulunan `//` 'ları kaldırıyoruz. 
1. `const allowDelegatedStaking: boolean = true;`
2. `const delegateRewardShareRatio: number = 10;`
3. `const minDelegatedStake: number = 100;`
4. `allowDelegatedStaking,`
5. `delegateRewardShareRatio,`
6. `minDelegatedStake,`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<details>

<summary>Değişecek yerleri bıradan inceleyebilirsiniz.</summary>

<Tabs>
  <TabItem value="Orijinal Hali">

    ``` 
    import { JWKInterface } from 'arweave/node/lib/wallet';

    import { IOState } from '../src/types';
    import {
      arnsContractTxId,
      arweave,
      getContractManifest,
      initialize,
      loadWallet,
      warp,
    } from './utilities';

    /* eslint-disable no-console */
    // This script will update the settings for a gateway that is already joined to the network
    // Only the gateway's wallet owner is authorized to adjust these settings
    (async () => {
      initialize();

      // the friendly label for this gateway
      // const label = 'Test Gateway';

      // the fully qualified domain name for this gateway eg. arweave.net
      // const fqdn = 'permanence-testing.org';

      // uncomment the below settings and update as needed
      // the port used for this gateway eg. 443
      // const port = 443

      // the application layer protocol used by this gateway eg http or https
      // const protocol = 'https'

      // an optional gateway properties file located at this Arweave transaction id eg.
      // const properties = 'FH1aVetOoulPGqgYukj0VE0wIhDy90WiQoV3U2PeY44'

      // an optional, short note to further describe this gateway and its status
      // const note = 'Give me feedback about this gateway at my Xwitter @testgatewayguy'

      // The observer wallet public address eg.iKryOeZQMONi2965nKz528htMMN_sBcjlhc-VncoRjA which is used to upload observation reports
      // const observerWallet = '';

      // Enable or disable delegated staking.  If true, other token holders can delegate their stake to this gateway
      // const allowDelegatedStaking: boolean = true;

      // Number between 0-100 indicating the percent of gateway and observer rewards given to delegates eg. 30 is 30% distributed to delegates
      // The default is 0
      // const delegateRewardShareRatio: number = 10;

      // The minimum stake in IO a delegate must use for this for this gateway.  Must be greater than the contracts minimum delegated stake
      // The default is 100 IO
      // const minDelegatedStake: number = 200;

      // Get the key file used for the distribution
      const wallet: JWKInterface = loadWallet();

      // wallet address
      const walletAddress = await arweave.wallets.getAddress(wallet);

      // get contract manifest
      const { evaluationOptions = {} } = await getContractManifest({
        contractTxId: arnsContractTxId,
      });

      // Read the ANT Registry Contract
      const contract = await warp
        .contract<IOState>(arnsContractTxId)
        .connect(wallet)
        .setEvaluationOptions(evaluationOptions)
        .syncState(`https://api.arns.app/v1/contract/${arnsContractTxId}`, {
          validity: true,
        });

      // Include any settings as needed below
      const writeInteraction = await contract.writeInteraction(
        {
          function: 'updateGatewaySettings',
          // label,
          // fqdn,
          // observerWallet,
          // port,
          // protocol,
          // properties,
          // allowDelegatedStaking,
          // delegateRewardShareRatio,
          // minDelegatedStake,
          // note
        },
        {
          disableBundling: true,
        },
      );

      console.log(
        `${walletAddress} successfully updated gateway settings with TX id: ${writeInteraction?.originalTxId}`,
      );
    })();
    ```

  </TabItem>
  <TabItem value="Değiştirilmiş Hali">

    ```
    import { JWKInterface } from 'arweave/node/lib/wallet';

    import { IOState } from '../src/types';
    import {
      arnsContractTxId,
      arweave,
      getContractManifest,
      initialize,
      loadWallet,
      warp,
    } from './utilities';

    /* eslint-disable no-console */
    // This script will update the settings for a gateway that is already joined to the network
    // Only the gateway's wallet owner is authorized to adjust these settings
    (async () => {
      initialize();

      // the friendly label for this gateway
      // const label = 'Test Gateway';

      // the fully qualified domain name for this gateway eg. arweave.net
      // const fqdn = 'permanence-testing.org';

      // uncomment the below settings and update as needed
      // the port used for this gateway eg. 443
      // const port = 443

      // the application layer protocol used by this gateway eg http or https
      // const protocol = 'https'

      // an optional gateway properties file located at this Arweave transaction id eg.
      // const properties = 'FH1aVetOoulPGqgYukj0VE0wIhDy90WiQoV3U2PeY44'

      // an optional, short note to further describe this gateway and its status
      // const note = 'Give me feedback about this gateway at my Xwitter @testgatewayguy'

      // The observer wallet public address eg.iKryOeZQMONi2965nKz528htMMN_sBcjlhc-VncoRjA which is used to upload observation reports
      // const observerWallet = '';

      // Enable or disable delegated staking.  If true, other token holders can delegate their stake to this gateway
      const allowDelegatedStaking: boolean = true;

      // Number between 0-100 indicating the percent of gateway and observer rewards given to delegates eg. 30 is 30% distributed to delegates
      // The default is 0
      const delegateRewardShareRatio: number = 10;

      // The minimum stake in IO a delegate must use for this for this gateway.  Must be greater than the contracts minimum delegated stake
      // The default is 100 IO
      const minDelegatedStake: number = 100;

      // Get the key file used for the distribution
      const wallet: JWKInterface = loadWallet();

      // wallet address
      const walletAddress = await arweave.wallets.getAddress(wallet);

      // get contract manifest
      const { evaluationOptions = {} } = await getContractManifest({
        contractTxId: arnsContractTxId,
      });

      // Read the ANT Registry Contract
      const contract = await warp
        .contract<IOState>(arnsContractTxId)
        .connect(wallet)
        .setEvaluationOptions(evaluationOptions)
        .syncState(`https://api.arns.app/v1/contract/${arnsContractTxId}`, {
          validity: true,
        });

      // Include any settings as needed below
      const writeInteraction = await contract.writeInteraction(
        {
          function: 'updateGatewaySettings',
          // label,
          // fqdn,
          // observerWallet,
          // port,
          // protocol,
          // properties,
          allowDelegatedStaking,
          delegateRewardShareRatio,
          minDelegatedStake,
          // note
        },
        {
          disableBundling: true,
        },
      );

      console.log(
        `${walletAddress} successfully updated gateway settings with TX id: ${writeInteraction?.originalTxId}`,
      );
    })();
    ```

  </TabItem>
</Tabs>

</details>

Değişiklikleri tamamladıysanız aşağıdaki komutu çalıştırıyoruz:
```shell
cd $HOME/testnet-contract
yarn ts-node tools/update-gateway-settings.ts
```

## update-gateway-settings.ts Dosyası Hakkında

Bu dosyayı yapılacak diğer değişiklikler için de kullanıyoruz. 

Örneğin node açıklamanızı değiştirmek isterseniz aşağıdaki kodun önündeki `//`'ları kaldırıp açıklama bölümünü yazıp diğer değişkenlerin önüne `//` yazıp dosyayı çalıştırabilirsiniz;

`// const note = 'Give me feedback about this gateway at my Xwitter @testgatewayguy'`

  

