import React from 'react';
import PostTopRow from './PostTopRow';
import PostMenu from './PostMenu';
import PostBody from './PostBody';
import PostStatistics from './PostStatistics';
import PostFooter from './PostFooter';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";



function Post(prop){
  return(
    <div className="post">
      <h1>{prop.newPost}</h1>
    </div>
  )
}

Post.propTypes = {
  newPost: PropTypes.string
}
export default Post;
