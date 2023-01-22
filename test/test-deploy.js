const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should Start with favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("should updata when we call store()", async () => {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store("7");
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();
    // assert.equal(currentValue.toString(), expectedValue);
    expect(currentValue).to.be.equal(expectedValue);
  });

  it("push the data to people array and name to nameToFavoriteNumber", async () => {
    const expectedFavoriteNumber = "4";
    const expectedPersonName = "amir";
    const transactionResponse = await simpleStorage.addPerson(
      expectedFavoriteNumber,
      expectedPersonName
    );
    await transactionResponse.wait(1);
    const people = await simpleStorage.people(0);
    const currentFavoriteNumber = people[0].toString();
    const currentPersonName = people[1];

    const mppingCurrentValue = await simpleStorage.nameToFavoriteNumber(
      expectedPersonName
    );

    assert.equal(mppingCurrentValue.toString(), expectedFavoriteNumber);
    assert.equal(currentPersonName, expectedPersonName);
    assert.equal(currentFavoriteNumber, expectedFavoriteNumber);
  });
});
