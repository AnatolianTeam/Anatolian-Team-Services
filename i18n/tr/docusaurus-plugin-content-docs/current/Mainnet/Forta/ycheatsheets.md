---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Forta/img/Forta-Service-Cover.jpg
keywords: [forta, network, security, intel]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Node Durumunu Kontrol Etme
```shell
forta status
```

## Logları Görüntüleme
```shell
systemctl start strided
```

## Çalışan Konteynerleri Görüntüleme
```shell
docker ps
```

## Bir Konteynerı Görüntüleme
```shell
docker logs -f CONTAINER_ID
```