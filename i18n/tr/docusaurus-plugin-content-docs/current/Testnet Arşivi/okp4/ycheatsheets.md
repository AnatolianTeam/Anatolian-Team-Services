---
title: ⤴️ Komutlar
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/okp4/img/OKP4-Service-Cover.jpg
keywords: [okp4, open, knowledge, protocol, kurulum, snapshot, statesync, güncelleme]
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
echo $(okp4d tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.okp4d/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
okp4d keys list
```

### Cüzdan Adresini Görme
```
okp4d keys show $OKP4_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
okp4d keys add $OKP4_WALLET --recover
```

### Cüzdanı Silme
```
okp4d keys delete $OKP4_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
okp4d query bank balances $OKP4_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
okp4d tx bank send $OKP4_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
okp4d tx gov vote 1 yes --from $OKP4_WALLET --chain-id=$OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
okp4d tx staking delegate $OKP4_VALOPER_ADDRESS 100000000uknow--from=$OKP4_WALLET --chain-id=$OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
okp4d tx staking unbond $(okp4d keys show $OKP4_WALLET --bech val -a) 1000000uknow--from $OKP4_WALLET --chain-id $OKP4_CHAIN_ID --fees 3000uknow-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
okp4d tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uknow--from=$OKP4_WALLET --chain-id=$OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
okp4d tx distribution withdraw-all-rewards --from=$OKP4_WALLET --chain-id=$OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
okp4d tx distribution withdraw-rewards $OKP4_VALOPER_ADDRESS --from=$OKP4_WALLET --commission --chain-id=$OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
okp4d status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
okp4d tx staking edit-validator \
--moniker=YENI-NODE-ADI\
--chain-id=$OKP4_CHAIN_ID\
--from=$OKP4_WALLET\
--gas-prices 0.00001uc4e\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
okp4d tx staking edit-validator --commission-rate "0.02" --moniker=$OKP4_NODENAME --from $OKP4_WALLET --chain-id $OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$OKP4_NODENAME` ve `$OKP4_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
okp4d tx staking edit-validator \
--moniker=$OKP4_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$OKP4_CHAIN_ID\
--from=$OKP4_WALLET
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
okp4d tx slashing unjail --from $OKP4_WALLET --chain-id $OKP4_CHAIN_ID --gas-prices 0.00001uknow--gas-adjustment 1.5 --gas auto -y
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