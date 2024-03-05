---
title: ⤴️ Komutlar
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Cosmos-Ecosystem/uptick-network/img/Uptick-Service-Cover.jpg
keywords: [uptick, network, NFT, web3, kurulum, snapshot, statesync, güncelleme]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu uptickd -o cat
```

### Node'u Başlatma
```
systemctl start uptickd
```

### Node'u Durdurma
```
systemctl stop uptickd
```

### Node'u Yeniden Başlatma
```
systemctl restart uptickd
```

### Node Senkronizasyon Durumu
```
uptickd status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
uptickd status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
uptickd tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(uptickd tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.uptickd/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
uptickd keys list
```

### Cüzdan Adresini Görme
```
uptickd keys show $UPTICK_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
uptickd keys add $UPTICK_WALLET --recover
```

### Cüzdanı Silme
```
uptickd keys delete $UPTICK_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
uptickd query bank balances $UPTICK_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
uptickd tx bank send $UPTICK_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
uptickd tx gov vote 1 yes --from $UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
uptickd tx staking delegate $UPTICK_VALOPER_ADDRESS 100000000auptick--from=$UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
uptickd tx staking unbond $(uptickd keys show $WALLET --bech val -a) 1000000auptick--from $WALLET --chain-id $UPTICK_CHAIN_ID --fees 3000auptick-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
uptickd tx staking redelegate srcValidatorAddress destValidatorAddress 100000000auptick--from=$UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
uptickd tx distribution withdraw-all-rewards --from=$UPTICK_WALLET --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
uptickd tx distribution withdraw-rewards $UPTICK_VALOPER_ADDRESS --from=$UPTICK_WALLET --commission --chain-id=$UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
uptickd status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakçer içermemelidir.
```
uptickd tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$UPTICK_CHAIN_ID \
--from=$UPTICK_WALLET \
--gas-prices 0.00001uc4e \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
uptickd tx staking edit-validator --commission-rate "0.02" --moniker=$UPTICK_NODENAME --from $UPTICK_WALLET --chain-id $UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$UPTICK_NODENAME` ve `$UPTICK_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
uptickd tx staking edit-validator \
--moniker=$UPTICK_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$UPTICK_CHAIN_ID \
--from=$UPTICK_WALLET
```

### Validator Detayları
```
uptickd q staking validator $(uptickd keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
uptickd q slashing signing-info $(uptickd tendermint show-validator)
```

### Slashing Parametreleri
```
uptickd q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
uptickd tx slashing unjail --from $UPTICK_WALLET --chain-id $UPTICK_CHAIN_ID --gas-prices 0.00001auptick--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
uptickd q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(uptickd q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(uptickd status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
uptickd q slashing signing-info $(uptickd tendermint show-validator)
```