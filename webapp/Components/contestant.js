import React, { useState } from "react";
import Table from "./Table";
import Modal from "./modal";

const Contestant = ({
  candidateDetails,
  promisesByCandidateId,
  addPromise,
  isACandidate,
  addVote,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="cand">
      {showModal ? (
        <Modal addPromise={addPromise} setShowModal={setShowModal} />
      ) : null}
      <div className="cand-contain">
        <div className="cand-head">
          <h4 className="cand-name">Contestant: {candidateDetails.name}</h4>
          {isACandidate ? (
            <button onClick={() => setShowModal(!showModal)}>
              {showModal ? <p>Close</p> : <p>Add Promise</p>}
            </button>
          ) : null}
        </div>
        <div className="cand-det">
          <div className="cand-left">
            <h5 className="left-title title">Bio:</h5>
            <p>
              This is a little detail about the contestant that participated in
              the election.:
            </p>
            <div className="info">
              <ul className="cand-det-list">
                <li>
                  <div className="candet">
                    <span>Name:</span>
                    <span>{candidateDetails.name}</span>
                  </div>
                </li>
                <li>
                  <div className="candet">
                    <span>ID:</span>
                    <span>{candidateDetails.id}</span>
                  </div>
                </li>
                <li>
                  <div className="candet">
                    <span>Consituency:</span>
                    <span>{candidateDetails.constituency}</span>
                  </div>
                </li>
                <li>
                  <div className="candet">
                    <span>Party:</span>
                    <span>{candidateDetails.party}</span>
                  </div>
                </li>
                <li>
                  <div className="candet">
                    <span>Net Worth:</span>
                    <span>${`${candidateDetails}`.split(",")[4]}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cand-right">
            <h5 className="right-title title">Promises:</h5>
            <p>These are the list of promises made by the contestant:</p>
            <div className="cand-prom-list">
              <ul className="cand-prom">
                <Table
                  promisesByCandidateId={promisesByCandidateId}
                  isACandidate={isACandidate}
                  addVote={addVote}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .cand-contain {
          max-width: 100%;
          margin: 50px 150px;
          margin-top: -55px;
        }

        .cand-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h5 {
          margin: 0px;
        }

        .cand-head h4 {
          font-size: 32px;
          color: white;
          margin: 20px 0px;
        }
        .cand-head button {
          background-color: #120a3f;
          width: fit-content;
          padding: 2px 20px;
          border-radius: 10px;
          color: white;
          font-size: 20px;
          border: none;
          cursor: pointer;
          animation: shake 1s ease infinite;
          transition: 1s linear;
        }

        .cand-head button:hover {
          animation: none;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .candet {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(38, 36, 36, 0.543);
          margin-bottom: 10px;
          margin-top: 10px;
          padding-bottom: 10px;
        }

        .candet span:nth-child(1) {
          font-weight: 600;
          /* color: rgba(65, 65, 241, 0.881); */
        }

        .cand-det {
          display: flex;
          align-items: baseline;
          gap: 20px;
          width: 100%;
        }
        .cand-det h5 {
          font-size: 25px;
          text-align: left;
        }

        .cand-left {
          flex: 1;
          max-width: 30%;
        }
        .cand-det-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: rgba(255, 255, 255, 0.508);
          border: 2px solid white;
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 10px;
        }
        .cand-right {
          flex: 1;
          max-width: 70%;
        }
        .prom {
          display: flex;
        }
        .title {
          color: white;
          font-size: 35px !important;
        }
        .cand-prom {
          display: flex;
          gap: 10px;
          background-color: rgba(255, 255, 255, 0.508);
          border: 2px solid white;
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 10px;
        }
        .cand-left p {
          color: white;
          text-align: left;
          font-size: 18px;
        }
        .cand-right p {
          color: white;
          text-align: left;
          font-size: 18px;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );

  // return (
  //   <div className="cand">
  //     <div className="cand-contain">
  //       <div className="cand-head">
  //         <h1 className="cand-name">Contestant: {candidateDetails.name}</h1>
  //         <button onClick={() => setShowModal(!showModal)}>
  //           {showModal ? <p>Close</p> : <p>Add Promise</p>}
  //         </button>
  //       </div>
  //     </div>
  //     <div className="cand-det">
  //       <div className="cand-left">
  //         <h4 className="left-title">Bio</h4>
  //         <div className="info">
  //           <ul className="cand-det-list">
  //             <li>Name: {candidateDetails.name}</li>
  //             <li>ID: {candidateDetails.id}</li>
  //             <li>Consituency: {candidateDetails.constituency}</li>
  //             <li>Party: {candidateDetails.party}</li>
  //             <li>Net Worth: {`${candidateDetails}`.split(',')[4]}</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="cand-right">
  //         <h4 className="right-title">Promises</h4>
  //         <Table promisesByCandidateId={promisesByCandidateId} />
  //       </div>
  //     </div>
  //     {showModal ? <Modal /> : null}
};

export default Contestant;
