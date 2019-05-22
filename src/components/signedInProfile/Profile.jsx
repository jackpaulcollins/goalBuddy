import React from 'react';
import NavBar from '../layout/NavBar';
import styles from '../../scss/styles.scss';

function Profile(props){
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return(
    <div>
      <NavBar/>
      <div>
        <nav><h1>Jack Collins</h1><span>Goals</span> | <span>About</span> | <span>Photos</span></nav>
        <div className="profile-card">
          <h2>Active Goals: </h2>
          <h2>Past Goals: </h2>
          <h2>Goal Buddies: </h2>
        </div>
        <div className="profile-engage">
          <button>Message</button>
          <button>Add Buddy</button>
          <button>Report</button>
        </div>
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
