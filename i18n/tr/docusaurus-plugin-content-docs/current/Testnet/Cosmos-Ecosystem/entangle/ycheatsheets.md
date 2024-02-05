---
title: ⤴️ Komutlar
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/entangle/img/Entangle-Service-Cover.jpg
keywords: [entangle, network, kurulum, snapshot, statesync, güncelleme]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu entangled -o cat
```

### Node'u Başlatma
```
systemctl start entangled
```

### Node'u Durdurma
```
systemctl stop entangled
```

### Node'u Yeniden Başlatma
```
systemctl restart entangled
```

### Node Senkronizasyon Durumu
```
entangled status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
entangled status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
entangled tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(entangled tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.entangled/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
entangled keys list
```

### Cüzdan Adresini Görme
```
entangled keys show $ENT_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
entangled keys add $ENT_WALLET --recover
```

### Cüzdanı Silme
```
entangled keys delete $ENT_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
entangled query bank balances $ENT_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
entangled tx bank send $ENT_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
entangled tx gov vote 1 yes --from $ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
entangled tx staking delegate $ENT_VALOPER_ADDRESS 100000000aNGL--from=$ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
entangled tx staking unbond $(entangled keys show $WALLET --bech val -a) 1000000aNGL--from $WALLET --chain-id $ENT_CHAIN_ID --fees 3000aNGL-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
entangled tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aNGL--from=$ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
entangled tx distribution withdraw-all-rewards --from=$ENT_WALLET --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
entangled tx distribution withdraw-rewards $ENT_VALOPER_ADDRESS --from=$ENT_WALLET --commission --chain-id=$ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
entangled status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
entangled tx staking edit-validator \
--moniker=YENI-NODE-ADI\
--chain-id=$ENT_CHAIN_ID\
--from=$ENT_WALLET\
--gas-prices 0.00001uc4e\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
entangled tx staking edit-validator --commission-rate "0.02" --moniker=$ENT_NODENAME --from $ENT_WALLET --chain-id $ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$ENT_NODENAME` ve `$ENT_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
entangled tx staking edit-validator \
--moniker=$ENT_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ENT_CHAIN_ID\
--from=$ENT_WALLET
```

### Validator Detayları
```
entangled q staking validator $(entangled keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
entangled q slashing signing-info $(entangled tendermint show-validator)
```

### Slashing Parametreleri
```
entangled q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
entangled tx slashing unjail --from $ENT_WALLET --chain-id $ENT_CHAIN_ID --gas-prices 0.00001aNGL--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
entangled q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(entangled q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(entangled status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
entangled q slashing signing-info $(entangled tendermint show-validator)
```