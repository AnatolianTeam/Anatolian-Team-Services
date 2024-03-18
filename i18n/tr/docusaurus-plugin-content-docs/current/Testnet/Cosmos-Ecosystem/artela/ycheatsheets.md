---
title: ⤴️ Komutlar
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/artela/img/Artela-Service-Cover.jpg
keywords: [artela, network, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu artelad -o cat
```

### Node'u Başlatma
```
systemctl start artelad
```

### Node'u Durdurma
```
systemctl stop artelad
```

### Node'u Yeniden Başlatma
```
systemctl restart artelad
```

### Node Senkronizasyon Durumu
```
artelad status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
artelad status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
artelad tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(artelad tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.artelad/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
artelad keys list
```

### Cüzdan Adresini Görme
```
artelad keys show $ART_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
artelad keys add $ART_WALLET --recover
```

### Cüzdanı Silme
```
artelad keys delete $ART_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
artelad query bank balances $ART_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
artelad tx bank send $ART_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uself
```

### Proposal Oylamasına Katılma
```
artelad tx gov vote 1 yes --from $ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
artelad tx staking delegate $ART_VALOPER_ADDRESS 100000000uart--from=$ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
artelad tx staking unbond $(artelad keys show $ART_WALLET --bech val -a) 1000000uart--from $ART_WALLET --chain-id $ART_CHAIN_ID --fees 3000uart-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
artelad tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uart--from=$ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
artelad tx distribution withdraw-all-rewards --from=$ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
artelad tx distribution withdraw-rewards $ART_VALOPER_ADDRESS --from=$ART_WALLET --commission --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
artelad status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
artelad tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$ART_CHAIN_ID \
--from=$ART_WALLET \
--gas-prices 0.00001uself \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
artelad tx staking edit-validator --commission-rate "0.02" --moniker=$ART_NODENAME --from $ART_WALLET --chain-id $ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$ART_NODENAME` ve `$ART_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
artelad tx staking edit-validator \
--moniker=$ART_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ART_CHAIN_ID \
--from=$ART_WALLET
```

### Validator Detayları
```
artelad q staking validator $(artelad keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
artelad q slashing signing-info $(artelad tendermint show-validator)
```

### Slashing Parametreleri
```
artelad q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
artelad tx slashing unjail --from $ART_WALLET --chain-id $ART_CHAIN_ID --gas-prices 0.00001uart--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
artelad q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(artelad q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(artelad status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
artelad q slashing signing-info $(artelad tendermint show-validator)
```