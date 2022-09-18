import React, { useState } from "react";
import { useNotification } from "web3uikit";

function modal({ addPromise, setShowModal }) {
  const [Domain, setDomain] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useNotification();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await addPromise(Domain, Description);
    if (success) {
      dispatch({
        type: "success",
        message: "Successfully added promise to your election manifesto",
        title: "Promise Added",
        position: "topR",
      });
    } else {
      dispatch({
        type: "error",
        message:
          "Try again or check if you're signed in with the correct account",
        title: "Promise Couldn't be added",
        position: "topR",
      });
    }
    setShowModal(false);
    setDomain("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Domain:
          <input
            type="text"
            name="Domain"
            required={true}
            onChange={(e) => setDomain(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="Description"
            required={true}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default modal;
