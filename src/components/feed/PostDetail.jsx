import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import styles from '../../scss/styles.scss';


function PostDetail(props) {
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (post){
    return(
      <div className="container section post-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{post.authorFirstName}     {post.authorLastName}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action post-detail-foot">
            <button className="waves-effect waves-light btn">Like</button><p>{post.likes}</p>
          </div>
            <div>
              <p className="grey-text center">{moment(post.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading post...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'posts'
  }])
)(PostDetail);
