// update this file after deployment of the contract
export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "PromiseAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_promiseId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_vote_type",
        type: "uint16",
      },
    ],
    name: "VoteForPromise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_constituency",
        type: "string",
      },
      {
        internalType: "string",
        name: "_party",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "_networth",
        type: "uint64",
      },
    ],
    name: "addCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "domain",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "addPromise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCandidates",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "constituency",
            type: "string",
          },
          {
            internalType: "string",
            name: "party",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "networth",
            type: "uint64",
          },
        ],
        internalType: "struct ElectionPromiseTracker.Candidate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getCandidateDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "constituency",
            type: "string",
          },
          {
            internalType: "string",
            name: "party",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "networth",
            type: "uint64",
          },
        ],
        internalType: "struct ElectionPromiseTracker.Candidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "candidateId",
        type: "address",
      },
    ],
    name: "getPromisesByCandidateId",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "id",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "domain",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "fulfilled",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unfulfilled",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inprogress",
            type: "uint256",
          },
        ],
        internalType: "struct ElectionPromiseTracker.Promise[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isACandidate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const CONTRACT_ADDRESS = "0x4535eFd33Ce0743FB4F150DE16513644Cacb2D79";
