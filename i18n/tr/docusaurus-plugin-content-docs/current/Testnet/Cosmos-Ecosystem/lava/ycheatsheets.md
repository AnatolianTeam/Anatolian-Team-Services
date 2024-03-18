---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/lava/img/Lava-Service-Cover.jpg
keywords: [lava, network, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu lavad -o cat
```

### Node'u Başlatma
```
systemctl start lavad
```

### Node'u Durdurma
```
systemctl stop lavad
```

### Node'u Yeniden Başlatma
```
systemctl restart lavad
```

### Node Senkronizasyon Durumu
```
lavad status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
lavad status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
lavad tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(lavad tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.lava/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
lavad keys list
```

### Cüzdan Adresini Görme
```
lavad keys show $LAVA_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
lavad keys add $LAVA_WALLET --recover
```

### Cüzdanı Silme
```
lavad keys delete $LAVA_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
lavad query bank balances $LAVA_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
lavad tx bank send $LAVA_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uself
```

### Proposal Oylamasına Katılma
```
lavad tx gov vote 1 yes --from $LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
lavad tx staking delegate $LAVA_VALOPER_ADDRESS 100000000ulava--from=$LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
lavad tx staking unbond $(lavad keys show $LAVA_WALLET --bech val -a) 1000000ulava--from $LAVA_WALLET --chain-id $LAVA_CHAIN_ID --fees 3000ulava-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
lavad tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ulava--from=$LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
lavad tx distribution withdraw-all-rewards --from=$LAVA_WALLET --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
lavad tx distribution withdraw-rewards $LAVA_VALOPER_ADDRESS --from=$LAVA_WALLET --commission --chain-id=$LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
lavad status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
lavad tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$LAVA_CHAIN_ID \
--from=$LAVA_WALLET \
--gas-prices 0.00001uself \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
lavad tx staking edit-validator --commission-rate "0.02" --moniker=$LAVA_NODENAME --from $LAVA_WALLET --chain-id $LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$LAVA_NODENAME` ve `$LAVA_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
lavad tx staking edit-validator \
--moniker=$LAVA_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$LAVA_CHAIN_ID \
--from=$LAVA_WALLET
```

### Validator Detayları
```
lavad q staking validator $(lavad keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
lavad q slashing signing-info $(lavad tendermint show-validator)
```

### Slashing Parametreleri
```
lavad q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
lavad tx slashing unjail --from $LAVA_WALLET --chain-id $LAVA_CHAIN_ID --gas-prices 0.00001ulava--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
lavad q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(lavad q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(lavad status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
lavad q slashing signing-info $(lavad tendermint show-validator)
```