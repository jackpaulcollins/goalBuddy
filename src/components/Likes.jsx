import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Likes extends React.Component{
  
  
   
  handleLike(){
      this.props.dispatch({ type: 'LIKE' });
    };



  render(){
    return(
      <div>
        <h2 onClick={this.handleLike}>LIKE</h2>
        <p>likes: {this.props.likes}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) =>({
  likes: state.likes
});

export default connect(mapStateToProps)(Likes);
