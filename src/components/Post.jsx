import React from 'react';
import styles from '../scss/styles.scss';
import PropTypes from 'prop-types';

class Post extends React.Component{



  render(props){
    return(
      <div className="post">
        <h1></h1>
        <div>
          <h2>LIKE</h2>
          <p>likes:</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  content: PropTypes.string
}

export default Post;
