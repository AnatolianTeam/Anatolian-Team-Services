---
title: 📶 RPC Ekleme
description: Cüzdana RPC Ekleme.
image: ./img/zkync-Service-Cover.jpg
keywords: [zkync, rpc, node]
---

# Cüzdana RPC Ekleme
```shell
systemctl stop forta
curl https://dist.forta.network/artifacts/forta -o $(which forta)
chmod +x /usr/bin/forta
forta version 
systemctl start forta
journalctl -fu forta
```