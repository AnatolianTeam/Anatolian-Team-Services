---
title: ⚙️ Çözümler
description: Ar Node sorunlar ve çözümler.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, sorunlar, çözümler, rehber]
sidebar_position: 6
---

# Çözümler

## TX id Hatası
Aşağıdakine benzer bir hata alırsanız. Nodejs versiyonunuzla ilgili bir sorun vardır. 
```shell
root@asdaddadsda:~/testnet-contract# yarn ts-node tools/delegate-stake.ts
/root/testnet-contract/tools/delegate-stake.ts:39
    console.log(`${walletAddress} successfully submitted request to delegate stake with TX id: ${txId?.originalTxId}`);
                                                                                                      ^

SyntaxError: Unexpected token '.'
    at wrapSafe (internal/modules/cjs/loader.js:915:16)
    at Module._compile (internal/modules/cjs/loader.js:963:27)
    at Module.m._compile (/root/testnet-contract/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Object.require.extensions.<computed> [as .ts] (/root/testnet-contract/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at phase4 (/root/testnet-contract/node_modules/ts-node/src/bin.ts:649:14)
    at bootstrap (/root/testnet-contract/node_modules/ts-node/src/bin.ts:95:10)
```

### Çözüm 1
Aşağıdaki kodları sunucunuzda çalıştırın ve tekrar deneyin.
```shell
curl -sL https://deb.nodesource.com/setup_21.x | -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### Çözüm 2
Yukarıdaki çözüm işe yaramazsa aşağıdaki kodları girip tekrar deneyin.

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc

nvm install 20.12.0 && nvm use 20.12.0
```

## Disk'te Yer Açma

### Kapladığı Alanı Kontrol Etme

```shell
ncdu
```

### Docker Konteynerleri Silme ve Yeniden Başlatma

```shell
cd $HOME/ar-io-node
docker-compose down --rmi all
git pull 
git checkout main 
docker-compose up -d
```

Aşağıdaki gibi bir hata alırsanız;

```shell
error Could not write file "/root/ar-io-node/yarn-error.log": "ENOSPC: no space left on device, write"
error An unexpected error occurred: "ENOSPC: no space left on device, mkdir '/usr/local/share/.cache/yarn/v6/npm-apollo-server-express-3.13.0-0d8d9bbba3b8b8264912d215f63fd44e74d5f42a-integrity'".
```

bu kodu çalıştırın;
```shell
/bin/sh -c yarn install && yarn build && rm -rf node_modules && yarn install --production
```

### Disk Sorunu Devam Ediyorsa

#### Data'yı Silme 
```shell
docker-compose down -v
rm -rf /root/ar-io-node/data
```

#### Docker Prune (İsteğe Bağlı)
:::warning
Buradaki kodları sisteminizde docker kullanan başka bir uygulama yoka yapın.
:::

```shell
docker system prune
```

#### .env Dosyaısnı Düzenleme

.env dosyasını açın ve `START_HEIGHT=` bölümünü `START_HEIGHT=1407900` yapın.

```shell
nano $HOME/ar-io-node/.env
```

#### Yeniden Başlatma

```shell
cd $HOME/ar-io-node
git pull 
git checkout main 
docker-compose up -d
```

#### Logları Kontrol Etme
```shell
docker-compose logs -f --tail=0
```
Ardından `CTRL C` tuşlayarak logları kapatın.

## Redis Error Çözümü
```shell
docker-compose down --rmi all
rm -rf $HOME/ar-io-node/data/redis
docker-compose up -d
```