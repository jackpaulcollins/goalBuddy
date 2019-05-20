import React from 'react';
import styles from '../../scss/styles.scss';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function NavBar(){

  return(
      <nav className="nav-wrapper green darken-1">
        <div className="container">
          <Link to="/">GoalBuddy</Link>
          <SignedInLinks/>
          <SignedOutLinks/>
        </div>
      </nav>
  );
}

export default NavBar;
