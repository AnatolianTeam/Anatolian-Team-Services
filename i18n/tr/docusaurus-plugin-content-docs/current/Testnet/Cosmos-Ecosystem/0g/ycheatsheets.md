---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, yapay zeka, modüler, zincir, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu evmosd -o cat
```

### Node'u Başlatma
```
systemctl start evmosd
```

### Node'u Durdurma
```
systemctl stop evmosd
```

### Node'u Yeniden Başlatma
```
systemctl restart evmosd
```

### Node Senkronizasyon Durumu
```
evmosd status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
evmosd status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
evmosd tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(evmosd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.evmosd/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
evmosd keys list
```

### Cüzdan Adresini Görme
```
evmosd keys show $0G_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
evmosd keys add $0G_WALLET --recover
```

### Cüzdanı Silme
```
evmosd keys delete $0G_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
evmosd query bank balances $0G_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
evmosd tx bank send $0G_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aevmos
```

### Proposal Oylamasına Katılma
```
evmosd tx gov vote 1 yes --from $0G_WALLET --chain-id=$0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
evmosd tx staking delegate $0G_VALOPER_ADDRESS 100000000aevmos--from=$0G_WALLET --chain-id=$0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
evmosd tx staking unbond $(evmosd keys show $0G_WALLET --bech val -a) 1000000aevmos--from $0G_WALLET --chain-id $0G_CHAIN_ID --fees 3000aevmos-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
evmosd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aevmos--from=$0G_WALLET --chain-id=$0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
evmosd tx distribution withdraw-all-rewards --from=$0G_WALLET --chain-id=$0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
evmosd tx distribution withdraw-rewards $0G_VALOPER_ADDRESS --from=$0G_WALLET --commission --chain-id=$0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
evmosd status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
evmosd tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$0G_CHAIN_ID \
--from=$0G_WALLET \
--gas-prices 0.00001aevmos \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
evmosd tx staking edit-validator --commission-rate "0.02" --moniker=$0G_NODENAME --from $0G_WALLET --chain-id $0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$0G_NODENAME` ve `$0G_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
evmosd tx staking edit-validator \
--moniker=$0G_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$0G_CHAIN_ID \
--from=$0G_WALLET
```

### Validator Detayları
```
evmosd q staking validator $(evmosd keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
evmosd q slashing signing-info $(evmosd tendermint show-validator)
```

### Slashing Parametreleri
```
evmosd q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
evmosd tx slashing unjail --from $0G_WALLET --chain-id $0G_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
evmosd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(evmosd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(evmosd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
evmosd q slashing signing-info $(evmosd tendermint show-validator)
```