import React from 'react'
import GoalDetail from './GoalDetail'
import { Link } from  'react-router-dom'

const OpenGoals = ({goals}) => {
  return (
    <div>
      <h3>Looking for a Goal Buddy:</h3>
      {goals && goals.map(goal => {
        return (
            <Link to={'/goal/' + goal.id}><GoalDetail goal={goal} key={goal.id}/></Link>
        )
      })}
    </div>
  )
}

export default OpenGoals;
