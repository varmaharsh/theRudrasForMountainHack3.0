
const data = [
{ id: 2, name: "Anom", Domain: "heath Care", Description: '70% of my budget going into health care sector', State: "Fulifiled" },
{ id: 4, name: "Megha", Domain: 'power', Description: '70% of my budget going into health care sector',  State: "Unfulfiled" },
{ id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
{ id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
{ id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
{ id: 5, name: "Subham", Domain: "Education", Description: '70% of my budget going into health care sector',  State: "Inprogress"},
]

function Table() {
return (
	<div className="App">
	<table>
		<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Domain</th>
		<th>Description</th>
		<th>state</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.id}</td>
			<td>{val.name}</td>
			<td>{val.Domain}</td>
			<td>{val.Description}</td>
			<td>{val.State}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Table;
