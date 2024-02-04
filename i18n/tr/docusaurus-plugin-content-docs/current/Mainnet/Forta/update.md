---
title: 🆙 Güncelleme
description: Node kurulum rehberi.
image: ./img/Forta-Service-Cover.jpg
keywords: [forta, network, security, intel]
---

# Update
```shell
systemctl stop forta
curl https://dist.forta.network/artifacts/forta -o $(which forta)
chmod +x /usr/bin/forta
forta version 
systemctl start forta
journalctl -fu forta
```