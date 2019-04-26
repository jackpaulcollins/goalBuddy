import React from 'react';
import PropTypes from "prop-types";

function Likes(props){
  
  function handleNewLike(){
    props.onNewLike();
  }
  
  return(
    <p onClick={handleNewLike}>Like</p>
  )
}

Likes.propTypes = {
  onNewLike: PropTypes.func
}
export default Likes;