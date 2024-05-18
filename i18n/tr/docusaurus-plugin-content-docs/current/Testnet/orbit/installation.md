---
title: 💾 Installation
description: Orbit Seromoni katılım rehberi.
image: ./img/Orbit-Service-Cover.jpg
keywords: [Orbit, ao, veri, kurulum, rehber]
sidebar_position: 1
---

# Orbit Görev Rehberi

## Sistemi Güncelleme
```shell
apt update && apt upgrade -y
```

## NodeJS ve NVM

### NodeJS Kurulumu

```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### NVM Kurulumu
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use v22.2.0
npm install -g npm@latest
```

## AO Kurulumu
```shell
npm i -g https://get_ao.g8way.io
```

# Görevler

## Price Feed Bot

### Process ID Öğrenme

```shell
aos orbit --cron 30-seconds
```

### 0rbit-Price-Feed.lua Dosyası Oluşturma
Aşağıdaki değerlere Process ID (PID) ve GITHUB kullanıcı adınıı yazın.
Write the Process ID (PID) and GITHUB username in the values ​​below.
```shell
PID=PROCESS_ID_NUMARANIZ
GITHUB=GIHUB_KULLANICI_ADINIZ
```shell

```shell
tee $HOME/0rbit-Price-Feed.lua > /dev/null << EOF
-- PID $PID

local json = require("json")

_ORBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"

function handleError(msg, errorMessage)
    ao.send({
        Target = msg.From,
        Tags = {
            Action = "Error",
            ["Message-Id"] = msg.Id,
            Error = errorMessage
        }
    })
end

Handlers.add("$GITHUB",
    Handlers.utils.hasMatchingTag("Action", "Sponsored-Get-Request"),
    function(msg)
        local token = msg.Tags.Token
        if not token then
            handleError(msg, "Token not provided")
            return
        end
        
        local url = "https://api.coingecko.com/api/v3/simple/price?ids=" .. token .. "&vs_currencies=usd"
        ao.send({
            Target = _ORBIT,
            Action = "Get-Real-Data",
            Url = url
        })
        print("Pricefetch request sent for " .. token)
    end
)

Handlers.add("ReceiveData",
    Handlers.utils.hasMatchingTag("Action", "Receive-Response"),
    function(msg)
        print("Received data: " .. msg.Data)
        local res = json.decode(msg.Data)
        local token = msg.Tags.Token
        if res[token] and res[token].usd then
            ao.send({
                Target = msg.From,
                Tags = {
                    Action = "Price-Response",
                    ["Message-Id"] = msg.Id,
                    Price = res[token].usd
                }
            })
            print("Price of " .. token .. " is " .. res[token].usd)
        else
            handleError(msg, "Failed to fetch price")
        end
    end
)
EOF
```

### İşlemi Yükleme
```shell
.load 0rbit-Price-Feed.lua
```

### Monitörü Çalıştırma
```shell
.monitor
```

### ETH Fiyatını Kontrol Etme
```shell
Send({ Target = ao.id, Action="Sponsored-Get-Request", Tags = { Token = "ethereum" }})
```

### Repo Klonlama 
After cloning the [repo](https://github.com/0rbit-co/quest), create a folder named `price-feed-bot-GithubUsername`, add the image of the output of the last code and your `0rbit-Price-Feed.lua` file.
[Repoyu](https://github.com/0rbit-co/quest) klonladıktan sonra içerisine `price-feed-bot-GithubUsername` adında klasör oluşturup içerisine son kodun çıktısına ait resmi ve `0rbit-Price-Feed.lua` dosyanızı ekleyin

## NEWS Feed Bot

### Process ID Öğrenme

```shell
aos 0rbitNewsFeed --cron 30-seconds
```

### Creating 0rbit-News-Feed.lua File
Aşağıdaki değere Process ID (PID)'nizi yazın.

```shell
PID=PROCESS_ID_NUMARANIZ
```shell

```shell
tee $HOME/0rbit-News-Feed.lua > /dev/null << EOF
-- ao.id $PID

local json = require("json")
local _0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"
local URL = "https://api.theblockbeats.news/v1/open-api/open-flash?size=5&page=1&type=push"
ReceivedData = ReceivedData or {}

Handlers.add(
    "Get-Request",
    Handlers.utils.hasMatchingTag("Action", "Sponsored-Get-Request"),
    function(msg)
         Send({
             Target = _0RBIT,
             Action = "Get-Real-Data",
             Url = URL
        })
        print("GET Request sent to the 0rbit process.")
    end
)

Handlers.add(
    "Receive-Data",
    Handlers.utils.hasMatchingTag("Action", "Receive-Response"),
    function(msg)
        if not msg.Data then
            print("No data received.")
            return
        end

        local res = json.decode(msg.Data)

        ReceivedData1 = res.data.data
        local extractedData = {}
        for k, v in ipairs(ReceivedData1) do
                table.insert(extractedData, {
                    title = v.title,
                    description = v.content
                })
            ReceivedData = extractedData

        end
        print("Processed data: " .. json.encode(ReceivedData1))
    end
)

local function getLatestData(msg)
    local data = json.encode(ReceivedData)
    Handlers.utils.reply(data)(msg)
    print("Latest data sent: " .. data)
end

Handlers.add(
    "GetLatestData",
    Handlers.utils.hasMatchingTag("Action", "Get-Latest-Data"),
    getLatestData
)

local function fetchNewsPeriodically()
     Send({
         Target = _0RBIT,
         Action = "Get-Real-Data",
         Url = URL
     })
    print("Periodic GET Request sent to the 0rbit process.")
end

Handlers.add(
    "CronTick",
    Handlers.utils.hasMatchingTag("Action", "Cron"),
    fetchNewsPeriodically
)
EOF
```

### İşlemi Yükleme

```shell
.load 0rbit-News-Feed.lua
```

### Monitörü Çalıştırma
```shell
.monitor
```

### News Feed Kontrol Etme

```shell
Send({ Target = ao.id, Action="Sponsored-Get-Request"})
```

### PR Gönderme
İlk görevde klonlanan repo içerisinde bu sefer `news-feed-bot-GithubUsername` adında bir klasör oluşturup içerisine son kodun çıktısına ait resmi ve `0rbit-Price-Feed.lua` dosyanızı ekleyin.

Son olarak PR gönderin.