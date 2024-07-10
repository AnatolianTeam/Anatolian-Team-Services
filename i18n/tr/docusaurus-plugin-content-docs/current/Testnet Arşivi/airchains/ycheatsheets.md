---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: ./img/Airchains-Service-Cover.jpg
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
journalctl -fu junctiond -o cat
```

### Node'u Başlatma
```
systemctl start junctiond
```

### Node'u Durdurma
```
systemctl stop junctiond
```

### Node'u Yeniden Başlatma
```
systemctl restart junctiond
```

### Node Senkronizasyon Durumu
```
junctiond status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
junctiond status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
junctiond tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(junctiond tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.junction/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
junctiond keys list
```

### Cüzdan Adresini Görme
```
junctiond keys show $AIRCHAINS_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
junctiond keys add $AIRCHAINS_WALLET --recover
```

### Cüzdanı Silme
```
junctiond keys delete $AIRCHAINS_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
junctiond query bank balances $AIRCHAINS_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
junctiond tx bank send $AIRCHAINS_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uusdc
```

### Proposal Oylamasına Katılma
```
junctiond tx gov vote 1 yes --from $AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
junctiond tx mstaking delegate $AIRCHAINS_VALOPER_ADDRESS 100000000uusdc--from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
junctiond tx mstaking unbond $(junctiond keys show $AIRCHAINS_WALLET --bech val -a) 1000000uusdc--from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --fees 3000uusdc-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
junctiond tx mstaking redelegate srcValidatorAddress destValidatorAddress 100000000uusdc--from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
junctiond tx distribution withdraw-all-rewards --from=$AIRCHAINS_WALLET --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
junctiond tx distribution withdraw-rewards $AIRCHAINS_VALOPER_ADDRESS --from=$AIRCHAINS_WALLET --commission --chain-id=$AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
junctiond status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
junctiond tx mstaking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$AIRCHAINS_CHAIN_ID \
--from=$AIRCHAINS_WALLET \
--node=https://rpc-t-initia.anatolianteam.com:443 \
--gas-prices=11uinit \
--gas-adjustment=1.5 \
--gas=auto \
--yes
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
junctiond tx mstaking edit-validator --commission-rate "0.02" --moniker=$AIRCHAINS_NODENAME --from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$AIRCHAINS_NODENAME` ve `$AIRCHAINS_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
junctiond tx mstaking edit-validator \
--moniker=$AIRCHAINS_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$AIRCHAINS_CHAIN_ID \
--from=$AIRCHAINS_WALLET
--node=https://rpc-t-initia.anatolianteam.com:443 \
--gas-prices=11uinit \
--gas-adjustment=1.5 \
--gas=auto \
--yes
```

### Validator Detayları
```
junctiond q mstaking validator $(junctiond keys show $AIRCHAINS_WALLET --bech val -a)
```

### Jailing Bilgisi
```
junctiond q slashing signing-info $(junctiond tendermint show-validator)
```

### Slashing Parametreleri
```
junctiond q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
junctiond tx slashing unjail --from $AIRCHAINS_WALLET --chain-id $AIRCHAINS_CHAIN_ID --gas-prices 0.00001uusdc--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
junctiond q mstaking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(junctiond q mstaking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(junctiond status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
junctiond q slashing signing-info $(junctiond tendermint show-validator)
```