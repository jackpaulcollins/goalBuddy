import React from 'react';
import styles from '../scss/styles.scss';
import ProfilePicture from './ProfilePicture';
import g from '../assets/images/g.svg'

function NavBar(){

  return(
    <div>
      <nav className="nav">
        <div className="navLeft">
          <img className=
            "navLogo" src={g}/>
        </div>
        <div className="navRight">
            <FontAwesomeIcon icon="inbox" />
            <input type='text'
                    className='navBarSearch'
                    placeholder='Search'/>
          <div className="NavProfilePicture">
            <ProfilePicture/>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
