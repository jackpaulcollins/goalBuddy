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
    this.handleNewLike = this.handleNewLike.bind(this);
  };
  
  handleCreatingNewPost(post){
    console.log('check');
    let newMasterPostList = this.state.userPosts.slice();
    newMasterPostList.push(post);
    this.setState({userPosts: newMasterPostList});
    console.log(this.state)
  };
  
  handleNewLike(post){
    this.setState((state) => {
    return {likes: state.userPosts.likes + 1 };
  });
  }
  
    render(){
      return(
        <div className="feed">
            <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
            <LiveFeed newPost={this.state.userPosts} likes={this.state.userPosts.likes} onNewLike={this.handleNewLike}/>
        </div>
      )
    }
};

export default Feed;


