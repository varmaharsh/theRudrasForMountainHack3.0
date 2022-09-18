const { expect } = require("chai");

const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("ElectionPromiseTracker", function () {
  it("should return Names of given addresses", async function () {
    // Deploy the good contract
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    // James Clear
    let Actual = await electionPromise.isACandidate(0x75Cd185daB34a9c9dFCDa24951a547f8eEF5e618);
    let Expected = 'James Clear'
    console.log(`Actual--${Actual}`)
    expect(Expected).to.equal(Actual);
    
    // Benjamin Graham
    Actual = await electionPromise.isACandidate(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde);
    Expected = 'Benjamin Graham'
    console.log(`Actual--${Actual}`)
    expect(Expected).to.equal(Actual);
	
	//replace with voterwhohas already voted
	
	let ActualifVoterHasAlreadyVoted = await electionPromise.ifVoterHasAlreadyVoted(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde);
	let ExpectedifVoterHasAlreadyVoted = true;
	expect(ExpectedifVoterHasAlreadyVoted).to.equal(ActualifVoterHasAlreadyVoted);
	
	
    
  });
  
  it("should return Names of given addresses", async function () {
    // Deploy the good contract
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

	//replace with voterwhohas already voted
	
	let ActualifVoterHasAlreadyVoted = await electionPromise.ifVoterHasAlreadyVoted(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde);
	let ExpectedifVoterHasAlreadyVoted = true;
	expect(ExpectedifVoterHasAlreadyVoted).to.equal(ActualifVoterHasAlreadyVoted);

    
  });
  
    it("event is emitted", async function () {
    // Deploy the good contract
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();



        //adding Promise
      let watcher = electionPromise.addPromise(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde,'test1domain','test1desc'); //event name
      let events = await watcher.get();
      let event = events[0];
      expect(event.args.domain).to.equal('test1domain'); //arg
      expect(event.args.description).to.equal('test1desc'); //arg2


	
  });
  
});