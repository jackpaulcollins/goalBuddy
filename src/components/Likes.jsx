import React from 'react';
import PropTypes from "prop-types";

function Likes(props){


  function handleNewLike(post){
    props.onNewLike();
  }

  return(
    <p onClick={handleNewLike}>Like{props.likes}</p>
  )
}

Likes.propTypes = {
  onNewLike: PropTypes.func,
  likes: PropTypes.number
}
export default Likes;
