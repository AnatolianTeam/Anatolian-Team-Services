---
title: 💾 EigenLayer AVS 🆕
description: Aligned Testnet 3 - First EigenLayer AVS.
image: ./img/Aligned-Service-Cover.jpg
keywords: [Aligned, Layer, alignedlayer, installation, snapshot, statesync, update]
---

# Aligned Testnet 3 - First EigenLayer AVS

# Aligned Installation
Download Aligned to send proofs to the testnet.
```
curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/install_aligned.sh | bash
```

```
source /root/.bashrc
```

# Download Sample SP1 Evidence File with ELF File
```
curl -L https://raw.githubusercontent.com/yetanotherco/aligned_layer/main/batcher/aligned/get_proof_test_files.sh | bash
```

# Sending Proof
```
aligned submit \
  --proving_system SP1 \
  --proof ~/.aligned/test_files/sp1_fibonacci.proof \
  --vm_program ~/.aligned/test_files/sp1_fibonacci-elf \
  --aligned_verification_data_path ~/aligned_verification_data \
  --conn wss://batcher.alignedlayer.com
```

# Validating Proof on the Network

```
aligned verify-proof-onchain \
  --aligned-verification-data ~/aligned_verification_data/*.json \
  --rpc https://ethereum-holesky-rpc.publicnode.com \
  --chain holesky
```

Son olarak kodun çıktısında explorer linkini kopyalayıp, Aligned'ı etiketleyip bir tweet atıyoruz.

