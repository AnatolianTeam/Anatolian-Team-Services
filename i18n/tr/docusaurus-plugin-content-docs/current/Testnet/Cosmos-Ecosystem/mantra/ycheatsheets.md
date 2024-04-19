---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: ./img/Mantra-Service-Cover.jpg
position: 5
keywords: [mantra, chain, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri

## Logları Kontrol Etme 
```
journalctl -fu mantrachaind -o cat
```

### Node'u Başlatma
```
systemctl start mantrachaind
```

### Node'u Durdurma
```
systemctl stop mantrachaind
```

### Node'u Yeniden Başlatma
```
systemctl restart mantrachaind
```

### Node Senkronizasyon Durumu
```
mantrachaind status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
mantrachaind status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
mantrachaind tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(mantrachaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.mantrachain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
mantrachaind keys list
```

### Cüzdan Adresini Görme
```
mantrachaind keys show $BBN_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
mantrachaind keys add $BBN_WALLET --recover
```

### Cüzdanı Silme
```
mantrachaind keys delete $BBN_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
mantrachaind query bank balances $BBN_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
mantrachaind tx bank send $BBN_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ubbn
```

### Proposal Oylamasına Katılma
```
mantrachaind tx gov vote 1 yes --from $BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
mantrachaind tx staking delegate $BBN_VALOPER_ADDRESS 100000000ubbn --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
mantrachaind tx staking unbond $(mantrachaind keys show $BBN_WALLET --bech val -a) 1000000ubbn --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --fees 3000ubbn -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
mantrachaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ubbn --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
mantrachaind tx distribution withdraw-all-rewards --from=$BBN_WALLET --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
mantrachaind tx distribution withdraw-rewards $BBN_VALOPER_ADDRESS --from=$BBN_WALLET --commission --chain-id=$BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
mantrachaind status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
mantrachaind tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$BBN_CHAIN_ID \
--from=$BBN_WALLET \
--gas-prices 0.00001ubbn \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
mantrachaind tx staking edit-validator --commission-rate "0.02" --moniker=$BBN_NODENAME --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$BBN_NODENAME` ve `$BBN_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
mantrachaind tx staking edit-validator \
--moniker=$BBN_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$BBN_CHAIN_ID \
--from=$BBN_WALLET
```

### Validator Detayları
```
mantrachaind q staking validator $(mantrachaind keys show $BBN_WALLET --bech val -a)
```

### Jailing Bilgisi
```
mantrachaind q slashing signing-info $(mantrachaind tendermint show-validator)
```

### Slashing Parametreleri
```
mantrachaind q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
mantrachaind tx slashing unjail --from $BBN_WALLET --chain-id $BBN_CHAIN_ID --gas-prices 0.00001ubbn --gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
mantrachaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(mantrachaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(mantrachaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
mantrachaind q slashing signing-info $(mantrachaind tendermint show-validator)
```
