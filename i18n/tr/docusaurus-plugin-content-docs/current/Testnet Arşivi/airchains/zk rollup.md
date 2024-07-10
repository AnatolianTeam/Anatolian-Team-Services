---
title: 💾 Kurulum
description: ZK Rollup kurulum rehberi.
image: ./img/Airchains-Service-Cover.jpg
keywords: [airchains, chain, kurulum, snapshot, statesync, güncelleme]
---

# Kurulum

:::warning
Rehber henüz hazır değil. Hazır olduğunda bu yarı mesajını yenileyeceğiz. Rehber tamamlandığında Her üç DA ile kurulum hazır olmuş olacak.
:::

## Gereksinimler

| Bileşenler | Minimum | **Önerilen** |
| ------------ | ------------ | ------------ |
| CPU |	2 | 4 |
| RAM	| 4 GB | 8 GB |
| Storage	| 50-100 GB SSD | 200-300 GB SSD | 

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## Gerekli Kütüphanelerin Kurulması
```shell
apt install jq -y < "/dev/null"
```

## Go Kurulumu
```shell
ver="1.22.2"
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

## Repoların Klonlanması
```
git clone https://github.com/airchains-network/evm-station.git
git clone https://github.com/airchains-network/tracks.git
```

## DA Client Seçimi
:::warning
Eğer Eigen DA kullanacaksanız aşağıdakileri repoları klonlamayayın. Eigen DA kurulumuna buradan ulaşabilirsiniz. 
:::

<Tabs>
<TabItem value="Avail">

```
git clone https://github.com/availproject/availup.git
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/avail-light
```

</TabItem>
<TabItem value="Celestia">

```  
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/celestia
```

</TabItem>
</Tabs>

## EVM İstasyonunun Kurulması ve Çalıştırılması
```shell
cd $HOME/evm-station
go mod tidy
```

## Projenin Yürütülmesi
```shell
/bin/bash ./scripts/local-setup.sh
```  

Kodun çıktısında aşağıdaki gibi cüzdan bilgileriniz olacak, gerekli olmayabilir ama siz bunları yine de kaydedin, bulunsun.
```shell
- address: stationevm18qfaddafdfsdfsdfsffgfggna6qee6pxq
  name: mykey
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AwsmOpIdfdfsdfsdfFDFdfdSdfdsDFFgfgfgcOJI0YWf+4"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

lorem ipsum dolor sit amet consectetur adipiscing elit nulla blandit nibh eu vehicula consequat duis accumsan velit eget convallis efficitur curabitur ex sem, ornare
```

```shell
/bin/bash ./scripts/local-start.sh 
```

Bu kodun çıktısında evmos logları aklamaya başlayacak. `CTRL C` ile kapatın.


## EVM İstasyonu Özel Anahtarınızı Alma
Kodun çıktısında verilen private key'i kaydedin.
```shell
/bin/bash ./scripts/local-keys.sh 
```

<Tabs>
<TabItem value="Avail">

## DA Anahtarlarının Kurulması ve DA İstemcisinin Çalıştırılması
Aşağıdaki kodu çalıştırdıktan sonra Cüzdan adresiniz ileberaber puplic key'inizi gördüğünüzde `CTRL C` ile durdurun ve Puplic key'i kaydedin.
```shell
/bin/bash $HOME/availup/availup.sh --network "turing" --app_id 36
```
## Cüzdan Bilgileri

Avail cüzdan kelimelerinize aşağıdaki koddan ulaşabilirsiniz. Bu kelimelerinizi de kaydedin ve herhangi bir polkadot cüzdana içe aktarın.
```
nano $HOME/.avail/identity/identity.toml
```
* Faucet: https://faucet.avail.tools/

## Avail DA Çalıştırma

### Avail Servis Dosyası Oluşturma
```
tee /etc/systemd/system/availupd.service > /dev/null << EOF
[Unit]
Description=availup service
After=network-online.target

[Service]
User=$USER
ExecStart=/bin/bash $HOME/availup/availup.sh --network "turing" --app_id 36
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

### Servisi Başlatma
```
systemctl daemon-reload
systemctl enable availupd
systemctl start availupd
```

### Servisi Durumunu Kontrol Etme
```
systemctl status availupd
```

### Logları Kontrol Etme

```
journalctl -u availupd -f -o cat
```
Ardından `CTRL C` ile logları kapatın. Kapatmadan bir screen içerisinde çalıştıracak olursanız zamanla diskinizde bu loglar yer kaplayacaktır.

```
```

</TabItem>
<TabItem value="Celestia">

```  
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/celestia
```

</TabItem>
<TabItem value="Eigen">

```  

```

</TabItem>
</Tabs>

## Tracks Kurulumu
```shell 
cd tracks
go mod tidy
```   

## Sekanseri Başlatma

<Tabs>
<TabItem value="Avail">
Moniker adınızı ve Avail public keyinizi yaıp kodları çalıştırın.
```
MONIKER=ADINIZ
daKey=PUBLIC_KEY
```
Ardından aşağıdaki kodu girin.
```shell
go run cmd/main.go init --daRpc "http://127.0.0.1:7000" --daKey "$daKey" --daType "avail" --moniker "$MONIKER" --stationRpc "http://127.0.0.1:8545" --stationAPI "http://127.0.0.1:8545" --stationType "evm"
```

## Cüzdan Oluşturma
Kodun çıktısını kaydedin ve cüzdan adresinize [discord](https://discord.gg/VADsDYSQ) sunucusundaki `#🚰❘switchyard-faucet-bot` kanalında `$faucet CUZDAN_ADRESI` şeklinde mesaj atarak token isteyin.
  
```shell
go run cmd/main.go keys junction --accountName $MONIKER --accountPath $HOME/.tracks/junction-accounts/keys
```

## Prover'ı Başlatma
```shell
go run cmd/main.go prover v1EVM
```

## İstasyon Oluşturma
Node id'yi aşağıdaki kod ile ilgili dosyayı açıp çğrenip kaydediyoruz.
```shell
nano $HOME/.tracks/config/sequencer.toml 
```
Ardından aşağıda AIR_CUZDAN_ADRESINIZ ve NODE_ID_YAZIN bölümlerini doldurun ve kodu çalıştırın.
```shell
WALLET=AIR_CUZDAN_ADRESINIZ
NODE_ID=NODE_ID_YAZIN
IP=curl icanhazip.com
```
Ardından aşağıdaki kodu çalıştırın.
```shell
go run cmd/main.go create-station --accountName $MONIKER --accountPath $HOME/.tracks/junction-accounts/keys --jsonRPC "https://airchains-testnet-rpc.cosmonautstakes.com/" --info "EVM Track" --tracks $WALLET --bootstrapNode "/ip4/$IP/tcp/2300/p2p/$NODE_ID>"
```

## Node'u Başlatma
```shell
go run cmd/main.go start
```

</TabItem>
<TabItem value="Celestia">

```  
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/celestia
```

</TabItem>
<TabItem value="Eigen">

```  

```

</TabItem>
</Tabs>

