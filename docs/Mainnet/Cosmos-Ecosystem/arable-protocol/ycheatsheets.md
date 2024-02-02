---
title: ⤴️ Komutlar
description: Node installation guide.
image: ./img/Arable-Service-Cover.jpg
keywords: [arable, protocol, acre, network, installation, snapshot, statesync, update]
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
echo $(acred tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.bablond/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
acred keys list
```

### Cüzdan Adresini Görme
```
acred keys show $ART_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
acred keys add $ART_WALLET --recover
```

### Cüzdanı Silme
```
acred keys delete $ART_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
acred query bank balances $ART_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
acred tx bank send $ART_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
acred tx gov vote 1 yes --from $ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
acred tx staking delegate $ART_VALOPER_ADDRESS 100000000uc4e --from=$ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
acred tx staking unbond $(acred keys show $WALLET --bech val -a) 1000000uc4e --from $WALLET --chain-id $ART_CHAIN_ID --fees 3000uc4e -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
acred tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uc4e --from=$ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
acred tx distribution withdraw-all-rewards --from=$ART_WALLET --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
acred tx distribution withdraw-rewards $ART_VALOPER_ADDRESS --from=$ART_WALLET --commission --chain-id=$ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
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
--moniker=YENI-NODE-ADI\
--chain-id=$ART_CHAIN_ID\
--from=$ART_WALLET\
--gas-prices 0.00001uc4e\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
acred tx staking edit-validator --commission-rate "0.02" --moniker=$ART_NODENAME --from $ART_WALLET --chain-id $ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$ART_NODENAME` ve `$ART_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
acred tx staking edit-validator \
--moniker=$ART_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$ART_CHAIN_ID\
--from=$ART_WALLET
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
acred tx slashing unjail --from $ART_WALLET --chain-id $ART_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
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