import React from 'react';
import PropTypes from "prop-types";

function Likes(props){
  
  console.log(props)
  
  function handleNewLike(){
    props.onNewLike();
  }
  
  return(
    <p onClick={handleNewLike}>Like{props.likes}</p>
  )
}

Likes.propTypes = {
  onNewLike: PropTypes.func
}
export default Likes;