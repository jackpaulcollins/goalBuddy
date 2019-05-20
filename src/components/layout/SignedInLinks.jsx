import React from 'react';
import styles from '../../scss/styles.scss';
import { NavLink } from 'react-router-dom';


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
