---
title: ⤴️ Komutlar
description: Faydalı komutlar.
position: 6
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crossfi/img/CrossFi-Service-Cover.jpg
keywords: [crossfi, network, kurulum, snapshot, statesync, güncelleme]
---
https://services.anatolianteam.com/docs/Testnet/Cosmos-Ecosystem/crossfi/user-guide.md
https://services.anatolianteam.com/tr/docs/Testnet/Cosmos-Ecosystem/crossfi/user-guide.md
# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu crossfid -o cat
```

### Node'u Başlatma
```
systemctl start crossfid
```

### Node'u Durdurma
```
systemctl stop crossfid
```

### Node'u Yeniden Başlatma
```
systemctl restart crossfid
```

### Node Senkronizasyon Durumu
```
crossfid status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
crossfid status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
crossfid tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(crossfid tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.mineplex-chain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
crossfid keys list
```

### Cüzdan Adresini Görme
```
crossfid keys show $CFI_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
crossfid keys add $CFI_WALLET --recover
```

### Cüzdanı Silme
```
crossfid keys delete $CFI_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
crossfid query bank balances $CFI_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
crossfid tx bank send $CFI_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uc4e
```

### Proposal Oylamasına Katılma
```
crossfid tx gov vote 1 yes --from $CFI_WALLET --chain-id=$CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
crossfid tx staking delegate $CFI_VALOPER_ADDRESS 100000000mpx--from=$CFI_WALLET --chain-id=$CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
crossfid tx staking unbond $(crossfid keys show $CFI_WALLET --bech val -a) 1000000mpx--from $CFI_WALLET --chain-id $CFI_CHAIN_ID --fees 3000mpx-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
crossfid tx staking redelegate srcValidatorAddress destValidatorAddress 100000000mpx--from=$CFI_WALLET --chain-id=$CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
crossfid tx distribution withdraw-all-rewards --from=$CFI_WALLET --chain-id=$CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
crossfid tx distribution withdraw-rewards $CFI_VALOPER_ADDRESS --from=$CFI_WALLET --commission --chain-id=$CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
crossfid status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
crossfid tx staking edit-validator \
--new-moniker=YENI-NODE-ADI \
--chain-id=$CFI_CHAIN_ID \
--from=$CFI_WALLET \
--gas-prices 0.00001uc4e \
--gas-adjustment 1.5 \
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
crossfid tx staking edit-validator --commission-rate "0.02" --moniker=$CFI_NODENAME --from $CFI_WALLET --chain-id $CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$CFI_NODENAME` ve `$CFI_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
crossfid tx staking edit-validator \
--moniker=$CFI_NODENAME \
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$CFI_CHAIN_ID \
--from=$CFI_WALLET
```

### Validator Detayları
```
crossfid q staking validator $(crossfid keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
crossfid q slashing signing-info $(crossfid tendermint show-validator)
```

### Slashing Parametreleri
```
crossfid q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
crossfid tx slashing unjail --from $CFI_WALLET --chain-id $CFI_CHAIN_ID --gas-prices 0.00001mpx--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
crossfid q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(crossfid q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(crossfid status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
crossfid q slashing signing-info $(crossfid tendermint show-validator)
```