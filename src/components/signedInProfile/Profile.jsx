import React from 'react';
import NavBar from '../layout/NavBar';
import styles from '../../scss/styles.scss';
import { connect } from 'react-redux';
import ActiveGoalList from './ActiveGoalList';

function Profile(props){
  const { auth, profile } = props;
  console.log(props)
  return(
    <div className="container">
      <div className="card center">
        <h2>{profile.firstName} {profile.lastName}</h2>
        <h3>{auth.email}</h3>  
      </div>
      <div className="active-goals">
        <h5 className="active-goals-header">{profile.firstName + "'s"} active goals:</h5>
        <ActiveGoalList/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}


export default connect(mapStateToProps)(Profile);
