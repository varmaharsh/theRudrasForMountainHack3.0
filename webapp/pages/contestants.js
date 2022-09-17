import React from 'react'
// import './Users.css'

const AllContestants = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='navbar'>
        <div className="nav-contain">
          <p className="logo">The Rudras</p>
          <p className="desc">Election campaign promise tracker</p>
          <p className="connect-wallet">Connect Wallet</p>
        </div>
      </div>
      {/* <Overview/> */}
      <div className='overview'>
        <div className="overview-contain">
            <p  className="contestant">Contestant Overview</p>
            <div className="cont-over">
                <div className="fullfiled prom">Fullfiled Promises: <br /> <span>2</span> </div>
                <div className="ongoing prom">Ongoing Promises: <br /> <span>5</span></div>
                <div className="unfullfiled prom">Unfullfiled Promises: <br /> <span>20</span></div>
            </div>
        </div>
      </div>
      {/* <Promise/> */}
      <div className='promise'>
        <div className="promise-contain">
            <p className="promise-head">Promises</p>
            <div className="promise-list">
              <div className="list-head">
                <p className='id'>ID</p>
                <p className='proms'>Promise</p>
                <p className='stat'>Status</p>
              </div>
              <ul>
                <li className='id'>1</li>
                <li className='proms'>Education</li>
                <li className='stat'>Ongoing</li>
              </ul>
              <ul>
                <li className='id'>1</li>
                <li className='proms'>Education</li>
                <li className='stat'>Ongoing</li>
              </ul>
              <ul>
                <li className='id'>1</li>
                <li className='proms'>Education</li>
                <li className='stat'>Ongoing</li>
              </ul>
              <ul>
                <li className='id'>1</li>
                <li className='proms'>Education</li>
                <li className='stat'>Ongoing</li>
              </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AllContestants