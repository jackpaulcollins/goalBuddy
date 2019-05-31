import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import styles from '../../scss/styles.scss';
import GoalProgressTracker from '../goals/GoalProgressTracker';


function PartneredGoalDetail(props){
  const { goal, goals, users, auth } = props;


  function findUserName(user){
    return users[user].firstName
  }

  if (goal && users){
    const goalBuddyOne = goal.buddies[0]
    const goalBuddyTwo = goal.buddies[1]
    console.log(goal)
    return(
      <div>
        <div className="container center">
          <div className="card">
            <h4>Your goal with {auth.uid == goal.authorId.uid ? <p>{findUserName(goalBuddyTwo)}</p> : <p>{findUserName(goalBuddyOne)}</p>}</h4>
            <p>Created: {moment(goal.createdAt.toDate()).calendar()}</p>
            <p>Title: {goal.title}</p>
            <p>Description: {goal.goal}</p>
            <p>Duration: </p>
          </div>
          <div>
        </div>
          <div className="container center">
            <GoalProgressTracker/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading goal...</p>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const goals = state.firestore.data.goals;
  const users = state.firestore.data.users;
  const goal = goals ? goals[id] : null;
  return {
    goal: goal,
    auth: state.firebase.auth,
    users: users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'goals'
  },
  {
    collection: 'users'
  }])
)(PartneredGoalDetail);
