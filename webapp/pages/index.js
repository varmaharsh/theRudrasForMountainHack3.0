import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-contain">
        <div className="intro-nav">
          <p className="logo">
            Rudras <br />
            <span>(Rudras)</span>
          </p>
          <ul className="nav-mean">
            <li>
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="intro-body">
          <div className="intro-left">
            <h4 className="intro-head">
              Welcome to Election Campaign Promise tracker
            </h4>
            <p className="intro-descs">
              We keeeps a track of the agenda of all the elected candidates and
              there promises.
            </p>
            <p className="intro-desc">
              Election Campaign Promise Tracker stores all the promises made by
              elected candidates and stores it in the blockchain for immutable
              database, so that it would not be changed by anyone
            </p>
            <p className="intro-desc">
              To get started click the button below <br /> <br /> 👇
            </p>
            {/* Please note this is the button to connect to the wallet */}
            <div className="intro-connect">
              <Link href="/home">
                <a>Connect wallet</a>
              </Link>
            </div>
          </div>
          <div className="intro-right">
            <div className="intro-tab">
              <div className="note fir">Reliability</div>
              <div className="note">Security</div>
              <div className="note sec">Ethereum</div>
              <div className="note third">Polygon</div>
              <div className="note">Inmutable Data</div>
              <div className="note fourth">Blockchain</div>
            </div>
            {/* Logos */}
            <div className="partner-logo">
              <img
                src="./polygonlogo.svg"
                alt="polygon logo"
                className="p-logo"
              />
              <img src="./HTM.png" alt="HTM" />
              <img src="./logo-blue.png" alt="Learnweb3 logo" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

        .intro-nav {
          display: flex;
          background-color: #74c6df8c;
          top: 0;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
        .intro-nav p {
          padding: 5px 15px;
          margin: 0px;
        }
        .intro-nav .logo {
          font-family: Lobster;
          font-size: 30px;
        }
        .intro-nav .logo span {
          font-size: 14px;
          font-family: Urbanist;
        }
        .nav-mean {
          gap: 22px;
          color: white;
          margin-right: 10px;
        }
        .nav-mean li {
          background-color: #120a3f;
          padding: 10px 20px;
          border-radius: 10px;
        }
        .intro-body {
          display: flex;
          /* padding: 0px 20px; */
          width: 100vw;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 50px;
        }
        .intro-left {
          text-align: left;
        }
        .intro-head {
          font-size: 45px;
          max-width: 600px;
          font-weight: 600;
          margin-bottom: 0px;
        }

        .intro-descs {
          font-size: 18px;
          color: white;
          max-width: 600px;
        }
        .intro-desc {
          font-size: 15px;
          color: white;
          max-width: 500px;
        }
        .intro-connect {
          background-color: #120a3f;
          width: fit-content;
          padding: 10px 20px;
          border-radius: 10px;
          color: white;
          font-size: 20px;
          overflow: hidden;
          cursor: pointer;
          animation: shake 1s ease infinite;
          transition: 1s linear;
        }

        .intro-connect:hover {
          animation: none;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes shake {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .intro-tab {
          margin-top: 60px;
          display: grid;
          flex-wrap: wrap;
          grid-template-columns: 1fr 1fr 1fr;
          /* max-width: 400px; */
          height: fit-content;
          row-gap: 0px;
          column-gap: 0px;
          /* display: flex; */
          /* border: 1px solid black;
            border-radius: 10px;
            width: fit-content;
            height: fit-content; */
        }
        .note {
          padding: 20px 30px;
          border: 1px solid white;
          font-size: 20px;
          color: white;
        }
        .fir {
          border-top-left-radius: 10px;
        }
        .sec {
          border-top-right-radius: 10px;
        }
        .third {
          border-bottom-left-radius: 10px;
        }
        .fourth {
          border-bottom-right-radius: 10px;
        }
        .partner-logo {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        .partner-logo img {
          width: 100px;
        }
        .partner-logo img:nth-child(3),
        .partner-logo img:nth-child(1) {
          width: 200px;
        }
      `}</style>
    </div>
  );
};

export default Intro;
