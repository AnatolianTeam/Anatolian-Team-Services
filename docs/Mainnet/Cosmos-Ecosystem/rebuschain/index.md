---
id: introduction
hide_table_of_contents: true
description: Node installation guide.
image: ./img/Rebus-Service-Cover.jpg
keywords: [arable, protocol, acre, network, installation, snapshot, statesync, update]
---
# Rebus Chain

![Rebus](./img/Rebus-Service.jpg)

## Links
 ✔️ [Website](https://www.rebuschain.com/) |
 ✔️ [Blockchain Explorer](https://cosmos.anatolianteam.com/rebus) |
 ✔️ [Docs](https://docs.rebuschain.com/) |
 ✔️ [GitHub](https://github.com/rebuschain) |
 ✔️ [Discord](https://discord.com/invite/tqfSntHxvv)

## Stake with Us ♻️
You can stake using auto-compound [here](https://restake.app/rebus/rebusvaloper183hv37en2dayslgf03zfr57crtjrchuazwm9h9) without paying any fees.

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 8 |
| RAM	| 16 GB | 32 GB |
| Storage	| 500 GB SSD | 1 TB SSD | 

## Network Info 

* Network Chain ID: reb_1111-1
* Binary: rebusd
* Denom: arebus
* Working directory: .rebusd

## Public Services
* **RPC:**
    * https://api.mainnet.rebus.money:26657
    * https://rpc.rebus.nodestake.top
    * https://rebus-rpc.publicnode.com:443
* **API:**
    * https://api.mainnet.rebus.money:1317
    * https://api.rebus.nodestake.top
    * https://rebus-rest.publicnode.com
* **Explorer:** https://cosmos.anatolianteam.com/rebus

## Peering (Coming Soon)
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.rebusd/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.rebusd/config/addrbook.json "https://mainnet.anatolianteam.com/rebus/genesis.json"
wget -O $HOME/.rebusd/config/addrbook.json "https://mainnet.anatolianteam.com/rebus/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
