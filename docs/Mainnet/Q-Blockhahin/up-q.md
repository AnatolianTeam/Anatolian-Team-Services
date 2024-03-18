---
title: 🆙 Update Q
description: Update node.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Q-Blockhahin/img/Q-Service-Cover.jpg
keywords: [Q, blockchain, installation, snapshot, statesync, update]
slug: update
---

# Q Update

## Editing .env File
```
cd $HOME/mainnet-public-tools/validator/
nano .env
```

Update the following section in the file to the current version.
```
QCLIENT_IMAGE=qblockchain/q-client:v1.3.6
```

## Restart Node

### Pulling and overwriting the latest docker image
```
docker-compose pull
```

### Restarting with new configurations and images
```
docker-compose down -t 60 && docker-compose up -d
```



