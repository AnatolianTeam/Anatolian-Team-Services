---
title: ⤴️ Komutlar
description: Node installation guide.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Testnet/Cosmos-Ecosystem/crowdcontrol/img/CC-Service-Cover.jpg
keywords: [crowdcontrol, cardchain, kurulum, snapshot, statesync, güncelleme]
---

# Komutlar
:::note
Rehberimizden kurulum yaptıysanız aksi belirtilmediği sürece aşağıdaki kodlarda herhangi bir değişiklik yapmanıza gerek yoktur.
:::

## Servis İşlemleri

## Logları Kontrol Etme 
```
journalctl -fu Cardchaind -o cat
```

### Node'u Başlatma
```
systemctl start Cardchaind
```

### Node'u Durdurma
```
systemctl stop Cardchaind
```

### Node'u Yeniden Başlatma
```
systemctl restart Cardchaind
```

### Node Senkronizasyon Durumu
```
Cardchaind status 2>&1 | jq .SyncInfo
```

### Node Bilgileri
```
Cardchaind status 2>&1 | jq .NodeInfo
```

### Node ID Öğrenme
```
Cardchaind tendermint show-node-id
```

### Node IP Adresini Öğrenme
```
curl icanhazip.com
```

### Node Peer Adresini Öğrenme
```
echo $(Cardchaind tendermint show-node-id)'@'$(wget -qO- eth0.me)':'$(cat $HOME/.Cardchain/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
```

## Cüzdan Yönetimi

### Cüzdanların Listesine Bakma
```
Cardchaind keys list
```

### Cüzdan Adresini Görme
```
Cardchaind keys show $CROWD_WALLET --bech val -a
```

### Cüzdanı İçeri Aktarma
```
Cardchaind keys add $CROWD_WALLET --recover
```

### Cüzdanı Silme
```
Cardchaind keys delete $CROWD_WALLET
```

### Cüzdan Bakiyesini Kontrol Etme
```
Cardchaind query bank balances $CROWD_WALLET_ADDRESS
```

## Token İşlemleri

### Bir Cüzdandan Diğer Bir Cüzdana Transfer Yapma
```
Cardchaind tx bank send $CROWD_WALLET_ADDRESS SENDING_CUZDAN_ADRESI 100000000ubpf
```

### Proposal Oylamasına Katılma
```
Cardchaind tx gov vote 1 yes --from $CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto -y
```

### Validatore Stake Etme / Delegate Etme
```
Cardchaind tx staking delegate $CROWD_VALOPER_ADDRESS 100000000ubpf --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto -y
```

### Stake'ten Çıkma
```
Cardchaind tx staking unbond $(Cardchaind keys show $WALLET --bech val -a) 1000000ubpf --from $WALLET --chain-id $CROWD_CHAIN_ID --fees 3000ubpf -y
```

### Mevcut Validatorden Diğer Validatore Stake Etme / Redelegate Etme
`srcValidatorAddress`: Mevcut Stake edilen validatorün adresi
`destValidatorAddress`: Yeni stake edilecek validatorün adresi
```
Cardchaind tx staking redelegate srcValidatorAddress destValidatorAddress 100000000ubpf --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto -y
```

### Ödülleri Çekme
```
Cardchaind tx distribution withdraw-all-rewards --from=$CROWD_WALLET --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto -y
```

### Komisyon Ödüllerini Çekme
```
Cardchaind tx distribution withdraw-rewards $CROWD_VALOPER_ADDRESS --from=$CROWD_WALLET --commission --chain-id=$CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto -y
```

## Validator İşlemleri

### Validator Bilgileri
```
Cardchaind status 2>&1 | jq .ValidatorInfo
```

### Validator İsmini Değiştirme
`YENI-NODE-ADI` yazan yere yeni validator/moniker isminizi yazınız. TR karakter içermemelidir.
```
Cardchaind tx staking edit-validator \
--moniker=YENI-NODE-ADI\
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET\
--gas-prices 0.00001ubpf\
--gas-adjustment 1.5\
--gas auto -y
```

### Validator Komisyon Oranını Değiştirme
`commission-rate` yazan bölümdeki değeri değiştiriyoruz.
```
Cardchaind tx staking edit-validator --commission-rate "0.02" --moniker=$CROWD_NODENAME --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto - y
```

### Validator Bilgilerinizi Düzenleme
Bu bilgileri değiştirmeden önce https://keybase.io/ adresine kayıt olarak aşağıdaki kodda görüldüğü gibi 16 haneli (XXXX0000XXXX0000) kodunuzu almalısınız. Ayrıca profil resmi vs. ayarları da yapabilirsiniz. 
`$CROWD_NODENAME` ve `$CROWD_WALLET`: Validator (Moniker) ve cüzdan adınız, değiştirmeniz gerekmez. Çünkü değişkenlere ekledik.
```
Cardchaind tx staking edit-validator \
--moniker=$CROWD_NODENAME\
--identity=XXXX0000XXXX0000\
--website="YOU CAN WRITE YOUR WEBSITE IF YOU EXIST" \
--details="YOU CAN WRITE A SENTENCE INTRODUCING YOURSELF IN THIS SECTION" \
--chain-id=$CROWD_CHAIN_ID\
--from=$CROWD_WALLET
```

### Validator Detayları
```
Cardchaind q staking validator $(Cardchaind keys show $WALLET --bech val -a)
```

### Jailing Bilgisi
```
Cardchaind q slashing signing-info $(Cardchaind tendermint show-validator)
```

### Slashing Parametreleri
```
Cardchaind q slashing params
```

### Validatoru Jail Durumundan Kurtarma 
```
Cardchaind tx slashing unjail --from $CROWD_WALLET --chain-id $CROWD_CHAIN_ID --gas-prices 0.00001ubpf --gas-adjustment 1.5 --gas auto -y
```

### Actif Validator Listesi
```
Cardchaind q staking validators -oj --limit=2000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " 	 " + .description.moniker' | sort -gr | nl
```

### Validator Anahtarını Kontrol Etme
```
[[ $(Cardchaind q staking validator $VALOPER_ADDRESS -oj | jq -r .consensus_pubkey.key) = $(Cardchaind status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "Your key status is ok" || echo -e "Your key status is error"
```

### İmzalama Bilgisi
```
Cardchaind q slashing signing-info $(Cardchaind tendermint show-validator)
```