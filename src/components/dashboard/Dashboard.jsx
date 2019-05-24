import React from 'react';
import OpenGoals from '../goals/OpenGoals';
import Feed from '../feed/Feed';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends React.Component{
  render(){

    const { goals, auth, profile, posts } = this.props
    if (!auth.uid) return <Redirect to='/home' />

    return(
      <div>
        <h2 className="signedin-header">Welcome, {profile.firstName}!</h2>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m3">
              <OpenGoals goals={goals} currentUser={auth.uid}/>
            </div>
          <div className="col s12 m8 offset-m1">
            <Feed posts={posts}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
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

                            {collection: 'goals'},
                            {collection: 'posts'}

                        ])
                      )(Dashboard);
