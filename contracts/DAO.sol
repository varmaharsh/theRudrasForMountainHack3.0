// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {
    event AgendaAdded(address, uint16, string, string);

    //Vote Type
    enum vote_type {
        FULFILLED,
        UNFULFILLED,
        ONGOING
    }

    // Promise object
    struct Agenda {
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
        string dob;
        uint64 networth;
        uint64 liquidity;
        uint64 constituencySize;
        uint8 experience;
    }

    mapping(uint16 => Agenda) internal promises;
    mapping(uint256 => address[]) internal promiseIdToAddress;

    // use this to check if user calling the function is candidate or voter
    address[] internal candidateAddresses;

    // address to candidates
    mapping(address => Candidate) candidates;

    // use this to find all promises by a candidate and then use the promises mapping to return them all
    mapping(address => uint16[]) candidateAddressToPromiseId;

    // increment this after adding a promise
    uint16 agendaId = 1;

    // add a function to return a whether a given address is candidate or not
    //gtrHarish function1
    function IsACandidate(address addr) private returns (bool) {
        //check if this address exists in candidates map
        // fix this condition
        // if (candidates[addr] == bytes4(0x0)) {
        //     return false;
        // } else {
        //     return true;
        // }
    }

    // function to return list of candidates with info, this should be an array

    // function to return details of a candidate given his id/address

    // function to return all promises given a candidate id/address
    function getPromisesByCandidateId(address candidateId)
        public
        view
        returns (Agenda[] memory)
    {
        uint16[] memory promiseIds = candidateAddressToPromiseId[candidateId];
        Agenda[] memory agendas = new Agenda[](promiseIds.length);
        for (uint16 i = 0; i < promiseIds.length; i++) {
            agendas[i] = (promises[promiseIds[i]]);
        }
        return agendas;
    }

    // check if msg.sender is not a candidate
    //gtrHarish function2
    function IsMessengerAVoter() external returns (bool) {
        if (!IsACandidate(msg.sender)) {
            return true;
        } else {
            return false;
        }
    }

    // function to edit a promise object given its promise id,
    //basically take promise id and vote type as input and check if msg.sender is not already in promiseIdToAddress mapping
    // if not them update the promise vote count based on if it was fulfilled, unfulfilled etc

    // function to add promise given a candidate id and promise details
    // check if msg.sender is a candidate
    // take all promise details except the fulfilled, unfulfilled counts etc, assign then zero
    function addAgenda(string calldata domain, string calldata description)
        external
    {
        // check if msg.sender is a candidate

        Agenda memory newAgenda = Agenda(
            agendaId,
            domain,
            description,
            0,
            0,
            0
        );

        candidateAddressToPromiseId[msg.sender].push(agendaId);
        promises[agendaId] = newAgenda;
        agendaId++;
        emit AgendaAdded(msg.sender, agendaId, domain, description);
    }

    // function to add a candidate

    //gtrHarish function3
    function IsMessengerACandidate() external returns (bool) {
        if (IsACandidate(msg.sender)) {
            return true;
        } else {
            return false;
        }
    }

    // write a script to call this function and load the candidates on any env

    // write a script to deploy this on any network

    // Please don't change the structure, so that I can take this forward from where you leave

    // Do not commit anything, priotise storing candidates with script and deploying contracts, I can fill contract functions
    // share text files on discord I'll commit it when time starts
}
