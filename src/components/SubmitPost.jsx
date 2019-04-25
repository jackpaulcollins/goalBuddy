import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";


function SubmitPost(props){
  return(
    <button onClick={props.onNewPost}>Submit</button>
  )
}

SubmitPost.propTypes = {
  onNewPost: PropTypes.func
}
export default SubmitPost;
