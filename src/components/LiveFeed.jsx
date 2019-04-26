import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function LiveFeed(props){
  return(
    <div className="liveFeed">
      {props.newPost.map((post, index)=>
        <Post content={post.content}
              key={post.id}/>
            )}
    </div>
  )
};

LiveFeed.propTypes = {
  newPost: PropTypes.array
}
export default LiveFeed;
