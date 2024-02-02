---
title: 💾 Kurulum
description: Node installation guide.
image: ./img/Q-Service-Cover.jpg
keywords: [Q, blockchain, installation, snapshot, statesync, update]
---

# Kurulum

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install ca-certificates curl gnupg lsb-release git htop tmux
```

## Docker Kurulumu
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Q Kurulumu
```
cd $HOME
git clone https://gitlab.com/q-dev/mainnet-public-tools
```

## keystore Klasörü ve pwd.txt Dosyasının Oluşturulması
```
cd $HOME/mainnet-public-tools/validator/
mkdir keystore
```

Cüzdanınızda kullanacağınız şifreyi aşağıdaki kodda `YOUR_PASS` yazan yere yazın.
```
echo YOUR_PASS > keystore/pwd.txt
```

## Cüzdan

### Yeni Cüzdan Oluşturma
```shell 
docker run --entrypoint="" --rm -v $PWD:/data -it qblockchain/q-client:1.3.6 geth account new --datadir=/data --password=/data/keystore/pwd.txt
```
Çıktı aşağıdaki gibi ise her şey yolunda demektir.
```
Your new key was generated

Public address of the key:   0xb3FF24F818b0ff6Cc50de951bcB8f86b52287dac
Path of the secret key file: /data/keystore/UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!
```
🔴 Daha sonra çıktıda yazılı olan (`/data/keystore`) klasörünüzdeki dosyaları güvenli bir yerde saklamak için yedekleyin.

### Var Olan Cüzdanı İçeri Aktarma
Zaten bir cüzdanınız varsa, json dosyasını (UTC ile başlayan) aşağıda gösterildiği gibi keystore klasörüne kopyalayın. (`/root/mainnet-public-tools/validator/keystore/`).
```
validator
|   ...
|   ...
└ keystore
  |   UTC--2021-01-18T11-36-28.705754426Z--b3ff24f818b0ff6cc50de951bcb8f86b52287dac
  |   pwd.txt
```

## .env Dosyasını Düzenleme

```shell
cp .env.example .env
nano .env
```
Dosyayı açtığınızda aşağıdaki koddaki gibi `ADDRESS` yazan yere `0x` olmadan cüzdanınızı yazın,
daha sonra `IP` kısmına kendi IP adresinizin yazdığınızdan emin olun ve kaydedip çıkın. (CTRL+XY)
```
# docker image for q client
QCLIENT_IMAGE=qblockchain/q-client:v1.3.6

# your q address here (without leading 0x)
ADDRESS=b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc

# your public IP address here
IP=193.19.228.94

# the port you want to use for p2p communication (default is 30303)
EXT_PORT=30303

# extra bootnode you want to use
BOOTNODE1_ADDR=enode://22adab037308f02abbb0fd7e831c75afa367b36615b2a0358a5c4673912cf384de6c8e688371822488622ebee383aeea5d41087160cb70484a9f1671876871b1@bootnode.q.org:30301
BOOTNODE2_ADDR=enode://3021f73a6f14f8594384923f7f0228f81a806d1708e5c046db12661bdce6b0f10625fae12771aa36f7a4d1f110d4e5a589bf3d34ec4b1d2c6d10e382d90f6983@extrabootnode.q.org:30314
BOOTNODE3_ADDR=enode://34b9e4e18bc37e4437bc0a9b10ac8ae5d0aab2b2e827310e90ec1012e818d07962b162d98e083ec5487e0cf87d1ffefb46332ec05209ec82fb675ae7afe3e241@extrabootnode.q.org:30315
```

## docker-compose.yaml Dosyasını Düzenleme
```
nano docker-compose.yaml
```
Dosyanın `--ethstats` bölümüne kendi moniker adınızı (`YOUR_MONIKER`) ve ana ağ erişim anahtarınızı (`MAINNET_ACCESS_KEY`) aşağıdakine benzer şekilde yazın ve kaydedin.
```
.
.
.
"--ethstats=YOUR_MONIKER:MAINNET_ACCESS_KEY@stats.q.org",
.
.
.
```

## config.json Dosyasını Düzenleme
```
nano config.json
```
Dosyada adres kısmına cüzdan adresinizi başında 0x olmadan yazın.
Daha sonra şifre kısmına cüzdanınızın “şifresini” yazıp (“supersecurepassword” yerine) dosyayı kaydedin.
```
    {
      "address": "b3FF24F818b0ff6Cc50de951bcB8f86b52287DAc",
      "password": "supersecurepassword",
      "keystoreDirectory": "/data",
      "rpc": "https://rpc.q.org"
    }
```

## Node'u Başlatma
```shell
docker-compose up -d
```

## Logları Kontrol Etme
```
docker-compose logs -f --tail "100"
```

## Node'u Hızla Senkronize Etme
 ```shell 
docker-compose down && cd
rm -rf /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata
mkdir /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata
cd /var/lib/docker/volumes/validator_validator-node-data/_data/geth/chaindata
```

[Stake Craft](https://snapshots.stakecraft.com/) anlık görüntü servisine gidin ve Q Blockchain'in URL'sini kopyalayın ve aşağıda `SNAPHOT_URL` yazan yere yazın.
```
wget -O - SNAPHOT_URL | tar xf -
```

Ardından node'u yeniden başlatın.
```
cd $HOME/mainnet-public-tools/validator/
docker-compose up -d
```

​
