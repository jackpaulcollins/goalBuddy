import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from "prop-types";

class Post extends React.Component{
  
  handleLike(){
    console.log(this.props)
      this.props.dispatch({ type: 'LIKE' });
    };
    
  render(props){
    return(
      <div className="post">
        <h1>{this.props.content}</h1>
        <div>
          <h2 onClick={this.handleLike}>LIKE</h2>
          <p>likes: {this.props.likes}</p>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  content: PropTypes.array,
}


export default Post;
