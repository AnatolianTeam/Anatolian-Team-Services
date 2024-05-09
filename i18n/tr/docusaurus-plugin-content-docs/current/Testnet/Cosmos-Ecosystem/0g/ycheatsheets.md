---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: ./img/0G-Service-Cover.jpg
keywords: [0g, ai, yapay zeka, modüler, zincir, kurulum, snapshot, statesync, güncelleme]
slug: cheatsheets
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu 0gchaind -o cat
```

### Node'u Başlatma
```
systemctl start 0gchaind
```

### Node'u Durdurma
```
systemctl stop 0gchaind
```

### Node'u Yeniden Başlatma
```
systemctl restart 0gchaind
```

### Node Senkronizasyon Durumu
```
0gchaind status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
0gchaind status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
0gchaind tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(0gchaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.0gchaind/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
0gchaind keys list
```

### Cüzdan Adresini Görme
```
0gchaind keys show $OG_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
0gchaind keys add $OG_WALLET --recover
```

### Cüzdanı Silme
```
0gchaind keys delete $OG_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
0gchaind query bank balances $OG_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
0gchaind tx bank send $OG_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000aevmos
```

### Proposal Oylamasına Katılma
```
0gchaind tx gov vote 1 yes --from $OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
0gchaind tx staking delegate $OG_VALOPER_ADDRESS 100000000aevmos--from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
0gchaind tx staking unbond $(0gchaind keys show $OG_WALLET --bech val -a) 1000000aevmos--from $OG_WALLET --chain-id $OG_CHAIN_ID --fees 3000aevmos-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
0gchaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000aevmos--from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
0gchaind tx distribution withdraw-all-rewards --from=$OG_WALLET --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
0gchaind tx distribution withdraw-rewards $OG_VALOPER_ADDRESS --from=$OG_WALLET --commission --chain-id=$OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
0gchaind status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
0gchaind tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$OG_CHAIN_ID \
--from=$OG_WALLET \
--gas-prices 0.00001aevmos \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
0gchaind tx staking edit-validator --commission-rate "0.02" --moniker=$OG_NODENAME --from $OG_WALLET --chain-id $OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$OG_NODENAME` ve `$OG_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
0gchaind tx staking edit-validator \
--moniker=$OG_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$OG_CHAIN_ID \
--from=$OG_WALLET
```

### Validator Detayları
```
0gchaind q staking validator $(0gchaind keys show $OG_WALLET --bech val -a)
```

### Jailing Bilgisi
```
0gchaind q slashing signing-info $(0gchaind tendermint show-validator)
```

### Slashing Parametreleri
```
0gchaind q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
0gchaind tx slashing unjail --from $OG_WALLET --chain-id $OG_CHAIN_ID --gas-prices 0.00001aevmos--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
0gchaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(0gchaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(0gchaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
0gchaind q slashing signing-info $(0gchaind tendermint show-validator)
```