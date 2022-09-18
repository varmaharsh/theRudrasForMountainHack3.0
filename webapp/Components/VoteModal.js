import React, { useState } from "react";
import { useNotification } from "web3uikit";

const VoteModal = ({ addVote, setShowModal, promiseId }) => {
  const [vote, setVote] = useState("");
  const dispatch = useNotification();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("voting with", promiseId, vote);
    const success = await addVote(promiseId, vote);
    if (success) {
      dispatch({
        type: "success",
        message:
          "Successfully added your vote to this promise id:" +
          promiseId +
          " in candidate's manifesto",
        title: "Vote Casted",
        position: "topR",
      });
    } else {
      dispatch({
        type: "info",
        message: "Please check votes again after some time or increase gas!",
        title: "Have you already voted for this promise?",
        position: "topR",
      });
    }
    setShowModal(false);
    setVote("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Promise state according to you:
          <input
            type="radio"
            id="0"
            value="0"
            name="Fulfilled"
            onChange={(e) => setVote(e.target.value)}
          />
          <input
            type="radio"
            id="1"
            value="1"
            name="Unfulfilled"
            onChange={(e) => setVote(e.target.value)}
          />
          <input
            type="radio"
            id="2"
            value="2"
            name="InProgress"
            onChange={(e) => setVote(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default VoteModal;
