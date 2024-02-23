---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/stride/img/Stride-Service-Cover.jpg
keywords: [stride, zone, network, kurulum, snapshot, statesync, güncelleme]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu strided -o cat
```

### Node'u Başlatma
```
systemctl start strided
```

### Node'u Durdurma
```
systemctl stop strided
```

### Node'u Yeniden Başlatma
```
systemctl restart strided
```

### Node Senkronizasyon Durumu
```
strided status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
strided status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
strided tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(strided tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.stride/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
strided keys list
```

### Cüzdan Adresini Görme
```
strided keys show $STRD_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
strided keys add $STRD_WALLET --recover
```

### Cüzdanı Silme
```
strided keys delete $STRD_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
strided query bank balances $STRD_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
strided tx bank send $STRD_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
strided tx gov vote 1 yes --from $STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
strided tx staking delegate $STRD_VALOPER_ADDRESS 100000000ustrd--from=$STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
strided tx staking unbond $(strided keys show $STRD_WALLET --bech val -a) 1000000ustrd--from $STRD_WALLET --chain-id $STRD_CHAIN_ID --fees 3000ustrd-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
strided tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ustrd--from=$STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
strided tx distribution withdraw-all-rewards --from=$STRD_WALLET --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
strided tx distribution withdraw-rewards $STRD_VALOPER_ADDRESS --from=$STRD_WALLET --commission --chain-id=$STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
strided status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
strided tx staking edit-validator \
--moniker=YENI-NODE-ADI\
--chain-id=$STRD_CHAIN_ID\
--from=$STRD_WALLET\
--gas-prices 0.00001uc4e\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
strided tx staking edit-validator --commission-rate "0.02" --moniker=$STRD_NODENAME --from $STRD_WALLET --chain-id $STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$STRD_NODENAME` ve `$STRD_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
strided tx staking edit-validator \
--moniker=$STRD_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$STRD_CHAIN_ID\
--from=$STRD_WALLET
```

### Validator Detayları
```
strided q staking validator $(strided keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
strided q slashing signing-info $(strided tendermint show-validator)
```

### Slashing Parametreleri
```
strided q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
strided tx slashing unjail --from $STRD_WALLET --chain-id $STRD_CHAIN_ID --gas-prices 0.00001ustrd--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
strided q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(strided q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(strided status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
strided q slashing signing-info $(strided tendermint show-validator)
```