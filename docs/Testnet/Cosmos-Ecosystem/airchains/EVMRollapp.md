---
title: 🔗 EVMRollapp
description: EVMRollapp Installation Guide.
image: ./img/Airchains-Service-Cover.jpg
keywords: [airchains, chain, evm, rollapp]
---

**Hardware Prerequisites**

For optimal performance, your system should possess the following specifications:

| **Component** | **Recommended Specification** |
|---|---|
| CPU | 4 Cores |
| RAM | 8 GB |
| Storage | 200 GB |

### 1. System Update and Package Installation

Begin by updating your system and installing the required packages:

```bash
cd $HOME && source <(curl -s https://raw.githubusercontent.com/AnatolianTeam/scripts/main/install.sh)
```

Next, clone the necessary repositories from GitHub:

```bash
git clone https://github.com/airchains-network/evm-station.git
git clone https://github.com/airchains-network/tracks.git
git clone https://github.com/availproject/availup.git
```

### 2. Configuring Evm-Station

**A. Launching a Screen Session and Navigation**

Start a new screen session named "evmstation" and navigate to the `evm-station` directory:

```bash
screen -S evmstation
cd evm-station
go mod tidy
```

**B. Modifying Moniker and Chain ID (Optional)**

If you desire to customize your chain's moniker or chain ID, edit the setup script using the `nano` text editor:

```bash
nano ./scripts/local-setup.sh
```

Make the necessary changes within the file.

**C. Setting Up and Starting Evm-Station**

Execute the following commands in sequence to set up and launch Evm-Station:

```bash
/bin/bash ./scripts/local-setup.sh
/bin/bash ./scripts/local-start.sh
/bin/bash ./scripts/local-keys.sh
```

**D. Configuring Custom Ports (Optional)**

If you prefer to use custom port numbers, follow these steps:

1. Set an environment variable named `G_PORT` with your desired port number:

```bash
echo "export G_PORT=27" >> $HOME/.bash_profile
source $HOME/.bash_profile
```
```
sed -i.bak -e "s%:1317%:${G_PORT}317%g;
s%:8080%:${G_PORT}080%g;
s%:9090%:${G_PORT}090%g;
s%:9091%:${G_PORT}091%g;
s%:8545%:${G_PORT}545%g;
s%:8546%:${G_PORT}546%g;
s%:6065%:${G_PORT}065%g" $HOME/.evmosd/config/app.toml
```
```
sed -i.bak -e "s%:26658%:${G_PORT}658%g;
s%:26657%:${G_PORT}657%g;
s%:6060%:${G_PORT}060%g;
s%:26656%:${G_PORT}656%g;
s%^external_address = \"\"%external_address = \"$(wget -qO- eth0.me):${G_PORT}656\"%;
s%:26660%:${G_PORT}660%g" $HOME/.evmosd/config/config.toml
```

2. Update configuration files with the new port numbers using the `sed` command. This replaces default port numbers with your chosen `G_PORT` value.

**E. Editing app.toml for External Connections**

1. Open the `app.toml` file located in `$HOME/.evmosd/config/app.toml` using your preferred text editor (e.g., `nano`).

2. Locate the line containing `127.0.0.1` and change it to `0.0.0.0` to allow external connections.

<img width="989" alt="Ekran Resmi 2024-06-30 13 32 09" src="https://github.com/AnatolianTeam/Anatolian-Team-Services/assets/107190154/b5893123-1730-482c-8f4a-794432f9ea40">

### 3. Setting Up Avail DA

**A. Launching a Screen Session and Navigation**

Start a new screen session named "avail" and navigate to the `availup` directory:

```bash
screen -S avail
cd availup
/bin/bash availup.sh --network "turing" --app_id 36
```

**B. Detaching from the Screen Session**

Once the setup is complete, detach from the screen session using `ctrl + a + d`.

**C. Retrieving Avail Address and Seed Phrase**

View your Avail address and seed phrase by opening the `identity.toml` file located at `/root/.avail/identity/identity.toml` with a text editor.

**Important Note:** Keep your seed phrase confidential, as it grants access to your Avail account.

### 4. Setting Up the Tracker

**A. Launching a Screen Session for Tracking**

Start a new screen session named "track" for managing the tracker.

```bash
screen -S track
sudo rm -rf ~/.tracks
cd tracks
go mod tidy
```

**B. Initializing Tracking Configuration**

Navigate to the `tracks` directory and initialize tracking with your configurations using the following command:

```bash
go run cmd/main.go init --daRpc "http://127.0.0.1:7000" --daKey "AVAIL-PUB-KEY" --daType "avail" --moniker "YOUR-NAME-VNBnode" --stationRpc "http://127.0.0.1:16545" --stationAPI "http://127.0.0.1:16545" --stationType "evm"
```

## Creating an Airchain Wallet and Starting Your Station

Here's a detailed breakdown of creating an Airchain wallet and starting your station:

### 1. Create an Airchain Wallet:

- Open your terminal and run the following command, replacing `"NAME"` with your desired account name:

```bash
go run cmd/main.go keys junction --accountName "NAME" --accountPath $HOME/.tracks/junction-accounts/keys
```

This command creates a wallet associated with your Airchain network and stores the private key securely in the specified path.

**2. Obtain Test Tokens (Optional):**

Visit the Airchains faucet at [https://airchains.faucetme.pro/](https://airchains.faucetme.pro/) to acquire test tokens for your newly created wallet. These tokens allow you to interact with the testnet without using real cryptocurrency.

**3. Run the Prover:**

- Execute the following command in your terminal:

```bash
go run cmd/main.go prover v1EVM
```

This command starts the prover, which is responsible for generating proofs for transactions on your Airchain network.

**4. Retrieve Your Node ID:**

- Open the `sequencer.toml` file located at `/root/.tracks/config/sequencer.toml` using a text editor like `nano`:

```bash
nano /root/.tracks/config/sequencer.toml
```

- Locate the line containing `"node_id"`. The value after the colon (":") is your node ID. You'll need this in the next step.

**5. Start Your Station:**

- Replace placeholders in the following command with your information:

```bash
go run cmd/main.go create-station \
  --accountName "NAME" \
  --accountPath $HOME/.tracks/junction-accounts/keys \
  --jsonRPC "https://airchains-testnet-rpc.cosmonautstakes.com/" \
  --info "EVM Track" \
  --tracks your-airchain-address \
  --bootstrapNode "/ip4/your-server-ip4/tcp/2300/p2p/your-node-ID"
```

  - `--accountName`: The same name you used while creating the wallet.
  - `--accountPath`: The path where your wallet's private key is stored (from step 1).
  - `--jsonRPC`: The RPC endpoint for the Airchains testnet (replace if using a different network).
  - `--info`: A description for your station (optional).
  - `--tracks`: Replace with your Airchain address obtained during wallet creation.
  - `--bootstrapNode`: Update with your server IP address and the retrieved node ID from step 4.

- After running this command, execute the following command to start your station:

```bash
go run cmd/main.go start
```

This initiates your Airchain station, allowing you to participate in the network.

:::warning
- Ensure you replace placeholders with your actual information in the commands.
- Double-check paths and IDs to avoid errors.
:::

**6. Monitor Appchain (Optional):**

You can monitor the activity on your appchain by visiting [https://points.airchains.io/](https://points.airchains.io/). This dashboard provides insights into your station's performance and transactions.

:::info
By following these steps, you'll successfully create an Airchain wallet, obtain test tokens (optional), and launch your own station on the Airchain network.
::::
