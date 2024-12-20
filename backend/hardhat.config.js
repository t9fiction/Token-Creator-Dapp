require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "../.env" });

const POLYGON_RPC = process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const MAINNET_RPC = process.env.NEXT_PUBLIC_MAINNET_RPC

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  defaultNetwork: "hardhat", // Set default network to hardhat for local testing
  networks: {
    // Hardhat forking node
    hardhat: {
      chainId: 31337, // Default chain ID for Hardhat
      // forking: {
      //   url: MAINNET_RPC, // Use live network RPC for forking
      //   // blockNumber: 5000000, // Optional: Specify a block number for consistency
      // },
      // accounts: {
      //   count: 3, // Number of accounts generated
      //   accountsBalance: "500000000000000000000", // Default 1000 ETH in wei
      // },
      mining: {
        auto: true, // Auto-mine transactions
        // interval: 5000, // Optional: Mine a block every 5 seconds
      },
    },
    // Local node
    // Add this new network configuration
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    // Polygon node
    polygon: {
      url: POLYGON_RPC,
      accounts: [PRIVATE_KEY],
    },
  },
};
