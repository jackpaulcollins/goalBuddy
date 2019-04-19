import React from 'react';
import PropTypes from "prop-types";

function PostBody(props){
  return(
    <div className="postBody">
      <h1>{props.content}</h1>
    </div>
  )
};

PostBody.PropTypes = {
  content: PropTypes.string
}

export default PostBody;
