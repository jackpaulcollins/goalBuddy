import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function LiveFeed(props){

  return(
    <div className="liveFeed">
      {props.content.map((post, index)=>{
        return(
          <Post content={post.content} likes={post.likes} key={index}/>
        )
      })}
    </div>
  );
}

LiveFeed.propTypes = {
  content: PropTypes.array
}

export default LiveFeed;
