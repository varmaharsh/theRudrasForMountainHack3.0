// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
/*
author: gtrHarish
purpose: to write Candidates data to any chain
date: Sep-17-2022
*/
contract writeDataToChain {
    

    struct Candidate {
        // this address is same as candiadte address
        address id;
        string name;
        string constituency;
    }
    address addr1=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address addr2=0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
    address addr3=0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
    address addr4=0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB;

    address addr5=0xf821142CC270dAb63767cFAae15dC36D1b043348;
    address addr6=0x2Ba1b3D3794eC6E919d40693F5C153c9b6bbf3f7;
    address addr7=0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5;

    mapping(address => Candidate) internal candidatesByAddr;
    constructor(){
        
        candidatesByAddr[addr1] = Candidate(addr1,"gtrharish","ma");
        candidatesByAddr[addr2] = Candidate(addr2,"varmaharsh","ca");
        candidatesByAddr[addr3] = Candidate(addr3,"izzyDev","tx");
        candidatesByAddr[addr4] = Candidate(addr4,"lordRanchoatos","az");

        candidatesByAddr[addr5] = Candidate(addr5,"johnWick","fl");
        candidatesByAddr[addr6] = Candidate(addr6,"jamesBond","ga");
        candidatesByAddr[addr7] = Candidate(addr7,"jackReacher","wa");
    }

    function getCandidateDetails(address addr) external returns   (string memory){
        return candidatesByAddr[addr].name;
    }

}
