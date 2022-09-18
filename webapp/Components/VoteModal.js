import React, { useState } from 'react';
import { useNotification } from 'web3uikit';

const VoteModal = ({ addVote, setShowModal, promiseId }) => {
  const [vote, setVote] = useState('');
  const dispatch = useNotification();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('voting with', promiseId, vote);
    const success = await addVote(promiseId, vote);
    if (success) {
      dispatch({
        type: 'success',
        message:
          'Successfully added your vote to this promise id:' +
          promiseId +
          " in candidate's manifesto",
        title: 'Vote Casted',
        position: 'topR',
      });
    } else {
      dispatch({
        type: 'info',
        message: 'Please check votes again after some time or increase gas!',
        title: 'Have you already voted for this promise?',
        position: 'topR',
      });
    }
    setShowModal(false);
    setVote('');
  };

  return (
    <div>
      <form className="modal" onSubmit={handleSubmit}>
        <p>Promise state according to you:</p>
        <div>
          <input
            type="radio"
            id="0"
            value="0"
            name="voteFor"
            onChange={(e) => setVote(e.target.value)}
          />
          <label for="html">Fulfilled</label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            id="1"
            required
            value="1"
            name="voteFor"
            onChange={(e) => setVote(e.target.value)}
          />
          <label for="html">UnFulfilled</label>
        </div>
        <br></br>
        <div>
          <input
            type="radio"
            id="2"
            value="2"
            name="voteFor"
            onChange={(e) => setVote(e.target.value)}
          />
          <label for="html">InProgress</label>
        </div>
        <br></br>
        <div className='btns'>
          <input className="button" type="submit" value="Submit" />
          <button onClick={closeModal} className="button" value="Submit">
            Close
          </button>
        </div>
      </form>

      <style jsx>{`
        .modal {
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 20px 20px;
          position: absolute;
          width: 50%;
          height: auto;
          background-color: rgba(7, 113, 235, 0.7);
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .btns {
          display: flex;
          margin: 20px
        }

        .button {
          /* color: rgba(31, 30, 30, 0.752); */
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border: 2px solid #fafafaef;
          border-radius: 10px;
          font-weight: 600;
          background-color: #5851dfcd;
          margin-right: 20px 
        }
      `}</style>
    </div>
  );
};

export default VoteModal;
