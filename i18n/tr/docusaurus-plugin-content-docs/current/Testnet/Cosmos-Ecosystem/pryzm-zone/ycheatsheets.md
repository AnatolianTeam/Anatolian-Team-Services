---
title: ⤴️ Komutlar
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/pryzm-zone/img/Pryzm-Service-Cover.jpg
keywords: [Pryzm, node, protocol, kurulum, snapshot, statesync, güncelleme]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri

## Logları Kontrol Etme 
```
journalctl -fu pryzmd -o cat
```

### Node'u Başlatma
```
systemctl start pryzmd
```

### Node'u Durdurma
```
systemctl stop pryzmd
```

### Node'u Yeniden Başlatma
```
systemctl restart pryzmd
```

### Node Senkronizasyon Durumu
```
pryzmd status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
pryzmd status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
pryzmd tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(pryzmd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.pryzm/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
pryzmd keys list
```

### Cüzdan Adresini Görme
```
pryzmd keys show $PRYZM_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
pryzmd keys add $PRYZM_WALLET --recover
```

### Cüzdanı Silme
```
pryzmd keys delete $PRYZM_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
pryzmd query bank balances $PRYZM_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
pryzmd tx bank send $PRYZM_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000upryzm
```

### Proposal Oylamasına Katılma
```
pryzmd tx gov vote 1 yes --from $PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
pryzmd tx staking delegate $PRYZM_VALOPER_ADDRESS 100000000upryzm --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
pryzmd tx staking unbond $(pryzmd keys show $PRYZM_WALLET --bech val -a) 1000000upryzm --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --fees 3000upryzm -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
pryzmd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000upryzm --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
pryzmd tx distribution withdraw-all-rewards --from=$PRYZM_WALLET --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
pryzmd tx distribution withdraw-rewards $PRYZM_VALOPER_ADDRESS --from=$PRYZM_WALLET --commission --chain-id=$PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
pryzmd status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
pryzmd tx staking edit-validator \
--new-moniker=YENI-NODE-ADI\
--chain-id=$PRYZM_CHAIN_ID\
--from=$PRYZM_WALLET\
--gas-prices 0.00001upryzm\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
pryzmd tx staking edit-validator --commission-rate "0.02" --moniker=$PRYZM_NODENAME --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$PRYZM_NODENAME` ve `$PRYZM_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
pryzmd tx staking edit-validator \
--moniker=$PRYZM_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$PRYZM_CHAIN_ID\
--from=$PRYZM_WALLET
```

### Validator Detayları
```
pryzmd q staking validator $(pryzmd keys show $PRYZM_WALLET --bech val -a)
```

### Jailing Bilgisi
```
pryzmd q slashing signing-info $(pryzmd tendermint show-validator)
```

### Slashing Parametreleri
```
pryzmd q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
pryzmd tx slashing unjail --from $PRYZM_WALLET --chain-id $PRYZM_CHAIN_ID --gas-prices 0.00001upryzm --gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
pryzmd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(pryzmd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(pryzmd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
pryzmd q slashing signing-info $(pryzmd tendermint show-validator)
```
