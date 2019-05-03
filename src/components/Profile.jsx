import React from 'react';
import NavBar from './NavBar'

function Profile(){
  return(
    <div>
      <NavBar/>
      <div>
        <nav><span>Goals</span> | <span>About</span> | <span>Photos</span></nav>
        <h1>Jack Collins</h1>
      </div>
      
    </div>
  )
}

export default Profile;