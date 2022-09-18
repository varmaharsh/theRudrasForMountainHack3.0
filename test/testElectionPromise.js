const { expect } = require("chai");

const { ethers } = require("hardhat");
const hre = require("hardhat");
const accounts = ['0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC',
				 '0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C',
				 '0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB',
				 '0xdD870fA1b7C4700F2BD7f44238821C26f7392148',
				 '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c'];

describe("ElectionPromiseTracker", function () {
  it("should return Names of given addresses", async function () {
    // Deploy the good contract
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

    // James Clear
    let Actual = await electionPromise.isACandidate('0x75Cd185daB34a9c9dFCDa24951a547f8eEF5e618');
    let Expected = 'James Clear'
    console.log(`Actual--${Actual}`)
    expect(Expected).to.equal(Actual);
    
    // Benjamin Graham
    Actual = await electionPromise.isACandidate('0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde');
    Expected = 'Benjamin Graham'
    console.log(`bennjjjjj+++++++++++++++++++++++++++++++`)
    console.log(`Actual--${Actual}`)
    expect(Expected).to.equal(Actual);
	
	//replace with voterwhohas already voted
	
	let ActualifVoterHasAlreadyVoted = await electionPromise.ifVoterHasAlreadyVoted(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde);
	let ExpectedifVoterHasAlreadyVoted = true;
	expect(ExpectedifVoterHasAlreadyVoted).to.equal(ActualifVoterHasAlreadyVoted);
	
	
    
  });
  
  it("should return Names of given addresses", async function () {
    // candadiates names should be returned
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();

	// //replace with voterwhohas already voted
	
	// let ActualifVoterHasAlreadyVoted = await electionPromise.ifVoterHasAlreadyVoted(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde);
	// let ExpectedifVoterHasAlreadyVoted = true;
	// expect(ExpectedifVoterHasAlreadyVoted).to.equal(ActualifVoterHasAlreadyVoted);

    
   });
  
     it("Add a Promise, and check event is emitted", async function () {
    // Add a Promise, and check event is emitted
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();



        //adding Promise
        let watcher = electionPromise.PromiseAdded();

      let resultAddPromise = electionPromise.addPromise(0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde,'test1domain','test1desc'); //event name
      
      let events = await watcher.get();
      let event = events[0];
      expect(event.args.domain).to.equal('test1domain'); //arg
      expect(event.args.description).to.equal('test1desc'); //arg2
    


	
  });

  it("test Add a Candidate", async function () {
    // 
    const electionPromiseTracker = await ethers.getContractFactory("ElectionPromiseTracker");
    const electionPromise = await electionPromiseTracker.deploy();
    await electionPromise.deployed();



        
        
      electionPromise.addCandidate(
            accounts[1],
            "Alexander Graham",
            "London",
            "AWS",
            230000000000
        )
	Actual = await electionPromise.isACandidate(accounts[1]);
    Expected = 'Alexander Graham'
    console.log(`Alexander+++++++++++++++++`)
    console.log(`Actual--${Actual}`)
    expect(Expected).to.equal(Actual);
    


	
  });

  
});