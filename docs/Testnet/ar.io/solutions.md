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