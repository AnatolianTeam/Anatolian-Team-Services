---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: ./img/Rebus-Service-Cover.jpg
keywords: [rebus, chain, network, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu rebusd -o cat
```

### Node'u Başlatma
```
systemctl start rebusd
```

### Node'u Durdurma
```
systemctl stop rebusd
```

### Node'u Yeniden Başlatma
```
systemctl restart rebusd
```

### Node Senkronizasyon Durumu
```
rebusd status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
rebusd status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
rebusd tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(rebusd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.rebusd/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
rebusd keys list
```

### Cüzdan Adresini Görme
```
rebusd keys show $REBUS_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
rebusd keys add $REBUS_WALLET --recover
```

### Cüzdanı Silme
```
rebusd keys delete $REBUS_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
rebusd query bank balances $REBUS_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
rebusd tx bank send $REBUS_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
rebusd tx gov vote 1 yes --from $REBUS_WALLET --chain-id=$REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
rebusd tx staking delegate $REBUS_VALOPER_ADDRESS 100000000arebus--from=$REBUS_WALLET --chain-id=$REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
rebusd tx staking unbond $(rebusd keys show $REBUS_WALLET --bech val -a) 1000000arebus--from $REBUS_WALLET --chain-id $REBUS_CHAIN_ID --fees 3000arebus-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
rebusd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000arebus--from=$REBUS_WALLET --chain-id=$REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
rebusd tx distribution withdraw-all-rewards --from=$REBUS_WALLET --chain-id=$REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
rebusd tx distribution withdraw-rewards $REBUS_VALOPER_ADDRESS --from=$REBUS_WALLET --commission --chain-id=$REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
rebusd status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
rebusd tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$REBUS_CHAIN_ID \
--from=$REBUS_WALLET \
--gas-prices 0.00001uc4e \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
rebusd tx staking edit-validator --commission-rate "0.02" --moniker=$REBUS_NODENAME --from $REBUS_WALLET --chain-id $REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$REBUS_NODENAME` ve `$REBUS_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
rebusd tx staking edit-validator \
--moniker=$REBUS_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$REBUS_CHAIN_ID \
--from=$REBUS_WALLET
```

### Validator Detayları
```
rebusd q staking validator $(rebusd keys show $REBUS_WALLET --bech val -a)
```

### Jailing Bilgisi
```
rebusd q slashing signing-info $(rebusd tendermint show-validator)
```

### Slashing Parametreleri
```
rebusd q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
rebusd tx slashing unjail --from $REBUS_WALLET --chain-id $REBUS_CHAIN_ID --gas-prices 0.00001arebus--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
rebusd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(rebusd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(rebusd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
rebusd q slashing signing-info $(rebusd tendermint show-validator)
```