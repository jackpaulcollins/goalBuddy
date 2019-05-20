import React from 'react';
import styles from '../../scss/styles.scss';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {connect} from 'react-redux';
import {onNewPost} from '../../actions';


function NewPost({dispatch}){


    let _content = null;
    let _user= null;

    function handleNewPost(e){
      e.preventDefault();
      //will need to add logic for getting uid from firebase
      let post = {content: _content.value, likes: 0, id: v4()}
      dispatch(onNewPost(post))
    }


  return(
    <div className='newPost'>
      <h5>Create a Post</h5>
      <form onSubmit={handleNewPost}>
        <textarea
          id='content'
          className='materialize-textarea'
          placeholder='Whats on your mind?'
          ref={(input) => {_content = input;}}>
        </textarea>
        <button className="waves-effect waves-light btn">Submit</button>
      </form>
    </div>
  );
}


export default connect()(NewPost);
