import React from 'react';
import styles from '../scss/styles.scss';
import SubmitPost from './SubmitPost'

function NewPost(){
  return(
    <div className='newPost'>
      <input type='text'
              className='newPostInput'
              placeholder='Whats on your mind?'/>
            <SubmitPost/>
    </div>
  )
}

export default NewPost;
