const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const sampleContract = await ethers.getContractFactory("Greeter");

  // deploy the contract
  const deployedSampleContract = await sampleContract.deploy("Hello, Polygon");

  await deployedSampleContract.deployed();

  // print the address of the deployed contract
  console.log("Sample Contract Address:", deployedSampleContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
