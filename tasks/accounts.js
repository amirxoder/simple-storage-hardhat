const { task } = require("hardhat/config");

task("accounts", "Print avalible hardhat account").setAction(
  async (taskArgs, hre) => {
    const accoutns = await hre.ethers.getSigners();

    for (const account of accoutns) {
      console.log(account.address);
    }
  }
);

module.exports = {};
