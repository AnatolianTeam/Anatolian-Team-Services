---
title: 💾 EigenLayer AVS 🆕
description: Aligned Testnet 3 - First EigenLayer AVS.
image: ./img/Aligned-Service-Cover.jpg
keywords: [Aligned, Layer, alignedlayer, katman, kurulum, snapshot, statesync, güncelleme]
---

# Aligned Testnet 3 - First EigenLayer AVS.

# Aligned Kurulumu
Kanıtları test ağına göndermek için Aligned'ı indiriyoruz.
```
curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/install_aligned.sh | bash
```

```
source /root/.bashrc
```

# Örnek SP1 Kanıt Dosyasını ELF Dosyası ile Birlikte İndirme

```
curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/get_proof_test_files.sh | bash
```

# Kanıtı Gönderme

```
aligned submit \
  --proving_system SP1 \
  --proof ~/.aligned/test_files/sp1_fibonacci.proof \
  --vm_program ~/.aligned/test_files/sp1_fibonacci-elf \
  --aligned_verification_data_path ~/aligned_verification_data \
  --conn wss://batcher.alignedlayer.com
```

#  Kanıtı Ağ Üzerinde Doğrulama

```
aligned verify-proof-onchain \
  --aligned-verification-data ~/aligned_verification_data/*.json \
  --rpc https://ethereum-holesky-rpc.publicnode.com \
  --chain holesky
```

## Tweet Görevi
Son olarak kodun çıktısında explorer linkini kopyalayıp, Aligned'ı etiketleyip bir tweet atıyoruz. Ardından bu tweetimizin linkini Aligned [discord](https://discord.gg/Kvvqf3kVBm) sunucusunda `#🧪┃testnet` kanalından paylaşın.

