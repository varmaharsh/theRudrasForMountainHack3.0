// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ElectionPromiseTracker {
    event PromiseAdded(address, uint16, string, string);

    // Promise object
    struct Promise {
        //keep incremneting as promise gets added
        uint16 id;
        string domain;
        string description;
        // keep incrementing these based on vote
        uint256 fulfilled;
        uint256 unfulfilled;
        uint256 inprogress;
    }

    //define the candidate here
    struct Candidate {
        // this address is same as candiadte address
        address id;
        string name;
        string constituency;
        string party;
        uint64 networth;
    }

    mapping(uint16 => Promise) internal promises;
    mapping(address => uint16[]) internal voterAddressToPromiseIds;

    // use this to check if user calling the function is candidate or voter
    address[] internal candidateAddresses;

    // To figure out if an address is a candidate
    mapping(address => bool) isAddressCandidate;

    // address to candidates
    mapping(address => Candidate) candidates;

    // use this to find all promises by a candidate and then use the promises mapping to return them all
    mapping(address => uint16[]) candidateAddressToPromiseId;

    // increment this after adding a promise
    uint16 promiseId = 1;

    Promise commonPromise;

    constructor() {
        // Add a common promise with id 0, as add to any candidate when it is added
        commonPromise = Promise(
            0,
            "General",
            "I will be easily reachable to my consitituency people",
            0,
            0,
            0
        );
        promises[0] = commonPromise;
        addCandidate(
            0xB34a6d412bD8e71994dfEee92154F0Ca418f3703,
            "Daniel Crossby",
            "Kanpur",
            "TSH",
            50000000000
        );
        addCandidate(
            0x8ecCA9951E02Aa8DC7c01150e96C990bbBcb71f1,
            "Christopher Mayer",
            "Lucknow",
            "Independent",
            100000000000
        );
        addCandidate(
            0x75Cd185daB34a9c9dFCDa24951a547f8eEF5e618,
            "James Clear",
            "Gorakhpur",
            "AWS",
            80000000000
        );
        addCandidate(
            0x17AB14d818c78eB72A34dEbde4BD48C8F25C8dde,
            "Benjamin Graham",
            "Varanasi",
            "AWS",
            230000000000
        );
    }

    // add a function to return a whether a given address is candidate or not
    //gtrHarish function1
    function isACandidate(address addr) public view returns (bool) {
        return isAddressCandidate[addr];
    }

    // function to return list of candidates with info, this should be an array
    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory returnCandidates = new Candidate[](
            candidateAddresses.length
        );
        for (uint i = 0; i < candidateAddresses.length; i++) {
            returnCandidates[i] = candidates[candidateAddresses[i]];
        }
        return returnCandidates;
    }

    // function to return details of a candidate given his id/address
    function getCandidateDetails(address addr)
        public
        view
        returns (Candidate memory)
    {
        //require(isACandidate(msg.sender), "Not an election candidate");
        return candidates[addr];
    }

    // function to return all promises given a candidate id/address
    function getPromisesByCandidateId(address candidateId)
        public
        view
        returns (Promise[] memory)
    {
        // check if msg.sender is candidate
        require(isACandidate(candidateId), "Not an election candidate");
        uint16[] memory promiseIds = candidateAddressToPromiseId[candidateId];
        Promise[] memory promisesByCandidate = new Promise[](promiseIds.length);
        for (uint16 i = 0; i < promiseIds.length; i++) {
            promisesByCandidate[i] = (promises[promiseIds[i]]);
        }
        return promisesByCandidate;
    }

    //function to check if voter has voted on promise already
    function ifVoterHasAlreadyVoted(uint16 _promiseId, address voter)
        internal
        view
        returns (bool)
    {
        bool check = false;
        uint16[] memory votedPromises = voterAddressToPromiseIds[voter];
        for (uint16 i = 0; i < votedPromises.length; i++) {
            if (votedPromises[i] == _promiseId) {
                check = true;
                break;
            }
        }
        return check;
    }

    // function to edit a promise object given its promise id,
    //basically take promise id and vote type as input and check if msg.sender is not already in promiseIdToAddress mapping
    // if not them update the promise vote count based on if it was fulfilled, unfulfilled etc
    function VoteForPromise(
        address sender,
        uint16 _promiseId,
        uint16 _vote_type
    ) external {
        // check if msg.sender is not a candidate
        require(!isACandidate(sender), "Not a voter");
        // check if voter has already voted on this promise
        bool check = ifVoterHasAlreadyVoted(_promiseId, sender);
        require(!check, "Voter has already voted for this promise");

        Promise memory promiseObject = promises[_promiseId];
        if (_vote_type == 0) {
            promiseObject.unfulfilled++;
        } else if (_vote_type == 1) {
            promiseObject.fulfilled++;
        } else {
            promiseObject.inprogress++;
        }
        promises[_promiseId] = promiseObject;
        voterAddressToPromiseIds[sender].push(_promiseId);
    }

    // function to add promise given a candidate id and promise details
    function addPromise(
        address sender,
        string calldata domain,
        string calldata description
    ) external {
        // check if msg.sender is a candidate
        require(isACandidate(sender), "Not an election candidate");

        Promise memory newPromise = Promise(
            promiseId,
            domain,
            description,
            0,
            0,
            0
        );

        candidateAddressToPromiseId[sender].push(promiseId);
        promises[promiseId] = newPromise;
        promiseId++;
        emit PromiseAdded(sender, promiseId, domain, description);
    }

    // function to add a candidate
    function addCandidate(
        address _id,
        string memory _name,
        string memory _constituency,
        string memory _party,
        uint64 _networth
    ) public {
        Candidate memory newCandidate = Candidate(
            _id,
            _name,
            _constituency,
            _party,
            _networth
        );
        candidateAddresses.push(_id);
        isAddressCandidate[_id] = true;
        candidates[_id] = newCandidate;
        uint16[] memory commonPromises = new uint16[](1);
        commonPromises[0] = 0;
        candidateAddressToPromiseId[_id] = commonPromises;
    }
}
