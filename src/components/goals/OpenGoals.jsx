import React from 'react'
import GoalSummary from './GoalSummary'

const OpenGoals = ({goals}) => {
  return (
    <div>
      <h3>Looking for a Goal Buddy:</h3>
      {goals && goals.map(goal => {
        return (
          <GoalSummary goal={goal} key={goal.id}/>
        )
      })}
    </div>
  )
}

export default OpenGoals;
