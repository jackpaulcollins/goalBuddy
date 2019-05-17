import React from 'react';
import profilepicture from '../assets/images/profilepicture.jpg';

function ProfilePicture(){
  return(
    <img className="profile-picture" src={profilepicture}></img>
  );
}

export default ProfilePicture;
