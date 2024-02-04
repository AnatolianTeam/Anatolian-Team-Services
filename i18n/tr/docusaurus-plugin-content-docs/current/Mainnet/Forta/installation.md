---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Forta-Service-Cover.jpg
keywords: [forta, network, security, intel]
---

# Kurulum

## Updating the System
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

## Docker Daemon Dosyasının Oluşturulması
```shell
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
   "default-address-pools": [
        {
            "base":"172.17.0.0/12",
            "size":16
        },
        {
            "base":"192.168.0.0/16",
            "size":20
        },
        {
            "base":"10.99.0.0/16",
            "size":24
        }
    ]
}
EOF
```

## Docker'ı Yeniden Başlatma
```shell
systemctl restart docker
```

## Forta Kurulumu
`SIFRENIZ` bölümüne şifrenizi giriniz. Özel karakter kullanmayınız. Özel karakter kullanımında sorunlar oluşabiliyor.
```shell
sudo curl https://dist.forta.network/pgp.public -o /usr/share/keyrings/forta-keyring.asc -s
echo 'deb [signed-by=/usr/share/keyrings/forta-keyring.asc] https://dist.forta.network/repositories/apt stable main' | sudo tee -a /etc/apt/sources.list.d/forta.list
apt-get update
apt-get install forta
forta init --passphrase SIFRENIZ
```

🔴 Yukarıdaki kodların çıktısında aşağıdaki gibi Scanner adresinizi göreceksiniz. Bu adrese EVM cüzdanınızadan 0,1 MATIC gönderdikten sonra işlemlere devam ediyoruz.

```shell
Scanner address: 0xAAA8C491232cB65a65FBf7F36b71220B3E695AAA

Successfully initialized at /root/.forta
```  

## Alchemy Hesap Oluşturma
[Alchemy](https://alchemy.com/?r=zc3NjI5NzM1NzMxN) adresine giderek bir hesap oluşturuyoruz. Burada `Create App` bölümünden Forta Scanner Node'unuzu çalıştıracağınız ağ için bir `App` oluşturuyoruz. Burada `View Key` bölümünden `https` ile başlayan linkimizi alıyoruz ve kurulum sırasında Alchemy linki geçen yerde kullanmak üzere bir txt dosyasına kaydediyoruz.

## Yapılandırma Dosyası Oluşturma
Hangi ağda çalıştırmak istiyorsanız o ağın aşağıdaki yapılandırmalarını yapmanız gerekmektedir.
````jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
<Tabs className="forta-confs">
  <TabItem value="Polygon">

```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 137

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF
```
  </TabItem>
  <TabItem value="BSC">

```  
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 56

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF
```
  </TabItem>
  <TabItem value="Ethereum">
  
  ``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 1

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF
  ``` 
  </TabItem>
  <TabItem value="Arbitrum">
  
  ```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 42161

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF
  ``` 
  </TabItem>
  <TabItem value="Optimism">
  
  ``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 10

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF
  ``` 
  </TabItem>
  <TabItem value="Avalanche">
  
  ``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 43114

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF
  ``` 
  </TabItem>
  <TabItem value="Fantom">
  
  ``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 250

scan:
  jsonRpc:
    url: ALCHEMY_LINKINIZ

trace:
  enabled: false
EOF  
  ```
  </TabItem>
</Tabs>
````

## Cüzdanı Kaydetme
`EVM_ADRESINIZ` bölümüne EVM cüzdan adresinizi ve `SIFRENIZ` yerine de yukarıda Forta kurulumunda belirlediğiniz şifreyi giriyoruz.

```shell 
forta register --owner-address EVM_ADRESINIZ --passphrase SIFRENIZ
```  

## Servis Dosyası Oluşturma
SIFRENIZ yerine yukarıda Forta kurulumunda belirlediğiniz şifreyi giriyoruz.
```
tee /lib/systemd/system/forta.service > /dev/null <<EOF
[Unit]
Description=Forta
After=network-online.target
Wants=network-online.target systemd-networkd-wait-online.service

StartLimitIntervalSec=500
StartLimitBurst=5

[Service]
Environment="FORTA_DIR=/root/.forta/"
Environment="FORTA_PASSPHRASE=SIFRENIZ"
Restart=on-failure
RestartSec=15s

ExecStart=/usr/bin/forta run

[Install]
WantedBy=multi-user.target
EOF
```

## Forta'yı Aktif Etme ve Çalıştırma
```shell
systemctl enable forta
systemctl daemon-reload
systemctl start forta
```

## Node Durumu
Node'unuzun durumunu kontrol etmek için https://scannerx.net/ adresine üye olarak takip edebilirsiniz.

## Node'u Tamamen Silme
```shell
systemctl stop forta
systemctl disable forta
rm /lib/systemd/system/forta.service -rf
rm $HOME/.forta -rf
```
​