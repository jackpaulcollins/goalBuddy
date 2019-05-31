import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { partnerOnGoal } from '../../actions/goalActions';



function GoalDetail(props){

  const { goal, auth, users, partnerOnGoal, match} = props;

  function handleNewPartnership(goal, goalId, newPartner){
    props.partnerOnGoal(goal, goalId, newPartner)
    props.history.push('/profile');
  }




  if (!auth.uid) return <Redirect to='/signin' />
  if (goal){
    console.log(goal)
    return (
      <div className="container section goal-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title ">{ goal.title }</span>
            <p>{ goal.goal }</p>
            <p>Duration: {goal.duration}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Post by { goal.authorFirstName } { goal.authorLastName }</div>
            <p className="grey-text">{moment(goal.createdAt.toDate()).calendar()}</p>
            <button className="waves-effect waves-light btn" onClick={()=>{ handleNewPartnership(goal, match.params.id, auth.uid); }}>Partner with { goal.authorFirstName }!</button>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    partnerOnGoal: (goal, goalId, newPartner) => dispatch(partnerOnGoal(goal, goalId, newPartner))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([{
    collection: 'goals'
  },
  {
    collection: 'users'
  }])
)(GoalDetail);
