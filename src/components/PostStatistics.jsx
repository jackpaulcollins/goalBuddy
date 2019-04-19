import React from 'react';
import PropTypes from "prop-types";

function PostStatistics(props){
  return(
    <div className="postStatistics">
      <div className="postStatisticsLeft">
        <p>{props.likes} likes</p>
      </div>
      <div className="postStatisticsRight">
        <p>{props.comments} comments</p>
        <p>{props.shares} shares</p>
      </div>
    </div>
  )
};

PostStatistics.PropTypes = {
  likes: PropTypes.number,
  comments: PropTypes.number,
  shares: PropTypes.number
}

export default PostStatistics;
