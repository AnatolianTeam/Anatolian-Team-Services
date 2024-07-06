---
title: 💾 Eclipse Testnet
description: Eclipse testnet ile etkileşim rehberi.
image: ./img/Eclipse-Service-Cover.jpg
keywords: [Eclipse, solana, eth, layer 2, Katman 2, kurulum]
---

# Eclipse Testnet ile Etkileşim Rehberi

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install pkg-config protobuf-compiler libssl-dev llvm libclang-dev build-essential -y < "/dev/null"
```

## NodeJS Kurulumu

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

Update Node version

sudo apt-get remove nodejs
press `y``` and proceed

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
node -v


### NodeJS Kurulumu

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### NVM Kurulumu
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use v22.2.0
```

## NPM Kurulumu
```shell
apt install npm
```

## Yarn Kurulumu
```shell
npm install --global yarn
```

## Rust Kurulumu
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
```
```shell
source $HOME/.cargo/env
```

## Solana CLI Kurulması 

```shell
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"
```

## Anchor Kurulumu
```shell
cargo install --git https://github.com/project-serum/anchor anchor-cli --locked
```

## Cüzdan

### Yeni Cüzdan Oluşturma
```shell
solana-keygen new -o /path-to-wallet/my-wallet.json
```

### Var Olan Cüzdanı İçeri Aktarma
```shell
solana-keygen recover 'prompt://?key=0/0' -o /path-to-wallet/my-wallet.json
```

### Cüzdanı Kullanmak için Yapılandırmayı Güncelleme

```shell
solana config set --url https://testnet.dev2.eclipsenetwork.xyz/
```

```shell
solana config set --keypair /path-to-wallet/my-wallet.json
```

### Solana Adresini Üğrenme

```shell
solana address 
```

## Sepolia ETH Temin Etme

[PoW Faucet](https://sepolia-faucet.pk910.de/) adresinde test ETH edinin.

## Eclipse Köprü Script Kurulumu

```shell
git clone https://github.com/Eclipse-Laboratories-Inc/testnet-deposit
cd testnet-deposit
npm install
```

### 

```shell

```

### NodeJS Kurulumu

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### NVM Kurulumu
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use v22.2.0
npm install -g npm@latest
```

Tamamlanacak... Daha bitmedi, hazırlanıyor.

### 

```shell

```

### 

```shell

```