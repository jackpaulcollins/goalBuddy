import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/styles.scss';

function SignedOutDashboard(){
  return (
    <div className="dashboard-content">
      <div className="card blue-grey">
        <div className="card-content white-text homepage-card">
          <h3>Welcome to Goal Buddy!</h3>
          <p>Make Friends & Accomplish Goals With Them</p>
          <div className="buttons"><Link to="/signin"><button className="waves-effect waves-light btn">Sign In!</button></Link><Link to="/signup"><button className="waves-effect waves-light btn">Sign Up</button></Link></div>
        </div>
      </div>
    </div>
  )
}


export default SignedOutDashboard;
