import React from 'react'

const GoalDetail = ({goal}) => {
  return (
    <div className="card goal-summary">
      <div className="card-content">
        <span className="card-title ">{ goal.title }</span>
        <p>Posted by The Jack</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default GoalDetail;
