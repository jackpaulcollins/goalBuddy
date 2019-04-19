import React from 'react';
import styles from '../scss/styles.scss';

function NavBar(){
  return(
    <div>
      <nav className="nav">
        <div className="navLeft">
          <h1>GoalBuddy</h1>
        </div>
        <div className="navRight">
          <h1>Icon</h1>
          <h1>Icon</h1>
          <h1>Icon</h1>
          <h1>Search Bar</h1>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
