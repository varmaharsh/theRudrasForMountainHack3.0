import React, { useState } from "react";
import { Button } from "web3uikit";
// import './Users.css'
import Contestant from "../Components/contestant";

const AllContestants = ({
  allCandidates,
  getCandidates,
  candidateDetails,
  promisesByCandidateId,
  addPromise,
  isACandidate,
}) => {
  const [showCandidatePage, setShowCandidatePage] = useState(false);

  console.log(allCandidates);
  return showCandidatePage ? (
    <div>
      <Button
        onClick={() => {
          setShowCandidatePage(false);
          getCandidates();
        }}
        text="Back"
        type="button"
      />
      <Contestant
        candidateDetails={candidateDetails}
        promisesByCandidateId={promisesByCandidateId}
        addPromise={addPromise}
        isACandidate={isACandidate}
      />
    </div>
  ) : (
    <div>
      <h1>CONTESTANTS</h1>
      {/* <Promise/> */}
      {allCandidates.map((acandi, index) => {
        console.log("trying", `${acandi}`.split(",")[4]);
        return (
          <div
            key={index}
            className="promise-list"
            onClick={() => {
              getCandidates(acandi.id);
              setShowCandidatePage(true);
            }}
          >
            <p>NAME:{acandi.name}</p>
            <p>ID: {acandi.id}</p>
            <p>CONSTITUENCY: {acandi.constituency}</p>
            <p>NETWORTH: {`${acandi}`.split(",")[4]}</p>
            <p>PARTY: {acandi.party}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllContestants;
