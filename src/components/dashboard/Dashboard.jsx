import React from 'react';
import Notifications from './Notifications'
import Feed from '../feed/Feed';


class Dashboard extends React.Component{
  render(){
    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Notifications/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Feed/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
