import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from 'prop-types';

function Post(props){


    return(
      <div className="post">
        <h1>{props.content}</h1>
        <div className="post-statistics">
          <p>LIKE</p>
          <p>likes: {props.likes}</p>
        </div>
      </div>
    );
  }

Post.propTypes = {
  content: PropTypes.string,
  likes: PropTypes.number
}

export default Post;
