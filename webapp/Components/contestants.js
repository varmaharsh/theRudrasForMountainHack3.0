import React, { useState } from "react";
import { Button } from "web3uikit";
import Link from 'next/link';


import Contestant from "../Components/contestant";

const AllContestants = ({
  allCandidates,
  getCandidates,
  candidateDetails,
  promisesByCandidateId,
  addPromise,
  isACandidate,
  addVote,
}) => {
  const [showCandidatePage, setShowCandidatePage] = useState(false);

  console.log(allCandidates);

  return (
    <>
      {showCandidatePage ? (
        <div className="back-button">
          <div>
            <Button
              onClick={() => {
                setShowCandidatePage(false);
                getCandidates();
              }}
              text="Back"
              type="reset"
              size="large"
            />
          </div>
          <div>
            <Contestant
              candidateDetails={candidateDetails}
              promisesByCandidateId={promisesByCandidateId}
              addPromise={addPromise}
              isACandidate={isACandidate}
              addVote={addVote}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className='ctbtn'>
              <ul className="nav-mean">
                <li>
                  <Link href="/">
                    <a>About</a>
                  </Link>
                </li>
              </ul>
            </div>
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
                <p className="name">NAME:{acandi.name}</p>
                <p className="id">ID: {acandi.id}</p>
                <p className="const">
                  CONSTITUENCY:{" "}
                  <span className="imp">{acandi.constituency}</span>
                </p>
                <p className="netw">NETWORTH: ${`${acandi}`.split(",")[4]}</p>
                <p>
                  PARTY: <span className="imp">{acandi.party}</span>
                </p>
              </div>
            );
          })}
        </div>
      )}
      <style jsx>{`
      .ctbtn {
        width: 200px;
      }
        .nav-mean {
          gap: 22px;
          color: white;
          margin-right: 10px;
        }
        .nav-mean li {
          background-color: #120a3f;
          padding: 10px 20px;
          border-radius: 10px;
          list-style: none;
        }
        .back-button {
          display: flex;
          flex-direction: column;
        }
        .promise-list {
          background-color: rgba(255, 255, 255, 0.711);
          border-radius: 10px;
          padding: 10px 20px;
          border: 1px solid white;
          margin: 5px 0px;
          min-width: 700px;
          max-width: 1000px;
        }
        .name {
          font-weight: bold;
        }
        .id {
          font-style: italic;
        }
        .imp {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default AllContestants;
