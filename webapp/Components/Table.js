


function Table({promisesByCandidateId}) {
  const heads = ["id", 'Domain', 'Description', "fulfiled", "unfulfiled", "inProgress"];
  
  console.log("from table one data", promisesByCandidateId)

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {heads.map((val, key) => (
              <th key={key} style={{ color: 'black', padding: "0px 10px" }} className="theader">
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
    </div>
  );
}

export default Table;
