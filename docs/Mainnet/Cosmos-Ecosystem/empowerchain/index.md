---
id: introduction
hide_table_of_contents: true
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/docs/Mainnet/Cosmos-Ecosystem/empowerchain/img/Empower-Service-Cover.jpg
keywords: [empower, chain, empowerchain, network, installation, snapshot, statesync, update]
---
# Empower Chain

![Empower](./img/Empower-Service.jpg)

## Links
 ✔️ [Website](https://www.empowerchain.io/) |
 ✔️ [Blockchain Explorer](https://cosmos.anatolianteam.com/empower) |
 ✔️ [Docs](https://docs.empowerchain.io/) |
 ✔️ [GitHub](https://github.com/EmpowerPlastic/empowerchain) |
 ✔️ [Discord](https://discord.gg/UTxEzFzHVX)

## Stake with Us ♻️
You can stake using auto-compound [here](https://restake.app/empowerchain/empowervaloper1786wmwws6avkrkx9nwv3az6g2j9ha953ydusdv) without paying any fees.

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 8 |
| RAM	| 16 GB | 32 GB |
| Storage	| 500 GB SSD | 1 TB SSD | 

## Network Info 
* Network Chain ID: empowerchain-1
* Binary: empowerd
* Denom: umpwr
* Working directory: .empowerchain

## Public Services
* **RPC:**
    * https://empower-rpc.polkachu.com/	
    * https://rpc.empower.nodestake.top	
    * https://empowerchain.nodejumper.io:443
	* https://empower-mainnet-rpc.itrocket.net
    * http://empw.rpc.m.stavr.tech:22057
    * https://empower.rpc.stakevillage.net
    * https://rpc-empower.sr20de.xyz
* **API:**
    * https://empower-api.polkachu.com/	
    * https://api.empower.nodestake.top	
    * https://empowerchain.nodejumper.io:1317/	
    * https://empower-mainnet-api.itrocket.net
    * https://empw.api.m.stavr.tech
    * https://empower.api.stakevillage.net
    * https://api-empower.sr20de.xyz/
* **Explorer:** https://cosmos.anatolianteam.com/empower

## Peering (Coming Soon)
You can use peer for fast connection or state sync 
```shell
peers="COMING SOON"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.empowerchain/config/config.toml
```
The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.empowerchain/config/addrbook.json "https://mainnet.anatolianteam.com/empowerchain/genesis.json"
wget -O $HOME/.empowerchain/config/addrbook.json "https://mainnet.anatolianteam.com/empowerchain/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
