const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("BigNumbers", function () {
    let bigNumbersContract;

    beforeEach(async function () {
        const BigNumbers = await ethers.getContractFactory("BigNumbers");
        bigNumbersContract = await BigNumbers.deploy();
        await bigNumbersContract.deployed();
        await bigNumbersContract.deployTransaction.wait(); // Wait for deployment transaction to be mined
    });

    it("should return the correct sum of two BigNumbers", async function () {
        const num1 = BigNumber.from("123456789");
        const num2 = BigNumber.from("987654321");
        const expectedSum = BigNumber.from("1111111110");

        const actualSum = await bigNumbersContract.add(num1, num2);

        expect(actualSum).to.equal(expectedSum);
    });

    it("should return the correct difference of two BigNumbers", async function () {
        const num1 = BigNumber.from("987654321");
        const num2 = BigNumber.from("123456789");
        const expectedDifference = BigNumber.from("864197532");

        const actualDifference = await bigNumbersContract.subtract(num1, num2);

        expect(actualDifference).to.equal(expectedDifference);
    });

    // Add more tests as needed

}); 