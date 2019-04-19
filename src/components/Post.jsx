import React from 'react';
import PostTopRow from './PostTopRow';
import PostMenu from './PostMenu';
import PostBody from './PostBody';
import PostStatistics from './PostStatistics';
import PostFooter from './PostFooter';
import styles from '../scss/styles.scss';

function Post(){
  return(
    <div className="post">
      <div>
        <PostTopRow
            image="blazers"
            username="Portland TrailBlazers"
            time="15 minutes ago"/>
      </div>
      <div className="postBody">
        <PostBody
          content="Blazers win!"/>
      </div>
      <div className="postStatistics">
        <PostStatistics/>
      </div>
      <div className="postFooter">
        <PostFooter/>
      </div>
    </div>
  )
}

export default Post;
