import React from 'react';
import styles from '../../scss/styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {newLike} from '../../actions/postActions';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Post extends React.Component{


 handleNewLike(post){
    this.props.newLike(post);
  }

  render(){
    const { post, newLike } = this.props;
    return(
      <div className="container section post">
        <div className="card post-card">
          <span className="card-title"><h5>{post.authorFirstName} {post.authorLastName}</h5></span>
          <div className="card-content center">
            <p className="black-text">{post.content}</p>
          </div>
          <div className="card-action">
            <button className="waves-effect waves-light btn" onClick={()=>{ this.handleNewLike(post); }}>LIKE</button>
            <p><FontAwesomeIcon icon="heart" /> {post.likes}</p>
          </div>
          <div>
              <p className="grey-text center">{moment(post.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    );
  }
}

  const mapDispatchToProps = (dispatch) => {
    return{
      newLike: (post) => dispatch(newLike(post))
    }
  }

export default connect(null, mapDispatchToProps)(Post);
