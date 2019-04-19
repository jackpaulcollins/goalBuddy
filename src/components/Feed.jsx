import React from 'react';
import NewPost from './NewPost';
import LiveFeed from './LiveFeed';
import styles from '../scss/styles.scss';

function Feed(){
  return(
    <div className="feed">
      <NewPost/>
      <LiveFeed/>
    </div>
  )
}

export default Feed;
