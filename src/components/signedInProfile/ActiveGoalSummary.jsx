import React from 'react';
import moment from 'moment';

function ActiveGoalSummary(props){
  console.log(props)
  return(
    <div className="card">
      <h5>{props.goal.goal}</h5>
      <p>Created by {props.goal.authorFirstName}</p>
      <p className="grey-text">{moment(props.goal.createdAt.toDate()).calendar()}</p>
    </div>
    )
  }


export default ActiveGoalSummary;

