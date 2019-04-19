import React from 'react';
import NewPost from './NewPost';
import LiveFeed from './LiveFeed';

function Feed(){
  return(
    <div>
      <NewPost/>
      <LiveFeed/>
    </div>
  )
}

export default Feed;
