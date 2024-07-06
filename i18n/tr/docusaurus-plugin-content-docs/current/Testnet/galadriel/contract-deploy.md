---
title: 💾 Kontrat Oluşturma
description: Galadriel kontrat deploy rehberi.
image: ./img/Galadriel-Service-Cover.jpg
keywords: [Galadriel, AI, Layer 1, Katman 1, kurulum]
---

# Galadriel Kontrat Deploy Rehberi

## Cüzdan ve Musluk

Kontratta cüzdanımıza ait private kulanacağımız için testnet cüzdanı kullanmanızı tavsiye ederiz. Eğer testnet için bir cüzdanınız var ise [discord](https://discord.gg/xfKhQWbVdV) sunucusunda #🚰│devnet-faucet kanalından token isteyin.

### Ağ Bilgileri

| Alan | Detaylar |
| ------------ | ------------ |
| **Network name** | Galadriel Devnet |
| **New RPC URL** | https://devnet.galadriel.com |
| **Chain ID** | 696969 |
| **Currency symbol:** | GAL |
| **Block explorer URL** | https://explorer.galadriel.com |

## NodeJS ve NVM

### NodeJS Kurulumu

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### NPM Kurulumu
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use v22.2.0
apt install npm
```
## Repoyu Klonlama
```shell
git clone https://github.com/galadriel-ai/contracts
cd contracts/contracts
```

## .env Dosyasını Hazırlama
```shell
cp template.env .env
```

Dosyada aşağıdaki bölümleri kaydedip çıkın.
> `ORACLE_ADDRESS bölümüne 0x4168668812C94a3167FCd41D12014c5498D74d7e 
> `PRIVATE_KEY_GALADRIEL` ve `PRIVATE_KEY_LOCALHOST` bölümüne cüzdanınızın private keyini önünde 0x olacak şekilde yazın.

```shell
# Address of oracle deployed on Galadriel testnet. See https://docs.galadriel.com/oracle-address
ORACLE_ADDRESS="0x..."

# Private key to use for deployment on Galadriel testnet
PRIVATE_KEY_GALADRIEL="0x..."

# Private key to use for deployment on local network
PRIVATE_KEY_LOCALHOST="0x..."
```

## Kontrat için Gerekli Kütüphaneleri Yükleme
```shell
cd $HOME/contracts/contracts
npm install
```

## Kontrat Deploy Etme
```shell
npm run deployQuickstart
```

Kodun son çıktısında aşağıdaki gibi bir yazı göreceksiniz;
```shell
Compiled 33 Solidity files successfully (evm target: paris).
Quickstart contract deployed to 0xcA9b6cc9be0a52B36864fe520d2dB21d2d690cdE
```


Bu şekilde işlemleri tekrarlayarak kontrat deploy edebilrisiniz.