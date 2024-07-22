---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: ./img/Empower-Service-Cover.jpg
keywords: [empower, chain, empowerchain, network, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu empowerd -o cat
```

### Node'u Başlatma
```
systemctl start empowerd
```

### Node'u Durdurma
```
systemctl stop empowerd
```

### Node'u Yeniden Başlatma
```
systemctl restart empowerd
```

### Node Senkronizasyon Durumu
```
empowerd status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
empowerd status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
empowerd tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(empowerd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.empowerchain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
empowerd keys list
```

### Cüzdan Adresini Görme
```
empowerd keys show $ART_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
empowerd keys add $ART_WALLET --recover
```

### Cüzdanı Silme
```
empowerd keys delete $ART_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
empowerd query bank balances $ART_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
empowerd tx bank send $ART_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000umpwr
```

### Proposal Oylamasına Katılma
```
empowerd tx gov vote 1 yes --from $ART_WALLET --chain-id=$EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
empowerd tx staking delegate $ART_VALOPER_ADDRESS 100000000umpwr --from=$ART_WALLET --chain-id=$EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
empowerd tx staking unbond $(empowerd keys show $ART_WALLET --bech val -a) 1000000umpwr --from $ART_WALLET --chain-id $EMPOW_ID --fees 3000umpwr -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
empowerd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000umpwr --from=$ART_WALLET --chain-id=$EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
empowerd tx distribution withdraw-all-rewards --from=$ART_WALLET --chain-id=$EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
empowerd tx distribution withdraw-rewards $ART_VALOPER_ADDRESS --from=$ART_WALLET --commission --chain-id=$EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
empowerd status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
empowerd tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$EMPOW_ID \
--from=$ART_WALLET \
--gas-prices 0.00001umpwr \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
empowerd tx staking edit-validator --commission-rate "0.02" --moniker=$ART_NODENAME --from $ART_WALLET --chain-id $EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$ART_NODENAME` ve `$ART_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
empowerd tx staking edit-validator \
--moniker=$ART_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$EMPOW_ID \
--from=$ART_WALLET
```

### Validator Detayları
```
empowerd q staking validator $(empowerd keys show $ART_WALLET --bech val -a)
```

### Jailing Bilgisi
```
empowerd q slashing signing-info $(empowerd tendermint show-validator)
```

### Slashing Parametreleri
```
empowerd q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
empowerd tx slashing unjail --from $ART_WALLET --chain-id $EMPOW_ID --gas-prices 0.00001umpwr --gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
empowerd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(empowerd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(empowerd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
empowerd q slashing signing-info $(empowerd tendermint show-validator)
```