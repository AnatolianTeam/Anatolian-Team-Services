---
title: 📝 Kontrat Deploy
description: Fuel testnet kontrat oluşturma rehberi.
image: ./img/Fuel-Service-Cover.jpg
keywords: [Fuel, testnet, Ethereum, Rollup, rehber]
---

# Fuel Testnet Kontrat Oluşturma Rehberi

:::warning
Burada yapılan işlemler herhangi bir ödülü garanti etmez. Bu işlemleri kendinizi geliştimek için yapacağınz işlemler olarak düşünün.
:::

Burada [GitHup Codespaces](https://github.com/codespaces) ile kontrat deploy edebileceğiniz şekilde anlatım yapılmıştır. 

## Video
Aşağıdaki ideoyu izleyerek işlemlerinizi yapabilirsiniz.
[![Watch the video](./img/FuelVideoGuide.jpg)](https://youtu.be/Q_bCt0ervw4)

## Sistemi Güncelleme ve Gerekli Kütüphanelerin Kurulması
```shell
apt update
apt upgrade -y
apt-get install curl git screen -y
```

## Rust Kurulumu
```shell
curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh
```
```shell
source $HOME/.cargo/env
```
Versionu kontrol edebilirsiniz.
```shell
rustc --version
```

## Stable Sürüm Kurulumu, Güncelleme ve Varsayılan Ayarlama 
```shell
rustup install stable
rustup update stable
rustup default stable
```

## Fuel Kurulumu
```shell
curl https://install.fuel.network | sh
```

```shell
source /root/.bashrc
```

### Fuel Toolchain Yükleme ve Güncelleme
```shell
fuelup toolchain install latest
fuelup self update
fuelup update && fuelup default latest
```

## Kontrat Oluşturma

```shell
mkdir fuel-project && cd fuel-project
forc new counter-contract
```
### main.sw Dosyasını Düzenleme 
```shell
nano counter-contract/src/main.sw
```
Dosyayı açın ve içerisindeki herşeyi silin ardından aşağıdaki kodları yapıştırp CTRL, X, Y ve Enter ile kaydedip çıkın.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="main.sw dosyası için kodlar">

```
contract;

storage {
		counter: u64 = 0,
}

abi Counter {
		#[storage(read, write)]
		fn increment();

		#[storage(read)]
		fn count() -> u64;
}

impl Counter for Contract {
		#[storage(read)]
		fn count() -> u64 {
				storage.counter.read()
		}

#[storage(read, write)]
fn increment() {
    let incremented = storage.counter.read() + 1;
    storage.counter.write(incremented);
		}
}
EOF
```

</TabItem>
</Tabs>

### Kontratı Hazırlama
```shell
cd counter-contract
forc build
```

## Cüzdan

### Mevcut Cüzdanı İçe Aktarma
```shell
forc wallet import 
```
yukarıdaki kod hata verirse aşağıdaki kodu kullanın.
```shell
forc-wallet import 
```
Yukarıdak

### Yeni Cüzdan Oluştur
```shell
forc wallet account new
```
yukarıdaki kod hata verirse aşağıdaki kodu kullanın.
```shell
forc-wallet new
```
:::warning
Cüzdan kelimelerinizi güvenli bir yerda saklamayı unutmayın.
:::

## Kontratı Oluşturma
Aşağıdaki kodu girdikten sonra önce `0` yazıp enterlayın ve ardından `y` yazıp enterlayın.
```shell
forc deploy --testnet 
```

Çıktıda verilen TX Hash'ı [Fuel Explorer](https://app.fuel.network/)'dan kontrol edebilirsiniz.