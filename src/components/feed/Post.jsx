import React from 'react';
import styles from '../../scss/styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onNewLike} from '../../actions/postActions';

function Post(props){
  
  const { post } = props;


    return(
      <div className="container section post">
        <div className="card post-card">
          <span className="card-title"><p>{post.firstName}</p></span>
          <p>{post.content}</p>
          <div className="card-action">
            <button className="waves-effect waves-light btn">LIKE</button>
            <p>likes: {post.likes}</p>
          </div>
        </div>
      </div>
    );
  }


export default connect()(Post);
