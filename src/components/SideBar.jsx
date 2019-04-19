import React from 'react';
import Requests from './Requests';
import ProfilePicture from './ProfilePicture';
import UserStats from './UserStats';

function SideBar(){
  return(
    <div className="sideBar">
      <ProfilePicture/>
      <Requests/>
      <UserStats/>
    </div>
  )
}

export default SideBar;
