import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import styles from '../../scss/styles.scss';


function PartneredGoalDetail(props){
  const { goal, goals, users, auth } = props;

  console.log(users)


  const goalBuddyOne = goal.buddies[0]
  const goalBuddyTwo = goal.buddies[1]
  const signedInUser = auth.uid;
  const goalAuthor = goal.authorId.uid;

  const goalBuddyTwoName = function findPartneredUser(signedInUser, goalAuthor goalBuddyOne, goalBuddyTwo, users){
    if signedInUser = goalAuthor{
      users.find(function(goalBuddyTwo){
        return goalBuddyTwo.firstName
      } else {
        return null;
        }
      }

    console.log(goalBuddyTwoName)



  if (goal && users){
    return(
      <div>
        <h3>Your goal with {auth.uid = goal.authorId.uid ? <p>{goal.buddies[1]}</p> : <p>{goal.buddies[0]}</p>}</h3>
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
  console.log(users)
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
