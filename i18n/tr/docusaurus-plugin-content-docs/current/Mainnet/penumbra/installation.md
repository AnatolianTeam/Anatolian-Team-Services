---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, kurulum, snapshot, statesync, update]
---

# Kurulum
:::warning
pcli, pd ve pclientd sürümlerini [buradan](https://github.com/penumbra-zone/penumbra/releases) kontrol edebilirsiniz.
:::
## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp wget jq llvm tmux htop screen unzip gcc lz4 -y < "/dev/null"
```

## Go Kurulumu
```shell
ver="1.21.6"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
rm -rf /usr/local/go
tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm -rf "go$ver.linux-amd64.tar.gz"
echo 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile
echo 'export GOPATH=$HOME/go' >> $HOME/.bash_profile
echo 'export GO111MODULE=on' >> $HOME/.bash_profile
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

## Penumbra Command Line Interface (CLI) Kurulumu

Gereklilik: Ubuntu versiyon 22.04

:::note
Önemli Not: Bu kılavuz, komut satırını rahatça kullandığınızı varsayar.
:::

```
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.79.0/pcli-installer.sh | sh

```
```
source $HOME/.cargo/env
```

:::warning
Lütfen Komut Satırı Arayüzü (CLI) kurulumunun başarıyla tamamlandığını doğrulayın.
:::

```
pcli --version
```

## Penumbra Cüzdan 

### Yeni Cüzdan Oluşturma
CLI'yi kullanarak cüzdan oluşturma işlemini başlatma
```
pcli init soft-kms generate
```

:::warning
Süreç boyunca ilerledikçe özel bir anahtar (Private Seed) oluşturulacaktır. Bu anahtarı özenle korumak çok önemlidir çünkü talihsiz bir durumda cüzdanınıza erişiminizi kaybetmeniz durumunda bir cankurtaran halatı görevi görür.
:::

### Var Olan Cüzdanı İçe Aktarma
Daha önce oluşturduğunuz bir cüzdanı içe aktarmanız gerekirse:
```
pcli init soft-kms import-phrase
```

### Cüzdan Adresi
Cüzdan adresinizi bulmak için aşağıdaki komutu kullanın:
```
pcli view address
```

### Cüzdan Bakiyesi
Cüzdan bakiyenizi kontrol edin:
```
pcli view sync
pcli view balance
```

## Penumbra ve CometBFT Kurulumu

