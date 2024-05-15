---
title: 💾 Kurulum
description: Node kurulum rehberi.
image: ./img/Penumbra-Service-Cover.jpg
keywords: [penumbra, installation, snapshot, statesync, update]
---

# Kurulum

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
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/penumbra-zone/penumbra/releases/download/v0.75.0/pcli-installer.sh | sh
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

## Penumbra Cüzdan Oluşturma

CLI'yi kullanarak cüzdan oluşturma işlemini başlatma
```
pcli init soft-kms generate
```

:::warning
Süreç boyunca ilerledikçe özel bir anahtar (Private Seed) oluşturulacaktır. Bu anahtarı özenle korumak çok önemlidir çünkü talihsiz bir durumda cüzdanınıza erişiminizi kaybetmeniz durumunda bir cankurtaran halatı görevi görür.
:::

Cüzdan adresinizi bulmak için aşağıdaki komutu kullanın:
```
pcli view address
```

Daha önce oluşturduğunuz bir cüzdanı içe aktarmanız gerekirse:
```
pcli init soft-kms import-phrase
```

Oluşturduğunuz cüzdan için musluk jetonlarını kullanmak üzere [Penumbra Discord'a](https://discord.gg/2Ez55n4txb) gidin.

Cüzdan adresinizi #-testnet-faucet kanalına ekleyin.

Cüzdan bakiyenizi kontrol edin:
```
pcli view sync
pcli view balance
```

## Penumbra and CometBFT Kurulumu
```
curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.75.0/pd-x86_64-unknown-linux-gnu.tar.gz
tar -xf pd-x86_64-unknown-linux-gnu.tar.gz
mv pd-x86_64-unknown-linux-gnu/pd /usr/local/bin/
```

Penumbra'nın başarıyla kurulup kurulmadığını kontrol etdin:
```
pd --version
```

Node'un Penumbra ile birlikte sorunsuz çalışmasını sağlamak için CometBFT'yi yükleyin.
```
echo export GOPATH=\"\$HOME/go\" >> ~/.bash_profile
echo export PATH=\"\$PATH:\$GOPATH/bin\" >> ~/.bash_profile
source ~/.bash_profile
```
```
git clone --branch v0.37.5 https://github.com/cometbft/cometbft.git
cd cometbft
```
```
make install
```

CometBFT'nin başarılı kurulumunu doğrulayın:
```
cometbft version
```

Full Node'u başlatmak için yapılandırma dosyalarını başlatmak için hazırlama:
```
pd testnet unsafe-reset-all
```

Next, initialize the node, substituting "IP" with the IP address of your VPS and "NAME" with the desired name for your node:
Ardından, `IPADDRESS` yerine `VPS'nizin IP adresini` ve `NAME` yerine `node'unuz için istediğiniz adı` yazarak node'u başlatın:
```
pd testnet join --external-address IPADDRESS:26656 --moniker NAME
```

Örnek:
```
pd testnet join --external-address 123.456.78:26656 --moniker "Anatolian Team"
```

Penumbra node'unu arka planda çalıştırmak için servis dosyası oluşturma:
```
tee /etc/systemd/system/penumbra.service > /dev/null <<EOF
[Unit]
Description=Penumbra Node
After=network.target
[Service]
User=root
ExecStart=/usr/local/bin/pd start
Restart=always
RestartSec=3
LimitNOFILE=infinity
[Install]
WantedBy=multi-user.target
EOF
```

Hizmeti Etkinleştirme ve Başlatma
```
systemctl daemon-reload
systemctl enable penumbra
systemctl start penumbra
```

Node'un doğru çalıştığından emin olmak için:
```
journalctl -fu penumbra -n 50
```

CometBFT node'u etkinleştirilene kadar node'un çalışmayacağını lütfen unutmayın.

Penumbra başlatıldığında, Penumbra'nın işlevselliği için gerekli olan CometBFT node'u başlatmak için yeni bir servis dosyası oluşturun:

```
tee /etc/systemd/system/cometbft.service > /dev/null <<EOF
[Unit]
Description=Cometbft Node
After=network.target
[Service]
User=root
ExecStart=/root/go/bin/cometbft start --home root/.penumbra/testnet_data/node0/cometbft
Restart=always
RestartSec=3
LimitNOFILE=infinity
[Install]
WantedBy=multi-user.target
EOF
```

CometBFT Node Hizmeti Etkinleştirme ve Başlatma
:
```
systemctl daemon-reload
systemctl enable cometbft
systemctl start cometbft
```

Node'un doğru çalıştığından emin olmak için:
```
journalctl -fu cometbft -n 50
```

CometBFT başlatıldığında Penumbra node otomatik olarak başlayacaktır.

## Validator Yapılandırması

Full node'unuzu bir validator node'a dönüştürmek istiyorsanız, bir yapılandırma dosyası sağlamanız ve validator node'unuzun etkinleştirilmesi için yeterli sayıda token delege etmeniz gerekir.

Consensus_key'inizin değerini tanımlayarak başlayın:
```
grep -A3 pub_key ~/.penumbra/testnet_data/node0/cometbft/config/priv_validator_key.json
```

Yapılandırma dosyanızı tamamlamak için ihtiyacınız olacağından bu değeri el altında bulundurun.

Yapılandırma dosyanızı oluşturun:
```
pcli validator definition template \
    --tendermint-validator-keyfile ~/.penumbra/testnet_data/node0/cometbft/config/priv_validator_key.json \
    --file validator.toml
```

Validator dosyanızı özelleştirmek için:
```
nano validator.toml
```

![Adsız tasarım (6)](https://github.com/AnatolianTeam/Anatolian-Team-Services/assets/107190154/c297d632-23ac-443e-9085-e5100f29c698)

Edit the configuration file by replacing the placeholder "value" in "consensus_key" with the actual value you obtained earlier, and update "enabled = false" to "enabled = true".

`Consensus_key` içindeki `value` yer tutucusunu daha önce elde ettiğiniz gerçek değerle değiştirerek yapılandırma dosyasını düzenleyin ve `enabled = false` ifadesini `enabled = true` olarak güncelleyin.

## Validator Kaydı
validator.toml dosyasını yapılandırdığınıza göre artık doğrulayıcınızı kaydetmeye hazırsınız:
```
pcli validator definition upload --file validator.toml
```

## Validator Node'a Delege Etme

Validatorünüzü etkinleştirmek için musluktan aldığınız tokenleri delege etmeniz gerekir.

Validatorünüzün adresini tanımlayarak başlayın:
```
pcli validator identity
```

Tokenleri delege etme:
```
pcli tx delegate 1penumbra --to [YOUR_VALIDATOR_IDENTITY_KEY]
```

You can verify how many tokens you have delegated :
Kaç token delege ettiğinizi doğrulayabilirsiniz:
```
pcli view balance
```

Validatorünüzün etkin olduğunu listede arayarak doğrulayabilirsiniz:
```
pcli query validator list --detailed
```
