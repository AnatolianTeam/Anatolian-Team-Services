---
title: 🆙 Update
description: Update node with manual or scheduled.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/a8dce3356e553aad55bb6531935b292faca6c2e2/docs/Mainnet/Forta/img/Forta-Service-Cover.jpg
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