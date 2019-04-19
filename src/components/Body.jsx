import React from 'react';
import SideBar from './Sidebar';
import Feed from './Feed';

function Body(){
  return(
    <div className="bodyMain">
      <p>Main Body</p>
      <SideBar/>
      <Feed/>
    </div>
  )
}

export default Body;
