import React from 'react';
import styles from '../../scss/styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onNewLike} from '../../actions/postActions';
import moment from 'moment';

function Post(props){
  
  const { post } = props;


    return(
      <div className="container section post">
        <div className="card post-card">
          <span className="card-title"><h5>{post.authorFirstName} {post.authorLastName}</h5></span>
          <div className="card-content center">
            <p className="black-text">{post.content}</p>
          </div>
          <div className="card-action">
            <button className="waves-effect waves-light btn">LIKE</button>
            <p>likes: {post.likes}</p>
          </div>
          <div>
                <p className="grey-text center">{moment(post.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    );
  }


export default connect()(Post);
