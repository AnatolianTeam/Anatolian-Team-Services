---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/jackal-protocol/img/Jackal-Service-Cover.jpg
keywords: [jackal, protocol, canine, network, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu canined -o cat
```

### Node'u Başlatma
```
systemctl start canined
```

### Node'u Durdurma
```
systemctl stop canined
```

### Node'u Yeniden Başlatma
```
systemctl restart canined
```

### Node Senkronizasyon Durumu
```
canined status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
canined status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
canined tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(canined tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.canine/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
canined keys list
```

### Cüzdan Adresini Görme
```
canined keys show $JACKAL_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
canined keys add $JACKAL_WALLET --recover
```

### Cüzdanı Silme
```
canined keys delete $JACKAL_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
canined query bank balances $JACKAL_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
canined tx bank send $JACKAL_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
canined tx gov vote 1 yes --from $JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
canined tx staking delegate $JACKAL_VALOPER_ADDRESS 100000000ujkl--from=$JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
canined tx staking unbond $(canined keys show $JACKAL_WALLET --bech val -a) 1000000ujkl--from $JACKAL_WALLET --chain-id $JACKAL_CHAIN_ID --fees 3000ujkl-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
canined tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ujkl--from=$JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
canined tx distribution withdraw-all-rewards --from=$JACKAL_WALLET --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
canined tx distribution withdraw-rewards $JACKAL_VALOPER_ADDRESS --from=$JACKAL_WALLET --commission --chain-id=$JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
canined status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
canined tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$JACKAL_CHAIN_ID \
--from=$JACKAL_WALLET \
--gas-prices 0.00001uc4e \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
canined tx staking edit-validator --commission-rate "0.02" --moniker=$JACKAL_NODENAME --from $JACKAL_WALLET --chain-id $JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$JACKAL_NODENAME` ve `$JACKAL_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
canined tx staking edit-validator \
--moniker=$JACKAL_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$JACKAL_CHAIN_ID \
--from=$JACKAL_WALLET
```

### Validator Detayları
```
canined q staking validator $(canined keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
canined q slashing signing-info $(canined tendermint show-validator)
```

### Slashing Parametreleri
```
canined q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
canined tx slashing unjail --from $JACKAL_WALLET --chain-id $JACKAL_CHAIN_ID --gas-prices 0.00001ujkl--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
canined q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(canined q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(canined status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
canined q slashing signing-info $(canined tendermint show-validator)
```