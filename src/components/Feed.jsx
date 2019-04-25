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
  
  handleCreatingNewPost(){
    alert('the user just clicked submit');
  };
  
    render(){
      return(
        <div className="feed">
          <Switch>
            <Route render={()=><NewPost onNewPost={this.handleCreatingNewPost} />} />
            <LiveFeed/>
          </Switch>
        </div>
      )
    }
};

export default Feed;


