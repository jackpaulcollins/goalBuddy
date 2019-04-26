import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";
import { v4 } from 'uuid';


function NewPost(props){
  
  function NewPostForm(props){
  let _content = null;
}

  function handleNewPost(event) {
    event.preventDefault();
    props.onNewPost({ content: _content.value });
  }
  
  return(
    <div className='newPost'>
      <h1>Create a Post</h1>
      <form onSubmit={handleNewPost}>
        <input type='text'
                id='content'
                className='newPostInput'
                placeholder='Whats on your mind?'
                ref={(input) => { _content = input, id: v4();}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

NewPost.propTypes = {
  onNewPost: PropTypes.func
}

export default NewPost;

