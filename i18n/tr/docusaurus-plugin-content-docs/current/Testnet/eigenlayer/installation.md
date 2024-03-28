---
title: 💾 Kurulum
description: Holešky Operatör kurulum rehberi.
image: ./../../../../../../docs/Testnet/eigenlayer/img/EigenLayer-Service-Cover.jpg
keywords: [Eigen Layer, Eigen, Layer, restake, Holešky, kurulum, rehber, Holesky]
---

# Eigen Layer Holešky Operatör Kurulum 

## Sitemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm gcc -y < "/dev/null"

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

## CLI'i Kaynaktan Yükleme

```shell
cd $HOME
git clone https://github.com/Layr-Labs/eigenlayer-cli.git
cd eigenlayer-cli
mkdir -p build
go build -o build/eigenlayer cmd/eigenlayer/main.go
cd $HOME
cp eigenlayer-cli/build/eigenlayer /usr/local/bin/
```

## Key Oluşturma ve Listeleme

### Yeni Key Oluşturma
Burada iki anahtar oluşturuyoruz. Daha önce yüklediyseniz içe aktarma adımına geçin.

Değiştirmeniz gereken alanlar aşağıda yazılmıştır:
* `KEY_NAME`: anahtar adınız. Anahtarınıza bir ad verin.

:::warning
Aşağıdaki kodları tek tek girin, şifrenizi belirleyin ve çıktıları güvenli bir yerde saklayın.
:::

#### ECDSA Key Oluşturma
```shell
eigenlayer operator keys create --key-type ecdsa KEY_NAME
```
#### BLS Key Oluşturma
```shell
eigenlayer operator keys create --key-type bls KEY_NAME
```

### Keyleri İçeri Aktarma (Import)
Değiştirmeniz gereken alanlar aşağıda yazılmıştır:
* `KEY_NAME`: anahtar adınız. Anahtarınıza bir ad verin.
* `PRIV_KEY`: anahtarınızın özel anahtarı
```shell
eigenlayer operator keys import --key-type ecdsa KEY_NAME PRIV_KEY
eigenlayer operator keys import --key-type bls KEY_NAME PRIV_KEY
```

### Listing Keys
Bu, EigenLayer CLI aracıyla oluşturduğunuz anahtarların bir listesini almak için kullanabileceğiniz komuttur.

```shell
eigenlayer operator keys list
```
:::info
Ethereum adresinizi kaydedin veya cüzdanınıza aktarın. Bu cüzdana testnet ETH talebinde bulunacağız.
:::

### Key'leri Dışa Aktarma
Mevcut anahtarların özel anahtarlarını görmek istiyorsanız aşağıdaki komutu kullanabilirsiniz. Bu yalnızca anahtarlarınız varsayılan konumdaysa işe yarar (~/.eigenlayer/operator_keys)

#### Export ECDSA Key
```shell
eigenlayer operator keys export --key-type ecdsa KEY_NAME
```

#### Export BLS Key
```shell
eigenlayer operator keys export --key-type bls KEY_NAME
```

## Holešky ETH Edinme

[PoW Faucet](https://holesky-faucet.pk910.de) adresinden biraz test ETH temin edin.

## Operatör Kaydı

### Config Dosyalarını Oluşturma
```shell
eigenlayer operator config create
```

* In the `Would you like to populate config files` question, first press `y` and then press `enter`.
* In the `Enter your operator address` and `Enter your earning address` questions, type `your Ethereum address` given when creating the ECDSA key.
* In the `Enter your ETH rpc url:` question, type: `https://ethereum-holesky-rpc.publicnode.com`
* `In the Enter your ecdsa key path` question, type the path specified in the output when you entered the `eigenlayer operator keys list` code above.

* `Would you like to populate config files` sorusunda önce `y`ye, ardından `enter`'a basın.
* `Enter your operator address` ve `Enter your earning address`  sorularına ECDSA anahtarını oluştururken verilen `Ethereum adresinizi` yazın.
* `Enter your ETH rpc url:` sorusuna şunu yazın: `https://ethereum-holesky-rpc.publicnode.com`
* `In the Enter your ecdsa key path` sorusuna, yukarıdaki `eigenlayer operator keys list` kodunu girdiğinizde çıktıda belirtilen yolu yazın.

#### metadata.json Dosyası Oluşturma

Aşağıdaki kodlarla bir metadata.json dosyası oluşturun ve bu dosyayı github'a veya siteniz varsa herkesin erişebileceği bir yere yükleyin. Bunun için github hesabınızı kullanabilirsiniz.

```shell
{
  "name": "OPERATOR_ADINIZ",
  "website": "WEBSITE_ADRESINIZ",
  "description": "TANIM_SLOGAN_VB",
  "logo": "LOGO_LINKINIZ",
  "twitter": "WITTER_ADRESINIZ"
}
```

#### operator.yaml Dosyasının Düzenlenmesi

```shell
nano operator.yaml
```

Bu dosyada sadece aşağıdaki bölümü düzenliyoruz.

Yukarıda oluşturduğumuz `metadata.json dosyasına olan bağlantıyı` ekliyoruz.

```shell
.
.
.
metadata_url: "https://your-address.com/metadata.json"
.
.
.
```

### Kayıt

:::warning
SONRAKİ ADIMA GEÇMEDEN ÖNCE CÜZDANINIZDA ETH OLDUĞUNDAN EMİN OLUN.
:::

```shell
eigenlayer operator register operator.yaml
```

Bu kodu girdikten sonra biraz bekliyoruz. İşlem başarılı olduğunda bize TX Hash id verecektir. Bunu [explorer](https://holesky.etherscan.io)'da kontrol edebilirsiniz.

Bir süre sonra operatörünüz [bu adreste](https://holesky.eigenlayer.xyz/operator) adresinde görünmeye başlayacaktır.

## Kayıt Durumunu Kontrol Etme

```shell
eigenlayer operator status operator.yaml
```

## Metadata Güncellemeleri
Operatör bilgilerinizde değişiklik yapmak için metadata.json dosyanızı güncellerseniz. Bu güncellemeyi ağ üzerinde aşağıdaki kodla gerçekleştirin.

```shell
eigenlayer operator update operator.yaml
```

