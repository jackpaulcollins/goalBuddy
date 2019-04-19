import React from 'react';
import styles from '../scss/styles.scss';
import ProfilePicture from './ProfilePicture';

function NavBar(){

  return(
    <div>
      <nav className="nav">
        <div className="navLeft">
          <h1>GoalBuddy</h1>
        </div>
        <div className="navRight">
          <h1>Icon</h1>
          <h1>Search Bar</h1>
          <div className="NavProfilePicture">
            <ProfilePicture/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
