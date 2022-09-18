const { expect } = require("chai");

const { ethers } = require("hardhat");

const accounts = [
  "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
  "0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C",
  "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB",
  "0xdD870fA1b7C4700F2BD7f44238821C26f7392148",
  "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c",
];

describe("ElectionPromiseTracker", function () {
  it("check if given addresses are candidates or not", async function () {
    // Deploy the good contract
    const electionPromiseTracker = await ethers.getContractFactory(
      "ElectionPromiseTracker"
    );
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    // James Clear
    let isACandidate = await electionPromise.isACandidate(
      "0x75Cd185daB34a9c9dFCDa24951a547f8eEF5e618"
    );

    expect(isACandidate).to.equal(true);

    // Benjamin Graham
    isACandidate = await electionPromise.isACandidate(
      "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    );

    expect(isACandidate).to.equal(false);
  });

  it("should return list of all candidates", async function () {
    // candadiates names should be returned
    const electionPromiseTracker = await ethers.getContractFactory(
      "ElectionPromiseTracker"
    );
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    const candidates = await electionPromise.getAllCandidates();
    expect(candidates.length).to.equal(4);
  });

  it("should return candidate details", async function () {
    // candadiates names should be returned
    const electionPromiseTracker = await ethers.getContractFactory(
      "ElectionPromiseTracker"
    );
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    const candidateDetails = await electionPromise.getCandidateDetails(
      "0x8ecCA9951E02Aa8DC7c01150e96C990bbBcb71f1"
    );
    expect(candidateDetails[1]).to.equal("Christopher Mayer");
    expect(candidateDetails[2]).to.equal("Lucknow");
  });

  it("Check if it has one promise by default", async function () {
    // Add a Promise, and check event is emitted
    const electionPromiseTracker = await ethers.getContractFactory(
      "ElectionPromiseTracker"
    );
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    const promisesByCandidateId =
      await electionPromise.getPromisesByCandidateId(
        "0x8ecca9951e02aa8dc7c01150e96c990bbbcb71f1"
      );
    expect(promisesByCandidateId.length).to.equal(1);
  });

  it("Add a Promise", async function () {
    // Add a Promise, and check event is emitted
    const electionPromiseTracker = await ethers.getContractFactory(
      "ElectionPromiseTracker"
    );
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    await electionPromise.addPromise(
      "0x8ecca9951e02aa8dc7c01150e96c990bbbcb71f1",
      "test1domain",
      "test1desc"
    );

    const promisesByCandidateId =
      await electionPromise.getPromisesByCandidateId(
        "0x8ecca9951e02aa8dc7c01150e96c990bbbcb71f1"
      );
    expect(promisesByCandidateId.length).to.equal(2);
  });

  it("test Add a Candidate", async function () {
    const electionPromiseTracker = await ethers.getContractFactory(
      "ElectionPromiseTracker"
    );
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    electionPromise.addCandidate(
      accounts[1],
      "Alexander Graham",
      "London",
      "AWS",
      230000000000
    );
    const isACandidate = await electionPromise.isACandidate(accounts[1]);
    expect(isACandidate).to.equal(true);
  });
});
