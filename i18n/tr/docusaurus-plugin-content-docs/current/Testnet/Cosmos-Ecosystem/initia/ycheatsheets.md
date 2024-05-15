---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: ./img/Initia-Service-Cover.jpg
keywords: [initia, chain, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu initiad -o cat
```

### Node'u Başlatma
```
systemctl start initiad
```

### Node'u Durdurma
```
systemctl stop initiad
```

### Node'u Yeniden Başlatma
```
systemctl restart initiad
```

### Node Senkronizasyon Durumu
```
initiad status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
initiad status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
initiad tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(initiad tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.initia/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
initiad keys list
```

### Cüzdan Adresini Görme
```
initiad keys show $INITIA_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
initiad keys add $INITIA_WALLET --recover
```

### Cüzdanı Silme
```
initiad keys delete $INITIA_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
initiad query bank balances $INITIA_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
initiad tx bank send $INITIA_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uusdc
```

### Proposal Oylamasına Katılma
```
initiad tx gov vote 1 yes --from $INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
initiad tx mstaking delegate $INITIA_VALOPER_ADDRESS 100000000uusdc--from=$INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
initiad tx mstaking unbond $(initiad keys show $INITIA_WALLET --bech val -a) 1000000uusdc--from $INITIA_WALLET --chain-id $INITIA_CHAIN_ID --fees 3000uusdc-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
initiad tx mstaking redelegate srcValidatorAddress destValidatorAddress 100000000uusdc--from=$INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
initiad tx distribution withdraw-all-rewards --from=$INITIA_WALLET --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
initiad tx distribution withdraw-rewards $INITIA_VALOPER_ADDRESS --from=$INITIA_WALLET --commission --chain-id=$INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
initiad status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
initiad tx mstaking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$INITIA_CHAIN_ID \
--from=$INITIA_WALLET \
--gas-prices 0.00001uusdc \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
initiad tx mstaking edit-validator --commission-rate "0.02" --moniker=$INITIA_NODENAME --from $INITIA_WALLET --chain-id $INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$INITIA_NODENAME` ve `$INITIA_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
initiad tx mstaking edit-validator \
--moniker=$INITIA_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$INITIA_CHAIN_ID \
--from=$INITIA_WALLET
```

### Validator Detayları
```
initiad q mstaking validator $(initiad keys show $INITIA_WALLET --bech val -a)
```

### Jailing Bilgisi
```
initiad q slashing signing-info $(initiad tendermint show-validator)
```

### Slashing Parametreleri
```
initiad q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
initiad tx slashing unjail --from $INITIA_WALLET --chain-id $INITIA_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
initiad q mstaking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(initiad q mstaking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(initiad status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
initiad q slashing signing-info $(initiad tendermint show-validator)
```