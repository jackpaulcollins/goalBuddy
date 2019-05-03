import React from 'react';
import styles from '../scss/styles.scss';
import ProfilePicture from './ProfilePicture';
import g from '../assets/images/g.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function NavBar(){

  return(
    <div>
      <nav className="nav">
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
      </nav>
    </div>
  )
}

export default NavBar;
