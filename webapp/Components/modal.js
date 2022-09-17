import React, { useState } from 'react';

function modal() {
    const [Domain, setDomain] = useState("");
    const [Description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The domain you entered was: ${Domain}`)
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Domain:
          <input type="text" name="Domain" onChange={(e) => setDomain(e.target.value)}/>
        </label>
        <label>
          Description:
          <input type="text" name="Description" onChange={(e) => setDomain(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default modal;
