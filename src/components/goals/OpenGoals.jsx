import React from 'react'
import GoalSummary from './GoalSummary'

const OpenGoals = ({goals}) => {
  return (
    <div>
      {goals && goals.map(goal => {
        return (
          <GoalSummary goal={goal} key={goal.id}/>
        )
      })}
    </div>
  )
}

export default OpenGoals;
