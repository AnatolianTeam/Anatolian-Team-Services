---
title: ⤴️ Komutlar
description: Node installation guide.
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu okp4d -o cat
```

### Node'u Başlatma
```
systemctl start okp4d
```

### Node'u Durdurma
```
systemctl stop okp4d
```

### Node'u Yeniden Başlatma
```
systemctl restart okp4d
```

### Node Senkronizasyon Durumu
```
okp4d status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
okp4d status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
okp4d tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(okp4d tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.bablond/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
okp4d keys list
```

### Cüzdan Adresini Görme
```
okp4d keys show $C4E_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
okp4d keys add $C4E_WALLET --recover
```

### Cüzdanı Silme
```
okp4d keys delete $C4E_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
okp4d query bank balances $C4E_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
okp4d tx bank send $C4E_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
okp4d tx gov vote 1 yes --from $C4E_WALLET --chain-id=$C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
okp4d tx staking delegate $C4E_VALOPER_ADDRESS 100000000uc4e --from=$C4E_WALLET --chain-id=$C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
okp4d tx staking unbond $(okp4d keys show $WALLET --bech val -a) 1000000uc4e --from $WALLET --chain-id $C4E_CHAIN_ID --fees 3000uc4e -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
okp4d tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uc4e --from=$C4E_WALLET --chain-id=$C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
okp4d tx distribution withdraw-all-rewards --from=$C4E_WALLET --chain-id=$C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
okp4d tx distribution withdraw-rewards $C4E_VALOPER_ADDRESS --from=$C4E_WALLET --commission --chain-id=$C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
okp4d status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
okp4d tx staking edit-validator \
--moniker=YENI-NODE-ADI\
--chain-id=$C4E_CHAIN_ID\
--from=$C4E_WALLET\
--gas-prices 0.00001uc4e\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
okp4d tx staking edit-validator --commission-rate "0.02" --moniker=$C4E_NODENAME --from $C4E_WALLET --chain-id $C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$C4E_NODENAME` ve `$C4E_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
okp4d tx staking edit-validator \
--moniker=$C4E_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$C4E_CHAIN_ID\
--from=$C4E_WALLET
```

### Validator Detayları
```
okp4d q staking validator $(okp4d keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
okp4d q slashing signing-info $(okp4d tendermint show-validator)
```

### Slashing Parametreleri
```
okp4d q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
okp4d tx slashing unjail --from $C4E_WALLET --chain-id $C4E_CHAIN_ID --gas-prices 0.00001uc4e --gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
okp4d q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(okp4d q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(okp4d status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
okp4d q slashing signing-info $(okp4d tendermint show-validator)
```