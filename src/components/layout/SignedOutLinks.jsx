import React from 'react';
import styles from '../../scss/styles.scss';
import ProfilePicture from '../ProfilePicture';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';




function SignedOutLinks(){

  return(
      <ul className="right">
        <li><NavLink to='/'>Sign Up</NavLink></li>
        <li><NavLink to='/'>Login</NavLink></li>
      </ul>
  );
}

export default SignedOutLinks;
