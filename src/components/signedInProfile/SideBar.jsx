import React from 'react';
import Requests from './Requests';
import ProfilePicture from '../ProfilePicture';
import UserStats from './UserStats';
import AboutUser from './AboutUser';
import {connect} from 'react-redux';

function SideBar(){


  return(
    <div className="sideBar">
      <div className="sideBarPicture">
        <ProfilePicture/>
      </div>
      <AboutUser/>
      <UserStats/>
    </div>
  );
}

export default connect()(SideBar);
