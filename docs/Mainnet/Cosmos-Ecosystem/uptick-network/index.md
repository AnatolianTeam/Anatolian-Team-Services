---
id: introduction
hide_table_of_contents: true
description: Node installation guide.
image: ./img/Uptick-Service-Cover.jpg
keywords: [uptick, network, NFT, web3, installation, snapshot, statesync, update]
---
# Uptick Protocol

![Uptick](./img/Uptick-Service.jpg)

## Links
 ✔️ [Website](https://www.uptickproject.com/) |
 ✔️ [Blockchain Explorer](https://cosmos.anatolianteam.com/uptick) |
 ✔️ [Docs](https://upticknft.gitbook.io/uptick-network-documentation/) |
 ✔️ [GitHub](https://github.com/UptickNetwork) |
 ✔️ [Discord](https://discord.com/invite/teqX78VZUV)

## Stake with Us ♻️
You can stake using auto-compound [here](https://restake.app/uptick/uptickvaloper12tmn00ne92n5nljf3t5apyy2jtkfjfetdhvgca) without paying any fees.

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 8 |
| RAM	| 16 GB | 32 GB |
| Storage	| 500 GB SSD | 1 TB SSD | 

## Network Info 
* Network Chain ID: uptick_117-1
* Binary: uptickd
* Denom: auptick
* Working directory: .uptickd

## Public Services
* **RPC:**
    * https://uptick-rpc.brocha.in:443
    * https://rpc.uptick.nodestake.org
    * https://rpc.nodejumper.io:443/uptick
* **API:**
    * https://uptick-rest.brocha.in
    * https://api.uptick.nodestake.org
    * https://rest.nodejumper.io/uptick
* **Explorer:** https://cosmos.anatolianteam.com/uptick

## Peering (Coming Soon)
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.uptickd/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.uptickd/config/addrbook.json "https://mainnet.anatolianteam.com/uptick/genesis.json"
wget -O $HOME/.uptickd/config/addrbook.json "https://mainnet.anatolianteam.com/uptick/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
