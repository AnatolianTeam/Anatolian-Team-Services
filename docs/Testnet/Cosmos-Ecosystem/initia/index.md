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
 ✔️ [Blockchain Explorer](https://cosmos-testnet.anatolianteam.com/Initia) |
 ✔️ [Docs](https://docs.initia.xyz/) |
 ✔️ [GitHub](https://github.com/initia-labs) |
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
PEERS="848abf8efb7e91adeb526f15ac9561d87d6a2325@84.46.255.1:17956,00bcac6e600b1af9c00b358e7da2426b60bb3c53@155.133.22.76:53456,ae241bcfd5fffef3173c5bd4c72b0b384db5db88@49.13.213.52:26656,e3ac92ce5b790c76ce07c5fa3b257d83a517f2f6@178.18.251.146:30656,98f0f8e9209aa0a8abad39b94b0d2663a3be24ec@95.216.70.202:26656,2f7f232a67544d604773dab3f92fb51361b9d0d0@65.109.236.170:17656,1813a8de79d48674f184553800122f7bf794cd57@213.199.52.16:26656,0ca1eb793296bda62e71c515b42027ae2a27c5de@43.134.3.197:27656,b366c8e689d41e05c651e9a2f5474a82196f04a1@5.252.53.3:26656,2bc4ca9a821b56e5786378a4167c57ef6e0d174f@167.235.200.43:17956,5f934bd7a9d60919ee67968d72405573b7b14ed0@65.21.202.124:29656,70771b798b705a5fe8ae85c0b53d38208c8fa5f4@185.84.224.125:25756,132018cac831b576d2f3662fd528fe9120e3d0a2@65.108.254.0:26656,a4d7ba8e1b9acd0cd5c3bdf23a101e2d45437292@38.242.198.33:17956,6c8798b73339b11c1f214c9ee1ee6aa999439ad0@161.97.141.179:53456,cf434216cedcd589c59197ab11a92c251e0e542a@139.59.247.242:26656,670d532665a0f93ccbba6d132109c207301d6353@194.163.170.113:17956,1f6633bc18eb06b6c0cab97d72c585a6d7a207bc@65.109.59.22:25756,e6a35b95ec73e511ef352085cb300e257536e075@37.252.186.213:26656,591cf89ddadedc89df0973a3d2a7bf5a9b5fa775@95.217.228.108:17956,e3679e68616b2cd66908c460d0371ac3ed7795aa@176.34.17.102:26656,32f59b799e6e840fb47b363ba59e45c3519b3a5f@136.243.104.103:24556,e403dbcc37577f5e97a31e24fbc830749e3cb472@5.161.231.91:17956,150948b84e8b89d086dbb90dbfbf6bcb4664ce1f@109.199.111.61:26656,b78f2ebe57457d387740986a4bf450db4b9625d0@51.79.82.227:16656,684ccc935fce94b3b60d0eda94a61a8e01ca12b0@167.172.69.26:17956,0c730824973ca31701a27fa630225eeca90a8ba6@149.102.135.91:53456,27f9bf7d045a08727615af907b7ad750be455a64@194.5.152.216:17956,028999a1696b45863ff84df12ebf2aebc5d40c2d@37.27.48.77:26656,d5b1df79a57c73d4191de973846671b57da68cdf@194.163.130.254:26656"

sed -i -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" "$HOME/.initia/config/config.toml"

sudo systemctl restart initiad && sudo journalctl -u initiad -f -o cat
```

The address book is updated once three hour. You can use it for quick launch.
```shell
wget -O $HOME/.initia/config/addrbook.json "https://testnet.anatolianteam.com/initia/addrbook.json"
```

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```