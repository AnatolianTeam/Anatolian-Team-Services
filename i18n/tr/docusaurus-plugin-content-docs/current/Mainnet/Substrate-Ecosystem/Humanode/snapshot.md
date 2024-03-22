---
title: 📸 Snapshot
description: Node kurulum rehberi.
image: https://raw.githubusercontent.com/AnatolianTeam/Anatolian-Team-Services/main/i18n/tr/docusaurus-plugin-content-docs/current/Mainnet/Humanode/img/Humanode-Service-Cover.jpg
keywords: [Humanode, network, insan, node]
---

# Snapshot
:::warning
Öncelikle Humanode Launcher ana sayfasındaki `STOP THE NODE` butonuna tıklayın ve node’unuzu durdurun.
:::
Aşağıdaki kodu çalıştırın ve işlem tamamlandıktan sonra launchhcer ana sayfasından node’unuzu başlatın.
```shell
cd $HOME
curl -o - -L https://anatolianteam.com/humanode_backup.tar | tar -x -C $HOME
```