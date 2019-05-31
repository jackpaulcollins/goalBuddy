import React from 'react';
import GoalProgressCell from './GoalProgressCell';
import styles from '../../scss/styles.scss';

function GoalProgressTracker(){
  return(
    <div>
      <h1>Goal Tracker</h1>
      <div className="progress-grid">
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
        <GoalProgressCell/>
      </div>
    </div>
  )
}

export default GoalProgressTracker;
