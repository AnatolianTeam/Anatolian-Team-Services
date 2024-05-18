---
title: 🆙 Güncelleme
description: Node kurulum rehberi.
image: ./img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, kurulum, snapshot, statesync, güncelleme]
---

# Update

## Versiyon 3.2.2
```shell
systemctl stop canined
cd $HOME
rm -rf canine-chain
git clone https://github.com/JackalLabs/canine-chain.git
cd canine-chain
git checkout v3.2.2
make install

systemctl restart canined && journalctl -u canined -f -o cat
```