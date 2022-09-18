import React, { useState } from "react";
import { Button } from "web3uikit";
import VoteModal from "./VoteModal";

const Table = ({ promisesByCandidateId, isACandidate, addVote }) => {
  let heads = [
    "Id",
    "Domain",
    "Description",
    "Fulfiled",
    "Unfulfiled",
    "InProgress",
  ];
  if (!isACandidate) {
    heads = [...heads, "Action"];
  }

  const [showVoteModal, setShowVoteModal] = useState(false);
  const [selectedPromiseId, setSelectedPromiseId] = useState("");

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {heads.map((val, key) => (
              <th
                key={key}
                style={{ color: "black", padding: "0px 10px" }}
                className="theader"
              >
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {promisesByCandidateId.map((val, key) => (
            <tr key={key} className="trd">
              <td>{val.id}</td>
              <td>{val.domain}</td>
              <td className="desc">{val.description}</td>
              <td>{`${val.fulfilled}`}</td>
              <td>{`${val.unfulfilled}`}</td>
              <td>{`${val.inprogress}`}</td>
              {!isACandidate ? (
                <td>
                  <Button
                    onClick={() => {
                      setShowVoteModal(true);
                      setSelectedPromiseId(val.id);
                    }}
                    text="Vote"
                    type="button"
                  />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .theader {
          color: black;
        }
        td {
          margin: 0px 30px;
        }
        .desc {
          display: flex;
          align-items: baseline;
        }
        .trd {
          align-items: baseline;
          flex-direction: row;
        }
      `}</style>
      {showVoteModal ? (
        <VoteModal
          addVote={addVote}
          setShowModal={setShowVoteModal}
          promiseId={selectedPromiseId}
        />
      ) : null}
    </div>
  );
};

export default Table;
