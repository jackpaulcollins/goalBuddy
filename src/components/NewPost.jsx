import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {connect} from 'react-redux';
import {onNewPost} from './../actions';


function NewPost({dispatch}){


    let _content = null;

    function handleNewPost(e){
      e.preventDefault();
      let post = {content: _content.value, likes: 0}
      dispatch(onNewPost(post))
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
  );
}


export default connect()(NewPost);
