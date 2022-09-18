import React, { useState } from "react";
import Table from "./Table";
import Modal from "./modal";

function Contestant({
  candidateDetails,
  promisesByCandidateId,
  addPromise,
  isACandidate,
  addVote,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div>
        <h1 className="desc hbio">Contestant: {candidateDetails.name}</h1>
        {isACandidate ? (
          <button onClick={() => setShowModal(!showModal)}>
            {showModal ? <p>Close</p> : <p>Add Promise</p>}
          </button>
        ) : null}
      </div>
      <div className="sides">
        <div className="sideA">
          <h4>Bio</h4>
          <div className="info">
            <ul className="promise-list">
              <li>Name: {candidateDetails.name}</li>
              <li>ID: {candidateDetails.id}</li>
              <li>Consituency: {candidateDetails.constituency}</li>
              <li>Party: {candidateDetails.party}</li>
              <li>Net Worth: {`${candidateDetails}`.split(",")[4]}</li>
            </ul>
          </div>
        </div>
        <div className="side">
          <h4>Promises</h4>
          <Table
            promisesByCandidateId={promisesByCandidateId}
            isACandidate={isACandidate}
            addVote={addVote}
          />
        </div>
      </div>
      {showModal ? (
        <Modal addPromise={addPromise} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default Contestant;
