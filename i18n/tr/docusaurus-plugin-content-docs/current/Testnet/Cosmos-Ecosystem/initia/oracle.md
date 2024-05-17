---
title: 💾 Oracle
description: Oracle kurulum rehberi.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, oracle, kurulum, snapshot, statesync, güncelleme]
---

# Oracle Kurulum Rehberi

## Oracle Kurulumu
```shell
cd $HOME
git clone https://github.com/skip-mev/slinky.git
cd slinky
git checkout v0.4.3
make build
mv build/slinky /usr/local/bin/
```

## Servis Dosyası Oluşturma
:::warn
Eğer node kurulumunu bizim rehberimizden `yapmadıysanız` aşağıdaki kodda `127.0.0.1:${INITIA_PORT}090` bölümünü, node'unuz hangi portu kullanıyorsa ona göre değiştirin. Örn.: `127.0.0.1:15090`
:::
```
tee /etc/systemd/system/slinkyd.service > /dev/null <<EOF
[Unit]
Description=Initia Slinky Oracle
After=network-online.target
[Service]
User=$USER
ExecStart=$(which slinky) --oracle-config-path $HOME/slinky/config/core/oracle.json --market-map-endpoint 127.0.0.1:${INITIA_PORT}090
Restart=on-failure
RestartSec=30
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```

## Initia Node Yapılandırması

:::warn
Eğer node kurulumunu bizim rehberimizden `yapmadıysanız` aşağıdaki 2 kodu kullnın ve `PORT` bölümünü node'unuz hangi portu kullanıyorsa ona göre değiştirin. Örn.: `PORT=15080`
:::

```shell
sed -i.bak -e "
s|oracle_address = \"\"|oracle_address = \"127.0.0.1:${INITIA_PORT}080\"|
" $HOME/.initia/config/app.toml
```


```shell
PORT=15080
sed -i.bak -e "
s|oracle_address = \"\"|oracle_address = \"127.0.0.1:${PORT}\"|
" $HOME/.initia/config/app.toml
```



## Hizmeti Etkinleştirme ve Başlatma
```shell
systemctl daemon-reload
systemctl enable slinkyd.service
systemctl start slinkyd.service
systemctl restart initiad
```

## Initia Logları Kontrol Etme
```shell
journalctl -u initiad -f -o cat
```  

## Oracle Logları Kontrol Etme
```shell
journalctl -u slinkyd -f -o cat
```  

## Oracle'ı Tamamen Silme
```shell 
systemctl stop slinkyd && \
systemctl disable slinkyd && \
rm /etc/systemd/system/slinkyd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .slinky slinky && \
rm -rf $(which slinkyd)
```
