import React from 'react';
import ActiveGoalSummary from './ActiveGoalSummary';
import { Link } from  'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ActiveGoalList(props){
  const { goals, auth, profile, posts } = props
  return(
    <div>
      {goals && goals.map(goal => {
        return (
            <Link to={'/goal/' + goal.id} key ={ goal.id }>
              <ActiveGoalSummary goal={goal}/>
            </Link>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    goals: state.firestore.ordered.goals,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    posts: state.firestore.ordered.posts
  }
}

export default compose(
                        connect(mapStateToProps),
                        firestoreConnect([
                            {collection: 'goals'}
                        ])
                      )(ActiveGoalList);

