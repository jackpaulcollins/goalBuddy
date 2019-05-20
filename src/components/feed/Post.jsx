import React from 'react';
import styles from '../../scss/styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onNewLike} from '../../actions/postActions';

function Post(props){


  function handleLike(id) {
    const { dispatch } = props
    dispatch(onNewLike(id))
  }

    return(
      <div className="container section post">
        <div className="card post-card">
          <span className="card-title"><p>Post Author</p></span>
          <p>{props.content}</p>
          <div className="card-action">
            <button className="waves-effect waves-light btn" onClick={() => {handleLike(props.id)}}>LIKE</button>
            <p>likes: {props.likes}</p>
          </div>
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
