---
title: 🆙 Update
description: Ar Node update guide.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, update, guide]
sidebar_position: 4
---

# Update 

## Removing the containers and the volumes

```shell
cd ar-io-node/
docker-compose down -v 
```

## Pulling Updated Containers

```shell
git pull 
git checkout main 
docker-compose up -d
```

## Checking the Logs
```shell
docker-compose logs -f --tail=0
```
And then close the logs with `CTRL C`. If you run it on a screen without closing it, these logs will take up space on your disk over time.
