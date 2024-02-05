---
title: 🆙 Q Güncelleme
description: Update node.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Q-Blockhahin/img/Q-Service-Cover.jpg
keywords: [Q, blockchain, installation, snapshot, statesync, update]
---

# Q Güncelleme

## .env Dosyasını Düzenleme
```
cd $HOME/mainnet-public-tools/validator/
nano .env
```

Dosyada aşağıdaki bölümü güncel versiyona güncelleyin.
```
QCLIENT_IMAGE=qblockchain/q-client:v1.3.6
```

## Yeniden Başlatma

### En son docker image'ı çekme ve üzerine yazma
```
docker-compose pull
```

### Yeni yapılandırmalar ve image ile yeniden başlatma
```
docker-compose down -t 60 && docker-compose up -d
```



