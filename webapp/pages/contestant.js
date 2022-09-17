import React, { useState } from 'react';
import Table from '../Components/Table';
import Modal from '../Components/modal';

function Contestant() {
  const [showModal, setShowModal] = useState(false);




  return (
    <div className="container">
      <div>
        <h1 className="desc hbio">Contestant: AYUSHI AISHA</h1>
        <button onClick={() => setShowModal(!showModal)}>
          {showModal ? <p>Close</p> : <p>Add Promise</p>}
        </button>
      </div>
      <div className="sides">
        <div className="sideA">
          <h4>Bio</h4>
          <div className="info">
            <ul className="promise-list">
              <li>Name: Ayushi Aisha</li>
              <li>Sex: Female</li>
              <li>ID: 0474937</li>
              <li>Designation: none</li>
              <li>Consituency: Maya</li>
              <li>Party: HTM</li>
              <li>Net Worth: $120,000</li>
              <li>Liquidity: $80,000</li>
              <li>
                Experience: Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                accident, sometimes on purpose (injected humour and the like).
              </li>
              <li>Size of constituency: 19,000 people</li>
            </ul>
          </div>
        </div>
        <div className="side">
          <h4>Promises</h4>
          <Table />
        </div>
      </div>
      {showModal ? <Modal /> : null}
    </div>
  );
}

export default Contestant;
