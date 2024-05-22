---
title: 💾 Installation
description: Liteseed Seromoni katılım rehberi.
image: ./img/Liteseed-Service-Cover.jpg
keywords: [Liteseed, ao, veri, kurulum, rehber]
sidebar_position: 1
---

# Liteseed Kurulum Rehberi

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Docker Kurulumu
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
docker version
```

## Repoyu Klonlama
```shell
git clone https://github.com/liteseed/edge
```

## Docker Image Oluşturma

```shell
cd ./edge
docker build -t edge .
```

## Volume Oluşturma

```shell
docker volume create liteseed
```

## Arweave Özel Anahtarını Oluşturma ve SQLite Veritabanını Taşıma

```shell
docker run -v liteseed:/data edge generate
docker run -v liteseed:/data edge migrate
```

## Node'u Başlatma

```shell
docker run -v liteseed:/data edge start
```
* Ardından CTRL C ile logları kapatın. Kapatmadan bir screen içerisinde çalıştıracak oluranız zamanla diskinizde bu loglar yer kaplayacaktır.

## Cüzdan Adresini Öğrenme

```shell
docker run -v liteseed:/data edge balance
```

* Çıktı aşağıdaki gibi görünecektir
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 1000 LSD
Staked:  No
```

## Domain SSL and TXT Kaydı

### Alan Adınız için SSL (HTTPS) Sertifikası Alma
Aşağıdaki kodda eposta adresiniz ve domaininizi düzenledikten sonra kodu çalıştırınız.
```shell
certbot certonly --manual --preferred-challenges dns --email EMAIL_ADDRESS -d liteseed.domain.com
```

* Kodu girdikten sonra sizden kabul etmeniz için `yes` yazmanız gereken yerleri geçiyorsunuz.

:::warning
Bu kısımda dikkatli olun. Size `TXT` kaydı için iki kod verecek birisi `kayıt adı (Record name)` diğeri ise `değer (value)` bunları servis sağlayıcınızda ekleyeceksiniz.
:::

`TXT` kaydını yaparken şuna dikkat edin. Eğer alan adınız `liteseed.domain.com` şeklinde ise kayıt isminiz şu şekilde olacak: `_acme-challenge.liteseed` Değer olarak ise çıktıda verilen kodu kullanacaksınız.

:::warning
Bir sonraki adıma geçmeden önce kaydın yayıldığını görmek için [DNS Checker](https://dnschecker.org/) adresine gidip `_acme-challenge.liteseed.domain.com` şeklinde arama yapın. Yayılma biraz uzun sürebilir. Yayılma başladığında Enter tuşuna basın.
:::

Finally, you will receive a printout showing you the directory of your certificate files.

### Preparing Nginx .conf Files
Yeni bir .conf dosyası oluşturuyoruz.

```shell
nano /etc/nginx/conf.d/liteseed.node.conf
```

Ardından aşağıdaki kodları kendinize göre düzenleyerek bu dosyaya kaydedip çıkıyoruz. Çıkmak için `CTRL X`ardından `Enter` diyoruz.
* `liteseed.domain.com` ve `8080` yazan yerleri kendi alan adınıza göre düzenleyiniz.
```shell
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name ar.domain.com;

    ssl_certificate /etc/letsencrypt/live/liteseed.domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/liteseed.domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
    }

}
server {
    listen 80;
    listen [::]:80;
    server_name liteseed.domain.com;

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Ardından aşağıdaki kodları sırasıyla giriyoruz.

```shell
unlink /etc/nginx/sites-available/default
```

```shell
ln -s /etc/nginx/sites-available/liteseed.node.conf /etc/nginx/sites-enabled/liteseed.node.conf
```

```shell
nginx -t
```

Bu kodun çıktısında bir hata görmezseniz OK şeklinde bir çıktı verecektir. Bu da nginx ayarlarında bir sorıun olmadığını gösterir.

Son olarak nginx servisini yeniden başlatıyoruz.

```shell
service nginx restart
```

## Token İsteme

Token almak için cüzdan adresinizi ve varsa web sitenizi veya Twitter adresinizi `hello@liteseed.xyz` adresine gönderin.

## Stake Etme 
Token istemek için gönderdiğiniz e-postada verdiğiniz adresi (twitter or website) `https://yourbundlerurl.com` yazan yere yazın.
```shell
docker run -v liteseed:/data edge stake -u "https://yourbundlerurl.com"
```

## Stake Durumunu Kontrol Etme
```shell
docker run -v liteseed:/data edge balance
```

* Çıktı aşağıdaki gibi görünecektir
```shell
Address:  F7fmxSBJx5RlIRrt825iIEAL110cKP2Bf8tYd0Q1STU
Balance: 0 LSD
Staked:  Yes
```

## Node'u Tekrar Başlatma
Artık hem $AR hem de $LSD kazanmaya başlayabilirsiniz.
```shell
docker run -v liteseed:/data edge start
```

## Cüzdanı Yedekleme
```shell
cat /var/lib/docker/volumes/liteseed/_data/signer.json
```