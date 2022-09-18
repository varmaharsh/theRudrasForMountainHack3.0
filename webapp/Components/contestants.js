import React from 'react';
// import './Users.css'

const AllContestants = ({ allCandidates }) => {
  return (
    <div>
      <h1>CONTESTANTS</h1>
      {/* <Promise/> */}
      {allCandidates.map((acandi, index) => {
        // const net = `${acandi.split(',')}`}
        console.log('trying', `${acandi}`.split(',')[4]);
        // console.log("trying",{acandi})
        return (
          <div key={index} className="promise-list">
            <p className='name'>NAME:{acandi.name}</p>
            <p className='id'>ID: {acandi.id}</p>
            <p className='const'>CONSTITUENCY: <span className='imp'>{acandi.constituency}</span></p>
            <p className='netw'>NETWORTH: ${`${acandi}`.split(',')[4]}</p>
            <p >PARTY: <span className='imp'>{acandi.party}</span></p>
          </div>
        );
      })}

      <style jsx>{`
        .promise-list {
          background-color: rgba(255, 255, 255, 0.711);
          border-radius: 10px;
          padding: 10px 20px;
          border: 1px solid white;
          margin: 5px 0px;
          min-width: 700px;
          max-width: 1000px;
        }
        .name{
          font-weight: bold;
        }
        .id {
          font-style: italic;
        }
        .imp {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default AllContestants;
