import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import styles from '../../scss/styles.scss';


function PartneredGoalDetail(props){
  const { goal, auth } = props;
  console.log(goal)
  if (goal){
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
  const goal = goals ? goals[id] : null;
  return {
    goal: goal,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'goals'
  }])
)(PartneredGoalDetail);
