---
title: ⚙️ Solutions
description: Ar Node problems and solutions.
image: ./img/Ar-Service-Cover.jpg
keywords: [Ar.io, Ar, permaweb, problems, solutions, guide]
sidebar_position: 6
---

# Solutions

## TX id Error
If you get an error similar to the one below. There is a problem with your Nodejs version.
```shell
root@asdaddadsda:~/testnet-contract# yarn ts-node tools/delegate-stake.ts
/root/testnet-contract/tools/delegate-stake.ts:39
    console.log(`${walletAddress} successfully submitted request to delegate stake with TX id: ${txId?.originalTxId}`);
                                                                                                      ^

SyntaxError: Unexpected token '.'
    at wrapSafe (internal/modules/cjs/loader.js:915:16)
    at Module._compile (internal/modules/cjs/loader.js:963:27)
    at Module.m._compile (/root/testnet-contract/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Object.require.extensions.<computed> [as .ts] (/root/testnet-contract/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at phase4 (/root/testnet-contract/node_modules/ts-node/src/bin.ts:649:14)
    at bootstrap (/root/testnet-contract/node_modules/ts-node/src/bin.ts:95:10)
```

### Solution 1
Run the codes below on your server and try again.
```shell
curl -sL https://deb.nodesource.com/setup_21.x | sudo -E bash -
apt-get install -y nodejs
apt update -y && apt upgrade -y
```

### Solution 2
If the solution above does not work, enter the codes below and try again.
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc

nvm install 20.12.0 && nvm use 20.12.0
```

## Freeing up Space on Disk

```shell
cd $HOME/ar-io-node
docker-compose down --rmi all
git pull 
git checkout main 
docker-compose up -d
```

If you get an error like below;

```shell
error Could not write file "/root/ar-io-node/yarn-error.log": "ENOSPC: no space left on device, write"
error An unexpected error occurred: "ENOSPC: no space left on device, mkdir '/usr/local/share/.cache/yarn/v6/npm-apollo-server-express-3.13.0-0d8d9bbba3b8b8264912d215f63fd44e74d5f42a-integrity'".
```

run this code.
```shell
/bin/sh -c yarn install && yarn build && rm -rf node_modules && yarn install --production
```


### If Disk Problem Continues

#### Deleting the Data  
```shell
docker-compose down -v
rm -rf /root/ar-io-node/data
```

#### Docker Prune (Optional)
:::warning
Run the prune code if there is no other application using docker on your system.
:::

```shell
docker system prune
```

#### Editing .env File

Open the .env file and change the `START_HEIGHT=` section to `START_HEIGHT=1407900`.
```shell
nano $HOME/ar-io-node/.env
```

#### Restarting

```shell
cd $HOME/ar-io-node
git pull 
git checkout main 
docker-compose up -d
```

#### Checking the Logs
```shell
docker-compose logs -f --tail=0
```
And then close the logs by pressing `CTRL C`.

## Redis Error Solution
```shell
docker-compose down --rmi all
rm -rf $HOME/ar-io-node/data/redis
docker-compose up -d
```