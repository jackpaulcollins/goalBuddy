import React from 'react';
import PostTopRow from './PostTopRow';
import PostMenu from './PostMenu';
import PostBody from './PostBody';
import PostStatistics from './PostStatistics';
import PostFooter from './PostFooter';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";
import Likes from './Likes';


function Post(props){
  return(
    <div className="post">
      <h1>{props.content}</h1>
      <Likes onNewLike={props.onNewLike} likes={props.likes}/>
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.string,
  onNewLike: PropTypes.func,
  likes: PropTypes.number
}
export default Post;
