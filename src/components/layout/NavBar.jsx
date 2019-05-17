import React from 'react';
import styles from '../scss/styles.scss';
import ProfilePicture from './ProfilePicture';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'



function NavBar(){

  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/profile" className="profile-picture"><ProfilePicture/></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
