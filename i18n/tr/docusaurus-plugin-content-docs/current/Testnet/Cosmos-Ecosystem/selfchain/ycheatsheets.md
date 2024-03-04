---
title: ⤴️ Komutlar
description: Faydalı komutlar.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/selfchain/img/SelfChain-Service-Cover.jpg
keywords: [selfchain, self, chain, kurulum, snapshot, statesync, güncelleme]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri 

## Logları Kontrol Etme 
```
journalctl -fu selfchaind -o cat
```

### Node'u Başlatma
```
systemctl start selfchaind
```

### Node'u Durdurma
```
systemctl stop selfchaind
```

### Node'u Yeniden Başlatma
```
systemctl restart selfchaind
```

### Node Senkronizasyon Durumu
```
selfchaind status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
selfchaind status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
selfchaind tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(selfchaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.selfchain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
selfchaind keys list
```

### Cüzdan Adresini Görme
```
selfchaind keys show $SELF_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
selfchaind keys add $SELF_WALLET --recover
```

### Cüzdanı Silme
```
selfchaind keys delete $SELF_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
selfchaind query bank balances $SELF_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
selfchaind tx bank send $SELF_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000uself
```

### Proposal Oylamasına Katılma
```
selfchaind tx gov vote 1 yes --from $SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
selfchaind tx staking delegate $SELF_VALOPER_ADDRESS 100000000uself--from=$SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
selfchaind tx staking unbond $(selfchaind keys show $SELF_WALLET --bech val -a) 1000000uself--from $SELF_WALLET --chain-id $SELF_CHAIN_ID --fees 3000uself-y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
selfchaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000uself--from=$SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
selfchaind tx distribution withdraw-all-rewards --from=$SELF_WALLET --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
selfchaind tx distribution withdraw-rewards $SELF_VALOPER_ADDRESS --from=$SELF_WALLET --commission --chain-id=$SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
selfchaind status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
selfchaind tx staking edit-validator \
--new-moniker=YENI-NODE-ADI\
--chain-id=$SELF_CHAIN_ID\
--from=$SELF_WALLET\
--gas-prices 0.00001uself\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
selfchaind tx staking edit-validator --commission-rate "0.02" --moniker=$SELF_NODENAME --from $SELF_WALLET --chain-id $SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$SELF_NODENAME` ve `$SELF_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
selfchaind tx staking edit-validator \
--moniker=$SELF_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$SELF_CHAIN_ID\
--from=$SELF_WALLET
```

### Validator Detayları
```
selfchaind q staking validator $(selfchaind keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
selfchaind q slashing signing-info $(selfchaind tendermint show-validator)
```

### Slashing Parametreleri
```
selfchaind q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
selfchaind tx slashing unjail --from $SELF_WALLET --chain-id $SELF_CHAIN_ID --gas-prices 0.00001uself--gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
selfchaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(selfchaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(selfchaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
selfchaind q slashing signing-info $(selfchaind tendermint show-validator)
```