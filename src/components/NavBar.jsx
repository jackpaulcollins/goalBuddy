import React from 'react';
import styles from '../scss/styles.scss';
import ProfilePicture from './ProfilePicture';
import g from '../assets/images/g.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';



function NavBar(){

  return(
    <div>
      <AppBar position="static">
        <div className="navLeft">
          <Link to="/">HOME</Link>
        </div>
        <div className="navRight">
          <FontAwesomeIcon icon={faInbox} />
          <FontAwesomeIcon icon={faCog} />
          <input type='text'
            className='navBarSearch'
            placeholder='Search'/>
          <div className="NavProfilePicture">
            <Link to="/profile"><ProfilePicture/></Link>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default NavBar;
