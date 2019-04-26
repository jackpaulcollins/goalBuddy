import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";
import { v4 } from 'uuid';


function NewPost(props){
  

  let _content = null;


  function handleNewPost(event) {
    event.preventDefault();
    console.log(_content.value)
    props.onNewPost({ content: _content.value, id: v4()});
  }
  
  return(
    <div className='newPost'>
      <h1>Create a Post</h1>
      <form onSubmit={handleNewPost}>
        <input type='text'
                id='content'
                className='newPostInput'
                placeholder='Whats on your mind?'
                ref={(input) => {_content = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

NewPost.propTypes = {
  onNewPost: PropTypes.func
}

export default NewPost;

