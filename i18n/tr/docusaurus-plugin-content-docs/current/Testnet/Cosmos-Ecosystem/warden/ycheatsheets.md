---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: ./img/Warden-Service-Cover.jpg
keywords: [warden, protocol, chain, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu wardend -o cat
```

### Node'u Başlatma
```
systemctl start wardend
```

### Node'u Durdurma
```
systemctl stop wardend
```

### Node'u Yeniden Başlatma
```
systemctl restart wardend
```

### Node Senkronizasyon Durumu
```
wardend status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
wardend status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
wardend tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(wardend tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.warden/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
wardend keys list
```

### Cüzdan Adresini Görme
```
wardend keys show $WARDEN_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
wardend keys add $WARDEN_WALLET --recover
```

### Cüzdanı Silme
```
wardend keys delete $WARDEN_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
wardend query bank balances $WARDEN_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
wardend tx bank send $WARDEN_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000award
```

### Proposal Oylamasına Katılma
```
wardend tx gov vote 1 yes --from $WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
wardend tx staking delegate $WARDEN_VALOPER_ADDRESS 100000000award--from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
wardend tx staking unbond $(wardend keys show $WARDEN_WALLET --bech val -a) 1000000award--from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --fees 3000award-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
wardend tx staking redelegate srcValidatorAddress destValidatorAddress 100000000award--from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
wardend tx distribution withdraw-all-rewards --from=$WARDEN_WALLET --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
wardend tx distribution withdraw-rewards $WARDEN_VALOPER_ADDRESS --from=$WARDEN_WALLET --commission --chain-id=$WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
wardend status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
wardend tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$WARDEN_CHAIN_ID \
--from=$WARDEN_WALLET \
--gas-prices 0.00001award \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
wardend tx staking edit-validator --commission-rate "0.02" --moniker=$WARDEN_NODENAME --from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$WARDEN_NODENAME` ve `$WARDEN_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
wardend tx staking edit-validator \
--moniker=$WARDEN_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$WARDEN_CHAIN_ID \
--from=$WARDEN_WALLET
```

### Validator Detayları
```
wardend q staking validator $(wardend keys show $WARDEN_WALLET --bech val -a)
```

### Jailing Bilgisi
```
wardend q slashing signing-info $(wardend tendermint show-validator)
```

### Slashing Parametreleri
```
wardend q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
wardend tx slashing unjail --from $WARDEN_WALLET --chain-id $WARDEN_CHAIN_ID --gas-prices 0.00001award--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
wardend q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(wardend q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(wardend status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
wardend q slashing signing-info $(wardend tendermint show-validator)
```