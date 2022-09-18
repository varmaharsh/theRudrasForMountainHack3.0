import { Contract, providers } from "ethers";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import Contestant from "../Components/contestant";
import AllContestants from "../Components/contestants";

// use this to make call to the contract
import { abi, CONTRACT_ADDRESS } from "../constants";
import styles from "../styles/Home.module.css";

export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  const [isACandidate, setisACandidate] = useState(false);
  const [candidateDetails, setcandidateDetails] = useState([]);
  const [allCandidates, setallCandidates] = useState([]);
  const [promisesByCandidateId, setpromisesByCandidateId] = useState([]);

  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  /*
        connectWallet: Connects the MetaMask wallet
      */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Mumbai network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const getCandidates = async (candidateId = "") => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      const signer = await getProviderOrSigner(true);

      const contract = new Contract(CONTRACT_ADDRESS, abi, signer);

      const _isACandidate = await contract.isACandidate(signer.getAddress());
      //console.log("isACandidate", _isACandidate);
      setisACandidate(_isACandidate);

      const allCandidates = await contract.getAllCandidates();
      setallCandidates(allCandidates);
      // console.log("candidates", allCandidates);

      const _candidateId = _isACandidate ? signer.getAddress() : candidateId;
      //console.log("candidate id:", _candidateId);

      const candidateDetails = await contract.getCandidateDetails(_candidateId);
      //console.log("candidate details", candidateDetails);
      setcandidateDetails(candidateDetails);

      const promisesByCandidateId = await contract.getPromisesByCandidateId(
        _candidateId
      );
      //console.log("promises", promisesByCandidateId);
      setpromisesByCandidateId(promisesByCandidateId);

      // const vote = await contract.VoteForPromise(signer.getAddress(), 2, 0, {
      //   gasPrice: 100,
      //   gasLimit: 9000000,
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const getCandidateDetails = async (_isACandidate) => {
    if (!_isACandidate && candidateId === "") return;
    const signer = await getProviderOrSigner(true);
    const contract = new Contract(CONTRACT_ADDRESS, abi, signer);
    const _candidateId = _isACandidate ? signer.getAddress() : candidateId;
    const candidateDetails = await contract.getCandidateDetails(_candidateId);
    // console.log("candidate details", candidateDetails);
    setcandidateDetails(candidateDetails);
  };

  const getPromisesByCandidateId = async (_isACandidate) => {
    debugger;
    if (!_isACandidate && candidateId === "") return;
    const signer = await getProviderOrSigner(true);

    const contract = new Contract(CONTRACT_ADDRESS, abi, signer);
    const _candidateId = _isACandidate ? signer.getAddress() : candidateId;
    const promisesByCandidateId = await contract.getPromisesByCandidateId(
      _candidateId
    );
    // console.log("promises", promisesByCandidateId);
    setpromisesByCandidateId(promisesByCandidateId);
  };

  const addPromise = async (domain, description) => {
    try {
      const signer = await getProviderOrSigner(true);
      const contract = new Contract(CONTRACT_ADDRESS, abi, signer);
      const addPromise = await contract.addPromise(
        signer.getAddress(),
        domain,
        description
      );
      addPromise.wait();
      const promisesByCandidateId = await contract.getPromisesByCandidateId(
        signer.getAddress()
      );
      // console.log("promises", promisesByCandidateId);
      setpromisesByCandidateId(promisesByCandidateId);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet();
    }
  }, [walletConnected]);

  useEffect(() => {
    (async () => {
      if (walletConnected) {
        await getCandidates();
      }
    })();
  }, [walletConnected]);

  useEffect(() => {
    setInterval(async () => {
      await getCandidates();
    }, 5000);
  }, []);

  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wallet
    if (!walletConnected) {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>TheRudras</title>
        <meta name="description" content="TheRudras-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        {renderButton()}
        {isACandidate ? (
          <Contestant
            candidateDetails={candidateDetails}
            promisesByCandidateId={promisesByCandidateId}
            addPromise={addPromise}
            isACandidate={isACandidate}
          />
        ) : (
          <AllContestants
            allCandidates={allCandidates}
            candidateDetails={candidateDetails}
            promisesByCandidateId={promisesByCandidateId}
            addPromise={addPromise}
            isACandidate={isACandidate}
            getCandidates={getCandidates}
          />
        )}
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by The Rudras on Polygon
      </footer>
    </div>
  );
}
