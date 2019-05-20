import React from 'react';
import OpenGoals from '../goals/OpenGoals'
import Feed from '../feed/Feed';
import { connect } from 'react-redux'


class Dashboard extends React.Component{
  render(){

    const {goals} = this.props
    console.log(goals)

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m3">
            <OpenGoals goals={goals}/>
          </div>
          <div className="col s12 m8 offset-m1">
            <Feed/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goal.goals
  }
}

export default connect(mapStateToProps)(Dashboard);
