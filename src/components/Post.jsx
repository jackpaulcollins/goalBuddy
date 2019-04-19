import React from 'react';
import styles from '../scss/styles.scss';

function Post(){
  return(
    <div className="post">
      <div className="postTopRow">
        <PostTopRow/>
      </div>
      <div className="postUserInfo">
        <PostUser/>
      </div>
      <div className="postMenu">
        <PostMenu/>
      </div>
      <div className="postBody">
        <PostBody/>
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
