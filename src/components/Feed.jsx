 import React from 'react';
import NewPost from './NewPost';
import LiveFeed from './LiveFeed';
import styles from '../scss/styles.scss';
import { Switch, Route } from 'react-router-dom';
import Post from './Post'

class Feed extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      userPosts: []
    };
    this.handleCreatingNewPost = this.handleCreatingNewPost.bind(this);
  };
  
  handleCreatingNewPost(post){
    let newMasterPostList = this.state.UserPosts.slice();
    newMasterPostList.push(post);
    this.setState({userPosts: newMasterPostList});
  };
  
    render(){
      return(
        <div className="feed">
          <Switch>
            <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
            <LiveFeed postList={this.state.userPosts}/>
            <Post newPost={this.state.UserPosts}/>
          </Switch>
        </div>
      )
    }
};

export default Feed;


