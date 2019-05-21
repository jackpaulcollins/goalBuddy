import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const GoalDetail = (props) => {

  const { goal, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (goal){
    return (
      <div className="container section goal-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title ">{ goal.title }</span>
            <p>{ goal.goal }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Post by { goal.authorFirstName } { goal.authorLastName }</div>
            <p className="grey-text">{moment(goal.createdAt.toDate()).calendar()}</p>
            <button className="waves-effect waves-light btn">Partner with { goal.authorFirstName }!</button>
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
)(GoalDetail);
