import React from 'react';
import styles from '../../scss/styles.scss';
import ProfilePicture from '../ProfilePicture';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';




function NavBar(){

  return(
      <nav className="nav-wrapper green darken-1">
        <div className="container">
          <Link to="/">Goal Buddy</Link>
          <SignedInLinks/>
          <SignedOutLinks/>
        </div>
      </nav>
  );
}

export default NavBar;
