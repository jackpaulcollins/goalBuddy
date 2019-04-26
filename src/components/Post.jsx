import React from 'react';
import PostTopRow from './PostTopRow';
import PostMenu from './PostMenu';
import PostBody from './PostBody';
import PostStatistics from './PostStatistics';
import PostFooter from './PostFooter';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";
import Likes from './Likes';


function Post(prop){
  console.log(prop)
  return(
    <div className="post">
      <h1>{prop.content}</h1>
      <Likes/>
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.string
}
export default Post;
