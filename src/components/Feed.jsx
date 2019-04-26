import React from 'react';
import NewPost from './NewPost';
import LiveFeed from './LiveFeed';
import styles from '../scss/styles.scss';
import { Switch, Route } from 'react-router-dom';

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
          </Switch>
        </div>
      )
    }
};

export default Feed;


