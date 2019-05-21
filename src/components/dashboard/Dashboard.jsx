import React from 'react';
import OpenGoals from '../goals/OpenGoals';
import Feed from '../feed/Feed';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends React.Component{
  render(){

    const { goals, auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    return(
      <div>
        <h2 className="signedin-header">Welcome Back, Jack!</h2>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m3">
              <OpenGoals goals={goals}/>
            </div>
          <div className="col s12 m8 offset-m1">
            <Feed/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    goals: state.firestore.ordered.goals,
    auth: state.firebase.auth
  }
}

export default compose(
                        connect(mapStateToProps),
                        firestoreConnect([
                          { collection: 'goals' }
                        ])
                      )(Dashboard);
