import React from 'react';
import Requests from './Requests';
import ProfilePicture from './ProfilePicture';
import UserStats from './UserStats';

function SideBar(){
  return(
    <div className="sideBar">
      <div className="sideBarPicture">
        <ProfilePicture/>
      </div>
      <UserStats/>
    </div>
  )
}

export default SideBar;
