import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onNewLike} from './../actions';

function Post(props){
  
  console.log('outide doalike', props)
    
  function doALike(id) {
    console.log('inside doalike', id)
    const { dispatch } = props
    dispatch(onNewLike(id))
  }

    return(
      <div className="post">
        <h1>{props.content}</h1>
        <div className="post-statistics">
          <p onClick={() => {doALike(props.id)}}>LIKE</p>
          <p>likes: {props.likes}</p>
        </div>
      </div>
    );
  }

Post.propTypes = {
  content: PropTypes.string,
  likes: PropTypes.number,
  key: PropTypes.string,
  dispatch: PropTypes.func
}


export default connect()(Post);
