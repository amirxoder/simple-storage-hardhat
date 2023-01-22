# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Hardhat features and plugins that use in this contract:

1. auto verify contract by etherscan and auto run function depended on chainId
2. craete 2 custome task that show current block number and avalible hardhat account
3. use gas reporter package and coinmarketcap api key to show gas by USD
4. use solidity-coverage package to show how many lines of our contract is cover by testing
5. use env vaiable to safe and scure our api keys

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
