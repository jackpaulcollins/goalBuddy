import React from 'react';
import styles from '../scss/styles.scss';
import SubmitPost from './SubmitPost';
import PropTypes from "prop-types";


function NewPost(props){
  console.log(props)
  return(
    <div className='newPost'>
    <h1 onClick={props.onNewPost}>Click Me</h1>
      <input type='text'
              className='newPostInput'
              placeholder='Whats on your mind?'/>
              <SubmitPost onNewPost={props.onNewPost}/>
    </div>
  )
}

NewPost.propTypes = {
  onNewPost: PropTypes.func
}

export default NewPost;

