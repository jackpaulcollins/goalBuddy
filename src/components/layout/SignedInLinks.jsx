import React from 'react';
import styles from '../../scss/styles.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions'


function SignedInLinks(props){
  const { signOut, profile } = props;

  return(
      <ul className="right">
        <li><NavLink to='/create'>New Goal!</NavLink></li>
        <li><a onClick={signOut}>Log Out</a></li>
        <li><NavLink to='/profile' className="btn btn-floating blue lighten-1">{profile.initials}</NavLink></li>
      </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
