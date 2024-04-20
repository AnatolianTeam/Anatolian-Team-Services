---
title: 🎊 Ceromony
description: RiscZero Ceremony installation guide.
image: ./img/RiscZero-Service-Cover.jpg
keywords: [RiscZero.io, RiscZero, Permaweb, installation]
sidebar_position: 1
---

# Risc Zero Ceromony Installation Guide 

## Requirements 

1. A strong internet connection. Your bandwidth must be at least 25 mbps.
2. Your GitHub account must be at least 1 month old, have at least 1 follower and follow at least 5 people.


## NVM Installation
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
source ~/.bashrc
nvm install 16.20 && nvm use 16.20
```

## Creating Folder
```shell
mkdir ~/p0tion-tmp
cd ~/p0tion-tmp
```

## Installing phase2cli

```shell
npm i @p0tion/phase2cli
```

## Authentication with GitHub

```shell
npx phase2cli auth
```

## Contribute

```shell
npx phase2cli contribute
```

## Cleaning

```shell
npx phase2cli clean
npx phase2cli logout
```

## Logging Out
You can always log out by running the phase2cli logout command
```shell
phase2cli logout 
```
