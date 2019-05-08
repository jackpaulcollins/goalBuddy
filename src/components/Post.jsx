import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onNewLike} from './../actions';

function Post(props){

  function doALike() {
    const { dispatch } = props
    dispatch(onNewLike())
  }

    return(
      <div className="post">
        <h1>{props.content}</h1>
        <div className="post-statistics">
          <p onClick={doALike}>LIKE</p>
          <p>likes: {props.likes}</p>
        </div>
      </div>
    );
  }

Post.propTypes = {
  content: PropTypes.string,
  likes: PropTypes.number,
  dispatch: PropTypes.func
}


export default connect()(Post);
