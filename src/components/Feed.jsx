import React from 'react';
import NewPost from './NewPost';
import LiveFeed from './LiveFeed';
import styles from '../scss/styles.scss';
import { Switch, Route } from 'react-router-dom';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Feed extends React.Component{



  render(props){
    return(
      <div className="feed">
        <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
        <LiveFeed content={this.props.userPosts}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userPosts: state.post.userPosts
});

export default connect(mapStateToProps)(Feed);
