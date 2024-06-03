---
title: 🆙 Update
description: Update node with manual or scheduled.
position: 5
image: ./img/CrossFi-Service-Cover.jpg
keywords: [crossfi, installation, snapshot, statesync, update]
---

# Update v0.3.0-prebuild9

## Manual Update

```shell
cd $HOME
wget https://github.com/crossfichain/crossfi-node/releases/download/v0.3.0-prebuild9/crossfi-node_0.3.0-prebuild9_linux_amd64.tar.gz
tar -xvf crossfi-node_0.3.0-prebuild9_linux_amd64.tar.gz
chmod +x $HOME/bin/crossfid
rm crossfi-node_0.3.0-prebuild9_linux_amd64.tar.gz
mv $HOME/bin/crossfid $(which crossfid)
systemctl restart crossfid && journalctl -u crossfid -f
```

## Scheduled Update

```shell
# Install tmux dependency, if needed
apt update
apt install -y tmux
```

```shell
tmux new -s crossfi "bash <(curl -s https://raw.githubusercontent.com/AnatolianTeam/Cosmos-Scripts/main/utils/schedule_upgrade.sh) -n crossfi -i crossfi-evm-testnet-1 -t 3520000 -v v0.3.0-prebuild9 -b crossfid -c https://github.com/AnatolianTeam"
```
