import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ActiveGoalSummary(props){
  console.log(props.goal.authorId.uid)
  console.log(props.auth.uid)
  return(
    <div className="card">
      <h5>{props.goal.goal}</h5>
      <p>Created by {props.goal.authorFirstName}</p>
      {props.goal.authorId == props.auth.uid ? <p>Partnered With: {props.goal.buddies[1]}</p> : <p>Partnered With: {props.goal.buddies[0]}</p>}
      <p className="grey-text">{moment(props.goal.createdAt.toDate()).calendar()}</p>
    </div>
    )
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
