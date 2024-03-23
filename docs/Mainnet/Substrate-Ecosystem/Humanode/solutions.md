---
title: 🆙 Solutions
description: Update node with manual or scheduled.
image: ./img/Humanode-Service-Cover.jpg
keywords: [Humanode, network, security, intel]
---

# Solutions

### Mnemonic Insert Error
:::warning
Firstly, click the `STOP THE NODE` button on the Humanode Launcher home page and stop your node.
:::

Run the following codes on your server, then close and reopen the launcher and try again.
```shell
echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
apt update
apt install libssl1.1
```

:::warning
If the above steps do not work, enter the codes below and restart your server. Then close and reopen the launcher and try again.
:::
```shell
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.22_amd64.deb
dpkg -i libssl1.1_1.1.1f-1ubuntu2.22_amd64.deb
```