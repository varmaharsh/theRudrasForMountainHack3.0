import React, { useState } from "react";
import { useNotification } from "web3uikit";

const Modal = ({ addPromise, setShowModal }) => {
  const [Domain, setDomain] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useNotification();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await addPromise(Domain, Description);
    if (success) {
      dispatch({
        type: "success",
        message: "Successfully added promise to your election manifesto",
        title: "Promise Added",
        position: "topR",
      });
    } else {
      dispatch({
        type: "error",
        message:
          "Try again or check if you're signed in with the correct account",
        title: "Promise Couldn't be added",
        position: "topR",
      });
    }
    setShowModal(false);
    setDomain("");
    setDescription("");
  };

  return (
    <div className="modal">
      <div className="modal-contain">
        <form onSubmit={handleSubmit}>
          <div className="in">
            <label htmlFor="dom">Domain:</label>
            <input
              type="text"
              name="Domain"
              required={true}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          <div className="in">
            <label htmlFor="descr">Description:</label>
            <textarea
              type="text"
              name="Description"
              required={true}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="button">Submit</button>
        </form>

        <style jsx>{`
          .modal {
            width: 100vw;
            height: 100vh;
            background-color: rgba(233, 233, 236, 0.2);
            z-index: 10;
            backdrop-filter: blur(10px);
          }

          .modal-contain {
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0px auto;
            place-content: center;
          }

          .modal-contain form {
            padding: 30px 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.852);
            width: 500px;
            border: 2px solid white;
          }

          .in {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: 20px;
          }

          .in label {
            font-size: 20px;
            margin-bottom: 5px;
          }

          .in input {
            border: 2px solid rgba(45, 44, 44, 0.663);
            height: 40px;
            outline: none;
            border-radius: 5px;
            padding: 5px 10px;
            /* width: 100%; */
          }
          .in textarea {
            border: 2px solid rgba(45, 44, 44, 0.663);
            height: 120px;
            outline: none;
            border-radius: 5px;
            padding: 5px 10px;
            /* width: 100%; */
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
          }

          .button:hover {
            cursor: pointer;
            border: none;
            animation: pulsate 1s ease-in-out; /*The pulsate animation is added on hover. You could also add this on .button:focus and it will add it when clicking the button as well.*/
          }

          @keyframes pulsate {
            /* 
                    Here we have two shadows. You can add as many as you want by using different offset values as long as you separate it with a comma.
                    The values are as follow: offset-x | offset-y | blur-radius | color
                */
            0% {
              box-shadow: 0 0 15px #5ddcff, 0 0 9px #4e00c2;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Modal;
