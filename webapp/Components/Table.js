import { Button } from "web3uikit";

function Table({ promisesByCandidateId, isACandidate }) {
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

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {heads.map((val, key) => (
              <th key={key} style={{ color: "white" }} className="">
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {promisesByCandidateId.map((val, key) => (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.domain}</td>
              <td>{val.description}</td>
              <td>{`${val.fulfilled}`}</td>
              <td>{`${val.unfulfilled}`}</td>
              <td>{`${val.inprogress}`}</td>
              {!isACandidate ? (
                <td>
                  <Button onClick={() => {}} text="Vote" type="button" />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
