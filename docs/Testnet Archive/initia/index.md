---
id: introduction
hide_table_of_contents: true
image: ./img/Initia-Service-Cover.jpg
description: Initia Service Page
keywords: [initia, chain, installation, snapshot, statesync, update]
---
# Initia 

![Initia](./img/Initia-Service.jpg)

## Links
 ✔️ [Website](https://initia.xyz/) |
 ✔️ [Blockchain Explorer](https://scan.testnet.initia.xyz/initiation-1/validators) |
 ✔️ [Docs](https://docs.initia.xyz/) |
 ✔️ [GitHub](https://github.com/initia-labs) |
 ✔️ [Validator Tasks](https://initia-xyz.notion.site/The-Initiation-Validator-Tasks-6d88ab0034644473907435662f9285b3) |
 ✔️ [Discord](https://discord.gg/initia)

## Requirements

| Components | Minimum | **Recommended** |
| ------------ | ------------ | ------------ |
| CPU |	4 | 4 |
| RAM	| 8 GB | 16 GB |
| Storage	| 250 GB SSD | 500 GB SSD |

## Network Info 
* Network Chain ID: initiation-1
* Binary: initiad
* Denom: uinit, uusdc
* Working directory: .initia

## Public Services
* **RPC:** https://rpc-t-initia.anatolianteam.com/ 
* **API:** https://api-t-initia.anatolianteam.com/
* **Explorer:** https://cosmos-testnet.anatolianteam.com/Initia

## Peering
You can use peer for fast connection or state sync 
```shell
peers="0aa35c1eaa0933218089b5fb1876e2d46d8f2240@37.60.229.199:27656,ebefecfd04824cfbd674bd4c0fcfd9315aadc210@103.170.155.158:27656,f9c8aa40fc2dad2c379316e33e4e855a0b40b2c7@109.199.109.89:27656,d5519e378247dfb61dfe90652d1fe3e2b3005a5b@65.109.68.190:17956,7e07c1d69e3f726d985614728c601b759f008e52@213.199.57.83:27656,818637c0b4fa7d9ced2283a4853b3f33fc55bb2d@95.111.224.8:26656,57fd42ad4b6d70868e645f17d846d7a6833404a9@194.180.188.44:27656,fc37e22ae9405cf00a775a014366d428376e47b3@37.27.48.77:29656,4701e15068475260a267aabe9b4df8addbb1f992@144.91.79.216:26656,96a259e4cbcde828faed933179784614cd0ea8d1@185.130.226.218:27656,bb37fee58e592edbe8acb627be937d9d17f0ef59@129.146.80.192:27656,6c47bb7c20367964f79755be5bfd4a06c50bae5a@159.89.11.119:27656,7b8ef017be344d202f65628281f5a166dafb6ec0@213.199.34.19:27656,14a53cee4fded2635149228e92b7a752971c40fb@185.130.226.121:27656,616900b4fc44040e4539821fa986ddb85b6f7b87@77.237.238.175:27656,7a98741ef8f7f42113779ccd952635b5a43a7d4f@192.3.128.80:27656,4f9b24bbe1d8a108f4f856d4125a7a6457b1b8cd@142.132.199.231:27656,a1de81504903d857695804f34e5bc1c1b9fc734a@84.46.242.232:27656,9fb117a08ac24032bca52914bb089e0a8df5a239@185.130.227.28:27656,fc935f2f3e3cfebef7d73abc9958a46b308366f4@109.199.122.112:27656,fe19d84d88e615dc100bac74dd743400b4d082d1@195.26.249.58:27656"

sed -i -e "s|^persistent_peers *=.*|persistent_peers = \"$peers\"|" $HOME/.initia/config/config.toml

systemctl restart initiad && journalctl -u initiad -f -o cat
```

The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.initia/config/addrbook.json "https://testnet.anatolianteam.com/initia/addrbook.json"
systemctl restart initiad && journalctl -u initiad -f -o cat
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
