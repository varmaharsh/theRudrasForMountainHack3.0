


function Table({promisesByCandidateId}) {
  const heads = ["id", 'Domain', 'Description', "fulfiled", "unfulfiled", "inProgress"];
  
  console.log("from table one data", promisesByCandidateId)

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {heads.map((val, key) => (
              <th key={key} style={{ color: 'white' }} className="">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
