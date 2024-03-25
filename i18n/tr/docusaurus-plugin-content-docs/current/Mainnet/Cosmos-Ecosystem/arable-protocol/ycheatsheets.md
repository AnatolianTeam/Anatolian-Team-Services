---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: ./img/Arable-Service-Cover.jpg
keywords: [arable, protocol, network, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu acred -o cat
```

### Node'u Başlatma
```
systemctl start acred
```

### Node'u Durdurma
```
systemctl stop acred
```

### Node'u Yeniden Başlatma
```
systemctl restart acred
```

### Node Senkronizasyon Durumu
```
acred status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
acred status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
acred tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(acred tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.acred/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
acred keys list
```

### Cüzdan Adresini Görme
```
acred keys show $ACRE_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
acred keys add $ACRE_WALLET --recover
```

### Cüzdanı Silme
```
acred keys delete $ACRE_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
acred query bank balances $ACRE_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
acred tx bank send $ACRE_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
acred tx gov vote 1 yes --from $ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
acred tx staking delegate $ACRE_VALOPER_ADDRESS 100000000aacre--from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
acred tx staking unbond $(acred keys show $ACRE_WALLET --bech val -a) 1000000aacre--from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --fees 3000aacre-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
acred tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aacre--from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
acred tx distribution withdraw-all-rewards --from=$ACRE_WALLET --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
acred tx distribution withdraw-rewards $ACRE_VALOPER_ADDRESS --from=$ACRE_WALLET --commission --chain-id=$ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
acred status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
acred tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$ACRE_CHAIN_ID \
--from=$ACRE_WALLET \
--gas-prices 0.00001uc4e \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
acred tx staking edit-validator --commission-rate "0.02" --moniker=$ACRE_NODENAME --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$ACRE_NODENAME` ve `$ACRE_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
acred tx staking edit-validator \
--moniker=$ACRE_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ACRE_CHAIN_ID \
--from=$ACRE_WALLET
```

### Validator Detayları
```
acred q staking validator $(acred keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
acred q slashing signing-info $(acred tendermint show-validator)
```

### Slashing Parametreleri
```
acred q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
acred tx slashing unjail --from $ACRE_WALLET --chain-id $ACRE_CHAIN_ID --gas-prices 0.00001aacre--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
acred q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(acred q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(acred status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
acred q slashing signing-info $(acred tendermint show-validator)
```