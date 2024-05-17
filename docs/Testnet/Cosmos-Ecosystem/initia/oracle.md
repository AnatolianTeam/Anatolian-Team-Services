---
title: 💾 Oracle
description: Oracle installation guide.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, oracle, installation, snapshot, statesync, update]

---

# Oracle Installation

## Installing the Oracle
```shell
cd $HOME
git clone https://github.com/skip-mev/slinky.git
cd slinky
git checkout v0.4.3
make build
mv build/slinky /usr/local/bin/
```

## Creating the Service File

:::warning
If you `have not done` the node installation according to our guide, change the `127.0.0.1:${INITIA_PORT}090` section in the code below according to which port your node uses. Ex.: `127.0.0.1:15090`
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

## Configuring the Initia Node

:::warning
If you have not done the node setup according to our guide, use the 2nd code below and change the 'PORT' section according to which port your node uses. Ex.: `PORT=15080`
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

## Enabling and Starting the Services
```shell
systemctl daemon-reload
systemctl enable slinkyd.service
systemctl start slinkyd.service
systemctl restart initiad
```

## Checking the Initia Logs
```shell
journalctl -u initiad -f -o cat
```  

## Checking the Oracle Logs
```shell
journalctl -u slinkyd -f -o cat
```  

## Completely Deleting the Node 
```shell 
systemctl stop slinkyd && \
systemctl disable slinkyd && \
rm /etc/systemd/system/slinkyd.service && \
systemctl daemon-reload && \
cd $HOME && \
rm -rf .slinky slinky && \
rm -rf $(which slinkyd)
```
