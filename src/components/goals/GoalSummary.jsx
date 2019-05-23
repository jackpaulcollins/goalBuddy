import React from 'react';
import moment from 'moment';

const GoalSummary = ({goal}) => {
  return (
    <div className="card goal-summary">
      <div className="card-content">
        <span className="card-title ">{goal.title}</span>
        <p>{goal.authorFirstName} {goal.authorLastName}</p>
        <p className="grey-text">{moment(goal.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default GoalSummary
