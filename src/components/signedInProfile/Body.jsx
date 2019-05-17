import React from 'react';
import SideBar from './Sidebar';
import Feed from '../feed/Feed';

function Body(){
  return(
    <div className="bodyMain">
      <SideBar/>
      <Feed/>
    </div>
  );
}

export default Body;
