---
title: 🛠️ Update  
description: Allora worker installation guide.
image: ./img/Allora-Service-Cover.jpg
keywords: [Allora, AI, Layer 1, installation, Update]
---

# Allora Update

**1. Stop and Remove Allora Containers**

```shell
bash -c "$(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/stop.sh)"
```

This command stops and removes Allora containers.

**2. Navigate to the basic-coin-prediction-node Directory**

```shell
cd basic-coin-prediction-node
```

Navigate to the basic-coin-prediction-node directory.

**3. Update the Docker-compose.yml File**

```shell
sed -i 's/timeout: 5s/timeout: 10s/g' docker-compose.yml
sed -i 's/--topic=1/--topic=allora-topic-1-worker/g' docker-compose.yml
```

Update your Docker-compose.yml file with these steps:

- Increase the `timeout` duration from 5 seconds to 10 seconds.
- Change `--topic=1` to `--topic=allora-topic-1-worker`.

**4. Rebuild and Start Docker Containers**

```shell
docker compose build
docker compose up -d
```

Rebuild and start the Docker containers in the background with these commands.

**5. Check Logs**

```shell
bash <(curl -s https://raw.githubusercontent.com/blackowltr/Testnetler-ve-Rehberler/main/Allora/log.sh)
```

Finally, use this command to check the logs.

Example log should look like this:

<img width="1362" alt="Ekran Resmi 2024-07-04 01 58 08" src="https://github.com/koltigin/Allora-Price-Prediction-Worker-Node/assets/107190154/6f13dda0-ffd8-4e6a-85a5-8b5f597d76f8">
