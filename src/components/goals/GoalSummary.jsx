import React from 'react'

const ProjectSummary = ({goal}) => {
  return (
    <div className="card goal-summary">
      <div className="card-content">
        <span className="card-title ">{goal.title}</span>
        <p>{goal.authorFirstName} {goal.authorLastName}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary
