---
title: 💾 Kurulum
description: Gasp Operatör kurulum rehberi.
image: ./../../../../../../docs/Testnet/gasp/img/Gasp-Service-Cover.jpg
keywords: [Gasp, EigenLayer, Eigen, Layer, restake, Holešky, kurulum, rehber, Holesky]
---

# Gasp Holešky Operatör Kurulum 

**Başlamadan önce yapılacaklar:**
1. EigenLayer [operator kurulumunuzu](../eigenlayer/installation.md) yapınız.
2. [PoW Faucet](https://holesky-faucet.pk910.de) adresinden en az 10.1 ya da 10.05 holETH temin edin.
3. [Ank](https://testnet.ankr.com/staking/stake/ethereum/) adresinden en az 10 holETH stake edin. Ardından [EigenLayer](https://holesky.eigenlayer.xyz/restake/ankrETH)'da reStake edin ardından etmediyseniz EigenLayer operatorünüze delege edin.

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install ca-certificates curl gnupg lsb-release git htop liblz4-tool screen -y < "/dev/null"
```

## Docker Kurulumu
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Docker Compose Kurulumu
```shell
VER=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)
curl -L "https://github.com/docker/compose/releases/download/"$VER"/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## Gasp AWS Operator Kurulumu

```shell
cd $HOME
git clone https://github.com/mangata-finance/avs-operator-setup.git
cd avs-operator-setup
chmod +x run.sh
```

#### .env Dosyasının Düzenlenmesi

```shell
nano .env
```

Bu dosyada sadece aşağıdaki bölümleri düzenliyoruz.
* `ETH_RPC_URL`=https://ethereum-holesky-rpc.publicnode.com
* `ETH_WS_URL`=wss://ethereum-holesky-rpc.publicnode.com
* `ECDSA_KEY_FILE_HOST`=~/.eigenlayer/operator_keys/**ADINIZ**.ecdsa.key.json 
* `BLS_KEY_FILE_HOST`=~/.eigenlayer/operator_keys/**ADINIZ**.bls.key.json
* `ECDSA_KEY_PASSWORD=SIFRENIZ`
* `BLS_KEY_PASSWORD=SIFRENIZ`
```shell
.
.
.
# TODO: Operators need to update this to provide connection to ETH & network nodes
CHAIN_ID=17000
ETH_RPC_URL=https://ethereum-holesky-rpc.publicnode.com
ETH_WS_URL=wss://ethereum-holesky-rpc.publicnode.com

# TODO: Operators need to update this to their own keys, either use files or encoded JSON
# this is where your keys are stored on local storage
ECDSA_KEY_FILE_HOST=~/.eigenlayer/operator_keys/koltigin.ecdsa.key.json // koltigin yazan yerde kendi adınız olacak
BLS_KEY_FILE_HOST=~/.eigenlayer/operator_keys/koltigin.bls.key.json // koltigin yazan yerde kendi adınız olacak
.
.
.
# TODO: Operators need to add password to decrypt the above keys
ECDSA_KEY_PASSWORD=SIFRENIZ
BLS_KEY_PASSWORD=SIFRENIZ
```

## Scripti Çalıştırma
```shell
./run.sh opt-in
```

## Docker Compose Çalıştırma

```shell
docker compose up -d
```


## Logları Kontrol Etme

### Docker ID Öğrenme

```shell
docker ps -a
```

### Kontrol

```shell
docker logs -f --tail 100 DOCKER-ID
```

* Ardından `CTRL C` ile logları kapatın. Kapatmadan bir screen içerisinde çalıştıracak oluranız zamanla diskinizde bu loglar yer kaplayacaktır. 


## Discord'da Rol Alma

Loglar akarken aldığınız ekran görüntüsünü [Discord](https://discord.gg/hcM4DfGsRa)'da `#🤖║avs-operators` kanalına gönderip `Magnatarians` rolünü alın. Aynı kanalda şu mesajdaki botun [mesajında](https://discord.com/channels/776977650907480074/1192066266765197323/1204853636547477575) yer alan `Node Runner Role` butonuna tıklayarak da rol alın.

```shell
eigenlayer operator update operator.yaml
```

