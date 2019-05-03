import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Likes extends React.Component(){


  function handleNewLike(post){
    props.onNewLike();
  }

  render(){
    return(
      <p onClick={handleNewLike}>Like{props.likes}</p>
    )
  }
}

Likes.propTypes = {
  onNewLike: PropTypes.func,
  likes: PropTypes.number
}

const mapStateToProps = (state) =>({
  likes: state.likes
})

export default connect(mapStateToProps)(Likes);
