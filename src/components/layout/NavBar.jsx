import React from 'react';
import styles from '../../scss/styles.scss';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function NavBar(props){
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
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
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavBar);
