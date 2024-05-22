---
title: 🆙 Update
description: Ar Node update guide.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, update, guide]
sidebar_position: 4
---

# Update 

## Checking the Version
```shell
curl http://localhost:3000/ar-io/info
```

## Removing the containers and the volumes

```shell
cd $HOME/ar-io-node/
docker-compose down
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

## Redis Error Solution
```shell
docker-compose down --rmi all
rm -rf $HOME/ar-io-node/data/redis
docker-compose up -d
```