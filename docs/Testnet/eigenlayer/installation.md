---
title: 💾 Installation
description: Holešky Operator installation guide.
image: ./img/EigenLayer-Service-Cover.jpg
keywords: [Eigen Layer, Eigen, Layer, restake, Holešky, installation, Holesky]
---

# Eigen Layer Holešky Operatör Installation 

## Updating the System
```shell
apt update && apt upgrade -y
```

## Installing the Necessary Libraries
```shell
apt install make clang pkg-config libssl-dev libclang-dev build-essential git curl ntp jq llvm gcc -y < "/dev/null"

```

## Installing Go
```shell
ver="1.21.6"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
rm -rf /usr/local/go
tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm -rf "go$ver.linux-amd64.tar.gz"
echo 'export GOROOT=/usr/local/go' >> $HOME/.bash_profile
echo 'export GOPATH=$HOME/go' >> $HOME/.bash_profile
echo 'export GO111MODULE=on' >> $HOME/.bash_profile
echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile
source $HOME/.bash_profile
go ve

## Installing CLI from Source

```shell
cd $HOME
git clone https://github.com/Layr-Labs/eigenlayer-cli.git
cd eigenlayer-cli
mkdir -p build
go build -o build/eigenlayer cmd/eigenlayer/main.go
cd $HOME
cp eigenlayer-cli/build/eigenlayer /usr/local/bin/
```

## Create and List Keys

### Creating New Key
We create two keys here. If you have installed it before, proceed to the import step.

The areas you need to change are written below:
* `KEY_NAME`: your key name. Give your key a name.

:::warning
Enter the codes below one by one, set your password and keep the outputs in a safe place.
:::

#### Create ECDSA Key
```shell
eigenlayer operator keys create --key-type ecdsa KEY_NAME
```
#### Create BLS Key
```shell
eigenlayer operator keys create --key-type bls KEY_NAME
```

### Import Keys
The areas you need to change are written below:
* `KEY_NAME`: your key name. Give your key a name.
* `PRIV_KEY`: private key of your key
```shell
eigenlayer operator keys import --key-type ecdsa KEY_NAME PRIV_KEY
eigenlayer operator keys import --key-type bls KEY_NAME PRIV_KEY
```

### Listing Keys
This is the command you can use to retrieve a list of the keys you have created with the EigenLayer cli tool.

```shell
eigenlayer operator keys list
```
:::info
Save your Ethereum address or import it in your wallet. We will request testnet ETH to this wallet.
:::

### Export keys

If you want to see the private key of the existing keys, you can use the below command. This will only work if your keys are in default location (~/.eigenlayer/operator_keys)

#### Export ECDSA Key
```shell
eigenlayer operator keys export --key-type ecdsa KEY_NAME
```

#### Export BLS Key
```shell
eigenlayer operator keys export --key-type bls KEY_NAME
```

## Obtaining Holešky ETH

Obtain test ETH using [PoW Faucet](https://holesky-faucet.pk910.de).

## Operator Registration

### Creating Config Files
```shell
eigenlayer operator config create
```

* In the `Would you like to populate config files` question, first press `y` and then press `enter`.
* In the `Enter your operator address` and `Enter your earning address` questions, type `your Ethereum address` given when creating the ECDSA key.
* In the `Enter your ETH rpc url:` question, type: `https://ethereum-holesky-rpc.publicnode.com`
* `In the Enter your ecdsa key path` question, type the path specified in the output when you entered the `eigenlayer operator keys list` code above.


#### Create metadata.json File

Create a metadata.json file with the codes below and upload this file to github or if you have a site, where it can be accessed by everyone. You can use your github account for this.

```shell
{
  "name": "YOUR_OPERATOR_NAME",
  "website": "YOUR_WEBSITE_ADDRESS",
  "description": "DESCRIPTON_SLOGAN_ETC",
  "logo": "YOUR_LOGO_LINK",
  "twitter": "YOUR_TWITTER_ADDRESS"
}
```

#### Edit operator.yaml File

```shell
nano operator.yaml
```

In this file, we only edit the following section.

We add the `link to the metadata.json file` we created above.
```shell
.
.
.
metadata_url: "https://your-address.com/metadata.json"
.
.
.
```

### Registration

:::warning
MAKE SURE YOU HAVE ETH IN YOUR WALLET BEFORE GOING TO THE NEXT STEP.
:::

```shell
eigenlayer operator register operator.yaml
```

After entering this code, we wait a bit. Once the transaction is successful it will give us our TX Hash id. You can check this in [explorer](https://holesky.etherscan.io).

After a while, your operator will start to appear at [this address](https://holesky.eigenlayer.xyz/operator).


## Checking Status of Registration

```shell
eigenlayer operator status operator.yaml
```

## Metadata Updates
If you update your metadata.json file to make a change in your operator information. Perform this update on the network with the code below.

```shell
eigenlayer operator update operator.yaml
```

