import React from 'react';
import Requests from './Requests';
import ProfilePicture from './ProfilePicture';

function SideBar(){
  return(
    <div className="sideBar">
      <ProfilePicture/>
      <Requests/>
    </div>
  )
}

export default SideBar;
