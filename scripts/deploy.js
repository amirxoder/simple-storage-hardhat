const { ethers, run, network } = require("hardhat");

const main = async () => {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying Contract...");
  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();
  console.log(`The Simple Storage Contract Deploy to ${simpleStorage.address}`);

  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`The current value is ${currentValue}`);

  const transactionResponse = await simpleStorage.store("5");
  await transactionResponse.wait(1);
  const updatedVelue = await simpleStorage.retrieve();
  console.log(`Updated value : ${updatedVelue}`);
};

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArgguments: args,
    });
  } catch (err) {
    if (err.message.toLowerCase().includes("Already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(err);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
