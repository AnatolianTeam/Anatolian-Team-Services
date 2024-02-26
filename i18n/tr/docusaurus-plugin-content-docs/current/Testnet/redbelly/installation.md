---
title: 💾 Kurulum
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/redbelly/img/Redbelly-Service-Cover.jpg
keywords: [redbelly, network, kurulum, snapshot, statesync, güncelleme]
---

# Kurulum

Testnete katılım şu an kapalı. Eğer ekipten katılımınıza ilişki bir e-posta aldıysanız ve size bir node id verildiyse katılabilirsiniz.

**Kullanılan Portlar:** `8545`, `8546`, `1111`, and `1888`.

## İlk Yapılacaklar

### Domain ve DNS Ayarları
Bir domain satın alın. Ardından panelinizden aldığınız domainin ayarlarından `DNS yönetimine` girin. Bir `A kaydı` oluşturun. `Kayıt` ya da `domain adı` bölümüne bir alt alan adı yazın. `IP bölümüne` ise sunucunuzun `IP` adresini yazın. 

After these settings, you will have an address such as `subdomain.domain.xyz`. 

You can control the propagation of your DNS settings [here](https://dnschecker.org/). You can check the propagatio status by searching `subdomain.domain.xyz` on the site.

Bu ayarlar sonrasında `subdomain.domain.xyz` gibi bir adrese sahip olacaksınız.

DNS ayarlarınızın yayılmasını [buradan](https://dnschecker.org/) kontrol edebilirsiniz. Sitede subdomain.domain.xyz şeklinde arama yaparak yayılma durumunu kontrol edebilirsiniz.

### EVM Cüzdanların Oluşturulması
İki cüzdan oluşturun:
* Public Cüzdan: Ödüllerin geleceği cüzdan adresi.
* Signer Cüzdan: İmzalama işlemlerini yapacak cüzdan.

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install screen snapd net-tools cron curl unzip -y < "/dev/null"
```

## SSL Sertifika İşlemleri
Bu adımda hazırladığımız domain için SSL sertifika almak için gereken işlemleri yapıyoruz.

### Certbot Kurulması

```shell
apt install python3-certbot-nginx
```

### Let's Encrypt SSL Oluşturma
Aşağıdaki kodu e-posta ve domain düzenlemesi yaparak çalıştırın.
* `DOMAIN`: your domain address
* `EMAIL`: your e-mail address
```shell
DOMAIN=subdomain.domain.xyz
EMAIL=yourmail@mail.com
certbot certonly --standalone -d $DOMAIN. --non-interactive --agree-tos -m $EMAIL
```

## Node Kayıt Etme
🔴 **Kayıtlar şuan kapalı**

Redbelly [kayıt sayfasına](https://vine.redbelly.network/nds-node-register) giderek gerekli bilgileri doldurun. Ardından node id gönderimesini bekleyin


## Redbelly Kurulması

### Binary Dosyasınu İndirme
Redbelly Binary dosyasını inidirip ilgili dizine taşıyoruz.
```shell
cd $HOME
curl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/RedbellyBinary > rbbc
```

### config.yaml Dosyasını İndirme
Config dosyasını inidirip ilgili dizine taşıyoruz.
```shell
cd $HOME
curl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/config_template.yaml > config.yaml
mv config.yaml $HOME/Redbelly/
nano $HOME/Redbelly/config.yaml
```
config.yaml dosyasında aşağıdaki bölümleri düzenleyin;
* `ip` domain adresiniz 
* `id` node id numaranız
* `privateKeyHex` signin cüzdanınıza ait private key 
```shell
ip: subdomain.domain.xyz // kendi adresinizle değiştirin
id: XX // kendi node id numaranızla değiştirin
.
.
.
.
privateKeyHex: 0x....................... // sginer cüzdanınızın private keyini yazın
```

Ardından dosyayı kaydedin (CTRL X, Y, Enter)


### Genesis Dosyasın İndirme
```shell
cd $HOME
curl -s https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/docs/Testnet/redbelly/files/genesis.json
mv genesis.json $HOME/Redbelly/
```


### observe.sh Dosyası Oluşturma
Aşağıdaki kodları sırasıyla giriniz;
```shell
SSL_DOMAIN=subdomain.domain.xyz // kendinizinki ile değiştirin
```

```shell
tee $HOME/Redbelly/observe.sh > /dev/null << EOF
#!/bin/sh
# filename: observe.sh
if [ ! -d rbn ]; then
  echo "rbn doesnt exist. Initialising redbelly"
  mkdir -p rbn
  mkdir -p consensus
  cp config.yaml ./consensus

  ./binaries/rbbc init --datadir=rbn --standalone
  rm -rf ./rbn/database/chaindata
  rm -rf ./rbn/database/nodes
  mkdir -p ./rbn/genesis
  cp genesis.json ./rbn/genesis
else
  echo "rbn already exists. continuing with existing setup"
  cp config.yaml ./consensus
fi


# Run EVM
rm -f log
./binaries/rbbc run --datadir=rbn --consensus.dir=consensus --tls --consensus.tls --tls.cert=/etc/letsencrypt/live/$SSL_DOMAIN/cert.pem --tls.key=/etc/letsencrypt/live/$SSL_DOMAIN/privkey.pem --http --http.addr=0.0.0.0 --http.corsdomain=* --http.vhosts=* --http.port=8545 --http.api eth,net,web3,rbn --ws --ws.addr=0.0.0.0 --ws.port=8546 --ws.origins="*" --ws.api eth,net,web3,rbn --threshold=200 --timeout=500 --logging.level info --mode production --consensus.type dbft --config.file config.yaml --bootstrap.tries=10 --bootstrap.wait=10 --recovery.tries=10 --recovery.wait=10
EOF
```

### start-rbn.sh Dosyası Oluşturma
Aşağıdaki kodları sırasıyla giriniz;

```shell
tee $HOME/Redbelly/observe.sh > /dev/null << EOF
#!/bin/sh
# filename: start-rbn.sh
mkdir -p binaries
mkdir -p consensus
chmod +x rbbc
cp rbbc binaries/rbbc
mkdir -p logs
nohup ./observe.sh > ./logs/rbbcLogs 2>&1 &
EOF
```

```shell
cd $HOME/Redbelly
chmod +x *.sh
```

## Node'u Başlatma
```shell
cd $HOME
./start-rbn.sh
```

### Logları Kontrol Etme
```shell
tail -f $HOME/logs/rbbcLogs
```

## Nde'un Çalıştığını Doğrulama

### Redbelly Ağını Cüzdana Ekle
| Alan | Detaylar |
| ------------ | ------------ |
| **Network name** | Redbelly Network |
| **New RPC URL** | https://subdomain.domain.xyz:8545 // Domainiz ile değiştirin |
| **Chain ID** | 152 |
| **Currency symbol:** | RBNT |
| **Block explorer URL** | https://explorer.devnet.redbelly.network/ |


Ardından cüzdanınızı kontrol edin. 


