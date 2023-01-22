const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// auto verify contract
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

// custome task
require("./tasks/block-number");
require("./tasks/accounts");

// gas reporter
// this package show us tha we should pay how much for each function in the smartcontract
require("hardhat-gas-reporter");

// in test show us how many line of our smart contract is cover by test
require("solidity-coverage");

const GOERLI_URL = process.env.GOERLI_URL || "https://eth-goerli.exapmle";
const GOERLI_PRIVATE_KEY =
  process.env.GOERLI_PRIVATE_KEY || "privateKey example";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "etherscan example";
const COINMARKETCAP_API_KEY =
  process.env.COINMARKETCAP_API_KEY || "coinmarketcap key example";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
