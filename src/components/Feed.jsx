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
      userPosts: [],
      likes: 0
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
    console.log(this.state.likes)
    this.setState((state) => {
    return {likes: (state.likes + 1) };
  });
  }

    render(){
      return(
        <div className="feed">
            <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
            <LiveFeed newPost={this.state.userPosts} likes={this.state.likes} onNewLike={this.handleNewLike}/>
        </div>
      )
    }
};

export default Feed;


//currently all instanes of the Like component are sharing the state.likes counter, therefor they are all updating with the same count when "like" is clicked on one. I think this can be mitigated by having my handleNewLike function take in a unique post, and creating a new copy of state for it when the like button is clicked 
