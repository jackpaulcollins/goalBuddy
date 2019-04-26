import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function LiveFeed(props){
  return(
    <div className="liveFeed">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
};

LiveFeed.propTypes = {
  postList: PropTypes.array
}
export default LiveFeed;
