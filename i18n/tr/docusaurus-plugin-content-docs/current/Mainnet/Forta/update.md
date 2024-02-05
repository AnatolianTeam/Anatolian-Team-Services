---
title: 🆙 Güncelleme
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Forta/img/Forta-Service-Cover.jpg
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