import React from 'react';
import styles from '../../scss/styles.scss';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function NavBar(props){
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return(
      <nav className="nav-wrapper green darken-1">
        <div className="container">
          <Link to="/">GoalBuddy</Link>
          { links }
        </div>
      </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar);
