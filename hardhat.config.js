require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-web3");
require("./tasks/interact.js");
require('hardhat-abi-exporter');
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
  console.log("Hello \n");
  console.log(accounts[0].address);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",

  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },

    kovan: {
      url: process.env.INFURA_KOVAN_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },

    mainnet: {
      url: process.env.INFURA_MAINNET_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    }
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};