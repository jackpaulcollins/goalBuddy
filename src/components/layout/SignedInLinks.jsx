import React from 'react';
import styles from '../../scss/styles.scss';
import ProfilePicture from '../ProfilePicture';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';




function SignedInLinks(){

  return(
      <ul className="right">
        <li><NavLink to='/create'>New Goal!</NavLink></li>
        <li><NavLink to='/profile/:uid'>Profile</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">JC</NavLink></li>
      </ul>
  );
}

export default SignedInLinks;
