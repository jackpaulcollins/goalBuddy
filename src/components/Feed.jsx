import React from 'react';
import NewPost from './NewPost';
import LiveFeed from './LiveFeed';
import styles from '../scss/styles.scss';
import { Switch, Route } from 'react-router-dom';
import Post from './Post';
import { connect } from 'react-redux';

class Feed extends React.Component{



  render(){
    return(
      <div className="feed">
          <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
          <LiveFeed posts={this.props.userPosts}/>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  userPosts: state.userPosts,
  likes: state.likes
})

export default connect(mapStateToProps)(Feed);

