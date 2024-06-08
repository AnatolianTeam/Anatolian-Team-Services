---
title: 💾 Kurulum
description: Ar.io kurulum rehberi.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, kurulum, rehber]
sidebar_position: 1
---

# Ar.io Kurulum Rehberi

:::warning
Sunucunuzun Ubuntu 22.04 sürümüne sahip olduğundan emin olun.
:::

## Alan Adı (Domain) 
Bu işlemlere başlamadan önce bir domaine sahip olmanız gerekmektedir. Bir servis sağlayıcıdan kendinize domain alın. Yıllık 1 Dolar'a domain bulabilirsiniz.

### Alt Alan Adı (Subdomain) Oluşturma
Servis sağlayıcınızın paneline birin ve gelişmiş DNS ayarları ya da IP Bazlı DNS ayarları bölününe girin. Burada 2 adet A kaydı oluşturun.
1. İlk `A` kaydı için `kayıt ismi` bölümüne `ar` ya da `ario`, `değere` ise sunucunuzun `ip adresini` yazıp kaydedin.
2. İkinci `A` kaydında ise `kayıt ismi` bölümüne `*.ar` ya da `*.ario`, `değere` yine aynı şekilde sunucunuzun `ip adresini` yazıp kaydedin. 

* Zamanı geldiğinde burada yine işlem yapacağız bu sefer `TXT` kaydı oluşturacağız. 

## Cüzdan Oluşturma ve Cüzdana AR Token Yollama

[ArConnect](https://www.arconnect.io/) adresinden cüzdanı tarayıcınıza kurun ve bir cüzdan oluşturun.

:::warning
Cüzdan thum kelimelerinizi güvenli bir yere kaydetmeyi unutmayın.
:::

Cüzdanınıza 5-10 Dolar değerinde [Ar token](https://www.coingecko.com/en/coins/arweave) gönderin. 

## Sistemi Güncelleme ve Gerekli Kütüphanelerin Kurulması 
```shell
apt update -y && apt upgrade -y && apt install -y curl openssh-server docker-compose git certbot nginx sqlite3 build-essential && systemctl enable ssh && curl -sSL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt-get update -y && apt-get install -y yarn && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && source ~/.bashrc
```

 apt install -y curl openssh-server docker-compose git certbot nginx sqlite3 build-essential

## NVM Kurulumu
```shell
nvm install 18.8.0 && nvm use 18.8.0
```

## Sitemi Güncelleme 
```shell
apt update -y && apt upgrade -y
```

## Güvenlik Duvarını Aktif Etme ve Gerekli Portların Açılması (OPSİYONEL) 
Eğer Contabo gibi bir sunucu kullanıyorsanız bnlar yapmanıza gerek yoktur. 
```shell
ufw enable

# Optional: If using SSH, allow port 22
ufw allow 22

# Allow ports 80 and 443 for HTTP and HTTPS
ufw allow 80
ufw allow 443
```

## Nginx Kurulumu

```shell
apt install nginx -y
```

## Ar.io Node Kurulması

### Repoyu Klonlama
```shell
git clone -b main https://github.com/ar-io/ar-io-node
cd ar-io-node
```

### .env Dosyasını Düzenleme
Dosyayı açalım.
```shell
nano .env
```
Ardından aşağıdaki kodları kendimize göre düzenleyip `CTRL X` ve `Enter` diyerek kaydediyoruz. 

Burada iki farklı cüzdan adresi kullanılıyor ancak biz Observer cüzdan olarak da aynı cüzdanı kullanacağız. Maliyetlri düşürmek için bunu yapıyoruz.
```shell
GRAPHQL_HOST=arweave.net
GRAPHQL_PORT=443
START_HEIGHT=1407900
RUN_OBSERVER=true
ARNS_ROOT_HOST=DOMAİN_ADRESİNİZ // Örnek: ar.domain.com
AR_IO_WALLET=CÜZDAN_ADRESİNİZ
OBSERVER_WALLET=CÜZDAN_ADRESİNİZ
```

## Node'u Çalıştırma

```shell
docker-compose up -d
```
## Logları Kontrol Etme 
```shell
docker-compose logs -f --tail=0
```
`CTRL C` diyerek logları kapatabilirsiniz.

## Ağ Kurulumu

### Alan Adınız için SSL (HTTPS) Sertifikası Alma
Aşağıdaki kodda eposta adresiniz ve domaininizi düzenledikten sonra kodu çalıştırınız.
```shell
certbot certonly --manual --preferred-challenges dns --email EPOSTA_ADRESİNİZ -d ar.domain.com -d '*.ar.domain.com'
```

* Kodu girdikten sonra sizden kabul etmeniz için `yes` yazmanız gereken yerleri geçiyorsunuz. 

:::warning
Bu kısımda dikkatli olun. Size `TXT` kaydı için iki kod verecek birisi `kayıt adı (Record name)` diğeri ise `değer (value)` bunları servis sağlayıcınızda ekleyeceksiniz. 
:::

`TXT` kaydını yaparken şuna dikkat edin. Eğer alan adınız `ar.domain.com` şeklinde ise kayıt isminiz şu şekilde olacak: `_acme-challenge.ar`
Değer olarak ise `çıktıda verilen kodu` kullanacaksınız.

:::warning
Bir sonraki adıma geçmeden önce kaydın yayıldığını görmek için [DNS Checker](https://dnschecker.org/) adresine gidip `_acme-challenge.ar.domain.com` şeklinde arama yapın. Yayılma biraz uzun sürebilir. Yayılma başladığında `Enter` tuşuna basın.
:::

Son olarak size sertifika dosylarınızın dizinini gösteren bir çıktı alacaksınız. 

### Nginx .conf. Dosyasını Hazırlama
Yeni bir .conf dosyası oluşturuyoruz.
```shell
nano /etc/nginx/conf.d/ar.node.conf
```
Ardından  aşağıdaki kodları kendinize göre düzenleyerek bu dosyaya kaydedip çıkıyoruz. Çıkmak için `CTRL X` ardından `Enter` diyoruz.
* `ar.domain.com` yazan yerleri kendi alan adınıza göre düzenleyiniz.
```shell
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name ar.domain.com *.ar.domain.com;

    ssl_certificate /etc/letsencrypt/live/ar.domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ar.domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
    }

}
server {
    listen 80;
    listen [::]:80;
    server_name ar.domain.com *.ar.domain.com;

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
nginx -t
```
Bu kodun çıktısında bir hata görmezseniz OK şeklinde bir çıktı verecektir. Bu da nginx ayarlarında bir sorıun olmadığını gösterir.

Son olarak nginx servisini yeniden başlatıyoruz.
```shell
service nginx restart
```

### Website Kontrolü

Tarayıcınızda domain adresinize gidin ve aşağıdakine benzer bir çıktı alırsanız her şey yolunda demektir. 

```shell
{"network":"arweave.N.1","version":5,"release":68,"height":1385242,"current":"2tbqNmxc88z9Pzhlx5kKlwUOpk4hne23iMmLnFATDcQ2c-o7gtVKWJSg5twg6iMu","blocks":1385243,"peers":94,"queue_length":0,"node_state_latency":1}
```

### Node'u Yeniden Başlatma

```shell
docker-compose down
docker-compose up -d
```

### Node'u Kontrol Etme
Aşağıdaki adreste domaininizi yazıp kontrol edin.
* `https://ar.domain.com/3lyxgbgEvqNSvJrTX2J7CfRychUD5KClFhhVLyTPNCQ`

## Testnete Katılım Başvurusu

ar.io Testnet'e katılmak için en az 10.000 Test IO tokeni stake etmek gerekiyor. Test IO tokeni almak için [ar.io Discord](https://discord.gg/ApxXjvwECK) suncusunda `#testnet` kanalında `/apply` yazıp `Application to join the ar.io Testnet!` seçiyoruz ve bir bot bize mesaj atıyor. Oradaki soruları cevaplıyoruz. Ardından testnet tokenlerinin gelmesini bekliyoruz...

Sorularda sizden bazı adresler isteyecek, Aşağıdaki örnek adreslerde domainizi düzelterek hem kontrol sağlayın hem de sorulara cevap olarak gönderin.: 
* `https://ar.domain.com/`
* `https://gateways.ar.domain.com/`
* `https://ar.domain.com/ar-io/info`
* `https://ar.domain.com/ar-io/healthcheck`
* `https://ar.domain.com/ar-io/observer/reports/current`
* `https://ardrive.ar.domain.com/`
* `What project, team, or community are you with? (optional)`, bu soruya Anatolian Team yazabilirsiniz.
* `How did you find out about ar.io and the testnet?` bu soruya da Anatolian Team yazabilirsiniz.

Takıldığınız yerler olursa telegram sohbet kanalımızdan bize ulaşabilirsiniz.

## Ar.io Testnetine Katılma

Bu adımı diğer sayfada bulacaksanız. Sıradaki sayfaya geçiniz...



