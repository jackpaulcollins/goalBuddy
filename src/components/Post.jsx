import React from 'react';
import PostTopRow from './PostTopRow';
import PostMenu from './PostMenu';
import PostBody from './PostBody';
import PostStatistics from './PostStatistics';
import PostFooter from './PostFooter';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";



function Post(prop){
  console.log(prop)
  return(
    <div className="post">
      <h1>{prop.content}</h1>
      <p>Like</p>
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.string
}
export default Post;
