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

[PoW Faucet](https://sepolia-faucet.pk910.de/) adresinde test Sepolia ETH edinin.

## Eclipse Köprü Script Kurulumu

```shell
git clone https://github.com/Eclipse-Laboratories-Inc/testnet-deposit
cd testnet-deposit
npm install
```

### Köprü Scriptini Çalıştırma
Aşağıdaki kodda güzenlemeniz gereken yerler;
1. `Solana_Cuzdan` buraya cüzdan adresinizi,
2. `Gwei_Miktar` buraya 3000000 ya da daha yüksek bir rakam,
3. `Gwei_Fee_Miktar` buraya 100000 ya da daha yüksek bir rakam,
4. `Cuzdan_Private_Key`buraya cüzdan private keyinizi,
5. `Sepolia_RPC_Endpoint` buraya da https://rpc.sepolia.org/ yazın.

```shell
node deposit.js Solana_Cuzdan 0x7C9e161ebe55000a3220F972058Fb83273653a6e Gwei_Miktar Gwei_Fee_Miktar Cuzdan_Private_Key Sepolia_RPC_Endpoint
```

Tamamlanacak... Daha bitmedi, hazırlanıyor.

## Token Oluşturma

### Bakiyeyi Kontrol Etme
Öncelikle cüzdan bakiyenini kontrol edin.
```shell
solana balance
```

###  Token Adresi Oluşturma

```shell
spl-token create-token --enable-metadata -p TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
```
Kodun çıktısı aşağıdakine benzer olacak. Bu adresinizi kaydedin. Bir sonraki adımda kullanılacak.

```shell

```

### Token Mint Etme

```shell
spl-token create-account TOKEN_ADRESI
```

### Token Adedini Belirleme
Aşağıdaki 10000 yerine istediğiniz adeti yazabilirsiniz.
```shell
spl-token mint TOKEN_ADRESI 10000
```

### Token Kontrol Etme
Aşağıdaki kodun  çıktıısnda hesabınıza ait kaç token olduğunu göreceksiniz.
```shell
spl-token accounts
```

## Form
Son olarak [Eclipse Deployment Address](https://docs.google.com/forms/d/e/1FAIpQLSfJQCFBKHpiy2HVw9lTjCj7k0BqNKnP6G1cd0YdKhaPLWD-AA/viewform?pli=1) formunu doldurup gönderin.




