import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function LiveFeed(props){
  return(
    <div className="liveFeed">
      {props.newPost.map((post, index)=>
        <Post content={post.content}
              key={post.id}
              onNewLike={props.onNewLike}/>
            )}
    </div>
  )
};

LiveFeed.propTypes = {
  newPost: PropTypes.array,
  onNewLike: PropTypes.func
}
export default LiveFeed;
