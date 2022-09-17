


function Table({promisesByCandidateId}) {
  const heads = ["id", 'Domain', 'Description', "fulfiled", "unfulfiled", "inProgress"];
  const data = [
    {
      id: 2,
      name: 'Anom',
      Domain: 'heath Care',
      Description: '70% of my budget going into health care sector',
      fulfiled: 5034,
      unfulfiled: 370,
      inprogress: 2000,
    },
    {
      id: 4,
      name: 'Megha',
      Domain: 'power',
      Description: '70% of my budget going into health care sector',
      fulfiled: 5034,
      unfulfiled: 370,
      inprogress: 2000,
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      fulfiled: 5034,
      unfulfiled: 370,
      inprogress: 2000,
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      fulfiled: 5034,
      unfulfiled: 370,
      inprogress: 2000,
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      fulfiled: 5034,
      unfulfiled: 370,
      inprogress: 2000,
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      fulfiled: 5034,
      unfulfiled: 370,
      inprogress: 2000,
    },
  ];
  console.log("from table", promisesByCandidateId)

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
              {/* <td>{val.fulfilled}</td> */}
              {/* <td>{val.unfulfilled}</td> */}
              {/* <td>{val.fulfilled}</td> */}
              {/* <td>{val.inprogress}</td> */}
              {/* <td>{val.unfulfilled}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
