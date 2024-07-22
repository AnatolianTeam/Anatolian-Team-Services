---
title: 🆙 Update
description: Update node with manual or scheduled.
image: ./img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, installation, snapshot, statesync, update]
---

# Update ((v.4.0.0))

## Scheduled Update

### tmux Install
```shell
apt update
apt install -y tmux
```

### Auto Update
```shell
tmux new -s jackal "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n jackal -i jackal-1 -t 8527000 -v v4.0.0 -b canined -c https://github.com/AnatolianTeam"
```

`press CTRL+B then leave hands and then press D`


## Manual Update
```shell
sudo systemctl stop canined

cd && rm -rf canine-chain
git clone https://github.com/JackalLabs/canine-chain.git
cd canine-chain
git checkout v4.0.0
make install

systemctl restart canined
```