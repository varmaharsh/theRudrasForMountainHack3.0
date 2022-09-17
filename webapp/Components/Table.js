// import SimpleTableComponent from 'reactjs-simple-table';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'Domain',
    headerName: 'Domain',
  },
  {
    field: 'Description',
    headerName: 'Description',
  },
  {
    field: 'State',
    headerName: 'State',
  },
];

// const data = [
// { id: 2, name: "Anom", Domain: "heath Care", Description: '70% of my budget going into health care sector', State: "Fulifiled" },
// { id: 4, name: "Megha", Domain: 'power', Description: '70% of my budget going into health care sector',  State: "Unfulfiled" },
// { id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
// { id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
// { id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
// { id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
// ]

function Table() {
  const heads = ["id", 'Name', 'Domain', 'Description', 'State'];
  const data = [
    {
      id: 2,
      name: 'Anom',
      Domain: 'heath Care',
      Description: '70% of my budget going into health care sector',
      State: 'Fulifiled',
    },
    {
      id: 4,
      name: 'Megha',
      Domain: 'power',
      Description: '70% of my budget going into health care sector',
      State: 'Unfulfiled',
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      State: 'Inprogress',
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      State: 'Inprogress',
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      State: 'Inprogress',
    },
    {
      id: 5,
      name: 'Subham',
      Domain: 'Education',
      Description: '70% of my budget going into health care sector',
      State: 'Inprogress',
    },
  ];

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
          {data.map((val, key) => (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.Domain}</td>
              <td>{val.Description}</td>
              <td>{val.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
