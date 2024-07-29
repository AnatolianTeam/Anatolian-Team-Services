---
title: 💾 AI Node Update
description: Sonaric AI Node update guide.
image: ./img/Sonaric-Service-Cover.jpg
keywords: [Sonaric, AI, node, installation]
---

# Sonaric AI Node Update (VPS)

## Updating the Sonaric
```shell
apt upgrade sonaric
```

## Checking the Sonaric
```shell
systemctl status sonaricd
```

## Node Information
```shell
sonic node-info
```

The output of the above code should be similar to the following.

```shell
✨ Node information loaded:
 ├─🧊 ID 12XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 ├─📥 Name bright-slate-wharf
 ├─🧊 Version v1.5.0
 ├─🧊 Country
 ├─🧊 Daemon Version v1.5.0
 └─🧩 Host Info
 ├─🧊 OS linux
 ├─🧊 Platform ubuntu
 ├─🧊 Platform Version 22.04
 └─🧊 Hostname vmd95175.contaboserver.net
```

## Cheking Sonaric Points

```shell
sonic points
```

## Checking the Node

Go to Sonaric [explorer](https://tracker.sonaric.xyz/) and type your name in the search box.