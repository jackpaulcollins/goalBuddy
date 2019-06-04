import React from 'react';
import GoalProgressCell from './GoalProgressCell';
import styles from '../../scss/styles.scss';


function GoalProgressTracker(props){

  let cells = [];
  let i;
  for(i = 0; i< props.goal.duration; i++){
    cells.push(<GoalProgressCell key={i}/>)
  }

  return(
    <div>
      <h1>Your Goal Progress</h1>
      <div className="progress-grid">
        {cells}
      </div>
    </div>
  )
}

export default GoalProgressTracker;
