import React from 'react';
// import './Users.css'

const AllContestants = ({ allCandidates }) => {

  return (
    <div>
        <h1>CONTESTANTS</h1>
      {/* <Promise/> */}
      {allCandidates.map((acandi, index) => {
        return (
        <div key={index} className="promise-list">
          <p>NAME:{acandi.name}</p>
          <p>ID: {acandi.id}</p>
          <p>CONSTITUENCY: {acandi.constituency}</p>
          <p>NETWORK: {acandi.network}</p>
          <p>PARTY: {acandi.party}</p>
        </div>
      )})}
    </div>
  );
};

export default AllContestants;
