---
title: 🎊 Seromoni
description: RiscZero Seromoni katılım rehberi.
image: ./img/RiscZero-Service-Cover.jpg
keywords: [RiscZero, Risc, Zero, universal, knowledge, seromoni, kurulum, rehber]
sidebar_position: 1
---

# Risc Zero Seromoniye Katılım Rehberi

## Gereklilikler 

1. Güçlü bir internet bağlantısı. Bant geniliğinizin en az 25 mbps olması.
2. GitHu hesabınız en az 1 aylık ve en az 1 takipçinizin olması ve en az 5 kişiyi akip ediyor olması gerekiyor.


## NVM Kurulumu
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
source ~/.bashrc
nvm install 16.20 && nvm use 16.20
```

## Sitemi Güncelleme 
```shell
mkdir ~/p0tion-tmp
cd ~/p0tion-tmp
```

## phase2cli Kurulumu

```shell
npm i @p0tion/phase2cli
```

## GitHub ile Kimlik Doğrulama

```shell
npx phase2cli auth
```

## Oturumu Kapatma
Aşağıdaki komutun çalıştırarak her zaman oturumu kapatabilirsiniz
```shell
phase2cli logout 
```
