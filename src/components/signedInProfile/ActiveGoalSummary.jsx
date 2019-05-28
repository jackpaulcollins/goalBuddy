import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ActiveGoalSummary(props){
  const { goal, goals, users, auth } = props;

  const store = users;
  function findUserName(user, store){
    return users[user].firstName
  }

  if(goal && users){
    const goalBuddyOne = goal.buddies[0]
    const goalBuddyTwo = goal.buddies[1]
  return(
    <div className="card">
      <h5>{goal.goal}</h5>
      <p>Created by {goal.authorId.uid == auth.uid ? <span>You</span> : <span>{goal.authorFirstName}</span>}</p>
      {goal.authorId.uid == auth.uid ? <p>Partnered With: {findUserName(goalBuddyTwo)}</p> : <p>Partnered With: {findUserName(goalBuddyOne)}</p>}
      <p className="grey-text">{moment(goal.createdAt.toDate()).calendar()}</p>
    </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading goals...</p>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      users: state.firestore.data.users,
      auth: state.firebase.auth
    }
  }

  export default compose(
                          connect(mapStateToProps),
                          firestoreConnect([
                              {collection: 'users'},
                          ])
                        )(ActiveGoalSummary);
